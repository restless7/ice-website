"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  MessageSquareQuote,
  AlertTriangle,
  CheckCircle,
  ShieldCheck,
  Scale,
  Gavel,
  Stethoscope,
  BriefcaseMedical,
  Users,
  HelpCircle,
  Lightbulb,
  HeartPulse,
  ThumbsUp,
  ArrowLeftRight,
  Flame
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassHours17and18() {
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30">
      <CurriculumHeader
        hourNumber="17 & 18"
        title="Rules & Advice"
        subtitle="Obligation & Suggestion"
        description="Master the modal verbs of obligation (must, have to) and suggestion (should, had better). Navigate workplace rules, employee handbooks, and peer-to-peer advice giving."
        accentColor="amber"
        moduleInfo="Unit 2: Exploring the World • Part 4"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 17: Rules of the Job */}
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
                      <span className="text-2xl font-bold">17</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Obligation</h2>
                      <p className="text-amber-400 font-medium tracking-wide text-xs uppercase">Must & Have To</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Every workplace has rules. You <strong className="text-white">must</strong> follow them. You <strong className="text-white">have to</strong> wear a uniform. Understanding obligation modals is survival English.
                  </p>

                  <CurriculumContext title="MUST vs HAVE TO" accentColor="amber">
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-amber-500/20">
                        <p className="text-xs text-amber-400 font-bold uppercase mb-1">MUST = Internal / Authority</p>
                        <p className="text-sm text-white font-mono">&quot;I <strong className="text-amber-300">must</strong> study harder.&quot;</p>
                        <p className="text-xs text-slate-500 italic">The speaker feels this is necessary.</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-yellow-500/20">
                        <p className="text-xs text-yellow-400 font-bold uppercase mb-1">HAVE TO = External / Rules</p>
                        <p className="text-sm text-white font-mono">&quot;I <strong className="text-yellow-300">have to</strong> wear a uniform.&quot;</p>
                        <p className="text-xs text-slate-500 italic">The rules demand it.</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-3 italic border-l-2 border-amber-500 pl-2">
                      In practice, native speakers use HAVE TO much more than MUST in conversation. MUST sounds very formal or bossy.
                    </p>
                  </CurriculumContext>

                  <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20">
                    <h4 className="text-red-400 font-bold text-xs uppercase mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Negation Warning</h4>
                    <div className="text-xs text-slate-300 space-y-2">
                      <p><strong className="text-red-300">MUST NOT</strong> = Prohibited! Forbidden!</p>
                      <p className="font-mono">&quot;You must not smoke here.&quot;</p>
                      <p className="mt-2"><strong className="text-yellow-300">DON&apos;T HAVE TO</strong> = Not necessary (optional).</p>
                      <p className="font-mono">&quot;You don&apos;t have to wear a tie.&quot;</p>
                      <p className="mt-2 bg-red-500/20 p-2 rounded text-red-300 font-bold">These are NOT the same! This is a critical error.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Gavel />}
                    title="Phase 1: Workplace Rules Board"
                    subtitle="15 Minutes • Vocabulary Activation"
                    methodology="Employee Handbook Simulation"
                    accentColor="amber"
                  >
                    <div className="bg-slate-900 border border-amber-500/20 rounded-xl overflow-hidden mt-4">
                      <div className="bg-amber-900/30 p-3 border-b border-amber-500/20">
                        <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">🏨 Hotel Employee Handbook — Rules</span>
                      </div>
                      <div className="p-5 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-green-400 font-bold text-xs uppercase mb-2 flex items-center gap-2"><CheckCircle className="w-3 h-3" /> You MUST / HAVE TO:</h4>
                            <ul className="text-sm text-slate-300 space-y-2">
                              <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Arrive 10 minutes early.</li>
                              <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Wear your uniform at all times.</li>
                              <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Greet every guest with a smile.</li>
                              <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Report any problems to a supervisor.</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-red-400 font-bold text-xs uppercase mb-2 flex items-center gap-2"><AlertTriangle className="w-3 h-3" /> You MUST NOT:</h4>
                            <ul className="text-sm text-slate-300 space-y-2">
                              <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Use your phone on the floor.</li>
                              <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Eat in front of guests.</li>
                              <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Leave early without permission.</li>
                              <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Share guest information.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20 mt-2">
                          <h4 className="text-yellow-400 font-bold text-xs uppercase mb-1">You DON&apos;T HAVE TO (Optional):</h4>
                          <p className="text-sm text-slate-300">Park in the employee lot — you can take the bus. Bring your own lunch — there is a cafeteria.</p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Obligation Dialogues"
                    subtitle="25 Minutes • Contextual Practice"
                    methodology="Industry-Specific Scenarios"
                    accentColor="amber"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-amber-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-amber-500 pl-2">Dialogue 1: First Day Orientation</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Supervisor:</strong> &quot;Welcome. First, you <strong className="text-amber-300">have to</strong> sign these forms.&quot;</p>
                            <p className="text-slate-400 italic">&quot;Okay. Do I <strong className="text-amber-300">have to</strong> wear this name tag?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Supervisor:</strong> &quot;Yes, you <strong className="text-amber-300">must</strong> wear it at all times. And you <strong className="text-red-300">must not</strong> lose it.&quot;</p>
                            <p className="text-slate-400 italic">&quot;Understood. Do I <strong className="text-amber-300">have to</strong> bring my own lunch?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Supervisor:</strong> &quot;No, you <strong className="text-yellow-300">don&apos;t have to</strong>. We provide meals for staff.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-yellow-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-yellow-500 pl-2">Dialogue 2: Discussing Visa Rules</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;What <strong className="text-amber-300">do</strong> you <strong className="text-amber-300">have to</strong> do for your J1 visa?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-amber-300">have to</strong> work at the assigned employer. I <strong className="text-red-300">must not</strong> work at unauthorized jobs.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;Do you <strong className="text-amber-300">have to</strong> report to someone?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-amber-300">have to</strong> check in with my sponsor every month.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-orange-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-orange-500 pl-2">Dialogue 3: Roommate Agreement</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Roommate:</strong> &quot;Okay, house rules. We <strong className="text-amber-300">have to</strong> keep the kitchen clean.&quot;</p>
                            <p className="text-slate-400 italic">&quot;Of course. Do we <strong className="text-amber-300">have to</strong> take turns with the dishes?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Roommate:</strong> &quot;Yes. And we <strong className="text-red-300">must not</strong> make noise after 10 PM. The landlord is strict.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<ShieldCheck />}
                    title="Phase 3: The Compliance Quiz"
                    subtitle="15 Minutes • Assessment"
                    methodology="Real-World Scenario Evaluation"
                    accentColor="amber"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Teacher reads workplace scenarios. Students must respond with the correct modal: MUST, MUST NOT, HAVE TO, or DON&apos;T HAVE TO.
                    </p>
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">1. Wearing gloves in the kitchen?</p>
                          <span className="px-3 py-1 bg-amber-500/20 rounded-full text-amber-400 text-xs font-bold">have to</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">2. Smoking inside the building?</p>
                          <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-xs font-bold">must not</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">3. Bringing your own coffee mug?</p>
                          <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-xs font-bold">don&apos;t have to</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">4. Calling in sick before your shift?</p>
                          <span className="px-3 py-1 bg-amber-500/20 rounded-full text-amber-400 text-xs font-bold">have to</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-slate-400">5. Sharing your password with coworkers?</p>
                          <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-xs font-bold">must not</span>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 18: Giving Advice */}
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
                      <span className="text-2xl font-bold">18</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Advice</h2>
                      <p className="text-yellow-400 font-medium tracking-wide text-xs uppercase">Should & Had Better</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Your friend lost their passport. Your coworker feels sick. A classmate missed the bus. What do you say? SHOULD and HAD BETTER are your tools for giving advice.
                  </p>

                  <CurriculumContext title="SHOULD vs HAD BETTER" accentColor="amber">
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-yellow-500/20">
                        <p className="text-xs text-yellow-400 font-bold uppercase mb-1">SHOULD = Friendly Advice</p>
                        <p className="text-sm text-white font-mono">&quot;You <strong className="text-yellow-300">should</strong> see a doctor.&quot;</p>
                        <p className="text-xs text-slate-500 italic">This is my recommendation. It&apos;s up to you.</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-orange-500/20">
                        <p className="text-xs text-orange-400 font-bold uppercase mb-1">HAD BETTER = Strong Warning</p>
                        <p className="text-sm text-white font-mono">&quot;You&apos;d <strong className="text-orange-300">better</strong> see a doctor.&quot;</p>
                        <p className="text-xs text-slate-500 italic">If you don&apos;t, something bad will happen.</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-3 italic border-l-2 border-amber-500 pl-2">
                      HAD BETTER is stronger than SHOULD. It implies a negative consequence. &quot;You&apos;d better not be late&quot; = there will be trouble if you are.
                    </p>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Scale />}
                    title="Phase 1: The Advice Intensity Scale"
                    subtitle="15 Minutes • Theory"
                    methodology="Gradient Understanding"
                    accentColor="amber"
                  >
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mt-4">
                      <div className="flex flex-col space-y-3 text-sm">
                        <div className="flex items-center gap-4 bg-green-500/10 p-3 rounded-lg border border-green-500/10">
                          <span className="text-green-400 text-2xl">💡</span>
                          <div>
                            <p className="text-green-400 font-bold text-xs uppercase">Mild — COULD</p>
                            <p className="text-slate-300 font-mono">&quot;You <strong className="text-green-300">could</strong> try the coffee shop on Main Street.&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/10">
                          <span className="text-yellow-400 text-2xl">👍</span>
                          <div>
                            <p className="text-yellow-400 font-bold text-xs uppercase">Medium — SHOULD</p>
                            <p className="text-slate-300 font-mono">&quot;You <strong className="text-yellow-300">should</strong> call the embassy today.&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 bg-orange-500/10 p-3 rounded-lg border border-orange-500/10">
                          <span className="text-orange-400 text-2xl">⚠️</span>
                          <div>
                            <p className="text-orange-400 font-bold text-xs uppercase">Strong — HAD BETTER</p>
                            <p className="text-slate-300 font-mono">&quot;You&apos;d <strong className="text-orange-300">better</strong> call the embassy NOW.&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 bg-red-500/10 p-3 rounded-lg border border-red-500/10">
                          <span className="text-red-400 text-2xl">🚨</span>
                          <div>
                            <p className="text-red-400 font-bold text-xs uppercase">Maximum — MUST</p>
                            <p className="text-slate-300 font-mono">&quot;You <strong className="text-red-300">must</strong> call the embassy immediately!&quot;</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Advice Dialogues"
                    subtitle="25 Minutes • Peer Problem-Solving"
                    methodology="Context-Driven Roleplay"
                    accentColor="amber"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-yellow-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-yellow-500 pl-2">Dialogue 1: Lost Passport</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Student A:</strong> &quot;Oh no, I can&apos;t find my passport anywhere!&quot;</p>
                            <p className="text-slate-400 italic">&quot;Calm down. You <strong className="text-yellow-300">should</strong> check your bag again. If it&apos;s not there, you&apos;d <strong className="text-orange-300">better</strong> call your sponsor immediately.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Student A:</strong> &quot;What if I really lost it?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Then you <strong className="text-yellow-300">should</strong> go to the embassy. You <strong className="text-yellow-300">shouldn&apos;t</strong> wait too long.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-orange-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-orange-500 pl-2">Dialogue 2: Feeling Sick at Work</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Coworker:</strong> &quot;I don&apos;t feel well. My head hurts and I feel hot.&quot;</p>
                            <p className="text-slate-400 italic">&quot;You <strong className="text-yellow-300">should</strong> tell the manager. You <strong className="text-yellow-300">shouldn&apos;t</strong> keep working if you have a fever.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Coworker:</strong> &quot;But I&apos;m afraid of losing my job.&quot;</p>
                            <p className="text-slate-400 italic">&quot;You&apos;d <strong className="text-orange-300">better</strong> go home. Your health is more important. You <strong className="text-yellow-300">should</strong> see a doctor today.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-amber-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-amber-500 pl-2">Dialogue 3: Money Problems</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;I spent all my money this week. I have nothing left.&quot;</p>
                            <p className="text-slate-400 italic">&quot;You <strong className="text-yellow-300">should</strong> make a budget. You <strong className="text-yellow-300">shouldn&apos;t</strong> eat out every day.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;I know, but groceries are expensive.&quot;</p>
                            <p className="text-slate-400 italic">&quot;You&apos;d <strong className="text-orange-300">better</strong> find a cheaper store. You <strong className="text-yellow-300">should</strong> also cook at home more.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<HeartPulse />}
                    title="Phase 3: The Advice Hotline"
                    subtitle="20 Minutes • Interactive Pairs"
                    methodology="Random Problem Generator"
                    accentColor="amber"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Students draw a &quot;Problem Card&quot; and must give advice to their partner using at least one SHOULD, one SHOULDN&apos;T, and one HAD BETTER.
                    </p>
                    <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden font-mono text-xs">
                      <div className="bg-amber-900/30 p-3 border-b border-slate-700">
                        <span className="text-amber-400 font-bold uppercase">Problem Cards</span>
                      </div>
                      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
                        <div className="bg-slate-950 p-3 rounded-lg border border-amber-500/10">
                          <p className="text-amber-400 text-[10px] uppercase font-bold mb-1">🛂 Card #1</p>
                          <p>&quot;My visa expires in 2 weeks and I haven&apos;t booked my flight home.&quot;</p>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-lg border border-yellow-500/10">
                          <p className="text-yellow-400 text-[10px] uppercase font-bold mb-1">🤕 Card #2</p>
                          <p>&quot;I hurt my back at work but I&apos;m scared to tell my manager.&quot;</p>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-lg border border-orange-500/10">
                          <p className="text-orange-400 text-[10px] uppercase font-bold mb-1">💔 Card #3</p>
                          <p>&quot;My roommate never cleans and I&apos;m getting frustrated.&quot;</p>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-lg border border-red-500/10">
                          <p className="text-red-400 text-[10px] uppercase font-bold mb-1">🧊 Card #4</p>
                          <p>&quot;It&apos;s -10°C and I only brought summer clothes.&quot;</p>
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
        prevHref="/english-class/hours-15-16"
        prevLabel="Hours 15 & 16"
        nextHref="/english-class/hours-19-20"
        nextLabel="Hours 19 & 20"
        accentColor="amber"
      />
    </div>
  );
}
