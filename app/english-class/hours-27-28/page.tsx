"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  CalendarDays,
  ShieldCheck,
  Users,
  AlertTriangle,
  Mic2,
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassHours27and28() {
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
        hourNumber="27 &amp; 28"
        title="The Money Talk"
        subtitle="Sponsors, Costs &amp; Logistics"
        description="Confidently discuss salaries, program costs, sponsors, and financial support. The officer is looking for inconsistencies — you must sound absolute about every number."
        accentColor="amber"
        moduleInfo="Unit 3: Conversation Strategies &bull; Part 4"
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* HOUR 27: The Financial Questions */}
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
                      <span className="text-2xl font-bold">27</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">Follow the Money</h2>
                      <p className="text-amber-400 font-medium tracking-wide text-xs uppercase">Financial Questions Arsenal</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    Money questions are the most sensitive part of the interview. The officer wants to ensure you can support yourself and that your story is consistent.
                  </p>

                  <CurriculumContext title="Financial Logic: The Why" accentColor="amber">
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      The officer isn't just counting dollars; they are looking for <span className="text-white font-bold italic">legitimacy</span>. Use the <span className="text-white font-bold">Stable Origin Protocol</span>:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-amber-500/20">
                        <p className="text-[10px] text-amber-400 font-bold uppercase mb-1 flex items-center gap-2"><TrendingUp className="w-3 h-3" /> Source Consistency</p>
                        <ul className="text-xs text-slate-300 space-y-1 font-mono">
                          <li>• "My parents work in [Sector]."</li>
                          <li>• "They have saved for 2 years."</li>
                          <li>• "This is an investment in my English."</li>
                        </ul>
                      </div>
                      <div className="bg-amber-900/10 p-3 rounded-lg border border-amber-500/30">
                        <p className="text-[10px] text-amber-400 font-bold uppercase mb-1 flex items-center gap-2"><ShieldCheck className="w-3 h-3" /> The NO-LOAN Rule</p>
                        <p className="text-[11px] text-slate-400 leading-relaxed italic">
                           "I did not take a loan. My family's income is sufficient to cover these costs comfortably."
                        </p>
                      </div>
                    </div>
                  </CurriculumContext>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">

                  <CurriculumBlock
                    icon={<DollarSign />}
                    title="Phase 1: Financial Logic Arsenal"
                    subtitle="25 Minutes &bull; Core Interview Prep"
                    methodology="Script Mastery + Economic Transparency"
                    accentColor="amber"
                  >
                    <div className="grid grid-cols-1 gap-6 mt-4">
                      {/* Sponsor vs Support - Expanded */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all">
                        <h4 className="text-white font-bold text-lg mb-3">Distinguish: Sponsor vs. Support</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                           <div className="bg-slate-950 p-4 rounded-xl border-l-4 border-amber-500">
                              <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Legal Sponsor</p>
                              <p className="text-xs text-slate-300">"CIEE / InterExchange / Intrax. They provide the DS-2019."</p>
                           </div>
                           <div className="bg-slate-950 p-4 rounded-xl border-l-4 border-emerald-500">
                              <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Financial Supporter</p>
                              <p className="text-xs text-slate-300">"My parents. They provide the money."</p>
                           </div>
                        </div>
                      </div>

                      {/* Q19: Family Income - The Breakdown */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full" />
                        <h4 className="text-white font-bold text-lg mb-4">How do your parents afford this?</h4>
                        <div className="space-y-3">
                           <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                              <p className="text-slate-300 font-serif italic text-sm">"Actually, they have a combined income of [X] Million COP. This program is worth the investment for my professional future."</p>
                           </div>
                           <div className="bg-amber-900/20 p-3 rounded-lg text-[11px] text-amber-300 border border-amber-500/30">
                              <strong>Strategy: Reframing as Investment.</strong> Don't just talk about "cost." Talk about "value."
                           </div>
                        </div>
                      </div>

                      {/* Salaries Table */}
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                         <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Market Rate Awareness</h4>
                         <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
                            <table className="w-full text-xs text-left">
                               <thead className="bg-slate-900 text-slate-500">
                                  <tr>
                                     <th className="px-4 py-2">Role</th>
                                     <th className="px-4 py-2">Avg. Rate</th>
                                     <th className="px-4 py-2">Shift Logic</th>
                                  </tr>
                               </thead>
                               <tbody className="divide-y divide-slate-800">
                                  <tr>
                                     <td className="px-4 py-3 text-white">Lifeguard</td>
                                     <td className="px-4 py-3 text-amber-400">$12 - $15</td>
                                     <td className="px-4 py-3 text-slate-400">Regular hours + Potential OT</td>
                                  </tr>
                                  <tr>
                                     <td className="px-4 py-3 text-white">Server</td>
                                     <td className="px-4 py-3 text-amber-400">$2.13 + Tips</td>
                                     <td className="px-4 py-3 text-slate-400">Variable based on performance</td>
                                  </tr>
                               </tbody>
                            </table>
                         </div>
                      </div>
                    </div>
                  </CurriculumBlock>

                </div>
              </div>
            </div>
          </motion.div>

          {/* HOUR 28: The Interrogation Room */}
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
                      <span className="text-2xl font-bold">28</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight">The Interrogation</h2>
                      <p className="text-yellow-400 font-medium tracking-wide text-xs uppercase">High-Pressure Number Drills</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    If you hesitate on a number, you start over. Dim the lights. The pressure is real. Your financial story must come out smooth and absolute.
                  </p>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">                  <CurriculumBlock
                    icon={<Mic2 />}
                    title="Phase 2: The Interrogation Room"
                    subtitle="35 Minutes &bull; Stress Test"
                    methodology="Rapid-Fire Financial Interrogation"
                    accentColor="amber"
                  >
                    <div className="bg-slate-950/50 p-6 rounded-2xl border border-amber-500/30 mt-4 overflow-hidden relative">
                       <div className="absolute top-0 right-0 p-4">
                          <AlertTriangle className="w-8 h-8 text-amber-500/20" />
                       </div>
                       <p className="text-sm text-slate-300 mb-6 leading-relaxed italic">
                          "I see your parents earn 5 million pesos. How can they afford an 8-million-peso program plus flights?"
                       </p>
                       <div className="space-y-4">
                          <div className="p-4 bg-slate-900 rounded-xl border-l-4 border-amber-500">
                             <p className="text-[10px] text-amber-400 font-bold uppercase mb-2">The Winning Logic:</p>
                             <p className="text-slate-300 font-serif italic mb-2">"Actually, they have been saving specifically for this exchange program for the last two years. It's a strategic investment in my future."</p>
                             <p className="text-[10px] text-slate-500 uppercase">Status: PASSED (Solid Proof)</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                             <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                                <p className="text-[10px] text-amber-400 font-bold uppercase mb-1">Key Vocabulary</p>
                                <ul className="text-[10px] text-slate-400 space-y-1">
                                   <li>• Savings / Assets</li>
                                   <li>• Monthly Income</li>
                                   <li>• Investment</li>
                                   <li>• Financial Stability</li>
                                </ul>
                             </div>
                             <div className="p-3 bg-red-950/20 rounded-lg border border-red-500/20">
                                <p className="text-[10px] text-red-400 font-bold uppercase mb-1">Warning Signs</p>
                                <ul className="text-[10px] text-slate-400 space-y-1 font-mono">
                                   <li>- "I think..."</li>
                                   <li>- "Maybe..."</li>
                                   <li>- "Around..." (too vague)</li>
                                   <li>- "Loan"</li>
                                </ul>
                             </div>
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

      {/* APPLIED CONVERSATIONS */}
      <section className="py-16 relative z-10 border-t border-slate-800/60">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-12">
            <p className="text-[10px] text-amber-400 font-bold uppercase tracking-widest mb-2">Applied Conversations</p>
            <h2 className="text-3xl font-bold text-white">Financial Interrogation Simulations</h2>
            <p className="text-slate-400 mt-2 max-w-2xl">Financial questions are where most students panic. These dialogues train you to respond with absolute precision and zero hesitation.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Conversation 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="bg-amber-900/30 border-b border-amber-500/20 px-5 py-3">
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">Dialogue 01 · The Sponsor vs. Support Distinction</span>
              </div>
              <div className="p-5 space-y-4 font-serif text-sm">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Who is sponsoring your trip to the United States?"</p></div>
                <div><p className="text-[10px] text-amber-300 uppercase font-bold mb-1">Student ✓</p><p className="text-amber-200 italic">"My official program sponsor is CIEE — the Council on International Educational Exchange. They issued my DS-2019 form and serve as my legal representative in the United States."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"And who is paying for all of this financially?"</p></div>
                <div><p className="text-[10px] text-amber-300 uppercase font-bold mb-1">Student ✓</p><p className="text-amber-200 italic">"The upfront program and flight costs are being covered by my parents. My father works as a civil engineer and earns approximately 8 million pesos per month. My mother is a teacher and earns around 3 million pesos. Once I begin working in the US, I will supplement those costs with my own wages from the resort."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"How much did you pay for the program in total?"</p></div>
                <div><p className="text-[10px] text-amber-300 uppercase font-bold mb-1">Student ✓</p><p className="text-amber-200 italic">"The total investment was approximately 8,500 US dollars, which includes the program fee, round-trip airfare, visa costs, and the first month of insurance. We paid this over six months of savings."</p></div>
              </div>
              <div className="bg-slate-950 border-t border-slate-800 px-5 py-3">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">✓ Teacher Note</p>
                <p className="text-[10px] text-slate-500 mt-1">"Sponsor" means the legal program sponsor (CIEE, Work &amp; Travel, etc.), not the person paying. Always distinguish this. The officer tests whether you know the difference.</p>
              </div>
            </div>

            {/* Conversation 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="bg-amber-900/30 border-b border-amber-500/20 px-5 py-3">
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">Dialogue 02 · The Income Math — Can They Afford It?</span>
              </div>
              <div className="p-5 space-y-4 font-serif text-sm">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"8,500 dollars is a lot of money. On your parents' salaries, how did you afford this?"</p></div>
                <div><p className="text-[10px] text-amber-300 uppercase font-bold mb-1">Student ✓</p><p className="text-amber-200 italic">"My parents' combined income is roughly 11 million pesos per month — approximately 2,700 US dollars. We began saving 16 months ago specifically for this program. We also sold a small piece of land my family owned in the municipality of Girón, which contributed significantly to the total."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Did you take out a loan?"</p></div>
                <div><p className="text-[10px] text-amber-300 uppercase font-bold mb-1">Student ✓</p><p className="text-amber-200 italic">"No, Officer. Our policy as a family is not to travel on debt. All funds were saved and accumulated before this application was submitted. My parents have bank statements available as supporting documentation."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"What happens if you spend all the money and your job falls through?"</p></div>
                <div><p className="text-[10px] text-amber-300 uppercase font-bold mb-1">Student ✓</p><p className="text-amber-200 italic">"My program sponsor, CIEE, guarantees job placement and provides a 24-hour emergency support line. In the worst case, they would facilitate my return to Colombia at no extra cost. I also maintain a 500-dollar emergency reserve specifically for unpredictable situations."</p></div>
              </div>
              <div className="bg-slate-950 border-t border-slate-800 px-5 py-3">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">✓ Teacher Note</p>
                <p className="text-[10px] text-slate-500 mt-1">The "No Loan" rule is critical. A loan implies you are under financial pressure that might make you overstay. Asset sales (land, vehicle) are excellent legitimate explanations for large sums.</p>
              </div>
            </div>

            {/* Conversation 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="bg-amber-900/30 border-b border-amber-500/20 px-5 py-3">
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">Dialogue 03 · The Inconsistency Trap — Numbers Don&apos;t Match</span>
              </div>
              <div className="p-5 space-y-4 font-serif text-sm">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Your DS-2019 shows you earn $8.75 per hour. How much will you actually make this summer?"</p></div>
                <div><p className="text-[10px] text-amber-300 uppercase font-bold mb-1">Student ✓</p><p className="text-amber-200 italic">"Working approximately 36 hours per week over 11 weeks, I project roughly $3,465 in gross wages. After tax withholding of approximately 15 to 20 percent and housing deductions of around $130 per week, my net savings will be in the range of $1,500 to $1,800 for the full program."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"That doesn't cover what you spent to get there. Why come all this way for so little?"</p></div>
                <div><p className="text-[10px] text-amber-300 uppercase font-bold mb-1">Student ✓</p><p className="text-amber-200 italic">"The financial return was never the primary motivation, Officer. The professional experience, the bilingual fluency, and the cultural immersion are the investment. My parents understood from the beginning that this program operates at a net cost — and they consider it an investment in my career, not a vacation."</p></div>
              </div>
              <div className="bg-slate-950 border-t border-slate-800 px-5 py-3">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">✓ Teacher Note</p>
                <p className="text-[10px] text-slate-500 mt-1">Know your numbers before you walk in. If the officer calculates the math and your answer doesn't add up, it creates immediate suspicion. Pre-calculate your expected income.</p>
              </div>
            </div>

            {/* Conversation 4 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="bg-amber-900/30 border-b border-amber-500/20 px-5 py-3">
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">Dialogue 04 · Rapid Fire Financial Drill — 60-Second Pressure Test</span>
              </div>
              <div className="p-5 space-y-4 font-serif text-sm">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"What does your father do?"</p></div>
                <div><p className="text-[10px] text-amber-300 uppercase font-bold mb-1">Student ✓</p><p className="text-amber-200 italic">"He is a mechanical technician at a manufacturing plant."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Your mother?"</p></div>
                <div><p className="text-[10px] text-amber-300 uppercase font-bold mb-1">Student ✓</p><p className="text-amber-200 italic">"She manages the accounting for a small family business."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Do you have siblings?"</p></div>
                <div><p className="text-[10px] text-amber-300 uppercase font-bold mb-1">Student ✓</p><p className="text-amber-200 italic">"One younger sister. She is 17 and still in high school."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Who will pay the bills back home while you are gone?"</p></div>
                <div><p className="text-[10px] text-amber-300 uppercase font-bold mb-1">Student ✓</p><p className="text-amber-200 italic">"My parents. My absence changes nothing about their monthly expenses — I am not a financial contributor to the household. They are self-sufficient and have been planning for my absence."</p></div>
              </div>
              <div className="bg-slate-950 border-t border-slate-800 px-5 py-3">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">✓ Teacher Note</p>
                <p className="text-[10px] text-slate-500 mt-1">Rapid-fire questions test your composure. Every answer must be immediate, specific, and consistent. Hesitation on family income data is a red flag.</p>
              </div>
            </div>

            {/* Conversation 5 - Full Financial Sequence */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden lg:col-span-2">
              <div className="bg-emerald-900/20 border-b border-emerald-500/20 px-5 py-3">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Dialogue 05 · ✓ Full Financial Interrogation — Passed With Precision</span>
              </div>
              <div className="p-5 grid md:grid-cols-2 gap-x-8 gap-y-4 font-serif text-sm">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Tell me about your finances for this trip."</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"Certainly. The total cost of this program is approximately 9,200 USD, which includes flights, the CIEE program fee, health insurance, and a housing deposit. My parents have covered this through a combination of 14 months of planned savings and a personal contribution from my grandfather."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"How much will you make at the resort?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"I will earn $10.50 per hour as a Food &amp; Beverage Associate at Snowbird Resort. Estimating 35 hours per week for 12 weeks, that is approximately $4,410 gross. After taxes and the on-site housing deduction of $120 per week, I expect to net around $2,400."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Do you have a bank account in Colombia?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"Yes. I hold a savings account at Bancolombia with a current balance of approximately 4 million pesos. I also carry a Visa debit card for emergency use during my program. The account statements are part of my visa package."</p></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Alright. Anything else I should know?"</p></div>
                <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Student ✓</p><p className="text-emerald-200 italic">"Only that this program represents two years of planning by my family. I take the financial responsibility seriously, I understand my obligations as a J-1 holder, and I fully intend to return to Colombia on September 12th as my visa specifies."</p></div>
              </div>
              <div className="bg-slate-950 border-t border-slate-800 px-5 py-3 flex items-center justify-between">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">Result: VISA APPROVED ✓</p>
                <p className="text-[10px] text-slate-500">Pre-calculated numbers. Bank account with balance. Grandfather contribution explains surplus. Closes with commitment to return.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CurriculumNavigation
        prevHref="/english-class/hours-25-26"
        prevLabel="Hours 25 &amp; 26"
        nextHref="/english-class/hours-29-30"
        nextLabel="Hours 29 &amp; 30"
        accentColor="amber"
        moduleTitle="The Money Talk"
      />
    </div>
  );
}
