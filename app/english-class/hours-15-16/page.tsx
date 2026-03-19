"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  MessageSquareQuote,
  AlertTriangle,
  CheckCircle,
  Zap,
  Phone,
  Activity,
  Eye,
  HelpCircle,
  PenTool,
  Users,
  Clock,
  RefreshCw,
  ArrowLeftRight
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassHours15and16() {
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-500/30">
      <CurriculumHeader
        hourNumber="15 & 16"
        title="The Right Now &"
        subtitle="Tense Contrast"
        description="Learn to describe actions happening at this exact moment with the Present Continuous. Then master the critical difference between what you DO (habits) and what you ARE DOING (right now)."
        accentColor="rose"
        moduleInfo="Unit 2: Exploring the World • Part 3"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 15: Present Continuous */}
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
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/10 text-rose-400 border border-rose-500/20 shadow-[0_0_40px_rgba(244,63,94,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">15</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Right Now</h2>
                      <p className="text-rose-400 font-medium tracking-wide text-xs uppercase">Present Continuous</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    If Simple Present is a photograph of your life, Present Continuous is a live video stream. It captures what is happening in this exact moment.
                  </p>

                  <CurriculumContext title="The Formula" accentColor="rose">
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-rose-500/20">
                        <p className="text-sm text-white font-mono">Subject + <strong className="text-rose-300">am/is/are</strong> + verb<strong className="text-rose-300">-ing</strong></p>
                      </div>
                      <div className="text-xs text-slate-300 space-y-1">
                        <p>I <strong className="text-rose-300">am working</strong> right now.</p>
                        <p>She <strong className="text-rose-300">is studying</strong> English.</p>
                        <p>They <strong className="text-rose-300">are eating</strong> lunch.</p>
                      </div>
                    </div>
                  </CurriculumContext>

                  <div className="bg-rose-500/10 rounded-xl p-5 border border-rose-500/20">
                    <h4 className="text-rose-400 font-bold text-xs uppercase mb-3 flex items-center gap-2"><Activity className="w-4 h-4" /> Signal Words</h4>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-300 font-mono">now</span>
                      <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-300 font-mono">right now</span>
                      <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-300 font-mono">at the moment</span>
                      <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-300 font-mono">currently</span>
                      <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-300 font-mono">Look!</span>
                      <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-300 font-mono">Listen!</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<BookOpen />}
                    title="Phase 1: Present Continuous Architecture"
                    subtitle="20 Minutes • Direct Instruction"
                    methodology="Structure Mapping"
                    accentColor="rose"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 text-sm text-center">
                      <div className="bg-slate-950 p-5 rounded-xl border border-rose-500/20">
                        <h4 className="text-rose-400 text-xs font-black uppercase tracking-widest mb-3">Affirmative</h4>
                        <div className="space-y-2 text-slate-300 font-mono text-xs">
                          <p>I <strong className="text-rose-300">am eating</strong>.</p>
                          <p>She <strong className="text-rose-300">is working</strong>.</p>
                          <p>We <strong className="text-rose-300">are studying</strong>.</p>
                        </div>
                      </div>
                      <div className="bg-slate-950 p-5 rounded-xl border border-red-500/20">
                        <h4 className="text-red-400 text-xs font-black uppercase tracking-widest mb-3">Negative</h4>
                        <div className="space-y-2 text-slate-300 font-mono text-xs">
                          <p>I <strong className="text-red-300">am not eating</strong>.</p>
                          <p>She <strong className="text-red-300">is not working</strong>.</p>
                          <p>We <strong className="text-red-300">are not studying</strong>.</p>
                        </div>
                      </div>
                      <div className="bg-slate-950 p-5 rounded-xl border border-amber-500/20">
                        <h4 className="text-amber-400 text-xs font-black uppercase tracking-widest mb-3">Questions</h4>
                        <div className="space-y-2 text-slate-300 font-mono text-xs">
                          <p><strong className="text-amber-300">Are</strong> you eating?</p>
                          <p><strong className="text-amber-300">Is</strong> she working?</p>
                          <p>What <strong className="text-amber-300">are</strong> you doing?</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/20 mt-6">
                      <h4 className="text-amber-400 font-bold text-sm mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Spelling Rules for -ING</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div className="space-y-2">
                          <p className="text-slate-300"><strong className="text-white">Normal:</strong> work → work<strong className="text-rose-300">ing</strong></p>
                          <p className="text-slate-300"><strong className="text-white">Drop -e:</strong> make → mak<strong className="text-rose-300">ing</strong></p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-slate-300"><strong className="text-white">Double consonant:</strong> run → run<strong className="text-rose-300">ning</strong></p>
                          <p className="text-slate-300"><strong className="text-white">-ie → -ying:</strong> die → d<strong className="text-rose-300">ying</strong></p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Live Action Dialogues"
                    subtitle="20 Minutes • Contextual Shadowing"
                    methodology="Immediate Situation Description"
                    accentColor="rose"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-rose-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-rose-500 pl-2">Dialogue 1: At the Workplace</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;What <strong className="text-rose-300">are</strong> you <strong className="text-rose-300">doing</strong> right now?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-rose-300">am cleaning</strong> the tables. Mike <strong className="text-rose-300">is taking</strong> out the trash.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;Good. Where <strong className="text-rose-300">is</strong> Sarah? What <strong className="text-rose-300">is</strong> she <strong className="text-rose-300">doing</strong>?&quot;</p>
                            <p className="text-slate-400 italic">&quot;She <strong className="text-rose-300">is helping</strong> a customer at the counter.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-pink-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-pink-500 pl-2">Dialogue 2: Video Call With Family</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Mom:</strong> &quot;What <strong className="text-pink-300">are</strong> you <strong className="text-pink-300">doing</strong>? I can see your room!&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-rose-300">am cooking</strong> dinner. My roommate <strong className="text-rose-300">is watching</strong> TV.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Mom:</strong> &quot;<strong className="text-pink-300">Are</strong> you <strong className="text-pink-300">eating</strong> well?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes! Right now I <strong className="text-rose-300">am making</strong> pasta with chicken.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-orange-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-orange-500 pl-2">Dialogue 3: Describing a Scene</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;What <strong className="text-orange-300">is</strong> happening at the park?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Some kids <strong className="text-rose-300">are playing</strong> soccer. A man <strong className="text-rose-300">is walking</strong> his dog. Two women <strong className="text-rose-300">are sitting</strong> on the bench.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;<strong className="text-orange-300">Is</strong> it <strong className="text-orange-300">raining</strong>?&quot;</p>
                            <p className="text-slate-400 italic">&quot;No, the sun <strong className="text-rose-300">is shining</strong>. It&apos;s beautiful.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Eye />}
                    title="Phase 3: The Spy Game"
                    subtitle="15 Minutes • Observation Challenge"
                    methodology="Real-Time Description"
                    accentColor="rose"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      The teacher shows a busy image (a crowded street, a restaurant, a park) for 30 seconds. Students must write as many Present Continuous sentences as possible describing what people in the image are doing.
                    </p>
                    <div className="bg-rose-900/10 rounded-xl p-5 border border-rose-500/20">
                      <h4 className="text-rose-400 font-bold text-sm mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Model Answers</h4>
                      <div className="text-xs text-slate-300 space-y-1 font-mono">
                        <p>A woman <strong className="text-white">is talking</strong> on the phone.</p>
                        <p>Two children <strong className="text-white">are running</strong> in the park.</p>
                        <p>A waiter <strong className="text-white">is carrying</strong> a tray of drinks.</p>
                        <p>An old man <strong className="text-white">is reading</strong> a newspaper.</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 16: Investigative Conversations */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500/50 via-pink-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-red-500/10 text-pink-400 border border-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">16</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Contrast</h2>
                      <p className="text-pink-400 font-medium tracking-wide text-xs uppercase">Simple vs Continuous</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    The deadliest confusion for Spanish speakers: mixing up what you DO every day with what you ARE DOING right now. This hour attacks the problem head-on.
                  </p>

                  <CurriculumContext title="The Critical Distinction" accentColor="rose">
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-emerald-500/20">
                        <p className="text-xs text-emerald-400 font-bold uppercase mb-1">Simple Present (Always)</p>
                        <p className="text-sm text-white font-mono">&quot;I <strong className="text-emerald-300">work</strong> at a hotel.&quot;</p>
                        <p className="text-xs text-slate-500 italic">This is my job. Every day.</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-rose-500/20">
                        <p className="text-xs text-rose-400 font-bold uppercase mb-1">Present Continuous (Now)</p>
                        <p className="text-sm text-white font-mono">&quot;I <strong className="text-rose-300">am working</strong> right now.&quot;</p>
                        <p className="text-xs text-slate-500 italic">This is what I am doing at this moment.</p>
                      </div>
                    </div>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<ArrowLeftRight />}
                    title="Phase 1: Side-by-Side Comparison"
                    subtitle="15 Minutes • Contrast Theory"
                    methodology="Binary Visual Mapping"
                    accentColor="rose"
                  >
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3 text-sm">
                          <h4 className="text-emerald-400 font-bold text-xs uppercase flex items-center gap-2"><Clock className="w-3 h-3" /> Simple Present</h4>
                          <p className="text-slate-300 font-mono">I <strong className="text-emerald-300">drink</strong> coffee every morning.</p>
                          <p className="text-slate-300 font-mono">She <strong className="text-emerald-300">studies</strong> English.</p>
                          <p className="text-slate-300 font-mono">We <strong className="text-emerald-300">live</strong> in Miami.</p>
                        </div>
                        <div className="space-y-3 text-sm">
                          <h4 className="text-rose-400 font-bold text-xs uppercase flex items-center gap-2"><Zap className="w-3 h-3" /> Present Continuous</h4>
                          <p className="text-slate-300 font-mono">I <strong className="text-rose-300">am drinking</strong> coffee now.</p>
                          <p className="text-slate-300 font-mono">She <strong className="text-rose-300">is studying</strong> right now.</p>
                          <p className="text-slate-300 font-mono">We <strong className="text-rose-300">are living</strong> in Miami this summer.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20 mt-4">
                      <h4 className="text-red-400 font-bold text-sm mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> The Spanish Speaker Trap</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">❌</span>
                          <p className="text-slate-300">&quot;I <strong className="text-white">am work</strong> at a hotel every day.&quot; → <span className="text-green-400">I work at a hotel every day.</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">❌</span>
                          <p className="text-slate-300">&quot;She <strong className="text-white">cooks</strong> right now.&quot; → <span className="text-green-400">She is cooking right now.</span></p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Phone />}
                    title="Phase 2: The Phone Call Home"
                    subtitle="25 Minutes • Immersive Roleplay"
                    methodology="Dual-Tense Conversation"
                    accentColor="rose"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-rose-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-rose-500 pl-2">Dialogue 1: Calling Mom</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Mom:</strong> &quot;Hi! What <strong className="text-rose-300">are you doing</strong>?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-rose-300">am eating</strong> dinner with my roommate.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Mom:</strong> &quot;How is your job? What <strong className="text-emerald-300">do you do</strong> every day?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-emerald-300">work</strong> at a restaurant. I <strong className="text-emerald-300">serve</strong> customers. Right now I <strong className="text-rose-300">am learning</strong> to make cocktails.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-pink-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-pink-500 pl-2">Dialogue 2: Checking In With a Friend</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;Hey! <strong className="text-pink-300">Are you working</strong> today?&quot;</p>
                            <p className="text-slate-400 italic">&quot;No, today is my day off. I <strong className="text-rose-300">am exploring</strong> the city.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;<strong className="text-emerald-300">Do you</strong> usually have Mondays off?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-emerald-300">work</strong> Tuesday to Saturday. I <strong className="text-red-300">don&apos;t work</strong> on Mondays.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-orange-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-orange-500 pl-2">Dialogue 3: Describing the Weather</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Dad:</strong> &quot;How is the weather there?&quot;</p>
                            <p className="text-slate-400 italic">&quot;It <strong className="text-rose-300">is raining</strong> right now, but it usually <strong className="text-emerald-300">doesn&apos;t rain</strong> much here in summer.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<RefreshCw />}
                    title="Phase 3: The Tense Switch Challenge"
                    subtitle="15 Minutes • Rapid-Fire Assessment"
                    methodology="Binary Choice Drill"
                    accentColor="rose"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Teacher reads a sentence with a blank. Students must shout either &quot;SIMPLE!&quot; or &quot;CONTINUOUS!&quot; and complete the sentence correctly. Speed is key.
                    </p>
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">1. She ___ (cook) dinner every night.</p>
                          <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold">cooks</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">2. Look! He ___ (run) in the park.</p>
                          <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-400 text-xs font-bold">is running</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">3. I ___ (not/drink) coffee. I prefer tea.</p>
                          <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold">don&apos;t drink</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">4. They ___ (study) for the exam right now.</p>
                          <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-400 text-xs font-bold">are studying</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-slate-400">5. We ___ (go) to the gym every Monday.</p>
                          <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold">go</span>
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
        prevHref="/english-class/hours-13-14"
        prevLabel="Hours 13 & 14"
        nextHref="/english-class/hours-17-18"
        nextLabel="Hours 17 & 18"
        accentColor="rose"
      />
    </div>
  );
}
