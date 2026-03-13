"use client";

import React from "react";
import { Lightbulb } from "lucide-react";

interface CurriculumContextProps {
  title: string;
  children: React.ReactNode;
  accentColor?: "indigo" | "purple" | "rose" | "emerald" | "blue" | "cyan" | "amber" | "teal";
  icon?: React.ReactNode;
}

export function CurriculumContext({
  title,
  children,
  accentColor = "indigo",
  icon = <Lightbulb className="w-5 h-5 flex-shrink-0" />
}: CurriculumContextProps) {
  const textColorMap = {
    indigo: "text-indigo-400",
    purple: "text-purple-400",
    rose: "text-rose-400",
    emerald: "text-emerald-400",
    blue: "text-blue-400",
    cyan: "text-cyan-400",
    amber: "text-amber-400",
    teal: "text-teal-400",
  };

  const textColor = textColorMap[accentColor as keyof typeof textColorMap] || textColorMap.indigo;

  return (
    <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 shadow-xl">
      <h4 className={`${textColor} font-semibold mb-3 flex items-center gap-2`}>
         {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5 flex-shrink-0" })}
         {title}
      </h4>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}
