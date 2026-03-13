"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  UserCircle, 
  Dna, 
  HelpCircle, 
  BookOpen, 
  Eye, 
  Smile, 
  TrendingUp, 
  MessageSquareQuote,
  Users
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassHours7and8() {
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-500/30">
      <CurriculumHeader 
        hourNumber="7 & 8"
        title="Identity &"
        subtitle="Descriptions: Hours 7 & 8"
        description="Learn to accurately describe physical appearances, personalities, and relationships. Master the critical difference between subject and possessive adjectives, and navigate the 'To Be' vs 'Have/Has' debate."
        accentColor="rose"
        moduleInfo="Intensive English Program • Part 4"
      />

      {/* Curriculum Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* HOUR 7: Possession & Connection */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500/50 via-rose-500/10 to-transparent hidden lg:block"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column: Context */}
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500/20 to-orange-500/10 text-rose-400 border border-rose-500/20 shadow-[0_0_40px_rgba(225,29,72,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">07</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Possession</h2>
                      <p className="text-rose-400 font-medium tracking-wide text-xs uppercase">Subject vs Possessive</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-lg leading-relaxed">
                    A common ESL pitfall is confusing who is doing the action vs who owns the object. Master the shift from "I" to "My", and "She" to "Her".
                  </p>

                  <CurriculumContext title="Pedagogical Focus: His vs Her" accentColor="rose">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong>The "Su" Problem:</strong> Spanish uses "su" for everything (his, her, its, your, their). In English, the possessive adjective must match the gender of the <strong className="text-white">OWNER</strong>, not the object.
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mt-2 border-l-2 border-rose-500 pl-2">
                       "Carlos loves <strong className="text-rose-400">his</strong> sister." (The sister is female, but Carlos is male, so we use "his").
                    </p>
                  </CurriculumContext>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  
                  <CurriculumBlock 
                    icon={<BookOpen />}
                    title="Phase 1: The Transformation Matrix"
                    subtitle="20 Minutes • Direct Instruction"
                    methodology="Grammar Translation & Charts"
                    accentColor="rose"
                  >
                    <div className="bg-slate-900 rounded-xl border border-rose-500/20 mt-4 overflow-hidden">
                       <table className="w-full text-sm text-left font-mono">
                          <thead className="bg-rose-950/50 text-rose-300">
                             <tr>
                                <th className="py-3 px-4 w-1/2 border-r border-slate-700">Subject Pronoun (Who does it?)</th>
                                <th className="py-3 px-4 w-1/2">Possessive Adjective (Who owns it?)</th>
                             </tr>
                          </thead>
                          <tbody className="text-slate-300 divide-y divide-slate-800">
                             <tr>
                                <td className="py-2 px-4 border-r border-slate-800">I (I have a car)</td>
                                <td className="py-2 px-4 text-white font-bold">My (My car is fast)</td>
                             </tr>
                             <tr>
                                <td className="py-2 px-4 border-r border-slate-800">You (You have a dog)</td>
                                <td className="py-2 px-4 text-white font-bold">Your (Your dog is big)</td>
                             </tr>
                             <tr>
                                <td className="py-2 px-4 border-r border-slate-800">He (He has a house)</td>
                                <td className="py-2 px-4 text-white font-bold">His (His house is new)</td>
                             </tr>
                             <tr>
                                <td className="py-2 px-4 border-r border-slate-800">She (She has a job)</td>
                                <td className="py-2 px-4 text-white font-bold">Her (Her job is hard)</td>
                             </tr>
                             <tr>
                                <td className="py-2 px-4 border-r border-slate-800">It (It has a bone)</td>
                                <td className="py-2 px-4 text-white font-bold">Its (Its bone is old)</td>
                             </tr>
                             <tr>
                                <td className="py-2 px-4 border-r border-slate-800">We (We have a class)</td>
                                <td className="py-2 px-4 text-white font-bold">Our (Our class is fun)</td>
                             </tr>
                             <tr>
                                <td className="py-2 px-4 border-r border-slate-800">They (They have tickets)</td>
                                <td className="py-2 px-4 text-white font-bold">Their (Their tickets are lost)</td>
                             </tr>
                          </tbody>
                       </table>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Relational Explanations"
                    subtitle="20 Minutes • Heavy Dialogue Practice"
                    methodology="Contextual Shadowing"
                    accentColor="rose"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">
                        
                        <div className="group">
                          <p className="text-rose-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-rose-500 pl-2">Dialogue 1: Lost Luggage</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Agent:</strong> "Is this <strong className="text-rose-300">your</strong> bag?"</p>
                              <p className="text-slate-400 italic">"No, that is not <strong className="text-rose-300">my</strong> bag. <strong className="text-rose-300">My</strong> bag is blue."</p>
                              <p className="text-slate-300"><strong className="text-white">Agent:</strong> "Does your wife have a blue bag?"</p>
                              <p className="text-slate-400 italic">"Yes, <strong className="text-rose-300">her</strong> bag is blue too, but <strong className="text-rose-300">our</strong> name tags are green."</p>
                          </div>
                        </div>

                        <div className="group">
                          <p className="text-orange-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-orange-500 pl-2">Dialogue 2: The New Boss</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Coworker:</strong> "Did you meet the new manager?"</p>
                              <p className="text-slate-400 italic">"Yes, I did. <strong className="text-orange-300">His</strong> name is Thomas. Do you know <strong className="text-orange-300">his</strong> wife?"</p>
                              <p className="text-slate-300"><strong className="text-white">Coworker:</strong> "No, but I know <strong className="text-orange-300">their</strong> kids. <strong className="text-orange-300">Their</strong> kids go to <strong className="text-orange-300">my</strong> school."</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<Users />}
                    title="Phase 3: The Family Tree Challenge"
                    subtitle="20 Minutes • Active Practice"
                    methodology="Pair Work Drawings"
                    accentColor="rose"
                  >
                     <p className="text-sm text-slate-300 leading-relaxed mt-4">
                        Student A describes an established character's family (e.g. Luke Skywalker). Student B must draw it based purely on the possessive descriptions. "Darth Vader is <strong className="text-rose-400">his</strong> father. Leia is <strong className="text-rose-400">his</strong> sister. Han Solo is <strong className="text-rose-400">her</strong> husband."
                     </p>
                  </CurriculumBlock>
                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 8: Describing Ourselves and Others */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/10 to-transparent hidden lg:block"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column: Context */}
              <div className="lg:w-1/3 relative">
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_40px_rgba(245,158,11,0.15)] flex-shrink-0 font-mono">
                      <span className="text-2xl font-bold">08</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Descriptions</h2>
                      <p className="text-amber-400 font-medium tracking-wide text-xs uppercase">Personality vs Physical</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Describing people accurately is crucial for survival (police reports, dating, meeting strangers). You must learn to separate internal characteristics from external traits.
                  </p>

                  <CurriculumContext title="The Big Confusion" accentColor="amber">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong>Two identical sounding questions with opposite meanings:</strong>
                    </p>
                    <div className="mt-3 space-y-2">
                       <p className="text-sm text-slate-300">1. <strong className="text-white">"What is she like?"</strong> = Ask about personality (To Be).</p>
                       <p className="text-sm text-slate-300">2. <strong className="text-white">"What does she look like?"</strong> = Ask about physical appearance.</p>
                    </div>
                  </CurriculumContext>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  <CurriculumBlock 
                    icon={<Dna />}
                    title="Phase 1: To Be vs Have"
                    subtitle="20 Minutes • Deep Grammar Theory"
                    methodology="Grammar Translation"
                    accentColor="amber"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm font-mono">
                      <div className="bg-slate-950/50 rounded-xl p-5 border border-amber-500/20">
                        <div className="flex items-center gap-2 mb-3">
                           <Smile className="w-5 h-5 text-amber-400" />
                           <h4 className="text-white font-semibold font-sans">Verb To Be (Adjectives)</h4>
                        </div>
                        <ul className="space-y-2 text-slate-300">
                          <li>He <strong className="text-white">is</strong> tall, short, fat, thin.</li>
                          <li>She <strong className="text-white">is</strong> funny, smart, shy, loud.</li>
                          <li className="mt-3 pt-3 border-t border-amber-500/20 text-xs italic text-amber-400">
                             Question: "What <strong className="underline">is</strong> he like?"<br/>
                             Answer: "He <strong className="underline">is</strong> friendly."
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-slate-950/50 rounded-xl p-5 border border-yellow-500/20">
                         <div className="flex items-center gap-2 mb-3">
                           <Eye className="w-5 h-5 text-yellow-400" />
                           <h4 className="text-white font-semibold font-sans">Verb Have/Has (Nouns)</h4>
                        </div>
                        <ul className="space-y-2 text-slate-300">
                          <li>He <strong className="text-white">has</strong> brown eyes.</li>
                          <li>She <strong className="text-white">has</strong> short blonde hair.</li>
                          <li className="mt-3 pt-3 border-t border-yellow-500/20 text-xs italic text-yellow-400">
                             Question: "What <strong className="underline">does</strong> he look like?"<br/>
                             Answer: "He <strong className="underline">has</strong> a beard."
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Descriptive Dialogues"
                    subtitle="25 Minutes • Massive Expansion"
                    methodology="Contextual Shadowing & Q&A"
                    accentColor="amber"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                       <div className="p-5 space-y-6">
                           
                           <div className="group border-b border-slate-800 pb-4">
                             <p className="text-amber-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-amber-500 pl-2">Dialogue 1: The Blind Date Setup</p>
                             <div className="space-y-2 font-serif text-sm">
                                 <p className="text-slate-300"><strong className="text-white">Sarah:</strong> "I want you to meet my friend, John."</p>
                                 <p className="text-slate-400 italic">"Oh really? What <strong className="text-amber-300">is</strong> he like?"</p>
                                 <p className="text-slate-300"><strong className="text-white">Sarah:</strong> "He <strong className="text-amber-300">is</strong> very funny and smart."</p>
                                 <p className="text-slate-400 italic">"Nice. And what <strong className="text-amber-300">does he look like?</strong>"</p>
                                 <p className="text-slate-300"><strong className="text-white">Sarah:</strong> "He <strong className="text-amber-300">is</strong> tall. He <strong className="text-yellow-300">has</strong> dark hair and he <strong className="text-yellow-300">has</strong> glasses."</p>
                             </div>
                           </div>

                           <div className="group pb-2">
                             <p className="text-indigo-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-indigo-500 pl-2">Dialogue 2: The Police Report</p>
                             <div className="space-y-2 font-serif text-sm">
                                 <p className="text-slate-300"><strong className="text-white">Officer:</strong> "Can you describe the person who stole your bag?"</p>
                                 <p className="text-slate-400 italic">"Yes, she <strong className="text-amber-300">is</strong> a young woman, maybe 25 years old."</p>
                                 <p className="text-slate-300"><strong className="text-white">Officer:</strong> "What <strong className="text-amber-300">does she look like?</strong>"</p>
                                 <p className="text-slate-400 italic">"She <strong className="text-amber-300">is</strong> very short. She <strong className="text-yellow-300">has</strong> red hair and she <strong className="text-yellow-300">has</strong> a tattoo on her arm."</p>
                             </div>
                           </div>

                       </div>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<UserCircle />}
                    title="Phase 3: Guess Who!"
                    subtitle="15 Minutes • Active Practice"
                    methodology="Competitive Gamification"
                    accentColor="amber"
                  >
                     <p className="text-sm text-slate-300 leading-relaxed mt-4">
                        Bring the classic board game "Guess Who" to life. A student picks a famous celebrity. The rest of the class can only ask yes/no questions using To Be and Have/Has to identify them. ("Is she a singer?", "Does he have long hair?")
                     </p>
                  </CurriculumBlock>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <CurriculumNavigation 
        prevHref="/english-class/hours-5-6"
        prevLabel="Hours 5 & 6"
        nextHref="/english-class/hours-9-10"
        nextLabel="Hours 9 & 10"
        accentColor="rose"
      />
    </div>
  );
}
