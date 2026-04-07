"use client";

import React from "react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { Unit2Exam } from "@/components/english-class/Unit2Exam";
import { Trophy } from "lucide-react";

export default function Unit2ExamPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/30">
      <CurriculumHeader
        hourNumber="20.5"
        title="Unit 2"
        subtitle="Final Exam"
        description="This is the final assessment for Unit 2. Complete the form to identify yourself and answer all 20 questions carefully. Good luck!"
        accentColor="teal"
        moduleInfo="Unit 2 Summary &bull; Assessment"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 text-teal-400 border border-teal-500/20 shadow-[0_0_40px_rgba(20,184,166,0.15)] mb-6">
              <Trophy className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-black text-white text-center tracking-tight">Official Exam Portal</h1>
            <p className="text-slate-400 text-lg mt-4 text-center max-w-2xl">Ensure you have a stable connection. Do not refresh the page during the exam. Your score will be automatically processed.</p>
          </div>

          <div className="pb-32 w-full flex justify-center">
            <Unit2Exam />
          </div>
        </div>
      </section>
    </div>
  );
}
