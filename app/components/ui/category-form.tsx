import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import type { LifeCategory } from '@/types/habit';

// FIX 1: Cambiamos la interfaz para que solo espere los campos del formulario.
interface CategoryFormProps {
  onSubmit: (category: Pick<LifeCategory, 'name' | 'description' | 'color' | 'icon'>) => void;
}

export function CategoryForm({ onSubmit }: CategoryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: '#3b82f6',
    icon: '📊',
  });

  // FIX 2: La función ahora solo envía los datos del formulario.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Envía solo lo que el formulario recolectó.
    // Resetea el estado del formulario después de enviar.
    setFormData({ name: '', description: '', color: '#3b82f6', icon: '📊' });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Category</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Category Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="color">Color</Label>
            <Input
              id="color"
              type="color"
              value={formData.color}
              onChange={(e) => setFormData({ ...formData, color: e.target.value })}
              className="h-10 w-20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="icon">Icon (Emoji)</Label>
            <Input
              id="icon"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              placeholder="Use an emoji"
              required
            />
          </div>
          <Button type="submit">Add Category</Button>
        </form>
      </CardContent>
    </Card>
  );
}