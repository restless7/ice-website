"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  CalendarDays,
  ShieldCheck,
  Users,
  AlertTriangle,
  Mic2,
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassHours27and28() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30">
      <CurriculumHeader
        hourNumber="27 &amp; 28"
        title="The Money Talk"
        subtitle="Sponsors, Costs &amp; Logistics"
        description="Confidently discuss salaries, program costs, sponsors, and financial support. The officer is looking for inconsistencies — you must sound absolute about every number."
        accentColor="amber"
        moduleInfo="Unit 3: Conversation Strategies &bull; Part 4"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 27: The Financial Questions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_40px_rgba(245,158,11,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">27</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Follow the Money</h2>
                      <p className="text-amber-400 font-medium tracking-wide text-xs uppercase">Financial Questions Arsenal</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Money questions are the most sensitive part of the interview. The officer wants to ensure you can support yourself and that your story is consistent.
                  </p>

                  <CurriculumContext title="Financial Logic: The Why" accentColor="amber">
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      The officer isn't just counting dollars; they are looking for <span className="text-white font-bold italic">legitimacy</span>. Use the <span className="text-white font-bold">Stable Origin Protocol</span>:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-amber-500/20">
                        <p className="text-[10px] text-amber-400 font-bold uppercase mb-1 flex items-center gap-2"><TrendingUp className="w-3 h-3" /> Source Consistency</p>
                        <ul className="text-xs text-slate-300 space-y-1 font-mono">
                          <li>• "My parents work in [Sector]."</li>
                          <li>• "They have saved for 2 years."</li>
                          <li>• "This is an investment in my English."</li>
                        </ul>
                      </div>
                      <div className="bg-amber-900/10 p-3 rounded-lg border border-amber-500/30">
                        <p className="text-[10px] text-amber-400 font-bold uppercase mb-1 flex items-center gap-2"><ShieldCheck className="w-3 h-3" /> The NO-LOAN Rule</p>
                        <p className="text-[11px] text-slate-400 leading-relaxed italic">
                           "I did not take a loan. My family's income is sufficient to cover these costs comfortably."
                        </p>
                      </div>
                    </div>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<DollarSign />}
                    title="Phase 1: Financial Logic Arsenal"
                    subtitle="25 Minutes &bull; Core Interview Prep"
                    methodology="Script Mastery + Economic Transparency"
                    accentColor="amber"
                  >
                    <div className="grid grid-cols-1 gap-6 mt-4">
                      {/* Sponsor vs Support - Expanded */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all">
                        <h4 className="text-white font-bold text-lg mb-3">Distinguish: Sponsor vs. Support</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                           <div className="bg-slate-950 p-4 rounded-xl border-l-4 border-amber-500">
                              <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Legal Sponsor</p>
                              <p className="text-xs text-slate-300">"CIEE / InterExchange / Intrax. They provide the DS-2019."</p>
                           </div>
                           <div className="bg-slate-950 p-4 rounded-xl border-l-4 border-emerald-500">
                              <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Financial Supporter</p>
                              <p className="text-xs text-slate-300">"My parents. They provide the money."</p>
                           </div>
                        </div>
                      </div>

                      {/* Q19: Family Income - The Breakdown */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full" />
                        <h4 className="text-white font-bold text-lg mb-4">How do your parents afford this?</h4>
                        <div className="space-y-3">
                           <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                              <p className="text-slate-300 font-serif italic text-sm">"Actually, they have a combined income of [X] Million COP. This program is worth the investment for my professional future."</p>
                           </div>
                           <div className="bg-amber-900/20 p-3 rounded-lg text-[11px] text-amber-300 border border-amber-500/30">
                              <strong>Strategy: Reframing as Investment.</strong> Don't just talk about "cost." Talk about "value."
                           </div>
                        </div>
                      </div>

                      {/* Salaries Table */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                         <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Market Rate Awareness</h4>
                         <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
                            <table className="w-full text-xs text-left">
                               <thead className="bg-slate-900 text-slate-500">
                                  <tr>
                                     <th className="px-4 py-2">Role</th>
                                     <th className="px-4 py-2">Avg. Rate</th>
                                     <th className="px-4 py-2">Shift Logic</th>
                                  </tr>
                               </thead>
                               <tbody className="divide-y divide-slate-800">
                                  <tr>
                                     <td className="px-4 py-3 text-white">Lifeguard</td>
                                     <td className="px-4 py-3 text-amber-400">$12 - $15</td>
                                     <td className="px-4 py-3 text-slate-400">Regular hours + Potential OT</td>
                                  </tr>
                                  <tr>
                                     <td className="px-4 py-3 text-white">Server</td>
                                     <td className="px-4 py-3 text-amber-400">$2.13 + Tips</td>
                                     <td className="px-4 py-3 text-slate-400">Variable based on performance</td>
                                  </tr>
                               </tbody>
                            </table>
                         </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 28: The Interrogation Room */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500/50 via-yellow-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/10 text-yellow-400 border border-yellow-500/20 shadow-[0_0_40px_rgba(234,179,8,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">28</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">The Interrogation</h2>
                      <p className="text-yellow-400 font-medium tracking-wide text-xs uppercase">High-Pressure Number Drills</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    If you hesitate on a number, you start over. Dim the lights. The pressure is real. Your financial story must come out smooth and absolute.
                  </p>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">                  <CurriculumBlock
                    icon={<Mic2 />}
                    title="Phase 2: The Interrogation Room"
                    subtitle="35 Minutes &bull; Stress Test"
                    methodology="Rapid-Fire Financial Interrogation"
                    accentColor="amber"
                  >
                    <div className="bg-slate-950/50 p-6 rounded-2xl border border-amber-500/30 mt-4 overflow-hidden relative">
                       <div className="absolute top-0 right-0 p-4">
                          <AlertTriangle className="w-8 h-8 text-amber-500/20" />
                       </div>
                       <p className="text-sm text-slate-300 mb-6 leading-relaxed italic">
                          "I see your parents earn 5 million pesos. How can they afford an 8-million-peso program plus flights?"
                       </p>
                       <div className="space-y-4">
                          <div className="p-4 bg-slate-900 rounded-xl border-l-4 border-amber-500">
                             <p className="text-[10px] text-amber-400 font-bold uppercase mb-2">The Winning Logic:</p>
                             <p className="text-slate-300 font-serif italic mb-2">"Actually, they have been saving specifically for this exchange program for the last two years. It's a strategic investment in my future."</p>
                             <p className="text-[10px] text-slate-500 uppercase">Status: PASSED (Solid Proof)</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                             <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                                <p className="text-[10px] text-amber-400 font-bold uppercase mb-1">Key Vocabulary</p>
                                <ul className="text-[10px] text-slate-400 space-y-1">
                                   <li>• Savings / Assets</li>
                                   <li>• Monthly Income</li>
                                   <li>• Investment</li>
                                   <li>• Financial Stability</li>
                                </ul>
                             </div>
                             <div className="p-3 bg-red-950/20 rounded-lg border border-red-500/20">
                                <p className="text-[10px] text-red-400 font-bold uppercase mb-1">Warning Signs</p>
                                <ul className="text-[10px] text-slate-400 space-y-1 font-mono">
                                   <li>- "I think..."</li>
                                   <li>- "Maybe..."</li>
                                   <li>- "Around..." (too vague)</li>
                                   <li>- "Loan"</li>
                                </ul>
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
        prevHref="/english-class/hours-25-26"
        prevLabel="Hours 25 &amp; 26"
        nextHref="/english-class/hours-29-30"
        nextLabel="Hours 29 &amp; 30"
        accentColor="amber"
        moduleTitle="The Money Talk"
      />
    </div>
  );
}
