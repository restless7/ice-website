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
  PenTool
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
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30">
      <CurriculumHeader
        hourNumber="11 & 12"
        title="Daily Routines &"
        subtitle="Conversational Q&A"
        description="Enter Unit 2: the world of action. Master the Simple Present tense to talk about habits, routines, facts, and truths. Then learn to interrogate others about their lives using Do/Does."
        accentColor="emerald"
        moduleInfo="Unit 2: Exploring the World • Part 1"
      />

      {/* Curriculum Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 11: Action Verbs & Daily Routines */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column: Context */}
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
                    <p className="text-sm text-slate-300 leading-relaxed font-bold">
                      I/You/We/They → BASE VERB
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed font-bold mt-1">
                      He/She/It → VERB + S
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mt-3 border-l-2 border-emerald-500 pl-2">
                      Spanish speakers forget the &quot;S&quot; constantly. &quot;She work&quot; instead of &quot;She works.&quot; This is the #1 error to eliminate in Unit 2.
                    </p>
                  </CurriculumContext>

                  <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/20">
                    <h4 className="text-emerald-400 font-bold text-xs uppercase mb-3 flex items-center gap-2"><Clock className="w-4 h-4" /> When to Use It</h4>
                    <ul className="text-xs text-slate-300 space-y-2">
                      <li className="flex items-start gap-2"><span className="text-emerald-500">•</span> Habits: &quot;I drink coffee every morning.&quot;</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500">•</span> Facts: &quot;Water boils at 100°C.&quot;</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500">•</span> Schedules: &quot;The bus leaves at 7:00 AM.&quot;</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500">•</span> Permanent states: &quot;I live in Colombia.&quot;</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">

                  {/* Theory: Structure */}
                  <CurriculumBlock
                    icon={<BookOpen />}
                    title="Phase 1: The Simple Present Architecture"
                    subtitle="20 Minutes • Direct Instruction"
                    methodology="Grammar Mapping & Contrast"
                    accentColor="emerald"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 text-sm text-center">
                      <div className="bg-slate-950 p-5 rounded-xl border border-emerald-500/20">
                        <h4 className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-3">Affirmative</h4>
                        <div className="space-y-2 text-slate-300 font-mono text-xs">
                          <p>I <strong className="text-white">work</strong> every day.</p>
                          <p>You <strong className="text-white">study</strong> English.</p>
                          <p>He <strong className="text-emerald-300">works</strong> at a hotel.</p>
                          <p>She <strong className="text-emerald-300">studies</strong> medicine.</p>
                        </div>
                      </div>
                      <div className="bg-slate-950 p-5 rounded-xl border border-red-500/20">
                        <h4 className="text-red-400 text-xs font-black uppercase tracking-widest mb-3">Negative</h4>
                        <div className="space-y-2 text-slate-300 font-mono text-xs">
                          <p>I <strong className="text-red-300">don&apos;t</strong> work on Sundays.</p>
                          <p>You <strong className="text-red-300">don&apos;t</strong> drink soda.</p>
                          <p>He <strong className="text-red-300">doesn&apos;t</strong> work late.</p>
                          <p>She <strong className="text-red-300">doesn&apos;t</strong> study French.</p>
                        </div>
                      </div>
                      <div className="bg-slate-950 p-5 rounded-xl border border-amber-500/20">
                        <h4 className="text-amber-400 text-xs font-black uppercase tracking-widest mb-3">Key Rule</h4>
                        <div className="space-y-3 text-xs">
                          <div className="bg-amber-500/10 p-3 rounded-lg">
                            <p className="text-amber-300 font-bold">DON&apos;T = I/You/We/They</p>
                          </div>
                          <div className="bg-amber-500/10 p-3 rounded-lg">
                            <p className="text-amber-300 font-bold">DOESN&apos;T = He/She/It</p>
                          </div>
                          <p className="text-slate-400 italic">After doesn&apos;t the verb loses the S!</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20 mt-6">
                      <h4 className="text-red-400 font-bold text-sm mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> The &quot;S&quot; Trap (Top 3 Errors)</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">❌</span>
                          <p className="text-slate-300">&quot;She <strong className="text-white">work</strong> at a restaurant.&quot; → <span className="text-green-400">She works at a restaurant.</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">❌</span>
                          <p className="text-slate-300">&quot;He <strong className="text-white">don&apos;t</strong> like pizza.&quot; → <span className="text-green-400">He doesn&apos;t like pizza.</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">❌</span>
                          <p className="text-slate-300">&quot;She <strong className="text-white">doesn&apos;t works</strong> here.&quot; → <span className="text-green-400">She doesn&apos;t work here.</span></p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Routine Vocabulary */}
                  <CurriculumBlock
                    icon={<Sunrise />}
                    title="Phase 2: Daily Routine Vocabulary"
                    subtitle="15 Minutes • Action Verb Arsenal"
                    methodology="Time-Block Association"
                    accentColor="emerald"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-amber-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-amber-500 flex items-center gap-2"><Sunrise className="w-3 h-3" /> Morning</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>Wake up • Get up • Take a shower</p>
                          <p>Get dressed • Have breakfast</p>
                          <p>Brush my teeth • Leave home</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-emerald-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-emerald-500 flex items-center gap-2"><Briefcase className="w-3 h-3" /> Work / Study</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>Arrive at work • Start my shift</p>
                          <p>Take a break • Have lunch</p>
                          <p>Finish work • Clock out</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-indigo-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-indigo-500 flex items-center gap-2"><Coffee className="w-3 h-3" /> Evening</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>Go home • Cook dinner</p>
                          <p>Watch TV • Check my phone</p>
                          <p>Go to bed • Fall asleep</p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Dialogues */}
                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 3: Routine Dialogues"
                    subtitle="20 Minutes • Contextual Shadowing"
                    methodology="Listen → Repeat → Vary"
                    accentColor="emerald"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-emerald-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-emerald-500 pl-2">Dialogue 1: Describing Your Day to a Coworker</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Mike:</strong> &quot;Hey, what time do you usually wake up?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-emerald-300">wake up</strong> at 6:30. I <strong className="text-emerald-300">take</strong> a quick shower and <strong className="text-emerald-300">leave</strong> home at 7:15.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Mike:</strong> &quot;Same here. I don&apos;t eat breakfast though.&quot;</p>
                            <p className="text-slate-400 italic">&quot;Really? I always <strong className="text-emerald-300">have</strong> a coffee and toast. I <strong className="text-red-300">don&apos;t</strong> skip breakfast.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-green-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-green-500 pl-2">Dialogue 2: Talking About a Friend</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Sarah:</strong> &quot;Tell me about your roommate.&quot;</p>
                            <p className="text-slate-400 italic">&quot;She <strong className="text-emerald-300">works</strong> at a coffee shop. She <strong className="text-emerald-300">starts</strong> at 5 AM, so she <strong className="text-emerald-300">goes</strong> to bed really early.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Sarah:</strong> &quot;Does she cook?&quot;</p>
                            <p className="text-slate-400 italic">&quot;No, she <strong className="text-red-300">doesn&apos;t</strong> cook. She always <strong className="text-emerald-300">orders</strong> delivery.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-teal-500 pl-2">Dialogue 3: A Boss Explaining Rules</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;Here is how things work. We <strong className="text-emerald-300">open</strong> at 8 AM. Everyone <strong className="text-emerald-300">clocks</strong> in on time.&quot;</p>
                            <p className="text-slate-400 italic">&quot;What time do we <strong className="text-emerald-300">finish</strong>?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;The shift <strong className="text-emerald-300">ends</strong> at 4 PM. We <strong className="text-red-300">don&apos;t</strong> allow phones on the floor.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Activity */}
                  <CurriculumBlock
                    icon={<PenTool />}
                    title="Phase 4: My Perfect Day Blueprint"
                    subtitle="15 Minutes • Creative Writing"
                    methodology="Timed Personal Narrative"
                    accentColor="emerald"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Each student writes 8 sentences describing their &quot;Perfect Work Day in the USA&quot; using Simple Present. Must include at least 2 negative sentences.
                    </p>
                    <div className="bg-emerald-900/10 rounded-xl p-5 border border-emerald-500/20">
                      <h4 className="text-emerald-400 font-bold text-sm mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Model Answer</h4>
                      <div className="text-xs text-slate-300 space-y-1 font-mono">
                        <p>1. I <strong className="text-white">wake up</strong> at 7:00 AM.</p>
                        <p>2. I <strong className="text-white">take</strong> a long shower.</p>
                        <p>3. I <strong className="text-white">eat</strong> pancakes for breakfast.</p>
                        <p>4. I <strong className="text-red-300">don&apos;t</strong> drive to work — I walk.</p>
                        <p>5. I <strong className="text-white">start</strong> my shift at 9:00 AM.</p>
                        <p>6. My boss <strong className="text-red-300">doesn&apos;t</strong> yell at us.</p>
                        <p>7. I <strong className="text-white">finish</strong> at 5:00 PM.</p>
                        <p>8. I <strong className="text-white">go</strong> to the beach after work.</p>
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
              {/* Left Column: Context */}
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-lime-500/10 text-green-400 border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">12</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Interviews</h2>
                      <p className="text-green-400 font-medium tracking-wide text-xs uppercase">Simple Present Q&A</p>
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
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">

                  {/* Theory: Question Formation */}
                  <CurriculumBlock
                    icon={<HelpCircle />}
                    title="Phase 1: Question Architecture"
                    subtitle="15 Minutes • Structural Mapping"
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
                          <p className="text-emerald-400 font-bold mb-1">Yes/No Questions</p>
                          <p className="text-slate-300 font-mono">Do you like your job?</p>
                          <p className="text-slate-300 font-mono">Does he live alone?</p>
                        </div>
                        <div className="bg-green-500/5 rounded-lg p-3 border border-green-500/10">
                          <p className="text-green-400 font-bold mb-1">Wh- Questions</p>
                          <p className="text-slate-300 font-mono">Where do you work?</p>
                          <p className="text-slate-300 font-mono">What does she study?</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20 mt-4">
                      <h4 className="text-red-400 font-bold text-sm mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Critical Errors</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">❌</span>
                          <p className="text-slate-300">&quot;Where <strong className="text-white">works</strong> she?&quot; → <span className="text-green-400">Where does she work?</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">❌</span>
                          <p className="text-slate-300">&quot;Does he <strong className="text-white">goes</strong> to the gym?&quot; → <span className="text-green-400">Does he go to the gym?</span></p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-400">❌</span>
                          <p className="text-slate-300">&quot;You like coffee?&quot; → <span className="text-green-400">Do you like coffee?</span></p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Interview Dialogues */}
                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Interview Simulations"
                    subtitle="25 Minutes • Conversational Pairs"
                    methodology="Active Q&A Drilling"
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
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-green-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-green-500 pl-2">Dialogue 2: Work Interview Simulation</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;<strong className="text-green-300">Do</strong> you have any experience in food service?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-emerald-300">work</strong> at a restaurant in my country. I <strong className="text-emerald-300">serve</strong> tables and <strong className="text-emerald-300">take</strong> orders.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;<strong className="text-green-300">Do</strong> you work well under pressure?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-emerald-300">do</strong>. I <strong className="text-emerald-300">handle</strong> stressful situations well.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-teal-500 pl-2">Dialogue 3: Talking About a Third Person</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;<strong className="text-teal-300">Does</strong> your brother live in the US too?&quot;</p>
                            <p className="text-slate-400 italic">&quot;No, he <strong className="text-red-300">doesn&apos;t</strong>. He <strong className="text-emerald-300">lives</strong> in Bogotá. He <strong className="text-emerald-300">studies</strong> engineering.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;<strong className="text-teal-300">Does</strong> he want to come here someday?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, he <strong className="text-emerald-300">does</strong>. He <strong className="text-emerald-300">plans</strong> to apply next year.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Activity: The Human Survey */}
                  <CurriculumBlock
                    icon={<Users />}
                    title="Phase 3: The Human Survey"
                    subtitle="20 Minutes • Active Classroom Movement"
                    methodology="Data Collection & Reporting"
                    accentColor="emerald"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Each student receives a survey card with 5 questions. They must stand up, interview 3 different classmates, and then report findings to the class using the third person.
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
                        <p>5. Do you exercise?</p>
                      </div>
                      <div className="bg-slate-950 p-3 border-t border-slate-700">
                        <p className="text-emerald-400 text-[10px] uppercase tracking-widest font-bold mb-1">Report Example:</p>
                        <p className="text-slate-400 italic">&quot;Maria wakes up at 7. She doesn&apos;t eat breakfast. She works at a hotel...&quot;</p>
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
        prevLabel="Hours 9 & 10"
        nextHref="/english-class/hours-13-14"
        nextLabel="Hours 13 & 14"
        accentColor="emerald"
      />
    </div>
  );
}
