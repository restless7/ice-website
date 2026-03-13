"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  MapPin, 
  Coffee, 
  Wallet,
  Coins,
  MessageSquareQuote,
  TrendingUp,
  Lightbulb,
  Users,
  BookOpen
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassHours3and4() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30">
      <CurriculumHeader 
        hourNumber="3 & 4"
        title="Survival & Success:"
        subtitle="Hours 3 & 4"
        description="Transform basic knowledge into functional independence. In these critical modules, students learn to navigate essential daily scenarios—from ordering coffee to understanding American currency—using dynamic, high-engagement teaching methodologies."
        accentColor="emerald"
        moduleInfo="Intensive English Program • Part 2"
      />

      {/* Curriculum Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* HOUR 3: Talking Quantities & Order */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/10 to-transparent hidden lg:block"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column: Context */}
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">03</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Quantities &amp; Order</h2>
                      <p className="text-emerald-400 font-medium tracking-wide text-xs uppercase">Numbers in Action</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Numbers dictate our lives abroad: flight gates, wages, rent, and semester dates. This module goes deep into phonetic differentiation.
                  </p>

                  <CurriculumContext title="Pedagogical Focus" accentColor="emerald">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong>The "TH" Challenge:</strong> Spanish lacks the interdental fricative /θ/. We must force students to physically place their tongue between their teeth.
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong>The Tension Difference:</strong> Emphasize the long, tense /i:/ in "Thir-TEEN" versus the short, relaxed /ɪ/ in "THIR-ty".
                    </p>
                  </CurriculumContext>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  
                  <CurriculumBlock 
                    icon={<BookOpen />}
                    title="Phase 1: Deep Theory &amp; Phonetics"
                    subtitle="15 Minutes • Direct Instruction"
                    methodology="Explicit Grammar Translation &amp; Minimal Pairs"
                    accentColor="emerald"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
                      <div className="bg-slate-950/50 rounded-xl p-5 border border-emerald-500/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Coins className="w-5 h-5 text-emerald-400" />
                          <h4 className="text-white font-semibold italic">Cardinal (Quantities)</h4>
                        </div>
                        <ul className="space-y-2 text-slate-300 list-disc list-inside marker:text-emerald-500">
                          <li>Age construction: "I <span className="text-white font-bold">AM</span> 20"</li>
                          <li>Phone numbers: Zero vs Oh</li>
                          <li>Prices & Currencies</li>
                        </ul>
                      </div>

                      <div className="bg-slate-950/50 rounded-xl p-5 border border-teal-500/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Building2 className="w-5 h-5 text-teal-400" />
                          <h4 className="text-white font-semibold italic">Ordinal (Order/Dates)</h4>
                        </div>
                        <ul className="space-y-2 text-slate-300 list-disc list-inside marker:text-teal-500">
                          <li>Irregulars: 1st, 2nd, 3rd</li>
                          <li>Spelling shifts: 5th, 12th</li>
                          <li>Dates: "Month + Ordinal"</li>
                        </ul>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Choral Reading &amp; Stress"
                    subtitle="15 Minutes • Pronunciation Conditioning"
                    methodology="Choral Repetition &amp; Shadowing"
                    accentColor="emerald"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">
                        <div className="group">
                          <p className="text-emerald-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-emerald-500 pl-2">The Airport</p>
                          <p className="text-white text-lg font-serif italic leading-relaxed">"Flight <span className="text-emerald-300 not-italic font-bold">472</span> to Miami is boarding at Gate <span className="text-emerald-300 not-italic font-bold">15</span>."</p>
                        </div>
                        <div className="group">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-teal-500 pl-2">The Interview</p>
                          <p className="text-white text-lg font-serif italic leading-relaxed">"I am <span className="text-teal-300 not-italic font-bold">21</span> years old and in my <span className="text-teal-300 not-italic font-bold">6th</span> semester."</p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<Users />}
                    title="Phase 3: Conversational Fluency"
                    subtitle="30 Minutes • Peer Speaking"
                    methodology="Structured Role-play"
                    accentColor="emerald"
                  >
                    <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 shadow-inner mt-4">
                      <div className="space-y-6">
                         <div className="relative pb-6 border-b border-slate-800/60 last:border-0 last:pb-0">
                            <h5 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                               <TrendingUp className="w-4 h-4" /> Scenario: The Manager
                            </h5>
                            <p className="text-sm text-white italic bg-slate-900 p-4 rounded-lg border-l-2 border-emerald-500">
                               "I am in the <span className="text-emerald-400 underline decoration-2">fourth</span> semester. They finish on <span className="text-emerald-400 underline decoration-2">May 15th</span>."
                            </p>
                         </div>
                      </div>
                    </div>
                  </CurriculumBlock>
                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 4: Personal Identity */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/10 to-transparent hidden lg:block"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column: Context */}
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">04</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Personal Identity</h2>
                      <p className="text-purple-400 font-medium tracking-wide text-xs uppercase">The Identity Formula</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Master the verb "To Be" and professional terminology. In English, how you state your profession and age defines your initial authority.
                  </p>

                  <CurriculumContext title="Pedagogical Focus" accentColor="purple">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong>Occupations Article:</strong> Mandatory "a/an" for professions. "I am <span className="italic">a</span> student."
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong>Contracted Forms:</strong> Explicitly teach "I'm", "You're" for fluid conversational performance.
                    </p>
                  </CurriculumContext>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  <CurriculumBlock 
                    icon={<BookOpen />}
                    title="Phase 2: The Core Framework"
                    subtitle="15 Minutes • Direct Instruction"
                    methodology="Grammar Translation"
                    accentColor="purple"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-slate-950/50 rounded-xl p-5 border border-purple-500/20">
                        <h4 className="text-white font-semibold mb-3">Verb: To Be</h4>
                        <ul className="space-y-1 text-xs text-slate-400 font-mono">
                          <li>(+) I am / You are / He is</li>
                          <li>(-) I am not / You aren't</li>
                          <li>(?) Am I? / Are you?</li>
                        </ul>
                      </div>
                      <div className="bg-slate-950/50 rounded-xl p-5 border border-fuchsia-500/20 font-mono text-xs">
                         <h4 className="text-white font-semibold mb-3">Occupations Rule</h4>
                         <p className="text-slate-400 italic">"I am <span className="text-white not-italic font-bold">a</span> teacher."</p>
                         <p className="text-slate-400 italic">"He is <span className="text-white not-italic font-bold">an</span> engineer."</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<Users />}
                    title="Phase 3: The Embassy Interview"
                    subtitle="30 Minutes • Peer Speaking"
                    methodology="Structured Role-play"
                    accentColor="purple"
                  >
                    <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800 mt-4 space-y-4">
                       <div className="p-3 bg-slate-950 rounded border-l-2 border-purple-500">
                          <p className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-widest">Target Q&A</p>
                          <p className="text-sm text-white italic">"What is your occupation?" → "I am <span className="text-purple-400 font-bold">a</span> student of..."</p>
                       </div>
                       <div className="p-3 bg-slate-950 rounded border-l-2 border-purple-500">
                          <p className="text-sm text-white italic">"How old are you?" → "I <span className="text-purple-400 font-bold">am</span> 22 years old."</p>
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
        prevHref="/english-class"
        prevLabel="Hours 1 & 2"
        nextHref="/english-class/hours-5-6"
        nextLabel="Hours 5 & 6"
        accentColor="emerald"
      />
    </div>
  );
}
