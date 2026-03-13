"use client";

import React from "react";
import { motion } from "framer-motion";

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: "blue" | "purple" | "indigo" | "rose" | "emerald";
}

export function StepCard({ 
  icon, 
  title, 
  description, 
  color = "blue" 
}: StepCardProps) {
    const colorConfigs = {
      blue: "text-blue-400 bg-blue-500/10 border-blue-500/20 hover:border-blue-500/30",
      purple: "text-purple-400 bg-purple-500/10 border-purple-500/20 hover:border-purple-500/30",
      indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 hover:border-indigo-500/30",
      rose: "text-rose-400 bg-rose-500/10 border-rose-500/20 hover:border-rose-500/30",
      emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/30",
    };

    const config = colorConfigs[color] || colorConfigs.blue;

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
            }}
            className={`group flex items-start gap-4 p-5 rounded-2xl bg-slate-800/30 border border-white/5 backdrop-blur-sm transition-all duration-300 ${config} hover:bg-slate-800/60`}
        >
            <div className={`shrink-0 p-3 rounded-xl border ${config.split('hover:')[0]} transition-colors duration-300`}>
                {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5" })}
            </div>
            <div>
                <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-100 transition-colors">{title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
}
