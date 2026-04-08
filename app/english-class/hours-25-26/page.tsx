"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Home,
  ListChecks,
  Star,
  Users,
  Shield,
  MessageSquareQuote,
  Mic2,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassHours25and26() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30">
      <CurriculumHeader
        hourNumber="25 &amp; 26"
        title="Job Profiles"
        subtitle="Selling Your Skills"
        description="Learn to articulate your specific job responsibilities, describe your workplace, and project the exact skills needed for Lifeguard, Server, Housekeeper, and more."
        accentColor="emerald"
        moduleInfo="Unit 3: Conversation Strategies &bull; Part 3"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 25: Job Offer & Responsibilities */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">25</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Your Position</h2>
                      <p className="text-emerald-400 font-medium tracking-wide text-xs uppercase">Job Offer Details</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Your job title is not enough. You must describe what you DO, where you DO IT, and prove you are the right candidate with the right skills.
                  </p>

                  <CurriculumContext title="Precision Adjectives" accentColor="emerald">
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      Don't just say you are "good." Use the <span className="text-white font-bold">Premium Adjective Protocol</span>:
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="p-2 bg-slate-950/50 rounded border border-emerald-500/20 text-[10px] text-slate-300 font-mono italic">"Adaptable"</div>
                      <div className="p-2 bg-slate-950/50 rounded border border-emerald-500/20 text-[10px] text-slate-300 font-mono italic">"Vigilant"</div>
                      <div className="p-2 bg-slate-950/50 rounded border border-emerald-500/20 text-[10px] text-slate-300 font-mono italic">"Proactive"</div>
                      <div className="p-2 bg-slate-950/50 rounded border border-emerald-500/20 text-[10px] text-slate-300 font-mono italic">"Resilient"</div>
                    </div>
                    <div className="bg-emerald-900/20 p-3 rounded-lg border border-emerald-500/30">
                       <p className="text-[10px] text-emerald-400 font-bold uppercase mb-1 flex items-center gap-2"><CheckCircle className="w-3 h-3" /> The Rule of Three</p>
                       <p className="text-[11px] text-slate-300 italic">"I am <span className="text-white font-bold">vigilant</span>, <span className="text-white font-bold">responsible</span>, and <span className="text-white font-bold">punctual</span>."</p>
                    </div>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Briefcase />}
                    title="Phase 1: Job Questions Arsenal"
                    subtitle="25 Minutes &bull; Core Interview Prep"
                    methodology="Script Mastery + Descriptive Layering"
                    accentColor="emerald"
                  >
                    <div className="space-y-4 mt-4">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 transition-colors">
                        <p className="text-slate-500 text-xs mb-1">Q13: Job Offer</p>
                        <h4 className="text-white font-bold text-sm mb-2">&quot;What is your job offer?&quot; / &quot;What is your position?&quot;</h4>
                        <p className="text-emerald-300 text-sm font-serif italic">&quot;I am going to work as a Lifeguard at Kalahari Resort.&quot;</p>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 transition-colors">
                        <p className="text-slate-500 text-xs mb-1">Q14: Location</p>
                        <h4 className="text-white font-bold text-sm mb-2">&quot;What city and state are you going to?&quot;</h4>
                        <p className="text-emerald-300 text-sm font-serif italic">&quot;I am going to Wisconsin Dells, Wisconsin.&quot;</p>
                        <p className="text-xs text-slate-500 mt-2">Must name both city AND state. Never just the state.</p>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 transition-colors">
                        <p className="text-slate-500 text-xs mb-1">Q15: Housing</p>
                        <h4 className="text-white font-bold text-sm mb-2">&quot;Where are you going to live?&quot;</h4>
                        <p className="text-emerald-300 text-sm font-serif italic">&quot;I am going to live in housing provided by my employer. It is close to the resort, and I will share an apartment with other participants.&quot;</p>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 transition-colors">
                        <p className="text-slate-500 text-xs mb-1">Q16: Responsibilities</p>
                        <h4 className="text-white font-bold text-sm mb-2">&quot;What are your responsibilities?&quot; / &quot;What activities will you do?&quot;</h4>
                        <p className="text-emerald-300 text-sm font-serif italic">&quot;As a Lifeguard, I will monitor the pool area, ensure guest safety, enforce pool rules, and provide first aid if needed.&quot;</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<ListChecks />}
                    title="Phase 1: Advanced Job Descriptions"
                    subtitle="25 Minutes &bull; Core Interview Prep"
                    methodology="Script Mastery + Layering"
                    accentColor="emerald"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      {/* Lifeguard - Master Edition */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                           <Shield className="w-8 h-8 text-emerald-500" />
                        </div>
                        <h4 className="text-emerald-400 font-bold text-xs uppercase mb-3 tracking-widest flex items-center gap-2">
                           Lifeguard
                        </h4>
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-4">
                           <p className="text-slate-300 font-serif italic text-xs leading-relaxed">
                              &quot;I am responsible for the <strong className="text-emerald-300">safety and well-being</strong> of all guests. I maintain <strong className="text-emerald-300">constant surveillance</strong> of the water and react instantly to emergencies.&quot;
                           </p>
                        </div>
                        <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Key Verbs:</p>
                        <p className="text-[11px] text-emerald-500/70 font-mono italic">Monitor / Enforce / Respond / Sanitize</p>
                      </div>

                      {/* Food Service - Master Edition */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-500/50 transition-all relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                           <Users className="w-8 h-8 text-green-500" />
                        </div>
                        <h4 className="text-green-400 font-bold text-xs uppercase mb-3 tracking-widest flex items-center gap-2">
                           Food Service
                        </h4>
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-4">
                           <p className="text-slate-300 font-serif italic text-xs leading-relaxed">
                              &quot;My goal is to provide <strong className="text-green-300">excellent customer service</strong> in a fast-paced environment. I handle orders with <strong className="text-green-300">precision</strong> and ensure tables are perfectly set.&quot;
                           </p>
                        </div>
                        <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Key Verbs:</p>
                        <p className="text-[11px] text-green-500/70 font-mono italic">Serve / Assist / Multi-task / Expedite</p>
                      </div>

                      {/* J-1 Rights - The Critical Shield */}
                      <div className="md:col-span-2 bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute -right-4 -bottom-4 opacity-5">
                           <Shield className="w-32 h-32 text-emerald-500" />
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                           <AlertTriangle className="w-4 h-4 text-emerald-400" />
                           <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Master Teacher's Warning: Know Your Rights</p>
                        </div>
                        <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                           While in the US, you are protected by federal law. If an officer asks about your rights, mention the <span className="text-white font-bold italic">Wilberforce Pamphlet</span>.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-3">
                           <div className="text-[10px] bg-slate-900/50 p-2 rounded border border-emerald-500/20 text-slate-400">Right to be paid federal minimum wage.</div>
                           <div className="text-[10px] bg-slate-900/50 p-2 rounded border border-emerald-500/20 text-slate-400">Right to keep your own passport/documents.</div>
                           <div className="text-[10px] bg-slate-900/50 p-2 rounded border border-emerald-500/20 text-slate-400">Right to a workplace free from discrimination.</div>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 26: The Job Fair Activity */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-green-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-lime-500/10 text-green-400 border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">26</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">The Job Fair</h2>
                      <p className="text-green-400 font-medium tracking-wide text-xs uppercase">Sell Yourself</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Create a nametag with your US Job. Walk around the room convincing &quot;Officers&quot; that you have the exact skills for your role &mdash; without reading anything.
                  </p>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Star />}
                    title="Phase 2: The Job Fair Simulation"
                    subtitle="35 Minutes &bull; Stress Test"
                    methodology="Kinesthetic High-Pressure Interaction"
                    accentColor="emerald"
                  >
                    <div className="bg-slate-950/50 p-6 rounded-2xl border border-emerald-500/30 mt-4 overflow-hidden relative">
                       <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full" />
                       <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                          Students move in three layers: <span className="text-white font-bold">Applicants</span>, <span className="text-white font-bold">Officers</span>, and <span className="text-white font-bold">Distractors</span>. 
                       </p>
                       <div className="space-y-4">
                          <div className="p-4 bg-slate-900 rounded-xl border-l-4 border-emerald-500">
                             <p className="text-[10px] text-emerald-400 font-bold uppercase mb-2">The Mission:</p>
                             <p className="text-xs text-slate-400 italic">"Sell your candidate profile while a 'distractor' makes noise or asks irrelevant questions (e.g., 'What time is it?'). Stay focused on the Officer."</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                             <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-center">
                                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Pass Criteria</p>
                                <p className="text-[11px] text-slate-300">Eye contact maintained for 60 seconds.</p>
                             </div>
                             <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-center">
                                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Fail Criteria</p>
                                <p className="text-[11px] text-slate-300">Saying "I don't know" or "Ummm..."</p>
                             </div>
                          </div>
                       </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Mic2 />}
                    title="Phase 3: Skills Pitch Recording"
                    subtitle="15 Minutes &bull; Homework Prep"
                    methodology="Audio Self-Assessment"
                    accentColor="emerald"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Record a 60-second audio describing your job position, your responsibilities, and three personal skills that make you the perfect candidate. Submit via WhatsApp or LMS.
                    </p>
                    <div className="bg-emerald-900/10 rounded-xl p-5 border border-emerald-500/20">
                      <h4 className="text-emerald-400 font-bold text-sm mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Model Script:</h4>
                      <p className="text-sm text-slate-300 font-serif italic leading-relaxed">
                        &quot;My name is Valentina and I am going to work as a Housekeeper at the Kalahari Resort in Wisconsin Dells. My responsibilities include cleaning guest rooms, changing linens, and restocking bathroom amenities. I am organized, detail-oriented, and hardworking. For example, at home I always keep my space perfectly clean. I am ready for this challenge.&quot;
                      </p>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <CurriculumNavigation
        prevHref="/english-class/hours-23-24"
        prevLabel="Hours 23 &amp; 24"
        nextHref="/english-class/hours-27-28"
        nextLabel="Hours 27 &amp; 28"
        accentColor="emerald"
        moduleTitle="Job Profiles &amp; Skills"
      />
    </div>
  );
}
