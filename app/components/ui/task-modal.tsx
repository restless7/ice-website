// components/ui/task-modal.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { useState, useEffect } from "react"
import type { CategoryTask } from '@/types/habit'

interface TaskModalProps {
  open: boolean;
  onClose: () => void;
  onOpenChange: (open: boolean) => void;
  onAdd: (task: { description: string, points: number }) => void;
  onEdit?: (task: { description: string, points: number }) => void;
  points: number;
  editTask?: CategoryTask | null; // Task to edit (null means add mode)
  mode?: 'add' | 'edit';
}

export function TaskModal({ open, onOpenChange, onAdd, onEdit, points, editTask, mode = 'add' }: TaskModalProps) {
  const [description, setDescription] = useState('');
  const [taskPoints, setTaskPoints] = useState(points);
  
  const isEditMode = mode === 'edit' && editTask;

  // Update form state when modal opens or editTask changes
  useEffect(() => {
    if (open) {
      if (isEditMode && editTask) {
        setDescription(editTask.description);
        setTaskPoints(editTask.points);
      } else {
        setDescription('');
        setTaskPoints(points);
      }
    }
  }, [open, editTask, isEditMode, points]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditMode && onEdit) {
      onEdit({ description, points: taskPoints });
    } else {
      onAdd({ description, points: taskPoints });
    }
    
    onOpenChange(false);
    setDescription('');
    setTaskPoints(points);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isEditMode ? `Edit Task (${taskPoints} XP)` : `Add New Task (${taskPoints} XP)`}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="description">Task Description</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Run for 30 minutes"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="points">Points (XP)</Label>
            <select
              id="points"
              value={taskPoints}
              onChange={(e) => setTaskPoints(Number(e.target.value))}
              className="w-full px-3 py-2 border border-slate-600 bg-slate-700 text-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={10}>10 XP</option>
              <option value={25}>25 XP</option>
              <option value={50}>50 XP</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              {isEditMode ? 'Update Task' : 'Add Task'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
