// components/ui/task-completion-button.tsx
'use client';

import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Check } from 'lucide-react';
import { useCompletionStatus } from '@/hooks/useCompletionStatus';

interface TaskCompletionButtonProps {
  taskId: string;
  onClick: (e: React.MouseEvent) => Promise<void> | void;
}

export function TaskCompletionButton({ taskId, onClick }: TaskCompletionButtonProps) {
  const { isTaskCompleted, canCompleteTask, updateTaskCompletion, refreshCompletionStatus, clearOptimisticUpdate, loading } = useCompletionStatus();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const completed = isTaskCompleted(taskId);
  const canComplete = canCompleteTask(taskId);
  
  // Show loading state during initial fetch
  if (loading) {
    return (
      <Button
        size="sm"
        disabled
        className="bg-gray-500/10 text-gray-500 border border-gray-500/20 cursor-not-allowed text-xs px-2 py-1 animate-pulse"
      >
        Loading...
      </Button>
    );
  }

  const handleClick = async (e: React.MouseEvent) => {
    if (isSubmitting || completed) return;
    
    setIsSubmitting(true);
    
    try {
      // Update the completion status locally first (optimistic)
      updateTaskCompletion(taskId, true);
      
      // Call the original onClick handler (this makes the API call)
      await onClick(e);
      
      // Clear the optimistic update after successful completion
      // Don't force refresh immediately - let natural refresh cycle handle it
      setTimeout(() => {
        clearOptimisticUpdate(taskId);
        // Only refresh if we haven't refreshed recently to avoid fallback data conflicts
        refreshCompletionStatus(false); // Don't force - use cache-aware refresh
      }, 1000);
      
    } catch (error: unknown) {
      console.error(`[TaskCompletionButton] Error completing task ${taskId}:`, error);
      
      const message = error instanceof Error ? error.message : String(error);
      // Check if this is an "already completed" error
      if (message.includes('already completed')) {
        // Don't revert optimistic update for "already completed" errors
        clearOptimisticUpdate(taskId);
        refreshCompletionStatus(true);
      } else {
        // For other errors, revert the optimistic update
        updateTaskCompletion(taskId, false);
        clearOptimisticUpdate(taskId);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (completed) {
    return (
      <Button
        size="sm"
        disabled
        className="bg-green-500/20 text-green-300 border border-green-500/30 cursor-not-allowed text-xs px-2 py-1"
      >
        <Check className="h-3 w-3 mr-1" />
        Completed
      </Button>
    );
  }

  if (!canComplete && !completed) {
    return (
      <Button
        size="sm"
        disabled
        className="bg-gray-500/20 text-gray-400 border border-gray-500/30 cursor-not-allowed text-xs px-2 py-1"
      >
        Already Done Today
      </Button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      size="sm"
      disabled={isSubmitting}
      className={`${isSubmitting ? 'bg-yellow-500/20 text-yellow-300' : 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-300'} border border-blue-500/30 hover:scale-105 transition-all duration-200 text-xs px-2 py-1`}
    >
      {isSubmitting ? 'Completing...' : 'Complete'}
    </Button>
  );
}
