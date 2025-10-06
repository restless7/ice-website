import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import type { CategoryTask } from '@/types/habit';

interface EditTaskModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (updates: Partial<CategoryTask>) => void;
  task: CategoryTask | null;
}

export function EditTaskModal({ open, onOpenChange, onSave, task }: EditTaskModalProps) {
  const [taskForm, setTaskForm] = useState({
    description: task?.description || '',
    points: task?.points || 10,
  });

  const handleSave = () => {
    onSave(taskForm);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            value={taskForm.description}
            onChange={(e) => setTaskForm({ ...taskForm, description: e.target.value })}
            placeholder="Task Description"
          />
          <Input
            type="number"
            value={taskForm.points}
            onChange={(e) => setTaskForm({ ...taskForm, points: Number(e.target.value) })}
            placeholder="Points"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}