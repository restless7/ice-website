import { EmptyState } from '@/app/components/ui/empty-state';
import { Calendar } from 'lucide-react';
import { FC } from 'react';


interface EmptyHabitsProps {
  onAddHabit: () => void;
}

export const EmptyHabits: FC<EmptyHabitsProps> = ({ onAddHabit }) => {
  return (
    <EmptyState
      title="No habits yet"
      description="Create your first habit to start tracking your daily progress."
      icon={<Calendar className="h-12 w-12" />}
      actionLabel="Add your first habit"
      onAction={onAddHabit}
    />
  );
};