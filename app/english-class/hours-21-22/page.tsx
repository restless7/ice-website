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

                  <CurriculumContext title="The Shield & Sword Methodology" accentColor="indigo">
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      As a course architect, we teach the two-pronged approach to high-stakes diplomacy:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-indigo-500/20">
                        <p className="text-xs text-indigo-400 font-bold uppercase mb-1 flex items-center gap-2"><ShieldCheck className="w-3 h-3" /> The Shield (Defense)</p>
                        <p className="text-[11px] text-slate-400 mb-2 italic">When you don't understand or need time:</p>
                        <ul className="text-xs text-white space-y-1 font-mono">
                          <li>• "Could you repeat that, please?"</li>
                          <li>• "Sorry, I didn't catch that."</li>
                          <li>• "Let me think for a second..."</li>
                        </ul>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-emerald-500/20">
                        <p className="text-xs text-emerald-400 font-bold uppercase mb-1 flex items-center gap-2"><Mic2 className="w-3 h-3" /> The Sword (Offense)</p>
                        <p className="text-[11px] text-slate-400 mb-2 italic">Pro-active detail layering:</p>
                        <ul className="text-xs text-white space-y-1 font-mono">
                          <li>• "Specifically, I am interested in..."</li>
                          <li>• "Actually, my experience in [X]..."</li>
                          <li>• "Primarily, my goal is to..."</li>
                        </ul>
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
                    
                    <div className="grid grid-cols-1 gap-6 mt-8">
                      {/* Q1 & Q2 - Expanded */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full" />
                        <div className="grid md:grid-cols-2 gap-8 relative z-10">
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 text-[10px] font-bold rounded uppercase">Target: Purpose</span>
                              <div className="h-px flex-grow bg-slate-800" />
                            </div>
                            <h4 className="text-white font-bold text-lg mb-3">What are you going to do in the USA?</h4>
                            <div className="space-y-4">
                              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Standard Answer:</p>
                                <p className="text-slate-300 font-serif italic italic">&quot;Work in a program.&quot;</p>
                              </div>
                              <div className="bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/30">
                                <p className="text-xs text-indigo-400 uppercase font-bold mb-1">Master Teacher Level:</p>
                                <p className="text-white font-serif italic">&quot;I am participating in a Summer Work &amp; Travel cultural exchange to work as a [Position] in [State].&quot;</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] font-bold rounded uppercase">Target: Logistics</span>
                              <div className="h-px flex-grow bg-slate-800" />
                            </div>
                            <h4 className="text-white font-bold text-lg mb-3">Where are you going specifically?</h4>
                            <p className="text-slate-400 text-sm mb-4">Don't just give the state. Give the business name and its function.</p>
                            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 group-hover:border-blue-500/30 transition-all">
                              <p className="text-white font-serif italic">&quot;I&apos;ll be based in Wisconsin Dells, working at Wilderness Resort. It&apos;s a high-volume waterpark resort where I&apos;ll be helping in guest services.&quot;</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Q3 & Q4 - Expanded */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full" />
                        <div className="grid md:grid-cols-2 gap-8 relative z-10">
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded uppercase">Target: Intent</span>
                              <div className="h-px flex-grow bg-slate-800" />
                            </div>
                            <h4 className="text-white font-bold text-lg mb-3">Why do you want to participate?</h4>
                            <p className="text-slate-400 text-sm mb-4">The officer is listening for "Social/Cultural Ties".</p>
                            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 group-hover:border-emerald-500/30 transition-all">
                                <p className="text-white font-serif italic mb-3">&quot;My primary motivation is linguistic immersion and vocational growth.&quot;</p>
                                <p className="text-slate-400 text-[11px] leading-relaxed">Mention how this experience will impact your career in <span className="text-emerald-400 font-bold">Colombia</span> after you return.</p>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-2 py-0.5 bg-teal-500/20 text-teal-400 text-[10px] font-bold rounded uppercase">Target: Profile</span>
                              <div className="h-px flex-grow bg-slate-800" />
                            </div>
                            <h4 className="text-white font-bold text-lg mb-3">What do you study?</h4>
                            <div className="space-y-3">
                              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                                <p className="text-teal-400 text-[10px] font-mono mb-1 uppercase tracking-widest font-bold">The UTS Variant (Networking)</p>
                                <p className="text-slate-300 text-xs italic">&quot;I am studying Technology in Networking at UTS University.&quot;</p>
                              </div>
                              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                                <p className="text-teal-400 text-[10px] font-mono mb-1 uppercase tracking-widest font-bold">The Business Variant</p>
                                <p className="text-slate-300 text-xs italic">&quot;I am in my 6th semester of International Business at UNAB.&quot;</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 22: Advanced Simulations */}
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
                    Now we apply high-density pressure. You&apos;ll learn to mirror the officer&apos;s linguistic frequency while maintaining professional posture.
                  </p>

                  <CurriculumContext title="Non-Verbal Mastery" accentColor="blue">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                           <p className="text-[10px] text-blue-400 font-bold uppercase mb-1">Posture</p>
                           <p className="text-[11px] text-slate-300">Shoulders back, hands visible on the counter.</p>
                        </div>
                        <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                           <p className="text-[10px] text-blue-400 font-bold uppercase mb-1">Eyes</p>
                           <p className="text-[11px] text-slate-300">Constant contact with the officer, not the floor.</p>
                        </div>
                    </div>
                  </CurriculumContext>

                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Search />}
                    title="Phase 2: Advanced Tense Detective"
                    subtitle="25 Minutes &bull; Analytical Listening"
                    methodology="Grammar Scaffolding"
                    accentColor="indigo"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        The Master Teacher secret: Listen for the <span className="text-white font-bold italic">auxiliary verb</span>. It is your roadmap to a perfect answer.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 border border-indigo-500/20 rounded-xl p-4">
                            <p className="text-[10px] text-indigo-400 font-bold uppercase mb-2">The "DO" Trap (Habits)</p>
                            <p className="text-white text-sm font-bold mb-2">&quot;What <span className="underline decoration-indigo-500">do</span> you study?&quot;</p>
                            <p className="text-slate-400 text-xs">&quot;I <span className="italic text-indigo-300">study</span> Chemistry.&quot; (Simple Present)</p>
                        </div>
                        <div className="bg-slate-900 border border-sky-500/20 rounded-xl p-4">
                            <p className="text-[10px] text-sky-400 font-bold uppercase mb-2">The "GOING TO" (Future Plan)</p>
                            <p className="text-white text-sm font-bold mb-2">&quot;<span className="underline decoration-sky-500">Are</span> you <span className="underline decoration-sky-500">going to</span> leave?&quot;</p>
                            <p className="text-slate-400 text-xs">&quot;Yes, I <span className="italic text-sky-300">am going to</span> return in March.&quot; (Future)</p>
                        </div>
                        <div className="bg-slate-900 border border-emerald-500/20 rounded-xl p-4">
                            <p className="text-[10px] text-emerald-400 font-bold uppercase mb-2">The "HAVE" (Experience)</p>
                            <p className="text-white text-sm font-bold mb-2">&quot;<span className="underline decoration-emerald-500">Have</span> you ever travelled?&quot;</p>
                            <p className="text-slate-400 text-xs">&quot;No, I <span className="italic text-emerald-300">have not</span> travelled before.&quot; (Present Perfect)</p>
                        </div>
                        <div className="bg-slate-900 border border-amber-500/20 rounded-xl p-4">
                            <p className="text-[10px] text-amber-400 font-bold uppercase mb-2">The "DID" (History)</p>
                            <p className="text-white text-sm font-bold mb-2">&quot;When <span className="underline decoration-amber-500">did</span> you start?&quot;</p>
                            <p className="text-slate-400 text-xs">&quot;I <span className="italic text-amber-300">started</span> my major in 2022.&quot; (Simple Past)</p>
                        </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<ShieldCheck />}
                    title="Phase 3: Stress-Testing the Profile"
                    subtitle="40 Minutes &bull; Roleplay Simulations"
                    methodology="Immersion and Immediate Correction"
                    accentColor="indigo"
                  >
                    <div className="bg-slate-950/50 p-6 rounded-xl border border-indigo-500/30 mt-4 overflow-hidden relative">
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full" />
                        <h4 className="text-indigo-400 font-bold mb-4 uppercase text-xs tracking-widest relative z-10">Advanced Simulation Protocol:</h4>
                        <p className="text-sm text-slate-300 mb-6 leading-relaxed relative z-10">
                            The &quot;Officer&quot; must now provide a <span className="text-white font-bold">Negative Stimulus</span> (interrupting, looking at their phone, or typing loudly) to test the student&apos;s focus.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <h5 className="text-emerald-400 font-bold text-sm uppercase">The "Safe" Zone</h5>
                                </div>
                                <ul className="text-xs text-slate-400 space-y-2 pl-2 border-l border-emerald-500/30">
                                    <li>• Mirroring the officer&apos;s pace (Fast vs. Slow)</li>
                                    <li>• Hands resting naturally on the table</li>
                                    <li>• Immediate &quot;Shield&quot; use when mumbling occurs</li>
                                    <li>• Ending every answer with a clear period.</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
                                        <AlertTriangle className="w-5 h-5" />
                                    </div>
                                    <h5 className="text-rose-400 font-bold text-sm uppercase">The "Danger" Zone</h5>
                                </div>
                                <ul className="text-xs text-slate-400 space-y-2 pl-2 border-l border-rose-500/30">
                                    <li>• Fidgeting with hair or clothes</li>
                                    <li>• Using "I think..." (Shows uncertainty)</li>
                                    <li>• Responding with "Yes/No" ONLY (Immediate flag)</li>
                                    <li>• Looking for help from the teacher</li>
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

      {/* APPLIED CONVERSATIONS */}
      <section className="py-16 relative z-10 border-t border-slate-800/60">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-12">
            <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-2">Applied Conversations</p>
            <h2 className="text-3xl font-bold text-white">Real Interview Simulations</h2>
            <p className="text-slate-400 mt-2 max-w-2xl">Study each exchange. Notice the tense mirroring, the detail layering, and the Shield recovery technique in action.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Conversation 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="bg-indigo-900/30 border-b border-indigo-500/20 px-5 py-3">
                <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Dialogue 01 · Lifeguard · Wisconsin · Standard Open</span>
              </div>
              <div className="p-5 space-y-4 font-serif text-sm">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Good morning. What is the purpose of your trip to the United States?"</p></div>
                <div><p className="text-[10px] text-indigo-300 uppercase font-bold mb-1">Student ✓</p><p className="text-indigo-200 italic">"Good morning, Officer. I am participating in a Summer Work &amp; Travel cultural exchange. I have a job offer as a Lifeguard at Wilderness Resort in Wisconsin Dells, Wisconsin."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"When are you returning to Colombia?"</p></div>
                <div><p className="text-[10px] text-indigo-300 uppercase font-bold mb-1">Student ✓</p><p className="text-indigo-200 italic">"My program ends September 15th. I have a return ticket already booked and my university semester resumes in early October."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"What semester are you in?"</p></div>
                <div><p className="text-[10px] text-indigo-300 uppercase font-bold mb-1">Student ✓</p><p className="text-indigo-200 italic">"I am currently in my sixth semester of Systems Engineering at UTS University. I have five semesters remaining before my graduation thesis."</p></div>
              </div>
              <div className="bg-slate-950 border-t border-slate-800 px-5 py-3">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">✓ Teacher Note</p>
                <p className="text-[10px] text-slate-500 mt-1">Volunteer the return date without being asked. Give a concrete semester count with semesters remaining — never say "the last semester."</p>
              </div>
            </div>

            {/* Conversation 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="bg-indigo-900/30 border-b border-indigo-500/20 px-5 py-3">
                <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Dialogue 02 · Server · Florida · Shield Technique</span>
              </div>
              <div className="p-5 space-y-4 font-serif text-sm">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"What will your primary responsibilities be in this position?"</p></div>
                <div><p className="text-[10px] text-indigo-300 uppercase font-bold mb-1">Student ✓</p><p className="text-indigo-200 italic">"Sorry, Officer — could you please repeat the question?"</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200 italic">"(Repeats) What will you be doing at work?"</p></div>
                <div><p className="text-[10px] text-indigo-300 uppercase font-bold mb-1">Student ✓</p><p className="text-indigo-200 italic">"Of course. As a Server, I will be welcoming guests, taking food and beverage orders, and ensuring a high-quality dining experience. I will also handle payments and coordinate with the kitchen staff."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Have you done this type of work before?"</p></div>
                <div><p className="text-[10px] text-indigo-300 uppercase font-bold mb-1">Student ✓</p><p className="text-indigo-200 italic">"Yes. I have worked as a waiter at Café Ambrosia in Bucaramanga for two years, so I am comfortable in high-volume service environments."</p></div>
              </div>
              <div className="bg-slate-950 border-t border-slate-800 px-5 py-3">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">✓ Teacher Note</p>
                <p className="text-[10px] text-slate-500 mt-1">Shield deployed smoothly. No panic, no silence. Requesting clarification shows professionalism, not weakness.</p>
              </div>
            </div>

            {/* Conversation 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="bg-indigo-900/30 border-b border-indigo-500/20 px-5 py-3">
                <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Dialogue 03 · Housekeeper · South Carolina · The "Why" Trap</span>
              </div>
              <div className="p-5 space-y-4 font-serif text-sm">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Why do you want to go to the United States specifically?"</p></div>
                <div><p className="text-[10px] text-indigo-300 uppercase font-bold mb-1">Student ✓</p><p className="text-indigo-200 italic">"My primary motivation is to achieve full English immersion and gain professional hospitality experience — skills that are highly valued in my career in Colombia."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Why not just take an English course here in Colombia?"</p></div>
                <div><p className="text-[10px] text-indigo-300 uppercase font-bold mb-1">Student ✓</p><p className="text-indigo-200 italic">"A classroom teaches rules, but this program puts me in a live professional environment where English is the only language. The immersion and international experience are things a classroom cannot replicate."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"And after you return?"</p></div>
                <div><p className="text-[10px] text-indigo-300 uppercase font-bold mb-1">Student ✓</p><p className="text-indigo-200 italic">"I will finish my final three semesters at UDES and pursue a career in international hotel management here in Colombia. This experience gives me a competitive professional advantage."</p></div>
              </div>
              <div className="bg-slate-950 border-t border-slate-800 px-5 py-3">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">✓ Teacher Note</p>
                <p className="text-[10px] text-slate-500 mt-1">"Why not just stay?" is a classic trap. The answer MUST anchor the value back to a career in Colombia.</p>
              </div>
            </div>

            {/* Conversation 4 - Failing */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="bg-red-900/20 border-b border-red-500/20 px-5 py-3">
                <span className="text-[10px] text-red-400 font-bold uppercase tracking-widest">Dialogue 04 · ✗ Failing Example — Common Errors</span>
              </div>
              <div className="p-5 space-y-4 font-serif text-sm">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"What are you going to do in the US?"</p></div>
                <div>
                  <p className="text-[10px] text-red-400 uppercase font-bold mb-1">Student ✗</p>
                  <p className="text-red-300/80 italic line-through">"I work in travel program."</p>
                  <p className="text-[10px] text-slate-500 mt-1">→ Wrong tense. Missing article. Should be: "I am participating in a Summer Work &amp; Travel program."</p>
                </div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"How old are you?"</p></div>
                <div>
                  <p className="text-[10px] text-red-400 uppercase font-bold mb-1">Student ✗</p>
                  <p className="text-red-300/80 italic line-through">"I have 22 years old."</p>
                  <p className="text-[10px] text-slate-500 mt-1">→ Spanish calque. Always: "I am 22 years old."</p>
                </div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"What semester are you in?"</p></div>
                <div>
                  <p className="text-[10px] text-red-400 uppercase font-bold mb-1">Student ✗</p>
                  <p className="text-red-300/80 italic line-through">"I am in last semester."</p>
                  <p className="text-[10px] text-slate-500 mt-1">→ "Last semester" implies you graduate now. That means no reason to return. Always give a number and semesters remaining.</p>
                </div>
              </div>
              <div className="bg-red-950/30 border-t border-red-500/20 px-5 py-3">
                <p className="text-[10px] text-red-400 font-bold uppercase">⚠ These errors trigger immediate suspicion or denial</p>
              </div>
            </div>

            {/* Conversation 5 - Full Passing */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden lg:col-span-2">
              <div className="bg-emerald-900/20 border-b border-emerald-500/20 px-5 py-3">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Dialogue 05 · ✓ Full Passing Sequence — Camp Counselor · Texas</span>
              </div>
              <div className="p-5 grid md:grid-cols-2 gap-x-8 gap-y-4 font-serif text-sm">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Good morning. What is the purpose of your visit?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"Good morning. I have a position as Camp Counselor at Camp Champions on Lake LBJ in Marble Falls, Texas, through the J-1 Summer Work &amp; Travel program."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"What exactly does a Camp Counselor do?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"I will supervise and mentor American children aged 8 to 16. My responsibilities include organizing outdoor activities, ensuring camper safety, and supporting emotional development through structured group programs."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Who is paying for all of this?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"My parents are covering the program costs. My father is a construction engineer and my mother works as a schoolteacher. They have been planning and saving specifically for this opportunity."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Are you planning to stay after your program ends?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"Absolutely not, Officer. My program finishes August 31st and I have a return flight booked for September 5th. My university resumes September 22nd and I have my Design Thesis to complete."</p></div>
              </div>
              <div className="bg-slate-950 border-t border-slate-800 px-5 py-3 flex items-center justify-between">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">Result: VISA APPROVED ✓</p>
                <p className="text-[10px] text-slate-500">Strong ties to Colombia. Concrete dates. Clear purpose. No hesitation.</p>
              </div>
            </div>

          </div>
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
