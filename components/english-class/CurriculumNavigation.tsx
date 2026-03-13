"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CurriculumNavigationProps {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
  accentColor?: "indigo" | "purple" | "rose" | "emerald" | "blue" | "cyan" | "amber" | "teal";
}

export function CurriculumNavigation({
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
  accentColor = "indigo"
}: CurriculumNavigationProps) {
  const accentClassMap = {
    indigo: "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30",
    emerald: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/30",
    rose: "bg-rose-600 hover:bg-rose-500 shadow-rose-500/30",
    teal: "bg-teal-600 hover:bg-teal-500 shadow-teal-500/30",
    amber: "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/30",
  };

  const accentClass = accentClassMap[accentColor as keyof typeof accentClassMap] || accentClassMap.indigo;

  return (
    <section className="py-12 border-t border-slate-800 bg-slate-950 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-t from-${accentColor}-900/10 to-transparent -z-10`} />
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
        {prevHref ? (
          <Link href={prevHref} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
            <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-slate-500 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
            </div>
            <div className="text-sm font-medium text-left">
              <span className="block text-slate-500 text-xs">Previous Module</span>
              {prevLabel}
            </div>
          </Link>
        ) : (
          <div className="hidden md:block w-32" />
        )}
        
        <button className={`${accentClass} font-bold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300`}>
          Download Materials
        </button>

        {nextHref ? (
          <Link href={nextHref} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group text-right">
            <div className="text-sm font-medium">
              <span className="block text-slate-500 text-xs text-right">Next Module</span>
              {nextLabel}
            </div>
            <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-slate-500 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ) : (
          <div className="hidden md:block w-32" />
        )}
      </div>
    </section>
  );
}
