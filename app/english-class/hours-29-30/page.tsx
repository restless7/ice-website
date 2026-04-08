"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Swords,
  Mic2,
  Star,
  Users,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  BookOpen,
  Target,
  RefreshCw
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";
import Link from "next/link";

export default function EnglishClassHours29and30() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-500/30">
      <CurriculumHeader
        hourNumber="29 &amp; 30"
        title="The Gauntlet"
        subtitle="Ultimate Dress Rehearsal"
        description="All 35+ questions. Randomized. No mercy. This is the final exam — a full-length simulated embassy interview under real diplomatic pressure. Pass or repeat."
        accentColor="rose"
        moduleInfo="Unit 3: Conversation Strategies &bull; Part 5 (FINAL)"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 29: The Recovery Strategy + Full Question Bank */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500/50 via-rose-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500/20 to-red-500/10 text-rose-400 border border-rose-500/20 shadow-[0_0_40px_rgba(244,63,94,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">29</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Final Prep</h2>
                      <p className="text-rose-400 font-medium tracking-wide text-xs uppercase">The Recovery Strategy</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Everyone makes mistakes. What separates a Pass from a Fail is how you <strong className="text-white">recover</strong>. Learn the art of the smooth correction.
                  </p>

                  <CurriculumContext title="The Advanced Recovery Loop" accentColor="rose">
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed italic">
                      "I see you said you study Law, but your job offer is for a Lifeguard. Isn't that a contradiction?"
                    </p>
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-rose-500/20">
                        <p className="text-[10px] text-rose-400 font-bold uppercase mb-1 flex items-center gap-2"><RefreshCw className="w-3 h-3" /> Step 1: Acknowledge & Pivot</p>
                        <p className="text-xs text-slate-300">"That's an interesting point, Officer. While Law is my academic passion, I've always been an active swimmer, and this job allows me to fund my studies while practicing professional responsibility."</p>
                      </div>
                      <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
                        <p className="text-[10px] text-emerald-400 font-bold uppercase mb-1 flex items-center gap-2"><ShieldCheck className="w-3 h-3" /> Step 2: The Logic Bridge</p>
                        <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-tighter">Connect the disparate dots using high-stakes vocational vocabulary.</p>
                      </div>
                    </div>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<BookOpen />}
                    title="Phase 1: The Master Question Bank"
                    subtitle="20 Minutes &bull; The Final 50"
                    methodology="Cognitive Load Stress Test"
                    accentColor="rose"
                  >
                    <div className="grid grid-cols-1 gap-4 mt-6">
                       <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-all">
                          <div className="flex items-center gap-3 mb-4">
                             <Target className="w-5 h-5 text-rose-400" />
                             <h4 className="text-white font-bold text-sm tracking-widest uppercase">The Critical Path Questions</h4>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                             {[
                               "What are you going to do specifically in [City]?",
                               "Why did you choose this employer over others?",
                               "How will this benefit your career in Colombia?",
                               "What will you do if your flight is delayed?",
                               "How much did you pay in total for the visa?",
                               "Explain your daily responsibilities in detail.",
                               "What is your plan for the first night in the US?",
                               "How do you plan to handle a workplace emergency?",
                               "Why should I grant you this visa today?",
                               "What is your backup plan if the job falls through?"
                             ].map((q, idx) => (
                               <p key={idx} className="text-[11px] text-slate-400 font-mono border-b border-slate-800/50 pb-1 hover:text-white transition-colors">
                                 <span className="text-rose-500/50 mr-2">{idx + 1}.</span> {q}
                               </p>
                             ))}
                          </div>
                       </div>

                       <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                             <p className="text-[10px] text-indigo-400 font-bold uppercase mb-2">The Immigrant Intent Bank</p>
                             <ul className="text-[10px] text-slate-500 space-y-1">
                                <li>• Will you apply for another visa?</li>
                                <li>• Do you plan to visit New York City?</li>
                                <li>• What happens after September [Date]?</li>
                                <li>• Are you returning to finish your thesis?</li>
                             </ul>
                          </div>
                          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                             <p className="text-[10px] text-emerald-400 font-bold uppercase mb-2">The Vocational Bank</p>
                             <ul className="text-[10px] text-slate-500 space-y-1">
                                <li>• Explain the 'Wilberforce' rights.</li>
                                <li>• How many hours per week is average?</li>
                                <li>• Describe your housing arrangement.</li>
                                <li>• Who is your emergency contact?</li>
                             </ul>
                          </div>
                       </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 30: The Gauntlet */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/50 via-red-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/10 text-red-400 border border-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">30</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">The Gauntlet</h2>
                      <p className="text-red-400 font-medium tracking-wide text-xs uppercase">Pass or Repeat</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Three chairs. Three &quot;Embassy windows.&quot; The teacher and invited observers act as strict officers. Randomized questions. Pass/Fail grading.
                  </p>

                  <div className="bg-rose-500/10 rounded-xl p-5 border border-rose-500/20">
                    <h4 className="text-rose-400 font-bold text-xs uppercase mb-3 flex items-center gap-2"><Trophy className="w-4 h-4" /> Grading System</h4>
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="flex justify-between"><span>Fluency &amp; Hesitation</span><span className="text-rose-400 font-mono">/4</span></div>
                      <div className="flex justify-between"><span>Tense Accuracy</span><span className="text-rose-400 font-mono">/4</span></div>
                      <div className="flex justify-between"><span>Vocabulary &amp; Details</span><span className="text-rose-400 font-mono">/4</span></div>
                      <div className="flex justify-between"><span>Poise &amp; Confidence</span><span className="text-rose-400 font-mono">/4</span></div>
                      <hr className="border-slate-800 my-2" />
                      <div className="flex justify-between font-bold text-white"><span>Minimum to Pass</span><span className="text-emerald-400 font-mono">12/16</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Swords />}
                    title="Phase 2: The Gauntlet Exam"
                    subtitle="45 Minutes &bull; Live One-on-One Assessment"
                    methodology="Full Embassy Simulation"
                    accentColor="rose"
                  >
                    <div className="bg-slate-950/50 p-6 rounded-xl border border-rose-500/30 mt-4">
                      <h4 className="text-rose-400 font-bold mb-3 uppercase text-xs tracking-widest">Exam Protocol:</h4>
                      <ul className="space-y-2 text-sm text-slate-300 mb-6">
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">1.</span> Three chairs are set up facing the teacher&apos;s desk (the &quot;Embassy Windows&quot;).</li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">2.</span> Each student sits alone and faces 10 randomly selected questions from all categories.</li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">3.</span> The &quot;Officer&quot; asks in strict, diplomatic tone. No hints, no smiling.</li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">4.</span> Observers (other students or invited guests) grade alongside the teacher.</li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">5.</span> Score is given immediately after. Below 12/16 = repeat next session.</li>
                      </ul>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-emerald-900/10 border border-emerald-500/20 p-4 rounded-lg">
                          <h5 className="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Automatic Pass Signals</h5>
                          <ul className="text-xs text-slate-400 space-y-1">
                            <li>✓ Immediate, confident answers</li>
                            <li>✓ Uses &quot;Let me think&quot; instead of silence</li>
                            <li>✓ Self-corrects smoothly (&quot;What I meant was...&quot;)</li>
                            <li>✓ Tenses match the officer&apos;s questions</li>
                            <li>✓ Eye contact maintained throughout</li>
                          </ul>
                        </div>
                        <div className="bg-rose-900/10 border border-rose-500/20 p-4 rounded-lg">
                          <h5 className="text-rose-400 font-bold text-sm mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Automatic Fail Signals</h5>
                          <ul className="text-xs text-slate-400 space-y-1">
                            <li>✗ Silence longer than 5 seconds</li>
                            <li>✗ &quot;I have 22 years old&quot;</li>
                            <li>✗ Saying &quot;last semester&quot;</li>
                            <li>✗ Mentioning &quot;loan&quot; or &quot;borrowed money&quot;</li>
                            <li>✗ &quot;I might stay in the US&quot;</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Trophy />}
                    title="Unit 3 Complete"
                    subtitle="Embassy Readiness Achieved"
                    methodology="Final Certification"
                    accentColor="rose"
                  >
                    <div className="bg-gradient-to-br from-rose-600/20 to-orange-500/10 rounded-3xl p-10 border border-rose-500/30 mt-4 text-center relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-orange-500 to-rose-500" />
                       <Trophy className="w-16 h-16 text-amber-400 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]" />
                       <h4 className="text-3xl font-bold text-white mb-4">You are Embassy-Ready.</h4>
                       <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
                          By completing The Gauntlet, you have proven that you can handle high-stakes diplomatic pressure, articulate your vocational future, and maintain poise under hostility.
                       </p>
                       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                          {[
                             { label: "Hours", value: "10" },
                             { label: "Drills", value: "25+" },
                             { label: "Vocabulary", value: "300+" },
                             { label: "Confidence", value: "100%" }
                          ].map((stat, i) => (
                             <div key={i} className="bg-slate-950/50 p-3 rounded-xl border border-rose-500/10">
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{stat.label}</p>
                             </div>
                          ))}
                       </div>
                       <Link href="/english-class" className="inline-flex items-center gap-3 bg-white hover:bg-rose-50 text-slate-950 font-bold text-lg py-5 px-10 rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95 group">
                         Return to Control Panel
                         <Target className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                       </Link>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <CurriculumNavigation
        prevHref="/english-class/hours-27-28"
        prevLabel="Hours 27 &amp; 28"
        nextHref="/english-class"
        nextLabel="Back to Curriculum"
        accentColor="rose"
        moduleTitle="The Ultimate Dress Rehearsal"
      />
    </div>
  );
}
