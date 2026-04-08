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

      {/* APPLIED CONVERSATIONS */}
      <section className="py-16 relative z-10 border-t border-slate-800/60">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-12">
            <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-2">Applied Conversations</p>
            <h2 className="text-3xl font-bold text-white">Job Profile Simulations</h2>
            <p className="text-slate-400 mt-2 max-w-2xl">Master the vocabulary of your specific role. Know your duties, your location, your schedule, and your employer cold.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Conversation 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="bg-emerald-900/30 border-b border-emerald-500/20 px-5 py-3">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Dialogue 01 · Lifeguard · Myrtle Beach · Full Duty Breakdown</span>
              </div>
              <div className="p-5 space-y-4 font-serif text-sm">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"What exactly is your position and what will you do there?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"I will work as a Lifeguard at Myrtle Waves Water Park in Myrtle Beach, South Carolina. My primary duties include surveilling assigned pool zones, enforcing safety protocols, responding to aquatic emergencies, and performing routine water chemistry checks to maintain health standards."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Are you certified to do that?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"Yes, Officer. I completed my Red Cross Lifeguard Certification in February of this year. The training included CPR, AED operation, and water rescue techniques. The park will also provide a site-specific orientation during my first week."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"What are your working hours?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"The park operates from 10 AM to 7 PM. I expect to work approximately 32 to 40 hours per week, primarily on weekends and holidays when visitor volume is highest."</p></div>
              </div>
              <div className="bg-slate-950 border-t border-slate-800 px-5 py-3">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">✓ Teacher Note</p>
                <p className="text-[10px] text-slate-500 mt-1">Certification details project credibility. The officer now sees a trained professional, not a tourist using the program as a loophole.</p>
              </div>
            </div>

            {/* Conversation 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="bg-emerald-900/30 border-b border-emerald-500/20 px-5 py-3">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Dialogue 02 · Server · Orlando · The Premium Adjective Protocol</span>
              </div>
              <div className="p-5 space-y-4 font-serif text-sm">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"What will you be doing as a server?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"I will facilitate premium dining experiences at the Grand Floridian Resort in Orlando, Florida. Specifically, I will greet and seat guests, present menus, take detailed food and beverage orders, coordinate with the culinary team, handle payment transactions, and ensure guest satisfaction at every stage of service."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"That is a Disney resort. Those are very high standards. Can you handle that?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"Absolutely. I have two years of experience as a waiter at a five-star hotel restaurant in Cartagena, where I regularly served international guests and managed multi-course dining sequences. I am very comfortable with high-expectation environments."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Will you live near the resort?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"Yes. My program has arranged housing at a residency approximately 15 minutes from the resort. The accommodation cost is deducted directly from my paycheck, which simplifies my financial management considerably."</p></div>
              </div>
              <div className="bg-slate-950 border-t border-slate-800 px-5 py-3">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">✓ Teacher Note</p>
                <p className="text-[10px] text-slate-500 mt-1">Previous work experience in Colombia is a powerful credibility booster. The housing detail shows the student is organized and has thought through logistics.</p>
              </div>
            </div>

            {/* Conversation 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="bg-emerald-900/30 border-b border-emerald-500/20 px-5 py-3">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Dialogue 03 · Housekeeper · Las Vegas · The Skill Stacking Moment</span>
              </div>
              <div className="p-5 space-y-4 font-serif text-sm">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"A housekeeper in Las Vegas. That seems like an unusual choice for a university student."</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"I understand the surprise, but Hotel Housekeeping at the MGM Grand is a technically demanding position. I will be responsible for sanitizing and preparing luxury suites according to five-star hospitality standards, managing inventory of cleaning supplies, and conducting detailed room inspections. It develops discipline, attention to detail, and professional efficiency — skills that are genuinely transferable to any career."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"What if a guest leaves valuables in the room?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"Hotel protocol is clear: any items found are immediately logged and reported to the front desk lost-and-found department. Professional discretion and on-property ethics are part of my job description and I take that very seriously."</p></div>
              </div>
              <div className="bg-slate-950 border-t border-slate-800 px-5 py-3">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">✓ Teacher Note</p>
                <p className="text-[10px] text-slate-500 mt-1">Knowing the hotel ethics protocol in advance is extremely impressive and shows the student has done serious research on their employer.</p>
              </div>
            </div>

            {/* Conversation 4 - Workplace Problem Trap */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="bg-emerald-900/30 border-b border-emerald-500/20 px-5 py-3">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Dialogue 04 · Any Role · "What If You Have a Problem at Work?"</span>
              </div>
              <div className="p-5 space-y-4 font-serif text-sm">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"What will you do if you have a serious problem with your supervisor or employer?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"If I face a workplace issue, my first step is to communicate professionally and directly with my supervisor to resolve it. If the issue remains unresolved, I will contact my program sponsor — in my case, CIEE — who serves as my official point of contact and advocate in the US. I also understand that as a J-1 exchange visitor, I have specific rights under the Wilberforce Act that protect me from exploitation."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Have you read those rights?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"Yes, Officer. My sponsor provided me with the J-1 Exchange Visitor Rights pamphlet and I reviewed it carefully. I know that my employer cannot confiscate my passport, cannot restrict my movement, and cannot threaten my visa status as a form of coercion."</p></div>
              </div>
              <div className="bg-slate-950 border-t border-slate-800 px-5 py-3">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">✓ Teacher Note</p>
                <p className="text-[10px] text-slate-500 mt-1">Knowing your rights fluently shows maturity and sends a signal that this student will not be exploited — which is what the consulate wants to see before approving a visa.</p>
              </div>
            </div>

            {/* Conversation 5 - Full Job Interview */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden lg:col-span-2">
              <div className="bg-emerald-900/20 border-b border-emerald-500/20 px-5 py-3">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Dialogue 05 · ✓ Full Passing Job Profile — Camp Counselor · Colorado</span>
              </div>
              <div className="p-5 grid md:grid-cols-2 gap-x-8 gap-y-4 font-serif text-sm">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Tell me about your job offer."</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"I have an offer as a Camp Counselor at Sky High Ranch, a summer camp located in Woodland Park, Colorado. The camp operates from June 15th to August 20th. My contract is with CIEE as my sponsoring organization."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"What will you actually do there day-to-day?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"On a typical day, I will supervise a group of eight campers aged 12 to 15, organize morning activities like hiking and archery, lead evening educational sessions, monitor health and wellbeing, and write daily progress notes for each camper to share with their parents."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"This is quite a responsibility. Do you have experience working with children?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"Yes. For the past year I have volunteered as a youth monitor at my local community center in Cali, supervising children's weekend sports programs. I am comfortable with child supervision, conflict resolution, and emergency first response."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Where will you be living?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"I will live on-site at the camp. Housing and three meals per day are included as part of my compensation package. My sponsor confirmed all housing arrangements in writing before I applied."</p></div>
              </div>
              <div className="bg-slate-950 border-t border-slate-800 px-5 py-3 flex items-center justify-between">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">Result: VISA APPROVED ✓</p>
                <p className="text-[10px] text-slate-500">Specific daily schedule. Volunteer experience. On-site housing confirmed. No gaps for the officer to probe.</p>
              </div>
            </div>

          </div>
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
