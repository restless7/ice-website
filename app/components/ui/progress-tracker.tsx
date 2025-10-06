// components/ui/progress-tracker.tsx
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Pencil, Trash2, X, Check, RefreshCw, Plus } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import type { LifeCategory } from '@/types/habit';
import type { CategoryTask } from '@/types/habit';
import { EditTaskModal } from './edit-task-modal';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";


interface ProgressTrackerProps {
  category: LifeCategory;
  onProgress: (categoryId: string, amount: number, taskId?: string) => void;
  onEdit: (categoryId: string, updatedCategory: Partial<LifeCategory>) => void;
  onDelete: (categoryId: string) => void;
  onReset: (categoryId: string) => void;
  onAddTask: (categoryId: string, points: number) => void;
  onEditTask: (taskId: string, updates: Partial<CategoryTask>) => void;
  onDeleteTask: (taskId: string) => void;
}

export function ProgressTracker({ 
  category, 
  onProgress, 
  onEdit, 
  onDelete,
  onReset,
  onAddTask,
  onEditTask,
  onDeleteTask 
}: ProgressTrackerProps) {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskModal, setEditTaskModal] = useState({
    isOpen: false,
    task: null as CategoryTask | null,
  });
  const [editForm, setEditForm] = useState({
    name: category.name,
    description: category.description,
    color: category.color,
    icon: category.icon,
  });
  const findTaskById = (taskId: string) => {
    return [...tasksByPoints[10], ...tasksByPoints[25], ...tasksByPoints[50]]
      .find(t => t.id === taskId);
  };
  const handleEditClick = () => {
    if (selectedTaskId) {
      const task = findTaskById(selectedTaskId);
      if (task) {
        setEditTaskModal({
          isOpen: true,
          task
        });
      }
    }
  };
  const progressPercentage = (category.experience / category.maxExperience) * 100;

  const handleSave = () => {
    onEdit(category.id, editForm);
    setIsEditing(false);
  };
  
  // Group tasks by points
  const tasksByPoints: Record<number, CategoryTask[]> = {
    10: category.tasks?.filter((task: CategoryTask) => task.points === 10) || [],
    25: category.tasks?.filter((task: CategoryTask) => task.points === 25) || [],
    50: category.tasks?.filter((task: CategoryTask) => task.points === 50) || []
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          {isEditing ? (
            <div className="flex flex-col gap-2 w-full">
              <div className="flex gap-2 items-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="w-16">
                      {editForm.icon}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <EmojiPicker
                      onEmojiClick={(emojiData) => 
                        setEditForm({ ...editForm, icon: emojiData.emoji })
                      }
                      width="100%"
                      height={400}
                    />
                  </PopoverContent>
                </Popover>
                <Input
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  placeholder="Category Name"
                />
              </div>
              <Input
                value={editForm.description}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                placeholder="Description"
              />
              <Input
                type="color"
                value={editForm.color}
                onChange={(e) => setEditForm({ ...editForm, color: e.target.value })}
                className="h-8 w-16"
              />
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={handleSave}>
                  <Check className="h-4 w-4" />
                  Save
                </Button>
                <Button size="sm" variant="outline" onClick={() => setIsEditing(false)}>
                  <X className="h-4 w-4" />
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <>
              <CardTitle className="flex items-center gap-2 text-lg">
                <span>{category.icon}</span>
                {category.name}
              </CardTitle>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsEditing(true)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>


                {/* Reset Progress Alert Dialog */}

                {/* ====================================================================== */}
{/* DEBUG: Reset Progress Alert Dialog IS COMMENTED OUT */}
{/* ====================================================================== */}
{/*
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-yellow-500 hover:text-yellow-600"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Reset Progress</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to reset {category.name}? This will set the level back to 1 and remove all experience points. This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => onReset(category.id)}
                        className="bg-yellow-500 hover:bg-yellow-600"
                      >
                        Reset
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                {/* Delete Category Alert Dialog */}
                {/* ====================================================================== */}
{/* DEBUG: Delete Category Alert Dialog IS COMMENTED OUT */}
{/* ====================================================================== */}
{/*
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-destructive hover:text-destructive/90"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Category</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete {category.name}? This action cannot be undone and you will lose all progress in this category.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => onDelete(category.id)}
                        className="bg-destructive hover:bg-destructive/90"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                */}
              </div>
            </>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isEditing && (
          <p className="text-sm text-muted-foreground">{category.description}</p>
        )}
        <div className="flex justify-between text-sm">
          <span>Level {category.level}</span>
          <span>
            {category.experience}/{category.maxExperience} XP
          </span>
        </div>
        <div className="w-full bg-secondary h-2 rounded-full">
          <div 
            className="bg-primary h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        
        {/* Tasks Section */}
        <div className="space-y-4 mt-6">
          {/* Quick Tasks (10 XP) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Quick Tasks (10 XP)</h4>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onAddTask(category.id, 10)}
                className="h-8 px-2"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {tasksByPoints[10].length > 0 ? (
              <div className="space-y-1">
                {/* Task rendering with selection */}
                {tasksByPoints[10].map((task: CategoryTask) => (
                  <div 
                    key={task.id} 
                    className={`flex items-center justify-between p-2 rounded-md transition-colors ${
                      selectedTaskId === task.id 
                        ? 'bg-accent/30' 
                        : 'bg-accent/10 hover:bg-accent/20'
                    }`}
                    onClick={() => setSelectedTaskId(task.id === selectedTaskId ? null : task.id)}
                  >
                    <span className="text-sm">{task.description}</span>
                    <Button
                      size="sm" 
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent selection when clicking the button
                        onProgress(category.id, task.points, task.id);
                      }}
                    >
                      +{task.points} XP
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground italic">No quick tasks yet</p>
            )} 
          </div>

          {/* Medium Tasks (25 XP) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Medium Tasks (25 XP)</h4>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onAddTask(category.id, 25)}
                className="h-8 px-2"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {tasksByPoints[25].length > 0 ? (
              <div className="space-y-1">
                {/* Task rendering with selection */}
                {tasksByPoints[25].map((task: CategoryTask) => (
                  <div 
                    key={task.id} 
                    className={`flex items-center justify-between p-2 rounded-md transition-colors ${
                      selectedTaskId === task.id 
                        ? 'bg-accent/30' 
                        : 'bg-accent/10 hover:bg-accent/20'
                    }`}
                    onClick={() => setSelectedTaskId(task.id === selectedTaskId ? null : task.id)}
                  >
                    <span className="text-sm">{task.description}</span>
                    <Button
                      size="sm" 
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent selection when clicking the button
                        onProgress(category.id, task.points, task.id);
                      }}
                    >
                      +{task.points} XP
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground italic">No medium tasks yet</p>
            )}
          </div>

          {/* Major Tasks (50 XP) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Major Tasks (50 XP)</h4>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onAddTask(category.id, 50)}
                className="h-8 px-2"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {tasksByPoints[50].length > 0 ? (
              <div className="space-y-1">
                {/* Task rendering with selection */}
                {tasksByPoints[50].map((task: CategoryTask) => (
                  <div 
                    key={task.id} 
                    className={`flex items-center justify-between p-2 rounded-md transition-colors ${
                      selectedTaskId === task.id 
                        ? 'bg-accent/30' 
                        : 'bg-accent/10 hover:bg-accent/20'
                    }`}
                    onClick={() => setSelectedTaskId(task.id === selectedTaskId ? null : task.id)}
                  >
                    <span className="text-sm">{task.description}</span>
                    <Button
                      size="sm" 
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent selection when clicking the button
                        onProgress(category.id, task.points, task.id);
                      }}
                    >
                      +{task.points} XP
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground italic">No major tasks yet</p>
            )}
          </div>
        </div>

        {/* Task management controls - shown when a task is selected */}
        {selectedTaskId && (
          <div className="flex justify-end gap-2 mt-4 border-t pt-4 border-border">
            <Button
              size="sm"
              variant="outline"
              onClick={handleEditClick}
              >
                <Pencil className="h-4 w-4 mr-1" />
                Edit Task
              </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-destructive hover:text-destructive"
              onClick={() => {
                onDeleteTask(selectedTaskId);
                setSelectedTaskId(null);
              }}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete Task
            </Button>
          </div>
        )}

        {/* Edit Task Modal */}
        <EditTaskModal
          open={editTaskModal.isOpen}
          onOpenChange={(open) => setEditTaskModal(prev => ({ ...prev, isOpen: open }))}
          onSave={(updates) => {
            if (selectedTaskId) {
              onEditTask(selectedTaskId, updates);
              setSelectedTaskId(null);
            }
          }}
          task={editTaskModal.task}
        />
      </CardContent>
    </Card>
  );
}