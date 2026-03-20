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
  Users,
  HelpCircle,
  Lightbulb,
  HeartPulse,
  ArrowLeftRight,
  Flame,
  Briefcase
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
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30">
      <CurriculumHeader
        hourNumber="17 &amp; 18"
        title="Rules &amp; Advice"
        subtitle="Obligation &amp; Suggestion"
        description="Master the modal verbs of obligation (must, have to) and suggestion (should, had better). Navigate workplace rules, employee handbooks, and peer-to-peer advice giving."
        accentColor="amber"
        moduleInfo="Unit 2: Exploring the World &bull; Part 4"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 17 */}
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
                      <p className="text-amber-400 font-medium tracking-wide text-xs uppercase">Must &amp; Have To</p>
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
                      In conversation, native speakers use HAVE TO much more than MUST. MUST sounds very formal or bossy.
                    </p>
                  </CurriculumContext>

                  <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20">
                    <h4 className="text-red-400 font-bold text-xs uppercase mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Critical Negation Warning</h4>
                    <div className="text-xs text-slate-300 space-y-2">
                      <p><strong className="text-red-300">MUST NOT</strong> = Prohibited! Forbidden!</p>
                      <p className="font-mono">&quot;You must not smoke here.&quot;</p>
                      <p className="mt-2"><strong className="text-yellow-300">DON&apos;T HAVE TO</strong> = Not necessary (optional).</p>
                      <p className="font-mono">&quot;You don&apos;t have to wear a tie.&quot;</p>
                      <p className="mt-2 bg-red-500/20 p-2 rounded text-red-300 font-bold">These are NOT the same! This is the #1 modal error.</p>
                    </div>
                  </div>

                  <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/20">
                    <h4 className="text-amber-400 font-bold text-xs uppercase mb-3">Question Forms</h4>
                    <div className="text-xs text-slate-300 space-y-1 font-mono">
                      <p><strong className="text-amber-300">Do</strong> I <strong className="text-amber-300">have to</strong> wear a uniform?</p>
                      <p><strong className="text-amber-300">Does</strong> she <strong className="text-amber-300">have to</strong> work weekends?</p>
                      <p><strong className="text-amber-300">Do</strong> they <strong className="text-amber-300">have to</strong> clock in?</p>
                      <p className="text-slate-500 italic mt-1">MUST questions are rare in conversation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Gavel />}
                    title="Phase 1: Workplace Rules Board"
                    subtitle="15 Minutes &bull; Vocabulary Activation"
                    methodology="Employee Handbook Simulation"
                    accentColor="amber"
                  >
                    <div className="bg-slate-900 border border-amber-500/20 rounded-xl overflow-hidden mt-4">
                      <div className="bg-amber-900/30 p-3 border-b border-amber-500/20">
                        <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">Hotel Employee Handbook &mdash; Rules</span>
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
                              <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Wash your hands before handling food.</li>
                              <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Clock in and out on time.</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-red-400 font-bold text-xs uppercase mb-2 flex items-center gap-2"><AlertTriangle className="w-3 h-3" /> You MUST NOT:</h4>
                            <ul className="text-sm text-slate-300 space-y-2">
                              <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Use your phone on the floor.</li>
                              <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Eat in front of guests.</li>
                              <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Leave early without permission.</li>
                              <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Share guest information.</li>
                              <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Be rude to customers.</li>
                              <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Take photos of guests.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20 mt-2">
                          <h4 className="text-yellow-400 font-bold text-xs uppercase mb-1">You DON&apos;T HAVE TO (Optional):</h4>
                          <ul className="text-sm text-slate-300 space-y-1">
                            <li>&bull; Park in the employee lot &mdash; you can take the bus.</li>
                            <li>&bull; Bring your own lunch &mdash; there is a cafeteria.</li>
                            <li>&bull; Speak a second language &mdash; but it helps.</li>
                            <li>&bull; Work on holidays &mdash; it&apos;s voluntary with extra pay.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/20 mt-4">
                      <h4 className="text-amber-400 font-bold text-sm mb-3">Quick Sentence Builder: 14 Examples</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                        <p>1. I <strong className="text-amber-300">have to</strong> work on Saturday.</p>
                        <p>2. She <strong className="text-amber-300">has to</strong> wear a hairnet.</p>
                        <p>3. You <strong className="text-red-300">must not</strong> be late again.</p>
                        <p>4. We <strong className="text-yellow-300">don&apos;t have to</strong> work tomorrow.</p>
                        <p>5. He <strong className="text-amber-300">has to</strong> call his sponsor.</p>
                        <p>6. I <strong className="text-amber-300">must</strong> finish this report today.</p>
                        <p>7. They <strong className="text-yellow-300">don&apos;t have to</strong> bring tools.</p>
                        <p>8. You <strong className="text-red-300">must not</strong> park here.</p>
                        <p>9. <strong className="text-amber-300">Do</strong> I <strong className="text-amber-300">have to</strong> sign this form?</p>
                        <p>10. <strong className="text-amber-300">Does</strong> she <strong className="text-amber-300">have to</strong> wear gloves?</p>
                        <p>11. They <strong className="text-amber-300">have to</strong> pass a safety test.</p>
                        <p>12. You <strong className="text-yellow-300">don&apos;t have to</strong> tip in this country.</p>
                        <p>13. I <strong className="text-amber-300">have to</strong> renew my visa soon.</p>
                        <p>14. She <strong className="text-red-300">must not</strong> serve alcohol to minors.</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Obligation Dialogues"
                    subtitle="25 Minutes &bull; Contextual Practice"
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
                            <p className="text-slate-400 italic">&quot;Great. What time do I <strong className="text-amber-300">have to</strong> be here tomorrow?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Supervisor:</strong> &quot;You <strong className="text-amber-300">have to</strong> be here by 7:45 AM.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-yellow-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-yellow-500 pl-2">Dialogue 2: Discussing Visa Rules</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;What <strong className="text-amber-300">do</strong> you <strong className="text-amber-300">have to</strong> do for your J1 visa?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-amber-300">have to</strong> work at the assigned employer. I <strong className="text-red-300">must not</strong> work at unauthorized jobs.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;Do you <strong className="text-amber-300">have to</strong> report to someone?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-amber-300">have to</strong> check in with my sponsor every month. I also <strong className="text-amber-300">have to</strong> keep my visa active at all times.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;Do you <strong className="text-amber-300">have to</strong> leave by a certain date?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-amber-300">must</strong> leave before my visa expires. I <strong className="text-red-300">must not</strong> overstay.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-orange-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-orange-500 pl-2">Dialogue 3: Roommate Agreement</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Roommate:</strong> &quot;Okay, house rules. We <strong className="text-amber-300">have to</strong> keep the kitchen clean.&quot;</p>
                            <p className="text-slate-400 italic">&quot;Of course. Do we <strong className="text-amber-300">have to</strong> take turns with the dishes?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Roommate:</strong> &quot;Yes. And we <strong className="text-red-300">must not</strong> make noise after 10 PM. The landlord is strict.&quot;</p>
                            <p className="text-slate-400 italic">&quot;What about guests? Do we <strong className="text-amber-300">have to</strong> ask permission?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Roommate:</strong> &quot;You <strong className="text-yellow-300">don&apos;t have to</strong> ask, but you <strong className="text-amber-300">have to</strong> tell me so I know.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-red-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-red-500 pl-2">Dialogue 4: Kitchen Safety Training</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Chef:</strong> &quot;In this kitchen, you <strong className="text-amber-300">have to</strong> wear non-slip shoes. You <strong className="text-red-300">must not</strong> wear sandals.&quot;</p>
                            <p className="text-slate-400 italic">&quot;Do I <strong className="text-amber-300">have to</strong> wear a hat?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Chef:</strong> &quot;Yes, you <strong className="text-amber-300">must</strong> wear a hair net or a cap. And you <strong className="text-amber-300">have to</strong> wash your hands every 30 minutes.&quot;</p>
                            <p className="text-slate-400 italic">&quot;What about cuts? What do I <strong className="text-amber-300">have to</strong> do if I cut myself?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Chef:</strong> &quot;You <strong className="text-amber-300">have to</strong> report it immediately and use a blue bandage. You <strong className="text-red-300">must not</strong> continue working with an open wound.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-teal-500 pl-2">Dialogue 5: Driving Laws</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;If you want to drive here, you <strong className="text-amber-300">have to</strong> get an international license or a state ID.&quot;</p>
                            <p className="text-slate-400 italic">&quot;Do I <strong className="text-amber-300">have to</strong> take a test?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;Yes. You also <strong className="text-amber-300">have to</strong> have car insurance. You <strong className="text-red-300">must not</strong> drive without it &mdash; it&apos;s illegal.&quot;</p>
                            <p className="text-slate-400 italic">&quot;And seatbelts?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;Everyone <strong className="text-amber-300">must</strong> wear a seatbelt. You <strong className="text-red-300">must not</strong> use your phone while driving.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<ShieldCheck />}
                    title="Phase 3: The Compliance Quiz"
                    subtitle="15 Minutes &bull; Assessment"
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
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">5. Sharing your password with coworkers?</p>
                          <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-xs font-bold">must not</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">6. Using your personal phone for work?</p>
                          <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-xs font-bold">don&apos;t have to</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">7. Attending the safety meeting tomorrow?</p>
                          <span className="px-3 py-1 bg-amber-500/20 rounded-full text-amber-400 text-xs font-bold">have to</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-slate-400">8. Drinking alcohol during your shift?</p>
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
                      <p className="text-yellow-400 font-medium tracking-wide text-xs uppercase">Should &amp; Had Better</p>
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
                      HAD BETTER is stronger than SHOULD. It implies a negative consequence. &quot;You&apos;d better not be late&quot; = there will be trouble.
                    </p>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Scale />}
                    title="Phase 1: The Advice Intensity Scale"
                    subtitle="15 Minutes &bull; Theory"
                    methodology="Gradient Understanding"
                    accentColor="amber"
                  >
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mt-4">
                      <div className="flex flex-col space-y-3 text-sm">
                        <div className="flex items-center gap-4 bg-green-500/10 p-3 rounded-lg border border-green-500/10">
                          <span className="text-green-400 text-2xl">&#128161;</span>
                          <div>
                            <p className="text-green-400 font-bold text-xs uppercase">Mild &mdash; COULD</p>
                            <p className="text-slate-300 font-mono">&quot;You <strong className="text-green-300">could</strong> try the coffee shop on Main Street.&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/10">
                          <span className="text-yellow-400 text-2xl">&#128077;</span>
                          <div>
                            <p className="text-yellow-400 font-bold text-xs uppercase">Medium &mdash; SHOULD</p>
                            <p className="text-slate-300 font-mono">&quot;You <strong className="text-yellow-300">should</strong> call the embassy today.&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 bg-orange-500/10 p-3 rounded-lg border border-orange-500/10">
                          <span className="text-orange-400 text-2xl">&#9888;&#65039;</span>
                          <div>
                            <p className="text-orange-400 font-bold text-xs uppercase">Strong &mdash; HAD BETTER</p>
                            <p className="text-slate-300 font-mono">&quot;You&apos;d <strong className="text-orange-300">better</strong> call the embassy NOW.&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 bg-red-500/10 p-3 rounded-lg border border-red-500/10">
                          <span className="text-red-400 text-2xl">&#128680;</span>
                          <div>
                            <p className="text-red-400 font-bold text-xs uppercase">Maximum &mdash; MUST</p>
                            <p className="text-slate-300 font-mono">&quot;You <strong className="text-red-300">must</strong> call the embassy immediately!&quot;</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/20 mt-4">
                      <h4 className="text-amber-400 font-bold text-sm mb-3">Quick Advice Builder: 12 Examples</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                        <p>1. You <strong className="text-yellow-300">should</strong> drink more water.</p>
                        <p>2. You <strong className="text-yellow-300">shouldn&apos;t</strong> skip meals.</p>
                        <p>3. She <strong className="text-yellow-300">should</strong> call her family.</p>
                        <p>4. He <strong className="text-yellow-300">shouldn&apos;t</strong> walk alone at night.</p>
                        <p>5. You&apos;d <strong className="text-orange-300">better</strong> not miss that flight.</p>
                        <p>6. She&apos;d <strong className="text-orange-300">better</strong> rest today.</p>
                        <p>7. You <strong className="text-yellow-300">should</strong> learn to cook.</p>
                        <p>8. They <strong className="text-yellow-300">shouldn&apos;t</strong> spend so much.</p>
                        <p>9. You&apos;d <strong className="text-orange-300">better</strong> apologize to the boss.</p>
                        <p>10. He <strong className="text-yellow-300">should</strong> save money for emergencies.</p>
                        <p>11. You <strong className="text-yellow-300">shouldn&apos;t</strong> eat that much sugar.</p>
                        <p>12. We&apos;d <strong className="text-orange-300">better</strong> leave early; traffic is bad.</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Advice Dialogues"
                    subtitle="25 Minutes &bull; Peer Problem-Solving"
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
                            <p className="text-slate-400 italic">&quot;Then you <strong className="text-yellow-300">should</strong> go to the embassy. You <strong className="text-yellow-300">shouldn&apos;t</strong> wait too long. You&apos;d <strong className="text-orange-300">better</strong> go tomorrow.&quot;</p>
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

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-amber-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-amber-500 pl-2">Dialogue 3: Money Problems</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;I spent all my money this week. I have nothing left.&quot;</p>
                            <p className="text-slate-400 italic">&quot;You <strong className="text-yellow-300">should</strong> make a budget. You <strong className="text-yellow-300">shouldn&apos;t</strong> eat out every day.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;I know, but groceries are expensive.&quot;</p>
                            <p className="text-slate-400 italic">&quot;You&apos;d <strong className="text-orange-300">better</strong> find a cheaper store. You <strong className="text-yellow-300">should</strong> also cook at home more. You <strong className="text-green-300">could</strong> share meals with your roommate.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-red-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-red-500 pl-2">Dialogue 4: Problems with the Boss</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;My boss yelled at me in front of everyone. I want to quit.&quot;</p>
                            <p className="text-slate-400 italic">&quot;You <strong className="text-yellow-300">shouldn&apos;t</strong> quit without thinking. You <strong className="text-yellow-300">should</strong> talk to them privately first.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;I&apos;m too angry to talk right now.&quot;</p>
                            <p className="text-slate-400 italic">&quot;You <strong className="text-yellow-300">should</strong> wait until tomorrow when you&apos;re calm. But if it keeps happening, you&apos;d <strong className="text-orange-300">better</strong> report it to HR or your sponsor.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-teal-500 pl-2">Dialogue 5: Homesickness</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Classmate:</strong> &quot;I miss home so much. I feel so lonely.&quot;</p>
                            <p className="text-slate-400 italic">&quot;I understand. You <strong className="text-yellow-300">should</strong> video call your family tonight. You <strong className="text-yellow-300">shouldn&apos;t</strong> keep your feelings inside.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Classmate:</strong> &quot;I don&apos;t know anyone here.&quot;</p>
                            <p className="text-slate-400 italic">&quot;You <strong className="text-yellow-300">should</strong> come to the group outing on Saturday. You <strong className="text-green-300">could</strong> also join a local sports team. You&apos;d <strong className="text-orange-300">better</strong> not stay in your room all day &mdash; that makes it worse.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<HeartPulse />}
                    title="Phase 3: The Advice Hotline"
                    subtitle="20 Minutes &bull; Interactive Pairs"
                    methodology="Random Problem Generator"
                    accentColor="amber"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Students draw a &quot;Problem Card&quot; and must give advice using at least one SHOULD, one SHOULDN&apos;T, and one HAD BETTER.
                    </p>
                    <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden font-mono text-xs">
                      <div className="bg-amber-900/30 p-3 border-b border-slate-700">
                        <span className="text-amber-400 font-bold uppercase">Problem Cards</span>
                      </div>
                      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
                        <div className="bg-slate-950 p-3 rounded-lg border border-amber-500/10">
                          <p className="text-amber-400 text-[10px] uppercase font-bold mb-1">Card #1</p>
                          <p>&quot;My visa expires in 2 weeks and I haven&apos;t booked my flight home.&quot;</p>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-lg border border-yellow-500/10">
                          <p className="text-yellow-400 text-[10px] uppercase font-bold mb-1">Card #2</p>
                          <p>&quot;I hurt my back at work but I&apos;m scared to tell my manager.&quot;</p>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-lg border border-orange-500/10">
                          <p className="text-orange-400 text-[10px] uppercase font-bold mb-1">Card #3</p>
                          <p>&quot;My roommate never cleans and I&apos;m getting frustrated.&quot;</p>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-lg border border-red-500/10">
                          <p className="text-red-400 text-[10px] uppercase font-bold mb-1">Card #4</p>
                          <p>&quot;It&apos;s -10&deg;C and I only brought summer clothes.&quot;</p>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-lg border border-teal-500/10">
                          <p className="text-teal-400 text-[10px] uppercase font-bold mb-1">Card #5</p>
                          <p>&quot;I got a parking ticket and I don&apos;t understand the form.&quot;</p>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-lg border border-purple-500/10">
                          <p className="text-purple-400 text-[10px] uppercase font-bold mb-1">Card #6</p>
                          <p>&quot;I ate something bad and my stomach hurts all day.&quot;</p>
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
        prevLabel="Hours 15 &amp; 16"
        nextHref="/english-class/hours-19-20"
        nextLabel="Hours 19 &amp; 20"
        accentColor="amber"
        moduleTitle="Obligation &amp; Advice"
      />
    </div>
  );
}
