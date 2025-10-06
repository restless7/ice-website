// components/ui/category-modal.tsx
'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useState, useEffect } from "react";
import type { LifeCategory } from '@/types/habit';
import { useToast } from './use-toast';

interface CategoryModalProps {
  open: boolean;
  // --- Renamed Props ---
  openChangeAction: (open: boolean) => void; // Renamed from onOpenChange
  submitAction: (categoryData: Omit<LifeCategory, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'tasks' | 'level' | 'experience' | 'maxExperience'>) => Promise<void>; // Renamed from onSubmit
  // --- End Renamed Props ---
}

// Define only the fields the user will input
const defaultFormData = {
    name: '',
    description: '',
    color: '#3b82f6', // Default Tailwind blue-500
    icon: '📊', // Default icon
};

// --- Update function signature with renamed props ---
export function CategoryModal({ open, openChangeAction, submitAction }: CategoryModalProps) {
  const { toast } = useToast();
  // State for form fields user actually inputs
  const [formData, setFormData] = useState(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
      if (open) {
          setFormData(defaultFormData);
          setIsSubmitting(false); // Ensure submitting state is reset
      }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
        toast({ title: "Validation Error", description: "Category Name is required.", variant: "destructive" });
        return;
    }
    setIsSubmitting(true);

    try {
        // Prepare data based on the expected type for submitAction
        const categoryData: Omit<LifeCategory, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'tasks' | 'level' | 'experience' | 'maxExperience'> = {
            name: formData.name.trim(),
            description: formData.description.trim() || '', // Ensure description is always a string
            color: formData.color,
            icon: formData.icon,
        };

        // --- Use renamed prop to submit ---
        await submitAction(categoryData);
        // --- End use renamed prop ---

        // --- Use renamed prop to close ---
        openChangeAction(false);
        // --- End use renamed prop ---

    } catch (error) {
        console.error("Error adding category:", error);
        toast({
            title: "Error",
            description: "Failed to add category. Please try again.",
            variant: "destructive"
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    // --- Use renamed prop for Dialog control ---
    <Dialog open={open} onOpenChange={openChangeAction}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Category</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          {/* Name Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input
              id="name"
              name="name" // Add name attribute
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Health"
              required
              className="col-span-3"
            />
          </div>
          {/* Description Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">Description</Label>
            <Input
              id="description"
              name="description" // Add name attribute
              value={formData.description}
              onChange={handleChange}
              placeholder="(Optional) What's this category for?"
              className="col-span-3"
            />
          </div>
          {/* Color Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="color" className="text-right">Color</Label>
            <Input
              id="color"
              name="color" // Add name attribute
              type="color"
              value={formData.color}
              onChange={handleChange}
              className="col-span-3 h-10 w-full p-0 border-0" // Adjusted styling for color input
            />
          </div>
          {/* Icon Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="icon" className="text-right">Icon</Label>
            <Input
              id="icon"
              name="icon" // Add name attribute
              value={formData.icon}
              onChange={handleChange}
              placeholder="📊" // Single emoji usually works best
              required
              maxLength={2} // Limit icon length
              className="col-span-3"
            />
          </div>
          <DialogFooter>
             {/* --- Use renamed prop for Cancel button --- */}
             <Button type="button" variant="outline" onClick={() => openChangeAction(false)}>
               Cancel
             </Button>
             {/* --- End use renamed prop --- */}
             <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Adding...' : 'Add Category'}
             </Button>
           </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}