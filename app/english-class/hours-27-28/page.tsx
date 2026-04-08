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

                  <CurriculumContext title="Directness Strategy" accentColor="amber">
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-amber-500/20">
                        <p className="text-xs text-amber-400 font-bold uppercase mb-1 flex items-center gap-2"><ShieldCheck className="w-3 h-3" /> Be Absolute</p>
                        <p className="text-sm text-white font-mono">&quot;My parents are paying for the program.&quot;</p>
                        <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-wide">Never sound hesitant about money sources.</p>
                      </div>
                      <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                        <p className="text-xs text-red-400 font-bold uppercase mb-1 flex items-center gap-2"><AlertTriangle className="w-3 h-3" /> Never Say</p>
                        <p className="text-sm text-red-300 font-mono">&quot;I took out a loan.&quot;</p>
                        <p className="text-sm text-red-300 font-mono mt-1">&quot;I borrowed money.&quot;</p>
                        <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-wide">Loans imply financial instability. Always: &quot;Parents&quot; or &quot;Savings.&quot;</p>
                      </div>
                    </div>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<DollarSign />}
                    title="Phase 1: Financial Questions Arsenal"
                    subtitle="25 Minutes &bull; Core Interview Prep"
                    methodology="Script Mastery + Directness"
                    accentColor="amber"
                  >
                    <div className="space-y-4 mt-4">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-amber-500/50 transition-colors">
                        <p className="text-slate-500 text-xs mb-1">Q17: Sponsor</p>
                        <h4 className="text-white font-bold text-sm mb-2">&quot;Who is sponsoring your trip?&quot;</h4>
                        <p className="text-amber-300 text-sm font-serif italic">&quot;My sponsor is [Company Name], an organization approved by the US Department of State for cultural exchange.&quot;</p>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-amber-500/50 transition-colors">
                        <p className="text-slate-500 text-xs mb-1">Q18: Financial Support</p>
                        <h4 className="text-white font-bold text-sm mb-2">&quot;Who is paying for your trip?&quot; / &quot;Who is supporting you financially?&quot;</h4>
                        <p className="text-amber-300 text-sm font-serif italic">&quot;My parents are paying for the program. They have been saving for this opportunity.&quot;</p>
                        <div className="bg-red-500/10 px-3 py-2 rounded-lg mt-3 border-l-2 border-red-500">
                          <p className="text-xs text-red-300"><strong>CRITICAL:</strong> Always say &quot;my parents&quot; or &quot;my savings.&quot; NEVER mention loans or borrowed money.</p>
                        </div>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-amber-500/50 transition-colors">
                        <p className="text-slate-500 text-xs mb-1">Q19: Family Income</p>
                        <h4 className="text-white font-bold text-sm mb-2">&quot;How much do your parents earn?&quot;</h4>
                        <p className="text-amber-300 text-sm font-serif italic">&quot;My parents earn around [X] million pesos per month combined. My dad works as a [Job] and my mom works as a [Job].&quot;</p>
                        <p className="text-xs text-slate-500 mt-2">Be confident with approximate but realistic figures. Do not hesitate.</p>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-amber-500/50 transition-colors">
                        <p className="text-slate-500 text-xs mb-1">Q20: Program Cost</p>
                        <h4 className="text-white font-bold text-sm mb-2">&quot;How much did you pay for the program?&quot;</h4>
                        <p className="text-amber-300 text-sm font-serif italic">&quot;The program costs approximately [Amount] including the visa fee, the SEVIS fee, flights, and insurance.&quot;</p>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-amber-500/50 transition-colors">
                        <p className="text-slate-500 text-xs mb-1">Q21: Salary</p>
                        <h4 className="text-white font-bold text-sm mb-2">&quot;How much are you going to earn?&quot;</h4>
                        <p className="text-amber-300 text-sm font-serif italic">&quot;I am going to earn approximately [Amount] dollars per hour. The exact amount depends on the hours I work each week.&quot;</p>
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
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Mic2 />}
                    title="Phase 2: The Interrogation Room"
                    subtitle="35 Minutes &bull; High Pressure Drill"
                    methodology="Rapid-Fire Financial Q&amp;A"
                    accentColor="amber"
                  >
                    <div className="bg-slate-950/50 p-6 rounded-xl border border-amber-500/30 mt-4">
                      <h4 className="text-amber-400 font-bold mb-3 uppercase text-xs tracking-widest">Directive:</h4>
                      <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                        Teacher sits at a desk with dim lighting. Students line up and sit across, one at a time. Each gets 5 rapid-fire money questions. If they hesitate for more than 3 seconds, they go to the back of the line and try again.
                      </p>

                      <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                        <div className="p-5 space-y-4 font-serif text-sm">
                          <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;Who is paying for your trip?&quot;</p>
                          <p className="text-amber-400 italic">&quot;My parents.&quot;</p>
                          <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;How much does the program cost?&quot;</p>
                          <p className="text-amber-400 italic">&quot;Around 8 million pesos including everything.&quot;</p>
                          <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;What is your hourly salary?&quot;</p>
                          <p className="text-amber-400 italic">&quot;Twelve dollars per hour.&quot;</p>
                          <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;How much do your parents make?&quot;</p>
                          <p className="text-amber-400 italic">&quot;Combined, about 4 million pesos per month.&quot;</p>
                          <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;Did you take a loan for this?&quot;</p>
                          <p className="text-amber-400 italic font-bold">&quot;No. My parents saved for this.&quot;</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-emerald-900/10 border border-emerald-500/20 p-4 rounded-lg">
                          <h5 className="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Pass</h5>
                          <ul className="text-xs text-slate-400 space-y-1">
                            <li>&bull; All numbers stated without hesitation</li>
                            <li>&bull; Consistent story across all answers</li>
                            <li>&bull; Never mentioned loans or debt</li>
                          </ul>
                        </div>
                        <div className="bg-rose-900/10 border border-rose-500/20 p-4 rounded-lg">
                          <h5 className="text-rose-400 font-bold text-sm mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Fail — Start Over</h5>
                          <ul className="text-xs text-slate-400 space-y-1">
                            <li>&bull; Hesitated on a number (&gt;3 seconds)</li>
                            <li>&bull; Said &quot;Uhh&quot; or &quot;I think&quot; with uncertainty</li>
                            <li>&bull; Contradicted a previous answer</li>
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
