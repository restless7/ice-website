"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  HelpCircle, 
  Users, 
  Search, 
  BookOpen, 
  Heart, 
  Baby, 
  TrendingUp, 
  Info,
  Mic2,
  TreeDeciduous,
  MessageSquareQuote
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassHours5and6() {
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
      <CurriculumHeader 
        hourNumber="5 & 6"
        title="Questions &"
        subtitle="Connection: Hours 5 & 6"
        description="Shift from answering questions to asking them. Master Wh- question formulation and navigate complex family and relationship structures using the possessive 's."
        accentColor="indigo"
        moduleInfo="Intensive English Program • Part 3"
      />

      {/* Curriculum Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* HOUR 5: Wh- Questions */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/10 to-transparent hidden lg:block"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column: Context */}
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">05</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Wh- Questions</h2>
                      <p className="text-indigo-400 font-medium tracking-wide text-xs uppercase">Asking the Right Questions</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Open-ended questions are the engine of genuine conversation. This module teaches the structural formula to extract specific information.
                  </p>

                  <CurriculumContext title="The Interrogative Shift" accentColor="indigo">
                    <p className="text-sm text-slate-300 leading-relaxed font-bold">
                       The Formula: [Wh- Word] + [Verb To Be] + [Subject] + ?
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mt-2 border-l-2 border-indigo-500 pl-2">
                      In Spanish, tone dictates a question. In English, structure dictates a question. You MUST invert the verb and subject.
                    </p>
                  </CurriculumContext>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  
                  <CurriculumBlock 
                    icon={<Search />}
                    title="Phase 1: Information Mapping Theory"
                    subtitle="20 Minutes • Direct Instruction"
                    methodology="Structural Analysis"
                    accentColor="indigo"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-sm font-mono">
                      <div className="bg-slate-950 p-4 rounded-xl border border-indigo-500/20 text-center flex flex-col items-center justify-center">
                        <span className="text-indigo-400 font-bold text-lg mb-1">WHAT</span>
                        <span className="text-slate-400 text-xs">Things / Info</span>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-xl border border-blue-500/20 text-center flex flex-col items-center justify-center">
                        <span className="text-blue-400 font-bold text-lg mb-1">WHO</span>
                        <span className="text-slate-400 text-xs">People</span>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/20 text-center flex flex-col items-center justify-center">
                        <span className="text-cyan-400 font-bold text-lg mb-1">WHERE</span>
                        <span className="text-slate-400 text-xs">Places</span>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-xl border border-teal-500/20 text-center flex flex-col items-center justify-center">
                        <span className="text-teal-400 font-bold text-lg mb-1">WHEN</span>
                        <span className="text-slate-400 text-xs">Time</span>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-xl border border-sky-500/20 text-center flex flex-col items-center justify-center">
                        <span className="text-sky-400 font-bold text-lg mb-1">WHY</span>
                        <span className="text-slate-400 text-xs">Reasons</span>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-xl border border-purple-500/20 text-center flex flex-col items-center justify-center">
                        <span className="text-purple-400 font-bold text-lg mb-1">HOW</span>
                        <span className="text-slate-400 text-xs">Method / Status</span>
                      </div>
                    </div>

                    <div className="mt-4 bg-indigo-950/20 p-4 rounded-lg border border-indigo-500/30">
                       <h4 className="text-indigo-400 font-bold text-xs uppercase mb-2">The Structural Transformation</h4>
                       <div className="space-y-2 text-sm text-slate-300">
                          <p>1. Statement: <span className="text-white">Your name <strong className="text-indigo-400 bg-slate-900 px-1">is</strong> Sebastian.</span></p>
                          <p>2. Yes/No: <span className="text-white"><strong className="text-indigo-400 bg-slate-900 px-1">Is</strong> your name Sebastian?</span></p>
                          <p>3. Wh- Question: <span className="text-white"><strong className="text-sky-400 bg-slate-900 px-1">What</strong> <strong className="text-indigo-400 bg-slate-900 px-1">is</strong> your name?</span></p>
                       </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<MessageSquareQuote />}
                    title="Phase 2: The Interview Extraction"
                    subtitle="25 Minutes • Heavy Dialogue Expansion"
                    methodology="Contextual Q&A Simulation"
                    accentColor="indigo"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">
                        
                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-indigo-400 text-xs font-bold mb-2 uppercase tracking-widest pl-2 border-l-2 border-indigo-500">Dialogue 1: Getting to Know You</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Student A:</strong> "<strong className="text-cyan-300">Where</strong> are you from?"</p>
                              <p className="text-slate-400 italic">"I am from Bogota, Colombia. But right now I am in Miami."</p>
                              <p className="text-slate-300"><strong className="text-white">Student A:</strong> "Oh, <strong className="text-sky-300">why</strong> are you in Miami?"</p>
                              <p className="text-slate-400 italic">"I am here for a cultural exchange program."</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-blue-400 text-xs font-bold mb-2 uppercase tracking-widest pl-2 border-l-2 border-blue-500">Dialogue 2: Logistics & Travel</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Agent:</strong> "<strong className="text-teal-300">When</strong> is your flight?"</p>
                              <p className="text-slate-400 italic">"My flight is tomorrow morning at 8 AM."</p>
                              <p className="text-slate-300"><strong className="text-white">Agent:</strong> "<strong className="text-blue-300">Who</strong> is traveling with you?"</p>
                              <p className="text-slate-400 italic">"Nobody. I am traveling alone."</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-cyan-400 text-xs font-bold mb-2 uppercase tracking-widest pl-2 border-l-2 border-cyan-500">Dialogue 3: Problem Solving</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Manager:</strong> "<strong className="text-indigo-300">What</strong> is the problem with the coffee machine?"</p>
                              <p className="text-slate-400 italic">"It is broken. The water is cold."</p>
                              <p className="text-slate-300"><strong className="text-white">Manager:</strong> "<strong className="text-purple-300">How</strong> old is this machine?"</p>
                              <p className="text-slate-400 italic">"It is five years old."</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<Users />}
                    title="Phase 3: The Detective Game"
                    subtitle="15 Minutes • Active Practice"
                    methodology="Information Gap Task"
                    accentColor="indigo"
                  >
                     <p className="text-sm text-slate-300 leading-relaxed mt-4">
                        Student A is given a profile of a "Mystery Person" (Name, Age, Location, Job, Reason for travel). Student B is the Detective and must use the 6 Wh- Questions to fill out a blank report form. They trade places after 5 minutes.
                     </p>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 6: Possessives & Family */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500/50 via-rose-500/10 to-transparent hidden lg:block"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column: Context */}
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/10 text-rose-400 border border-rose-500/20 shadow-[0_0_40px_rgba(225,29,72,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">06</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Family Ties</h2>
                      <p className="text-rose-400 font-medium tracking-wide text-xs uppercase">Plurals & Possessives</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Describing familial structures requires mastering irregular plurals and the apostrophe-S ('s). It is the most efficient way to demonstrate ownership.
                  </p>

                  <CurriculumContext title="Pedagogical Focus: The 'S" accentColor="rose">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong>The Spanish Crutch:</strong> Spanish speakers say "The car of my brother". In English, this sounds archaic and robotic. We must drill "My brother's car" until the "of" crutch is broken.
                    </p>
                  </CurriculumContext>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  <CurriculumBlock 
                    icon={<BookOpen />}
                    title="Phase 1: Plurals & Possessive Theory"
                    subtitle="20 Minutes • Direct Instruction"
                    methodology="Grammar Translation & Charts"
                    accentColor="rose"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm font-mono">
                      <div className="bg-slate-950/50 rounded-xl p-5 border border-rose-500/20">
                         <h4 className="text-rose-400 font-bold mb-3 flex items-center gap-2"><Users className="w-4 h-4"/> Irregular Plurals</h4>
                         <ul className="space-y-2 text-slate-300">
                           <li className="flex justify-between border-b border-rose-500/20 pb-1"><span>1 Person</span> <span className="text-white font-bold">2 People</span></li>
                           <li className="flex justify-between border-b border-rose-500/20 pb-1"><span>1 Child</span> <span className="text-white font-bold">2 Children</span></li>
                           <li className="flex justify-between border-b border-rose-500/20 pb-1"><span>1 Man</span> <span className="text-white font-bold">2 Men</span></li>
                           <li className="flex justify-between border-b border-rose-500/20 pb-1"><span>1 Woman</span> <span className="text-white font-bold">2 Women</span></li>
                           <li className="flex justify-between"><span>1 Wife</span> <span className="text-white font-bold">2 Wives</span></li>
                         </ul>
                      </div>

                      <div className="bg-slate-950/50 rounded-xl p-5 border border-pink-500/20">
                         <h4 className="text-pink-400 font-bold mb-3 flex items-center gap-2"><TreeDeciduous className="w-4 h-4"/> The Possessive 'S</h4>
                         <div className="space-y-3">
                           <div>
                             <p className="text-slate-400 text-xs">Standard Object:</p>
                             <p className="text-white">"John<strong className="text-pink-400">'s</strong> car"</p>
                           </div>
                           <div>
                             <p className="text-slate-400 text-xs">Family Relation:</p>
                             <p className="text-white">"My mother<strong className="text-pink-400">'s</strong> sister"</p>
                           </div>
                           <div>
                             <p className="text-slate-400 text-xs">Singular Noun Ending in S:</p>
                             <p className="text-white">"Carlos<strong className="text-pink-400">'s</strong> friend" OR "Carlos<strong className="text-pink-400">'</strong> friend"</p>
                           </div>
                         </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Relational Dialogues"
                    subtitle="25 Minutes • Massive Expansion"
                    methodology="Contextual Shadowing"
                    accentColor="rose"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">
                        
                        <div className="group">
                          <p className="text-rose-400 text-xs font-bold mb-2 uppercase tracking-widest pl-2 border-l-2 border-rose-500">Dialogue 1: Meeting at the Party</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Sarah:</strong> "Who is that man over there?"</p>
                              <p className="text-slate-400 italic">"Oh, that is my <strong className="text-rose-300">brother's</strong> friend, Michael."</p>
                              <p className="text-slate-300"><strong className="text-white">Sarah:</strong> "Are those his <strong className="text-rose-300">children</strong>?"</p>
                              <p className="text-slate-400 italic">"No, those are my <strong className="text-rose-300">sister's kids</strong>. Michael is single."</p>
                          </div>
                        </div>

                        <div className="group">
                          <p className="text-pink-400 text-xs font-bold mb-2 uppercase tracking-widest pl-2 border-l-2 border-pink-500">Dialogue 2: The Visa Sponsor</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Officer:</strong> "Where are you staying in New York?"</p>
                              <p className="text-slate-400 italic">"I am staying at my <strong className="text-pink-300">aunt's</strong> house."</p>
                              <p className="text-slate-300"><strong className="text-white">Officer:</strong> "What is your <strong className="text-pink-300">aunt's</strong> name?"</p>
                              <p className="text-slate-400 italic">"Her name is Maria. And my <strong className="text-pink-300">uncle's</strong> name is David."</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<Heart />}
                    title="Phase 3: Building The Royal Family Tree"
                    subtitle="20 Minutes • Visual Construction"
                    methodology="Drawing & Description"
                    accentColor="rose"
                  >
                     <p className="text-sm text-slate-300 leading-relaxed mt-4">
                        On the board, the instructor draws a complex family tree (e.g., The Simpsons, or The Royal Family). The students must use the possessive 's and family vocabulary to explain the relationships linking the bottom of the tree to the top. (e.g., "Bart is Homer's son. Homer is Abraham's son. So, Bart is Abraham's grandson.")
                     </p>
                  </CurriculumBlock>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <CurriculumNavigation 
        prevHref="/english-class/hours-3-4"
        prevLabel="Hours 3 & 4"
        nextHref="/english-class/hours-7-8"
        nextLabel="Hours 7 & 8"
        accentColor="indigo"
      />
    </div>
  );
}
