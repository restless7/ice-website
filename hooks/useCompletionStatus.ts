// hooks/useCompletionStatus.ts
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { toast } from '@/app/components/ui/use-toast';
import { requestManager } from '@/app/lib/request-manager';

interface CompletionStatus {
  [key: string]: {
    completed: boolean;
    completedAt?: string;
    canComplete: boolean;
  };
}

// Global cache to share data between hook instances
let globalCache: {
  habitCompletions: CompletionStatus;
  taskCompletions: CompletionStatus;
  lastFetchTime: number;
  isLoading: boolean;
} = {
  habitCompletions: {},
  taskCompletions: {},
  lastFetchTime: 0,
  isLoading: false
};

// Global listeners for state updates
const globalListeners = new Set<() => void>();

// Global optimistic updates
let globalOptimisticUpdates = new Set<string>();

// Request deduplication
let globalFetchPromise: Promise<void> | null = null;

function notifyGlobalListeners() {
  globalListeners.forEach(listener => listener());
}

export function useCompletionStatus() {
  const [, setForceUpdate] = useState({});
  const [loading, setLoading] = useState(globalCache.isLoading);
  const forceUpdate = useCallback(() => setForceUpdate({}), []);
  const mounted = useRef(true);
  
  const fetchCompletionStatus = useCallback(async (force: boolean = false) => {
    const now = Date.now();
    const CACHE_DURATION = 30000; // 30 seconds
    
    // Don't fetch if we've fetched recently unless forced or if there's already a request in progress
    if (!force && (
      (now - globalCache.lastFetchTime < CACHE_DURATION) ||
      globalFetchPromise ||
      globalCache.isLoading
    )) {
      console.log('[useCompletionStatus] Skipping fetch - using cached data or request in progress');
      return;
    }
    
    // Create a shared promise to prevent duplicate requests
    if (!globalFetchPromise) {
      console.log('[useCompletionStatus] Starting fetch request...');
      globalCache.isLoading = true;
      setLoading(true);
      notifyGlobalListeners();
      
      globalFetchPromise = (async () => {
        try {
          const today = new Date().toISOString().split('T')[0];
          
          console.log('[useCompletionStatus] Fetching completion status from API...');
          const completionsResponse = await requestManager.fetch(
            `/api/completions?date=${today}`, 
            undefined, 
            CACHE_DURATION // Use the same cache duration as our hook-level cache
          );
          
          if (completionsResponse.ok) {
            const completionsData = await completionsResponse.json();
            
            // Check if this is fallback data by looking for fallback patterns
            const isFallbackData = Array.isArray(completionsData) && completionsData.some((completion: any) => 
              completion.id?.startsWith('completion-habit-') ||
              completion.userId === 'fallback-user-id' ||
              completion.habitId?.startsWith('habit-')
            );
            
            // If we have existing completion data and this is fallback data, don't overwrite
            if (isFallbackData && (Object.keys(globalCache.habitCompletions).length > 0 || Object.keys(globalCache.taskCompletions).length > 0)) {
              console.warn('[useCompletionStatus] Received fallback data - preserving existing completion state');
              return; // Don't update the cache with fallback data
            }
            
            const habitStatusMap: CompletionStatus = {};
            const taskStatusMap: CompletionStatus = {};
            
            completionsData.forEach((completion: any) => {
              // Handle habit completions
              if (completion.habitId) {
                habitStatusMap[completion.habitId] = {
                  completed: true,
                  completedAt: completion.completedAt,
                  canComplete: false
                };
              }
              // Handle task completions
              if (completion.categoryTaskId) {
                taskStatusMap[completion.categoryTaskId] = {
                  completed: true,
                  completedAt: completion.completedAt,
                  canComplete: false
                };
              }
            });
            
            // For non-fallback data, only update items that aren't currently in optimistic state
            const newHabitCompletions = { ...globalCache.habitCompletions };
            Object.keys(habitStatusMap).forEach(habitId => {
              if (!globalOptimisticUpdates.has(`habit-${habitId}`)) {
                newHabitCompletions[habitId] = habitStatusMap[habitId];
              }
            });
            
            // Preserve habits that were optimistically completed but aren't in server response (unless it's first load)
            Object.keys(globalCache.habitCompletions).forEach(habitId => {
              if (globalCache.habitCompletions[habitId].completed && 
                  !habitStatusMap[habitId] && 
                  !globalOptimisticUpdates.has(`habit-${habitId}`) &&
                  globalCache.lastFetchTime > 0) {
                // Keep the existing completion if this isn't the first load
                newHabitCompletions[habitId] = globalCache.habitCompletions[habitId];
              }
            });
            
            const newTaskCompletions = { ...globalCache.taskCompletions };
            Object.keys(taskStatusMap).forEach(taskId => {
              if (!globalOptimisticUpdates.has(`task-${taskId}`)) {
                newTaskCompletions[taskId] = taskStatusMap[taskId];
              }
            });
            
            // Preserve tasks that were optimistically completed but aren't in server response (unless it's first load)
            Object.keys(globalCache.taskCompletions).forEach(taskId => {
              if (globalCache.taskCompletions[taskId].completed && 
                  !taskStatusMap[taskId] && 
                  !globalOptimisticUpdates.has(`task-${taskId}`) &&
                  globalCache.lastFetchTime > 0) {
                // Keep the existing completion if this isn't the first load
                newTaskCompletions[taskId] = globalCache.taskCompletions[taskId];
              }
            });
            
            globalCache.habitCompletions = newHabitCompletions;
            globalCache.taskCompletions = newTaskCompletions;
            globalCache.lastFetchTime = now;
            
            console.log('[useCompletionStatus] Completion status updated from API:', {
              habits: Object.keys(habitStatusMap).length,
              tasks: Object.keys(taskStatusMap).length,
              fallbackData: isFallbackData
            });
          } else {
            console.warn('[useCompletionStatus] Failed to fetch completions:', completionsResponse.status);
          }

        } catch (error) {
          console.error('[useCompletionStatus] Error fetching completion status:', error);
          if (mounted.current) {
            toast({
              title: 'Error',
              description: 'Failed to load completion status.',
              variant: 'destructive'
            });
          }
        } finally {
          globalCache.isLoading = false;
          globalFetchPromise = null;
          setLoading(false);
          notifyGlobalListeners();
        }
      })();
    }
    
    return globalFetchPromise;
  }, []);

  // Subscribe to global updates
  useEffect(() => {
    const syncState = () => {
      setLoading(globalCache.isLoading);
      forceUpdate();
    };
    
    // Listen for completion reset events from debug panel
    const handleCompletionReset = () => {
      console.log('[useCompletionStatus] Completion reset event received, clearing cache and refetching');
      // Clear global cache
      globalCache.lastFetchTime = 0;
      globalCache.habitCompletions = {};
      globalCache.taskCompletions = {};
      globalOptimisticUpdates.clear();
      
      // Force refetch
      fetchCompletionStatus(true);
    };
    
    globalListeners.add(syncState);
    
    // Add event listener for completion resets
    if (typeof window !== 'undefined') {
      window.addEventListener('completion-reset', handleCompletionReset);
    }
    
    return () => {
      globalListeners.delete(syncState);
      mounted.current = false;
      if (typeof window !== 'undefined') {
        window.removeEventListener('completion-reset', handleCompletionReset);
      }
    };
  }, [forceUpdate, fetchCompletionStatus]);

  // Initial fetch on mount
  useEffect(() => {
    if (globalCache.lastFetchTime === 0 && !globalCache.isLoading && !globalFetchPromise) {
      fetchCompletionStatus();
    }
  }, [fetchCompletionStatus]);

  const updateHabitCompletion = useCallback((habitId: string, completed: boolean) => {
    globalCache.habitCompletions = {
      ...globalCache.habitCompletions,
      [habitId]: {
        completed,
        completedAt: completed ? new Date().toISOString() : undefined,
        canComplete: !completed
      }
    };
    
    // Track optimistic updates
    if (completed) {
      globalOptimisticUpdates.add(`habit-${habitId}`);
    } else {
      globalOptimisticUpdates.delete(`habit-${habitId}`);
    }
    
    notifyGlobalListeners();
  }, []);

  const updateTaskCompletion = useCallback((taskId: string, completed: boolean) => {
    console.log(`[useCompletionStatus] Optimistic update: Task ${taskId} -> ${completed}`);
    
    // Don't update if the state is already what we want
    if (globalCache.taskCompletions[taskId]?.completed === completed) {
      return;
    }
    
    // Update global cache
    globalCache.taskCompletions = {
      ...globalCache.taskCompletions,
      [taskId]: {
        completed,
        completedAt: completed ? new Date().toISOString() : globalCache.taskCompletions[taskId]?.completedAt,
        canComplete: !completed
      }
    };
    
    // Track optimistic update
    if (completed) {
      globalOptimisticUpdates.add(`task-${taskId}`);
    } else {
      globalOptimisticUpdates.delete(`task-${taskId}`);
    }
    
    notifyGlobalListeners();
  }, []);

  const isHabitCompleted = useCallback((habitId: string): boolean => {
    return globalCache.habitCompletions[habitId]?.completed || false;
  }, []);

  const isTaskCompleted = useCallback((taskId: string): boolean => {
    return globalCache.taskCompletions[taskId]?.completed || false;
  }, []);

  const canCompleteHabit = useCallback((habitId: string): boolean => {
    return globalCache.habitCompletions[habitId]?.canComplete !== false;
  }, []);

  const canCompleteTask = useCallback((taskId: string): boolean => {
    return globalCache.taskCompletions[taskId]?.canComplete !== false;
  }, []);

  const refreshCompletionStatus = useCallback((force: boolean = false) => {
    return fetchCompletionStatus(force);
  }, [fetchCompletionStatus]);
  
  const clearOptimisticUpdate = useCallback((id: string) => {
    console.log(`[useCompletionStatus] Clearing optimistic update for ${id}`);
    // Handle both task-{id} and habit-{id} formats, or direct id
    if (id.includes('-')) {
      globalOptimisticUpdates.delete(id);
    } else {
      // Clear both possible formats for backwards compatibility
      globalOptimisticUpdates.delete(`task-${id}`);
      globalOptimisticUpdates.delete(`habit-${id}`);
    }
    notifyGlobalListeners();
  }, []);

  return {
    habitCompletions: globalCache.habitCompletions,
    taskCompletions: globalCache.taskCompletions,
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
