// components/ui/habit-completion-button.tsx
'use client';

import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Check } from 'lucide-react';
import { useCompletionStatus } from '@/hooks/useCompletionStatus';

interface HabitCompletionButtonProps {
  habitId: string;
  onClick: (e: React.MouseEvent, habitId: string) => Promise<void> | void;
}

export function HabitCompletionButton({ habitId, onClick }: HabitCompletionButtonProps) {
  const { isHabitCompleted, canCompleteHabit, updateHabitCompletion, refreshCompletionStatus, clearOptimisticUpdate, loading } = useCompletionStatus();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const completed = isHabitCompleted(habitId);
  const canComplete = canCompleteHabit(habitId);
  
  // Show loading state during initial fetch
  if (loading) {
    return (
      <Button
        size="sm"
        disabled
        className="bg-gray-500/10 text-gray-500 border border-gray-500/20 cursor-not-allowed text-xs px-3 py-2 min-w-[90px] animate-pulse"
      >
        Loading...
      </Button>
    );
  }

  const handleClick = async (e: React.MouseEvent) => {
    if (isSubmitting || completed) return;
    
    setIsSubmitting(true);
    
    try {
      console.log(`[HabitCompletionButton] Starting completion for habit ${habitId}`);
      
      // Update the completion status locally first (optimistic)
      updateHabitCompletion(habitId, true);
      
      // Call the original onClick handler (this makes the API call)
      await onClick(e, habitId);
      
      console.log(`[HabitCompletionButton] Habit ${habitId} completed successfully`);
      
      // Clear the optimistic update after successful completion
      // Don't force refresh immediately - let natural refresh cycle handle it
      setTimeout(() => {
        console.log(`[HabitCompletionButton] Clearing optimistic update for habit ${habitId}`);
        clearOptimisticUpdate(habitId);
        // Only refresh if we haven't refreshed recently to avoid fallback data conflicts
        refreshCompletionStatus(false); // Don't force - use cache-aware refresh
      }, 1000);
      
    } catch (error: any) {
      console.error(`[HabitCompletionButton] Error completing habit ${habitId}:`, error);
      
      // Check if this is an "already completed" error
      if (error.message?.includes('already completed') || 
          (typeof error === 'string' && error.includes('already completed'))) {
        console.log(`[HabitCompletionButton] Habit ${habitId} was already completed, keeping optimistic state`);
        // Don't revert optimistic update for "already completed" errors
        clearOptimisticUpdate(habitId);
        refreshCompletionStatus(true);
      } else {
        // For other errors, revert the optimistic update
        console.log(`[HabitCompletionButton] Reverting optimistic update for habit ${habitId}`);
        updateHabitCompletion(habitId, false);
        clearOptimisticUpdate(habitId);
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
        className="bg-green-500/20 text-green-300 border border-green-500/30 cursor-not-allowed text-xs px-3 py-2 min-w-[90px]"
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
        className="bg-gray-500/20 text-gray-400 border border-gray-500/30 cursor-not-allowed text-xs px-3 py-2 min-w-[90px]"
      >
        Done Today
      </Button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      size="sm"
      disabled={isSubmitting}
      className={`${
        isSubmitting 
          ? 'bg-yellow-500/20 text-yellow-300' 
          : 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-300'
      } border border-blue-500/30 hover:scale-105 transition-all duration-200 text-xs px-3 py-2 min-w-[90px]`}
    >
      {isSubmitting ? 'Completing...' : 'Complete'}
    </Button>
  );
}
