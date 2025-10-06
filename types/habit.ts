// types/habit.ts

// Main user type
export interface User {
  id: string;
  created_time: Date;
  email: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  profile_image_url?: string;
  user_id: string; // Clerk ID
  subscription?: string;
  
  // Relations
  lifeCategories?: LifeCategory[];
  habits?: DailyHabit[];
  completions?: HabitCompletion[];
}

// Life category model
export interface LifeCategory {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  level: number;
  experience: number;
  maxExperience: number;
  userId: string;
  createdAt: string;  // Change from Date to string
  updatedAt: string;  // Change from Date to string
  
  // Relations
  user?: User;
  tasks?: CategoryTask[];
  habits?: DailyHabit[];
}

// Task model
export interface CategoryTask {
  id: string;
  description: string;
  points: number;
  completed: boolean;
  categoryId: string;
  createdAt: string;  // Change from Date to string
  updatedAt: string;  // Change from Date to string
  
  // Relations
  category?: LifeCategory;
}

// Daily habit model
export interface DailyHabit {
  id: string;
  name: string;
  description?: string | null; // Now allows string, undefined, or null
  points: number;
  priority: "Critical" | "High" | "Medium" | "Low";
  timeOfDay: "Early morning" | "Working hours" | "Lunch" | "Evening" | "Night";
  order?: number; // Order for drag-and-drop functionality
  categoryId: string | null;
  userId: string;
  createdAt: string;  // Change from Date to string
  updatedAt: string;  // Change from Date to string
  // Relations
  category?: LifeCategory;
  user?: User;
  completions?: HabitCompletion[];
}

// Habit completion tracking
export interface HabitCompletion {
  id: string;
  habitId: string;
  date: Date;
  completed: boolean;
  userId: string;
  
  // Relations
  habit?: DailyHabit;
  user?: User;
}

// Daily completion tracking (Phase 1 optimization)
export interface DailyCompletion {
  id: string;
  userId: string;
  habitId?: string | null;
  categoryTaskId?: string | null;
  completionDate: Date;
  completedAt: Date;
  pointsEarned: number;
  
  // Relations
  user?: User;
  habit?: DailyHabit;
  categoryTask?: CategoryTask;
}

// Daily statistics tracking (Phase 1 optimization)
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
  
  // Relations
  user?: User;
}

// Enhanced progress tracking types
export interface DailyProgress {
  date: string;
  habitsCompleted: number;
  totalHabits: number;
  tasksCompleted: number;
  totalPointsEarned: number;
  streakCount: number;
  perfectDay: boolean;
  completionPercentage: number;
}

export interface StreakInfo {
  currentStreak: number;
  longestStreak: number;
  streakMultiplier: number;
  nextMilestone: number;
  daysUntilMilestone: number;
  streakProtections: number;
  // Phase 1.2 enhancements
  isInGracePeriod: boolean;
  gracePeriodEndsAt: Date | null;
  streakLevel: 'none' | 'spark' | 'flame' | 'fire' | 'blaze' | 'inferno' | 'phoenix';
}

export interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  targetValue: number;
  currentProgress: number;
  pointsReward: number;
  type: 'habits' | 'points' | 'categories' | 'perfect_day' | 'early_completion';
  completed: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  expiresAt: Date;
}

// You might want to create a separate file for these payment-related types
// types/payment.ts
export interface Payment {
  id: number;
  created_time: Date;
  stripe_id: string;
  email: string;
  amount: string;
  payment_time: string;
  payment_date: string;
  currency: string;
  user_id: string;
  customer_details: string;
  payment_intent: string;
}

export interface Subscription {
  id: number;
  created_time: Date;
  subscription_id: string;
  stripe_user_id: string;
  status: string;
  start_date: string;
  end_date?: string;
  plan_id: string;
  default_payment_method_id?: string;
  email: string;
  user_id: string;
}

export interface SubscriptionPlan {
  id: number;
  created_time: Date;
  plan_id: string;
  name: string;
  description: string;
  amount: string;
  currency: string;
  interval: string;
}

export interface Invoice {
  id: number;
  created_time: Date;
  invoice_id: string;
  subscription_id: string;
  amount_paid: string;
  amount_due?: string;
  currency: string;
  status: string;
  email: string;
  user_id?: string;
}