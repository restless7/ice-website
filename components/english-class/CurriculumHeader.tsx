"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface CurriculumHeaderProps {
  hourNumber: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor?: "indigo" | "purple" | "rose" | "emerald" | "blue" | "cyan" | "amber" | "teal";
  moduleInfo?: string;
}

export function CurriculumHeader({
  hourNumber,
  title,
  subtitle,
  description,
  accentColor = "indigo",
  moduleInfo = "Intensive English Program"
}: CurriculumHeaderProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const gradientMap = {
    indigo: "from-indigo-400 via-purple-300 to-rose-400",
    emerald: "from-emerald-400 via-cyan-300 to-blue-400",
    rose: "from-rose-400 via-orange-300 to-amber-400",
    teal: "from-teal-400 via-emerald-300 to-cyan-400",
    amber: "from-amber-400 via-yellow-300 to-orange-400",
  };

  const gradient = gradientMap[accentColor as keyof typeof gradientMap] || gradientMap.indigo;

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-${accentColor}-900/20 via-slate-950 to-slate-950 -z-10`} />
      <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-${accentColor}-500/10 blur-[150px] rounded-full -z-10 opacity-50`} />
      
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeIn}
        >
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm font-semibold mb-8 shadow-lg">
            <GraduationCap className={`w-4 h-4 text-${accentColor}-400`} />
            <span>{moduleInfo} • Hour {hourNumber}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            <span className="text-slate-100">{title}</span>
            <br />
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
              {subtitle}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
