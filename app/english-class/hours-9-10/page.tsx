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
  Crosshair,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  Target,
  Clock,
  Navigation2,
  Calendar,
  Building2,
  Car,
  Search,
  Flag,
  FileSearch,
  Users
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
        description="Conquer the final frontier of Unit 1: Prepositions of place and time. Then, integrate all 10 hours of training into the ultimate high-pressure border control simulation."
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
                    Giving and receiving directions requires exact prepositional accuracy. &quot;At the hospital&quot; means something entirely different than &quot;In the hospital&quot;.
                  </p>

                  <CurriculumContext title="Pedagogical Focus: The Triangle" accentColor="teal">
                    <p className="text-sm text-slate-300 leading-relaxed font-bold">
                      IN (General) → ON (Specific) → AT (Exact)
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mt-2 border-l-2 border-teal-500 pl-2">
                       Spanish uses &quot;EN&quot; for everything. We must brutally separate &quot;EN&quot; into three distinct dimensions of time and space in English.
                    </p>
                  </CurriculumContext>

                  <div className="bg-teal-500/10 rounded-xl p-5 border border-teal-500/20">
                     <h4 className="text-teal-400 font-bold text-xs uppercase mb-3 flex items-center gap-2"><Car className="w-4 h-4"/> Transport Rule</h4>
                     <p className="text-xs text-slate-300 leading-relaxed">
                        <strong className="text-white">IN:</strong> Small vehicles (car, taxi, truck). You must bend down. &quot;I am in a taxi.&quot;
                     </p>
                     <p className="text-xs text-slate-300 leading-relaxed mt-2">
                        <strong className="text-white">ON:</strong> Large vehicles (bus, train, plane, boat). You can walk on them. &quot;I am on the metro.&quot;
                     </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  
                  <CurriculumBlock 
                    icon={<Compass />}
                    title="Phase 1: The Geometry of Prepositions"
                    subtitle="25 Minutes • Visual Spatial Mapping"
                    methodology="Visual Spatial Mapping"
                    accentColor="teal"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 text-sm font-mono text-center">
                      <div className="bg-slate-950 p-5 rounded-xl border border-teal-500/20 flex flex-col items-center">
                         <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center mb-3">
                            <Building2 className="w-5 h-5 text-teal-400" />
                         </div>
                         <h4 className="text-teal-400 text-2xl font-black mb-1 italic">IN</h4>
                         <p className="text-slate-500 text-[10px] mb-3 uppercase font-sans">Volumes / Enclosed Space</p>
                         <div className="space-y-2 text-slate-300 border-t border-teal-500/20 pt-3 w-full">
                            <p className="text-xs"><strong className="text-white">Cities:</strong> In New York</p>
                            <p className="text-xs"><strong className="text-white">Rooms:</strong> In the office</p>
                            <p className="text-xs"><strong className="text-white">Months:</strong> In December</p>
                            <p className="text-xs"><strong className="text-white">Years:</strong> In 2025</p>
                         </div>
                      </div>

                      <div className="bg-slate-950 p-5 rounded-xl border border-emerald-500/20 flex flex-col items-center">
                         <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3">
                            <Navigation2 className="w-5 h-5 text-emerald-400 rotate-45" />
                         </div>
                         <h4 className="text-emerald-400 text-2xl font-black mb-1 italic">ON</h4>
                         <p className="text-slate-500 text-[10px] mb-3 uppercase font-sans">Surfaces / Lines</p>
                         <div className="space-y-2 text-slate-300 border-t border-emerald-500/20 pt-3 w-full">
                            <p className="text-xs"><strong className="text-white">Streets:</strong> On Ocean Drive</p>
                            <p className="text-xs"><strong className="text-white">Floors:</strong> On the 10th floor</p>
                            <p className="text-xs"><strong className="text-white">Days:</strong> On Friday</p>
                            <p className="text-xs"><strong className="text-white">Dates:</strong> On August 21st</p>
                         </div>
                      </div>

                      <div className="bg-slate-950 p-5 rounded-xl border border-cyan-500/20 flex flex-col items-center">
                         <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-3">
                            <MapPin className="w-5 h-5 text-cyan-400" />
                         </div>
                         <h4 className="text-cyan-400 text-2xl font-black mb-1 italic">AT</h4>
                         <p className="text-slate-500 text-[10px] mb-3 uppercase font-sans">Points / Coordinates</p>
                         <div className="space-y-2 text-slate-300 border-t border-cyan-500/20 pt-3 w-full">
                            <p className="text-xs"><strong className="text-white">Address:</strong> At 742 Evergreen Tr</p>
                            <p className="text-xs"><strong className="text-white">Point:</strong> At the bus stop</p>
                            <p className="text-xs"><strong className="text-white">Time:</strong> At 9:15 AM</p>
                            <p className="text-xs"><strong className="text-white">Place:</strong> At the library</p>
                         </div>
                      </div>
                    </div>

                    <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20 mt-6">
                       <h4 className="text-red-400 font-bold text-sm mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> The &quot;EN&quot; Trap</h4>
                       <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <span className="text-red-400">❌</span>
                            <p className="text-slate-300">&quot;I will see you <strong className="text-white">in</strong> Monday.&quot; → <span className="text-green-400">On Monday.</span></p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-red-400">❌</span>
                            <p className="text-slate-300">&quot;The hotel is <strong className="text-white">in</strong> the 5th Avenue.&quot; → <span className="text-green-400">On 5th Avenue.</span></p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-red-400">❌</span>
                            <p className="text-slate-300">&quot;I am <strong className="text-white">at</strong> the car.&quot; → <span className="text-green-400">In the car.</span></p>
                          </div>
                       </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Navigational Dialogues"
                    subtitle="20 Minutes • Heavy Phrasal Drilling"
                    methodology="Contextual Shadowing & Variation"
                    accentColor="teal"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">
                        
                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-teal-500 pl-2">Dialogue 1: Meeting a Client</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Client:</strong> &quot;Where is your office located?&quot;</p>
                              <p className="text-slate-400 italic">&quot;Our office is <strong className="text-teal-300">in</strong> the Financial District, <strong className="text-teal-300">at</strong> 500 Broadway.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Client:</strong> &quot;Is it <strong className="text-teal-300">on</strong> the ground floor?&quot;</p>
                              <p className="text-slate-400 italic">&quot;No, it is <strong className="text-teal-300">on</strong> the 12th floor. Please arrive <strong className="text-teal-300">at</strong> 10:00 AM.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-emerald-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-emerald-500 pl-2">Dialogue 2: Finding a Landmark</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Tourist:</strong> &quot;How do I get to the Golden Gate Bridge?&quot;</p>
                              <p className="text-slate-400 italic">&quot;Go straight <strong className="text-emerald-300">on</strong> this road. Turn right <strong className="text-emerald-300">at</strong> the park. It is right <strong className="text-emerald-300">at</strong> the end.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Tourist:</strong> &quot;Can I go <strong className="text-emerald-300">on</strong> foot?&quot;</p>
                              <p className="text-slate-400 italic">&quot;It is too far. Better to go <strong className="text-emerald-300">on</strong> a bus or <strong className="text-emerald-300">in</strong> a taxi.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-cyan-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-cyan-500 pl-2">Dialogue 3: Scheduling a Delivery</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Driver:</strong> &quot;I am <strong className="text-cyan-300">at</strong> the gate. Can I leave the package <strong className="text-cyan-300">on</strong> the porch?&quot;</p>
                              <p className="text-slate-400 italic">&quot;Yes, please. I am not <strong className="text-cyan-300">at</strong> home right now. I am <strong className="text-cyan-300">at</strong> work.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Driver:</strong> &quot;Okay, I will leave it <strong className="text-cyan-300">at</strong> the front door.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Activity: The Blind Navigator */}
                  <CurriculumBlock 
                    icon={<Map />}
                    title="Phase 3: The Blind Navigator Challenge"
                    subtitle="20 Minutes • Active Practice"
                    methodology="Spatial Information Transfer"
                    accentColor="teal"
                  >
                     <div className="space-y-4">
                        <p className="text-sm text-slate-300 leading-relaxed">
                           One student has a map (The &quot;Eyes&quot;). The other has a blank grid (The &quot;Pen&quot;). The Eyes must guide the Pen to discover hidden objects using ONLY prepositions and directions.
                        </p>
                        <div className="bg-teal-900/10 rounded-xl p-5 border border-teal-500/20">
                           <h4 className="text-teal-400 font-bold text-sm mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Success Criteria</h4>
                           <ul className="text-xs text-slate-300 space-y-2">
                              <li className="flex items-center gap-2 font-mono"><span className="text-teal-500">✓</span> &quot;Go straight <strong className="text-white">on</strong> the main road.&quot;</li>
                              <li className="flex items-center gap-2 font-mono"><span className="text-teal-500">✓</span> &quot;Stop <strong className="text-white">at</strong> the red building.&quot;</li>
                              <li className="flex items-center gap-2 font-mono"><span className="text-teal-500">✓</span> &quot;The key is <strong className="text-white">in</strong> the blue box.&quot;</li>
                              <li className="flex items-center gap-2 font-mono"><span className="text-teal-500">✓</span> &quot;Turn right <strong className="text-white">at</strong> the intersection.&quot;</li>
                           </ul>
                        </div>
                     </div>
                  </CurriculumBlock>
                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 10: Capstone Finale */}
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
                      <p className="text-blue-400 font-medium tracking-wide text-xs uppercase">The Border Simulation</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-lg leading-relaxed">
                    This is the final test of Unit 1. No new theory. Only survival. We simulate the high-pressure environment of a US Customs and Border Protection interrogation.
                  </p>

                  <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
                    <h4 className="text-blue-400 font-bold text-sm mb-4 flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Success Requirements</h4>
                    <ul className="text-xs text-slate-300 space-y-3">
                       <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Answer Wh- questions without &apos;Ehhh...&apos;</li>
                       <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Zero hesitation on To Be/Have when describing self.</li>
                       <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Flawless date and number recognition.</li>
                       <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Maintain formal register throughout.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  <CurriculumBlock 
                    icon={<ShieldCheck />}
                    title="Phase 1: The CBP High-Pressure Simulation"
                    subtitle="45 Minutes • Maximum Stress Simulation"
                    methodology="Cognitive Overload Roleplay"
                    accentColor="blue"
                  >
                    <div className="bg-slate-950 rounded-xl border border-blue-500/30 w-full mt-4 p-5 overflow-hidden">
                       <div className="flex justify-between items-center mb-6">
                          <h4 className="text-blue-400 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                             <Plane className="w-4 h-4" /> Port of Entry: JFK Airport
                          </h4>
                          <span className="text-[10px] text-slate-500 font-mono">CODE: UNIT1_FINAL</span>
                       </div>
                       
                       <p className="text-xs text-slate-400 italic mb-6 border-l-2 border-slate-700 pl-4 py-1">
                          The instructor acts as the strict, non-smiling CBP Officer. The student must answer precisely. Incorrect prepositions or names spelled wrong result in &quot;Secondary Screening.&quot;
                       </p>

                       <div className="space-y-4 font-serif text-sm bg-slate-900/40 p-6 rounded-lg border border-white/5 relative">
                           <div className="absolute top-0 right-0 p-2 opacity-10"><Flag className="w-20 h-20" /></div>
                           
                           <div className="space-y-4">
                              <p className="text-slate-300"><strong className="text-white uppercase font-sans text-xs tracking-wider">Officer:</strong> &quot;Next! Passport and declaration, please.&quot;</p>
                              <p className="text-slate-400 italic pl-10">&quot;Good morning, Officer. Here is my passport.&quot;</p>
                              
                              <p className="text-slate-300"><strong className="text-white uppercase font-sans text-xs tracking-wider">Officer:</strong> &quot;What is the purpose of your visit?&quot;</p>
                              <p className="text-slate-400 italic pl-10">&quot;I am here for a cultural exchange program/vacation.&quot;</p>
                              
                              <p className="text-slate-300"><strong className="text-white uppercase font-sans text-xs tracking-wider">Officer:</strong> &quot;Where are you staying? I need the exact address.&quot;</p>
                              <p className="text-slate-400 italic pl-10">&quot;I am staying <strong className="text-white">at</strong> 1500 Ocean Avenue, in Miami.&quot;</p>
                              
                              <p className="text-slate-300"><strong className="text-white uppercase font-sans text-xs tracking-wider">Officer:</strong> &quot;Who lives there? Is it a hotel?&quot;</p>
                              <p className="text-slate-400 italic pl-10">&quot;No, it is my <strong className="text-white">aunt&apos;s</strong> house. Her name is Martha.&quot;</p>
                              
                              <p className="text-slate-300"><strong className="text-white uppercase font-sans text-xs tracking-wider">Officer:</strong> &quot;How much money do you have with you?&quot;</p>
                              <p className="text-slate-400 italic pl-10">&quot;I have <strong className="text-white font-mono">$1,500</strong> in cash and my credit cards.&quot;</p>
                              
                              <p className="text-slate-300"><strong className="text-white uppercase font-sans text-xs tracking-wider">Officer:</strong> &quot;Can you spell your sponsor&apos;s last name for me?&quot;</p>
                              <p className="text-slate-400 italic pl-10 font-mono uppercase">&quot;R-O-D-R-I-G-U-E-Z.&quot;</p>
                              
                              <p className="text-slate-300"><strong className="text-white uppercase font-sans text-xs tracking-wider">Officer:</strong> &quot;When do you return to your country?&quot;</p>
                              <p className="text-slate-400 italic pl-10">&quot;I return on <strong className="text-white">September 12th</strong>.&quot;</p>
                           </div>
                       </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<FileSearch />}
                    title="Phase 2: Secondary Screening (Advanced Mode)"
                    subtitle="15 Minutes • Critical Thinking Under Fire"
                    methodology="Unexpected Variation Challenge"
                    accentColor="blue"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      If the student successfully answers basic questions, the Officer increases the difficulty to test deeper Unit 1 knowledge (Hour 6 & 8).
                    </p>
                    <div className="bg-slate-900 rounded-xl p-5 border border-red-500/20">
                       <h4 className="text-red-400 font-bold text-xs uppercase mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> &quot;The Secondary&quot; Challenges</h4>
                       <ul className="space-y-3 text-sm">
                          <li className="flex items-start gap-3">
                             <div className="shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-[10px] text-red-400">1</div>
                             <p className="text-slate-300">&quot;Describe the person waiting for you outside.&quot; <span className="text-slate-500 italic block mt-1">(Tests Hour 8: Physical/Personality)</span></p>
                          </li>
                          <li className="flex items-start gap-3">
                             <div className="shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-[10px] text-red-400">2</div>
                             <p className="text-slate-300">&quot;Explain your relationship to every person on this list.&quot; <span className="text-slate-500 italic block mt-1">(Tests Hour 6: Possessives & Family)</span></p>
                          </li>
                       </ul>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<GraduationCap />}
                    title="Phase 3: Debrief & Graduation"
                    subtitle="15 Minutes • Unit 1 Conclusion"
                    methodology="Diagnostic Feedback"
                    accentColor="blue"
                  >
                     <div className="bg-slate-950 p-6 rounded-2xl border border-blue-500/20">
                        <p className="text-sm text-slate-300 leading-relaxed mb-4">
                           The instructor reviews the specific &apos;grammar breaks&apos; that happened under the simulation stress. Students who maintained structural integrity graduate to Unit 2 (The Threshold).
                        </p>
                        <div className="flex items-center gap-3 p-4 bg-green-500/5 rounded-xl border border-green-500/20">
                           <CheckCircle className="w-10 h-10 text-green-500 opacity-50" />
                           <div>
                              <p className="text-green-400 font-bold text-sm underline">CERTIFICATION CRITERIA:</p>
                              <p className="text-slate-400 text-xs mt-1">Foundational Fluency (Unit 1) - Level A1+ Achieved.</p>
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

      {/* Final Achievement Banner */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent -z-10" />
         <div className="container mx-auto px-6 text-center max-w-4xl">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-slate-900/50 p-16 rounded-[3rem] border border-blue-500/10 shadow-[0_0_100px_rgba(59,130,246,0.05)] relative overflow-hidden"
            >
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
               <Trophy className="w-20 h-20 text-blue-400 mx-auto mb-8 animate-pulse" />
               <h2 className="text-5xl font-black text-white mb-6">Unit 1 Mastered.</h2>
               <p className="text-slate-300 max-w-2xl mx-auto text-xl leading-relaxed font-serif italic">
                  &quot;The infrastructure is complete. You have transitioned from speaking by instinct to speaking by architecture.&quot;
               </p>
               <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
                  <button className="bg-white text-slate-950 font-black py-5 px-12 rounded-2xl hover:bg-blue-50 transition-all uppercase tracking-widest text-sm shadow-xl">
                     Begin Unit 2
                  </button>
                  <button className="bg-slate-800 text-white font-bold py-5 px-12 rounded-2xl hover:bg-slate-700 transition-all uppercase tracking-widest text-sm border border-white/5">
                     Practice Exam
                  </button>
               </div>
            </motion.div>
         </div>
      </section>

      <CurriculumNavigation 
        prevHref="/english-class/hours-7-8"
        prevLabel="Hours 7 & 8"
        nextHref="/english-class/hours-11-12"
        nextLabel="Unit 2: Hours 11 & 12"
        accentColor="teal"
      />
    </div>
  );
}
