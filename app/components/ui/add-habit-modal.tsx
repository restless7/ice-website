// components/ui/add-habit-modal.tsx
'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';
import type { DailyHabit } from '@/types/habit';
import { useToast } from './use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";

type TimeOfDay = 'Early morning' | 'Working hours' | 'Lunch' | 'Evening' | 'Night';

interface AddHabitModalProps {
 timeOfDay: TimeOfDay;
 isOpen: boolean;
 CloseAction: () => void;
 categories: Array<{ id: string; name: string }>;
 SubmitAction: (habitData: Omit<DailyHabit, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) => Promise<void>;
}

const defaultFormData = {
 name: '',
 description: '',
 points: 10,
 priority: 'Medium' as DailyHabit['priority'],
 timeOfDay: 'Early morning' as TimeOfDay,
 categoryId: 'none',
};

export function AddHabitModal({
 timeOfDay,
 SubmitAction,
 isOpen,
 CloseAction,
 categories = []
}: AddHabitModalProps) {
 const { toast } = useToast();
 const [isSubmitting, setIsSubmitting] = useState(false);

 const [formData, setFormData] = useState({
   ...defaultFormData,
   timeOfDay: timeOfDay,
   categoryId: 'none',
 });

 useEffect(() => {
   if (isOpen) {
     setFormData({
       ...defaultFormData,
       timeOfDay: timeOfDay,
       categoryId: 'none',
     });
   }
 }, [isOpen, timeOfDay]);


 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   const { name, value, type } = e.target;
   setFormData({
     ...formData,
     [name]: type === 'number' ? parseInt(value, 10) || 0 : value
   });
 };

 const handleSelectChange = (name: string, value: string) => {
   setFormData(prev => ({
       ...prev,
       [name]: value
   }));
 };

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
   if (!formData.name) {
       toast({
           title: "Validation Error",
           description: "Habit Name is required.",
           variant: "destructive",
       });
       return;
   }
   setIsSubmitting(true);

   try {
     const habitData: Omit<DailyHabit, 'id' | 'userId' | 'createdAt' | 'updatedAt'> = {
         name: formData.name.trim(),
         description: formData.description.trim() || null,
         points: Number(formData.points),
         priority: formData.priority,
         timeOfDay: formData.timeOfDay as TimeOfDay,
         categoryId: formData.categoryId === 'none' ? null : formData.categoryId,
     };

     await SubmitAction(habitData);
     CloseAction();

   } catch (error) {
       toast({
           // FIX 1: Replaced ' with ' in "Failed to create habit"
           title: 'Error',
           description: 'Failed to create habit. Please try again.',
           variant: 'destructive'
       });
       console.error('Error creating habit:', error);
   } finally {
       setIsSubmitting(false);
   }
 };

 const handleOpenChange = (open: boolean) => {
     if (!open) {
         CloseAction();
     }
 };

 return (
   <Dialog open={isOpen} onOpenChange={handleOpenChange}>
     <DialogContent className="sm:max-w-[425px]">
       <DialogHeader>
         <DialogTitle>Add New Habit</DialogTitle>
         <DialogDescription>
           {/* FIX 2: Replaced ' with ' in "'{timeOfDay}'" */}
           Create a new daily habit for &apos;{timeOfDay}&apos;.
         </DialogDescription>
       </DialogHeader>

       <form onSubmit={handleSubmit} className="grid gap-4 py-4">
         <div className="grid grid-cols-4 items-center gap-4">
           <Label htmlFor="name" className="text-right">Name</Label>
           <Input
             id="name"
             name="name"
             value={formData.name}
             onChange={handleChange}
             placeholder="e.g., Morning Meditation"
             required
             className="col-span-3"
           />
         </div>

         <div className="grid grid-cols-4 items-center gap-4">
           <Label htmlFor="description" className="text-right">Description</Label>
           <Textarea
             id="description"
             name="description"
             value={formData.description || ''} // Ensure value is not null
             onChange={handleChange}
             placeholder="(Optional) Describe your habit..."
             rows={3}
             className="col-span-3"
           />
         </div>

         <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="points" className="text-right">Points</Label>
            <Input
              id="points"
              name="points"
              type="number"
              min={1}
              max={100}
              value={formData.points}
              onChange={handleChange}
              required
              className="col-span-3"
            />
           </div>

           <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="priority" className="text-right">Priority</Label>
                <Select
                  name="priority"
                  value={formData.priority}
                  onValueChange={(value: DailyHabit['priority']) => handleSelectChange('priority', value)}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Critical">Critical</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
           </div>

           <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="timeOfDay" className="text-right">Time</Label>
                 <Select
                   name="timeOfDay"
                   value={formData.timeOfDay}
                   onValueChange={(value: TimeOfDay) => handleSelectChange('timeOfDay', value)}
                 >
                   <SelectTrigger className="col-span-3">
                     <SelectValue placeholder="Select time slot" />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="Early morning">Early morning</SelectItem>
                     <SelectItem value="Working hours">Working hours</SelectItem>
                     <SelectItem value="Lunch">Lunch</SelectItem>
                     <SelectItem value="Evening">Evening</SelectItem>
                     <SelectItem value="Night">Night</SelectItem>
                   </SelectContent>
                 </Select>
           </div>

           {categories.length > 0 && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="categoryId" className="text-right">Category</Label>
              <Select
                name="categoryId"
                value={formData.categoryId}
                onValueChange={(value: string) => handleSelectChange('categoryId', value)}
              >
                <SelectTrigger id="categoryId" className="col-span-3">
                  <SelectValue placeholder="Select category (Optional)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
           )}

         <DialogFooter>
            <Button type="button" variant="outline" onClick={CloseAction}>Cancel</Button>
           <Button type="submit" disabled={isSubmitting}>
             {isSubmitting ? 'Adding...' : 'Add Habit'}
           </Button>
         </DialogFooter>
       </form>
     </DialogContent>
   </Dialog>
 );
}