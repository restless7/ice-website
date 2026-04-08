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

                  <CurriculumContext title="Descriptive Layering" accentColor="emerald">
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-emerald-500/20">
                        <p className="text-xs text-emerald-400 font-bold uppercase mb-1">Strategy: Stacking Adjectives</p>
                        <p className="text-sm text-white font-mono">&quot;I am responsible, punctual, and reliable.&quot;</p>
                        <p className="text-[10px] text-slate-500 mt-2">Never give a single adjective. Stack 3 minimum.</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-green-500/20">
                        <p className="text-xs text-green-400 font-bold uppercase mb-1">Strategy: Prove It</p>
                        <p className="text-sm text-white font-mono">&quot;I am a team player. For example, at my university, I always work in groups for projects.&quot;</p>
                        <p className="text-[10px] text-slate-500 mt-2">Add real evidence after every claim.</p>
                      </div>
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
                    title="Job Responsibilities by Role"
                    subtitle="Reference Guide"
                    methodology="Vocabulary Bank"
                    accentColor="emerald"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-emerald-400 font-bold text-xs uppercase mb-3 tracking-widest border-l-2 border-emerald-500 pl-2">Lifeguard</h4>
                        <ul className="space-y-1 text-sm text-slate-300">
                          <li>&bull; Monitor swimming areas</li>
                          <li>&bull; Enforce safety rules</li>
                          <li>&bull; Provide first aid &amp; CPR</li>
                          <li>&bull; Maintain clean pool area</li>
                        </ul>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-green-400 font-bold text-xs uppercase mb-3 tracking-widest border-l-2 border-green-500 pl-2">Housekeeper</h4>
                        <ul className="space-y-1 text-sm text-slate-300">
                          <li>&bull; Clean and sanitize rooms</li>
                          <li>&bull; Change bed linens and towels</li>
                          <li>&bull; Restock amenities (soap, shampoo)</li>
                          <li>&bull; Report maintenance issues</li>
                        </ul>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-teal-400 font-bold text-xs uppercase mb-3 tracking-widest border-l-2 border-teal-500 pl-2">Server / Food Runner</h4>
                        <ul className="space-y-1 text-sm text-slate-300">
                          <li>&bull; Take orders from guests</li>
                          <li>&bull; Serve food and beverages</li>
                          <li>&bull; Set and clear tables</li>
                          <li>&bull; Handle guest complaints politely</li>
                        </ul>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-sky-400 font-bold text-xs uppercase mb-3 tracking-widest border-l-2 border-sky-500 pl-2">Front Desk / Receptionist</h4>
                        <ul className="space-y-1 text-sm text-slate-300">
                          <li>&bull; Check guests in and out</li>
                          <li>&bull; Answer phone calls and emails</li>
                          <li>&bull; Provide information about the resort</li>
                          <li>&bull; Handle reservations and billing</li>
                        </ul>
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
                    title="Phase 2: The Job Fair"
                    subtitle="35 Minutes &bull; Kinesthetic Activity"
                    methodology="High STT / Walk and Talk"
                    accentColor="emerald"
                  >
                    <div className="bg-slate-950/50 p-6 rounded-xl border border-emerald-500/30 mt-4">
                      <h4 className="text-emerald-400 font-bold mb-3 uppercase text-xs tracking-widest">Activity Rules:</h4>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">1.</span> Write your job title on a nametag and stick it to your chest.</li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">2.</span> Walk around the room. When you meet a partner, they play the &quot;Officer.&quot;</li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">3.</span> The Officer asks: &quot;What is your position?&quot;, &quot;What will you do?&quot;, &quot;Why should we hire you?&quot;</li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">4.</span> You must answer with 3+ full sentences including adjectives and examples.</li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">5.</span> Swap roles after 3 minutes. Meet at least 4 different partners.</li>
                      </ul>
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
