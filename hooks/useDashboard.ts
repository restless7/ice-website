// hooks/useDashboard.ts
'use client';

import { useState, useEffect, useCallback } from 'react';
import type { DailyHabit, LifeCategory, CategoryTask, StreakInfo } from '@/types/habit';
import { toast } from '@/app/components/ui/use-toast';
import { fallbackCategories, fallbackHabits, generateTodayCompletions } from '@/app/lib/fallback-data';

type TimeOfDay = 'Early morning' | 'Working hours' | 'Lunch' | 'Evening' | 'Night';

export function useDashboard() {
  // --- STATE MANAGEMENT ---
  const [categories, setCategories] = useState<LifeCategory[]>([]);
  const [habits, setHabits] = useState<DailyHabit[]>([]);
  const [completedHabits, setCompletedHabits] = useState(0);
  const [todaysPoints, setTodaysPoints] = useState(0);
  const [showInitializer, setShowInitializer] = useState(false);
  const [initializing, setInitializing] = useState(false);
  const [streakInfo, setStreakInfo] = useState<StreakInfo>({
    currentStreak: 0,
    longestStreak: 0,
    streakMultiplier: 1.0,
    nextMilestone: 7,
    daysUntilMilestone: 7,
    streakProtections: 0,
    isInGracePeriod: false,
    gracePeriodEndsAt: null,
    streakLevel: 'none'
  });
  const [loading, setLoading] = useState({
    categories: true,
    habits: true,
    completions: true,
  });
  const [taskModal, setTaskModal] = useState({ 
    isOpen: false, 
    categoryId: '', 
    points: 10, 
    mode: 'add' as 'add' | 'edit',
    editTask: null as any | null
  });
  const [levelUpAnimation, setLevelUpAnimation] = useState({ isVisible: false, level: 1, categoryName: '' });
  const [categoryModal, setCategoryModal] = useState(false);
  const [addHabitModal, setAddHabitModal] = useState<{ isOpen: boolean; timeOfDay: TimeOfDay | '' }>({ isOpen: false, timeOfDay: '' });
  const [usingFallbackData, setUsingFallbackData] = useState(false);

  // --- DATA FETCHING & CRUD ---
  
  // CATEGORIES
  const fetchCategories = useCallback(async () => {
    // ... (Tu código de fetchCategories)
    try {
      setLoading(prev => ({ ...prev, categories: true }));
      const response = await fetch('/api/categories');
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      setCategories(data);
      setUsingFallbackData(false);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setCategories(fallbackCategories.map(category => ({ ...category, description: category.description ?? '', createdAt: new Date(category.createdAt).toISOString(), updatedAt: new Date(category.updatedAt).toISOString(), tasks: category.tasks?.map(task => ({ ...task, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() })) || [] })));
      setUsingFallbackData(true);
      toast({ title: 'Using sample data', description: 'Could not connect to the database. Using offline mode.', variant: 'default' });
    } finally {
      setLoading(prev => ({ ...prev, categories: false }));
    }
  }, []);

   const handleEditTask = async (categoryId: string, taskId: string, updates: Partial<CategoryTask>) => {
    const updatesWithTimestamp = { ...updates, updatedAt: new Date().toISOString() };
    const localUpdate = (cats: LifeCategory[]) => cats.map(cat => {
      if (cat.id === categoryId && cat.tasks) {
        return { ...cat, tasks: cat.tasks.map(t => t.id === taskId ? { ...t, ...updatesWithTimestamp } : t) };
      }
      return cat;
    });
    setCategories(localUpdate);
    if (usingFallbackData) return;
    try {
      await fetch(`/api/tasks/${taskId}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(updatesWithTimestamp) });
    } catch (error) {
      console.error('Failed to update task on server:', error);
    }
  };

  const fetchHabits = useCallback(async () => {
    try {
      setLoading(prev => ({ ...prev, habits: true }));
      const response = await fetch('/api/habits');
      const minLoadingTime = new Promise(resolve => setTimeout(resolve, 300));
      if (!response.ok) throw new Error('Failed to fetch habits');
      const data = await response.json();
      await minLoadingTime;
      setHabits(data);
      setUsingFallbackData(false);
    } catch (error) {
      console.error('Error fetching habits:', error);
      setHabits(fallbackHabits as DailyHabit[]);
      setUsingFallbackData(true);
      toast({ title: 'Using sample data', description: 'Could not connect to the database. Using offline mode.', variant: 'default' });
    } finally {
      setLoading(prev => ({ ...prev, habits: false }));
    }
  }, []); // Remove categories dependency to prevent infinite loop

  const fetchCompletions = useCallback(async () => {
    try {
      setLoading(prev => ({ ...prev, completions: true }));
      if (usingFallbackData) {
        const completions = generateTodayCompletions(habits.map(h => h.id));
        let completedCount = 0, pointsEarned = 0;
        completions.forEach(completion => { if (completion && completion.habitId) { completedCount++; const habit = habits.find(h => h.id === completion.habitId); if (habit) pointsEarned += habit.points; } });
        // Set fallback streak info
        const fallbackStreakInfo: StreakInfo = {
          currentStreak: 3,
          longestStreak: 7,
          streakMultiplier: 1.1,
          nextMilestone: 7,
          daysUntilMilestone: 4,
          streakProtections: 0,
          isInGracePeriod: false,
          gracePeriodEndsAt: null,
          streakLevel: 'spark'
        };
        setCompletedHabits(completedCount); 
        setTodaysPoints(pointsEarned); 
        setStreakInfo(fallbackStreakInfo);
        return;
      }
      const today = new Date().toISOString().split('T')[0];
      const response = await fetch(`/api/completions?date=${today}`);
      const minLoadingTime = new Promise(resolve => setTimeout(resolve, 300));
      if (!response.ok) throw new Error('Failed to fetch completions');
      const data = await response.json();
      await minLoadingTime;
      
      // Extract completion status and streak info from enhanced API response
      let completedCount = 0, pointsEarned = 0;
      if (data.completions && data.completions.length > 0 && habits.length > 0) { 
        data.completions.forEach((completion: { habitId?: string; pointsEarned?: number }) => { 
          if (completion.habitId) { 
            completedCount++; 
            pointsEarned += completion.pointsEarned || 0; 
          } 
        }); 
      }
      
      setCompletedHabits(completedCount); 
      setTodaysPoints(pointsEarned);
      
      // Set streak info from API response, or fallback if not available
      if (data.streakInfo) {
        setStreakInfo(data.streakInfo);
      } else {
        // Fallback streak info if API doesn't return it
        const fallbackStreakInfo: StreakInfo = {
          currentStreak: 0,
          longestStreak: 0,
          streakMultiplier: 1.0,
          nextMilestone: 7,
          daysUntilMilestone: 7,
          streakProtections: 0,
          isInGracePeriod: false,
          gracePeriodEndsAt: null,
          streakLevel: 'none'
        };
        setStreakInfo(fallbackStreakInfo);
      }
    } catch (error) {
      console.error('Error fetching completions:', error);
      if (!usingFallbackData) {
        const completions = generateTodayCompletions(habits.map(h => h.id)); 
        let completedCount = 0, pointsEarned = 0;
        completions.forEach(completion => { if (completion && completion.habitId) { completedCount++; const habit = habits.find(h => h.id === completion.habitId); if (habit) pointsEarned += habit.points; } });
        const fallbackStreakInfo: StreakInfo = {
          currentStreak: 3,
          longestStreak: 7,
          streakMultiplier: 1.1,
          nextMilestone: 7,
          daysUntilMilestone: 4,
          streakProtections: 0,
          isInGracePeriod: false,
          gracePeriodEndsAt: null,
          streakLevel: 'spark'
        };
        setCompletedHabits(completedCount); 
        setTodaysPoints(pointsEarned); 
        setStreakInfo(fallbackStreakInfo); 
        setUsingFallbackData(true);
        toast({ title: 'Using sample data', description: 'Could not connect to the database. Using offline mode.', variant: 'default' });
      } else {
        const completions = generateTodayCompletions(habits.map(h => h.id)); 
        let completedCount = 0, pointsEarned = 0;
        completions.forEach(completion => { if (completion && completion.habitId) { completedCount++; const habit = habits.find(h => h.id === completion.habitId); if (habit) pointsEarned += habit.points; } });
        const fallbackStreakInfo: StreakInfo = {
          currentStreak: 3,
          longestStreak: 7,
          streakMultiplier: 1.1,
          nextMilestone: 7,
          daysUntilMilestone: 4,
          streakProtections: 0,
          isInGracePeriod: false,
          gracePeriodEndsAt: null,
          streakLevel: 'spark'
        };
        setCompletedHabits(completedCount); 
        setTodaysPoints(pointsEarned); 
        setStreakInfo(fallbackStreakInfo);
      }
    } finally {
      setLoading(prev => ({ ...prev, completions: false }));
    }
  }, [habits, usingFallbackData]); // Add dependencies to trigger refetch when needed

  // Function to refresh streak info and completions
  const refreshStreakInfo = useCallback(async () => {
    await fetchCompletions();
  }, [fetchCompletions]);
  
 // Add Category
    const handleAddCategory = async (
      // Change the type of the incoming data to match what CategoryModal sends
      categoryData: Omit<LifeCategory, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'tasks' | 'level' | 'experience' | 'maxExperience'>
  ) => {
      try {
          // --- Add default level/exp inside the handler ---
          const categoryToSend = {
              ...categoryData, // Spread the name, description, color, icon from modal
              level: 1,         // Add default level
              experience: 0,    // Add default experience
              maxExperience: 100 // Add default maxExperience
          };
          // --- End adding defaults ---
  
          if (usingFallbackData) {
              const mockCategory: LifeCategory = {
                  ...categoryToSend, // Use the combined object
                  id: `fallback-${Date.now()}`,
                  userId: 'fallback-user',
                  createdAt: new Date().toISOString(),
                  updatedAt: new Date().toISOString(),
                  tasks: []
              };
              setCategories([...categories, mockCategory]);
              toast({
                  title: 'Success (Offline)',
                  description: 'Category created locally in offline mode!',
              });
              // --- Use the correct prop name (openChangeAction) to close ---
              // Assuming setCategoryModal is passed to openChangeAction prop below
              setCategoryModal(false); // Close modal
              // --- End correct prop usage ---
              return;
          }
  
          const response = await fetch('/api/categories', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', },
              body: JSON.stringify(categoryToSend), // Send the object with defaults
          });
  
          if (!response.ok) {
              const errorData = await response.text();
              console.error("API Error:", errorData);
              throw new Error('Failed to create category via API');
          }
  
          const createdCategory = await response.json();
          setCategories([...categories, createdCategory]);
          toast({ title: 'Success', description: 'Category created successfully!' });
          // --- Use the correct prop name (openChangeAction) to close ---
          setCategoryModal(false); // Close modal
          // --- End correct prop usage ---
  
      } catch (error) {
          console.error('Error creating category:', error);
          // --- Add default level/exp inside the handler (also for fallback) ---
           const categoryToSaveLocally = {
               ...categoryData, // Spread the name, description, color, icon from modal
               level: 1,         // Add default level
               experience: 0,    // Add default experience
               maxExperience: 100 // Add default maxExperience
           };
           // --- End adding defaults ---
  
          if (!usingFallbackData) {
              const mockCategory: LifeCategory = {
                  ...categoryToSaveLocally, // Use the combined object
                  id: `fallback-${Date.now()}`,
                  userId: 'fallback-user',
                  createdAt: new Date().toISOString(),
                  updatedAt: new Date().toISOString(),
                  tasks: []
              };
              setCategories([...categories, mockCategory]);
              setUsingFallbackData(true);
              toast({ title: 'Network Issue', description: 'Category saved locally in offline mode.', variant: 'default' });
               // --- Use the correct prop name (openChangeAction) to close ---
               setCategoryModal(false); // Close modal even on fallback creation
               // --- End correct prop usage ---
          } else {
              toast({ title: 'Error (Offline)', description: 'Failed to add category locally.', variant: 'destructive' });
          }
      }
  };

  // Delete Category
    const handleDeleteCategory = async (categoryId: string) => {
        const originalCategories = [...categories]; // Keep original state for potential rollback
        const localDelete = (categoriesToUpdate: LifeCategory[]) => {
           return categoriesToUpdate.filter(cat => cat.id !== categoryId);
        };

        // Optimistic local update first
        setCategories(localDelete(categories));


        // If we're using fallback data, delete it locally without API call
        if (usingFallbackData) {
            toast({
                title: 'Success (Offline)', // Changed toast title for clarity
                description: 'Category deleted successfully in offline mode!',
            });
            return;
        }

        // If online, try API call
        try {
            const response = await fetch(`/api/categories/${categoryId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete category');
            }
            // Success - local state is already correct
            toast({
                title: 'Success',
                description: 'Category deleted successfully!',
            });

        } catch (error) {
            console.error('Error deleting category:', error);

            // API failed, rely on optimistic deletion
            // Switch to fallback mode if not already in it
            if (!usingFallbackData) {
                setUsingFallbackData(true);
                toast({
                    title: 'Network Issue',
                    description: 'Category deleted locally in offline mode.',
                    variant: 'default'
                });
            } else {
                // If already offline and the action fails
                toast({
                    title: 'Error',
                    description: 'Failed to delete category. Please try again.',
                    variant: 'destructive'
                });
                 // Optional: Revert local state if API call fails and we were already offline?
                 // setCategories(originalCategories); // Decide if rollback is desired behavior here
            }
        }
    };

  // Todos los demás manejadores (handle... y set...) van aquí...
  // handleAddCategory, handleEditCategory, handleDeleteCategory, handleProgress, etc.
  // ...
  // Edit Category

  
    const handleEditCategory = async (categoryId: string, updates: Partial<LifeCategory>) => {
        // Ensure updatedAt is always set for local and API updates
        const updatesWithTimestamp = { ...updates, updatedAt: new Date().toISOString() };

        const localUpdate = (categoriesToUpdate: LifeCategory[]) => {
          return categoriesToUpdate.map(cat =>
            cat.id === categoryId ? { ...cat, ...updatesWithTimestamp } : cat
          );
        };

        // Optimistic local update first
        setCategories(localUpdate(categories));

        // If we're using fallback data, update it locally without API call
        if (usingFallbackData) {
            toast({
                title: 'Success (Offline)', // Changed toast title for clarity
                description: 'Category updated successfully in offline mode!',
            });
            return;
        }

        // If online, try API call
        try {
            const response = await fetch(`/api/categories/${categoryId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Send only the actual updates plus the timestamp
                body: JSON.stringify(updatesWithTimestamp),
            });

            if (!response.ok) {
                throw new Error('Failed to update category');
            }

            const updatedCategory = await response.json();
            // Re-sync local state with the confirmed API response
            setCategories(categories.map(cat =>
                cat.id === categoryId ? updatedCategory : cat
            ));

            toast({
                title: 'Success',
                description: 'Category updated successfully!',
            });

        } catch (error) {
            console.error('Error updating category:', error);

            // API failed, rely on the optimistic update already applied
            // Switch to fallback mode if not already in it
            if (!usingFallbackData) {
                setUsingFallbackData(true);
                toast({
                    title: 'Network Issue',
                    description: 'Category updated locally in offline mode.',
                    variant: 'default'
                });
            } else {
                // If already offline and the action fails (less likely for local updates but possible)
                toast({
                    title: 'Error',
                    description: 'Failed to update category. Please try again.',
                    variant: 'destructive'
                });
            }
        }
    };

    // Reset Progress
    const handleResetProgress = async (categoryId: string) => {
        const updates = {
            level: 1,
            experience: 0,
            maxExperience: 100,
        };

        try {
            // Use handleEditCategory to manage optimistic update, API call, and fallback logic
            await handleEditCategory(categoryId, updates);
            // handleEditCategory shows appropriate toasts
        } catch (error) {
            // Redundant catch if handleEditCategory handles everything
             console.error('Error occurred during handleResetProgress calling handleEditCategory:', error);
        }
    };

 // Handle Progress (Updated to use new daily completion system for tasks)
    const handleProgress = async (categoryId: string, amount: number, taskId?: string) => {
        // If taskId is provided, this is a task completion - use the new daily completion system
        if (taskId) {
            if (usingFallbackData) {
                // In offline mode, just update locally
                handleProgressOffline(categoryId, amount);
                return;
            }

            try {
                const response = await fetch('/api/tasks/complete', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ taskId })
                });

                const result = await response.json();

                if (!response.ok) {
                    // Handle specific error cases
                    if (result.alreadyCompleted || result.error?.includes('already completed')) {
                        // Throw specific error for already completed tasks so the UI can handle it appropriately
                        console.log('Task already completed today:', taskId);
                        throw new Error('Task already completed today');
                    }
                    
                    // For other errors, throw to be caught below
                    throw new Error(result.error || `Failed to complete task (${response.status})`);
                }

                // Show success message with streak info
                let message = result.message || 'Task completed successfully!';
                if (result.streakMultiplier && result.streakMultiplier > 1) {
                    message += ` (${result.streakMultiplier}x streak bonus!)`;
                }

                toast({
                    title: result.leveledUp ? '🎉 Level Up!' : '✅ Task Completed',
                    description: message,
                });

                // Trigger level up animation if needed
                if (result.leveledUp) {
                    setLevelUpAnimation({
                        isVisible: true,
                        level: result.newLevel,
                        categoryName: result.categoryName,
                    });
                }

                // Update category progress optimistically instead of full refetch
                if (result.updatedCategory) {
                    setCategories(prevCategories => 
                        prevCategories.map(cat => 
                            cat.id === categoryId ? { ...cat, ...result.updatedCategory } : cat
                        )
                    );
                } else {
                    // Fallback: update experience locally if server didn't return updated category
                    const currentCategory = categories.find(cat => cat.id === categoryId);
                    if (currentCategory && result.experienceGained) {
                        const newExperience = currentCategory.experience + result.experienceGained;
                        let newLevel = currentCategory.level;
                        let remainingExp = newExperience;
                        let currentMaxExp = currentCategory.maxExperience;
                        
                        // Recalculate level
                        while (remainingExp >= currentMaxExp) {
                            newLevel += 1;
                            remainingExp -= currentMaxExp;
                            currentMaxExp = Math.pow(newLevel, 2) * 100;
                        }
                        
                        const updatedCategory = {
                            ...currentCategory,
                            level: newLevel,
                            experience: remainingExp,
                            maxExperience: currentMaxExp
                        };
                        
                        setCategories(prevCategories => 
                            prevCategories.map(cat => 
                                cat.id === categoryId ? updatedCategory : cat
                            )
                        );
                    }
                }
                
                return { success: true, result };

            } catch (error: any) {
                console.error('Error completing task:', error);
                
                // Don't fallback to offline for expected API rejections
                if (error?.message?.includes('already completed')) {
                    return { success: false, alreadyCompleted: true };
                }
                
                // Fallback to offline mode only for network/server errors
                setUsingFallbackData(true);
                handleProgressOffline(categoryId, amount);
                toast({
                    title: 'Network Issue',
                    description: 'Task completed locally (Offline Mode).',
                    variant: 'default'
                });
                
                return { success: false, error: error?.message || 'Unknown error' };
            }
        } else {
            // This is direct category progress (legacy) - keep existing behavior
            handleProgressOffline(categoryId, amount);
            return { success: true };
        }
    };

    // Helper function for offline/legacy progress handling
    const handleProgressOffline = async (categoryId: string, amount: number) => {
        let categoryIndex = categories.findIndex(cat => cat.id === categoryId);
        if (categoryIndex === -1) return;
        let category = { ...categories[categoryIndex] };

        const newExperience = category.experience + amount;
        let newLevel = category.level;
        let remainingExp = newExperience;
        let didLevelUp = false;
        let currentMaxExp = category.maxExperience;

        // Level up calculation
        while (remainingExp >= currentMaxExp) {
            newLevel += 1;
            remainingExp -= currentMaxExp;
            currentMaxExp = Math.pow(newLevel, 2) * 100;
            didLevelUp = true;
        }

        const updates = {
            level: newLevel,
            experience: Math.max(0, remainingExp),
            maxExperience: currentMaxExp,
        };

        // Trigger level up animation if needed
        if (didLevelUp) {
            setLevelUpAnimation({
                isVisible: true,
                level: newLevel,
                categoryName: category.name,
            });
        }

        try {
            await handleEditCategory(categoryId, updates);
        } catch (error) {
            console.error('Error occurred during handleProgressOffline:', error);
        }
    };

  const handleHabitComplete = async (habitId: string, completed: boolean) => {
        // Find the habit first
        const habit = habits.find(h => h.id === habitId);
        if (!habit) {
           console.error(`Habit with ID ${habitId} not found for completion update.`);
           return; // Exit if habit doesn't exist in local state
        }
      
        // --- Optimistic UI Updates ---
        // Apply the changes to local state immediately
        const pointChange = habit.points;
        const completionChange = completed ? 1 : -1;
      
        setCompletedHabits(prev => Math.max(0, prev + completionChange));
        setTodaysPoints(prev => Math.max(0, prev + (completed ? pointChange : -pointChange)));
      
        // --- Handle Offline Case ---
        if (usingFallbackData) {
          console.log(`Habit '${habit.name}' status updated locally (Offline Mode).`);
          // If the habit is associated with a category AND it's being marked complete,
          // update the category progress locally (handleProgress should ideally handle offline state)
          if (habit.categoryId && completed) {
             // Assuming handleProgress can work correctly in offline/fallback mode
             handleProgress(habit.categoryId, habit.points);
          }
          toast({
            title: 'Offline Mode',
            description: `Habit '${habit.name}' status updated locally.`,
          });
          return { success: true }; // Return consistent response format
        }
      
        // --- Online Case: Attempt API Update ---
        try {
          const response = await fetch('/api/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              habitId,
              completed,
              date: new Date().toISOString(), // Send current date as ISO string
            }),
          });
      
          const result = await response.json();
          
          if (!response.ok) {
             // Handle specific error cases
             if (result.alreadyCompleted || result.error?.includes('already completed')) {
                 // Throw specific error for already completed habits so the UI can handle it appropriately
                 console.log('Habit already completed today:', habitId);
                 throw new Error('Habit already completed today');
             }
             
             // For other errors, throw to be caught below
             throw new Error(result.error || `Failed to complete habit (${response.status})`);
          }
          
          // Show success message
          let message = result.message || 'Habit completed successfully!';
          if (result.streakMultiplier && result.streakMultiplier > 1) {
              message += ` (${result.streakMultiplier}x streak bonus!)`;
          }
          
          toast({
              title: '✅ Habit Completed',
              description: message,
          });
          
          // Update streak info with latest data from API response
          if (result.currentStreak !== undefined) {
            setStreakInfo(prev => ({
              ...prev,
              currentStreak: result.currentStreak,
              streakMultiplier: result.streakMultiplier || prev.streakMultiplier
            }));
          }
      
          // API Success!
          console.log(`Habit '${habit.name}' completion status successfully saved to server.`);
          // If the habit is associated with a category AND it was marked complete, update category progress
          if (habit.categoryId && completed) {
            // Call handleProgress after successful API confirmation
            handleProgress(habit.categoryId, habit.points);
          }
          
          return { success: true, result };
      
        } catch (error: any) {
          console.error('Error updating habit completion:', error.message);
          
          // Don't fallback to offline for expected API rejections
          if (error?.message?.includes('already completed')) {
              return { success: false, alreadyCompleted: true };
          }
      
          // --- API Failed: Enter Fallback Mode, Keep Optimistic State ---
          // No explicit rollback of setCompletedHabits or setTodaysPoints.
          // The UI keeps the state the user intended.
          setUsingFallbackData(true); // Switch to offline mode
      
          toast({
            title: 'Network Issue',
            description: `Could not save status for '${habit.name}'. Updated locally (Offline Mode).`,
            variant: 'default' // Changed to default for consistency
          });
          
          return { success: false, error: error?.message || 'Unknown error' };
        }
       };

       const handleAddNewTask = async (task: { description: string, points: number }) => {
        const { categoryId } = taskModal; // Get categoryId from modal state

        const newTaskBase = {
            description: task.description,
            points: task.points,
            completed: false,
            categoryId: categoryId,
        };

        // Prepare local task structure (used for both offline and fallback)
        const localNewTask: CategoryTask = {
            ...newTaskBase,
            id: `fallback-task-${Date.now()}`, // Use fallback prefix initially
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        const localAdd = (categoriesToUpdate: LifeCategory[]) => {
            return categoriesToUpdate.map(cat => {
                if (cat.id === categoryId) {
                    // Ensure tasks array exists
                    const existingTasks = cat.tasks || [];
                    return { ...cat, tasks: [...existingTasks, localNewTask] };
                }
                return cat;
            });
        };

        // Optimistic local update first
        setCategories(localAdd(categories));
        setTaskModal(prev => ({ ...prev, isOpen: false })); // Close modal optimistically

        // If in offline mode, add task locally
        if (usingFallbackData) {
            toast({ title: 'Success (Offline)', description: 'Task added successfully in offline mode!' });
            return;
        }

        // If online, try API call
        try {
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTaskBase), // Send base data
            });

            if (!response.ok) {
                throw new Error('Failed to create task via API');
            }

            const createdTask = await response.json(); // Task from API with real ID

            // Update local state with task from API response, replacing the optimistic one
            setCategories(categories.map(cat => {
                if (cat.id === categoryId) {
                    const existingTasks = cat.tasks || [];
                    // Replace the fallback task with the actual one from API
                    const updatedTasks = existingTasks.map(t =>
                        t.id === localNewTask.id ? createdTask : t
                    );
                    // If the fallback wasn't found (edge case), just add the new one
                    if (!updatedTasks.some(t => t.id === createdTask.id)) {
                         updatedTasks.push(createdTask);
                    }
                    return { ...cat, tasks: updatedTasks };
                }
                return cat;
            }));

            toast({ title: 'Success', description: 'Task added successfully!' });

        } catch (error) {
            console.error('Error creating task:', error);
             // API failed, rely on the optimistic update already applied
            if (!usingFallbackData) {
                setUsingFallbackData(true);
                toast({ title: 'Network Issue', description: 'Task added locally in offline mode.', variant: 'default' });
            } else {
                // Already offline, maybe the retry failed?
                toast({ title: 'Error', description: 'Failed to save task to server.', variant: 'destructive' });
                // Optimistic update is still applied locally
            }
        }
    };

    const handleDeleteTask = async (categoryId: string, taskId: string) => {
        const originalCategories = [...categories]; // Backup for potential rollback

        const localDelete = (categoriesToUpdate: LifeCategory[]) => {
            return categoriesToUpdate.map(cat => {
                if (cat.id === categoryId && cat.tasks) {
                    return { ...cat, tasks: cat.tasks.filter(task => task.id !== taskId) };
                }
                return cat;
            });
        };

        // Optimistic local update first
        setCategories(localDelete(categories));

        // If in offline mode, delete task locally and return
        if (usingFallbackData) {
            toast({ title: 'Success (Offline)', description: 'Task deleted successfully in offline mode!' });
            return;
        }

        // If online, try API call
        try {
            const response = await fetch(`/api/tasks/${taskId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete task via API');
            }
            // API successful, local state already reflects the deletion
            // toast({ title: 'Success', description: 'Task deleted successfully!' });

        } catch (error) {
            console.error('Error deleting task:', error);
            // API failed, rely on optimistic deletion
            if (!usingFallbackData) {
                setUsingFallbackData(true);
                toast({ title: 'Network Issue', description: 'Task deleted locally in offline mode.', variant: 'default' });
            } else {
                 toast({ title: 'Delete Failed', description: 'Could not delete task on server.', variant: 'destructive' });
                 // Optional: Rollback if already offline and API fails
                 // setCategories(originalCategories);
            }
        }
    };

    const handleRetryConnection = () => {
    toast({ title: 'Reconnecting...', description: 'Attempting to reconnect to the server.' });
    setUsingFallbackData(false);
    fetchCategories();
    fetchHabits();
  };

  const onCompleteInitializerAction = () => {
    setInitializing(true);
    fetchCategories();
    fetchHabits();
    setShowInitializer(false);
    setInitializing(false);
  };

    

    const handleAddTask = (categoryId: string, points: number) => {
        setTaskModal({ 
            isOpen: true, 
            categoryId, 
            points, 
            mode: 'add', 
            editTask: null 
        });
    };
    
    // Function to open the Edit Task Modal
    const handleEditTaskModal = (categoryId: string, taskId: string, task: CategoryTask) => {
        setTaskModal({
            isOpen: true,
            categoryId,
            points: task.points,
            mode: 'edit',
            editTask: task
        });
    };
    
    // Function to handle task editing from modal
    const handleEditTaskFromModal = async (taskData: { description: string, points: number }) => {
        const { categoryId, editTask } = taskModal;
        if (!editTask) return;
        
        await handleEditTask(categoryId, editTask.id, taskData);
        setTaskModal(prev => ({ ...prev, isOpen: false }));
    };

    // Function to open the Add Habit Modal
        const handleAddHabit = (timeOfDay: TimeOfDay) => { // Use TimeOfDay type
          setAddHabitModal({ isOpen: true, timeOfDay });
      };
    
        // Function to handle the actual creation of a new habit (receives data from modal)
        const handleAddNewHabit = async (habitData: Omit<DailyHabit, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) => {
            // Prepare base structure for API/local fallback
            const newHabitBase = { ...habitData };
    
            // Prepare local habit structure (used for both offline and fallback)
            const localNewHabit: DailyHabit = {
                ...newHabitBase,
                id: `fallback-habit-${Date.now()}`, // Use fallback prefix initially
                userId: 'fallback-user', // Assuming a fallback user ID
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
    
            // Optimistic local update first
            setHabits(prevHabits => [...prevHabits, localNewHabit]);
            setAddHabitModal(prev => ({ ...prev, isOpen: false })); // Close modal optimistically
    
            // If in offline mode, add habit locally and return
            if (usingFallbackData) {
                toast({ title: 'Success (Offline)', description: 'Habit created successfully in offline mode!' });
                return;
            }
    
            // If online, try API call
            try {
                const response = await fetch('/api/habits', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newHabitBase), // Send only the essential data
                });
    
                if (!response.ok) {
                    throw new Error('Failed to create habit via API');
                }
    
                const createdHabit = await response.json(); // Habit from API with real ID
    
                // Update local state with habit from API response, replacing the optimistic one
                setHabits(prevHabits =>
                    prevHabits.map(h => (h.id === localNewHabit.id ? createdHabit : h))
                );
    
                toast({ title: 'Success', description: 'Habit created successfully!' });
    
            } catch (error) {
                console.error('Error creating habit:', error);
                // API failed, rely on the optimistic update already applied
                if (!usingFallbackData) {
                    setUsingFallbackData(true);
                    toast({ title: 'Network Issue', description: 'Habit created locally in offline mode.', variant: 'default' });
                } else {
                    // Already offline
                    toast({ title: 'Error', description: 'Failed to save habit to server.', variant: 'destructive' });
                    // Optimistic update is still applied locally
                }
            }
        };

        // Handle habit reordering
        const handleReorderHabits = async (timeOfDay: string, oldIndex: number, newIndex: number) => {
            // Get habits for this time slot
            const timeSlotHabits = habits.filter(h => h.timeOfDay === timeOfDay);
            
            if (oldIndex === newIndex || oldIndex < 0 || newIndex < 0 || 
                oldIndex >= timeSlotHabits.length || newIndex >= timeSlotHabits.length) {
                return; // Invalid indices or no change
            }

            // Create the reordered array
            const reorderedHabits = [...timeSlotHabits];
            const [movedHabit] = reorderedHabits.splice(oldIndex, 1);
            reorderedHabits.splice(newIndex, 0, movedHabit);
            
            // Get the IDs in the new order
            const reorderedIds = reorderedHabits.map(h => h.id);
            
            // Optimistically update local state
            const updatedHabits = habits.map(habit => {
                if (habit.timeOfDay === timeOfDay) {
                    const newOrder = reorderedIds.indexOf(habit.id);
                    return newOrder !== -1 ? { ...habit, order: newOrder } : habit;
                }
                return habit;
            });
            
            // Sort habits by their new order for consistent UI
            const sortedHabits = updatedHabits.sort((a, b) => {
                if (a.timeOfDay !== b.timeOfDay) {
                    // Maintain original order for different time slots
                    return 0;
                }
                return (a.order || 0) - (b.order || 0);
            });
            
            setHabits(sortedHabits);
            
            // If in offline mode, just update locally
            if (usingFallbackData) {
                console.log(`Habits reordered locally for ${timeOfDay} (Offline Mode)`);
                toast({ title: 'Offline Mode', description: 'Habit order updated locally.' });
                return;
            }
            
            // If online, try to persist to server
            try {
                const response = await fetch('/api/habits/reorder', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        habitIds: reorderedIds, 
                        timeOfDay: timeOfDay 
                    })
                });
                
                if (!response.ok) {
                    throw new Error('Failed to reorder habits on server');
                }
                
                console.log(`Habits successfully reordered for ${timeOfDay}`);
                
            } catch (error) {
                console.error('Error reordering habits:', error);
                
                // API failed, switch to offline mode but keep the local changes
                setUsingFallbackData(true);
                toast({
                    title: 'Network Issue', 
                    description: 'Habit order updated locally (Offline Mode).', 
                    variant: 'default'
                });
            }
        };
        
        // Handle habit movement between time slots
        const handleMoveHabitToTimeSlot = async (habitId: string, fromTimeOfDay: string, toTimeOfDay: string, newOrder: number = 0) => {
            // Optimistically update local state
            const updatedHabits = habits.map(habit => {
                if (habit.id === habitId) {
                    return { ...habit, timeOfDay: toTimeOfDay as any, order: newOrder };
                }
                return habit;
            });
            
            // Sort habits to maintain order consistency
            const sortedHabits = updatedHabits.sort((a, b) => {
                if (a.timeOfDay !== b.timeOfDay) {
                    return 0; // Maintain relative order between different time slots
                }
                return (a.order || 0) - (b.order || 0);
            });
            
            setHabits(sortedHabits);
            
            // If in offline mode, just update locally
            if (usingFallbackData) {
                console.log(`Habit moved locally from ${fromTimeOfDay} to ${toTimeOfDay} (Offline Mode)`);
                toast({ title: 'Offline Mode', description: 'Habit moved locally.' });
                return;
            }
            
            // If online, try to persist to server
            try {
                const response = await fetch('/api/habits/move', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        habitId, 
                        fromTimeOfDay, 
                        toTimeOfDay, 
                        newOrder 
                    })
                });
                
                if (!response.ok) {
                    throw new Error('Failed to move habit on server');
                }
                
                console.log(`Habit successfully moved from ${fromTimeOfDay} to ${toTimeOfDay}`);
                
            } catch (error) {
                console.error('Error moving habit:', error);
                
                // API failed, switch to offline mode but keep the local changes
                setUsingFallbackData(true);
                toast({
                    title: 'Network Issue', 
                    description: 'Habit moved locally (Offline Mode).', 
                    variant: 'default'
                });
            }
        };
    

  // ... (incluye todos los demás manejadores aquí)
  // handleAddNewTask, handleDeleteTask, handleAddHabit, etc.
  
  // 3. LOS USEEFFECT TAMBIÉN SE MUEVEN AQUÍ
