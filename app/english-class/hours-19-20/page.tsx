"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  MessageSquareQuote,
  AlertTriangle,
  CheckCircle,
  CloudRain,
  HelpCircle,
  Compass,
  Star,
  Lightbulb,
  Users,
  Trophy,
  ArrowLeftRight,
  Target,
  Mic2,
  PenTool
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";
import Link from "next/link";

export default function EnglishClassHours19and20() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/30">
      <CurriculumHeader
        hourNumber="19 &amp; 20"
        title="Possibilities &amp;"
        subtitle="Milestone Review"
        description="Explore the modal verbs of possibility (may, might, could). Then put everything from Unit 2 together in a comprehensive milestone review integrating Simple Present, Present Continuous, and all modals."
        accentColor="teal"
        moduleInfo="Unit 2: Exploring the World &bull; Part 5"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 19: Possibility */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 text-teal-400 border border-teal-500/20 shadow-[0_0_40px_rgba(20,184,166,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">19</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Possibility</h2>
                      <p className="text-teal-400 font-medium tracking-wide text-xs uppercase">May, Might &amp; Could</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Not everything is certain. &quot;It <strong className="text-white">might</strong> rain.&quot; &quot;We <strong className="text-white">could</strong> go to the beach.&quot; Possibility modals let you talk about the future without committing to it.
                  </p>

                  <CurriculumContext title="Possibility Hierarchy" accentColor="teal">
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-teal-500/20">
                        <p className="text-xs text-teal-400 font-bold uppercase mb-1">MAY &mdash; 50% Chance (Formal)</p>
                        <p className="text-sm text-white font-mono">&quot;It <strong className="text-teal-300">may</strong> rain later.&quot;</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-cyan-500/20">
                        <p className="text-xs text-cyan-400 font-bold uppercase mb-1">MIGHT &mdash; 30% Chance (Informal)</p>
                        <p className="text-sm text-white font-mono">&quot;I <strong className="text-cyan-300">might</strong> go to the gym.&quot;</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-sky-500/20">
                        <p className="text-xs text-sky-400 font-bold uppercase mb-1">COULD &mdash; Possible Option / Suggestion</p>
                        <p className="text-sm text-white font-mono">&quot;We <strong className="text-sky-300">could</strong> watch a movie.&quot;</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-3 italic border-l-2 border-teal-500 pl-2">
                      All three use the base verb, never change form, and are interchangeable in casual speech. MAY is slightly more formal.
                    </p>
                  </CurriculumContext>

                  <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20">
                    <h4 className="text-red-400 font-bold text-xs uppercase mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> COULD: Two Meanings!</h4>
                    <div className="text-xs text-slate-300 space-y-2">
                      <p><strong className="text-teal-300">COULD = possibility:</strong> &quot;It <strong>could</strong> rain.&quot;</p>
                      <p><strong className="text-purple-300">COULD = past ability:</strong> &quot;I <strong>could</strong> swim when I was 5.&quot;</p>
                      <p className="text-slate-500 italic mt-2">Context determines the meaning. In this module we focus on possibility.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Compass />}
                    title="Phase 1: Possibility in Your Life"
                    subtitle="20 Minutes &bull; Contextual Examples"
                    methodology="Situation-Based Learning"
                    accentColor="teal"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-teal-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-teal-500 flex items-center gap-2"><CloudRain className="w-3 h-3" /> Weather</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>It <strong className="text-teal-300">may</strong> rain tonight.</p>
                          <p>It <strong className="text-cyan-300">might</strong> snow tomorrow.</p>
                          <p>It <strong className="text-sky-300">could</strong> get very cold.</p>
                          <p>It <strong className="text-teal-300">may</strong> not clear up.</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-cyan-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-cyan-500">Plans</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>I <strong className="text-teal-300">may</strong> travel next month.</p>
                          <p>We <strong className="text-cyan-300">might</strong> go to the beach.</p>
                          <p>She <strong className="text-sky-300">could</strong> visit this weekend.</p>
                          <p>They <strong className="text-cyan-300">might not</strong> come tonight.</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-sky-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-sky-500">Work</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>I <strong className="text-teal-300">may</strong> get a raise.</p>
                          <p>They <strong className="text-cyan-300">might</strong> hire more staff.</p>
                          <p>The boss <strong className="text-sky-300">could</strong> change the schedule.</p>
                          <p>We <strong className="text-teal-300">may</strong> move to day shifts.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-teal-500/10 rounded-xl p-5 border border-teal-500/20 mt-4">
                      <h4 className="text-teal-400 font-bold text-sm mb-3">Quick Possibility Builder: 16 Examples</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                        <p>1. I <strong className="text-teal-300">may</strong> work overtime today.</p>
                        <p>2. She <strong className="text-cyan-300">might</strong> call in sick.</p>
                        <p>3. We <strong className="text-sky-300">could</strong> go out for dinner.</p>
                        <p>4. He <strong className="text-teal-300">may not</strong> come to class.</p>
                        <p>5. They <strong className="text-cyan-300">might</strong> change the policy.</p>
                        <p>6. I <strong className="text-sky-300">could</strong> take the earlier bus.</p>
                        <p>7. The restaurant <strong className="text-teal-300">may</strong> be closed.</p>
                        <p>8. She <strong className="text-cyan-300">might not</strong> know the answer.</p>
                        <p>9. We <strong className="text-sky-300">could</strong> ask for help.</p>
                        <p>10. It <strong className="text-teal-300">may</strong> take a long time.</p>
                        <p>11. He <strong className="text-cyan-300">might</strong> get promoted.</p>
                        <p>12. They <strong className="text-sky-300">could</strong> cancel the meeting.</p>
                        <p>13. I <strong className="text-teal-300">may</strong> need a new coat for winter.</p>
                        <p>14. She <strong className="text-cyan-300">might</strong> visit her family in July.</p>
                        <p>15. We <strong className="text-sky-300">could</strong> carpool to save money.</p>
                        <p>16. He <strong className="text-teal-300">may not</strong> be able to help today.</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Possibility Dialogues"
                    subtitle="25 Minutes &bull; Conversational Practice"
                    methodology="Future Planning Scenarios"
                    accentColor="teal"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-teal-500 pl-2">Dialogue 1: Making Weekend Plans</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;What are you doing this weekend?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I&apos;m not sure. I <strong className="text-teal-300">may</strong> go to the beach or I <strong className="text-cyan-300">might</strong> just stay home.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;We <strong className="text-sky-300">could</strong> go together. I <strong className="text-teal-300">may</strong> borrow my friend&apos;s car.&quot;</p>
                            <p className="text-slate-400 italic">&quot;That sounds great! But it <strong className="text-cyan-300">might</strong> rain on Saturday. Let&apos;s check the weather.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;If it rains, we <strong className="text-sky-300">could</strong> go to the cinema instead.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-cyan-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-cyan-500 pl-2">Dialogue 2: Work Schedule Uncertainty</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Coworker:</strong> &quot;Do you know the schedule for next week?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Not yet. The manager <strong className="text-teal-300">may</strong> post it tomorrow. She <strong className="text-cyan-300">might</strong> put me on the night shift.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Coworker:</strong> &quot;I <strong className="text-teal-300">may</strong> ask for more hours. They <strong className="text-sky-300">could</strong> give me weekday mornings.&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yeah, they <strong className="text-cyan-300">might</strong> need more people on mornings.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-sky-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-sky-500 pl-2">Dialogue 3: Future Plans After J1</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Classmate:</strong> &quot;What are you going to do after the J1 program?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-teal-300">may</strong> apply to college here. Or I <strong className="text-cyan-300">might</strong> go back home and start a business.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Classmate:</strong> &quot;You <strong className="text-sky-300">could</strong> also try Canada or Australia. There are programs there too.&quot;</p>
                            <p className="text-slate-400 italic">&quot;True! I <strong className="text-teal-300">may</strong> look into that. My English <strong className="text-sky-300">could</strong> open a lot of doors.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-purple-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-purple-500 pl-2">Dialogue 4: Guessing About Someone</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;Where is Carlos? He&apos;s late.&quot;</p>
                            <p className="text-slate-400 italic">&quot;I don&apos;t know. He <strong className="text-teal-300">may</strong> be stuck in traffic. Or he <strong className="text-cyan-300">might</strong> have forgotten.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;He <strong className="text-sky-300">could</strong> be at the wrong address. He always gets confused.&quot;</p>
                            <p className="text-slate-400 italic">&quot;We <strong className="text-sky-300">could</strong> call him. He <strong className="text-cyan-300">might not</strong> have our new number though.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-rose-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-rose-500 pl-2">Dialogue 5: Doctor&apos;s Diagnosis</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Doctor:</strong> &quot;Your test results look okay, but you <strong className="text-teal-300">may</strong> need more rest. The pain <strong className="text-cyan-300">might</strong> be from stress.&quot;</p>
                            <p className="text-slate-400 italic">&quot;Is it serious?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Doctor:</strong> &quot;Probably not. It <strong className="text-sky-300">could</strong> improve with exercise and sleep. But if it doesn&apos;t, it <strong className="text-teal-300">may</strong> require more tests.&quot;</p>
                            <p className="text-slate-400 italic">&quot;Thank you. I <strong className="text-cyan-300">might</strong> take a few days off work.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Star />}
                    title="Phase 3: The Fortune Teller Game"
                    subtitle="15 Minutes &bull; Creative Activity"
                    methodology="Speculative Conversation"
                    accentColor="teal"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      One student is the &quot;Fortune Teller.&quot; Other students ask YES or NO questions about their future. The Fortune Teller must answer using MAY, MIGHT, or COULD &mdash; never YES or NO directly.
                    </p>
                    <div className="bg-teal-900/10 rounded-xl p-5 border border-teal-500/20">
                      <h4 className="text-teal-400 font-bold text-sm mb-3">Example Exchange:</h4>
                      <div className="space-y-2 text-sm">
                        <p className="text-slate-300"><strong className="text-white">Student:</strong> &quot;Will I be rich?&quot;</p>
                        <p className="text-slate-400 italic">&quot;You <strong className="text-teal-300">may</strong> become rich if you work hard and save money.&quot;</p>
                        <p className="text-slate-300"><strong className="text-white">Student:</strong> &quot;Will I find love?&quot;</p>
                        <p className="text-slate-400 italic">&quot;You <strong className="text-cyan-300">might</strong> meet someone special soon, but you <strong className="text-sky-300">could</strong> also enjoy being single!&quot;</p>
                        <p className="text-slate-300"><strong className="text-white">Student:</strong> &quot;Will I pass the English exam?&quot;</p>
                        <p className="text-slate-400 italic">&quot;You <strong className="text-teal-300">may</strong> pass easily if you study tonight. But you <strong className="text-cyan-300">might</strong> struggle if you skip class.&quot;</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 20: Milestone Review */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">20</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Checkpoint</h2>
                      <p className="text-cyan-400 font-medium tracking-wide text-xs uppercase">Milestone Review</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    You&apos;ve learned it all: Simple Present, Present Continuous, CAN, MUST, HAVE TO, SHOULD, HAD BETTER, MAY, MIGHT, and COULD. Now it all comes together.
                  </p>

                  <CurriculumContext title="The Complete Modal Map" accentColor="teal">
                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex items-center justify-between bg-purple-500/10 p-2 rounded"><span className="text-purple-300">CAN / CAN&apos;T</span><span className="text-slate-500">Ability &amp; Permission</span></div>
                      <div className="flex items-center justify-between bg-amber-500/10 p-2 rounded"><span className="text-amber-300">MUST / MUST NOT</span><span className="text-slate-500">Obligation &amp; Prohibition</span></div>
                      <div className="flex items-center justify-between bg-yellow-500/10 p-2 rounded"><span className="text-yellow-300">HAVE TO / DON&apos;T HAVE TO</span><span className="text-slate-500">Ext. Obligation &amp; No Need</span></div>
                      <div className="flex items-center justify-between bg-orange-500/10 p-2 rounded"><span className="text-orange-300">SHOULD / SHOULDN&apos;T</span><span className="text-slate-500">Advice</span></div>
                      <div className="flex items-center justify-between bg-red-500/10 p-2 rounded"><span className="text-red-300">HAD BETTER / HAD BETTER NOT</span><span className="text-slate-500">Strong Warning</span></div>
                      <div className="flex items-center justify-between bg-teal-500/10 p-2 rounded"><span className="text-teal-300">MAY / MIGHT / COULD</span><span className="text-slate-500">Possibility</span></div>
                    </div>
                  </CurriculumContext>

                  <div className="bg-teal-500/10 rounded-xl p-5 border border-teal-500/20">
                    <h4 className="text-teal-400 font-bold text-xs uppercase mb-3 flex items-center gap-2"><Trophy className="w-4 h-4" /> Unit 2 Progress</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs"><CheckCircle className="w-3 h-3 text-emerald-400" /><span className="text-slate-300">Simple Present (habits &amp; routines)</span></div>
                      <div className="flex items-center gap-2 text-xs"><CheckCircle className="w-3 h-3 text-purple-400" /><span className="text-slate-300">CAN (abilities &amp; permissions)</span></div>
                      <div className="flex items-center gap-2 text-xs"><CheckCircle className="w-3 h-3 text-rose-400" /><span className="text-slate-300">Present Continuous (now vs always)</span></div>
                      <div className="flex items-center gap-2 text-xs"><CheckCircle className="w-3 h-3 text-amber-400" /><span className="text-slate-300">MUST / HAVE TO / SHOULD</span></div>
                      <div className="flex items-center gap-2 text-xs"><CheckCircle className="w-3 h-3 text-teal-400" /><span className="text-slate-300">MAY / MIGHT / COULD</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<ArrowLeftRight />}
                    title="Phase 1: Modal Rapid-Fire Quiz"
                    subtitle="15 Minutes &bull; Assessment"
                    methodology="Choose the Correct Modal"
                    accentColor="teal"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Teacher reads a situation. Students must respond with the best modal verb and form a complete sentence.
                    </p>
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">1. You are sick. Advice?</p>
                          <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-xs font-bold">should see a doctor</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">2. The sign says &quot;No Parking.&quot;</p>
                          <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-xs font-bold">must not park here</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">3. You know how to swim.</p>
                          <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-xs font-bold">can swim</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">4. Dark clouds in the sky?</p>
                          <span className="px-3 py-1 bg-teal-500/20 rounded-full text-teal-400 text-xs font-bold">might rain</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">5. Your alarm rings at 6 AM for work.</p>
                          <span className="px-3 py-1 bg-amber-500/20 rounded-full text-amber-400 text-xs font-bold">have to wake up</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">6. The gym has a locker room. You can bring stuff.</p>
                          <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-xs font-bold">don&apos;t have to carry</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">7. Your visa expires in 3 days.</p>
                          <span className="px-3 py-1 bg-orange-500/20 rounded-full text-orange-400 text-xs font-bold">&apos;d better leave NOW</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">8. Weekend plan &mdash; beach or cinema?</p>
                          <span className="px-3 py-1 bg-sky-500/20 rounded-full text-sky-400 text-xs font-bold">could go to either</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">9. You are eating right now.</p>
                          <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-400 text-xs font-bold">am eating (continuous)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-slate-400">10. You eat breakfast every day.</p>
                          <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold">eat (simple present)</span>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Mic2 />}
                    title="Phase 2: The Comprehensive Mock Interview"
                    subtitle="35 Minutes &bull; Integrative Oral Exam"
                    methodology="6-Section Career Interview"
                    accentColor="teal"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      The ultimate assessment. Students pair up and alternate as Interviewer and Candidate. Each section tests a different tense or modal from Unit 2.
                    </p>
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full">
                      <div className="p-5 space-y-6">

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-emerald-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-emerald-500 pl-2">Section 1: About You (Simple Present)</p>
                          <div className="space-y-2 text-sm">
                            <p className="text-slate-300 font-mono">1. What do you do for a living?</p>
                            <p className="text-slate-300 font-mono">2. Where do you live?</p>
                            <p className="text-slate-300 font-mono">3. What time do you usually wake up?</p>
                            <p className="text-slate-300 font-mono">4. What do you do after work?</p>
                            <p className="text-slate-300 font-mono">5. Do you enjoy your job? Why?</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-rose-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-rose-500 pl-2">Section 2: Right Now (Present Continuous)</p>
                          <div className="space-y-2 text-sm">
                            <p className="text-slate-300 font-mono">1. What are you studying right now?</p>
                            <p className="text-slate-300 font-mono">2. Are you working anywhere at the moment?</p>
                            <p className="text-slate-300 font-mono">3. Are you saving money for anything?</p>
                            <p className="text-slate-300 font-mono">4. What are you learning this month?</p>
                            <p className="text-slate-300 font-mono">5. Is anything changing in your life right now?</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-purple-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-purple-500 pl-2">Section 3: Your Skills (CAN)</p>
                          <div className="space-y-2 text-sm">
                            <p className="text-slate-300 font-mono">1. What can you do well at work?</p>
                            <p className="text-slate-300 font-mono">2. Can you work under pressure?</p>
                            <p className="text-slate-300 font-mono">3. What languages can you speak?</p>
                            <p className="text-slate-300 font-mono">4. Can you use any special tools or machines?</p>
                            <p className="text-slate-300 font-mono">5. What is something you can&apos;t do yet?</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-amber-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-amber-500 pl-2">Section 4: Workplace Rules (Must / Have To)</p>
                          <div className="space-y-2 text-sm">
                            <p className="text-slate-300 font-mono">1. What do you have to do at your job?</p>
                            <p className="text-slate-300 font-mono">2. What must you not do at work?</p>
                            <p className="text-slate-300 font-mono">3. Do you have to wear a uniform?</p>
                            <p className="text-slate-300 font-mono">4. What don&apos;t you have to do at your job?</p>
                            <p className="text-slate-300 font-mono">5. What time do you have to arrive by?</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-yellow-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-yellow-500 pl-2">Section 5: Advice for Others (Should / Had Better)</p>
                          <div className="space-y-2 text-sm">
                            <p className="text-slate-300 font-mono">1. What should a new worker do on their first day?</p>
                            <p className="text-slate-300 font-mono">2. What shouldn&apos;t you do when talking to your boss?</p>
                            <p className="text-slate-300 font-mono">3. A friend feels sick. What should they do?</p>
                            <p className="text-slate-300 font-mono">4. A roommate is always late on rent. What had they better do?</p>
                            <p className="text-slate-300 font-mono">5. What advice would you give to next year&apos;s J1 group?</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-teal-500 pl-2">Section 6: Future Possibilities (May / Might / Could)</p>
                          <div className="space-y-2 text-sm">
                            <p className="text-slate-300 font-mono">1. What might you do after this program ends?</p>
                            <p className="text-slate-300 font-mono">2. Where could you see yourself in 5 years?</p>
                            <p className="text-slate-300 font-mono">3. Do you think you may come back to the US?</p>
                            <p className="text-slate-300 font-mono">4. What career could your English open up for you?</p>
                            <p className="text-slate-300 font-mono">5. What might change in your life by the end of this year?</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<PenTool />}
                    title="Phase 3: The Letter Home"
                    subtitle="15 Minutes &bull; Written Integration"
                    methodology="All-Tenses Narrative Writing"
                    accentColor="teal"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Write a letter to your family back home using ALL tenses and modals from Unit 2. Minimum 12 sentences. Must include at least one of each: Simple Present, Present Continuous, CAN, MUST/HAVE TO, SHOULD, and MAY/MIGHT/COULD.
                    </p>
                    <div className="bg-teal-900/10 rounded-xl p-5 border border-teal-500/20">
                      <h4 className="text-teal-400 font-bold text-sm mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Model Letter</h4>
                      <div className="text-xs text-slate-300 space-y-1">
                        <p className="font-serif italic">&quot;Dear family,</p>
                        <p className="font-mono">I <strong className="text-emerald-300">work</strong> at a hotel in Colorado. I usually <strong className="text-emerald-300">start</strong> at 7 AM. Right now I <strong className="text-rose-300">am sitting</strong> in the lobby writing this letter. I <strong className="text-purple-300">can</strong> see the mountains from my window. I <strong className="text-red-300">can&apos;t</strong> believe how beautiful it is.</p>
                        <p className="font-mono mt-2">I <strong className="text-amber-300">have to</strong> wear a uniform every day. I <strong className="text-red-300">must not</strong> use my phone at work. But I <strong className="text-yellow-300">don&apos;t have to</strong> work weekends, so that&apos;s great.</p>
                        <p className="font-mono mt-2">You <strong className="text-yellow-300">should</strong> see this place someday. You <strong className="text-orange-300">shouldn&apos;t</strong> worry about me &mdash; I&apos;m eating well. I <strong className="text-teal-300">may</strong> visit in December. I <strong className="text-cyan-300">might</strong> save enough money for a nice gift for everyone. We <strong className="text-sky-300">could</strong> celebrate Christmas together!</p>
                        <p className="font-serif italic mt-2">I miss you all. Love.&quot;</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Trophy />}
                    title="Phase 4: Unit 2 Final Exam"
                    subtitle="20 Minutes &bull; Comprehensive Assessment"
                    methodology="Automated Qualification"
                    accentColor="teal"
                  >
                    <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl p-6 border border-teal-500/20 mt-4 text-center">
                      <h4 className="text-white font-bold text-lg mb-3">&#127881; Congratulations! Unit 2 Complete &#127881;</h4>
                      <p className="text-sm text-slate-300 leading-relaxed mb-6">You are now ready to take the final assessment. Enter the exam portal when you are ready to begin.</p>
                      <Link href="/english-class/unit-2-exam" className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]">
                        Enter Exam Portal
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
        prevHref="/english-class/hours-17-18"
        prevLabel="Hours 17 &amp; 18"
        nextHref="/english-class"
        nextLabel="Back to Curriculum"
        accentColor="teal"
        moduleTitle="Possibility &amp; Milestone Review"
      />
    </div>
  );
}
