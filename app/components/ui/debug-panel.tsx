// components/ui/debug-panel.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { toast } from '@/app/components/ui/use-toast';
import { requestManager } from '@/app/lib/request-manager';
import { Trash2, RefreshCw, Database, Network } from 'lucide-react';

export function DebugPanel() {
  const [isResetting, setIsResetting] = useState(false);
  const [requestStatus, setRequestStatus] = useState({ pending: 0, cached: 0 });

  // Update request status every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRequestStatus(requestManager.getStatus());
    }, 2000);
    
    // Initial status
    setRequestStatus(requestManager.getStatus());
    
    return () => clearInterval(interval);
  }, []);

  const handleResetCompletions = async () => {
    setIsResetting(true);
    try {
      const response = await fetch('/api/debug/reset-completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      const result = await response.json();

      if (response.ok) {
        // Clear request manager cache after reset
        requestManager.clearCache('completions');
        
        // Force a refresh of completion status by clearing the global cache
        // This will trigger the useCompletionStatus hook to refetch
        if (typeof window !== 'undefined' && window.localStorage) {
          window.dispatchEvent(new CustomEvent('completion-reset'));
        }
        
        toast({
          title: 'Debug: Completions Reset',
          description: result.message + ' - UI will update automatically.',
        });
        // No need to reload - the global completion status hook will update automatically
      } else {
        throw new Error(result.error || 'Failed to reset completions');
      }
    } catch (error: any) {
      console.error('Error resetting completions:', error);
      toast({
        title: 'Debug Error',
        description: error.message || 'Failed to reset completions',
        variant: 'destructive'
      });
    } finally {
      setIsResetting(false);
    }
  };

  const handleClearCache = () => {
    requestManager.clearCache();
    toast({
      title: 'Debug: Cache Cleared',
      description: 'All cached requests have been cleared.',
    });
  };

  const handleAbortRequests = () => {
    requestManager.abort();
    toast({
      title: 'Debug: Requests Aborted',
      description: 'All pending requests have been aborted.',
    });
  };

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <Card className="bg-red-900/20 border-red-500/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-red-300 text-sm">🐛 Debug Panel (Dev Only)</CardTitle>
        <CardDescription className="text-red-400 text-xs">
          Tools for testing task completion functionality
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Request Status Monitor */}
        <div className="flex items-center justify-between p-2 bg-slate-800/30 rounded border border-slate-600/30">
          <div className="flex items-center space-x-2">
            <Network className="h-3 w-3 text-blue-300" />
            <span className="text-xs text-slate-300">Requests</span>
          </div>
          <div className="text-xs text-blue-300">
            Pending: {requestStatus.pending} | Cached: {requestStatus.cached}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-1 gap-2">
          <Button 
            onClick={handleResetCompletions}
            disabled={isResetting}
            size="sm"
            className="bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 text-xs"
          >
            <Trash2 className="h-3 w-3 mr-1" />
            {isResetting ? 'Resetting...' : 'Reset Completions'}
          </Button>
          
          <div className="grid grid-cols-2 gap-2">
            <Button 
              onClick={handleClearCache}
              size="sm"
              variant="outline"
              className="text-xs border-orange-500/30 text-orange-300 hover:bg-orange-500/10"
            >
              <Database className="h-3 w-3 mr-1" />
              Clear Cache
            </Button>
            
            <Button 
              onClick={handleAbortRequests}
              size="sm"
              variant="outline"
              className="text-xs border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/10"
            >
              <RefreshCw className="h-3 w-3 mr-1" />
              Abort Requests
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
