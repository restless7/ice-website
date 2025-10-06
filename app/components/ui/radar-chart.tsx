// components/ui/radar-chart.tsx
'use client'; 

import React, { useState, useEffect } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer, // Lo dejamos importado pero no lo usamos
  Tooltip,
} from 'recharts';
import type { LifeCategory } from '@/types/habit';

// ... (DEFAULT_CATEGORIES y LifeRadarProps se mantienen igual) ...
export interface LifeRadarProps {
  categories?: LifeCategory[];
  className?: string;
}

const DEFAULT_CATEGORIES: LifeCategory[] = [
    { id: '1', name: 'Health', description: 'Physical well-being', color: '#ef4444', icon: '🏃', level: 1, experience: 0, maxExperience: 100, userId: 'user1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '2', name: 'Career', description: 'Professional growth', color: '#3b82f6', icon: '💼', level: 1, experience: 0, maxExperience: 100, userId: 'user1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '3', name: 'Learning', description: 'Knowledge acquisition', color: '#22c55e', icon: '📚', level: 1, experience: 0, maxExperience: 100, userId: 'user1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
];

export const LifeRadarChart: React.FC<LifeRadarProps> = ({ 
  categories,
  className = ''
}) => {
  const [chartData, setChartData] = useState<any[]>([]);

  const dataToRender = categories && categories.length > 0 ? categories : DEFAULT_CATEGORIES;

  useEffect(() => {
    const maxLevel = dataToRender.length > 0 ? Math.max(...dataToRender.map(c => c.level), 5) : 5;
    const formattedData = dataToRender.map(cat => ({
      category: cat.name,
      level: cat.level,
      experiencePercent: cat.maxExperience > 0 ? (cat.experience / cat.maxExperience) * 100 : 0,
      fullMark: maxLevel + 1,
    }));
    setChartData(formattedData);
  }, [dataToRender]);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background/80 backdrop-blur-sm p-3 rounded-lg border border-border shadow-lg">
          <p className="font-bold text-foreground">{data.category}</p>
          <p className="text-sm text-muted-foreground">Level: {data.level}</p>
          <p className="text-sm text-muted-foreground">Progress to next: {Math.round(data.experiencePercent)}%</p>
        </div>
      );
    }
    return null;
  };

  // --- COMIENZO DE LA PRUEBA ---
  // Cambiamos el contenedor para que simplemente centre el gráfico de tamaño fijo.
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <RadarChart 
        // Eliminamos ResponsiveContainer y ponemos un tamaño fijo
        width={450} 
        height={400}
        outerRadius="80%" 
        data={chartData}
      >
        {/* Las props de color son importantes para la visibilidad */}
        <PolarGrid gridType="polygon" className="stroke-muted-foreground/30" />
        <PolarAngleAxis dataKey="category" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
        <PolarRadiusAxis angle={30} domain={[0, chartData[0]?.fullMark ?? 6]} axisLine={false} tick={false} />
        <Radar name="Level" dataKey="level" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--primary))", fillOpacity: 0.1 }} />
      </RadarChart>
    </div>
  );
  // --- FIN DE LA PRUEBA ---
};

export default LifeRadarChart;