"use client";

import React from "react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { Unit1Exam } from "@/components/english-class/Unit1Exam";
import { Trophy } from "lucide-react";

export default function Unit1ExamPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      <CurriculumHeader
        hourNumber="10.5"
        title="Unit 1"
        subtitle="Practice Exam & Certification"
        description="This is the final assessment for Unit 1 (Hours 1 to 10). Complete the registration form and answer all 20 questions to verify your A1+ Foundational Fluency."
        accentColor="blue"
        moduleInfo="Unit 1 Summary &bull; Assessment"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.15)] mb-6">
              <Trophy className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-black text-white text-center tracking-tight">Official Unit 1 Exam Portal</h1>
            <p className="text-slate-400 text-lg mt-4 text-center max-w-2xl">Ensure you have a stable connection. Answer all questions to submit your exam score.</p>
          </div>

          <div className="pb-32 w-full flex justify-center">
            <Unit1Exam />
          </div>
        </div>
      </section>
    </div>
  );
}
