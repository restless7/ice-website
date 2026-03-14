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
  MessageSquareQuote,
  AlertTriangle,
  CheckCircle,
  Target,
  Lightbulb,
  PenTool
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

              <div className="lg:w-2/3">
                <div className="space-y-8">
                  
                  {/* Theory: The 6 Wh- Words */}
                  <CurriculumBlock 
                    icon={<Search />}
                    title="Theory: The 6 Information Extractors"
                    subtitle="15 Minutes • Direct Instruction"
                    methodology="Structural Analysis"
                    accentColor="indigo"
                  >
                    <p className="text-slate-300 leading-relaxed mb-4">
                      Each Wh- word is a <strong className="text-white">precision tool</strong> designed to extract a specific type of information. Understanding which word to use is like choosing the right key for a lock — the wrong one simply won&apos;t open the door to the answer you need.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-sm font-mono">
                      <div className="bg-slate-950 p-4 rounded-xl border border-indigo-500/20 text-center flex flex-col items-center justify-center">
                        <span className="text-indigo-400 font-bold text-lg mb-1">WHAT</span>
                        <span className="text-slate-400 text-xs">Things / Info</span>
                        <span className="text-slate-500 text-xs mt-1 italic font-sans">¿Qué? / ¿Cuál?</span>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-xl border border-blue-500/20 text-center flex flex-col items-center justify-center">
                        <span className="text-blue-400 font-bold text-lg mb-1">WHO</span>
                        <span className="text-slate-400 text-xs">People</span>
                        <span className="text-slate-500 text-xs mt-1 italic font-sans">¿Quién?</span>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/20 text-center flex flex-col items-center justify-center">
                        <span className="text-cyan-400 font-bold text-lg mb-1">WHERE</span>
                        <span className="text-slate-400 text-xs">Places</span>
                        <span className="text-slate-500 text-xs mt-1 italic font-sans">¿Dónde?</span>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-xl border border-teal-500/20 text-center flex flex-col items-center justify-center">
                        <span className="text-teal-400 font-bold text-lg mb-1">WHEN</span>
                        <span className="text-slate-400 text-xs">Time</span>
                        <span className="text-slate-500 text-xs mt-1 italic font-sans">¿Cuándo?</span>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-xl border border-sky-500/20 text-center flex flex-col items-center justify-center">
                        <span className="text-sky-400 font-bold text-lg mb-1">WHY</span>
                        <span className="text-slate-400 text-xs">Reasons</span>
                        <span className="text-slate-500 text-xs mt-1 italic font-sans">¿Por qué?</span>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-xl border border-purple-500/20 text-center flex flex-col items-center justify-center">
                        <span className="text-purple-400 font-bold text-lg mb-1">HOW</span>
                        <span className="text-slate-400 text-xs">Method / Status</span>
                        <span className="text-slate-500 text-xs mt-1 italic font-sans">¿Cómo?</span>
                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Structural Transformation Theory */}
                  <CurriculumBlock 
                    icon={<Lightbulb />}
                    title="Theory: The Structural Transformation"
                    subtitle="10 Minutes • Grammar Focus"
                    methodology="Pattern Recognition"
                    accentColor="indigo"
                  >
                    <p className="text-slate-300 leading-relaxed mb-4">
                      English questions require <strong className="text-white">subject-verb inversion</strong>. This is the #1 structural mistake Spanish speakers make — they keep the statement order and just raise their voice at the end. That does NOT work in English.
                    </p>

                    <div className="bg-indigo-950/20 p-5 rounded-lg border border-indigo-500/30 mb-6">
                       <h4 className="text-indigo-400 font-bold text-xs uppercase mb-3">The 3-Step Transformation</h4>
                       <div className="space-y-3 text-sm text-slate-300">
                          <p>1. <strong className="text-white">Statement:</strong> Your name <strong className="text-indigo-400 bg-slate-900 px-1">is</strong> Sebastian.</p>
                          <p>2. <strong className="text-white">Yes/No Question:</strong> <strong className="text-indigo-400 bg-slate-900 px-1">Is</strong> your name Sebastian?</p>
                          <p>3. <strong className="text-white">Wh- Question:</strong> <strong className="text-sky-400 bg-slate-900 px-1">What</strong> <strong className="text-indigo-400 bg-slate-900 px-1">is</strong> your name?</p>
                       </div>
                    </div>

                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                       <h4 className="text-white font-semibold mb-4">📋 More Transformation Examples</h4>
                       <div className="space-y-4 text-sm">
                          <div className="border-b border-slate-800 pb-3">
                            <p className="text-slate-400">Statement: She <strong className="text-indigo-400">is</strong> from Mexico City.</p>
                            <p className="text-white mt-1">→ <strong className="text-cyan-400">Where</strong> <strong className="text-indigo-400">is</strong> she from?</p>
                          </div>
                          <div className="border-b border-slate-800 pb-3">
                            <p className="text-slate-400">Statement: They <strong className="text-indigo-400">are</strong> late because of traffic.</p>
                            <p className="text-white mt-1">→ <strong className="text-sky-400">Why</strong> <strong className="text-indigo-400">are</strong> they late?</p>
                          </div>
                          <div className="border-b border-slate-800 pb-3">
                            <p className="text-slate-400">Statement: The meeting <strong className="text-indigo-400">is</strong> at 3 PM.</p>
                            <p className="text-white mt-1">→ <strong className="text-teal-400">When</strong> <strong className="text-indigo-400">is</strong> the meeting?</p>
                          </div>
                          <div className="border-b border-slate-800 pb-3">
                            <p className="text-slate-400">Statement: The manager <strong className="text-indigo-400">is</strong> Mr. Johnson.</p>
                            <p className="text-white mt-1">→ <strong className="text-blue-400">Who</strong> <strong className="text-indigo-400">is</strong> the manager?</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Statement: The weather <strong className="text-indigo-400">is</strong> cold and dry.</p>
                            <p className="text-white mt-1">→ <strong className="text-purple-400">How</strong> <strong className="text-indigo-400">is</strong> the weather?</p>
                          </div>
                       </div>
                    </div>

                    <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20">
                       <h4 className="text-red-400 font-bold text-sm mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Common Mistakes by Spanish Speakers</h4>
                       <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <span className="text-red-400">❌</span>
                            <p className="text-slate-300">&quot;Where you are from?&quot; <span className="text-slate-500">(No inversion — sounds like a statement)</span></p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-green-400">✅</span>
                            <p className="text-slate-300">&quot;Where <strong className="text-white">are you</strong> from?&quot;</p>
                          </div>
                          <div className="flex items-start gap-2 mt-3">
                            <span className="text-red-400">❌</span>
                            <p className="text-slate-300">&quot;How is your name?&quot; <span className="text-slate-500">(Using HOW instead of WHAT — direct translation from &quot;¿Cómo te llamas?&quot;)</span></p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-green-400">✅</span>
                            <p className="text-slate-300">&quot;<strong className="text-white">What</strong> is your name?&quot;</p>
                          </div>
                          <div className="flex items-start gap-2 mt-3">
                            <span className="text-red-400">❌</span>
                            <p className="text-slate-300">&quot;How many years you have?&quot; <span className="text-slate-500">(Direct translation from &quot;¿Cuántos años tienes?&quot;)</span></p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-green-400">✅</span>
                            <p className="text-slate-300">&quot;<strong className="text-white">How old are you?</strong>&quot;</p>
                          </div>
                       </div>
                    </div>
                  </CurriculumBlock>

                  {/* Expanded Dialogues */}
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
                              <p className="text-slate-300"><strong className="text-white">Student A:</strong> &quot;<strong className="text-cyan-300">Where</strong> are you from?&quot;</p>
                              <p className="text-slate-400 italic">&quot;I am from Bogota, Colombia. But right now I am in Miami.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Student A:</strong> &quot;Oh, <strong className="text-sky-300">why</strong> are you in Miami?&quot;</p>
                              <p className="text-slate-400 italic">&quot;I am here for a cultural exchange program.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Student A:</strong> &quot;<strong className="text-teal-300">When</strong> did you arrive?&quot;</p>
                              <p className="text-slate-400 italic">&quot;I arrived two weeks ago, on June 1st.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Student A:</strong> &quot;<strong className="text-purple-300">How</strong> is the program so far?&quot;</p>
                              <p className="text-slate-400 italic">&quot;It is amazing! The people are very friendly.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-blue-400 text-xs font-bold mb-2 uppercase tracking-widest pl-2 border-l-2 border-blue-500">Dialogue 2: Logistics & Travel</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Agent:</strong> &quot;<strong className="text-teal-300">When</strong> is your flight?&quot;</p>
                              <p className="text-slate-400 italic">&quot;My flight is tomorrow morning at 8 AM.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Agent:</strong> &quot;<strong className="text-blue-300">Who</strong> is traveling with you?&quot;</p>
                              <p className="text-slate-400 italic">&quot;Nobody. I am traveling alone.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Agent:</strong> &quot;<strong className="text-indigo-300">What</strong> airline are you flying?&quot;</p>
                              <p className="text-slate-400 italic">&quot;I am flying Avianca to JFK airport.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Agent:</strong> &quot;<strong className="text-cyan-300">Where</strong> is your hotel?&quot;</p>
                              <p className="text-slate-400 italic">&quot;It is near Times Square, on 42nd Street.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-cyan-400 text-xs font-bold mb-2 uppercase tracking-widest pl-2 border-l-2 border-cyan-500">Dialogue 3: At the Workplace</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;<strong className="text-indigo-300">What</strong> is the problem with the coffee machine?&quot;</p>
                              <p className="text-slate-400 italic">&quot;It is broken. The water is cold.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;<strong className="text-purple-300">How</strong> old is this machine?&quot;</p>
                              <p className="text-slate-400 italic">&quot;It is five years old.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;<strong className="text-blue-300">Who</strong> is the technician?&quot;</p>
                              <p className="text-slate-400 italic">&quot;His name is Jake. He is on the second floor.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;<strong className="text-sky-300">Why</strong> is he on the second floor?&quot;</p>
                              <p className="text-slate-400 italic">&quot;Because there is another broken machine up there.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-purple-400 text-xs font-bold mb-2 uppercase tracking-widest pl-2 border-l-2 border-purple-500">Dialogue 4: Embassy Interview Prep</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;<strong className="text-indigo-300">What</strong> is the purpose of your trip?&quot;</p>
                              <p className="text-slate-400 italic">&quot;I am going for a cultural exchange program with AWA.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;<strong className="text-cyan-300">Where</strong> are you going to work?&quot;</p>
                              <p className="text-slate-400 italic">&quot;I am going to work at Cedar Point in Sandusky, Ohio.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;<strong className="text-teal-300">When</strong> does your program start?&quot;</p>
                              <p className="text-slate-400 italic">&quot;It starts on June 15th, 2026.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;<strong className="text-sky-300">Why</strong> did you choose this program?&quot;</p>
                              <p className="text-slate-400 italic">&quot;Because I want to improve my English and experience American culture.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest pl-2 border-l-2 border-teal-500">Dialogue 5: Making Friends at the Hostel</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">New Friend:</strong> &quot;Hey! <strong className="text-indigo-300">What</strong> is your name?&quot;</p>
                              <p className="text-slate-400 italic">&quot;I am Valentina. Nice to meet you!&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">New Friend:</strong> &quot;<strong className="text-cyan-300">Where</strong> are you from?&quot;</p>
                              <p className="text-slate-400 italic">&quot;I am from Medellín, Colombia.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">New Friend:</strong> &quot;Cool! <strong className="text-purple-300">How</strong> long are you staying?&quot;</p>
                              <p className="text-slate-400 italic">&quot;I am staying for three months, until September.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">New Friend:</strong> &quot;<strong className="text-blue-300">Who</strong> is your roommate?&quot;</p>
                              <p className="text-slate-400 italic">&quot;Her name is Sofia. She is from Peru!&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Activity: Detective Game — Expanded */}
                  <CurriculumBlock 
                    icon={<Users />}
                    title="Phase 3: The Detective Game"
                    subtitle="15 Minutes • Active Practice"
                    methodology="Information Gap Task"
                    accentColor="indigo"
                  >
                     <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        Student A is given a profile of a &quot;Mystery Person&quot; (Name, Age, Location, Job, Reason for travel). Student B is the Detective and must use the 6 Wh- Questions to fill out a blank report form. They trade places after 5 minutes.
                     </p>
                     <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-4">
                        <h4 className="text-white font-semibold mb-3">🕵️ Sample Mystery Person Cards</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
                            <p className="text-indigo-400 font-bold text-xs mb-2">CARD A — The Student</p>
                            <ul className="text-slate-300 text-sm space-y-1">
                              <li>Name: Laura Gómez</li>
                              <li>Age: 22</li>
                              <li>From: Cali, Colombia</li>
                              <li>Job: Lifeguard at Virginia Beach</li>
                              <li>Reason: J1 cultural exchange</li>
                            </ul>
                          </div>
                          <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                            <p className="text-blue-400 font-bold text-xs mb-2">CARD B — The Tourist</p>
                            <ul className="text-slate-300 text-sm space-y-1">
                              <li>Name: James Wilson</li>
                              <li>Age: 35</li>
                              <li>From: London, England</li>
                              <li>Job: Software Engineer</li>
                              <li>Reason: Vacation in Miami</li>
                            </ul>
                          </div>
                          <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                            <p className="text-cyan-400 font-bold text-xs mb-2">CARD C — The Worker</p>
                            <ul className="text-slate-300 text-sm space-y-1">
                              <li>Name: Andrés Martínez</li>
                              <li>Age: 20</li>
                              <li>From: Barranquilla, Colombia</li>
                              <li>Job: Housekeeper at Hilton</li>
                              <li>Reason: Summer Work & Travel</li>
                            </ul>
                          </div>
                          <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                            <p className="text-purple-400 font-bold text-xs mb-2">CARD D — The Traveler</p>
                            <ul className="text-slate-300 text-sm space-y-1">
                              <li>Name: Yuki Tanaka</li>
                              <li>Age: 28</li>
                              <li>From: Tokyo, Japan</li>
                              <li>Job: Pastry Chef</li>
                              <li>Reason: Culinary internship in NYC</li>
                            </ul>
                          </div>
                        </div>
                     </div>
                     <div className="bg-indigo-500/10 rounded-xl p-5 border border-indigo-500/20">
                        <h4 className="text-white font-semibold mb-3">📝 Detective Report Template</h4>
                        <p className="text-slate-300 text-sm mb-2">The Detective must ask ONE question per field. Write the answers:</p>
                        <div className="space-y-2 text-sm font-mono text-slate-400">
                          <p>1. <strong className="text-indigo-400">WHAT</strong> is their name? → _______________</p>
                          <p>2. <strong className="text-purple-400">HOW</strong> old are they? → _______________</p>
                          <p>3. <strong className="text-cyan-400">WHERE</strong> are they from? → _______________</p>
                          <p>4. <strong className="text-indigo-400">WHAT</strong> is their job? → _______________</p>
                          <p>5. <strong className="text-sky-400">WHY</strong> are they here? → _______________</p>
                          <p>6. <strong className="text-blue-400">WHO</strong> is traveling with them? → _______________</p>
                        </div>
                     </div>
                  </CurriculumBlock>

                  {/* Quick-Fire Quiz Activity */}
                  <CurriculumBlock 
                    icon={<Target />}
                    title="Phase 4: Wh- Quick-Fire Quiz"
                    subtitle="10 Minutes • Assessment"
                    methodology="Rapid Response Drill"
                    accentColor="indigo"
                  >
                    <p className="text-slate-300 text-sm mb-4">
                      Teacher reads a statement. Students must convert it into the correct Wh- question as fast as possible. First student to raise their hand and answer correctly gets a point.
                    </p>
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                          <span className="text-indigo-400 font-bold shrink-0">1.</span>
                          <div>
                            <p className="text-slate-400">&quot;Her name is Maria.&quot;</p>
                            <p className="text-green-400">→ &quot;What is her name?&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                          <span className="text-indigo-400 font-bold shrink-0">2.</span>
                          <div>
                            <p className="text-slate-400">&quot;He is from Cartagena.&quot;</p>
                            <p className="text-green-400">→ &quot;Where is he from?&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                          <span className="text-indigo-400 font-bold shrink-0">3.</span>
                          <div>
                            <p className="text-slate-400">&quot;The class is at 9 AM.&quot;</p>
                            <p className="text-green-400">→ &quot;When is the class?&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                          <span className="text-indigo-400 font-bold shrink-0">4.</span>
                          <div>
                            <p className="text-slate-400">&quot;She is late because of the rain.&quot;</p>
                            <p className="text-green-400">→ &quot;Why is she late?&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                          <span className="text-indigo-400 font-bold shrink-0">5.</span>
                          <div>
                            <p className="text-slate-400">&quot;The supervisor is Mr. Rodriguez.&quot;</p>
                            <p className="text-green-400">→ &quot;Who is the supervisor?&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-indigo-400 font-bold shrink-0">6.</span>
                          <div>
                            <p className="text-slate-400">&quot;The weather is sunny and warm.&quot;</p>
                            <p className="text-green-400">→ &quot;How is the weather?&quot;</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
                    Describing familial structures requires mastering irregular plurals and the apostrophe-S (&apos;s). It is the most efficient way to demonstrate ownership.
                  </p>

                  <CurriculumContext title="Pedagogical Focus: The 'S" accentColor="rose">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong>The Spanish Crutch:</strong> Spanish speakers say &quot;The car of my brother&quot;. In English, this sounds archaic and robotic. We must drill &quot;My brother&apos;s car&quot; until the &quot;of&quot; crutch is broken.
                    </p>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  {/* Theory: Family Vocabulary */}
                  <CurriculumBlock 
                    icon={<Heart />}
                    title="Theory: Family Vocabulary"
                    subtitle="10 Minutes • Direct Instruction"
                    methodology="Visual Vocabulary"
                    accentColor="rose"
                  >
                    <p className="text-slate-300 leading-relaxed mb-4">
                      Before learning possessives, students need a solid foundation of <strong className="text-white">family relationship words</strong> in English. Many of these have no direct one-to-one translation from Spanish.
                    </p>
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                      <h4 className="text-white font-semibold mb-4">👨‍👩‍👧‍👦 Core Family Vocabulary</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                        <div className="bg-rose-500/10 rounded-lg p-3 border border-rose-500/20 text-center">
                          <p className="text-rose-400 font-bold mb-1">Parents</p>
                          <p className="text-slate-300">Father / Mother</p>
                          <p className="text-slate-500 text-xs italic">Dad / Mom (informal)</p>
                        </div>
                        <div className="bg-rose-500/10 rounded-lg p-3 border border-rose-500/20 text-center">
                          <p className="text-rose-400 font-bold mb-1">Siblings</p>
                          <p className="text-slate-300">Brother / Sister</p>
                          <p className="text-slate-500 text-xs italic">hermano / hermana</p>
                        </div>
                        <div className="bg-rose-500/10 rounded-lg p-3 border border-rose-500/20 text-center">
                          <p className="text-rose-400 font-bold mb-1">Grandparents</p>
                          <p className="text-slate-300">Grandfather / Grandmother</p>
                          <p className="text-slate-500 text-xs italic">Grandpa / Grandma</p>
                        </div>
                        <div className="bg-pink-500/10 rounded-lg p-3 border border-pink-500/20 text-center">
                          <p className="text-pink-400 font-bold mb-1">Extended</p>
                          <p className="text-slate-300">Uncle / Aunt</p>
                          <p className="text-slate-500 text-xs italic">Cousin (one word for both!)</p>
                        </div>
                        <div className="bg-pink-500/10 rounded-lg p-3 border border-pink-500/20 text-center">
                          <p className="text-pink-400 font-bold mb-1">In-Laws</p>
                          <p className="text-slate-300">Father-in-law / Mother-in-law</p>
                          <p className="text-slate-500 text-xs italic">suegro / suegra</p>
                        </div>
                        <div className="bg-pink-500/10 rounded-lg p-3 border border-pink-500/20 text-center">
                          <p className="text-pink-400 font-bold mb-1">Blended</p>
                          <p className="text-slate-300">Stepbrother / Stepsister</p>
                          <p className="text-slate-500 text-xs italic">Half-brother / Half-sister</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20">
                      <h4 className="text-red-400 font-bold text-sm mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Common Mistakes</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">❌</span>
                          <p className="text-slate-300">&quot;My cousin <strong>brother</strong>&quot; — <span className="text-slate-500">English has no &quot;primo&quot; vs &quot;prima&quot; distinction. Just say &quot;my cousin&quot;.</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">❌</span>
                          <p className="text-slate-300">&quot;My <strong>brother political</strong>&quot; — <span className="text-slate-500">It&apos;s &quot;brother-in-law&quot;, not a direct translation of &quot;cuñado&quot;.</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">❌</span>
                          <p className="text-slate-300">&quot;I have 20 <strong>years</strong>&quot; — <span className="text-slate-500">English says &quot;I am 20 years old&quot; (use TO BE, not TO HAVE).</span></p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Irregular Plurals + Possessive Theory */}
                  <CurriculumBlock 
                    icon={<BookOpen />}
                    title="Theory: Plurals & Possessive 'S"
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
                           <li className="flex justify-between border-b border-rose-500/20 pb-1"><span>1 Wife</span> <span className="text-white font-bold">2 Wives</span></li>
                           <li className="flex justify-between"><span>1 Tooth</span> <span className="text-white font-bold">2 Teeth</span></li>
                         </ul>
                      </div>

                      <div className="bg-slate-950/50 rounded-xl p-5 border border-pink-500/20">
                         <h4 className="text-pink-400 font-bold mb-3 flex items-center gap-2"><TreeDeciduous className="w-4 h-4"/> The Possessive &apos;S</h4>
                         <div className="space-y-3">
                           <div>
                             <p className="text-slate-400 text-xs">Standard Object:</p>
                             <p className="text-white">John<strong className="text-pink-400">&apos;s</strong> car</p>
                           </div>
                           <div>
                             <p className="text-slate-400 text-xs">Family Relation:</p>
                             <p className="text-white">My mother<strong className="text-pink-400">&apos;s</strong> sister</p>
                           </div>
                           <div>
                             <p className="text-slate-400 text-xs">Singular Noun Ending in S:</p>
                             <p className="text-white">Carlos<strong className="text-pink-400">&apos;s</strong> friend OR Carlos<strong className="text-pink-400">&apos;</strong> friend</p>
                           </div>
                           <div>
                             <p className="text-slate-400 text-xs">Plural Possessive:</p>
                             <p className="text-white">The students<strong className="text-pink-400">&apos;</strong> books <span className="text-slate-500 text-xs">(already ends in S)</span></p>
                           </div>
                         </div>
                      </div>
                    </div>

                    <div className="bg-rose-500/10 rounded-xl p-5 border border-rose-500/20 mt-6">
                      <h4 className="text-white font-semibold mb-3">🔄 The &quot;Of&quot; → &quot;&apos;S&quot; Transformation</h4>
                      <p className="text-slate-300 text-sm mb-3">Spanish-speakers instinctively translate using &quot;of&quot; (de). They must learn to flip the structure:</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-3">
                          <span className="text-red-400">❌</span>
                          <span className="text-slate-400">&quot;The house of my father&quot;</span>
                          <span className="text-slate-600">→</span>
                          <span className="text-green-400">✅ &quot;My father&apos;s house&quot;</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-red-400">❌</span>
                          <span className="text-slate-400">&quot;The friend of my sister&quot;</span>
                          <span className="text-slate-600">→</span>
                          <span className="text-green-400">✅ &quot;My sister&apos;s friend&quot;</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-red-400">❌</span>
                          <span className="text-slate-400">&quot;The name of your sponsor&quot;</span>
                          <span className="text-slate-600">→</span>
                          <span className="text-green-400">✅ &quot;Your sponsor&apos;s name&quot;</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-red-400">❌</span>
                          <span className="text-slate-400">&quot;The birthday of my mother&quot;</span>
                          <span className="text-slate-600">→</span>
                          <span className="text-green-400">✅ &quot;My mother&apos;s birthday&quot;</span>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Expanded Relational Dialogues */}
                  <CurriculumBlock 
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Relational Dialogues"
                    subtitle="25 Minutes • Massive Expansion"
                    methodology="Contextual Shadowing"
                    accentColor="rose"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">
                        
                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-rose-400 text-xs font-bold mb-2 uppercase tracking-widest pl-2 border-l-2 border-rose-500">Dialogue 1: Meeting at the Party</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Sarah:</strong> &quot;Who is that man over there?&quot;</p>
                              <p className="text-slate-400 italic">&quot;Oh, that is my <strong className="text-rose-300">brother&apos;s</strong> friend, Michael.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Sarah:</strong> &quot;Are those his <strong className="text-rose-300">children</strong>?&quot;</p>
                              <p className="text-slate-400 italic">&quot;No, those are my <strong className="text-rose-300">sister&apos;s kids</strong>. Michael is single.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Sarah:</strong> &quot;What is your <strong className="text-rose-300">sister&apos;s</strong> name?&quot;</p>
                              <p className="text-slate-400 italic">&quot;Her name is Carolina. And her <strong className="text-rose-300">husband&apos;s</strong> name is Andrés.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-pink-400 text-xs font-bold mb-2 uppercase tracking-widest pl-2 border-l-2 border-pink-500">Dialogue 2: The Visa Interview</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;Where are you staying in New York?&quot;</p>
                              <p className="text-slate-400 italic">&quot;I am staying at my <strong className="text-pink-300">aunt&apos;s</strong> house.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;What is your <strong className="text-pink-300">aunt&apos;s</strong> name?&quot;</p>
                              <p className="text-slate-400 italic">&quot;Her name is Maria. And my <strong className="text-pink-300">uncle&apos;s</strong> name is David.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;What is your <strong className="text-pink-300">uncle&apos;s</strong> occupation?&quot;</p>
                              <p className="text-slate-400 italic">&quot;He is a construction manager. He has lived there for 12 years.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-purple-400 text-xs font-bold mb-2 uppercase tracking-widest pl-2 border-l-2 border-purple-500">Dialogue 3: At the Workplace</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Coworker:</strong> &quot;Is this your <strong className="text-purple-300">manager&apos;s</strong> office?&quot;</p>
                              <p className="text-slate-400 italic">&quot;No, that is the <strong className="text-purple-300">supervisor&apos;s</strong> office. My <strong className="text-purple-300">manager&apos;s</strong> desk is over there.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Coworker:</strong> &quot;Where are the <strong className="text-purple-300">employees&apos;</strong> lockers?&quot;</p>
                              <p className="text-slate-400 italic">&quot;They are downstairs, next to the <strong className="text-purple-300">staff&apos;s</strong> breakroom.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-indigo-400 text-xs font-bold mb-2 uppercase tracking-widest pl-2 border-l-2 border-indigo-500">Dialogue 4: Describing Family Photos</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;Who is in this photo?&quot;</p>
                              <p className="text-slate-400 italic">&quot;This is my <strong className="text-indigo-300">grandmother&apos;s</strong> 80th birthday party.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;Who are those <strong className="text-indigo-300">people</strong> next to her?&quot;</p>
                              <p className="text-slate-400 italic">&quot;Those are my <strong className="text-indigo-300">parents</strong> — my <strong className="text-indigo-300">father&apos;s</strong> name is Jorge and my <strong className="text-indigo-300">mother&apos;s</strong> name is Isabel.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;And the <strong className="text-indigo-300">children</strong>?&quot;</p>
                              <p className="text-slate-400 italic">&quot;The <strong className="text-indigo-300">boy</strong> is my <strong className="text-indigo-300">cousin&apos;s</strong> son, and the two <strong className="text-indigo-300">girls</strong> are my <strong className="text-indigo-300">sister&apos;s</strong> daughters.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Family Tree Activity — Expanded */}
                  <CurriculumBlock 
                    icon={<TreeDeciduous />}
                    title="Phase 3: Building The Family Tree"
                    subtitle="20 Minutes • Visual Construction"
                    methodology="Drawing & Description"
                    accentColor="rose"
                  >
                     <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        On the board, the instructor draws a complex family tree (e.g., The Simpsons, or The Royal Family). The students must use the possessive &apos;s and family vocabulary to explain the relationships linking the bottom of the tree to the top.
                     </p>
                     <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-4">
                        <h4 className="text-white font-semibold mb-3">🏠 Example: The García Family</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>• &quot;Carlos is <strong className="text-rose-400">María&apos;s</strong> husband.&quot;</p>
                          <p>• &quot;Valentina is <strong className="text-rose-400">Carlos and María&apos;s</strong> daughter.&quot;</p>
                          <p>• &quot;Andrés is <strong className="text-rose-400">Valentina&apos;s</strong> brother.&quot;</p>
                          <p>• &quot;Doña Rosa is <strong className="text-rose-400">Carlos&apos;s</strong> mother — she is <strong className="text-rose-400">Valentina&apos;s</strong> grandmother.&quot;</p>
                          <p>• &quot;Pedro is <strong className="text-rose-400">María&apos;s</strong> brother — he is <strong className="text-rose-400">Valentina&apos;s</strong> uncle.&quot;</p>
                          <p>• &quot;Sofia is <strong className="text-rose-400">Pedro&apos;s</strong> daughter — she is <strong className="text-rose-400">Valentina&apos;s</strong> cousin.&quot;</p>
                        </div>
                     </div>
                     <div className="bg-rose-500/10 rounded-xl p-5 border border-rose-500/20">
                        <h4 className="text-white font-semibold mb-3">🎯 Activity: My Family in 60 Seconds</h4>
                        <p className="text-slate-300 text-sm mb-3">Each student stands and describes their OWN family using possessive &apos;s for 60 seconds without stopping. Class evaluates:</p>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• Did they use possessive &apos;s at least 5 times? ✅/❌</li>
                          <li>• Did they fall back to &quot;the X of Y&quot; pattern? ✅/❌</li>
                          <li>• Did they use correct irregular plurals? (children, not childs) ✅/❌</li>
                          <li>• Did they speak for the full 60 seconds? ✅/❌</li>
                        </ul>
                     </div>
                  </CurriculumBlock>

                  {/* Possessive Quick-Fire Quiz */}
                  <CurriculumBlock 
                    icon={<Target />}
                    title="Phase 4: Possessive Flip Quiz"
                    subtitle="10 Minutes • Assessment"
                    methodology="Rapid Transformation Drill"
                    accentColor="rose"
                  >
                    <p className="text-slate-300 text-sm mb-4">
                      Teacher reads a phrase using &quot;of&quot;. Students must convert it to the possessive &apos;s form as fast as possible. Award points for speed and accuracy.
                    </p>
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                          <span className="text-rose-400 font-bold shrink-0">1.</span>
                          <div>
                            <p className="text-slate-400">&quot;The car of my brother&quot;</p>
                            <p className="text-green-400">→ &quot;My brother&apos;s car&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                          <span className="text-rose-400 font-bold shrink-0">2.</span>
                          <div>
                            <p className="text-slate-400">&quot;The birthday of my grandmother&quot;</p>
                            <p className="text-green-400">→ &quot;My grandmother&apos;s birthday&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                          <span className="text-rose-400 font-bold shrink-0">3.</span>
                          <div>
                            <p className="text-slate-400">&quot;The phone of the teacher&quot;</p>
                            <p className="text-green-400">→ &quot;The teacher&apos;s phone&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                          <span className="text-rose-400 font-bold shrink-0">4.</span>
                          <div>
                            <p className="text-slate-400">&quot;The toys of the children&quot;</p>
                            <p className="text-green-400">→ &quot;The children&apos;s toys&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                          <span className="text-rose-400 font-bold shrink-0">5.</span>
                          <div>
                            <p className="text-slate-400">&quot;The house of my parents&quot;</p>
                            <p className="text-green-400">→ &quot;My parents&apos; house&quot; <span className="text-amber-400 text-xs">(note: apostrophe AFTER the s)</span></p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-rose-400 font-bold shrink-0">6.</span>
                          <div>
                            <p className="text-slate-400">&quot;The name of the sponsor of my program&quot;</p>
                            <p className="text-green-400">→ &quot;My program&apos;s sponsor&apos;s name&quot; <span className="text-amber-400 text-xs">(double possessive!)</span></p>
                          </div>
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
        prevHref="/english-class/hours-3-4"
        prevLabel="Hours 3 & 4"
        nextHref="/english-class/hours-7-8"
        nextLabel="Hours 7 & 8"
        accentColor="indigo"
      />
    </div>
  );
}
