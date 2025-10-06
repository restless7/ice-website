'use client';

import React, { useState, useEffect } from 'react';
import type { DailyHabit } from '@/types/habit';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import {
  CSS,
} from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';
import { useCompletionStatus } from '@/hooks/useCompletionStatus';
import { HabitCompletionButton } from '@/app/components/ui/habit-completion-button';

interface HabitTrackerProps {
  timeOfDay: string;
  habits: DailyHabit[];
  onCompleteAction: (habitId: string, completed: boolean) => void;
  onReorderHabits?: (timeOfDay: string, oldIndex: number, newIndex: number) => void;
}

export function HabitTracker({ timeOfDay, habits, onCompleteAction, onReorderHabits }: HabitTrackerProps) {
  const [localHabits, setLocalHabits] = useState(habits);
  const { isHabitCompleted, updateHabitCompletion, refreshCompletionStatus } = useCompletionStatus();
  
  // Make this time slot a droppable area
  const { isOver, setNodeRef } = useDroppable({
    id: timeOfDay,
  });

  const handleHabitComplete = async (e: React.MouseEvent, habitId: string) => {
    e.stopPropagation();
    await onCompleteAction(habitId, true); // Always completing (true) since we're using a Complete button
  };

  // Update local habits when props change - but preserve local reordering during drag operations
  React.useEffect(() => {
    // Only update if the habits array actually changed (not just reordered)
    const currentIds = localHabits.map(h => h.id).sort();
    const newIds = habits.map(h => h.id).sort();
    const idsChanged = currentIds.join(',') !== newIds.join(',');
    
    if (idsChanged) {
      setLocalHabits(habits);
    }
  }, [habits, localHabits]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 bg-clip-text text-transparent mb-4">{timeOfDay}</h3>
      <SortableContext 
        items={localHabits.map(habit => habit.id)}
        strategy={verticalListSortingStrategy}
      >
        <div 
          ref={setNodeRef}
          className={`space-y-3 min-h-[80px] p-3 rounded-lg border-2 border-dashed transition-all duration-200 ${
            isOver 
              ? 'border-blue-400 bg-blue-500/10' 
              : localHabits.length === 0 
                ? 'border-slate-600/50 hover:border-slate-500' 
                : 'border-transparent hover:border-slate-600'
          }`}
        >
          {localHabits.length === 0 ? (
            <div className="flex items-center justify-center h-full py-6">
              <div className="text-slate-400 text-sm text-center">
                {isOver ? (
                  <div className="text-blue-400 font-medium">
                    Drop habit here
                  </div>
                ) : (
                  <div>
                    <div className="text-slate-500 mb-1">No habits scheduled</div>
                    <div className="text-xs text-slate-600">Drag habits here or add new ones</div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <>
              {localHabits.map(habit => (
                <SortableHabitCard 
                  key={habit.id} 
                  habit={habit} 
                  onHabitComplete={handleHabitComplete}
                />
              ))}
              {isOver && (
                <div className="text-center py-2 text-blue-400 text-sm font-medium">
                  Drop habit here
                </div>
              )}
            </>
          )}
        </div>
      </SortableContext>
    </div>
  );
}

interface SortableHabitCardProps {
  habit: DailyHabit;
  onHabitComplete: (e: React.MouseEvent, habitId: string) => Promise<void>;
}

function SortableHabitCard({ habit, onHabitComplete }: SortableHabitCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: habit.id });
  
  const { isHabitCompleted } = useCompletionStatus();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const isCompleted = isHabitCompleted(habit.id);

  return (
    <Card 
      ref={setNodeRef} 
      style={{
        ...style,
        borderLeftColor: getPriorityColor(habit.priority)
      }} 
      className={`border-l-4 ${isDragging ? 'shadow-2xl z-50' : 'hover:shadow-lg'} transition-all duration-200 bg-slate-900/50 border-slate-700 ${
        isCompleted ? 'opacity-60' : ''
      }`}
    >
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-start space-x-3">
          <div 
            {...attributes} 
            {...listeners} 
            className="cursor-grab active:cursor-grabbing p-1 rounded hover:bg-slate-100 transition-colors"
          >
            <GripVertical className="h-4 w-4 text-slate-400" />
          </div>
          <div className="flex-1">
            <div className={`font-medium ${isCompleted ? 'line-through text-slate-400' : 'text-slate-200'}`}>
              {habit.name}
            </div>
            {habit.description && (
              <p className={`text-sm ${isCompleted ? 'line-through text-slate-500' : 'text-slate-400'}`}>
                {habit.description}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="flex items-center bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
            <span className="mr-1">★</span> {habit.points}
          </Badge>
          <Badge variant={priorityVariant(habit.priority)} className={getBadgeClasses(habit.priority)}>
            {habit.priority}
          </Badge>
          <HabitCompletionButton
            habitId={habit.id}
            onClick={onHabitComplete}
          />
        </div>
      </CardContent>
    </Card>
  );
}


function getPriorityColor(priority: string): string {
  const colors: Record<string, string> = {
    Critical: '#ef4444',
    High: '#f97316',
    Medium: '#3b82f6',
    Low: '#10b981',
  };
  return colors[priority] || '#6b7280';
}

function priorityVariant(priority: string): 'default' | 'destructive' | 'outline' | 'secondary' {
  const variants: Record<string, 'default' | 'destructive' | 'outline' | 'secondary'> = {
    Critical: 'destructive',
    High: 'default',
    Medium: 'secondary',
    Low: 'outline',
  };
  return variants[priority] || 'outline';
}

function getBadgeClasses(priority: string): string {
  const classes: Record<string, string> = {
    Critical: 'bg-red-500/20 text-red-300 border-red-500/30',
    High: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    Medium: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    Low: 'bg-green-500/20 text-green-300 border-green-500/30',
  };
  return classes[priority] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
}
