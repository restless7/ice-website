"use client";

import React from "react";
import { motion } from "framer-motion";

interface CurriculumBlockProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  methodology: string;
  children: React.ReactNode;
  accentColor?: "indigo" | "purple" | "rose" | "emerald" | "blue" | "cyan" | "amber" | "teal";
}

export function CurriculumBlock({ 
  icon, 
  title, 
  subtitle, 
  methodology, 
  children,
  accentColor = "indigo"
}: CurriculumBlockProps) {
  const colorMap = {
    indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 shadow-indigo-500/10",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20 shadow-purple-500/10",
    rose: "text-rose-400 bg-rose-500/10 border-rose-500/20 shadow-rose-500/10",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 shadow-emerald-500/10",
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20 shadow-blue-500/10",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 shadow-cyan-500/10",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20 shadow-amber-500/10",
    teal: "text-teal-400 bg-teal-500/10 border-teal-500/20 shadow-teal-500/10",
  };

  const accentStyles = colorMap[accentColor as keyof typeof colorMap] || colorMap.indigo;

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
      }}
      className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-colors"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
        <div className={`shrink-0 p-3 rounded-xl border ${accentStyles}`}>
          {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6" })}
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className={`${accentStyles.split(' ')[0]} font-medium uppercase tracking-tight text-xs`}>{subtitle}</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md text-xs font-medium border border-slate-700">
              Method: {methodology}
            </span>
          </div>
        </div>
      </div>
      <div className="pl-0 sm:pl-16">
        {children}
      </div>
    </motion.div>
  );
}
