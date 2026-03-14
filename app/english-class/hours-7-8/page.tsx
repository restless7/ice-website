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
  Users,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  Target,
  PenTool,
  Shirt,
  Briefcase
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
                      <strong>The &quot;Su&quot; Problem:</strong> Spanish uses &quot;su&quot; for everything (his, her, its, your, their). In English, the possessive adjective must match the gender of the <strong className="text-white">OWNER</strong>, not the object.
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mt-2 border-l-2 border-rose-500 pl-2">
                       &quot;Carlos loves <strong className="text-rose-400">his</strong> sister.&quot; (The sister is female, but Carlos is male, so we use &quot;his&quot;).
                    </p>
                  </CurriculumContext>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  
                  <CurriculumBlock 
                    icon={<BookOpen />}
                    title="Phase 1: The Possessive Transformation"
                    subtitle="20 Minutes • Direct Instruction"
                    methodology="Grammar Translation & Matrix Analysis"
                    accentColor="rose"
                  >
                    <p className="text-slate-300 leading-relaxed mb-4">
                      Possessive adjectives are always followed by a <strong className="text-white">noun</strong>. They describe the relationship of ownership between a subject and an object.
                    </p>

                    <div className="bg-slate-900 rounded-xl border border-rose-500/20 mt-4 overflow-hidden">
                       <table className="w-full text-sm text-left font-mono">
                          <thead className="bg-rose-950/50 text-rose-300">
                             <tr>
                                <th className="py-3 px-4 w-1/2 border-r border-slate-700 font-sans">Subject (Who?)</th>
                                <th className="py-3 px-4 w-1/2 font-sans">Possessive (Whose?)</th>
                             </tr>
                          </thead>
                          <tbody className="text-slate-300 divide-y divide-slate-800">
                             <tr>
                                <td className="py-2 px-4 border-r border-slate-800"><strong className="text-white">I</strong> study every day.</td>
                                <td className="py-2 px-4"><strong className="text-rose-400">My</strong> teacher is nice.</td>
                             </tr>
                             <tr>
                                <td className="py-2 px-4 border-r border-slate-800"><strong className="text-white">You</strong> are happy.</td>
                                <td className="py-2 px-4"><strong className="text-rose-400">Your</strong> smile is bright.</td>
                             </tr>
                             <tr>
                                <td className="py-2 px-4 border-r border-slate-800"><strong className="text-white">He</strong> has a car.</td>
                                <td className="py-2 px-4"><strong className="text-rose-400">His</strong> car is fast. <span className="text-xs text-slate-500">(Carlos&apos;s car)</span></td>
                             </tr>
                             <tr>
                                <td className="py-2 px-4 border-r border-slate-800"><strong className="text-white">She</strong> is a doctor.</td>
                                <td className="py-2 px-4"><strong className="text-rose-400">Her</strong> office is clean. <span className="text-xs text-slate-500">(Maria&apos;s office)</span></td>
                             </tr>
                             <tr>
                                <td className="py-2 px-4 border-r border-slate-800"><strong className="text-white">It</strong> (the dog) is small.</td>
                                <td className="py-2 px-4"><strong className="text-rose-400">Its</strong> tail is short. <span className="text-xs text-slate-500">(no apostrophe!)</span></td>
                             </tr>
                             <tr>
                                <td className="py-2 px-4 border-r border-slate-800"><strong className="text-white">We</strong> are in class.</td>
                                <td className="py-2 px-4"><strong className="text-rose-400">Our</strong> lesson is fun.</td>
                             </tr>
                             <tr>
                                <td className="py-2 px-4 border-r border-slate-800"><strong className="text-white">They</strong> live in Miami.</td>
                                <td className="py-2 px-4"><strong className="text-rose-400">Their</strong> house is near the beach.</td>
                             </tr>
                          </tbody>
                       </table>
                    </div>

                    <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20 mt-6">
                       <h4 className="text-red-400 font-bold text-sm mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> The Su/His/Her Conflict</h4>
                       <p className="text-slate-300 text-sm mb-3 italic">Spanish error: &quot;Carlos loves su sister.&quot; → &quot;Carlos loves her sister.&quot; ❌</p>
                       <p className="text-slate-300 text-sm">
                          If Carlos is the owner, we use <strong className="text-white">HIS</strong>, regardless of the sister&apos;s gender. Only use <strong className="text-white">HER</strong> if the owner is female.
                       </p>
                    </div>
                  </CurriculumBlock>

                  <CurriculumBlock 
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Relational Explanations"
                    subtitle="20 Minutes • Heavy Dialogue Practice"
                    methodology="Contextual Shadowing & Roleplay"
                    accentColor="rose"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">
                        
                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-rose-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-rose-500 pl-2">Dialogue 1: Lost Luggage at the Airport</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Agent:</strong> &quot;Is this <strong className="text-rose-300">your</strong> bag?&quot;</p>
                              <p className="text-slate-400 italic">&quot;No, that is not <strong className="text-rose-300">my</strong> bag. <strong className="text-rose-300">My</strong> bag is blue.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Agent:</strong> &quot;What about <strong className="text-rose-300">your</strong> friends? Are those <strong className="text-rose-300">their</strong> suitcases?&quot;</p>
                              <p className="text-slate-400 italic">&quot;No, <strong className="text-rose-300">their</strong> bags are over there. <strong className="text-rose-300">Our</strong> group is very organized.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-orange-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-orange-500 pl-2">Dialogue 2: The New Boss</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Coworker:</strong> &quot;Did you meet the new manager?&quot;</p>
                              <p className="text-slate-400 italic">&quot;Yes, I did. <strong className="text-orange-300">His</strong> name is Thomas.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Coworker:</strong> &quot;I heard <strong className="text-orange-300">his</strong> office is very big.&quot;</p>
                              <p className="text-slate-400 italic">&quot;It is! And <strong className="text-orange-300">his</strong> assistant, Maria, is very helpful. <strong className="text-orange-300">Her</strong> desk is right outside.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-rose-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-rose-500 pl-2">Dialogue 3: Problem with the Room</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Guest:</strong> &quot;Excuse me, <strong className="text-rose-300">my</strong> room is very hot. <strong className="text-rose-300">Its</strong> air conditioner is broken.&quot;</p>
                              <p className="text-slate-400 italic">&quot;I am sorry. Let me check <strong className="text-rose-300">our</strong> system.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Clerk:</strong> &quot;Is this <strong className="text-rose-300">your</strong> key card?&quot;</p>
                              <p className="text-slate-400 italic">&quot;Yes, it is. And <strong className="text-rose-300">my</strong> roommate&apos;s name is Mateo. <strong className="text-rose-300">His</strong> key card is also not working.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Activity: The Bag of Tricks */}
                  <CurriculumBlock 
                    icon={<Target />}
                    title="Phase 3: Whose is it? (The Bag of Tricks)"
                    subtitle="20 Minutes • Active Practice"
                    methodology="Object Association Drill"
                    accentColor="rose"
                  >
                     <div className="space-y-4">
                        <p className="text-sm text-slate-300 leading-relaxed">
                           Teacher collects 5 random objects from students (a pen, a phone, a notebook, glasses, a watch) and puts them in a bag. 
                        </p>
                        <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800">
                           <h4 className="text-white font-semibold mb-3 flex items-center gap-2"><Briefcase className="w-4 h-4 text-rose-400"/> The Drill Protocol</h4>
                           <ol className="text-sm text-slate-300 space-y-3 list-decimal list-inside">
                              <li>Teacher pulls out an object: &quot;Is this <strong className="text-rose-400">your</strong> pen, Juan?&quot;</li>
                              <li>Juan: &quot;No, it is not <strong className="text-rose-400">my</strong> pen. It is <strong className="text-rose-400">his</strong> pen!&quot; (points to Carlos).</li>
                              <li>Teacher: &quot;And this phone? Is it <strong className="text-rose-400">her</strong> phone?&quot; (points to Maria).</li>
                              <li>Class: &quot;Yes! It is <strong className="text-rose-400">her</strong> phone!&quot;</li>
                           </ol>
                        </div>
                        <p className="text-xs text-slate-500 italic">Teacher Tip: Force students to use gestures and physical proximity to reinforce the ownership connection.</p>
                     </div>
                  </CurriculumBlock>

                  {/* Possession Flip Quiz */}
                  <CurriculumBlock 
                    icon={<CheckCircle />}
                    title="Phase 4: Possessive Flip Quiz"
                    subtitle="10 Minutes • Assessment"
                    methodology="Sentence Transformation Drill"
                    accentColor="rose"
                  >
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                      <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-3">
                          <span className="text-rose-400 font-bold shrink-0">1.</span>
                          <div>
                            <p className="text-slate-400">&quot;She has a red dress.&quot;</p>
                            <p className="text-green-400 font-bold">→ &quot;Her dress is red.&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-3">
                          <span className="text-rose-400 font-bold shrink-0">2.</span>
                          <div>
                            <p className="text-slate-400">&quot;They have a new manager.&quot;</p>
                            <p className="text-green-400 font-bold">→ &quot;Their manager is new.&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 border-b border-slate-800 pb-3">
                          <span className="text-rose-400 font-bold shrink-0">3.</span>
                          <div>
                            <p className="text-slate-400">&quot;We have an English test.&quot;</p>
                            <p className="text-green-400 font-bold">→ &quot;Our English test is today.&quot;</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-rose-400 font-bold shrink-0">4.</span>
                          <div>
                            <p className="text-slate-400">&quot;Carlos has a blue passport.&quot;</p>
                            <p className="text-green-400 font-bold">→ &quot;His passport is blue.&quot;</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
                      <h2 className="text-3xl font-bold text-white tracking-tight">Identity</h2>
                      <p className="text-amber-400 font-medium tracking-wide text-xs uppercase">Personality vs Physical</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Describing people accurately is crucial for survival (police reports, dating, meeting strangers). You must learn to separate internal characteristics from external traits.
                  </p>

                  <CurriculumContext title="The Description Rule" accentColor="amber">
                    <p className="text-sm text-slate-300 leading-relaxed mb-3">
                      <strong>Two identical sounding questions with opposite meanings:</strong>
                    </p>
                    <div className="space-y-3">
                       <div className="bg-slate-950/50 p-3 rounded-lg border border-amber-500/20">
                          <p className="text-xs text-amber-400 font-bold uppercase mb-1">Personality</p>
                          <p className="text-sm text-white font-mono">&quot;What <strong className="underline">is</strong> she like?&quot;</p>
                          <p className="text-xs text-slate-500 mt-1 italic">Uses the verb TO BE. Answer: &quot;She is friendly.&quot;</p>
                       </div>
                       <div className="bg-slate-950/50 p-3 rounded-lg border border-yellow-500/20">
                          <p className="text-xs text-yellow-400 font-bold uppercase mb-1">Appearance</p>
                          <p className="text-sm text-white font-mono">&quot;What <strong className="underline">does</strong> she look like?&quot;</p>
                          <p className="text-xs text-slate-500 mt-1 italic">Uses DOES/LOOK LIKE. Answer: &quot;She has blonde hair.&quot;</p>
                       </div>
                    </div>
                  </CurriculumContext>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">

                  {/* Theory: Physical Vocabulary */}
                  <CurriculumBlock 
                    icon={<Eye />}
                    title="Theory: The Physical Arsenal"
                    subtitle="20 Minutes • Visual Vocabulary Expansion"
                    methodology="Visual Mapping & Grouping"
                    accentColor="amber"
                  >
                    <p className="text-slate-300 leading-relaxed mb-4">
                      Physical descriptions require a combination of <strong className="text-white">To Be</strong> (for general build) and <strong className="text-white">To Have</strong> (for specific features).
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                         <h4 className="text-amber-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-amber-500">Hair & Eyes (Have/Has)</h4>
                         <div className="space-y-2 text-sm">
                            <p className="text-slate-300 flex justify-between"><span>Long / Short</span> <span className="text-slate-500">Hair</span></p>
                            <p className="text-slate-300 flex justify-between"><span>Straight / Curly / Wavy</span> <span className="text-slate-500">Hair</span></p>
                            <p className="text-slate-300 flex justify-between"><span>Blonde / Brunette / Red</span> <span className="text-slate-500">Hair</span></p>
                            <p className="text-slate-300 flex justify-between"><span>Blue / Brown / Green</span> <span className="text-slate-500">Eyes</span></p>
                            <p className="text-slate-300 flex justify-between"><span>Beard / Mustache / Glasses</span> <span className="text-slate-500">Features</span></p>
                         </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                         <h4 className="text-yellow-400 font-bold text-xs uppercase mb-3 tracking-widest pl-2 border-l-2 border-yellow-500">Build & Height (To Be)</h4>
                         <div className="space-y-2 text-sm">
                            <p className="text-slate-300 flex justify-between"><span>Tall / Short / Average</span> <span className="text-slate-500">Height</span></p>
                            <p className="text-slate-300 flex justify-between"><span>Thin / Slim / Fit</span> <span className="text-slate-500">Build</span></p>
                            <p className="text-slate-300 flex justify-between"><span>Athletic / Muscular</span> <span className="text-slate-500">Build</span></p>
                            <p className="text-slate-300 flex justify-between"><span>Young / Middle-aged / Old</span> <span className="text-slate-500">Age</span></p>
                            <p className="text-slate-300 flex justify-between"><span>Beautiful / Handsome</span> <span className="text-slate-500">Traits</span></p>
                         </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Theory: Personality Vocabulary */}
                  <CurriculumBlock 
                    icon={<Smile />}
                    title="Theory: Personality Traits"
                    subtitle="15 Minutes • Descriptive Adjectives"
                    methodology="Antonym Matching"
                    accentColor="amber"
                  >
                    <p className="text-slate-300 leading-relaxed mb-4">
                      When talking about identity, we use <strong className="text-white">To Be + Adjective</strong>. Learning adjectives in pairs (opposites) accelerates retention.
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                        <div className="bg-amber-500/5 rounded-lg p-3 border border-amber-500/10 flex flex-col justify-center">
                          <p className="text-amber-400 font-bold">Friendly</p>
                          <p className="text-slate-500 italic">vs. Unfriendly</p>
                        </div>
                        <div className="bg-amber-500/5 rounded-lg p-3 border border-amber-500/10 flex flex-col justify-center">
                          <p className="text-amber-400 font-bold">Hard-working</p>
                          <p className="text-slate-500 italic">vs. Lazy</p>
                        </div>
                        <div className="bg-amber-500/5 rounded-lg p-3 border border-amber-500/10 flex flex-col justify-center">
                          <p className="text-amber-400 font-bold">Smart / Intelligent</p>
                          <p className="text-slate-500 italic">vs. Stupid / Dumb</p>
                        </div>
                        <div className="bg-yellow-500/5 rounded-lg p-3 border border-yellow-500/10 flex flex-col justify-center">
                          <p className="text-yellow-400 font-bold">Shy / Quiet</p>
                          <p className="text-slate-500 italic">vs. Outgoing</p>
                        </div>
                        <div className="bg-yellow-500/5 rounded-lg p-3 border border-yellow-500/10 flex flex-col justify-center">
                          <p className="text-yellow-400 font-bold">Polite</p>
                          <p className="text-slate-500 italic">vs. Rude</p>
                        </div>
                        <div className="bg-yellow-500/5 rounded-lg p-3 border border-yellow-500/10 flex flex-col justify-center">
                          <p className="text-yellow-400 font-bold">Funny</p>
                          <p className="text-slate-500 italic">vs. Serious</p>
                        </div>
                    </div>
                  </CurriculumBlock>

                  {/* Descriptive Dialogues */}
                  <CurriculumBlock 
                    icon={<MessageSquareQuote />}
                    title="Phase 2: Descriptive Challenges"
                    subtitle="25 Minutes • Contextual Shadowing"
                    methodology="Pronunciation & Intonation"
                    accentColor="amber"
                  >
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                      <div className="p-5 space-y-6">
                        
                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-amber-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-amber-500 pl-2">Dialogue 1: Meeting a Partner at the Airport</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Host:</strong> &quot;What <strong className="text-amber-300">does he look like?</strong> I am at the gate now.&quot;</p>
                              <p className="text-slate-400 italic">&quot;He <strong className="text-amber-300">is</strong> very tall. He <strong className="text-yellow-300">has</strong> curly black hair and a small beard.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Host:</strong> &quot;Is he wearing a red jacket?&quot;</p>
                              <p className="text-slate-400 italic">&quot;No, he <strong className="text-yellow-300">has</strong> a blue backpack and a green shirt.&quot;</p>
                          </div>
                        </div>

                        <div className="group border-b border-slate-800 pb-4">
                          <p className="text-yellow-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-yellow-500 pl-2">Dialogue 2: Gossip at the Office</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Mark:</strong> &quot;What <strong className="text-amber-300">is</strong> the new HR manager like?&quot;</p>
                              <p className="text-slate-400 italic">&quot;She <strong className="text-amber-300">is</strong> extremely polite and hard-working. But she <strong className="text-amber-300">is</strong> very serious.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Mark:</strong> &quot;Does she look like Maria?&quot;</p>
                              <p className="text-slate-400 italic">&quot;A little. She <strong className="text-yellow-300">has</strong> short brown hair and she <strong className="text-yellow-300">has</strong> glasses, but she <strong className="text-amber-300">is</strong> much taller than Maria.&quot;</p>
                          </div>
                        </div>

                        <div className="group pb-2">
                          <p className="text-orange-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-orange-500 pl-2">Dialogue 3: Making a Police Report</p>
                          <div className="space-y-2 font-serif text-sm">
                              <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;Describe the suspect in detail.&quot;</p>
                              <p className="text-slate-400 italic">&quot;He <strong className="text-amber-300">was</strong> a middle-aged man. He <strong className="text-yellow-300">had</strong> a scar on his face and <strong className="text-yellow-300">no</strong> hair — he <strong className="text-amber-300">is</strong> bald.&quot;</p>
                              <p className="text-slate-300"><strong className="text-white">Officer:</strong> &quot;What <strong className="text-amber-300">was</strong> he like? Was he aggressive?&quot;</p>
                              <p className="text-slate-400 italic">&quot;No, he <strong className="text-amber-300">was</strong> very quiet and calm. It was scary.&quot;</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CurriculumBlock>

                  {/* Activity: Criminal Profiling */}
                  <CurriculumBlock 
                    icon={<PenTool />}
                    title="Phase 3: The Profile Builder"
                    subtitle="20 Minutes • Descriptive Design"
                    methodology="Creative Writing & Presentation"
                    accentColor="amber"
                  >
                     <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        Teacher gives each student a &quot;Criminal Face&quot; (printed illustration). The student must write a full profile using at least 5 physical traits and 3 personality traits.
                     </p>
                     
                     <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden font-mono text-xs">
                        <div className="bg-amber-900/30 p-3 border-b border-slate-700 flex justify-between">
                           <span className="text-amber-400 font-bold uppercase">WANTED: Suspect Profile #402</span>
                           <span className="text-slate-500 italic">Confidential</span>
                        </div>
                        <div className="p-4 space-y-3">
                           <div>
                              <p className="text-slate-500 mb-1">Physical Description:</p>
                              <p className="text-slate-300 pl-4 border-l border-amber-500/30">
                                 The suspect <strong className="text-white">is</strong> athletic. He <strong className="text-white">has</strong> short wavy hair and green eyes. He <strong className="text-white">is</strong> tall and he <strong className="text-white">has</strong> a tattoo of a bird on his hand. He <strong className="text-white">has</strong> a small mole on his chin.
                              </p>
                           </div>
                           <div>
                              <p className="text-slate-500 mb-1">Estimated Personality:</p>
                              <p className="text-slate-300 pl-4 border-l border-amber-500/30">
                                 Informants say he <strong className="text-white">is</strong> intelligent and very quiet. He <strong className="text-white">is</strong> not friendly. He <strong className="text-white">is</strong> cold and rude to strangers.
                              </p>
                           </div>
                        </div>
                     </div>
                  </CurriculumBlock>

                  {/* Activity: Guess Who Challenge */}
                  <CurriculumBlock 
                    icon={<HelpCircle />}
                    title="Phase 4: Guess Who! Celebrity Edition"
                    subtitle="15 Minutes • Active Q&A"
                    methodology="Yes/No Strategy Drill"
                    accentColor="amber"
                  >
                     <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        A student chooses a world-famous celebrity (Must be known by the whole class). The class asks <strong className="text-white">ONLY Yes/No questions</strong> to discover the identity.
                     </p>

                     <div className="bg-slate-950/50 rounded-xl p-5 border border-slate-800">
                        <h4 className="text-white font-semibold mb-3">Model Questions:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                           <div className="text-slate-400">Is he a singer? <span className="text-slate-600">(Personality/ID)</span></div>
                           <div className="text-slate-400">Does she have blonde hair? <span className="text-slate-600">(Physical)</span></div>
                           <div className="text-slate-400">Is she beautiful/handsome? <span className="text-slate-600">(Physical)</span></div>
                           <div className="text-slate-400">Does he have glasses? <span className="text-slate-600">(Physical)</span></div>
                           <div className="text-slate-400">Is he funny? <span className="text-slate-600">(Personality)</span></div>
                           <div className="text-slate-400">Is he very tall? <span className="text-slate-600">(Physical)</span></div>
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
        prevHref="/english-class/hours-5-6"
        prevLabel="Hours 5 & 6"
        nextHref="/english-class/hours-9-10"
        nextLabel="Hours 9 & 10"
        accentColor="rose"
      />
    </div>
  );
}
