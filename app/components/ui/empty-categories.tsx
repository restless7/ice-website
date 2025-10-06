// components/ui/empty-categories.tsx
import { EmptyState } from '@/app/components/ui/empty-state';
import { LayoutGrid } from 'lucide-react';
import { FC } from 'react';



interface EmptyCategoriesProps {
  onAddCategory: () => void;
}

export const EmptyCategories: FC<EmptyCategoriesProps> = ({ onAddCategory }) => {
  return (
    <EmptyState
      title="No categories yet"
      description="Create your first life category to organize your habits and track progress."
      icon={<LayoutGrid className="h-12 w-12" />}
      actionLabel="Add your first category"
      onAction={onAddCategory}
    />
  );
};