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
  CheckCircle
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

                  <CurriculumContext title="Conversation Strategy" accentColor="purple">
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-violet-500/20">
                        <p className="text-xs text-violet-400 font-bold uppercase mb-1 flex items-center gap-2"><Repeat className="w-3 h-3" /> Paraphrasing</p>
                        <p className="text-sm text-white font-mono">&quot;In other words...&quot;</p>
                        <p className="text-sm text-white font-mono mt-1">&quot;What I mean is...&quot;</p>
                        <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-wide">Use this when your first answer is messy. Recover elegantly.</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-purple-500/20">
                        <p className="text-xs text-purple-400 font-bold uppercase mb-1 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Expanding</p>
                        <p className="text-sm text-white font-mono">&quot;Also, I should mention that...&quot;</p>
                        <p className="text-sm text-white font-mono mt-1">&quot;On top of that...&quot;</p>
                        <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-wide">Add detail naturally, don&apos;t give one-word answers.</p>
                      </div>
                    </div>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<GraduationCap />}
                    title="Phase 1: Education Questions Arsenal"
                    subtitle="25 Minutes &bull; Core Interview Prep"
                    methodology="Script Mastery + Paraphrasing"
                    accentColor="purple"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      These four questions form the backbone of your academic profile. The officer is checking that you are a genuine student who will return home to finish their degree.
                    </p>

                    <div className="space-y-4 mt-4">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-violet-500/50 transition-colors">
                        <p className="text-slate-500 text-xs mb-1">Q9: Major</p>
                        <h4 className="text-white font-bold text-sm mb-2">&quot;What is your major?&quot; / &quot;What do you study?&quot;</h4>
                        <p className="text-violet-300 text-sm font-serif italic">&quot;I am studying Technology in Electrical Engineering at Unidades Tecnológicas de Santander.&quot;</p>
                        <div className="bg-violet-500/10 px-3 py-2 rounded-lg mt-3 border-l-2 border-violet-500">
                          <p className="text-xs text-violet-300"><strong>UTS Students:</strong> Always say &quot;Technology in [Field]&quot;, never just the field name alone.</p>
                        </div>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-violet-500/50 transition-colors">
                        <p className="text-slate-500 text-xs mb-1">Q10: University</p>
                        <h4 className="text-white font-bold text-sm mb-2">&quot;What university do you go to?&quot;</h4>
                        <p className="text-violet-300 text-sm font-serif italic">&quot;I go to Unidades Tecnológicas de Santander, in Bucaramanga, Colombia.&quot;</p>
                        <p className="text-xs text-slate-500 mt-2">Always include the city. The officer may not know your university.</p>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-violet-500/50 transition-colors">
                        <p className="text-slate-500 text-xs mb-1">Q11: Career Choice (Past Tense Trap)</p>
                        <h4 className="text-white font-bold text-sm mb-2">&quot;Why did you choose that major?&quot;</h4>
                        <p className="text-violet-300 text-sm font-serif italic">&quot;I chose it because I have always been passionate about technology. In other words, I enjoy solving problems with engineering.&quot;</p>
                        <div className="bg-amber-500/10 px-3 py-2 rounded-lg mt-3 border-l-2 border-amber-500">
                          <p className="text-xs text-amber-300"><strong>Tense Alert:</strong> &quot;Why <strong>DID</strong> you choose?&quot; → Answer: &quot;I <strong>chose</strong> it because...&quot; (Past Simple, not Present).</p>
                        </div>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-violet-500/50 transition-colors">
                        <p className="text-slate-500 text-xs mb-1">Q12: Return Plans (CRITICAL)</p>
                        <h4 className="text-white font-bold text-sm mb-2">&quot;What are your plans when you return to Colombia?&quot;</h4>
                        <p className="text-violet-300 text-sm font-serif italic">&quot;When I return, I am going to finish my degree and start working in my field. I also want to use the English I improved during the program.&quot;</p>
                        <div className="bg-red-500/10 px-3 py-2 rounded-lg mt-3 border-l-2 border-red-500">
                          <p className="text-xs text-red-300"><strong>CRITICAL:</strong> You MUST show intention to return. Never say &quot;I might stay&quot; or &quot;I&apos;m not sure.&quot; Always express clear plans tied to your studies.</p>
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
                    Draw your academic life on a timeline &mdash; past, present, and future. Then explain it verbally to three different partners using all tenses correctly.
                  </p>
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
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Each student draws a horizontal timeline on paper with 3 clear sections. Then they must explain each section to a partner using the correct tense.
                    </p>
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="grid grid-cols-3 divide-x divide-slate-800">
                        <div className="p-5">
                          <p className="text-amber-400 text-xs font-bold uppercase mb-2 tracking-widest">Past</p>
                          <p className="text-slate-300 text-sm font-serif italic">&quot;I <strong className="text-amber-300">graduated</strong> from high school in 2020. I <strong className="text-amber-300">chose</strong> engineering because...&quot;</p>
                          <p className="text-slate-500 text-[10px] mt-2 uppercase tracking-wider">Simple Past</p>
                        </div>
                        <div className="p-5">
                          <p className="text-violet-400 text-xs font-bold uppercase mb-2 tracking-widest">Present</p>
                          <p className="text-slate-300 text-sm font-serif italic">&quot;Right now, I <strong className="text-violet-300">am studying</strong> my 5th semester. I <strong className="text-violet-300">live</strong> with my parents.&quot;</p>
                          <p className="text-slate-500 text-[10px] mt-2 uppercase tracking-wider">Simple Present / Continuous</p>
                        </div>
                        <div className="p-5">
                          <p className="text-emerald-400 text-xs font-bold uppercase mb-2 tracking-widest">Future</p>
                          <p className="text-slate-300 text-sm font-serif italic">&quot;When I return, I <strong className="text-emerald-300">am going to</strong> finish my thesis and <strong className="text-emerald-300">start</strong> my career.&quot;</p>
                          <p className="text-slate-500 text-[10px] mt-2 uppercase tracking-wider">Going To / Will</p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Users />}
                    title="Phase 3: Academic Interview Roleplay"
                    subtitle="30 Minutes &bull; Pressure Drill"
                    methodology="Officer / Applicant Simulation"
                    accentColor="purple"
                  >
                    <div className="bg-slate-950/50 p-6 rounded-xl border border-violet-500/30 mt-4">
                      <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                        The officer now combines personal info (Hour 21) AND academic questions (Hour 23). Students must handle both seamlessly in a single conversation. No pauses between topic switches.
                      </p>
                      <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                        <div className="p-5 space-y-4 font-serif text-sm">
                          <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;What do you study?&quot;</p>
                          <p className="text-slate-400 italic">&quot;I am studying Technology in Systems Engineering at UTS.&quot;</p>
                          <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;Why did you choose that?&quot;</p>
                          <p className="text-slate-400 italic">&quot;I chose it because I am passionate about software development. In other words, I love building things with code.&quot;</p>
                          <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;And what will you do when you come back?&quot;</p>
                          <p className="text-slate-400 italic">&quot;When I return, I am going to finish my last courses and do my internship. I also plan to apply for a job at a tech company in Bucaramanga.&quot;</p>
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
