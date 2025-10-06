// components/ui/data-initializer.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Loader2, Check } from 'lucide-react';
import { useToast } from './use-toast';

interface DataInitializerProps {
  onCompleteAction: () => void;
}

export function DataInitializer({ onCompleteAction }: DataInitializerProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    categories: 'pending' | 'loading' | 'success' | 'error';
    habits: 'pending' | 'loading' | 'success' | 'error';
  }>({
    categories: 'pending',
    habits: 'pending',
  });

  const sampleCategories = [
    {
      name: 'Health & Wellness',
      description: 'Physical health and wellbeing activities',
      color: '#4CAF50',
      icon: '❤️',
      level: 1,
      experience: 0,
      maxExperience: 100,
    },
    {
      name: 'Learning & Growth',
      description: 'Knowledge and personal development',
      color: '#2196F3',
      icon: '📚',
      level: 1,
      experience: 0,
      maxExperience: 100,
    },
    {
      name: 'Productivity',
      description: 'Work and task management',
      color: '#FF9800',
      icon: '⚡',
      level: 1,
      experience: 0,
      maxExperience: 100,
    },
  ];

  const sampleHabits = [
    {
      name: 'Morning Meditation',
      description: '15 minutes of meditation to start the day',
      points: 20,
      priority: 'High',
      timeOfDay: 'Early morning',
      categoryId: '', // Will be filled later
    },
    {
      name: 'Daily Exercise',
      description: '30 minutes of physical activity',
      points: 30,
      priority: 'Critical',
      timeOfDay: 'Evening',
      categoryId: '', // Will be filled later
    },
    {
      name: 'Read a Book',
      description: 'Read at least 20 pages',
      points: 15,
      priority: 'Medium',
      timeOfDay: 'Night',
      categoryId: '', // Will be filled later
    },
    {
      name: 'Plan Tomorrow',
      description: 'Set goals and plan tasks for the next day',
      points: 10,
      priority: 'High',
      timeOfDay: 'Night',
      categoryId: '', // Will be filled later
    },
  ];

  const initializeData = async () => {
    setLoading(true);
    let createdCategoryIds: Record<string, string> = {};

    try {
      // Step 1: Create categories
      setStatus(prev => ({ ...prev, categories: 'loading' }));
      
      for (const category of sampleCategories) {
        const response = await fetch('/api/categories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(category),
        });
        
        if (!response.ok) {
          throw new Error(`Failed to create category ${category.name}`);
        }
        
        const createdCategory = await response.json();
        createdCategoryIds[category.name] = createdCategory.id;
      }
      
      setStatus(prev => ({ ...prev, categories: 'success' }));
      
      // Step 2: Create habits
      setStatus(prev => ({ ...prev, habits: 'loading' }));
      
      const habitPromises = sampleHabits.map(habit => {
        let categoryId = null;
        
        // Assign habits to categories
        if (habit.name === 'Morning Meditation' || habit.name === 'Daily Exercise') {
          categoryId = createdCategoryIds['Health & Wellness'];
        } else if (habit.name === 'Read a Book') {
          categoryId = createdCategoryIds['Learning & Growth'];
        } else if (habit.name === 'Plan Tomorrow') {
          categoryId = createdCategoryIds['Productivity'];
        }
        
        return fetch('/api/habits', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...habit,
            categoryId,
          }),
        });
      });
      
      const habitResults = await Promise.all(habitPromises);
      
      if (habitResults.some(res => !res.ok)) {
        throw new Error('Failed to create some habits');
      }
      
      setStatus(prev => ({ ...prev, habits: 'success' }));
      
      // Success
      toast({
        title: '✅ Data Initialized',
        description: 'Sample data has been created successfully!',
      });
      
      // Wait a moment before completing
      setTimeout(() => {
        onCompleteAction();
      }, 1000);
      
    } catch (error) {
      console.error('Error initializing data:', error);
      
      if (status.categories === 'loading') {
        setStatus(prev => ({ ...prev, categories: 'error' }));
      }
      
      if (status.habits === 'loading') {
        setStatus(prev => ({ ...prev, habits: 'error' }));
      }
      
      toast({
        title: '❌ Initialization Error',
        description: error instanceof Error ? error.message : 'Failed to initialize data',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Initialize Your Dashboard</CardTitle>
        <CardDescription>
          Create sample categories and habits to get started
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Create Categories</span>
            {status.categories === 'pending' && <span>Waiting</span>}
            {status.categories === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
            {status.categories === 'success' && <Check className="h-4 w-4 text-green-500" />}
            {status.categories === 'error' && <span className="text-red-500">Failed</span>}
          </div>
          <div className="flex items-center justify-between">
            <span>Create Habits</span>
            {status.habits === 'pending' && <span>Waiting</span>}
            {status.habits === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
            {status.habits === 'success' && <Check className="h-4 w-4 text-green-500" />}
            {status.habits === 'error' && <span className="text-red-500">Failed</span>}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={initializeData} 
          disabled={loading || (status.categories === 'success' && status.habits === 'success')}
          className="w-full"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
          {status.categories === 'success' && status.habits === 'success' 
            ? 'Data Initialized' 
            : 'Initialize Data'}
        </Button>
      </CardFooter>
    </Card>
  );
}