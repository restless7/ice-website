// hooks/useCompletionStatus.ts
'use client';

import { useState, useEffect, useCallback } from 'react';
import { toast } from '@/app/components/ui/use-toast';

interface CompletionStatus {
  [key: string]: {
    completed: boolean;
    completedAt?: string;
    canComplete: boolean;
  };
}

export function useCompletionStatus() {
  const [habitCompletions, setHabitCompletions] = useState<CompletionStatus>({});
  const [taskCompletions, setTaskCompletions] = useState<CompletionStatus>({});
  const [loading, setLoading] = useState(true);
  const [optimisticUpdates, setOptimisticUpdates] = useState<Set<string>>(new Set());
  const [lastFetchTime, setLastFetchTime] = useState<number>(0);

  const fetchCompletionStatus = useCallback(async (force: boolean = false) => {
    const now = Date.now();
    const CACHE_DURATION = 30000; // 30 seconds
    
    // Don't fetch if we've fetched recently unless forced
    if (!force && (now - lastFetchTime < CACHE_DURATION)) {
      console.log('Skipping fetch - using cached completion status');
      return;
    }
    
    try {
      setLoading(true);
      const today = new Date().toISOString().split('T')[0];
      
      console.log('Fetching completion status from API...');
      // Fetch all completions (habits and tasks) for today
      const completionsResponse = await fetch(`/api/completions?date=${today}`);
      
      if (completionsResponse.ok) {
        const completionsData = await completionsResponse.json();
        const habitStatusMap: CompletionStatus = {};
        const taskStatusMap: CompletionStatus = {};
        
        completionsData.forEach((completion: any) => {
          // Handle habit completions
          if (completion.habitId) {
            habitStatusMap[completion.habitId] = {
              completed: true, // Daily completions are always completed
              completedAt: completion.completedAt,
              canComplete: false
            };
          }
          // Handle task completions
          if (completion.categoryTaskId) {
            taskStatusMap[completion.categoryTaskId] = {
              completed: true, // Daily completions are always completed
              completedAt: completion.completedAt,
              canComplete: false
            };
          }
        });
        
        // Preserve optimistic updates while merging server data
        setHabitCompletions(prev => {
          const merged = { ...prev };
          Object.keys(habitStatusMap).forEach(habitId => {
            // Only update from server if we don't have an optimistic update pending
            if (!optimisticUpdates.has(`habit-${habitId}`)) {
              merged[habitId] = habitStatusMap[habitId];
            }
          });
          return merged;
        });
        
        setTaskCompletions(prev => {
          const merged = { ...prev };
          Object.keys(taskStatusMap).forEach(taskId => {
            // Only update from server if we don't have an optimistic update pending
            if (!optimisticUpdates.has(`task-${taskId}`)) {
              merged[taskId] = taskStatusMap[taskId];
            }
          });
          return merged;
        });
        
        setLastFetchTime(now);
        console.log('Completion status updated from API');
      }

    } catch (error) {
      console.error('Error fetching completion status:', error);
      toast({
        title: 'Error',
        description: 'Failed to load completion status.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  }, [lastFetchTime, optimisticUpdates]);

  useEffect(() => {
    fetchCompletionStatus();
  }, [fetchCompletionStatus]);

  const updateHabitCompletion = useCallback((habitId: string, completed: boolean) => {
    setHabitCompletions(prev => ({
      ...prev,
      [habitId]: {
        completed,
        completedAt: completed ? new Date().toISOString() : undefined,
        canComplete: !completed
      }
    }));
  }, []);

  const updateTaskCompletion = useCallback((taskId: string, completed: boolean) => {
    console.log(`Optimistic update: Task ${taskId} -> ${completed}`);
    
    // Mark as optimistic update
    setOptimisticUpdates(prev => {
      const newSet = new Set(prev);
      if (completed) {
        newSet.add(`task-${taskId}`);
      } else {
        newSet.delete(`task-${taskId}`);
      }
      return newSet;
    });
    
    setTaskCompletions(prev => {
      // Don't update if the state is already what we want
      if (prev[taskId]?.completed === completed) {
        return prev;
      }
      
      return {
        ...prev,
        [taskId]: {
          completed,
          completedAt: completed ? new Date().toISOString() : prev[taskId]?.completedAt,
          canComplete: !completed
        }
      };
    });
  }, []);

  const isHabitCompleted = useCallback((habitId: string): boolean => {
    return habitCompletions[habitId]?.completed || false;
  }, [habitCompletions]);

  const isTaskCompleted = useCallback((taskId: string): boolean => {
    return taskCompletions[taskId]?.completed || false;
  }, [taskCompletions]);

  const canCompleteHabit = useCallback((habitId: string): boolean => {
    return habitCompletions[habitId]?.canComplete !== false;
  }, [habitCompletions]);

  const canCompleteTask = useCallback((taskId: string): boolean => {
    return taskCompletions[taskId]?.canComplete !== false;
  }, [taskCompletions]);

  const refreshCompletionStatus = useCallback((force: boolean = false) => {
    fetchCompletionStatus(force);
  }, [fetchCompletionStatus]);
  
  const clearOptimisticUpdate = useCallback((taskId: string) => {
    console.log(`Clearing optimistic update for task ${taskId}`);
    setOptimisticUpdates(prev => {
      const newSet = new Set(prev);
      newSet.delete(`task-${taskId}`);
      return newSet;
    });
  }, []);

  return {
    habitCompletions,
    taskCompletions,
    loading,
    updateHabitCompletion,
    updateTaskCompletion,
    isHabitCompleted,
    isTaskCompleted,
    canCompleteHabit,
    canCompleteTask,
    refreshCompletionStatus,
    clearOptimisticUpdate
  };
}
