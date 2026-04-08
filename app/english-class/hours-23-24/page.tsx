"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MessageSquareQuote,
  ArrowRight,
  Lightbulb,
  BookOpen,
  Users,
  Target,
  Repeat,
  PenTool,
  CheckCircle,
  Clock
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassHours23and24() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-violet-500/30">
      <CurriculumHeader
        hourNumber="23 &amp; 24"
        title="Deep Dive"
        subtitle="Education &amp; Future Plans"
        description="Articulate your academic background with precision, explain why you chose your career, and master the critical question: 'What will you do when you return to Colombia?'"
        accentColor="purple"
        moduleInfo="Unit 3: Conversation Strategies &bull; Part 2"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 23: Education & Academic Profile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 text-violet-400 border border-violet-500/20 shadow-[0_0_40px_rgba(139,92,246,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">23</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Your Story</h2>
                      <p className="text-violet-400 font-medium tracking-wide text-xs uppercase">Academic Profile Questions</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    The officer wants to know you are a real student with real plans. Your academic story must sound coherent and confident, never rehearsed.
                  </p>

                  <CurriculumContext title="Advanced Survival: Paraphrasing" accentColor="purple">
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      High-stakes situations require the ability to recover from a linguistic freeze. Master the "Second Chance" logic:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-violet-500/20">
                        <p className="text-[10px] text-violet-400 font-bold uppercase mb-1 flex items-center gap-2"><Repeat className="w-3 h-3" /> The Recovery Loop</p>
                        <ul className="text-xs text-white space-y-1 font-mono">
                          <li>• "In other words..."</li>
                          <li>• "What I'm trying to say is..."</li>
                          <li>• "To put it simply..."</li>
                        </ul>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-purple-500/20">
                        <p className="text-[10px] text-purple-400 font-bold uppercase mb-1 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> The Expansion Layer</p>
                        <ul className="text-xs text-white space-y-1 font-mono">
                          <li>• "Furthermore, I believe..."</li>
                          <li>• "Specifically, my target is..."</li>
                          <li>• "This aligns with my goal to..."</li>
                        </ul>
                      </div>
                    </div>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<GraduationCap />}
                    title="Phase 1: The Academic Profile Matrix"
                    subtitle="25 Minutes &bull; Core Interview Prep"
                    methodology="Script Mastery + Paraphrasing"
                    accentColor="purple"
                  >
                    <div className="grid grid-cols-1 gap-6 mt-4">
                      {/* Q9: Major - Expanded */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-2 py-0.5 bg-violet-500/20 text-violet-400 text-[10px] font-bold rounded uppercase">Academy</span>
                          <div className="h-px flex-grow bg-slate-800" />
                        </div>
                        <h4 className="text-white font-bold text-lg mb-3">What is your major?</h4>
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-3">
                           <p className="text-slate-300 font-serif italic italic text-sm">&quot;I am studying Technology in Electrical Engineering at UTS University.&quot;</p>
                        </div>
                        <div className="bg-violet-900/20 p-3 rounded-lg text-[11px] text-violet-300 border border-violet-500/30">
                          <strong>Master Teacher Tip:</strong> Never just say "Engineering". Be specific. If you are a UTS student, the word <span className="text-white font-bold">"Technology"</span> is key to your legal status.
                        </div>
                      </div>

                      {/* Q11: Motivation - The "Why" Matrix */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full" />
                        <h4 className="text-white font-bold text-lg mb-4">Why did you choose that major?</h4>
                        <div className="grid sm:grid-cols-3 gap-3 mb-4">
                           <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
                              <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Passion</p>
                              <p className="text-[11px] text-slate-300 italic">"I've always loved how things work."</p>
                           </div>
                           <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
                              <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Career</p>
                              <p className="text-[11px] text-slate-300 italic">"It has a great job market in Colombia."</p>
                           </div>
                           <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
                              <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Family</p>
                              <p className="text-[11px] text-slate-300 italic">"My father is also an engineer."</p>
                           </div>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed italic border-l-2 border-purple-500 pl-4 py-1 bg-purple-500/5">
                           &quot;I chose it because it combines my passion for mathematics with practical infrastructure development.&quot;
                        </p>
                      </div>

                      {/* Q12: Return Plans - The Anchor */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded uppercase">The Anchor</span>
                          <div className="h-px flex-grow bg-slate-800" />
                        </div>
                        <h4 className="text-white font-bold text-lg mb-3">What will you do when you return?</h4>
                        <div className="bg-emerald-900/10 p-5 rounded-xl border border-emerald-500/30 mb-4">
                           <p className="text-white font-serif italic mb-3">&quot;My plan is to return immediately to finish my 9th semester and start my graduation project.&quot;</p>
                           <p className="text-xs text-emerald-400 font-bold uppercase block mb-1 underline">Why this works:</p>
                           <p className="text-[11px] text-slate-400">It shows a <span className="text-white font-bold italic">fixed date</span> and a <span className="text-white font-bold italic">specific task</span> waiting for you.</p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>


                </div>
              </div>
            </div>
          </motion.div>
          {/* HOUR 24: The Timeline Project & Role-play */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">24</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Time Machine</h2>
                      <p className="text-purple-400 font-medium tracking-wide text-xs uppercase">The Timeline Project</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Mastering the temporal flow of your life. You must navigate from the past into a specific, documented future in Colombia.
                  </p>

                  <CurriculumContext title="Temporal Logic" accentColor="purple">
                    <div className="space-y-4">
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                            <p className="text-[10px] text-violet-400 font-bold uppercase mb-1">Consistency</p>
                            <p className="text-[11px] text-slate-400">Your dates must match your university transcripts exactly.</p>
                        </div>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                            <p className="text-[10px] text-violet-400 font-bold uppercase mb-1">The Gap Rule</p>
                            <p className="text-[11px] text-slate-400">Explain any "empty" semesters pro-actively (e.g., worked to save money).</p>
                        </div>
                    </div>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Calendar />}
                    title="Phase 2: The Timeline Project"
                    subtitle="30 Minutes &bull; Multi-Tense Narrative"
                    methodology="Visual + Verbal Integration"
                    accentColor="purple"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      Draw your horizontal timeline. Then, explain it to a partner. They must "Interrogate" every transition point.
                    </p>
                    <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 w-full mt-4 shadow-2xl">
                      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                        <div className="p-6 hover:bg-slate-950 transition-colors group">
                          <p className="text-amber-500 text-xs font-bold uppercase mb-3 tracking-widest flex items-center gap-2">
                             <Clock className="w-3 h-3" /> The Origin
                          </p>
                          <p className="text-slate-300 text-sm font-serif italic mb-4">"I <strong className="text-amber-300">started</strong> my university degree in January 2022 because I <strong className="text-amber-300">realized</strong> my potential in calculus."</p>
                          <div className="h-1 bg-slate-800 rounded-full group-hover:bg-amber-500/30 transition-all" />
                        </div>
                        <div className="p-6 hover:bg-slate-950 transition-colors group">
                          <p className="text-violet-400 text-xs font-bold uppercase mb-3 tracking-widest flex items-center gap-2">
                             <Users className="w-3 h-3" /> The Present
                          </p>
                          <p className="text-slate-300 text-sm font-serif italic mb-4">"Currently, I <strong className="text-violet-300">am enrolled</strong> in the 5th level. I <strong className="text-violet-300">take</strong> 6 classes, including Thermodynamics."</p>
                          <div className="h-1 bg-slate-800 rounded-full group-hover:bg-violet-500/30 transition-all" />
                        </div>
                        <div className="p-6 hover:bg-slate-950 transition-colors group">
                          <p className="text-emerald-400 text-xs font-bold uppercase mb-3 tracking-widest flex items-center gap-2">
                             <Target className="w-3 h-3" /> The Return
                          </p>
                          <p className="text-slate-300 text-sm font-serif italic mb-4">"When I return, I <strong className="text-emerald-300">am going to</strong> resume my classes immediately on September 15th."</p>
                          <div className="h-1 bg-slate-800 rounded-full group-hover:bg-emerald-500/30 transition-all" />
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Users />}
                    title="Phase 3: Deep Context Simulations"
                    subtitle="30 Minutes &bull; The Recovery Lab"
                    methodology="Officer / Applicant Simulation"
                    accentColor="purple"
                  >
                    <div className="bg-slate-950/50 p-6 rounded-xl border border-violet-500/30 mt-4 overflow-hidden relative">
                      <div className="absolute top-0 right-0 p-4">
                         <Lightbulb className="w-8 h-8 text-violet-500/20" />
                      </div>
                      <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                        The "Officer" must ask <span className="text-white font-bold">Invasive Logic Questions</span>: "If you are an engineer, why work as a dishwasher?" 
                      </p>
                      <div className="space-y-4">
                        <div className="bg-slate-900 p-4 rounded-xl border-l-4 border-violet-500">
                           <p className="text-xs text-slate-500 uppercase font-bold mb-2">Sample Recovery Strategy:</p>
                           <p className="text-slate-300 font-serif italic mb-2">&quot;Actually, the position is less important to me than the cultural immersion. In other words, I want to experience the US workplace to build my soft skills.&quot;</p>
                           <p className="text-[10px] text-violet-400 font-mono">Strategy: Reframing (The Sword)</p>
                        </div>
                        <div className="bg-slate-900 p-4 rounded-xl border-l-4 border-emerald-500">
                           <p className="text-xs text-slate-500 uppercase font-bold mb-2">The Return Lock:</p>
                           <p className="text-slate-300 font-serif italic mb-2">&quot;I precisely need to be back by October because I have my graduation seminar scheduled.&quot;</p>
                           <p className="text-[10px] text-emerald-400 font-mono">Strategy: Concrete Commitment (The Anchor)</p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<PenTool />}
                    title="Homework: My Academic Letter"
                    subtitle="Written Assignment"
                    methodology="Multi-Tense Writing"
                    accentColor="purple"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Write a 10-sentence paragraph explaining your academic journey (past, present, future) as if writing to your sponsor company. Must include at least one sentence in Simple Past, two in Simple Present, and two using &quot;going to.&quot;
                    </p>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <CurriculumNavigation
        prevHref="/english-class/hours-21-22"
        prevLabel="Hours 21 &amp; 22"
        nextHref="/english-class/hours-25-26"
        nextLabel="Hours 25 &amp; 26"
        accentColor="purple"
        moduleTitle="Education &amp; Future Plans"
      />
    </div>
  );
}
