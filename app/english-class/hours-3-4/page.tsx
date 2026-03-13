"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  MapPin, 
  Coffee, 
  Wallet,
  Coins,
  MessageSquareQuote,
  TrendingUp,
  Lightbulb,
  Users,
  BookOpen,
  CalendarDays,
  Briefcase,
  PhoneCall
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassHours3and4() {
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
        hourNumber="3 & 4"
        title="Survival & Success:"
        subtitle="Hours 3 & 4"
        description="Transform basic knowledge into functional independence. In these critical modules, students learn to navigate essential daily scenarios—from ordering coffee to understanding American currency—using dynamic, high-engagement teaching methodologies."
        accentColor="emerald"
        moduleInfo="Intensive English Program • Part 2"
      />

      {/* Curriculum Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* HOUR 3: Talking Quantities & Order */}
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
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">03</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Quantities &amp; Order</h2>
                      <p className="text-emerald-400 font-medium tracking-wide text-xs uppercase">Numbers in Action</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Numbers dictate our lives abroad: flight gates, wages, rent, and semester dates. This module goes deep into phonetic differentiation between similar-sounding numbers.
                  </p>

                  <CurriculumContext title="Pedagogical Focus: The 'TH' & 'TEEN'" accentColor="emerald">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong>The "TH" Challenge:</strong> Spanish lacks the interdental fricative /θ/. We must physically force the tongue between the teeth for numbers like 3, 13, and 30.
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mt-2 border-l-2 border-emerald-500 pl-2">
                      <strong>13 vs 30:</strong> Emphasize the long, stressed /i:/ in "thir-TEEN" versus the short, front-stressed "THIR-ty".
                    </p>
                  </CurriculumContext>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  
                  <CurriculumBlock 
                    icon={<BookOpen />}
                    title="Phase 1: Number Architecture Theory"
                    subtitle="20 Minutes • Direct Instruction"
                    methodology="Explicit Grammar Translation"
                    accentColor="emerald"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm font-mono">
                      <div className="bg-slate-950/50 rounded-xl p-5 border border-emerald-500/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Coins className="w-5 h-5 text-emerald-400" />
                          <h4 className="text-white font-semibold font-sans">Cardinals (Amounts)</h4>
                        </div>
                        <ul className="space-y-2 text-slate-300">
                          <li className="border-b border-emerald-500/20 pb-2">
                            <span className="text-emerald-400 font-bold block">Ages:</span>
                            "I am 21 years old." (Never "I have")
                          </li>
                          <li className="border-b border-emerald-500/20 pb-2">
                            <span className="text-emerald-400 font-bold block">Money:</span>
                            $4.50 = "Four dollars and fifty cents" OR "Four-fifty"
                          </li>
                          <li>
                            <span className="text-emerald-400 font-bold block">Years:</span>
                            1995 = "Nineteen ninety-five"
                          </li>
                        </ul>
                      </div>

                      <div className="bg-slate-950/50 rounded-xl p-5 border border-teal-500/20">
                        <div className="flex items-center gap-2 mb-3">
                          <CalendarDays className="w-5 h-5 text-teal-400" />
                          <h4 className="text-white font-semibold font-sans">Ordinals (Order & Dates)</h4>
                        </div>
                        <div className="space-y-2 text-slate-300">
                          <div className="border-b border-teal-500/20 pb-2">
                            <span className="text-teal-400 font-bold">The Exceptions:</span>
                            <div className="grid grid-cols-3 gap-2 mt-1">
                               <span>1st (First)</span>
                               <span>2nd (Second)</span>
                               <span>3rd (Third)</span>
                            </div>
                          </div>
                          <div className="border-b border-teal-500/20 pb-2">
                            <span className="text-teal-400 font-bold block">The Standard "TH":</span>
                            4th (Fourth), 5th (Fifth - notice the 've' to 'f' shift), 12th (Twelfth)
                          </div>
                          <div>
                            <span className="text-teal-400 font-bold block">Dates Formula:</span>
                            Month + Ordinal (e.g., "July Fourth")
                          </div>
                        </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<MessageSquareQuote />}
                    title="Phase 2: The Numerical Matrix"
                    subtitle="25 Minutes • Heavy Dialogue Expansion"
                    methodology="Contextual Shadowing & Dictation"
                    accentColor="emerald"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">
                        
                        <div className="group">
                          <p className="text-emerald-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-emerald-500 pl-2">Scenario 1: The Cashier (Prices)</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Cashier:</strong> "Your total is fourteen-seventy-five." ($14.75)</p>
                              <p className="text-slate-400 italic">"Here is a twenty dollar bill."</p>
                              <p className="text-slate-300"><strong className="text-white">Cashier:</strong> "And here is five-twenty-five in change." ($5.25)</p>
                          </div>
                        </div>

                        <div className="group">
                          <p className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-teal-500 pl-2">Scenario 2: The HR Department (Dates)</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Manager:</strong> "What is your date of birth?"</p>
                              <p className="text-slate-400 italic">"I was born on October twenty-first, nineteen ninety-eight." (Oct 21st, 1998)</p>
                              <p className="text-slate-300"><strong className="text-white">Manager:</strong> "And when does your visa expire?"</p>
                              <p className="text-slate-400 italic">"It expires on March fifteenth." (Mar 15th)</p>
                          </div>
                        </div>

                        <div className="group">
                          <p className="text-cyan-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-cyan-500 pl-2">Scenario 3: The Call Center (Phone Numbers)</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Agent:</strong> "Can I get a good call-back number for you?"</p>
                              <p className="text-slate-400 italic">"Sure. It's area code three-zero-five, eight-six-seven, nine-zero-two-two."</p>
                              <p className="text-blue-300 text-xs mt-1 font-mono">(Note: O is commonly pronounced as "Oh" in American phone numbers)</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<Users />}
                    title="Phase 3: The Chaos Market Roleplay"
                    subtitle="20 Minutes • Peer Speaking"
                    methodology="Kinesthetic High-Pressure Interaction"
                    accentColor="emerald"
                  >
                     <p className="text-sm text-slate-300 leading-relaxed mt-4">
                        Half the class become cashiers, half are buyers. Buyers are handed a card with a tight budget (e.g., $43.50). They must go to 3 different "stores" (desks) and ask for prices of items, calculating their remaining budget aloud in English.
                     </p>
                  </CurriculumBlock>
                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 4: Personal Identity */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/10 to-transparent hidden lg:block"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column: Context */}
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">04</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Personal Identity</h2>
                      <p className="text-purple-400 font-medium tracking-wide text-xs uppercase">To Be & Occupations</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Mastering the bedrock of English: the Verb "To Be". How you state your profession and age defines your initial authority and directly impacts visa interview success.
                  </p>

                  <CurriculumContext title="Pedagogical Focus: The Article Wall" accentColor="purple">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong>Occupations Article:</strong> Spanish speakers say "Soy profesor" (I am teacher). In English, we MUST build the article wall: "I am <span className="text-white font-bold">A</span> teacher" or "She is <span className="text-white font-bold">AN</span> engineer." 
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mt-2 border-l-2 border-purple-500 pl-2">
                       <strong>Age is a State, Not a Possession:</strong> You do not "have" years in English. You "are" a specific age.
                    </p>
                  </CurriculumContext>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  <CurriculumBlock 
                    icon={<BookOpen />}
                    title="Phase 1: The 'To Be' Engine"
                    subtitle="20 Minutes • Deep Grammar Theory"
                    methodology="Structural Analysis & Translation"
                    accentColor="purple"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 font-mono text-sm">
                      <div className="bg-slate-950/50 rounded-xl p-5 border border-purple-500/20 space-y-4">
                        <div>
                          <h4 className="text-purple-400 font-bold mb-1">Affirmative (+)</h4>
                          <p className="text-white">I am (I'm)</p>
                          <p className="text-white">You/We/They are ('re)</p>
                          <p className="text-white">He/She/It is ('s)</p>
                        </div>
                        <div className="pt-4 border-t border-purple-500/20">
                          <h4 className="text-rose-400 font-bold mb-1">Negative (-)</h4>
                          <p className="text-white">I am not (I'm not)</p>
                          <p className="text-white">You are not (aren't)</p>
                          <p className="text-white">He is not (isn't)</p>
                        </div>
                      </div>
                      
                      <div className="bg-slate-950/50 rounded-xl p-5 border border-fuchsia-500/20 flex flex-col justify-between">
                         <div>
                            <h4 className="text-cyan-400 font-bold mb-1">Interrogative (?)</h4>
                            <p className="text-slate-400 italic">Invert the verb and subject!</p>
                            <div className="mt-2 space-y-1">
                               <p className="text-white">Am I?</p>
                               <p className="text-white">Are you/we/they?</p>
                               <p className="text-white">Is he/she/it?</p>
                            </div>
                         </div>
                         <div className="mt-4 p-3 bg-fuchsia-950/30 rounded border border-fuchsia-500/20">
                            <h4 className="text-fuchsia-400 font-bold text-xs uppercase">The Article Rule:</h4>
                            <p className="text-xs text-slate-300 mt-1">A + Consonant sound (A doctor)</p>
                            <p className="text-xs text-slate-300">An + Vowel sound (An actor)</p>
                         </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<Briefcase />}
                    title="Phase 2: Occupational Identity Bank"
                    subtitle="25 Minutes • Massive Dialogue Expansion"
                    methodology="Contextual Shadowing & Q&A"
                    accentColor="purple"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                       <div className="p-5 space-y-6">
                           
                           <div className="group">
                             <p className="text-purple-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-purple-500 pl-2">The J1 Visa Interview</p>
                             <div className="space-y-2 font-serif text-sm">
                                 <p className="text-slate-300"><strong className="text-white">Officer:</strong> "Why do you want to go to the US?"</p>
                                 <p className="text-slate-400 italic">"I <span className="text-purple-300 font-bold">am</span> a university student in Colombia. I <span className="text-purple-300 font-bold">am</span> participating in a cultural exchange."</p>
                                 <p className="text-slate-300"><strong className="text-white">Officer:</strong> "Are you a senior?"</p>
                                 <p className="text-slate-400 italic">"No, I <span className="text-purple-300 font-bold">am not</span>. I <span className="text-purple-300 font-bold">am</span> a sophomore."</p>
                             </div>
                           </div>

                           <div className="group">
                             <p className="text-fuchsia-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-fuchsia-500 pl-2">The Job Fair Networking</p>
                             <div className="space-y-2 font-serif text-sm">
                                 <p className="text-slate-300"><strong className="text-white">Recruiter:</strong> "Are you an engineer?"</p>
                                 <p className="text-slate-400 italic">"Yes, I <span className="text-fuchsia-300 font-bold">am</span>. I <span className="text-fuchsia-300 font-bold">am</span> a software engineer at a startup."</p>
                                 <p className="text-slate-300"><strong className="text-white">Recruiter:</strong> "Is your boss here today?"</p>
                                 <p className="text-slate-400 italic">"No, she <span className="text-fuchsia-300 font-bold">isn't</span>. She <span className="text-fuchsia-300 font-bold">is</span> currently in a meeting."</p>
                             </div>
                           </div>
                           
                       </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<Users />}
                    title="Phase 3: The Interrogation Room"
                    subtitle="15 Minutes • Live Roleplay"
                    methodology="High-Speed Q&A Drilling"
                    accentColor="purple"
                  >
                     <p className="text-sm text-slate-300 leading-relaxed mt-4">
                        Students form two lines facing each other (Speed dating style). They have exactly 30 seconds to extract: Name, Age, Profession, and "Are you a student?". At the buzzer, they shuffle left. This forces the "To Be" structure into muscle memory.
                     </p>
                  </CurriculumBlock>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <CurriculumNavigation 
        prevHref="/english-class"
        prevLabel="Hours 1 & 2"
        nextHref="/english-class/hours-5-6"
        nextLabel="Hours 5 & 6"
        accentColor="emerald"
      />
    </div>
  );
}
