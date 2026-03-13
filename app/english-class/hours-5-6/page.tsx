"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  HelpCircle, 
  Users, 
  Search, 
  BookOpen, 
  Heart, 
  Baby, 
  TrendingUp, 
  Info,
  Mic2
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassHours5and6() {
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
      <CurriculumHeader 
        hourNumber="5 & 6"
        title="Questions &"
        subtitle="Connection: Hours 5 & 6"
        description="Master the art of information gathering and personal storytelling. Learn to ask deep questions and describe the people who matter most in your life."
        accentColor="indigo"
        moduleInfo="Intensive English Program • Part 3"
      />

      {/* Curriculum Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* HOUR 5: Wh- Questions */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/10 to-transparent hidden lg:block"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column: Context */}
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">05</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Wh- Questions</h2>
                      <p className="text-indigo-400 font-medium tracking-wide text-xs uppercase">The Information Seekers</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-lg leading-relaxed">
                    By the end of this hour, students will be able to identify the correct Wh- question word and construct open-ended questions using the verb "To Be".
                  </p>

                  <CurriculumContext title="Pedagogical Focus" accentColor="indigo">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong>The Golden Formula:</strong> Wh- Word + "To Be" + Subject. Students often forget the inversion.
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong>Interview Prep:</strong> Embassy interviews are 90% Wh- questions. Shift from "Passive Answering" to "Active Providing".
                    </p>
                  </CurriculumContext>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  
                  <CurriculumBlock 
                    icon={<BookOpen />}
                    title="Phase 1: Wh- Words Theory"
                    subtitle="20 Minutes • Direct Instruction"
                    methodology="Meaning & Structure Analysis"
                    accentColor="indigo"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
                      <div className="bg-slate-950/50 rounded-xl p-5 border border-indigo-500/20">
                        <h4 className="text-white font-semibold mb-3 italic">Target Vocabulary</h4>
                        <ul className="space-y-2 text-slate-300 list-disc list-inside marker:text-indigo-500">
                          <li><span className="text-indigo-400 font-bold">WHAT</span>: Information</li>
                          <li><span className="text-indigo-400 font-bold">WHERE</span>: Places</li>
                          <li><span className="text-indigo-400 font-bold">WHEN</span>: Time / Dates</li>
                          <li><span className="text-indigo-400 font-bold">WHY</span>: Reasons</li>
                          <li><span className="text-indigo-400 font-bold">WHO</span>: People</li>
                        </ul>
                      </div>
                      <div className="bg-slate-950/50 rounded-xl p-5 border border-purple-500/20">
                         <h4 className="text-white font-semibold mb-3 italic">Formula Examples</h4>
                         <p className="text-slate-400 italic">"Where <span className="text-white underline">are</span> you from?"</p>
                         <p className="text-slate-400 italic mt-2">"How old <span className="text-white underline">is</span> he?"</p>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<Mic2 />}
                    title="Phase 2: The Interview Role-Play"
                    subtitle="20 Minutes • Active Practice"
                    methodology="Peer Interview Training"
                    accentColor="indigo"
                  >
                    <div className="space-y-4 mt-4 text-sm leading-relaxed">
                       <div className="p-4 bg-slate-950 rounded border-l-2 border-indigo-500">
                          <p className="text-indigo-400 font-bold mb-1">Q: "Who is your sponsor?"</p>
                          <p className="text-white italic">A: "My sponsor is AWA American Work Adventures."</p>
                       </div>
                       <div className="p-4 bg-slate-950 rounded border-l-2 border-purple-500">
                          <p className="text-indigo-400 font-bold mb-1">Q: "Where is your university?"</p>
                          <p className="text-white italic">A: "It is in Bogota."</p>
                       </div>
                    </div>
                  </CurriculumBlock>
                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 6: Family Ties */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500/50 via-rose-500/10 to-transparent hidden lg:block"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column: Context */}
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500/20 to-orange-500/10 text-rose-400 border border-rose-500/20 shadow-[0_0_40px_rgba(244,63,94,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">06</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Family Ties</h2>
                      <p className="text-rose-400 font-medium tracking-wide text-xs uppercase">Roots & Descriptions</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Describe your roots. Learn to identify family members and use adjectives to paint a picture of the people you love.
                  </p>

                  <CurriculumContext title="Danger Zone" accentColor="rose" icon={<Info className="w-5 h-5 flex-shrink-0" />}>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong>Parents vs. Relatives:</strong> Spanish interference often confuses these. Clarify "parientes" = "relatives".
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong>Plurals:</strong> child (singular) vs children (plural). No "childs"!
                    </p>
                  </CurriculumContext>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  <CurriculumBlock 
                    icon={<Users />}
                    title="Phase 1: Vocabulary"
                    subtitle="15 Minutes • Direct Instruction"
                    methodology="Visual Mapping"
                    accentColor="rose"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-slate-950/50 rounded-xl p-5 border border-rose-500/20">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2"><Heart className="w-4 h-4 text-rose-400" /> Immediate</h4>
                        <div className="flex flex-wrap gap-2">
                           {["Mother", "Father", "Brother", "Sister", "Husband", "Wife"].map(word => (
                             <span key={word} className="px-2 py-1 bg-rose-500/10 text-rose-300 rounded text-xs border border-rose-500/20">{word}</span>
                           ))}
                        </div>
                      </div>
                      <div className="bg-slate-950/50 rounded-xl p-5 border border-orange-500/20">
                         <h4 className="text-white font-semibold mb-3 flex items-center gap-2"><Search className="w-4 h-4 text-orange-400" /> Extended</h4>
                         <div className="flex flex-wrap gap-2">
                            {["Uncle", "Aunt", "Cousin", "Grandparents"].map(word => (
                              <span key={word} className="px-2 py-1 bg-orange-500/10 text-orange-300 rounded text-xs border border-orange-500/20">{word}</span>
                            ))}
                         </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<Baby />}
                    title="Phase 2: Family Tree Activity"
                    subtitle="30 Minutes • Interaction"
                    methodology="Creative Workshop"
                    accentColor="rose"
                  >
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 mt-4">
                       <p className="text-sm text-slate-400 leading-relaxed">
                          "Who is Maria?" → <span className="text-white italic">"She is my mother. She is a designer."</span>
                       </p>
                    </div>
                  </CurriculumBlock>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <CurriculumNavigation 
        prevHref="/english-class/hours-3-4"
        prevLabel="Hours 3 & 4"
        accentColor="indigo"
      />
    </div>
  );
}
