"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  MessageSquareQuote,
  AlertTriangle,
  CheckCircle,
  Zap,
  Shield,
  Key,
  Dumbbell,
  HelpCircle,
  PenTool,
  Users,
  Briefcase,
  ThumbsUp,
  ThumbsDown,
  Lock,
  ArrowLeftRight,
  Mic2
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassHours13and14() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500/30">
      <CurriculumHeader
        hourNumber="13 &amp; 14"
        title="Abilities &amp;"
        subtitle="Permissions"
        description="Unlock the modal verb CAN — your Swiss Army knife for expressing abilities, asking for permission, and discussing possibilities in both social and workplace environments."
        accentColor="purple"
        moduleInfo="Unit 2: Exploring the World &bull; Part 2"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 13 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">13</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Abilities</h2>
                      <p className="text-purple-400 font-medium tracking-wide text-xs uppercase">CAN for Skills</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Your J1 employer will ask: &quot;What <strong className="text-white">can</strong> you do?&quot; If you can&apos;t answer, you lose the opportunity. CAN is the verb of capability.
                  </p>

                  <CurriculumContext title="CAN: The Power Verb" accentColor="purple">
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-purple-500/20">
                        <p className="text-xs text-purple-400 font-bold uppercase mb-1">Affirmative</p>
                        <p className="text-sm text-white font-mono">Subject + <strong className="text-purple-300">can</strong> + base verb</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-red-500/20">
                        <p className="text-xs text-red-400 font-bold uppercase mb-1">Negative</p>
                        <p className="text-sm text-white font-mono">Subject + <strong className="text-red-300">can&apos;t</strong> + base verb</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-amber-500/20">
                        <p className="text-xs text-amber-400 font-bold uppercase mb-1">Question</p>
                        <p className="text-sm text-white font-mono"><strong className="text-amber-300">Can</strong> + subject + base verb?</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-3 italic border-l-2 border-purple-500 pl-2">
                      CAN never changes. No &quot;cans&quot;, no &quot;canned&quot;. Same for ALL subjects.
                    </p>
                  </CurriculumContext>

                  <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20">
                    <h4 className="text-red-400 font-bold text-xs uppercase mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Common CAN Errors</h4>
                    <div className="text-xs text-slate-300 space-y-2">
                      <p><span className="text-red-400">&dagger;</span> &quot;She <strong className="text-white">cans</strong> cook&quot; &rarr; <span className="text-green-400">She can cook</span></p>
                      <p><span className="text-red-400">&dagger;</span> &quot;I <strong className="text-white">can to</strong> swim&quot; &rarr; <span className="text-green-400">I can swim</span></p>
                      <p><span className="text-red-400">&dagger;</span> &quot;Can she <strong className="text-white">speaks</strong>?&quot; &rarr; <span className="text-green-400">Can she speak?</span></p>
                      <p><span className="text-red-400">&dagger;</span> &quot;I <strong className="text-white">no can</strong> do it&quot; &rarr; <span className="text-green-400">I can&apos;t do it</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Dumbbell />}
                    title="Phase 1: Skills Inventory"
                    subtitle="20 Minutes &bull; Vocabulary Activation"
                    methodology="Categorized Ability Mapping"
                    accentColor="purple"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-purple-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-purple-500">Work Skills</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>I can <strong className="text-white">cook</strong> basic meals.</p>
                          <p>I can <strong className="text-white">serve</strong> customers.</p>
                          <p>I can <strong className="text-white">use</strong> a computer.</p>
                          <p>I can <strong className="text-white">drive</strong> a car.</p>
                          <p>I can <strong className="text-white">clean</strong> rooms efficiently.</p>
                          <p>I can <strong className="text-white">operate</strong> a cash register.</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-fuchsia-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-fuchsia-500">Language Skills</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>I can <strong className="text-white">speak</strong> Spanish fluently.</p>
                          <p>I can <strong className="text-white">understand</strong> English.</p>
                          <p>I can <strong className="text-white">read</strong> instructions.</p>
                          <p>I can <strong className="text-white">translate</strong> for coworkers.</p>
                          <p>I <strong className="text-red-300">can&apos;t</strong> write formal letters.</p>
                          <p>I <strong className="text-red-300">can&apos;t</strong> understand slang yet.</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-pink-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-pink-500">Life Skills</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>I can <strong className="text-white">swim</strong>.</p>
                          <p>I can <strong className="text-white">play</strong> guitar.</p>
                          <p>I can <strong className="text-white">ride</strong> a bicycle.</p>
                          <p>I can <strong className="text-white">fix</strong> things at home.</p>
                          <p>I <strong className="text-red-300">can&apos;t</strong> ride a horse.</p>
                          <p>I <strong className="text-red-300">can&apos;t</strong> ski.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/20 mt-4">
                      <h4 className="text-purple-400 font-bold text-sm mb-3">Quick CAN Sentence Builder: 12 Examples</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                        <p>1. I <strong className="text-purple-300">can</strong> make pizza from scratch.</p>
                        <p>2. She <strong className="text-purple-300">can</strong> handle 10 tables at once.</p>
                        <p>3. He <strong className="text-red-300">can&apos;t</strong> work night shifts.</p>
                        <p>4. We <strong className="text-purple-300">can</strong> start tomorrow.</p>
                        <p>5. <strong className="text-amber-300">Can</strong> you lift heavy boxes?</p>
                        <p>6. They <strong className="text-red-300">can&apos;t</strong> speak Portuguese.</p>
                        <p>7. I <strong className="text-purple-300">can</strong> type 60 words per minute.</p>
                        <p>8. <strong className="text-amber-300">Can</strong> she drive a manual car?</p>
                        <p>9. He <strong className="text-purple-300">can</strong> multitask very well.</p>
                        <p>10. I <strong className="text-red-300">can&apos;t</strong> pronounce &quot;squirrel.&quot;</p>
                        <p>11. We <strong className="text-purple-300">can</strong> work overtime if needed.</p>
                        <p>12. <strong className="text-amber-300">Can</strong> they meet us at 3 PM?</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Ability Dialogues"
                    subtitle="25 Minutes &bull; Contextual Practice"
                    methodology="Job-Focused Shadowing"
                    accentColor="purple"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-purple-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-purple-500 pl-2">Dialogue 1: Job Interview &mdash; Restaurant</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Employer:</strong> &quot;What <strong className="text-purple-300">can</strong> you do in a kitchen?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-purple-300">can</strong> cook basic meals and I <strong className="text-purple-300">can</strong> wash dishes very fast.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Employer:</strong> &quot;<strong className="text-purple-300">Can</strong> you work weekends?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-purple-300">can</strong>. I <strong className="text-red-300">can&apos;t</strong> work Tuesdays, though.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Employer:</strong> &quot;<strong className="text-purple-300">Can</strong> you carry heavy trays?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-purple-300">can</strong>. I&apos;m very strong.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-fuchsia-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-fuchsia-500 pl-2">Dialogue 2: Job Interview &mdash; Hotel</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;<strong className="text-fuchsia-300">Can</strong> you work the front desk?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-purple-300">can</strong>. I <strong className="text-purple-300">can</strong> speak English and Spanish. I <strong className="text-purple-300">can</strong> use computers.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Manager:</strong> &quot;<strong className="text-fuchsia-300">Can</strong> you handle complaints?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I think I <strong className="text-purple-300">can</strong>. I&apos;m patient and I <strong className="text-purple-300">can</strong> stay calm under pressure.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-pink-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-pink-500 pl-2">Dialogue 3: Roommate Chores</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Roommate:</strong> &quot;<strong className="text-pink-300">Can</strong> you do the laundry today?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-red-300">can&apos;t</strong> right now. I <strong className="text-purple-300">can</strong> do it tonight after my shift.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Roommate:</strong> &quot;<strong className="text-pink-300">Can</strong> you also take out the trash?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Sure, I <strong className="text-purple-300">can</strong> do that before I leave.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-cyan-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-cyan-500 pl-2">Dialogue 4: Travel Planning</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;<strong className="text-cyan-300">Can</strong> you drive to the beach?&quot;</p>
                            <p className="text-slate-400 italic">&quot;No, I <strong className="text-red-300">can&apos;t</strong> drive. I don&apos;t have a license here.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;No worries. We <strong className="text-purple-300">can</strong> take the bus. Or we <strong className="text-purple-300">can</strong> ask Mike &mdash; he <strong className="text-purple-300">can</strong> drive.&quot;</p>
                            <p className="text-slate-400 italic">&quot;Great! <strong className="text-cyan-300">Can</strong> we stop at the store on the way?&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-teal-500 pl-2">Dialogue 5: Helping a Lost Tourist</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Tourist:</strong> &quot;Excuse me, <strong className="text-teal-300">can</strong> you help me? I <strong className="text-red-300">can&apos;t</strong> find the bus station.&quot;</p>
                            <p className="text-slate-400 italic">&quot;Sure! I <strong className="text-purple-300">can</strong> show you. It&apos;s two blocks away. I <strong className="text-purple-300">can</strong> walk you there.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Tourist:</strong> &quot;Thank you! <strong className="text-teal-300">Can</strong> you tell me which bus goes downtown?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-red-300">can&apos;t</strong> remember the number, but I <strong className="text-purple-300">can</strong> check on my phone.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Zap />}
                    title="Phase 3: The Skills Showdown"
                    subtitle="15 Minutes &bull; Competitive Pairs"
                    methodology="Speed Challenge"
                    accentColor="purple"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      In pairs, students take turns asking &quot;Can you...?&quot; with increasingly unusual skills. Each &quot;Yes, I can&quot; must be demonstrated or explained. First person to answer &quot;I can&apos;t&quot; 5 times loses.
                    </p>
                    <div className="bg-purple-900/10 rounded-xl p-5 border border-purple-500/20">
                      <h4 className="text-purple-400 font-bold text-sm mb-3">Example Prompts (Easy &rarr; Hard):</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-300">
                        <p>Can you whistle?</p>
                        <p>Can you snap your fingers?</p>
                        <p>Can you count to 20 in English?</p>
                        <p>Can you name 5 US states?</p>
                        <p>Can you spell &quot;Wednesday&quot;?</p>
                        <p>Can you sing in English?</p>
                        <p>Can you do a push-up?</p>
                        <p>Can you name the US President?</p>
                        <p>Can you say the alphabet backward?</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 14: Permissions & Workplace Rules */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-fuchsia-500/50 via-fuchsia-500/10 to-transparent hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-pink-500/10 text-fuchsia-400 border border-fuchsia-500/20 shadow-[0_0_40px_rgba(217,70,239,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">14</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Permissions</h2>
                      <p className="text-fuchsia-400 font-medium tracking-wide text-xs uppercase">CAN for Requests</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    CAN is also a vehicle for politeness. &quot;Can I leave early?&quot; &quot;Can you cover my shift?&quot; This hour focuses on real-world permission requests in workplaces and shared living situations.
                  </p>

                  <CurriculumContext title="CAN for Permission" accentColor="purple">
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-purple-500/20">
                        <p className="text-xs text-purple-400 font-bold uppercase mb-1">Asking Permission</p>
                        <p className="text-sm text-white font-mono">&quot;<strong className="text-purple-300">Can</strong> I use the bathroom?&quot;</p>
                        <p className="text-sm text-white font-mono">&quot;<strong className="text-purple-300">Can</strong> I take a break?&quot;</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-fuchsia-500/20">
                        <p className="text-xs text-fuchsia-400 font-bold uppercase mb-1">Making Requests</p>
                        <p className="text-sm text-white font-mono">&quot;<strong className="text-fuchsia-300">Can</strong> you help me with this?&quot;</p>
                        <p className="text-sm text-white font-mono">&quot;<strong className="text-fuchsia-300">Can</strong> you show me how?&quot;</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-green-500/20">
                        <p className="text-xs text-green-400 font-bold uppercase mb-1">Offering Help</p>
                        <p className="text-sm text-white font-mono">&quot;<strong className="text-green-300">Can</strong> I help you with that?&quot;</p>
                        <p className="text-sm text-white font-mono">&quot;I <strong className="text-green-300">can</strong> cover your shift.&quot;</p>
                      </div>
                    </div>
                  </CurriculumContext>

                  <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/20">
                    <h4 className="text-purple-400 font-bold text-xs uppercase mb-3">Granting &amp; Denying</h4>
                    <div className="text-xs text-slate-300 space-y-2 font-mono">
                      <p><strong className="text-green-300">Sure, go ahead.</strong></p>
                      <p><strong className="text-green-300">Of course you can.</strong></p>
                      <p><strong className="text-green-300">No problem.</strong></p>
                      <p><strong className="text-red-300">Sorry, you can&apos;t right now.</strong></p>
                      <p><strong className="text-red-300">I&apos;m afraid not.</strong></p>
                      <p><strong className="text-red-300">Not at the moment, sorry.</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Key />}
                    title="Phase 1: Permission Phrases Bank"
                    subtitle="15 Minutes &bull; Vocabulary Expansion"
                    methodology="Scenario-Based Collection"
                    accentColor="purple"
                  >
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mt-4">
                      <h4 className="text-white font-bold text-sm mb-4">20 Essential Permission Phrases</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                        <p>1. <strong className="text-purple-300">Can</strong> I leave early today?</p>
                        <p>2. <strong className="text-purple-300">Can</strong> I take my break now?</p>
                        <p>3. <strong className="text-purple-300">Can</strong> I use the phone?</p>
                        <p>4. <strong className="text-purple-300">Can</strong> I switch shifts with Karen?</p>
                        <p>5. <strong className="text-purple-300">Can</strong> you cover my shift tomorrow?</p>
                        <p>6. <strong className="text-purple-300">Can</strong> you repeat that, please?</p>
                        <p>7. <strong className="text-purple-300">Can</strong> I borrow a pen?</p>
                        <p>8. <strong className="text-purple-300">Can</strong> you show me how to do this?</p>
                        <p>9. <strong className="text-purple-300">Can</strong> I have a day off next week?</p>
                        <p>10. <strong className="text-purple-300">Can</strong> I sit here?</p>
                        <p>11. <strong className="text-purple-300">Can</strong> I open the window?</p>
                        <p>12. <strong className="text-purple-300">Can</strong> you help me carry this?</p>
                        <p>13. <strong className="text-purple-300">Can</strong> I park here?</p>
                        <p>14. <strong className="text-purple-300">Can</strong> you speak more slowly?</p>
                        <p>15. <strong className="text-purple-300">Can</strong> I pay with a card?</p>
                        <p>16. <strong className="text-purple-300">Can</strong> I try this on? (clothing)</p>
                        <p>17. <strong className="text-purple-300">Can</strong> you give me a ride?</p>
                        <p>18. <strong className="text-purple-300">Can</strong> I have the Wi-Fi password?</p>
                        <p>19. <strong className="text-purple-300">Can</strong> I take a photo here?</p>
                        <p>20. <strong className="text-purple-300">Can</strong> I get a glass of water?</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Permission Dialogues"
                    subtitle="25 Minutes &bull; Boss &amp; Employee Roleplays"
                    methodology="Multi-Context Scenarios"
                    accentColor="purple"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-purple-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-purple-500 pl-2">Dialogue 1: Asking the Boss</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Employee:</strong> &quot;Excuse me, <strong className="text-purple-300">can</strong> I leave 30 minutes early today? I have a doctor&apos;s appointment.&quot;</p>
                            <p className="text-slate-400 italic"><strong className="text-white">Boss:</strong> &quot;Sure, that&apos;s fine. <strong className="text-purple-300">Can</strong> you finish the inventory before you leave?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Employee:</strong> &quot;Yes, I <strong className="text-purple-300">can</strong>. I&apos;ll do it right now.&quot;</p>
                            <p className="text-slate-400 italic"><strong className="text-white">Boss:</strong> &quot;Great. <strong className="text-purple-300">Can</strong> you also ask Sarah to cover the last 30 minutes?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Employee:</strong> &quot;Of course. Thank you!&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-fuchsia-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-fuchsia-500 pl-2">Dialogue 2: At a Store</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Customer:</strong> &quot;<strong className="text-fuchsia-300">Can</strong> I try these shoes on?&quot;</p>
                            <p className="text-slate-400 italic"><strong className="text-white">Employee:</strong> &quot;Sure! What size <strong className="text-fuchsia-300">can</strong> I get you?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Customer:</strong> &quot;Size 9, please. <strong className="text-fuchsia-300">Can</strong> I also see them in black?&quot;</p>
                            <p className="text-slate-400 italic"><strong className="text-white">Employee:</strong> &quot;I <strong className="text-red-300">can&apos;t</strong> find black, but I <strong className="text-purple-300">can</strong> check in the back.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Customer:</strong> &quot;That would be great. <strong className="text-fuchsia-300">Can</strong> I pay with cash?&quot;</p>
                            <p className="text-slate-400 italic"><strong className="text-white">Employee:</strong> &quot;Yes, you <strong className="text-purple-300">can</strong>. Cash and card are both fine.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-pink-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-pink-500 pl-2">Dialogue 3: Roommate Request</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">You:</strong> &quot;<strong className="text-pink-300">Can</strong> I use your laptop? Mine is dead.&quot;</p>
                            <p className="text-slate-400 italic">&quot;Sorry, I <strong className="text-red-300">can&apos;t</strong> lend it right now. I need it for homework.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">You:</strong> &quot;No problem. <strong className="text-pink-300">Can</strong> I use it after you finish?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Sure, you <strong className="text-purple-300">can</strong>. I&apos;ll be done in about an hour.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-cyan-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-cyan-500 pl-2">Dialogue 4: At a Restaurant (as Customer)</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">You:</strong> &quot;<strong className="text-cyan-300">Can</strong> I have the menu, please?&quot;</p>
                            <p className="text-slate-400 italic"><strong className="text-white">Waiter:</strong> &quot;Here you go. <strong className="text-cyan-300">Can</strong> I get you something to drink?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">You:</strong> &quot;<strong className="text-cyan-300">Can</strong> I have a water with lemon?&quot;</p>
                            <p className="text-slate-400 italic"><strong className="text-white">Waiter:</strong> &quot;Of course. <strong className="text-cyan-300">Can</strong> I also tell you about our specials?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">You:</strong> &quot;Sure! And later, <strong className="text-cyan-300">can</strong> I get the check?&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-teal-500 pl-2">Dialogue 5: Between Coworkers</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">You:</strong> &quot;Hey, <strong className="text-teal-300">can</strong> you cover my shift on Friday? I have a family event.&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-red-300">can&apos;t</strong> on Friday, but I <strong className="text-purple-300">can</strong> cover Saturday if you take mine.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">You:</strong> &quot;That works! <strong className="text-teal-300">Can</strong> you talk to the manager about the switch?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Sure, I <strong className="text-purple-300">can</strong> do it during our break.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Lock />}
                    title="Phase 3: The Permission Maze"
                    subtitle="20 Minutes &bull; Interactive Roleplay"
                    methodology="Multi-Step Scenario Navigation"
                    accentColor="purple"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Students receive a scenario card with a goal. The only way to achieve it is by asking the right &quot;Can I...?&quot; and &quot;Can you...?&quot; questions to the teacher and classmates.
                    </p>
                    <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden font-mono text-xs">
                      <div className="bg-purple-900/30 p-3 border-b border-slate-700">
                        <span className="text-purple-400 font-bold uppercase">Scenario Cards</span>
                      </div>
                      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
                        <div className="bg-slate-950 p-3 rounded-lg border border-purple-500/10">
                          <p className="text-purple-400 text-[10px] uppercase font-bold mb-1">Goal: Get a day off</p>
                          <p>You need Friday off. Ask your boss, find a replacement, and confirm the schedule change.</p>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-lg border border-fuchsia-500/10">
                          <p className="text-fuchsia-400 text-[10px] uppercase font-bold mb-1">Goal: Borrow a car</p>
                          <p>You need to get to the airport. Your friend has a car. Negotiate borrowing it.</p>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-lg border border-pink-500/10">
                          <p className="text-pink-400 text-[10px] uppercase font-bold mb-1">Goal: Change your room</p>
                          <p>Your room is too noisy. Talk to the landlord about switching to a quieter room.</p>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-lg border border-cyan-500/10">
                          <p className="text-cyan-400 text-[10px] uppercase font-bold mb-1">Goal: Return a product</p>
                          <p>You bought the wrong size. Go to the store and request an exchange.</p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<ArrowLeftRight />}
                    title="Phase 4: CAN vs CAN&apos;T Rapid Fire"
                    subtitle="10 Minutes &bull; Assessment"
                    methodology="Situation Judgment"
                    accentColor="purple"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Teacher describes situations. Students must respond with a full CAN or CAN&apos;T sentence.
                    </p>
                    <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">&quot;You don&apos;t have a driver&apos;s license.&quot;</p>
                          <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-xs font-bold">I can&apos;t drive.</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">&quot;You took swimming lessons as a kid.&quot;</p>
                          <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-xs font-bold">I can swim.</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">&quot;The restaurant is full. No tables.&quot;</p>
                          <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-xs font-bold">You can&apos;t sit here.</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <p className="text-slate-400">&quot;Your English is getting better.&quot;</p>
                          <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-xs font-bold">I can understand more now.</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-slate-400">&quot;It&apos;s a smoke-free building.&quot;</p>
                          <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-xs font-bold">You can&apos;t smoke here.</span>
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
        prevHref="/english-class/hours-11-12"
        prevLabel="Hours 11 &amp; 12"
        nextHref="/english-class/hours-15-16"
        nextLabel="Hours 15 &amp; 16"
        accentColor="purple"
      />
    </div>
  );
}
