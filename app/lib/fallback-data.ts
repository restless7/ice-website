// Fallback data for offline mode and testing
import type { DailyHabit, LifeCategory, CategoryTask, HabitCompletion } from '@/types/habit';

export const fallbackCategories: LifeCategory[] = [
  {
    id: 'cat-health',
    name: 'Health & Fitness',
    description: 'Physical and mental wellbeing',
    color: '#22c55e',
    icon: 'Heart',
    level: 3,
    experience: 1250,
    maxExperience: 2000,
    userId: 'sample-user',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
    tasks: [
      {
        id: 'task-exercise',
        description: 'Exercise for 30 minutes',
        points: 20,
        completed: false,
        categoryId: 'cat-health',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-15T10:30:00Z',
      },
      {
        id: 'task-water',
        description: 'Drink 8 glasses of water',
        points: 10,
        completed: false,
        categoryId: 'cat-health',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-15T10:30:00Z',
      }
    ]
  },
  {
    id: 'cat-productivity',
    name: 'Productivity',
    description: 'Work and personal productivity',
    color: '#3b82f6',
    icon: 'Briefcase',
    level: 2,
    experience: 800,
    maxExperience: 1500,
    userId: 'sample-user',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
    tasks: [
      {
        id: 'task-deep-work',
        description: 'Focus on deep work for 2 hours',
        points: 30,
        completed: false,
        categoryId: 'cat-productivity',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-15T10:30:00Z',
      },
      {
        id: 'task-inbox-zero',
        description: 'Achieve inbox zero',
        points: 15,
        completed: false,
        categoryId: 'cat-productivity',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-15T10:30:00Z',
      }
    ]
  },
  {
    id: 'cat-learning',
    name: 'Learning & Growth',
    description: 'Personal and professional development',
    color: '#8b5cf6',
    icon: 'BookOpen',
    level: 1,
    experience: 300,
    maxExperience: 1000,
    userId: 'sample-user',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
    tasks: [
      {
        id: 'task-reading',
        description: 'Read for 30 minutes',
        points: 15,
        completed: false,
        categoryId: 'cat-learning',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-15T10:30:00Z',
      }
    ]
  }
];

export const fallbackHabits: DailyHabit[] = [
  {
    id: 'habit-morning-exercise',
    name: 'Morning Exercise',
    description: 'Start the day with physical activity',
    points: 25,
    priority: 'High',
    timeOfDay: 'Early morning',
    order: 1,
    categoryId: 'cat-health',
    userId: 'sample-user',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 'habit-meditation',
    name: 'Meditation',
    description: 'Practice mindfulness meditation',
    points: 15,
    priority: 'Medium',
    timeOfDay: 'Early morning',
    order: 2,
    categoryId: 'cat-health',
    userId: 'sample-user',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 'habit-deep-work',
    name: 'Deep Work Session',
    description: 'Focus on important tasks without distractions',
    points: 30,
    priority: 'Critical',
    timeOfDay: 'Working hours',
    order: 3,
    categoryId: 'cat-productivity',
    userId: 'sample-user',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 'habit-reading',
    name: 'Daily Reading',
    description: 'Read books, articles, or educational content',
    points: 20,
    priority: 'Medium',
    timeOfDay: 'Evening',
    order: 4,
    categoryId: 'cat-learning',
    userId: 'sample-user',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 'habit-journaling',
    name: 'Evening Journaling',
    description: 'Reflect on the day and plan for tomorrow',
    points: 10,
    priority: 'Low',
    timeOfDay: 'Night',
    order: 5,
    categoryId: 'cat-learning',
    userId: 'sample-user',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 'habit-healthy-lunch',
    name: 'Healthy Lunch',
    description: 'Eat a nutritious, balanced lunch',
    points: 15,
    priority: 'Medium',
    timeOfDay: 'Lunch',
    order: 6,
    categoryId: 'cat-health',
    userId: 'sample-user',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
  }
];

// Generate random completion data for today (for fallback mode)
export function generateTodayCompletions(habitIds: string[]): (HabitCompletion | null)[] {
  const today = new Date();
  const completions: (HabitCompletion | null)[] = [];
  
  habitIds.forEach((habitId, index) => {
    // Randomly determine if habit is completed (70% chance for demo)
    const isCompleted = Math.random() > 0.3;
    
    if (isCompleted) {
      const habit = fallbackHabits.find(h => h.id === habitId);
      completions.push({
        id: `completion-${habitId}-${today.toISOString().split('T')[0]}`,
        habitId,
        date: today,
        completed: true,
        userId: 'sample-user',
        habit
      });
    } else {
      completions.push(null);
    }
  });
  
  return completions;
}

// Generate sample habit completion history for the past week
export function generateWeeklyCompletions(habitIds: string[]): HabitCompletion[] {
  const completions: HabitCompletion[] = [];
  const today = new Date();
  
  // Generate data for the past 7 days
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    habitIds.forEach(habitId => {
      // Variable completion rates for different days
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const completionRate = isWeekend ? 0.5 : 0.8; // Lower completion on weekends
      
      if (Math.random() < completionRate) {
        const habit = fallbackHabits.find(h => h.id === habitId);
        completions.push({
          id: `completion-${habitId}-${date.toISOString().split('T')[0]}`,
          habitId,
          date: date,
          completed: true,
          userId: 'sample-user',
          habit
        });
      }
    });
  }
  
  return completions;
}

// Sample daily stats for the dashboard
export interface DailyStats {
  id: string;
  userId: string;
  date: Date;
  habitsCompleted: number;
  totalHabits: number;
  tasksCompleted: number;
  totalPointsEarned: number;
  streakCount: number;
  perfectDay: boolean;
}

export function generateFallbackDailyStats(): DailyStats {
  const today = new Date();
  const totalHabits = fallbackHabits.length;
  const habitsCompleted = Math.floor(totalHabits * 0.7); // 70% completion rate
  const totalPointsEarned = fallbackHabits
    .slice(0, habitsCompleted)
    .reduce((sum, habit) => sum + habit.points, 0);
  
  return {
    id: `stats-${today.toISOString().split('T')[0]}`,
    userId: 'sample-user',
    date: today,
    habitsCompleted,
    totalHabits,
    tasksCompleted: 3,
    totalPointsEarned,
    streakCount: 5,
    perfectDay: habitsCompleted === totalHabits
  };
}