"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  MicOff, 
  Phone, 
  PhoneOff, 
  Volume2, 
  VolumeX,
  Heart,
  User,
  Loader2,
  AlertCircle
} from 'lucide-react';

interface Message {
  id: number;
  sender: 'user' | 'bella';
  text?: string;
  type: 'text' | 'voice' | 'system';
  timestamp: string;
}

interface RealTimeVoiceChatProps {
  onClose?: () => void;
}

interface ApiResponse {
  success: boolean;
  agentId?: string;
  conversationId?: string;
  websocketUrl?: string;
  message?: string;
  error?: string;
  demoMode?: boolean;
  timestamp?: string;
}

export default function RealTimeVoiceChat({ onClose }: RealTimeVoiceChatProps) {
  // Connection state
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  
  // Voice state
  const [isTalking, setIsTalking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  // Conversation state
  const [messages, setMessages] = useState<Message[]>([]);
  const [bellaAgentId, setBellaAgentId] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [isDemoMode, setIsDemoMode] = useState(false);
  
  // WebRTC and audio references
  const wsRef = useRef<WebSocket | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const audioDestinationRef = useRef<MediaStreamAudioDestinationNode | null>(null);
  
  // Initialize conversation
  useEffect(() => {
    initializeBellaConversation();
    return () => {
      cleanup();
    };
  }, []);
  
  const cleanup = () => {
    if (wsRef.current) {
      wsRef.current.close();
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
  };
  
  const initializeBellaConversation = async () => {
    try {
      setIsConnecting(true);
      setConnectionError(null);
      
      // Step 1: Setup Bella agent
      console.log('Setting up Bella agent...');
      const setupResponse = await fetch('/api/ai-agent/voice-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'setup-agent' })
      });
      
      const setupData = await setupResponse.json();
      if (!setupData.success) {
        throw new Error(setupData.error || 'Failed to setup Bella agent');
      }
      
      setBellaAgentId(setupData.agentId);
      
      // Check if we're running in demo mode
      if (setupData.demoMode) {
        setIsDemoMode(true);
        addSystemMessage("🚀 Demo Mode: ElevenLabs API key required for real-time voice conversation.");
        addSystemMessage("To enable real voice chat, set the ELEVENLABS_API_KEY environment variable.");
        return; // Skip WebSocket connection in demo mode
      }
      
      // Step 2: Start conversation session
      console.log('Starting conversation with Bella...');
      const conversationResponse = await fetch('/api/ai-agent/voice-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          action: 'start-conversation',
          agentId: setupData.agentId
        })
      });
      
      const conversationData = await conversationResponse.json();
      if (!conversationData.success) {
        throw new Error(conversationData.error || 'Failed to start conversation');
      }
      
      setConversationId(conversationData.conversationId);
      
      // Step 3: Connect to WebSocket for real-time voice
      await connectToVoiceWebSocket(conversationData.websocketUrl);
      
      addSystemMessage("Bella is ready to talk! Click the microphone to start the conversation.");
      
    } catch (error) {
      console.error('Error initializing Bella conversation:', error);
      setConnectionError(error instanceof Error ? error.message : 'Failed to initialize conversation');
      addSystemMessage("Sorry, I couldn't connect to Bella right now. Please try again.");
    } finally {
      setIsConnecting(false);
    }
  };
  
  const connectToVoiceWebSocket = async (websocketUrl: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      try {
        // Add authentication to WebSocket URL
        const authenticatedUrl = `${websocketUrl}&xi-api-key=${process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY || 'sk_37cb5d2db1355aacb1a516eaa899c5d3773c1c32d621e053'}`;
        
        const ws = new WebSocket(authenticatedUrl);
        wsRef.current = ws;
        
        ws.onopen = () => {
          console.log('Connected to Bella\'s voice WebSocket');
          setIsConnected(true);
          setConnectionError(null);
          resolve();
        };
        
        ws.onmessage = (event) => {
          handleWebSocketMessage(event);
        };
        
        ws.onerror = (error) => {
          console.error('WebSocket error:', error);
          setConnectionError('Voice connection failed');
          reject(new Error('WebSocket connection failed'));
        };
        
        ws.onclose = (event) => {
          console.log('WebSocket closed:', event.code, event.reason);
          setIsConnected(false);
          if (!event.wasClean) {
            setConnectionError('Connection lost unexpectedly');
          }
        };
        
      } catch (error) {
        reject(error);
      }
    });
  };
  
  const handleWebSocketMessage = (event: MessageEvent) => {
    try {
      const data = JSON.parse(event.data);
      console.log('WebSocket message:', data);
      
      switch (data.type) {
        case 'conversation_initiation_metadata':
          console.log('Conversation initiated');
          break;
          
        case 'agent_response':
          if (data.agent_response_audio_delta) {
            // Handle streaming audio from Bella
            playAudioDelta(data.agent_response_audio_delta);
          }
          if (data.agent_response) {
            // Handle text response from Bella
            addBellaMessage(data.agent_response);
          }
          break;
          
        case 'user_transcript':
          // Handle user speech transcript
          if (data.user_transcript) {
            addUserMessage(data.user_transcript);
          }
          break;
          
        case 'interruption':
          console.log('Conversation interrupted');
          setIsTalking(false);
          break;
          
        default:
          console.log('Unknown message type:', data.type);
      }
    } catch (error) {
      console.error('Error handling WebSocket message:', error);
    }
  };
  
  const playAudioDelta = async (audioDelta: string) => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const audioContext = audioContextRef.current;
      if (audioContext.state === 'suspended') {
        await audioContext.resume();
      }
      
      // Decode base64 audio data
      const audioData = Uint8Array.from(atob(audioDelta), c => c.charCodeAt(0));
      const audioBuffer = await audioContext.decodeAudioData(audioData.buffer);
      
      // Play audio
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start();
      
      setIsTalking(true);
      source.onended = () => {
        setIsTalking(false);
      };
      
    } catch (error) {
      console.error('Error playing audio delta:', error);
    }
  };
  
  const startListening = async () => {
    try {
      if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
        throw new Error('Not connected to Bella');
      }
      
      // Get microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          sampleRate: 16000,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        } 
      });
      
      mediaStreamRef.current = stream;
      
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const audioContext = audioContextRef.current;
      const source = audioContext.createMediaStreamSource(stream);
      
      // Create audio processor for real-time streaming
      const processor = audioContext.createScriptProcessor(4096, 1, 1);
      
      processor.onaudioprocess = (event) => {
        if (!isMuted && wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
          const inputData = event.inputBuffer.getChannelData(0);
          
          // Convert Float32Array to PCM16
          const pcm16 = new Int16Array(inputData.length);
          for (let i = 0; i < inputData.length; i++) {
            pcm16[i] = Math.max(-32768, Math.min(32767, Math.floor(inputData[i] * 32768)));
          }
          
          // Send audio data to WebSocket
          const uint8Array = new Uint8Array(pcm16.buffer);
          const charArray = Array.from(uint8Array, byte => String.fromCharCode(byte));
          wsRef.current.send(JSON.stringify({
            user_audio_delta: btoa(charArray.join(''))
          }));
        }
      };
      
      source.connect(processor);
      processor.connect(audioContext.destination);
      
      setIsListening(true);
      addSystemMessage("Listening... Start talking to Bella!");
      
    } catch (error) {
      console.error('Error starting to listen:', error);
      setConnectionError('Could not access microphone');
      addSystemMessage("Could not access microphone. Please check your permissions.");
    }
  };
  
  const stopListening = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    
    setIsListening(false);
    addSystemMessage("Stopped listening.");
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  const addSystemMessage = (text: string) => {
    const message: Message = {
      id: Date.now(),
      sender: 'bella',
      text,
      type: 'system',
      timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, message]);
  };
  
  const addUserMessage = (text: string) => {
    const message: Message = {
      id: Date.now(),
      sender: 'user',
      text,
      type: 'voice',
      timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, message]);
  };
  
  const addBellaMessage = (text: string) => {
    const message: Message = {
      id: Date.now(),
      sender: 'bella',
      text,
      type: 'voice',
      timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, message]);
  };
  
  return (
    <div className="h-full flex flex-col bg-white rounded-lg border border-gray-200">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white ${isTalking ? 'animate-pulse' : ''}`}>
            <Heart className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Bella - Real-Time Voice Chat
            </h3>
            <p className="text-sm text-gray-500">
              {isConnecting ? 'Connecting...' : 
               isConnected ? (isListening ? 'Listening...' : 'Connected') : 
               'Disconnected'}
            </p>
          </div>
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <PhoneOff className="h-4 w-4" />
          </button>
        )}
      </div>
      
      {/* Connection Error */}
      {connectionError && (
        <div className="p-4 bg-red-50 border-b border-red-200">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <span className="text-sm text-red-700">{connectionError}</span>
          </div>
        </div>
      )}
      
      {/* Messages */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        {messages.length === 0 && !isConnecting && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white mx-auto mb-4">
              <Heart className="h-8 w-8" />
            </div>
            <p className="text-gray-500 mb-2">Real-time voice chat with Bella 🎙️</p>
            <p className="text-sm text-gray-400">Click the microphone to start talking with your AI companion</p>
          </div>
        )}
        
        {isConnecting && (
          <div className="text-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-pink-500 mx-auto mb-2" />
            <p className="text-gray-500">Setting up conversation with Bella...</p>
          </div>
        )}
        
        {messages.map((message) => (
          <div key={message.id} className={`flex items-start space-x-3 ${message.sender === 'user' ? 'justify-end' : ''}`}>
            {message.sender === 'bella' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white">
                <Heart className="h-5 w-5" />
              </div>
            )}
            <div className={`max-w-md p-3 rounded-lg ${
              message.sender === 'user' 
                ? 'bg-gray-200 text-gray-900' 
                : message.type === 'system'
                ? 'bg-blue-100 text-blue-900'
                : 'bg-gradient-to-r from-pink-100 to-red-100 text-pink-900'
            }`}>
              <p>{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-gray-500 text-right' : 
                message.type === 'system' ? 'text-blue-500' : 'text-pink-500'
              }`}>{message.timestamp}</p>
            </div>
            {message.sender === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white">
                <User className="h-5 w-5" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Voice Controls */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-4">
          {/* Mute Toggle */}
          <button
            onClick={toggleMute}
            disabled={!isListening}
            className={`p-3 rounded-full transition-colors ${
              isMuted 
                ? 'bg-gray-500 text-white' 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            } disabled:opacity-50`}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
          
          {/* Main Voice Button */}
          <button
            onClick={isListening ? stopListening : startListening}
            disabled={isConnecting || !isConnected}
            className={`p-4 rounded-full transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
              isListening
                ? 'bg-red-500 text-white shadow-lg animate-pulse'
                : 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg hover:shadow-xl'
            }`}
          >
            {isListening ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
          </button>
          
          {/* Connection Status */}
          <div className={`p-3 rounded-full ${
            isConnected ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
          }`}>
            {isConnected ? <Phone className="h-5 w-5" /> : <PhoneOff className="h-5 w-5" />}
          </div>
        </div>
        
        <div className="text-center mt-3">
          <p className="text-sm text-gray-600">
            {isListening 
              ? "🎙️ Listening - Talk to Bella now!" 
              : isConnected 
              ? "Click the microphone to start talking"
              : "Connecting to Bella..."}
          </p>
        </div>
      </div>
    </div>
  );
}
