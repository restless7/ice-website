"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Swords,
  Mic2,
  Star,
  Users,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  BookOpen,
  Target,
  RefreshCw
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";
import Link from "next/link";

export default function EnglishClassHours29and30() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-500/30">
      <CurriculumHeader
        hourNumber="29 &amp; 30"
        title="The Gauntlet"
        subtitle="Ultimate Dress Rehearsal"
        description="All 35+ questions. Randomized. No mercy. This is the final exam — a full-length simulated embassy interview under real diplomatic pressure. Pass or repeat."
        accentColor="rose"
        moduleInfo="Unit 3: Conversation Strategies &bull; Part 5 (FINAL)"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 29: The Recovery Strategy + Full Question Bank */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500/50 via-rose-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500/20 to-red-500/10 text-rose-400 border border-rose-500/20 shadow-[0_0_40px_rgba(244,63,94,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">29</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Final Prep</h2>
                      <p className="text-rose-400 font-medium tracking-wide text-xs uppercase">The Recovery Strategy</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Everyone makes mistakes. What separates a Pass from a Fail is how you <strong className="text-white">recover</strong>. Learn the art of the smooth correction.
                  </p>

                  <CurriculumContext title="The Recovery" accentColor="rose">
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-rose-500/20">
                        <p className="text-xs text-rose-400 font-bold uppercase mb-1 flex items-center gap-2"><RefreshCw className="w-3 h-3" /> Self-Correction</p>
                        <p className="text-sm text-white font-mono">&quot;Sorry, what I meant was...&quot;</p>
                        <p className="text-sm text-white font-mono mt-1">&quot;Let me rephrase that...&quot;</p>
                        <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-wide">Correct yourself smoothly. Never break character.</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-orange-500/20">
                        <p className="text-xs text-orange-400 font-bold uppercase mb-1">Keep Moving</p>
                        <p className="text-sm text-white font-mono">&quot;As I was saying...&quot;</p>
                        <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-wide">Don&apos;t freeze after an error. Bridge back to your answer.</p>
                      </div>
                    </div>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<BookOpen />}
                    title="Phase 1: The Complete Question Bank"
                    subtitle="20 Minutes &bull; Final Review"
                    methodology="Full Arsenal Walkthrough"
                    accentColor="rose"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Every question from Units 1-3 combined. Grouped by category. The officer can pick from ANY of these.
                    </p>
                    <div className="space-y-4 mt-4">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-indigo-400 font-bold text-xs uppercase mb-3 tracking-widest border-l-2 border-indigo-500 pl-2">Personal Identity (8 Questions)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                          <p>1. What are you going to do in the USA?</p>
                          <p>2. Where are you going?</p>
                          <p>3. Why do you want to participate?</p>
                          <p>4. What do you study?</p>
                          <p>5. What semester are you in?</p>
                          <p>6. How old are you?</p>
                          <p>7. Who do you live with?</p>
                          <p>8. What do your parents do?</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-violet-400 font-bold text-xs uppercase mb-3 tracking-widest border-l-2 border-violet-500 pl-2">Academic Profile (4 Questions)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                          <p>9. What is your major?</p>
                          <p>10. What university do you go to?</p>
                          <p>11. Why did you choose that major?</p>
                          <p>12. What are your plans when you return?</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-emerald-400 font-bold text-xs uppercase mb-3 tracking-widest border-l-2 border-emerald-500 pl-2">Job Profile (4 Questions)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                          <p>13. What is your job offer / position?</p>
                          <p>14. What city and state are you going to?</p>
                          <p>15. Where are you going to live?</p>
                          <p>16. What are your responsibilities?</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-amber-400 font-bold text-xs uppercase mb-3 tracking-widest border-l-2 border-amber-500 pl-2">Financial (5 Questions)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                          <p>17. Who is sponsoring your trip?</p>
                          <p>18. Who is paying for your trip?</p>
                          <p>19. How much do your parents earn?</p>
                          <p>20. How much did you pay for the program?</p>
                          <p>21. How much are you going to earn?</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-rose-400 font-bold text-xs uppercase mb-3 tracking-widest border-l-2 border-rose-500 pl-2">Trap &amp; Curveball Questions</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                          <p>22. Do you have family in the US?</p>
                          <p>23. Have you visited the US before?</p>
                          <p>24. What will you do if you don&apos;t like the job?</p>
                          <p>25. Do you plan to stay in the US?</p>
                          <p>26. How did you hear about this program?</p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 30: The Gauntlet */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/50 via-red-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/10 text-red-400 border border-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">30</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">The Gauntlet</h2>
                      <p className="text-red-400 font-medium tracking-wide text-xs uppercase">Pass or Repeat</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Three chairs. Three &quot;Embassy windows.&quot; The teacher and invited observers act as strict officers. Randomized questions. Pass/Fail grading.
                  </p>

                  <div className="bg-rose-500/10 rounded-xl p-5 border border-rose-500/20">
                    <h4 className="text-rose-400 font-bold text-xs uppercase mb-3 flex items-center gap-2"><Trophy className="w-4 h-4" /> Grading System</h4>
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="flex justify-between"><span>Fluency &amp; Hesitation</span><span className="text-rose-400 font-mono">/4</span></div>
                      <div className="flex justify-between"><span>Tense Accuracy</span><span className="text-rose-400 font-mono">/4</span></div>
                      <div className="flex justify-between"><span>Vocabulary &amp; Details</span><span className="text-rose-400 font-mono">/4</span></div>
                      <div className="flex justify-between"><span>Poise &amp; Confidence</span><span className="text-rose-400 font-mono">/4</span></div>
                      <hr className="border-slate-800 my-2" />
                      <div className="flex justify-between font-bold text-white"><span>Minimum to Pass</span><span className="text-emerald-400 font-mono">12/16</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Swords />}
                    title="Phase 2: The Gauntlet Exam"
                    subtitle="45 Minutes &bull; Live One-on-One Assessment"
                    methodology="Full Embassy Simulation"
                    accentColor="rose"
                  >
                    <div className="bg-slate-950/50 p-6 rounded-xl border border-rose-500/30 mt-4">
                      <h4 className="text-rose-400 font-bold mb-3 uppercase text-xs tracking-widest">Exam Protocol:</h4>
                      <ul className="space-y-2 text-sm text-slate-300 mb-6">
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">1.</span> Three chairs are set up facing the teacher&apos;s desk (the &quot;Embassy Windows&quot;).</li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">2.</span> Each student sits alone and faces 10 randomly selected questions from all categories.</li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">3.</span> The &quot;Officer&quot; asks in strict, diplomatic tone. No hints, no smiling.</li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">4.</span> Observers (other students or invited guests) grade alongside the teacher.</li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">5.</span> Score is given immediately after. Below 12/16 = repeat next session.</li>
                      </ul>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-emerald-900/10 border border-emerald-500/20 p-4 rounded-lg">
                          <h5 className="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Automatic Pass Signals</h5>
                          <ul className="text-xs text-slate-400 space-y-1">
                            <li>✓ Immediate, confident answers</li>
                            <li>✓ Uses &quot;Let me think&quot; instead of silence</li>
                            <li>✓ Self-corrects smoothly (&quot;What I meant was...&quot;)</li>
                            <li>✓ Tenses match the officer&apos;s questions</li>
                            <li>✓ Eye contact maintained throughout</li>
                          </ul>
                        </div>
                        <div className="bg-rose-900/10 border border-rose-500/20 p-4 rounded-lg">
                          <h5 className="text-rose-400 font-bold text-sm mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Automatic Fail Signals</h5>
                          <ul className="text-xs text-slate-400 space-y-1">
                            <li>✗ Silence longer than 5 seconds</li>
                            <li>✗ &quot;I have 22 years old&quot;</li>
                            <li>✗ Saying &quot;last semester&quot;</li>
                            <li>✗ Mentioning &quot;loan&quot; or &quot;borrowed money&quot;</li>
                            <li>✗ &quot;I might stay in the US&quot;</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Trophy />}
                    title="Unit 3 Complete"
                    subtitle="Graduation &amp; Next Steps"
                    methodology="Celebration &amp; Assessment"
                    accentColor="rose"
                  >
                    <div className="bg-gradient-to-br from-rose-500/10 to-orange-500/10 rounded-xl p-6 border border-rose-500/20 mt-4 text-center">
                      <h4 className="text-white font-bold text-lg mb-3">🎉 Unit 3: Conversation Strategies — Complete 🎉</h4>
                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        You have mastered your personal profile, academic story, job description, financial details, and conversation strategies. You are now ready for the real embassy interview.
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        <span className="px-3 py-1 bg-indigo-500/20 rounded-full text-indigo-400 text-xs font-bold">Core 8 Questions</span>
                        <span className="px-3 py-1 bg-violet-500/20 rounded-full text-violet-400 text-xs font-bold">Academic Profile</span>
                        <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold">Job Profile</span>
                        <span className="px-3 py-1 bg-amber-500/20 rounded-full text-amber-400 text-xs font-bold">Financial</span>
                        <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-400 text-xs font-bold">Recovery Strategies</span>
                      </div>
                      <Link href="/english-class" className="inline-block bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:shadow-[0_0_30px_rgba(244,63,94,0.5)]">
                        Back to Curriculum
                      </Link>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <CurriculumNavigation
        prevHref="/english-class/hours-27-28"
        prevLabel="Hours 27 &amp; 28"
        nextHref="/english-class"
        nextLabel="Back to Curriculum"
        accentColor="rose"
        moduleTitle="The Ultimate Dress Rehearsal"
      />
    </div>
  );
}
