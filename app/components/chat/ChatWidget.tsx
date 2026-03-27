"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    const currentInput = input.trim();
    setInput("");
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_PORTAL_API_URL || "https://api.iceworldteam.com";
      const res = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error("Chat API error");

      // Read streaming text
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
      };
      setMessages((prev) => [...prev, assistantMessage]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          assistantContent += chunk;
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMessage.id
                ? { ...m, content: assistantContent }
                : m
            )
          );
        }
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-all animate-bounce"
          aria-label="Open Chat"
        >
          <Bot className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col border border-gray-100 overflow-hidden"
          style={{ height: "500px", maxHeight: "80vh" }}
        >
          {/* Header */}
          <div className="bg-indigo-600 text-white p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6" />
                <div>
                  <h3 className="font-bold text-sm">ICE Assistant</h3>
                  <span className="text-xs text-indigo-200 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-indigo-200 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Embedded Social Channels */}
            <div className="flex gap-4 justify-center pt-2 border-t border-indigo-500/30">
              <a href="https://wa.me/573104994800?text=Hola,%20estoy%20interesado%20en%20los%20programas%20de%20ICE" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-100 transition-colors" title="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/icecolombia/" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-100 transition-colors" title="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.084 5.52.199 5.012.374a6.5 6.5 0 0 0-2.346 1.529 6.5 6.5 0 0 0-1.529 2.346C.862 4.757.747 5.331.711 6.278.676 7.226.662 7.633.662 11.254c0 3.621.014 4.028.049 4.976.036.947.151 1.521.326 2.029a6.5 6.5 0 0 0 1.529 2.346 6.5 6.5 0 0 0 2.346 1.529c.508.175 1.082.29 2.029.326.948.035 1.355.049 4.976.049 3.621 0 4.028-.014 4.976-.049.947-.036 1.521-.151 2.029-.326a6.5 6.5 0 0 0 2.346-1.529 6.5 6.5 0 0 0 1.529-2.346c.175-.508.29-1.082.326-2.029.035-.948.049-1.355.049-4.976 0-3.621-.014-4.028-.049-4.976-.036-.947-.151-1.521-.326-2.029a6.5 6.5 0 0 0-1.529-2.346A6.5 6.5 0 0 0 19.439.699C18.931.524 18.357.409 17.41.373 16.462.338 16.055.325 12.434.325L12.017 0zm0 2.165c3.557 0 3.983.016 5.38.072.918.042 1.416.196 1.748.327.44.171.754.375 1.084.705.33.33.534.644.705 1.084.131.332.285.83.327 1.748.056 1.397.072 1.823.072 5.38 0 3.557-.016 3.983-.072 5.38-.042.918-.196 1.416-.327 1.748-.171.44-.375.754-.705 1.084-.33.33-.644.534-1.084.705-.332.131-.83.285-1.748.327-1.397.056-1.823.072-5.38.072-3.557 0-3.983-.016-5.38-.072-.918-.042-1.416-.196-1.748-.327a2.92 2.92 0 0 1-1.084-.705 2.92 2.92 0 0 1-.705-1.084c-.131-.332-.285-.83-.327-1.748-.056-1.397-.072-1.823-.072-5.38 0-3.557.016-3.983.072-5.38.042-.918.196-1.416.327-1.748.171-.44.375-.754.705-1.084.33-.33.644-.534 1.084-.705.332-.131.83-.285 1.748-.327 1.397-.056 1.823-.072 5.38-.072z"/>
                  <path d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/ice.com.co/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors" title="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center text-gray-400 mt-10">
                <Bot className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                <p className="text-sm">
                  Hi! I&apos;m the ICE AI Agent. Ask me anything about our
                  programs or prices!
                </p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-indigo-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      message.role === "user"
                        ? "bg-indigo-600 text-white rounded-br-none"
                        : "bg-white border border-gray-100 text-gray-800 rounded-bl-none shadow-sm"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                  )}
                </div>
              ))
            )}

            {/* Typing indicator */}
            {isLoading &&
              messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-white border-t border-gray-100 flex gap-2"
          >
            <input
              type="text"
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0 shadow-sm"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
