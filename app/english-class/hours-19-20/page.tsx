"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  MessageSquareQuote,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  CloudLightning,
  Compass,
  Award,
  GraduationCap,
  Users,
  Briefcase,
  Star,
  Target,
  Mic2,
  Sparkles,
  Brain
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassHours19and20() {
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/30">
      <CurriculumHeader
        hourNumber="19 & 20"
        title="Possibilities &"
        subtitle="The Grand Integration"
        description="Explore uncertainty with may, might, and could. Then put all of Unit 2 together in a high-stakes mock interview that tests every tense and modal you've learned."
        accentColor="teal"
        moduleInfo="Unit 2: Exploring the World • Finale"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 19: Modals of Possibility */}
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
                      <h2 className="text-3xl font-bold text-white tracking-tight">Possibilities</h2>
                      <p className="text-teal-400 font-medium tracking-wide text-xs uppercase">May, Might & Could</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Life is uncertain. Weather, plans, outcomes — they all live in the world of &quot;maybe.&quot; MAY, MIGHT, and COULD let you navigate uncertainty with precision and politeness.
                  </p>

                  <CurriculumContext title="The Possibility Spectrum" accentColor="teal">
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-teal-500/20">
                        <p className="text-xs text-teal-400 font-bold uppercase mb-1">MAY = 50/50 possibility</p>
                        <p className="text-sm text-white font-mono">&quot;It <strong className="text-teal-300">may</strong> rain tomorrow.&quot;</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-cyan-500/20">
                        <p className="text-xs text-cyan-400 font-bold uppercase mb-1">MIGHT = Lower possibility</p>
                        <p className="text-sm text-white font-mono">&quot;I <strong className="text-cyan-300">might</strong> go to the party.&quot;</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-sky-500/20">
                        <p className="text-xs text-sky-400 font-bold uppercase mb-1">COULD = Possibility + Ability</p>
                        <p className="text-sm text-white font-mono">&quot;We <strong className="text-sky-300">could</strong> take the bus.&quot;</p>
                      </div>
                    </div>
                  </CurriculumContext>

                  <div className="bg-teal-500/10 rounded-xl p-5 border border-teal-500/20">
                    <h4 className="text-teal-400 font-bold text-xs uppercase mb-3 flex items-center gap-2"><Sparkles className="w-4 h-4" /> Polite Request Bonus</h4>
                    <div className="text-xs text-slate-300 space-y-2">
                      <p><strong className="text-teal-300">Could</strong> you repeat that, please?</p>
                      <p><strong className="text-teal-300">May</strong> I ask you a question?</p>
                      <p className="text-slate-500 italic mt-2">COULD is more polite than CAN for requests.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<BookOpen />}
                    title="Phase 1: Mapping Uncertainty"
                    subtitle="15 Minutes • Theory"
                    methodology="Probability Visual Scale"
                    accentColor="teal"
                  >
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mt-4">
                      <h4 className="text-white font-bold text-sm mb-4">The Certainty Meter</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
                            <div className="bg-green-500 h-4 rounded-full" style={{ width: "100%" }}></div>
                          </div>
                          <span className="text-green-400 text-xs font-bold min-w-[60px]">100%</span>
                          <span className="text-slate-300 text-xs min-w-[120px]">&quot;I <strong>will</strong> go.&quot;</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
                            <div className="bg-teal-500 h-4 rounded-full" style={{ width: "50%" }}></div>
                          </div>
                          <span className="text-teal-400 text-xs font-bold min-w-[60px]">50%</span>
                          <span className="text-slate-300 text-xs min-w-[120px]">&quot;I <strong>may</strong> go.&quot;</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
                            <div className="bg-cyan-500 h-4 rounded-full" style={{ width: "30%" }}></div>
                          </div>
                          <span className="text-cyan-400 text-xs font-bold min-w-[60px]">30%</span>
                          <span className="text-slate-300 text-xs min-w-[120px]">&quot;I <strong>might</strong> go.&quot;</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
                            <div className="bg-sky-500 h-4 rounded-full" style={{ width: "40%" }}></div>
                          </div>
                          <span className="text-sky-400 text-xs font-bold min-w-[60px]">40%</span>
                          <span className="text-slate-300 text-xs min-w-[120px]">&quot;I <strong>could</strong> go.&quot;</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
                            <div className="bg-red-500 h-4 rounded-full" style={{ width: "0%" }}></div>
                          </div>
                          <span className="text-red-400 text-xs font-bold min-w-[60px]">0%</span>
                          <span className="text-slate-300 text-xs min-w-[120px]">&quot;I <strong>won&apos;t</strong> go.&quot;</span>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Uncertainty Dialogues"
                    subtitle="25 Minutes • Contextual Practice"
                    methodology="Real-World Scenarios"
                    accentColor="teal"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-teal-500 pl-2">Dialogue 1: Weekend Plans</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;Are you coming to the beach on Saturday?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I&apos;m not sure. I <strong className="text-cyan-300">might</strong> have to work. But if I&apos;m free, I <strong className="text-teal-300">may</strong> go.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;We <strong className="text-sky-300">could</strong> also go on Sunday if Saturday doesn&apos;t work.&quot;</p>
                            <p className="text-slate-400 italic">&quot;That <strong className="text-teal-300">could</strong> work! Let me check my schedule.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-cyan-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-cyan-500 pl-2">Dialogue 2: Uncertain Weather</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Coworker:</strong> &quot;Should I bring an umbrella today?&quot;</p>
                            <p className="text-slate-400 italic">&quot;It <strong className="text-teal-300">may</strong> rain this afternoon, according to the forecast.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Coworker:</strong> &quot;Or it <strong className="text-cyan-300">might</strong> just be cloudy.&quot;</p>
                            <p className="text-slate-400 italic">&quot;You <strong className="text-sky-300">could</strong> keep an umbrella in your bag, just in case.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-sky-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-sky-500 pl-2">Dialogue 3: Polite Requests at Work</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Employee:</strong> &quot;<strong className="text-sky-300">Could</strong> you repeat those instructions, please?&quot;</p>
                            <p className="text-slate-400 italic"><strong className="text-white">Manager:</strong> &quot;Of course. First, clean the tables. Then check the inventory.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Employee:</strong> &quot;Thank you. <strong className="text-teal-300">May</strong> I ask — what time does inventory close?&quot;</p>
                            <p className="text-slate-400 italic"><strong className="text-white">Manager:</strong> &quot;It <strong className="text-cyan-300">might</strong> close at 8, but it <strong className="text-teal-300">could</strong> be earlier today.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<CloudLightning />}
                    title="Phase 3: The Fortune Teller"
                    subtitle="15 Minutes • Creative Game"
                    methodology="Prediction & Speculation"
                    accentColor="teal"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Each student writes 3 predictions about their classmates&apos; future (fun, lighthearted) using MAY, MIGHT, and COULD. Then they share with the class.
                    </p>
                    <div className="bg-teal-900/10 rounded-xl p-5 border border-teal-500/20">
                      <h4 className="text-teal-400 font-bold text-sm mb-3 flex items-center gap-2"><Star className="w-4 h-4" /> Example Predictions</h4>
                      <div className="text-xs text-slate-300 space-y-1 font-mono">
                        <p>&quot;Maria <strong className="text-teal-300">may</strong> become the best chef in Colorado.&quot;</p>
                        <p>&quot;Carlos <strong className="text-cyan-300">might</strong> fall in love at the beach.&quot;</p>
                        <p>&quot;The teacher <strong className="text-sky-300">could</strong> give us less homework... but probably won&apos;t.&quot;</p>
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
                      <h2 className="text-3xl font-bold text-white tracking-tight">Integration</h2>
                      <p className="text-cyan-400 font-medium tracking-wide text-xs uppercase">Milestone Review</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    The grand finale of Unit 2. Every tense, every modal, every structure — combined in a comprehensive mock interview. Can you switch between routines, live actions, abilities, obligations, advice, and possibilities without errors?
                  </p>

                  <CurriculumContext title="The Unit 2 Arsenal" accentColor="teal">
                    <div className="space-y-2 text-xs text-slate-300">
                      <p className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-400" /> <strong className="text-emerald-300">Simple Present:</strong> Routines, habits, facts</p>
                      <p className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-purple-400" /> <strong className="text-purple-300">CAN:</strong> Abilities, permissions</p>
                      <p className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-rose-400" /> <strong className="text-rose-300">Present Continuous:</strong> Right now</p>
                      <p className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-amber-400" /> <strong className="text-amber-300">Must / Have To:</strong> Obligations</p>
                      <p className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-yellow-400" /> <strong className="text-yellow-300">Should / Had Better:</strong> Advice</p>
                      <p className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-teal-400" /> <strong className="text-teal-300">May / Might / Could:</strong> Possibility</p>
                    </div>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Brain />}
                    title="Phase 1: Quick-Fire Review"
                    subtitle="15 Minutes • Warm-Up"
                    methodology="Tense Identification Sprint"
                    accentColor="teal"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Teacher reads a sentence; students identify the tense/modal and explain why.
                    </p>
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">&quot;I work at a hotel.&quot;</p>
                          <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold">Simple Present</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">&quot;She is cleaning right now.&quot;</p>
                          <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-400 text-xs font-bold">Present Continuous</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">&quot;I can drive a car.&quot;</p>
                          <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-xs font-bold">CAN — Ability</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">&quot;You have to wear a uniform.&quot;</p>
                          <span className="px-3 py-1 bg-amber-500/20 rounded-full text-amber-400 text-xs font-bold">HAVE TO — Obligation</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">&quot;You should see a doctor.&quot;</p>
                          <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-xs font-bold">SHOULD — Advice</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-slate-400">&quot;It might rain later.&quot;</p>
                          <span className="px-3 py-1 bg-teal-500/20 rounded-full text-teal-400 text-xs font-bold">MIGHT — Possibility</span>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Mic2 />}
                    title="Phase 2: The Comprehensive Mock Interview"
                    subtitle="30 Minutes • High-Stakes Simulation"
                    methodology="Full Integration Assessment"
                    accentColor="teal"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-teal-500/20 w-full mt-4">
                      <div className="bg-teal-900/30 p-4 border-b border-teal-500/20">
                        <h4 className="text-teal-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2"><Briefcase className="w-4 h-4" /> The J1 Employment Interview — Full Simulation</h4>
                        <p className="text-xs text-slate-400 mt-1">The teacher plays the employer. Each student is interviewed individually.</p>
                      </div>
                      <div className="p-5 space-y-5">

                        <div className="border-b border-slate-800 pb-4">
                          <p className="text-xs text-teal-400 font-bold uppercase mb-2 tracking-widest">Section 1: Routines (Simple Present)</p>
                          <div className="space-y-2 text-sm font-serif">
                            <p className="text-slate-300"><strong className="text-white">Employer:</strong> &quot;Tell me about your daily routine.&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-emerald-300">wake up</strong> at 6 AM. I <strong className="text-emerald-300">take</strong> a shower, <strong className="text-emerald-300">eat</strong> breakfast, and <strong className="text-emerald-300">leave</strong> home at 7. I usually <strong className="text-emerald-300">arrive</strong> 15 minutes early.&quot;</p>
                          </div>
                        </div>

                        <div className="border-b border-slate-800 pb-4">
                          <p className="text-xs text-purple-400 font-bold uppercase mb-2 tracking-widest">Section 2: Skills (CAN)</p>
                          <div className="space-y-2 text-sm font-serif">
                            <p className="text-slate-300"><strong className="text-white">Employer:</strong> &quot;What can you do for us?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-purple-300">can</strong> cook, I <strong className="text-purple-300">can</strong> work with customers, and I <strong className="text-purple-300">can</strong> speak both Spanish and English. I <strong className="text-red-300">can&apos;t</strong> drive, but I <strong className="text-purple-300">can</strong> take the bus.&quot;</p>
                          </div>
                        </div>

                        <div className="border-b border-slate-800 pb-4">
                          <p className="text-xs text-rose-400 font-bold uppercase mb-2 tracking-widest">Section 3: Right Now (Present Continuous)</p>
                          <div className="space-y-2 text-sm font-serif">
                            <p className="text-slate-300"><strong className="text-white">Employer:</strong> &quot;What are you currently doing to prepare for this job?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-rose-300">am studying</strong> English every day. I <strong className="text-rose-300">am also learning</strong> about the local area.&quot;</p>
                          </div>
                        </div>

                        <div className="border-b border-slate-800 pb-4">
                          <p className="text-xs text-amber-400 font-bold uppercase mb-2 tracking-widest">Section 4: Rules (Must / Have To)</p>
                          <div className="space-y-2 text-sm font-serif">
                            <p className="text-slate-300"><strong className="text-white">Employer:</strong> &quot;Do you understand our rules?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes. I <strong className="text-amber-300">have to</strong> arrive on time. I <strong className="text-red-300">must not</strong> use my phone during work. I <strong className="text-yellow-300">don&apos;t have to</strong> bring my own uniform — the company provides it.&quot;</p>
                          </div>
                        </div>

                        <div className="border-b border-slate-800 pb-4">
                          <p className="text-xs text-yellow-400 font-bold uppercase mb-2 tracking-widest">Section 5: Problem Solving (Should / Had Better)</p>
                          <div className="space-y-2 text-sm font-serif">
                            <p className="text-slate-300"><strong className="text-white">Employer:</strong> &quot;What would you do if a coworker was rude to you?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-yellow-300">should</strong> stay calm and not react emotionally. I <strong className="text-yellow-300">should</strong> talk to them privately first. If it continues, I&apos;d <strong className="text-orange-300">better</strong> report it to a supervisor.&quot;</p>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs text-teal-400 font-bold uppercase mb-2 tracking-widest">Section 6: Future Plans (May / Might / Could)</p>
                          <div className="space-y-2 text-sm font-serif">
                            <p className="text-slate-300"><strong className="text-white">Employer:</strong> &quot;What are your plans after the program?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-teal-300">may</strong> apply for a second season. I <strong className="text-cyan-300">might</strong> also try a different state. I <strong className="text-sky-300">could</strong> use this experience to get a better job back home.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Target />}
                    title="Phase 3: The Pressure Test"
                    subtitle="15 Minutes • Rapid Assessment"
                    methodology="Error Correction Under Stress"
                    accentColor="teal"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Teacher fires rapid questions mixing ALL tenses and modals. Students must answer in complete sentences. Wrong tense = buzzer sound. Goal: survive 10 questions without a critical grammar error.
                    </p>
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                          <span className="text-teal-400 font-bold text-xs">Q1</span>
                          <p className="text-slate-400">&quot;What do you do for a living?&quot; <span className="text-slate-600">(Simple Present)</span></p>
                        </div>
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                          <span className="text-teal-400 font-bold text-xs">Q2</span>
                          <p className="text-slate-400">&quot;What are you doing right now?&quot; <span className="text-slate-600">(Pres. Continuous)</span></p>
                        </div>
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                          <span className="text-teal-400 font-bold text-xs">Q3</span>
                          <p className="text-slate-400">&quot;Can you swim?&quot; <span className="text-slate-600">(CAN)</span></p>
                        </div>
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                          <span className="text-teal-400 font-bold text-xs">Q4</span>
                          <p className="text-slate-400">&quot;What do you have to do at your job?&quot; <span className="text-slate-600">(HAVE TO)</span></p>
                        </div>
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                          <span className="text-teal-400 font-bold text-xs">Q5</span>
                          <p className="text-slate-400">&quot;Your friend is sick. What should he do?&quot; <span className="text-slate-600">(SHOULD)</span></p>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-teal-400 font-bold text-xs">Q6</span>
                          <p className="text-slate-400">&quot;What might you do next weekend?&quot; <span className="text-slate-600">(MIGHT)</span></p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Unit 2 Graduation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center py-16 mb-12"
          >
            <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/5 rounded-3xl p-12 border border-teal-500/20 max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <GraduationCap className="w-16 h-16 text-teal-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Unit 2 Complete 🎉</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  You can now talk about your routines, describe what&apos;s happening right now, express abilities and permissions, discuss rules and obligations, give advice, and navigate uncertainty. You are ready for the next Unit.
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-xs">
                  <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-400 border border-emerald-500/20">Simple Present ✓</span>
                  <span className="px-3 py-1 bg-rose-500/20 rounded-full text-rose-400 border border-rose-500/20">Present Continuous ✓</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 border border-purple-500/20">CAN ✓</span>
                  <span className="px-3 py-1 bg-amber-500/20 rounded-full text-amber-400 border border-amber-500/20">Must / Have To ✓</span>
                  <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 border border-yellow-500/20">Should / Had Better ✓</span>
                  <span className="px-3 py-1 bg-teal-500/20 rounded-full text-teal-400 border border-teal-500/20">May / Might / Could ✓</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <CurriculumNavigation
        prevHref="/english-class/hours-17-18"
        prevLabel="Hours 17 & 18"
        nextHref="/english-class/hours-21-22"
        nextLabel="Unit 3 →"
        accentColor="teal"
      />
    </div>
  );
}
