"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  MessageSquareQuote,
  Search,
  ShieldCheck,
  FileText,
  Clock,
  Mic2,
  AlertTriangle,
  Lightbulb,
  HelpCircle,
  CheckCircle
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";
import Link from "next/link";

export default function EnglishClassHours21and22() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
      <CurriculumHeader
        hourNumber="21 &amp; 22"
        title="Breaking the Ice"
        subtitle="First Impressions &amp; Core Data"
        description="Launch into Unit 3 with high-impact conversation strategies. Master the critical first 5 minutes of an Embassy or Job interview by controlling your personal information perfectly."
        accentColor="indigo"
        moduleInfo="Unit 3: Conversation Strategies &bull; Part 1"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 21: Conversation Strategies & The Core 8 Questions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">21</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">The Core 8</h2>
                      <p className="text-indigo-400 font-medium tracking-wide text-xs uppercase">Personal Info &amp; Strategies</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    The consular officer forms their opinion of you in the first 60 seconds. You must sound confident, understand their questions immediately, and know what to say if you don't.
                  </p>

                  <CurriculumContext title="Survival Strategies" accentColor="indigo">
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-indigo-500/20">
                        <p className="text-xs text-indigo-400 font-bold uppercase mb-1 flex items-center gap-2"><HelpCircle className="w-3 h-3" /> Clarifying</p>
                        <p className="text-sm text-white font-mono">&quot;Could you repeat that, please?&quot;</p>
                        <p className="text-sm text-white font-mono mt-1">&quot;Sorry, I didn&apos;t catch that.&quot;</p>
                        <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-wide">Never just say "What?" or stay silent.</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-blue-500/20">
                        <p className="text-xs text-blue-400 font-bold uppercase mb-1 flex items-center gap-2"><Clock className="w-3 h-3" /> Buying Time</p>
                        <p className="text-sm text-white font-mono">&quot;Let me think for a second...&quot;</p>
                        <p className="text-sm text-white font-mono mt-1">&quot;That&apos;s a good question...&quot;</p>
                        <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-wide">Stop using "Uhhhh" and "Mmmmmm".</p>
                      </div>
                    </div>
                  </CurriculumContext>

                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Users />}
                    title="Phase 1: The Core 8 Questions"
                    subtitle="20 Minutes &bull; J-1 Visa Focus"
                    methodology="Script Mastery"
                    accentColor="indigo"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      These are the defining personal questions of a J-1 visa interview. Master the exact phrasing and structures. Do not improvise your fundamental profile.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {/* Q1 & Q2 */}
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-indigo-500/50 transition-colors">
                        <div className="mb-4">
                          <p className="text-slate-500 text-xs mb-1">Q1: Purpose</p>
                          <h4 className="text-white font-bold text-sm mb-2">What are you going to do in the USA?</h4>
                          <p className="text-indigo-300 text-sm font-serif italic">&quot;I am going to participate in a Summer Work and Travel Program.&quot;</p>
                        </div>
                        <div className="pt-4 border-t border-slate-800">
                          <p className="text-slate-500 text-xs mb-1">Q2: Location</p>
                          <h4 className="text-white font-bold text-sm mb-2">Where are you going?</h4>
                          <p className="text-indigo-300 text-sm font-serif italic">&quot;I am going to work as a [Role] in [City, State].&quot;</p>
                        </div>
                      </div>

                      {/* Q3 & Q4 */}
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-indigo-500/50 transition-colors">
                        <div className="mb-4">
                          <p className="text-slate-500 text-xs mb-1">Q3: Motivation</p>
                          <h4 className="text-white font-bold text-sm mb-2">Why do you want to participate?</h4>
                          <p className="text-indigo-300 text-sm font-serif italic">&quot;Because I want to improve my English, know about the American culture, and share my culture as well.&quot;</p>
                        </div>
                        <div className="pt-4 border-t border-slate-800">
                          <p className="text-slate-500 text-xs mb-1">Q4: Degree</p>
                          <h4 className="text-white font-bold text-sm mb-2">What do you study?</h4>
                          <p className="text-indigo-300 text-sm font-serif italic">&quot;I am studying [Major] at [University].&quot;</p>
                        </div>
                      </div>

                      {/* Q5 & Q6 */}
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-indigo-500/50 transition-colors">
                        <div className="mb-4">
                          <p className="text-slate-500 text-xs mb-1">Q5: Semester (TRAP)</p>
                          <h4 className="text-white font-bold text-sm mb-2">What semester are you in?</h4>
                          <p className="text-indigo-300 text-sm font-serif italic">&quot;I am in my [X] semester.&quot;</p>
                          <div className="bg-red-500/10 px-2 py-1 rounded inline-block mt-2">
                            <span className="text-red-400 text-[10px] font-bold uppercase block">CRITICAL WARNING</span>
                            <span className="text-xs text-red-300 opacity-80">NEVER say you are in the "last semester."</span>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-slate-800">
                          <p className="text-slate-500 text-xs mb-1">Q6: Age (To Be)</p>
                          <h4 className="text-white font-bold text-sm mb-2">How old are you?</h4>
                          <p className="text-indigo-300 text-sm font-serif italic">&quot;I am [Age] years old.&quot;</p>
                        </div>
                      </div>

                      {/* Q7 & Q8 */}
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-indigo-500/50 transition-colors">
                        <div className="mb-4">
                          <p className="text-slate-500 text-xs mb-1">Q7: Household</p>
                          <h4 className="text-white font-bold text-sm mb-2">Who do you live with?</h4>
                          <p className="text-indigo-300 text-sm font-serif italic">&quot;I live with my parents and my siblings.&quot;</p>
                        </div>
                        <div className="pt-4 border-t border-slate-800">
                          <p className="text-slate-500 text-xs mb-1">Q8: Parents</p>
                          <h4 className="text-white font-bold text-sm mb-2">What do your parents do?</h4>
                          <p className="text-indigo-300 text-sm font-serif italic">&quot;My mom is a [Job] and my dad is a [Job].&quot;</p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 22: Tense Detective & Speaking Labs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-sky-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">22</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Embassy Simulator</h2>
                      <p className="text-blue-400 font-medium tracking-wide text-xs uppercase">Tense Matching &amp; Roleplay</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Now we apply the pressure. You'll learn to listen to the officer's grammar structure to guarantee your answer uses the flawless, exact same tense.
                  </p>

                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Search />}
                    title="Phase 2: Tense Detective"
                    subtitle="25 Minutes &bull; Analytical Listening"
                    methodology="Grammar Scaffolding"
                    accentColor="indigo"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Listen to the <strong className="text-white">first verb</strong> the officer uses. If they ask with <span className="text-indigo-400 font-bold">DO</span>, answer with the verb in simple present. If they ask with <span className="text-sky-400 font-bold">ARE</span>, answer with <span className="text-sky-400 font-bold">AM</span>. Be the detective.
                    </p>
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4 p-5 space-y-5">
                        <div className="flex items-start gap-4">
                            <div className="bg-indigo-500/20 p-3 rounded-lg text-indigo-400 shrink-0">
                                <Search className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-white font-bold mb-1">"What <span className="text-indigo-400 underline decoration-indigo-500">DO</span> you study?"</p>
                                <p className="text-slate-400 italic">"I <span className="text-indigo-400 underline decoration-indigo-500">study</span> Technology in Networking."</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-sky-500/20 p-3 rounded-lg text-sky-400 shrink-0">
                                <Search className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-white font-bold mb-1">"What <span className="text-sky-400 underline decoration-sky-500">ARE</span> you going to do?"</p>
                                <p className="text-slate-400 italic">"I <span className="text-sky-400 underline decoration-sky-500">AM</span> going to work in Wisconsin."</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-400 shrink-0">
                                <Search className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-white font-bold mb-1">"How old <span className="text-emerald-400 underline decoration-emerald-500">ARE</span> you?"</p>
                                <p className="text-slate-400 italic">"I <span className="text-emerald-400 underline decoration-emerald-500">AM</span> 22 years old."</p>
                            </div>
                        </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<ShieldCheck />}
                    title="Phase 3: The Embassy Protocol"
                    subtitle="40 Minutes &bull; Stress Roleplay"
                    methodology="High STT / Wait Time execution"
                    accentColor="indigo"
                  >
                    <div className="bg-slate-950/50 p-6 rounded-xl border border-indigo-500/30 mt-4">
                        <h4 className="text-indigo-400 font-bold mb-3 uppercase text-xs tracking-widest">Classroom Directive:</h4>
                        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                            Pairs face each other. Student A is the serious, stern Officer. Student B is the Applicant. Officers must ask the 8 questions randomly, and must intentionally mumble or speak fast at least once to force a Clarifying Strategy.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-emerald-900/10 border border-emerald-500/20 p-4 rounded-lg">
                                <h5 className="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Success Indicators</h5>
                                <ul className="text-xs text-slate-400 space-y-1">
                                    <li>Constant eye contact</li>
                                    <li>Answers match question tenses instantly</li>
                                    <li>Smooth use of "Let me think..."</li>
                                    <li>Accurate major &amp; university details</li>
                                </ul>
                            </div>
                            <div className="bg-rose-900/10 border border-rose-500/20 p-4 rounded-lg">
                                <h5 className="text-rose-400 font-bold text-sm mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Failure Indicators</h5>
                                <ul className="text-xs text-slate-400 space-y-1">
                                    <li>Looking at the floor</li>
                                    <li>"I have 20 years" (Tense break)</li>
                                    <li>Saying "Last semester" (Flagged for denial)</li>
                                    <li>Freezing silently instead of clarifying</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <CurriculumNavigation
        prevHref="/english-class/hours-19-20"
        prevLabel="Unit 2 Finish"
        nextHref="/english-class/hours-23-24"
        nextLabel="Hours 23 &amp; 24"
        accentColor="indigo"
        moduleTitle="Breaking the Ice: Core 8"
      />
    </div>
  );
}
