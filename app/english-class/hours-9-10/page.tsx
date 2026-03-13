"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Map, 
  MapPin, 
  Plane, 
  Train, 
  Compass, 
  Trophy, 
  ShieldCheck, 
  GraduationCap, 
  MessageSquareQuote,
  Crosshair
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassHours9and10() {
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
        hourNumber="9 & 10"
        title="Navigation &"
        subtitle="The Unit Capstone"
        description="Conquer the final frontier of Unit 1: Prepositions of place and time. Then, integrate all 9 hours of training into the ultimate high-pressure border control simulation."
        accentColor="teal"
        moduleInfo="Intensive English Program • Finale"
      />

      {/* Curriculum Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* HOUR 9: Navigating the World */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/10 to-transparent hidden lg:block"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column: Context */}
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/10 text-teal-400 border border-teal-500/20 shadow-[0_0_40px_rgba(20,184,166,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">09</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Navigation</h2>
                      <p className="text-teal-400 font-medium tracking-wide text-xs uppercase">Prepositions & Places</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Giving and receiving directions requires exact prepositional accuracy. "At the hospital" means something entirely different than "In the hospital".
                  </p>

                  <CurriculumContext title="Pedagogical Focus: The Triangle" accentColor="teal">
                    <p className="text-sm text-slate-300 leading-relaxed font-bold">
                      IN (General) → ON (Specific) → AT (Exact)
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mt-2 border-l-2 border-teal-500 pl-2">
                       Spanish uses "EN" for everything. We must brutally separate "EN" into three distinct dimensions of time and space in English.
                    </p>
                  </CurriculumContext>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  
                  <CurriculumBlock 
                    icon={<Compass />}
                    title="Phase 1: The Geometry of Prepositions"
                    subtitle="25 Minutes • Direct Instruction"
                    methodology="Visual Mapping"
                    accentColor="teal"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 text-sm font-mono text-center">
                      <div className="bg-slate-950 p-5 rounded-xl border border-teal-500/20">
                         <h4 className="text-teal-400 text-2xl font-black mb-2">IN</h4>
                         <p className="text-slate-400 text-xs mb-3">General (Volumes / Enclosed)</p>
                         <div className="space-y-2 text-white border-t border-teal-500/20 pt-3">
                            <p><strong className="text-teal-300">Space:</strong> In Miami, In Florida, In a box</p>
                            <p><strong className="text-teal-300">Time:</strong> In 1995, In October, In the morning</p>
                         </div>
                      </div>

                      <div className="bg-slate-950 p-5 rounded-xl border border-emerald-500/20">
                         <h4 className="text-emerald-400 text-2xl font-black mb-2">ON</h4>
                         <p className="text-slate-400 text-xs mb-3">Specific (Surfaces / Lines)</p>
                         <div className="space-y-2 text-white border-t border-emerald-500/20 pt-3">
                            <p><strong className="text-emerald-300">Space:</strong> On 5th Avenue, On the table, On the wall</p>
                            <p><strong className="text-emerald-300">Time:</strong> On Monday, On July 4th, On my birthday</p>
                         </div>
                      </div>

                      <div className="bg-slate-950 p-5 rounded-xl border border-cyan-500/20">
                         <h4 className="text-cyan-400 text-2xl font-black mb-2">AT</h4>
                         <p className="text-slate-400 text-xs mb-3">Exact (Points / Coordinates)</p>
                         <div className="space-y-2 text-white border-t border-cyan-500/20 pt-3">
                            <p><strong className="text-cyan-300">Space:</strong> At 123 Main St, At the door, At the airport</p>
                            <p><strong className="text-cyan-300">Time:</strong> At 5:00 PM, At midnight, At noon</p>
                         </div>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-teal-950/20 rounded-lg text-sm text-slate-300 border border-teal-500/30">
                       <strong className="text-teal-400 block mb-1">Transport Exceptions:</strong>
                       "In" a car/taxi (you bend down). "On" a bus/train/plane (you walk on a platform).
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Navigational Dialogues"
                    subtitle="20 Minutes • Heavy Phrasal Drilling"
                    methodology="Contextual Shadowing"
                    accentColor="teal"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">
                        
                        <div className="group">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-teal-500 pl-2">Dialogue 1: Making Plans</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Friend:</strong> "Where are we meeting tomorrow?"</p>
                              <p className="text-slate-400 italic">"Let's meet <strong className="text-teal-300">at</strong> the coffee shop <strong className="text-teal-300">on</strong> Lincoln Road."</p>
                              <p className="text-slate-300"><strong className="text-white">Friend:</strong> "Okay, what time?"</p>
                              <p className="text-slate-400 italic">"Be there <strong className="text-teal-300">at</strong> 3:30 PM. I will be <strong className="text-emerald-300">in</strong> my car."</p>
                          </div>
                        </div>

                        <div className="group">
                          <p className="text-cyan-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-cyan-500 pl-2">Dialogue 2: Giving Directions</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Tourist:</strong> "Excuse me, how do I get to the museum?"</p>
                              <p className="text-slate-400 italic">"The museum is <strong className="text-cyan-300">on</strong> 8th Street. Go straight, and turn left <strong className="text-cyan-300">at</strong> the traffic light."</p>
                              <p className="text-slate-300"><strong className="text-white">Tourist:</strong> "Is it far?"</p>
                              <p className="text-slate-400 italic">"No, it is right next to the bank."</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<Map />}
                    title="Phase 3: The Blind Navigator"
                    subtitle="15 Minutes • Active Practice"
                    methodology="Directional Task Matrix"
                    accentColor="teal"
                  >
                     <p className="text-sm text-slate-300 leading-relaxed mt-4">
                        Student A is given a map with a starting point and a destination. Student B has a blank map. Student A must guide Student B using only prepositions of place and directional verbs across the map.
                     </p>
                  </CurriculumBlock>
                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 10: Capstone */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/10 to-transparent hidden lg:block"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column: Context */}
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white border border-blue-400/30 shadow-[0_0_50px_rgba(59,130,246,0.3)] flex-shrink-0">
                      <Trophy className="w-8 h-8 opacity-80 mb-1" />
                      <span className="text-xl font-bold leading-none">10</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">The Capstone</h2>
                      <p className="text-blue-400 font-medium tracking-wide text-xs uppercase">Unit 1 Integration Test</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-lg leading-relaxed">
                    This is the culmination of 10 hours of rigorous training. No new grammar. Only execution. We simulate the highest-pressure environment possible to test structural retention.
                  </p>

                  <CurriculumContext title="Performance Objectives" accentColor="blue">
                    <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside marker:text-blue-500">
                       <li>Automatic formulation of answers to Wh- Questions</li>
                       <li>Zero hesitation on To Be vs Have/Has</li>
                       <li>Flawless numeral and date regurgitation</li>
                       <li>Correct formal registering</li>
                    </ul>
                  </CurriculumContext>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  <CurriculumBlock 
                    icon={<Plane />}
                    title="Phase 1: The Customs and Border Protection (CBP) Simulation"
                    subtitle="45 Minutes • The Ultimate Roleplay"
                    methodology="High-Stress Cognitive Overload"
                    accentColor="blue"
                  >
                    <div className="bg-slate-950 rounded-xl border border-blue-500/30 w-full mt-4 p-5">
                       <h4 className="flex items-center gap-2 text-blue-400 font-bold mb-4 uppercase tracking-widest border-b border-blue-500/20 pb-3">
                          <ShieldCheck /> The Interrogation Script
                       </h4>
                       
                       <p className="text-sm text-slate-400 italic mb-4">
                          The instructor acts as the strict CBP Officer. The student must act as the passenger. Mistakes result in "Secondary Screening." This uses ALL Unit 1 Grammar.
                       </p>

                       <div className="space-y-3 font-serif text-sm bg-slate-900/50 p-4 rounded-lg">
                           <p className="text-slate-300"><strong className="text-white">Officer:</strong> "Next! Good morning. Passport and customs declaration, please." <strong className="text-blue-300 text-xs font-sans">(Hour 1: Register)</strong></p>
                           <p className="text-slate-400 italic">"Good morning, Officer. Here is my passport."</p>
                           
                           <p className="text-slate-300 mt-2"><strong className="text-white">Officer:</strong> "What is the purpose of your visit?" <strong className="text-blue-300 text-xs font-sans">(Hour 5: Wh- Question)</strong></p>
                           <p className="text-slate-400 italic">"I am here for a cultural exchange program." <strong className="text-rose-300 text-xs font-sans">(Hour 4: To Be)</strong></p>

                           <p className="text-slate-300 mt-2"><strong className="text-white">Officer:</strong> "What is your occupation in your home country?"</p>
                           <p className="text-slate-400 italic">"I am an engineer." <strong className="text-rose-300 text-xs font-sans">(Hour 4: Articles)</strong></p>

                           <p className="text-slate-300 mt-2"><strong className="text-white">Officer:</strong> "Where will you be staying?" <strong className="text-blue-300 text-xs font-sans">(Hour 9: Prepositions)</strong></p>
                           <p className="text-slate-400 italic">"I am staying at my friend's house in Orlando." <strong className="text-fuchsia-300 text-xs font-sans">(Hour 6 & 9: Possessives & Prepositions)</strong></p>

                           <p className="text-slate-300 mt-2"><strong className="text-white">Officer:</strong> "What is your date of birth?" <strong className="text-blue-300 text-xs font-sans">(Hour 3: Ordinals & Dates)</strong></p>
                           <p className="text-slate-400 italic">"I was born on July 21st, 2002."</p>

                           <p className="text-slate-300 mt-2"><strong className="text-white">Officer:</strong> "Can you spell your sponsor's last name?" <strong className="text-blue-300 text-xs font-sans">(Hour 2: Spelling & Phonetics)</strong></p>
                           <p className="text-slate-400 italic font-mono uppercase">"M-A-R-T-I-N-E-Z."</p>

                           <p className="text-slate-300 mt-2"><strong className="text-white">Officer:</strong> "Look at the camera. Take off your hat." <strong className="text-blue-300 text-xs font-sans">(Hour 8: Descriptions context)</strong></p>
                           <p className="text-slate-400 italic">"Okay."</p>

                           <p className="text-slate-300 mt-2"><strong className="text-white">Officer:</strong> "Welcome to the United States. Have a good day."</p>
                       </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<GraduationCap />}
                    title="Phase 2: Debrief & Graduation"
                    subtitle="15 Minutes • Feedback & Award"
                    methodology="Constructive Correction"
                    accentColor="blue"
                  >
                     <p className="text-sm text-slate-300 leading-relaxed mt-4">
                        The instructor provides individual feedback on phonetic slip-ups, grammar breaks under pressure, and registers. Students who successfully 'pass the border' graduate Unit 1 and are ready for the A2-B1 threshold of Unit 2.
                     </p>
                  </CurriculumBlock>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Graduation Banner */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent -z-10" />
         <div className="container mx-auto px-6 text-center max-w-4xl">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="bg-slate-900/50 p-12 rounded-3xl border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.1)] relative"
            >
               <Trophy className="w-16 h-16 text-blue-400 mx-auto mb-6" />
               <h2 className="text-4xl font-black text-white mb-4">Unit 1 Complete.</h2>
               <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
                  You have mastered the foundational mechanics of Survival English. You can spell, command numbers, wield the verb To Be, ask questions, describe reality, and navigate space. The architecture is built.
               </p>
               <button className="mt-8 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all uppercase tracking-wide">
                  Advance to Unit 2
               </button>
            </motion.div>
         </div>
      </section>

    </div>
  );
}
