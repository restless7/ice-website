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
  ArrowLeftRight,
  Camera,
  Mic2
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
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-500/30">
      <CurriculumHeader
        hourNumber="15 &amp; 16"
        title="The Right Now &amp;"
        subtitle="Tense Contrast"
        description="Learn to describe actions happening at this exact moment with the Present Continuous. Then master the critical difference between what you DO (habits) and what you ARE DOING (right now)."
        accentColor="rose"
        moduleInfo="Unit 2: Exploring the World &bull; Part 3"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 15 */}
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
                        <p>We <strong className="text-rose-300">are waiting</strong> for the bus.</p>
                        <p>He <strong className="text-rose-300">is talking</strong> on the phone.</p>
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
                      <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-300 font-mono">today</span>
                      <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-300 font-mono">this week</span>
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                    <h4 className="text-slate-300 font-bold text-xs uppercase mb-3">BE Verb Reference</h4>
                    <div className="text-xs font-mono text-slate-300 space-y-1">
                      <p>I &rarr; <strong className="text-rose-300">am</strong></p>
                      <p>He / She / It &rarr; <strong className="text-rose-300">is</strong></p>
                      <p>You / We / They &rarr; <strong className="text-rose-300">are</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<BookOpen />}
                    title="Phase 1: Present Continuous Architecture"
                    subtitle="20 Minutes &bull; Direct Instruction"
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
                          <p>They <strong className="text-rose-300">are playing</strong>.</p>
                          <p>He <strong className="text-rose-300">is driving</strong>.</p>
                        </div>
                      </div>
                      <div className="bg-slate-950 p-5 rounded-xl border border-red-500/20">
                        <h4 className="text-red-400 text-xs font-black uppercase tracking-widest mb-3">Negative</h4>
                        <div className="space-y-2 text-slate-300 font-mono text-xs">
                          <p>I <strong className="text-red-300">am not eating</strong>.</p>
                          <p>She <strong className="text-red-300">is not working</strong>.</p>
                          <p>We <strong className="text-red-300">are not studying</strong>.</p>
                          <p>They <strong className="text-red-300">aren&apos;t playing</strong>.</p>
                          <p>He <strong className="text-red-300">isn&apos;t driving</strong>.</p>
                        </div>
                      </div>
                      <div className="bg-slate-950 p-5 rounded-xl border border-amber-500/20">
                        <h4 className="text-amber-400 text-xs font-black uppercase tracking-widest mb-3">Questions</h4>
                        <div className="space-y-2 text-slate-300 font-mono text-xs">
                          <p><strong className="text-amber-300">Are</strong> you eating?</p>
                          <p><strong className="text-amber-300">Is</strong> she working?</p>
                          <p>What <strong className="text-amber-300">are</strong> you doing?</p>
                          <p>Where <strong className="text-amber-300">is</strong> he going?</p>
                          <p>Why <strong className="text-amber-300">are</strong> they running?</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/20 mt-6">
                      <h4 className="text-amber-400 font-bold text-sm mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Spelling Rules for -ING</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <p className="text-slate-300"><strong className="text-white">Normal:</strong> work &rarr; work<strong className="text-rose-300">ing</strong>, eat &rarr; eat<strong className="text-rose-300">ing</strong></p>
                          <p className="text-slate-300"><strong className="text-white">Drop -e:</strong> make &rarr; mak<strong className="text-rose-300">ing</strong>, live &rarr; liv<strong className="text-rose-300">ing</strong></p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-slate-300"><strong className="text-white">Double consonant:</strong> run &rarr; ru<strong className="text-rose-300">nning</strong>, sit &rarr; si<strong className="text-rose-300">tting</strong></p>
                          <p className="text-slate-300"><strong className="text-white">-ie &rarr; -ying:</strong> die &rarr; d<strong className="text-rose-300">ying</strong>, lie &rarr; l<strong className="text-rose-300">ying</strong></p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-rose-500/10 rounded-xl p-5 border border-rose-500/20 mt-4">
                      <h4 className="text-rose-400 font-bold text-sm mb-3">14 Quick Sentence Examples</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                        <p>1. I <strong className="text-rose-300">am cooking</strong> dinner.</p>
                        <p>2. She <strong className="text-rose-300">is reading</strong> a book.</p>
                        <p>3. They <strong className="text-rose-300">are watching</strong> a movie.</p>
                        <p>4. He <strong className="text-rose-300">is running</strong> in the park.</p>
                        <p>5. We <strong className="text-rose-300">are waiting</strong> for the bus.</p>
                        <p>6. I <strong className="text-red-300">am not sleeping</strong>.</p>
                        <p>7. She <strong className="text-red-300">isn&apos;t working</strong> today.</p>
                        <p>8. <strong className="text-amber-300">Are</strong> you listening to me?</p>
                        <p>9. What <strong className="text-amber-300">is</strong> he doing?</p>
                        <p>10. It <strong className="text-rose-300">is raining</strong> outside.</p>
                        <p>11. The baby <strong className="text-rose-300">is crying</strong>.</p>
                        <p>12. The dog <strong className="text-rose-300">is sitting</strong> by the door.</p>
                        <p>13. My boss <strong className="text-rose-300">is talking</strong> on the phone.</p>
                        <p>14. Customers <strong className="text-rose-300">are arriving</strong>.</p>
                      </div>
                    </div>

                    <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20 mt-4">
                      <h4 className="text-red-400 font-bold text-sm mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Non-Action (Stative) Verbs &mdash; NEVER Use Continuous</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-slate-300 font-mono">
                        <p>know</p><p>want</p><p>need</p><p>like</p>
                        <p>love</p><p>hate</p><p>believe</p><p>understand</p>
                        <p>remember</p><p>prefer</p><p>mean</p><p>belong</p>
                      </div>
                      <p className="text-xs text-red-300 mt-3 italic">&dagger; &quot;I am knowing&quot; = WRONG &rarr; &quot;I know&quot; = CORRECT</p>
                      <p className="text-xs text-red-300 italic">&dagger; &quot;She is wanting&quot; = WRONG &rarr; &quot;She wants&quot; = CORRECT</p>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Live Action Dialogues"
                    subtitle="25 Minutes &bull; Contextual Shadowing"
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
                            <p className="text-slate-400 italic">&quot;She <strong className="text-rose-300">is helping</strong> a customer at the counter. I think Carlos <strong className="text-rose-300">is stocking</strong> the shelves.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-pink-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-pink-500 pl-2">Dialogue 2: Video Call With Family</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Mom:</strong> &quot;What <strong className="text-pink-300">are</strong> you <strong className="text-pink-300">doing</strong>? I can see your room!&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-rose-300">am cooking</strong> dinner. My roommate <strong className="text-rose-300">is watching</strong> TV.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Mom:</strong> &quot;<strong className="text-pink-300">Are</strong> you <strong className="text-pink-300">eating</strong> well?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes! Right now I <strong className="text-rose-300">am making</strong> pasta with chicken. It <strong className="text-rose-300">is smelling</strong> amazing.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Mom:</strong> &quot;Where <strong className="text-pink-300">is</strong> your brother? <strong className="text-pink-300">Is</strong> he <strong className="text-pink-300">studying</strong>?&quot;</p>
                            <p className="text-slate-400 italic">&quot;He <strong className="text-red-300">isn&apos;t</strong> here. He <strong className="text-rose-300">is working</strong> tonight.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-orange-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-orange-500 pl-2">Dialogue 3: Describing a Scene</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;What <strong className="text-orange-300">is</strong> happening at the park?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Some kids <strong className="text-rose-300">are playing</strong> soccer. A man <strong className="text-rose-300">is walking</strong> his dog. Two women <strong className="text-rose-300">are sitting</strong> on the bench and <strong className="text-rose-300">are chatting</strong>.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;<strong className="text-orange-300">Is</strong> it <strong className="text-orange-300">raining</strong>?&quot;</p>
                            <p className="text-slate-400 italic">&quot;No, the sun <strong className="text-rose-300">is shining</strong>. It&apos;s beautiful. A vendor <strong className="text-rose-300">is selling</strong> ice cream.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-amber-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-amber-500 pl-2">Dialogue 4: The Busy Restaurant</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Coworker:</strong> &quot;It&apos;s crazy tonight! What <strong className="text-amber-300">is</strong> everyone <strong className="text-amber-300">doing</strong>?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Table 3 <strong className="text-rose-300">is waiting</strong> for their food. Table 5 <strong className="text-rose-300">is ordering</strong>. The chef <strong className="text-rose-300">is yelling</strong> about something.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Coworker:</strong> &quot;<strong className="text-amber-300">Are</strong> the new customers <strong className="text-amber-300">sitting</strong> yet?&quot;</p>
                            <p className="text-slate-400 italic">&quot;No, they <strong className="text-rose-300">are standing</strong> by the door. I <strong className="text-rose-300">am going</strong> to seat them now.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-purple-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-purple-500 pl-2">Dialogue 5: Text Messages</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend (text):</strong> &quot;What <strong className="text-purple-300">are</strong> you <strong className="text-purple-300">doing</strong>?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Nothing much. I <strong className="text-rose-300">am lying</strong> on the couch. <strong className="text-purple-300">Are</strong> you <strong className="text-purple-300">doing</strong> anything?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;I <strong className="text-rose-300">am trying</strong> to fix my bike. It <strong className="text-red-300">isn&apos;t</strong> working.&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-rose-300">am coming</strong> over! I can help.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Eye />}
                    title="Phase 3: The Spy Game"
                    subtitle="15 Minutes &bull; Observation Challenge"
                    methodology="Real-Time Description"
                    accentColor="rose"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      The teacher shows a busy image (a crowded street, a restaurant, a park) for 30 seconds. Students must write as many Present Continuous sentences as possible describing what people are doing.
                    </p>
                    <div className="bg-rose-900/10 rounded-xl p-5 border border-rose-500/20">
                      <h4 className="text-rose-400 font-bold text-sm mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Model Answers (12 Examples)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                        <p>A woman <strong className="text-white">is talking</strong> on her phone.</p>
                        <p>Two children <strong className="text-white">are running</strong> in the park.</p>
                        <p>A waiter <strong className="text-white">is carrying</strong> a tray of drinks.</p>
                        <p>An old man <strong className="text-white">is reading</strong> a newspaper.</p>
                        <p>A couple <strong className="text-white">is sitting</strong> on a bench.</p>
                        <p>A dog <strong className="text-white">is chasing</strong> a ball.</p>
                        <p>The sun <strong className="text-white">is shining</strong> brightly.</p>
                        <p>A mother <strong className="text-white">is pushing</strong> a stroller.</p>
                        <p>A man <strong className="text-white">is jogging</strong> on the path.</p>
                        <p>Some teenagers <strong className="text-white">are listening</strong> to music.</p>
                        <p>A vendor <strong className="text-white">is selling</strong> hot dogs.</p>
                        <p>Birds <strong className="text-white">are flying</strong> over the lake.</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 16: Tense Contrast */}
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
                        <p className="text-xs text-emerald-400 font-bold uppercase mb-1">Simple Present (Always / Habit)</p>
                        <p className="text-sm text-white font-mono">&quot;I <strong className="text-emerald-300">work</strong> at a hotel.&quot;</p>
                        <p className="text-xs text-slate-500 italic">This is my job. Every day.</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-rose-500/20">
                        <p className="text-xs text-rose-400 font-bold uppercase mb-1">Present Continuous (Now / Temporary)</p>
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
                    subtitle="15 Minutes &bull; Contrast Theory"
                    methodology="Binary Visual Mapping"
                    accentColor="rose"
                  >
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3 text-sm">
                          <h4 className="text-emerald-400 font-bold text-xs uppercase flex items-center gap-2"><Clock className="w-3 h-3" /> Simple Present</h4>
                          <p className="text-slate-300 font-mono">I <strong className="text-emerald-300">drink</strong> coffee every morning.</p>
                          <p className="text-slate-300 font-mono">She <strong className="text-emerald-300">studies</strong> English at school.</p>
                          <p className="text-slate-300 font-mono">We <strong className="text-emerald-300">live</strong> in Miami.</p>
                          <p className="text-slate-300 font-mono">He <strong className="text-emerald-300">works</strong> at a restaurant.</p>
                          <p className="text-slate-300 font-mono">They <strong className="text-emerald-300">play</strong> soccer on Sundays.</p>
                          <p className="text-slate-300 font-mono">I <strong className="text-emerald-300">take</strong> the bus to work.</p>
                        </div>
                        <div className="space-y-3 text-sm">
                          <h4 className="text-rose-400 font-bold text-xs uppercase flex items-center gap-2"><Zap className="w-3 h-3" /> Present Continuous</h4>
                          <p className="text-slate-300 font-mono">I <strong className="text-rose-300">am drinking</strong> coffee now.</p>
                          <p className="text-slate-300 font-mono">She <strong className="text-rose-300">is studying</strong> right now.</p>
                          <p className="text-slate-300 font-mono">We <strong className="text-rose-300">are living</strong> in Miami this summer.</p>
                          <p className="text-slate-300 font-mono">He <strong className="text-rose-300">is working</strong> at the moment.</p>
                          <p className="text-slate-300 font-mono">They <strong className="text-rose-300">are playing</strong> soccer right now.</p>
                          <p className="text-slate-300 font-mono">I <strong className="text-rose-300">am taking</strong> a taxi today.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20 mt-4">
                      <h4 className="text-red-400 font-bold text-sm mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> The 6 Most Common Tense Errors</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;I <strong className="text-white">am work</strong> at a hotel every day.&quot; &rarr; <span className="text-green-400">I work at a hotel every day.</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;She <strong className="text-white">cooks</strong> right now.&quot; &rarr; <span className="text-green-400">She is cooking right now.</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;I <strong className="text-white">am wanting</strong> food.&quot; &rarr; <span className="text-green-400">I want food.</span> (stative verb)</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;He <strong className="text-white">is work</strong> today.&quot; &rarr; <span className="text-green-400">He is working today.</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;What <strong className="text-white">you are doing</strong>?&quot; &rarr; <span className="text-green-400">What are you doing?</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;They <strong className="text-white">are go</strong> to the park.&quot; &rarr; <span className="text-green-400">They are going to the park.</span></p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Phone />}
                    title="Phase 2: Dual-Tense Dialogues"
                    subtitle="25 Minutes &bull; Immersive Roleplay"
                    methodology="Tense-Switching Conversations"
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
                            <p className="text-slate-400 italic">&quot;I <strong className="text-emerald-300">work</strong> at a restaurant. I <strong className="text-emerald-300">serve</strong> customers and <strong className="text-emerald-300">clean</strong> tables. Right now I <strong className="text-rose-300">am learning</strong> to make cocktails.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Mom:</strong> &quot;<strong className="text-emerald-300">Do</strong> you <strong className="text-emerald-300">like</strong> it?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-emerald-300">love</strong> it. I <strong className="text-rose-300">am meeting</strong> a lot of interesting people.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-pink-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-pink-500 pl-2">Dialogue 2: Checking In With a Friend</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;Hey! <strong className="text-pink-300">Are you working</strong> today?&quot;</p>
                            <p className="text-slate-400 italic">&quot;No, today is my day off. I <strong className="text-rose-300">am exploring</strong> the city.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;<strong className="text-emerald-300">Do you</strong> usually have Mondays off?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-emerald-300">work</strong> Tuesday to Saturday. I <strong className="text-red-300">don&apos;t work</strong> on Mondays.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;What <strong className="text-pink-300">are you doing</strong> right now?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-rose-300">am walking</strong> around downtown. I <strong className="text-rose-300">am looking</strong> for a good coffee shop.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-orange-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-orange-500 pl-2">Dialogue 3: The Weather</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Dad:</strong> &quot;How is the weather there?&quot;</p>
                            <p className="text-slate-400 italic">&quot;It <strong className="text-rose-300">is raining</strong> right now, but it usually <strong className="text-red-300">doesn&apos;t rain</strong> much here in summer.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Dad:</strong> &quot;<strong className="text-emerald-300">Does</strong> it <strong className="text-emerald-300">snow</strong> there?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, it <strong className="text-emerald-300">snows</strong> a lot in winter. Right now it&apos;s warm, though. I <strong className="text-rose-300">am wearing</strong> shorts!&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-cyan-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-cyan-500 pl-2">Dialogue 4: Between Coworkers on Break</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">John:</strong> &quot;What <strong className="text-emerald-300">do you</strong> usually <strong className="text-emerald-300">do</strong> on your day off?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I usually <strong className="text-emerald-300">sleep</strong> in and <strong className="text-emerald-300">go</strong> to the mall. But this week I <strong className="text-rose-300">am saving</strong> money.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">John:</strong> &quot;Why <strong className="text-rose-300">are you saving</strong> money?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Because I <strong className="text-emerald-300">want</strong> to visit New York next month. I <strong className="text-rose-300">am planning</strong> the trip now.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-purple-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-purple-500 pl-2">Dialogue 5: Describing a Sport</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;<strong className="text-emerald-300">Do you play</strong> any sports?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-emerald-300">play</strong> basketball every Saturday. Right now I <strong className="text-rose-300">am training</strong> for a tournament.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;Who <strong className="text-rose-300">are you training</strong> with?&quot;</p>
                            <p className="text-slate-400 italic">&quot;My coworkers. We <strong className="text-emerald-300">practice</strong> together. Today we <strong className="text-rose-300">are working</strong> on defense.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<RefreshCw />}
                    title="Phase 3: The Tense Switch Challenge"
                    subtitle="15 Minutes &bull; Rapid-Fire Assessment"
                    methodology="Binary Choice Drill"
                    accentColor="rose"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Teacher reads a sentence with a blank. Students must shout either &quot;SIMPLE!&quot; or &quot;CONTINUOUS!&quot; and complete the sentence correctly.
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
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">5. We ___ (go) to the gym every Monday.</p>
                          <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold">go</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">6. At the moment, she ___ (write) an email.</p>
                          <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-400 text-xs font-bold">is writing</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">7. He ___ (not/like) spicy food.</p>
                          <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold">doesn&apos;t like</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">8. Listen! Someone ___ (knock) on the door.</p>
                          <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-400 text-xs font-bold">is knocking</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">9. The store ___ (open) at 9 AM every day.</p>
                          <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold">opens</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-slate-400">10. I ___ (not/work) today. It&apos;s my day off.</p>
                          <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-400 text-xs font-bold">am not working</span>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Camera />}
                    title="Phase 4: The Photo vs Video Narrative"
                    subtitle="15 Minutes &bull; Creative Writing"
                    methodology="Dual-Tense Paragraph Writing"
                    accentColor="rose"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Students write TWO paragraphs about themselves: one describing their normal life (Simple Present) and one describing what they are doing TODAY (Present Continuous). Minimum 5 sentences each.
                    </p>
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-emerald-500/5 p-4 rounded-lg border border-emerald-500/10">
                          <h4 className="text-emerald-400 font-bold text-xs uppercase mb-2 flex items-center gap-2"><Clock className="w-3 h-3" /> My Normal Life (Photo)</h4>
                          <div className="text-xs text-slate-300 space-y-1 font-mono">
                            <p>I <strong className="text-emerald-300">work</strong> at a ski resort.</p>
                            <p>I <strong className="text-emerald-300">start</strong> at 7 AM every day.</p>
                            <p>I usually <strong className="text-emerald-300">eat</strong> lunch at noon.</p>
                            <p>I <strong className="text-red-300">don&apos;t</strong> drive to work.</p>
                            <p>I <strong className="text-emerald-300">take</strong> the shuttle bus.</p>
                          </div>
                        </div>
                        <div className="bg-rose-500/5 p-4 rounded-lg border border-rose-500/10">
                          <h4 className="text-rose-400 font-bold text-xs uppercase mb-2 flex items-center gap-2"><Zap className="w-3 h-3" /> Right Now (Video)</h4>
                          <div className="text-xs text-slate-300 space-y-1 font-mono">
                            <p>I <strong className="text-rose-300">am sitting</strong> in class.</p>
                            <p>I <strong className="text-rose-300">am listening</strong> to the teacher.</p>
                            <p>My classmates <strong className="text-rose-300">are writing</strong> notes.</p>
                            <p>The teacher <strong className="text-rose-300">is explaining</strong> grammar.</p>
                            <p>It <strong className="text-rose-300">is raining</strong> outside.</p>
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
        prevHref="/english-class/hours-13-14"
        prevLabel="Hours 13 &amp; 14"
        nextHref="/english-class/hours-17-18"
        nextLabel="Hours 17 &amp; 18"
        accentColor="rose"
        moduleTitle="Present Continuous &amp; Tense Contrast"
      />
    </div>
  );
}
