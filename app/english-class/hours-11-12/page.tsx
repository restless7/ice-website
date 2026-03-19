"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  MessageSquareQuote,
  AlertTriangle,
  CheckCircle,
  Target,
  Clock,
  Repeat,
  Sunrise,
  Coffee,
  Briefcase,
  Users,
  HelpCircle,
  Mic2,
  Zap,
  PenTool,
  ArrowLeftRight
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassHours11and12() {
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
        hourNumber="11 &amp; 12"
        title="Daily Routines &amp;"
        subtitle="Conversational Q&amp;A"
        description="Enter Unit 2: the world of action. Master the Simple Present tense to talk about habits, routines, facts, and truths. Then learn to interrogate others about their lives using Do/Does."
        accentColor="emerald"
        moduleInfo="Unit 2: Exploring the World &bull; Part 1"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 11 */}
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
                      <span className="text-2xl font-bold">11</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Routines</h2>
                      <p className="text-emerald-400 font-medium tracking-wide text-xs uppercase">Simple Present Tense</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    The Simple Present is the engine of everyday English. It powers every statement about habits, schedules, and universal truths. Without it, you cannot describe your life.
                  </p>

                  <CurriculumContext title="The Golden Rule" accentColor="emerald">
                    <p className="text-sm text-slate-300 leading-relaxed font-bold">I/You/We/They &rarr; BASE VERB</p>
                    <p className="text-sm text-slate-300 leading-relaxed font-bold mt-1">He/She/It &rarr; VERB + S</p>
                    <p className="text-sm text-slate-300 leading-relaxed mt-3 border-l-2 border-emerald-500 pl-2">
                      Spanish speakers forget the &quot;S&quot; constantly. &quot;She work&quot; instead of &quot;She works.&quot; This is the #1 error to eliminate in Unit 2.
                    </p>
                  </CurriculumContext>

                  <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/20">
                    <h4 className="text-emerald-400 font-bold text-xs uppercase mb-3 flex items-center gap-2"><Clock className="w-4 h-4" /> When to Use It</h4>
                    <ul className="text-xs text-slate-300 space-y-2">
                      <li className="flex items-start gap-2"><span className="text-emerald-500">&bull;</span> Habits: &quot;I drink coffee every morning.&quot;</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500">&bull;</span> Facts: &quot;Water boils at 100&deg;C.&quot;</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500">&bull;</span> Schedules: &quot;The bus leaves at 7:00 AM.&quot;</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500">&bull;</span> Permanent states: &quot;I live in Colombia.&quot;</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500">&bull;</span> Feelings: &quot;I love my family.&quot;</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500">&bull;</span> Frequency: &quot;She always arrives on time.&quot;</li>
                    </ul>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                    <h4 className="text-slate-300 font-bold text-xs uppercase mb-3">Frequency Adverbs (Position: before the verb)</h4>
                    <div className="space-y-1 text-xs font-mono">
                      <div className="flex items-center gap-2"><div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-emerald-500 h-2 rounded-full" style={{ width: "100%" }}></div></div><span className="text-emerald-400 min-w-[60px]">always</span></div>
                      <div className="flex items-center gap-2"><div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-emerald-400 h-2 rounded-full" style={{ width: "80%" }}></div></div><span className="text-emerald-300 min-w-[60px]">usually</span></div>
                      <div className="flex items-center gap-2"><div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-yellow-500 h-2 rounded-full" style={{ width: "60%" }}></div></div><span className="text-yellow-400 min-w-[60px]">often</span></div>
                      <div className="flex items-center gap-2"><div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-amber-500 h-2 rounded-full" style={{ width: "40%" }}></div></div><span className="text-amber-400 min-w-[60px]">sometimes</span></div>
                      <div className="flex items-center gap-2"><div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-orange-500 h-2 rounded-full" style={{ width: "15%" }}></div></div><span className="text-orange-400 min-w-[60px]">rarely</span></div>
                      <div className="flex items-center gap-2"><div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-red-500 h-2 rounded-full" style={{ width: "0%" }}></div></div><span className="text-red-400 min-w-[60px]">never</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  {/* Theory: Structure */}
                  <CurriculumBlock
                    icon={<BookOpen />}
                    title="Phase 1: The Simple Present Architecture"
                    subtitle="20 Minutes &bull; Direct Instruction"
                    methodology="Grammar Mapping &amp; Contrast"
                    accentColor="emerald"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 text-sm text-center">
                      <div className="bg-slate-950 p-5 rounded-xl border border-emerald-500/20">
                        <h4 className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-3">Affirmative</h4>
                        <div className="space-y-2 text-slate-300 font-mono text-xs">
                          <p>I <strong className="text-white">work</strong> every day.</p>
                          <p>You <strong className="text-white">study</strong> English.</p>
                          <p>We <strong className="text-white">live</strong> in the US.</p>
                          <p>They <strong className="text-white">play</strong> soccer.</p>
                          <p>He <strong className="text-emerald-300">works</strong> at a hotel.</p>
                          <p>She <strong className="text-emerald-300">studies</strong> medicine.</p>
                          <p>It <strong className="text-emerald-300">rains</strong> a lot.</p>
                        </div>
                      </div>
                      <div className="bg-slate-950 p-5 rounded-xl border border-red-500/20">
                        <h4 className="text-red-400 text-xs font-black uppercase tracking-widest mb-3">Negative</h4>
                        <div className="space-y-2 text-slate-300 font-mono text-xs">
                          <p>I <strong className="text-red-300">don&apos;t</strong> work Sundays.</p>
                          <p>You <strong className="text-red-300">don&apos;t</strong> drink soda.</p>
                          <p>We <strong className="text-red-300">don&apos;t</strong> eat meat.</p>
                          <p>They <strong className="text-red-300">don&apos;t</strong> speak French.</p>
                          <p>He <strong className="text-red-300">doesn&apos;t</strong> work late.</p>
                          <p>She <strong className="text-red-300">doesn&apos;t</strong> study French.</p>
                          <p>It <strong className="text-red-300">doesn&apos;t</strong> snow here.</p>
                        </div>
                      </div>
                      <div className="bg-slate-950 p-5 rounded-xl border border-amber-500/20">
                        <h4 className="text-amber-400 text-xs font-black uppercase tracking-widest mb-3">Key Rules</h4>
                        <div className="space-y-3 text-xs">
                          <div className="bg-amber-500/10 p-3 rounded-lg">
                            <p className="text-amber-300 font-bold">DON&apos;T = I/You/We/They</p>
                          </div>
                          <div className="bg-amber-500/10 p-3 rounded-lg">
                            <p className="text-amber-300 font-bold">DOESN&apos;T = He/She/It</p>
                          </div>
                          <p className="text-slate-400 italic">After doesn&apos;t the verb loses the S!</p>
                          <div className="bg-emerald-500/10 p-3 rounded-lg mt-2">
                            <p className="text-emerald-300 font-bold text-[10px]">SPELLING: -es after s, sh, ch, x, o</p>
                            <p className="text-slate-400 font-mono">go&rarr;goes, watch&rarr;watches</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20 mt-6">
                      <h4 className="text-red-400 font-bold text-sm mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> The Top 6 Spanish Speaker Errors</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;She <strong className="text-white">work</strong>&quot; &rarr; <span className="text-green-400">She works</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;He <strong className="text-white">don&apos;t</strong> like&quot; &rarr; <span className="text-green-400">He doesn&apos;t like</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;She <strong className="text-white">doesn&apos;t works</strong>&quot; &rarr; <span className="text-green-400">She doesn&apos;t work</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;I <strong className="text-white">am work</strong>&quot; &rarr; <span className="text-green-400">I work</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;He <strong className="text-white">studys</strong>&quot; &rarr; <span className="text-green-400">He studies</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;She <strong className="text-white">gos</strong>&quot; &rarr; <span className="text-green-400">She goes</span></p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/20 mt-4">
                      <h4 className="text-emerald-400 font-bold text-sm mb-3">Third Person -S Spelling Rules</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div className="bg-slate-950/50 p-3 rounded-lg">
                          <p className="text-emerald-400 font-bold mb-1">Most verbs: +S</p>
                          <p className="text-slate-300 font-mono">eat&rarr;eats, run&rarr;runs</p>
                          <p className="text-slate-300 font-mono">play&rarr;plays, read&rarr;reads</p>
                        </div>
                        <div className="bg-slate-950/50 p-3 rounded-lg">
                          <p className="text-amber-400 font-bold mb-1">S/SH/CH/X/O: +ES</p>
                          <p className="text-slate-300 font-mono">go&rarr;goes, do&rarr;does</p>
                          <p className="text-slate-300 font-mono">wash&rarr;washes, fix&rarr;fixes</p>
                        </div>
                        <div className="bg-slate-950/50 p-3 rounded-lg">
                          <p className="text-rose-400 font-bold mb-1">Consonant+Y: -IES</p>
                          <p className="text-slate-300 font-mono">study&rarr;studies, try&rarr;tries</p>
                          <p className="text-slate-300 font-mono">carry&rarr;carries, fly&rarr;flies</p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Routine Vocabulary */}
                  <CurriculumBlock
                    icon={<Sunrise />}
                    title="Phase 2: Daily Routine Vocabulary"
                    subtitle="15 Minutes &bull; Action Verb Arsenal"
                    methodology="Time-Block Association"
                    accentColor="emerald"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-amber-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-amber-500 flex items-center gap-2"><Sunrise className="w-3 h-3" /> Morning</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>Wake up &bull; Get up &bull; Take a shower</p>
                          <p>Get dressed &bull; Have breakfast</p>
                          <p>Brush my teeth &bull; Comb my hair</p>
                          <p>Leave home &bull; Catch the bus</p>
                          <p>Check my phone &bull; Make the bed</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-emerald-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-emerald-500 flex items-center gap-2"><Briefcase className="w-3 h-3" /> Work / Study</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>Arrive at work &bull; Start my shift</p>
                          <p>Clock in &bull; Set up my station</p>
                          <p>Take a break &bull; Have lunch</p>
                          <p>Serve customers &bull; Clean tables</p>
                          <p>Finish work &bull; Clock out</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-indigo-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-indigo-500 flex items-center gap-2"><Coffee className="w-3 h-3" /> Evening</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>Go home &bull; Cook dinner</p>
                          <p>Wash the dishes &bull; Do laundry</p>
                          <p>Watch TV &bull; Call my family</p>
                          <p>Take a walk &bull; Go grocery shopping</p>
                          <p>Go to bed &bull; Set my alarm</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800 mt-4">
                      <h4 className="text-white font-bold text-sm mb-3">Quick Sentence Builder: 12 Examples</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                        <p>1. I <strong className="text-emerald-300">wake up</strong> at 6:30 every day.</p>
                        <p>2. She <strong className="text-emerald-300">takes</strong> a shower before breakfast.</p>
                        <p>3. We <strong className="text-emerald-300">catch</strong> the bus at 7:15 AM.</p>
                        <p>4. He <strong className="text-emerald-300">starts</strong> his shift at 8:00 AM.</p>
                        <p>5. I <strong className="text-red-300">don&apos;t</strong> eat breakfast on weekdays.</p>
                        <p>6. She <strong className="text-red-300">doesn&apos;t</strong> drive to work.</p>
                        <p>7. They <strong className="text-emerald-300">cook</strong> dinner together.</p>
                        <p>8. He <strong className="text-red-300">doesn&apos;t</strong> watch TV at night.</p>
                        <p>9. I usually <strong className="text-emerald-300">go</strong> to bed at 10 PM.</p>
                        <p>10. She always <strong className="text-emerald-300">checks</strong> her phone first.</p>
                        <p>11. We never <strong className="text-emerald-300">skip</strong> lunch.</p>
                        <p>12. He rarely <strong className="text-emerald-300">goes</strong> out on Mondays.</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Dialogues */}
                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 3: Routine Dialogues"
                    subtitle="25 Minutes &bull; Contextual Shadowing"
                    methodology="Listen &rarr; Repeat &rarr; Vary"
                    accentColor="emerald"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-emerald-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-emerald-500 pl-2">Dialogue 1: Coworker Small Talk</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Mike:</strong> &quot;Hey, what time do you usually wake up?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-emerald-300">wake up</strong> at 6:30. I <strong className="text-emerald-300">take</strong> a quick shower and <strong className="text-emerald-300">leave</strong> home at 7:15.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Mike:</strong> &quot;Same here. I don&apos;t eat breakfast though.&quot;</p>
                            <p className="text-slate-400 italic">&quot;Really? I always <strong className="text-emerald-300">have</strong> a coffee and toast. I <strong className="text-red-300">don&apos;t</strong> skip breakfast.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Mike:</strong> &quot;How do you get to work?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-emerald-300">take</strong> the bus. It <strong className="text-emerald-300">takes</strong> about 20 minutes.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-green-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-green-500 pl-2">Dialogue 2: Talking About a Friend</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Sarah:</strong> &quot;Tell me about your roommate.&quot;</p>
                            <p className="text-slate-400 italic">&quot;She <strong className="text-emerald-300">works</strong> at a coffee shop. She <strong className="text-emerald-300">starts</strong> at 5 AM, so she <strong className="text-emerald-300">goes</strong> to bed really early.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Sarah:</strong> &quot;Does she cook?&quot;</p>
                            <p className="text-slate-400 italic">&quot;No, she <strong className="text-red-300">doesn&apos;t</strong> cook. She always <strong className="text-emerald-300">orders</strong> delivery. But she <strong className="text-emerald-300">cleans</strong> the apartment every Saturday.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-teal-500 pl-2">Dialogue 3: A Boss Explaining Rules</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;Here is how things work. We <strong className="text-emerald-300">open</strong> at 8 AM. Everyone <strong className="text-emerald-300">clocks</strong> in on time.&quot;</p>
                            <p className="text-slate-400 italic">&quot;What time do we <strong className="text-emerald-300">finish</strong>?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;The shift <strong className="text-emerald-300">ends</strong> at 4 PM. We <strong className="text-red-300">don&apos;t</strong> allow phones on the floor.&quot;</p>
                            <p className="text-slate-400 italic">&quot;Understood. Who <strong className="text-emerald-300">handles</strong> the inventory?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;Sarah <strong className="text-emerald-300">does</strong> the inventory. She <strong className="text-emerald-300">counts</strong> everything at closing.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-cyan-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-cyan-500 pl-2">Dialogue 4: Weekend Routine</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;What do you do on weekends?&quot;</p>
                            <p className="text-slate-400 italic">&quot;On Saturdays, I <strong className="text-emerald-300">sleep</strong> in. I <strong className="text-red-300">don&apos;t</strong> set an alarm. I usually <strong className="text-emerald-300">go</strong> to the park and <strong className="text-emerald-300">play</strong> basketball.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;And Sundays?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Sundays I <strong className="text-emerald-300">do</strong> laundry, <strong className="text-emerald-300">clean</strong> my room, and <strong className="text-emerald-300">cook</strong> for the week. I sometimes <strong className="text-emerald-300">call</strong> my family back home.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-purple-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-purple-500 pl-2">Dialogue 5: The Landlord</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Landlord:</strong> &quot;Rent <strong className="text-emerald-300">is</strong> due on the first of every month. I <strong className="text-red-300">don&apos;t</strong> accept late payments.&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-emerald-300">understand</strong>. Who <strong className="text-emerald-300">pays</strong> the electricity bill?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Landlord:</strong> &quot;I <strong className="text-emerald-300">pay</strong> water and garbage. You <strong className="text-emerald-300">pay</strong> electricity and internet.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Activities */}
                  <CurriculumBlock
                    icon={<PenTool />}
                    title="Phase 4: My Perfect Day Blueprint"
                    subtitle="15 Minutes &bull; Creative Writing"
                    methodology="Timed Personal Narrative"
                    accentColor="emerald"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Each student writes 10 sentences describing their &quot;Perfect Work Day in the USA&quot; using Simple Present. Must include at least 3 negative sentences and 2 frequency adverbs.
                    </p>
                    <div className="bg-emerald-900/10 rounded-xl p-5 border border-emerald-500/20">
                      <h4 className="text-emerald-400 font-bold text-sm mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Model Answer</h4>
                      <div className="text-xs text-slate-300 space-y-1 font-mono">
                        <p>1. I <strong className="text-white">wake up</strong> at 7:00 AM.</p>
                        <p>2. I always <strong className="text-white">take</strong> a long shower.</p>
                        <p>3. I <strong className="text-white">eat</strong> pancakes for breakfast.</p>
                        <p>4. I <strong className="text-red-300">don&apos;t</strong> drive to work &mdash; I walk.</p>
                        <p>5. I <strong className="text-white">start</strong> my shift at 9:00 AM.</p>
                        <p>6. My boss <strong className="text-red-300">doesn&apos;t</strong> yell at us.</p>
                        <p>7. I usually <strong className="text-white">take</strong> my break at noon.</p>
                        <p>8. I <strong className="text-white">finish</strong> at 5:00 PM.</p>
                        <p>9. I <strong className="text-red-300">don&apos;t</strong> work overtime.</p>
                        <p>10. I <strong className="text-white">go</strong> to the beach after work.</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Third Person Chain */}
                  <CurriculumBlock
                    icon={<Users />}
                    title="Phase 5: The Third Person Chain"
                    subtitle="10 Minutes &bull; Oral Drill"
                    methodology="Speed Conversion"
                    accentColor="emerald"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Teacher says a sentence in 1st person. Student must instantly convert it to 3rd person (he/she). Wrong conjugation = sit down.
                    </p>
                    <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                        <div className="bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                          <p className="text-emerald-400 font-bold mb-1">Teacher says:</p>
                          <p className="text-slate-300">&quot;I wake up at 6 AM.&quot;</p>
                        </div>
                        <div className="bg-green-500/5 p-3 rounded-lg border border-green-500/10">
                          <p className="text-green-400 font-bold mb-1">Student says:</p>
                          <p className="text-slate-300">&quot;She <strong className="text-white">wakes</strong> up at 6 AM.&quot;</p>
                        </div>
                        <div className="bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                          <p className="text-emerald-400 font-bold mb-1">Teacher says:</p>
                          <p className="text-slate-300">&quot;I don&apos;t eat breakfast.&quot;</p>
                        </div>
                        <div className="bg-green-500/5 p-3 rounded-lg border border-green-500/10">
                          <p className="text-green-400 font-bold mb-1">Student says:</p>
                          <p className="text-slate-300">&quot;He <strong className="text-white">doesn&apos;t</strong> eat breakfast.&quot;</p>
                        </div>
                        <div className="bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                          <p className="text-emerald-400 font-bold mb-1">Teacher says:</p>
                          <p className="text-slate-300">&quot;I study English every day.&quot;</p>
                        </div>
                        <div className="bg-green-500/5 p-3 rounded-lg border border-green-500/10">
                          <p className="text-green-400 font-bold mb-1">Student says:</p>
                          <p className="text-slate-300">&quot;She <strong className="text-white">studies</strong> English every day.&quot;</p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 12: Interviewing About Habits */}
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
                      <span className="text-2xl font-bold">12</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Interviews</h2>
                      <p className="text-green-400 font-medium tracking-wide text-xs uppercase">Simple Present Q&amp;A</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Statements are useless if you can&apos;t ask questions. Hour 12 introduces the auxiliary verbs DO and DOES to unlock conversational Q&amp;A about habits and routines.
                  </p>

                  <CurriculumContext title="The Question Formula" accentColor="emerald">
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-emerald-500/20">
                        <p className="text-xs text-emerald-400 font-bold uppercase mb-1">I / You / We / They</p>
                        <p className="text-sm text-white font-mono"><strong className="text-emerald-300">Do</strong> you work on weekends?</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-green-500/20">
                        <p className="text-xs text-green-400 font-bold uppercase mb-1">He / She / It</p>
                        <p className="text-sm text-white font-mono"><strong className="text-green-300">Does</strong> she speak English?</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-3 italic border-l-2 border-emerald-500 pl-2">
                      After DO/DOES, the verb is ALWAYS in base form. Never &quot;Does she speaks.&quot;
                    </p>
                  </CurriculumContext>

                  <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/20">
                    <h4 className="text-green-400 font-bold text-xs uppercase mb-3">Short Answers</h4>
                    <div className="text-xs text-slate-300 space-y-2 font-mono">
                      <p><strong className="text-green-300">Yes, I do.</strong> / <strong className="text-red-300">No, I don&apos;t.</strong></p>
                      <p><strong className="text-green-300">Yes, she does.</strong> / <strong className="text-red-300">No, she doesn&apos;t.</strong></p>
                      <p className="text-slate-500 italic mt-2">Never: &quot;Yes, I work.&quot; for a yes/no question.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<HelpCircle />}
                    title="Phase 1: Question Architecture"
                    subtitle="15 Minutes &bull; Structural Mapping"
                    methodology="Formula Drill"
                    accentColor="emerald"
                  >
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mt-4">
                      <h4 className="text-white font-bold text-sm mb-4">The Universal Question Pattern:</h4>
                      <div className="bg-slate-950 p-4 rounded-lg font-mono text-sm text-center mb-4">
                        <p className="text-emerald-400"><strong>(Wh-)</strong> + <strong>Do/Does</strong> + <strong>Subject</strong> + <strong>Base Verb</strong> + <strong>?</strong></p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div className="bg-emerald-500/5 rounded-lg p-3 border border-emerald-500/10">
                          <p className="text-emerald-400 font-bold mb-2">Yes/No Questions</p>
                          <div className="space-y-1 text-slate-300 font-mono">
                            <p>Do you like your job?</p>
                            <p>Does he live alone?</p>
                            <p>Do they work here?</p>
                            <p>Does she study at night?</p>
                          </div>
                        </div>
                        <div className="bg-green-500/5 rounded-lg p-3 border border-green-500/10">
                          <p className="text-green-400 font-bold mb-2">Wh- Questions</p>
                          <div className="space-y-1 text-slate-300 font-mono">
                            <p>Where do you work?</p>
                            <p>What does she study?</p>
                            <p>When do you wake up?</p>
                            <p>How does he get to work?</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800 mt-4">
                      <h4 className="text-white font-bold text-sm mb-3">Complete Wh- Question Bank (20 Examples)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                        <p>1. <strong className="text-green-300">What</strong> do you do for a living?</p>
                        <p>2. <strong className="text-green-300">Where</strong> does she work?</p>
                        <p>3. <strong className="text-green-300">When</strong> do you finish your shift?</p>
                        <p>4. <strong className="text-green-300">Why</strong> does he study English?</p>
                        <p>5. <strong className="text-green-300">How</strong> do you get to work?</p>
                        <p>6. <strong className="text-green-300">How often</strong> do you exercise?</p>
                        <p>7. <strong className="text-green-300">How many</strong> hours does she work?</p>
                        <p>8. <strong className="text-green-300">What time</strong> does the store open?</p>
                        <p>9. <strong className="text-green-300">Who</strong> do you live with?</p>
                        <p>10. <strong className="text-green-300">Which</strong> bus do you take?</p>
                        <p>11. <strong className="text-green-300">What</strong> does he eat for breakfast?</p>
                        <p>12. <strong className="text-green-300">Where</strong> do they go on weekends?</p>
                        <p>13. <strong className="text-green-300">How long</strong> does the shift last?</p>
                        <p>14. <strong className="text-green-300">Who</strong> cooks in your house?</p>
                        <p>15. <strong className="text-green-300">What</strong> do you do after work?</p>
                        <p>16. <strong className="text-green-300">How much</strong> does the bus cost?</p>
                        <p>17. <strong className="text-green-300">When</strong> does she go to bed?</p>
                        <p>18. <strong className="text-green-300">Why</strong> don&apos;t you eat breakfast?</p>
                        <p>19. <strong className="text-green-300">Where</strong> do you buy groceries?</p>
                        <p>20. <strong className="text-green-300">How</strong> does your boss treat you?</p>
                      </div>
                    </div>

                    <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20 mt-4">
                      <h4 className="text-red-400 font-bold text-sm mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Critical Errors</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;Where <strong className="text-white">works</strong> she?&quot; &rarr; <span className="text-green-400">Where does she work?</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;Does he <strong className="text-white">goes</strong>?&quot; &rarr; <span className="text-green-400">Does he go?</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;You like coffee?&quot; &rarr; <span className="text-green-400">Do you like coffee?</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">&dagger;</span>
                          <p className="text-slate-300">&quot;What you do?&quot; &rarr; <span className="text-green-400">What do you do?</span></p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Interview Simulations"
                    subtitle="25 Minutes &bull; Conversational Pairs"
                    methodology="Active Q&amp;A Drilling"
                    accentColor="emerald"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-emerald-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-emerald-500 pl-2">Dialogue 1: Casual Chat Between Students</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">You:</strong> &quot;<strong className="text-emerald-300">Do</strong> you have a job back home?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-emerald-300">work</strong> at a bookstore. I <strong className="text-emerald-300">help</strong> customers and <strong className="text-emerald-300">organize</strong> shelves.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">You:</strong> &quot;What time <strong className="text-emerald-300">do</strong> you usually finish?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-emerald-300">finish</strong> at 6 PM. I <strong className="text-red-300">don&apos;t</strong> work weekends.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">You:</strong> &quot;How <strong className="text-emerald-300">do</strong> you get there?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-emerald-300">take</strong> the bus. It <strong className="text-emerald-300">takes</strong> 30 minutes.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-green-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-green-500 pl-2">Dialogue 2: Work Interview Simulation</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;<strong className="text-green-300">Do</strong> you have any experience in food service?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-emerald-300">work</strong> at a restaurant in my country. I <strong className="text-emerald-300">serve</strong> tables and <strong className="text-emerald-300">take</strong> orders.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;<strong className="text-green-300">Do</strong> you work well under pressure?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-emerald-300">do</strong>. I <strong className="text-emerald-300">handle</strong> stressful situations well.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;What <strong className="text-green-300">do</strong> you think your best quality is?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-emerald-300">learn</strong> fast and I <strong className="text-red-300">don&apos;t</strong> give up easily.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-teal-500 pl-2">Dialogue 3: Third Person Gossip</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;<strong className="text-teal-300">Does</strong> your brother live in the US too?&quot;</p>
                            <p className="text-slate-400 italic">&quot;No, he <strong className="text-red-300">doesn&apos;t</strong>. He <strong className="text-emerald-300">lives</strong> in Bogot&aacute;. He <strong className="text-emerald-300">studies</strong> engineering.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;<strong className="text-teal-300">Does</strong> he want to come here someday?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, he <strong className="text-emerald-300">does</strong>. He <strong className="text-emerald-300">plans</strong> to apply next year.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;What <strong className="text-teal-300">does</strong> he do on weekends?&quot;</p>
                            <p className="text-slate-400 italic">&quot;He <strong className="text-emerald-300">plays</strong> video games and <strong className="text-emerald-300">goes</strong> to the gym. He <strong className="text-red-300">doesn&apos;t</strong> go out much.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-cyan-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-cyan-500 pl-2">Dialogue 4: The Nosy Neighbor</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Neighbor:</strong> &quot;So, what <strong className="text-cyan-300">do</strong> you do for a living?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-emerald-300">work</strong> at the resort on Main Street.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Neighbor:</strong> &quot;How many hours <strong className="text-cyan-300">do</strong> you work a week?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-emerald-300">work</strong> about 35 hours. I <strong className="text-red-300">don&apos;t</strong> work Mondays.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Neighbor:</strong> &quot;<strong className="text-cyan-300">Do</strong> you like it here?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-emerald-300">love</strong> it. The people <strong className="text-emerald-300">are</strong> really friendly.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-purple-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-purple-500 pl-2">Dialogue 5: The Doctor&apos;s Office</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Doctor:</strong> &quot;<strong className="text-purple-300">Do</strong> you smoke?&quot;</p>
                            <p className="text-slate-400 italic">&quot;No, I <strong className="text-red-300">don&apos;t</strong>.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Doctor:</strong> &quot;How often <strong className="text-purple-300">do</strong> you exercise?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-emerald-300">exercise</strong> three times a week. I <strong className="text-emerald-300">run</strong> and <strong className="text-emerald-300">lift</strong> weights.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Doctor:</strong> &quot;What <strong className="text-purple-300">do</strong> you usually eat?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-emerald-300">eat</strong> rice, chicken, and vegetables. I <strong className="text-red-300">don&apos;t</strong> eat fast food.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Users />}
                    title="Phase 3: The Human Survey"
                    subtitle="20 Minutes &bull; Active Classroom Movement"
                    methodology="Data Collection &amp; Reporting"
                    accentColor="emerald"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Each student receives a survey card with 6 questions. They must stand up, interview 3 different classmates, and report findings using the third person.
                    </p>
                    <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden font-mono text-xs">
                      <div className="bg-emerald-900/30 p-3 border-b border-slate-700 flex justify-between">
                        <span className="text-emerald-400 font-bold uppercase">Survey Card #01</span>
                        <span className="text-slate-500 italic">Interview 3 people</span>
                      </div>
                      <div className="p-4 space-y-2 text-slate-300">
                        <p>1. What time do you wake up?</p>
                        <p>2. Do you eat breakfast every day?</p>
                        <p>3. Where do you work / study?</p>
                        <p>4. What do you do after work?</p>
                        <p>5. Do you exercise? How often?</p>
                        <p>6. What time do you go to bed?</p>
                      </div>
                      <div className="bg-slate-950 p-3 border-t border-slate-700">
                        <p className="text-emerald-400 text-[10px] uppercase tracking-widest font-bold mb-1">Report Example:</p>
                        <p className="text-slate-400 italic">&quot;Maria wakes up at 7. She doesn&apos;t eat breakfast. She works at a hotel. After work, she goes to the gym. She exercises every day. She goes to bed at 10 PM.&quot;</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<ArrowLeftRight />}
                    title="Phase 4: Error Correction Challenge"
                    subtitle="10 Minutes &bull; Competitive Quiz"
                    methodology="Find &amp; Fix"
                    accentColor="emerald"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Students compete in pairs. Teacher shows incorrect sentences. First team to write the correct version on the whiteboard earns a point.
                    </p>
                    <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-red-400 line-through">&quot;She don&apos;t work on Mondays.&quot;</p>
                          <p className="text-green-400 font-mono text-xs">She doesn&apos;t work on Mondays.</p>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-red-400 line-through">&quot;Does he goes to the gym?&quot;</p>
                          <p className="text-green-400 font-mono text-xs">Does he go to the gym?</p>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-red-400 line-through">&quot;Where works your sister?&quot;</p>
                          <p className="text-green-400 font-mono text-xs">Where does your sister work?</p>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-red-400 line-through">&quot;He studys every night.&quot;</p>
                          <p className="text-green-400 font-mono text-xs">He studies every night.</p>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-red-400 line-through">&quot;I am work at a restaurant.&quot;</p>
                          <p className="text-green-400 font-mono text-xs">I work at a restaurant.</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-red-400 line-through">&quot;What you eat for lunch?&quot;</p>
                          <p className="text-green-400 font-mono text-xs">What do you eat for lunch?</p>
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
        prevHref="/english-class/hours-9-10"
        prevLabel="Hours 9 &amp; 10"
        nextHref="/english-class/hours-13-14"
        nextLabel="Hours 13 &amp; 14"
        accentColor="emerald"
      />
    </div>
  );
}
