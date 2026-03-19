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
  Lock
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
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500/30">
      <CurriculumHeader
        hourNumber="13 & 14"
        title="Abilities &"
        subtitle="Permissions"
        description="Unlock the modal verb CAN — your Swiss Army knife for expressing abilities, asking for permission, and discussing possibilities in both social and workplace environments."
        accentColor="purple"
        moduleInfo="Unit 2: Exploring the World • Part 2"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 13: What Can You Do? */}
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
                        <p className="text-xs text-purple-400 font-bold uppercase mb-1">Structure</p>
                        <p className="text-sm text-white font-mono">Subject + <strong className="text-purple-300">can</strong> + base verb</p>
                        <p className="text-sm text-white font-mono">Subject + <strong className="text-red-300">can&apos;t</strong> + base verb</p>
                      </div>
                      <p className="text-xs text-slate-400 italic border-l-2 border-purple-500 pl-2">
                        CAN never changes. No &quot;cans&quot;, no &quot;canned&quot;. It is the same for ALL subjects. &quot;I can&quot;, &quot;She can&quot;, &quot;They can&quot;.
                      </p>
                    </div>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Dumbbell />}
                    title="Phase 1: Skills Inventory"
                    subtitle="20 Minutes • Vocabulary Activation"
                    methodology="Categorized Ability Mapping"
                    accentColor="purple"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-purple-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-purple-500">Work Skills</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>I can <strong className="text-white">cook</strong>.</p>
                          <p>I can <strong className="text-white">serve</strong> customers.</p>
                          <p>I can <strong className="text-white">use</strong> a computer.</p>
                          <p>I can <strong className="text-white">drive</strong> a car.</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-fuchsia-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-fuchsia-500">Language Skills</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>I can <strong className="text-white">speak</strong> Spanish.</p>
                          <p>I can <strong className="text-white">understand</strong> English.</p>
                          <p>I can <strong className="text-white">read</strong> instructions.</p>
                          <p>I <strong className="text-red-300">can&apos;t</strong> write formal letters.</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-pink-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-pink-500">Life Skills</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p>I can <strong className="text-white">swim</strong>.</p>
                          <p>I can <strong className="text-white">play</strong> guitar.</p>
                          <p>I <strong className="text-red-300">can&apos;t</strong> ride a horse.</p>
                          <p>I can <strong className="text-white">fix</strong> my bike.</p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Ability Dialogues"
                    subtitle="20 Minutes • Contextual Practice"
                    methodology="Job-Focused Shadowing"
                    accentColor="purple"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-purple-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-purple-500 pl-2">Dialogue 1: Job Interview</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Employer:</strong> &quot;What <strong className="text-purple-300">can</strong> you do in a kitchen?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-purple-300">can</strong> cook basic meals and I <strong className="text-purple-300">can</strong> wash dishes very fast.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Employer:</strong> &quot;<strong className="text-purple-300">Can</strong> you work weekends?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Yes, I <strong className="text-purple-300">can</strong>. I <strong className="text-red-300">can&apos;t</strong> work Tuesdays, though.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-fuchsia-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-fuchsia-500 pl-2">Dialogue 2: Roommate Chores</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Roommate:</strong> &quot;<strong className="text-fuchsia-300">Can</strong> you do the laundry today?&quot;</p>
                            <p className="text-slate-400 italic">&quot;I <strong className="text-red-300">can&apos;t</strong> right now. I <strong className="text-purple-300">can</strong> do it tonight after my shift.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Roommate:</strong> &quot;Okay. <strong className="text-fuchsia-300">Can</strong> you also take out the trash?&quot;</p>
                            <p className="text-slate-400 italic">&quot;Sure, I <strong className="text-purple-300">can</strong> do that before I leave.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-pink-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-pink-500 pl-2">Dialogue 3: Travel Planning</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;<strong className="text-pink-300">Can</strong> you drive to the beach?&quot;</p>
                            <p className="text-slate-400 italic">&quot;No, I <strong className="text-red-300">can&apos;t</strong> drive. I don&apos;t have a license here.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Friend:</strong> &quot;No worries. We <strong className="text-pink-300">can</strong> take the bus.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Zap />}
                    title="Phase 3: The Skills Showdown"
                    subtitle="15 Minutes • Competitive Pairs"
                    methodology="Speed Challenge"
                    accentColor="purple"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      In pairs, students take turns asking &quot;Can you...?&quot; with increasingly unusual skills. Each &quot;Yes, I can&quot; must be backed up with a demonstration or explanation. First person to say &quot;I can&apos;t&quot; 5 times loses.
                    </p>
                    <div className="bg-purple-900/10 rounded-xl p-5 border border-purple-500/20">
                      <h4 className="text-purple-400 font-bold text-sm mb-3">Example Prompts:</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                        <p>Can you whistle?</p>
                        <p>Can you snap your fingers?</p>
                        <p>Can you count to 20 in English?</p>
                        <p>Can you name 5 US states?</p>
                        <p>Can you spell &quot;Wednesday&quot;?</p>
                        <p>Can you sing in English?</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 14: Workplace Permissions */}
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
                    You need to ask your boss for a break, negotiate a schedule change, or request time off. CAN is your ticket to navigating workplace permissions.
                  </p>

                  <CurriculumContext title="CAN: Permission vs. Ability" accentColor="purple">
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-purple-500/20">
                        <p className="text-xs text-purple-400 font-bold uppercase mb-1">Ability</p>
                        <p className="text-sm text-white font-mono">&quot;I <strong className="text-purple-300">can</strong> speak English.&quot;</p>
                        <p className="text-xs text-slate-500 italic">(= I have the skill)</p>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-fuchsia-500/20">
                        <p className="text-xs text-fuchsia-400 font-bold uppercase mb-1">Permission</p>
                        <p className="text-sm text-white font-mono">&quot;<strong className="text-fuchsia-300">Can</strong> I take my break now?&quot;</p>
                        <p className="text-xs text-slate-500 italic">(= Am I allowed?)</p>
                      </div>
                    </div>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<Key />}
                    title="Phase 1: Permission Phrases"
                    subtitle="15 Minutes • Pattern Recognition"
                    methodology="Polite Request Templates"
                    accentColor="purple"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-fuchsia-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-fuchsia-500 flex items-center gap-2"><ThumbsUp className="w-3 h-3" /> Asking</h4>
                        <div className="space-y-2 text-sm text-slate-300 font-mono">
                          <p><strong className="text-fuchsia-300">Can</strong> I leave early today?</p>
                          <p><strong className="text-fuchsia-300">Can</strong> I use the phone?</p>
                          <p><strong className="text-fuchsia-300">Can</strong> I switch shifts?</p>
                          <p><strong className="text-fuchsia-300">Can</strong> we take a break?</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="text-pink-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-pink-500 flex items-center gap-2"><Shield className="w-3 h-3" /> Responding</h4>
                        <div className="space-y-2 text-sm text-slate-300 font-mono">
                          <p className="text-green-300">Yes, you can.</p>
                          <p className="text-green-300">Sure, go ahead.</p>
                          <p className="text-red-300">No, you can&apos;t. Not right now.</p>
                          <p className="text-red-300">Sorry, that&apos;s not possible.</p>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Workplace Scenarios"
                    subtitle="25 Minutes • Immersive Roleplay"
                    methodology="Boss-Employee Simulation"
                    accentColor="purple"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-fuchsia-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-fuchsia-500 pl-2">Scenario 1: The Break Request</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Employee:</strong> &quot;Excuse me, <strong className="text-fuchsia-300">can</strong> I take my 15-minute break now?&quot;</p>
                            <p className="text-slate-400 italic"><strong className="text-white">Boss:</strong> &quot;Not right now. <strong className="text-fuchsia-300">Can</strong> you wait until 3 PM? We are very busy.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Employee:</strong> &quot;Sure. <strong className="text-fuchsia-300">Can</strong> I at least get some water?&quot;</p>
                            <p className="text-slate-400 italic"><strong className="text-white">Boss:</strong> &quot;Of course, go ahead.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-purple-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-purple-500 pl-2">Scenario 2: The Day Off</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Employee:</strong> &quot;<strong className="text-purple-300">Can</strong> I have next Friday off? I need to go to the embassy.&quot;</p>
                            <p className="text-slate-400 italic"><strong className="text-white">Manager:</strong> &quot;Let me check the schedule. <strong className="text-purple-300">Can</strong> you work Saturday instead?&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Employee:</strong> &quot;Yes, I <strong className="text-purple-300">can</strong>. No problem.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-pink-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-pink-500 pl-2">Scenario 3: The Phone Policy</p>
                          <div className="space-y-2 font-serif text-sm">
                            <p className="text-slate-300"><strong className="text-white">Employee:</strong> &quot;<strong className="text-pink-300">Can</strong> I use my phone during lunch?&quot;</p>
                            <p className="text-slate-400 italic"><strong className="text-white">Boss:</strong> &quot;Yes, you <strong className="text-pink-300">can</strong> use it during your break. You <strong className="text-red-300">can&apos;t</strong> use it on the floor.&quot;</p>
                            <p className="text-slate-300"><strong className="text-white">Employee:</strong> &quot;Understood. <strong className="text-pink-300">Can</strong> I keep it in my pocket?&quot;</p>
                            <p className="text-slate-400 italic"><strong className="text-white">Boss:</strong> &quot;No. You <strong className="text-red-300">can&apos;t</strong>. Leave it in your locker.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock
                    icon={<Users />}
                    title="Phase 3: The Permission Maze"
                    subtitle="20 Minutes • Interactive Roleplay"
                    methodology="Decision Tree Navigation"
                    accentColor="purple"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      Each student draws a &quot;Situation Card&quot; (e.g., &quot;You need to leave 30 minutes early because you feel sick&quot;). They must navigate a conversation with the &quot;Boss&quot; (another student) using only CAN to request permission and negotiate.
                    </p>
                    <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden font-mono text-xs">
                      <div className="bg-purple-900/30 p-3 border-b border-slate-700">
                        <span className="text-purple-400 font-bold uppercase">Sample Situation Cards</span>
                      </div>
                      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
                        <div className="bg-slate-950 p-3 rounded-lg border border-purple-500/10">
                          <p className="text-purple-400 text-[10px] uppercase font-bold mb-1">Card #1</p>
                          <p>You need to call your parents during work hours.</p>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-lg border border-fuchsia-500/10">
                          <p className="text-fuchsia-400 text-[10px] uppercase font-bold mb-1">Card #2</p>
                          <p>You want to change your schedule from morning to evening.</p>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-lg border border-pink-500/10">
                          <p className="text-pink-400 text-[10px] uppercase font-bold mb-1">Card #3</p>
                          <p>You need a day off for a medical appointment.</p>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-lg border border-indigo-500/10">
                          <p className="text-indigo-400 text-[10px] uppercase font-bold mb-1">Card #4</p>
                          <p>You want to bring a friend to shadow you at work.</p>
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
        prevLabel="Hours 11 & 12"
        nextHref="/english-class/hours-15-16"
        nextLabel="Hours 15 & 16"
        accentColor="purple"
      />
    </div>
  );
}
