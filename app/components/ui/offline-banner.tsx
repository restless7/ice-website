// components/ui/offline-banner.tsx
'use client';

import { useState, useEffect } from 'react';
import { CloudOff, RefreshCw } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface OfflineBannerProps {
  onRetry?: () => void;
  usingFallback: boolean;
  className?: string; // Added this property
}


export function OfflineBanner({ onRetry, usingFallback, className }: OfflineBannerProps) {
  const [isOffline, setIsOffline] = useState(false);
  
  useEffect(() => {
    const checkOnlineStatus = () => {
      setIsOffline(!navigator.onLine);
    };
    
    // Check initial online status
    checkOnlineStatus();
    
    // Listen for online/offline events
    window.addEventListener('online', checkOnlineStatus);
    window.addEventListener('offline', checkOnlineStatus);
    
    return () => {
      window.removeEventListener('online', checkOnlineStatus);
      window.removeEventListener('offline', checkOnlineStatus);
    };
  }, []);
  
  // Don't render anything if online and not using fallback data
  if (!isOffline && !usingFallback) return null;
  
  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-amber-50 text-amber-900 border-t border-amber-200 p-2 z-50 shadow-md ${className || ''}`}>
      
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CloudOff className="h-5 w-5" />
          <span className="text-sm font-medium">
            {isOffline 
              ? "You're currently offline. Using sample data."
              : "Using sample data due to server connection issues."}
          </span>
        </div>
        {onRetry && (
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-amber-100 hover:bg-amber-200 border-amber-300"
            onClick={onRetry}
            disabled={isOffline}
          >
            {/* FIX: Envuelve el ícono y el texto en un Fragmento */}
            <>
              <RefreshCw className="h-4 w-4 mr-1" />
              Try reconnecting
            </>
          </Button>
        )}
      </div>
    </div>
  );
}