useEffect(() => {
        // Only check AFTER the initial fetches are done
        if (!loading.categories && !loading.habits) {
          // If NO data exists AND we aren't already in an initializing flow
          if (categories.length === 0 && habits.length === 0 && !initializing) {
            console.log("STATE CHECK: No data, showing initializer."); // Debug log
            setShowInitializer(true);
          } else {
            // Data exists OR we are initializing, hide the initializer modal
            console.log(`STATE CHECK: Data found (C:${categories.length}, H:${habits.length}) or initializing (${initializing}), hiding initializer.`); // Debug log
            setShowInitializer(false);
          }
        } else {
          // Optional Debug: Log when the check doesn't run because something is loading
          // console.log("STATE CHECK: Waiting, loading:", loading);
        }
      }, [loading.categories, loading.habits, categories, habits, initializing]);
      
      

  useEffect(() => {
    fetchCategories();
    fetchHabits();
  }, [fetchCategories, fetchHabits]);

  // Fetch completions only after habits are loaded (run once)
  useEffect(() => {
    if (!loading.habits && habits.length > 0) {
      fetchCompletions();
    }
  }, [loading.habits]); // Remove fetchCompletions dependency to prevent loop


  
  
  // 4. EL HOOK DEVUELVE TODO LO QUE LA UI NECESITA
  return {
    // State
    categories,
    habits,
    completedHabits,
    todaysPoints,
    showInitializer,
    initializing,
    streakInfo,
    loading,
    taskModal,
    levelUpAnimation,
    categoryModal,
    addHabitModal,
    usingFallbackData,
    // Setters y Handlers
    setCategories,
    setHabits,
    setShowInitializer,
    setInitializing,
    setLoading,
    setTaskModal,
    setLevelUpAnimation,
    setCategoryModal,
    setAddHabitModal,
    // Funciones principales
    fetchCategories,
    fetchHabits,
    // handleAddCategory, // Y todos los demás handlers que necesites exponer
    handleDeleteTask,
    handleEditCategory,
    handleDeleteCategory,
    handleAddCategory,
    handleAddNewTask,
    handleAddNewHabit,
    handleAddHabit,
    handleAddTask,
    handleEditTask,       // <- Faltaba esta
    handleRetryConnection, // <- Faltaba esta

    handleProgress,
    handleResetProgress, // <- Faltaba esta

    handleHabitComplete,
    handleReorderHabits,     // <- New habit reordering function
    handleMoveHabitToTimeSlot, // <- New cross-time-slot movement function
    handleEditTaskModal,     // <- New function to open edit task modal
    handleEditTaskFromModal, // <- New function to handle task editing from modal
    onCompleteInitializerAction,
    refreshStreakInfo        // <- New function to refresh streak information

    //...etc
  };
}