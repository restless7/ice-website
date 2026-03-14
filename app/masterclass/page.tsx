"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Clock, UserCircle, Smartphone, Building, Plane, Briefcase,
    DollarSign, FileText, GraduationCap, PenTool, Users, Scale,
    ShieldCheck, CheckCircle, Award, AlertTriangle, BookOpen, Target
} from "lucide-react";
import Link from "next/link";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function MasterclassPage() {
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
            <CurriculumHeader 
                hourNumber="4 Hours"
                title="Interview Masterclass."
                subtitle="Teacher's Script & Guide."
                description="The ultimate 4-module capstone preparation. Navigate the student through body language, sponsor data, SEVIS logistics, DS-160/2019 mechanics, and their US Rights."
                accentColor="indigo"
            />

            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    
                    {/* MODULE 1 */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-32 relative">
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/10 to-transparent hidden lg:block"></div>
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                            <div className="lg:w-1/3 relative">
                                <div className="sticky top-24 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,0.15)] flex-shrink-0 font-mono">
                                            <span className="text-2xl font-bold">M1</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white tracking-tight">First Impressions</h2>
                                            <p className="text-indigo-400 font-medium tracking-wide text-xs uppercase">Body Language & Sponsor</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        Set the baseline. The consulate officer assesses the student before they even speak. Address clothing, social media posture, and structural knowledge of their sponsor.
                                    </p>
                                    <CurriculumContext title="Teacher's Goal" accentColor="indigo">
                                        <p className="text-sm text-slate-300 leading-relaxed mb-2">
                                            <strong>Mental Conditioning:</strong> Ensure the student knows exactly who brings them to the US. AWA or LA Life Adventures? Dates must be precise.
                                        </p>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            <strong>Post-Program Intent:</strong> The most critical question is &quot;What are you going to do when the program is over?&quot; The answer MUST demonstrate strong ties to their home country.
                                        </p>
                                    </CurriculumContext>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="space-y-8">

                                    <CurriculumBlock icon={<UserCircle />} title="Theory: Body Language & Presentation" subtitle="Módulo 1 • Fundamentals" methodology="Direct Instruction" accentColor="indigo">
                                        <p className="text-slate-300 leading-relaxed mb-4">
                                            Before a single word is spoken, the consular officer has already formed an impression. Research shows that <strong className="text-white">55% of communication is body language</strong>, 38% is tone of voice, and only 7% is the actual words. This module drills nonverbal excellence.
                                        </p>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4">📋 Dress Code Rules for the Embassy</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-green-400 font-semibold text-sm mb-2">✅ DO Wear:</p>
                                                    <ul className="space-y-1 text-slate-300 text-sm">
                                                        <li>• Button-down shirt or blouse (solid colors)</li>
                                                        <li>• Dress pants or a modest skirt</li>
                                                        <li>• Closed-toe shoes (clean)</li>
                                                        <li>• Minimal jewelry and accessories</li>
                                                        <li>• Light, professional makeup</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="text-red-400 font-semibold text-sm mb-2">❌ DO NOT Wear:</p>
                                                    <ul className="space-y-1 text-slate-300 text-sm">
                                                        <li>• Ripped jeans, shorts, or tank tops</li>
                                                        <li>• Sunglasses on your head</li>
                                                        <li>• Logos with English slang or brands</li>
                                                        <li>• Excessive perfume/cologne</li>
                                                        <li>• Hats or caps of any kind</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4">🧍 Posture & Eye Contact Protocol</h4>
                                            <ul className="space-y-2 text-slate-300 text-sm">
                                                <li>• <strong className="text-white">Stand tall</strong> — shoulders back, feet shoulder-width apart. No slouching.</li>
                                                <li>• <strong className="text-white">Hands visible</strong> — do NOT put hands in pockets. Hold your document folder in front.</li>
                                                <li>• <strong className="text-white">Eye contact</strong> — maintain natural eye contact (3-5 seconds at a time). Do not stare at the floor.</li>
                                                <li>• <strong className="text-white">Smile naturally</strong> — a nervous smile is better than no smile. Practice a calm, confident expression.</li>
                                                <li>• <strong className="text-white">Voice projection</strong> — speak clearly and at medium volume. Do not whisper or shout.</li>
                                            </ul>
                                        </div>
                                        <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-500/20">
                                            <h4 className="text-white font-semibold mb-3">🎯 Activity: The Mirror Drill (10 min)</h4>
                                            <p className="text-slate-300 text-sm mb-3">Pair students up. One acts as the &quot;officer&quot; seated behind a desk. The other approaches, greets, and hands over documents. Evaluate:</p>
                                            <ol className="space-y-1 text-slate-300 text-sm list-decimal list-inside">
                                                <li>Did they make eye contact when approaching?</li>
                                                <li>Did they greet before being asked a question?</li>
                                                <li>Were the documents organized and handed over cleanly?</li>
                                                <li>Did they fidget, touch their face, or look away?</li>
                                            </ol>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock icon={<Smartphone />} title="Social Media Audit & Privacy" subtitle="Módulo 1 • Parte 1" methodology="Live Audit & Discussion" accentColor="indigo">
                                        <p className="text-slate-300 leading-relaxed mb-4">
                                            Consular officers routinely check applicants&apos; social media. A public profile with party photos, political rants, or posts about &quot;staying in the US forever&quot; can result in an instant denial.
                                        </p>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                                <Smartphone className="w-5 h-5 text-indigo-400" />
                                                Teacher Script: Digital Privacy
                                            </h4>
                                            <div className="pl-4 border-l-2 border-indigo-500/30">
                                                <p className="text-slate-300"><span className="text-indigo-400 font-bold">Teacher:</span> &quot;Do you have your social media on public?&quot;</p>
                                                <p className="text-slate-500 text-sm mt-1 italic">→ Expected: &quot;No, my profiles are private.&quot; If they say yes, instruct them to change it NOW.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4">📱 Live Audit Checklist</h4>
                                            <ul className="space-y-2 text-slate-300 text-sm">
                                                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>Instagram set to Private?</span></li>
                                                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>Facebook set to &quot;Friends Only&quot;?</span></li>
                                                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>TikTok profile private? No public videos about the visa process?</span></li>
                                                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>Profile photo is professional (not at a party, not with alcohol)?</span></li>
                                                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>Bio does not say &quot;Going to the US 🇺🇸&quot; or similar?</span></li>
                                            </ul>
                                        </div>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                                            <h4 className="text-white font-semibold mb-4">📂 Document Checklist — What to Bring</h4>
                                            <p className="text-slate-400 text-sm mb-3">Students should have ALL of the following organized in a clear folder, in this exact order:</p>
                                            <ol className="space-y-1 text-slate-300 text-sm list-decimal list-inside">
                                                <li>Passport (valid, with at least 6 months remaining)</li>
                                                <li>DS-2019 form (signed)</li>
                                                <li>DS-160 confirmation page</li>
                                                <li>SEVIS I-901 fee receipt</li>
                                                <li>University enrollment certificate</li>
                                                <li>University ID (carnet)</li>
                                                <li>Bank statements (sponsor&apos;s financial proof)</li>
                                                <li>Offer letter / Job details</li>
                                                <li>Passport-sized photo (extra)</li>
                                            </ol>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock icon={<Building />} title="Sponsor & Timeline Verification" subtitle="Módulo 1 • Parte 2" methodology="Interrogation Simulation" accentColor="indigo">
                                        <p className="text-slate-300 leading-relaxed mb-4">
                                            The sponsor is the backbone of the J1 program. The student must distinguish between the <strong className="text-white">sponsor organization</strong> (who legally brings them) and the <strong className="text-white">local agency</strong> (who facilitated the process in Colombia).
                                        </p>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-2">📖 Theory: Sponsor vs. Agency</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
                                                    <p className="text-indigo-400 font-bold text-sm mb-2">SPONSOR (USA)</p>
                                                    <p className="text-slate-300 text-sm">The US-based organization that issues your DS-2019 and is legally responsible for you. Examples: <strong>AWA</strong>, <strong>LA Life Adventures</strong>, CIEE, InterExchange.</p>
                                                </div>
                                                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                                                    <p className="text-purple-400 font-bold text-sm mb-2">AGENCY (Colombia)</p>
                                                    <p className="text-slate-300 text-sm">The local company that helped you apply and prepare documents. Example: <strong>ICE Colombia</strong>. The agency is NOT your sponsor.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                                <Clock className="w-5 h-5 text-indigo-400" />
                                                Simulation Script with Model Answers
                                            </h4>
                                            <div className="space-y-5">
                                                <div className="pl-4 border-l-2 border-indigo-500/30">
                                                    <p className="text-slate-300"><span className="text-indigo-400 font-bold">Teacher:</span> &quot;What&apos;s the name of your sponsor?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;My sponsor is American Work Adventures, also known as AWA.&quot;</p>
                                                    <p className="text-red-400 text-sm">❌ &quot;ICE Colombia&quot; (That&apos;s the agency, NOT the sponsor!)</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-indigo-500/30">
                                                    <p className="text-slate-300"><span className="text-indigo-400 font-bold">Teacher:</span> &quot;What&apos;s the name of your agency?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;My agency in Colombia is ICE — International Cultural Experience.&quot;</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-indigo-500/30">
                                                    <p className="text-slate-300"><span className="text-indigo-400 font-bold">Teacher:</span> &quot;When can you arrive to the United States?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;I can arrive on June 15th, 2026.&quot; (MUST match DS-2019 dates)</p>
                                                    <p className="text-red-400 text-sm">❌ &quot;Whenever I want&quot; / &quot;I&apos;m not sure yet&quot;</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-indigo-500/30">
                                                    <p className="text-slate-300"><span className="text-indigo-400 font-bold">Teacher:</span> &quot;When do you return to your country?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;I return on September 20th, 2026. My program ends on September 5th and I have a 30-day grace period.&quot;</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-red-500/30 bg-red-500/5 p-3 rounded-r-lg">
                                                    <p className="text-slate-300"><span className="text-red-400 font-bold">⚠️ CRITICAL:</span> &quot;What are you going to do when the program is over?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;I will return to Colombia to finish my degree at [University Name]. I have [X] semesters left.&quot;</p>
                                                    <p className="text-red-400 text-sm">❌ &quot;I want to stay&quot; / &quot;Maybe travel around&quot; / &quot;I&apos;ll see what happens&quot;</p>
                                                    <p className="text-amber-400 text-xs mt-2 italic">Teacher Note: This answer MUST demonstrate STRONG TIES to the home country. The officer is testing for immigrant intent.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-500/20">
                                            <h4 className="text-white font-semibold mb-3">🎯 Activity: Hot Seat Round-Robin (15 min)</h4>
                                            <p className="text-slate-300 text-sm mb-3">Each student sits in the &quot;hot seat.&quot; The teacher fires all 5 sponsor questions rapidly, with no prep time. Grade on:</p>
                                            <ul className="space-y-1 text-slate-300 text-sm">
                                                <li>• <strong className="text-white">Speed:</strong> Did they answer within 3 seconds?</li>
                                                <li>• <strong className="text-white">Precision:</strong> Did they give exact dates, not vague answers?</li>
                                                <li>• <strong className="text-white">Confidence:</strong> Did they hesitate, stutter, or look away?</li>
                                                <li>• <strong className="text-white">Home Ties:</strong> Did their &quot;program over&quot; answer reference returning to Colombia?</li>
                                            </ul>
                                        </div>
                                    </CurriculumBlock>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* MODULE 2 */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-32 relative">
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/10 to-transparent hidden lg:block"></div>
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                            <div className="lg:w-1/3 relative">
                                <div className="sticky top-24 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.15)] flex-shrink-0 font-mono">
                                            <span className="text-2xl font-bold">M2</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white tracking-tight">The Job & SEVIS</h2>
                                            <p className="text-blue-400 font-medium tracking-wide text-xs uppercase">Role & Logistics</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        The student must demonstrate intimate knowledge of where they are working, what their duties are, and the logistical mechanics of their SEVIS registration.
                                    </p>
                                    <CurriculumContext title="Teacher's Goal" accentColor="blue">
                                        <p className="text-sm text-slate-300 leading-relaxed mb-2">
                                            <strong>Job Mastery:</strong> The student should be able to describe their employer, position, duties, hourly rate, and housing cost without hesitation. Vague answers are red flags.
                                        </p>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            <strong>SEVIS Fluency:</strong> They must know the fee amount ($35), where to pay (fmjfee.com), their SEVIS ID location on the DS-2019, and the activation process upon arrival.
                                        </p>
                                    </CurriculumContext>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="space-y-8">

                                    <CurriculumBlock icon={<Briefcase />} title="Theory: Understanding Your Job Offer" subtitle="Módulo 2 • Fundamentals" methodology="Direct Instruction" accentColor="blue">
                                        <p className="text-slate-300 leading-relaxed mb-4">
                                            The consular officer will test whether the student truly understands their employment situation. Vague answers like &quot;I&apos;ll work at a hotel&quot; are not enough. They must know <strong className="text-white">employer name</strong>, <strong className="text-white">exact position</strong>, <strong className="text-white">daily duties</strong>, and <strong className="text-white">housing arrangements</strong>.
                                        </p>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                                            <h4 className="text-white font-semibold mb-4">📋 Common J1 Positions — Quick Reference</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                                                    <p className="text-blue-400 font-bold text-xs mb-1">🏨 HOSPITALITY</p>
                                                    <p className="text-slate-300 text-sm">Housekeeper, Front Desk Agent, Bellhop, Room Attendant, Breakfast Attendant</p>
                                                </div>
                                                <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                                                    <p className="text-blue-400 font-bold text-xs mb-1">🍽️ FOOD SERVICE</p>
                                                    <p className="text-slate-300 text-sm">Line Cook, Dishwasher, Busser, Server, Prep Cook, Host/Hostess</p>
                                                </div>
                                                <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                                                    <p className="text-blue-400 font-bold text-xs mb-1">🏊 RECREATION</p>
                                                    <p className="text-slate-300 text-sm">Lifeguard (requires cert!), Activity Coordinator, Pool Attendant</p>
                                                </div>
                                                <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                                                    <p className="text-blue-400 font-bold text-xs mb-1">🛒 RETAIL</p>
                                                    <p className="text-slate-300 text-sm">Cashier, Stock Associate, Sales Associate, Gift Shop Attendant</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock icon={<Briefcase />} title="Job Offer & Responsibilities" subtitle="Módulo 2 • Parte 1" methodology="Offer Letter Verification" accentColor="blue">
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                                <Plane className="w-5 h-5 text-blue-400" />
                                                Simulation Script with Model Answers
                                            </h4>
                                            <div className="space-y-5">
                                                <div className="pl-4 border-l-2 border-blue-500/30">
                                                    <p className="text-slate-300"><span className="text-blue-400 font-bold">Teacher:</span> &quot;What&apos;s the name of your employer?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;My employer is Cedar Point Amusement Park, located in Sandusky, Ohio.&quot;</p>
                                                    <p className="text-red-400 text-sm">❌ &quot;Some park&quot; / &quot;I don&apos;t remember the name&quot;</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-blue-500/30">
                                                    <p className="text-slate-300"><span className="text-blue-400 font-bold">Teacher:</span> &quot;What is your position?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;I will work as a Food Service Worker / Ride Operator / Housekeeper.&quot;</p>
                                                    <p className="text-red-400 text-sm">❌ &quot;I&apos;ll do whatever they tell me&quot;</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-blue-500/30">
                                                    <p className="text-slate-300"><span className="text-blue-400 font-bold">Teacher:</span> &quot;Do you know the responsibilities/duties of your position?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;As a Housekeeper, I will clean guest rooms, change linens, restock amenities, and report maintenance issues.&quot;</p>
                                                    <p className="text-amber-400 text-xs mt-1 italic">Teacher Tip: Have each student memorize at least 3 specific duties for their role.</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-amber-500/30 bg-amber-500/5 p-3 rounded-r-lg">
                                                    <p className="text-slate-300 text-sm"><span className="text-amber-400 font-bold">Edge Case — Lifeguards:</span></p>
                                                    <p className="text-slate-300 text-sm mt-1">&quot;Do you have a certification? Where did you take it?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;Yes, I have my American Red Cross Lifeguard certification. I took it online and will complete the practical portion upon arrival.&quot;</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-blue-500/30">
                                                    <p className="text-slate-300"><span className="text-blue-400 font-bold">Teacher:</span> &quot;How much will you pay for housing/rent?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;I will pay approximately $85-$110 per week, which is deducted from my paycheck.&quot;</p>
                                                    <p className="text-amber-400 text-xs mt-1 italic">Teacher Tip: The number MUST match the housing section of their offer letter.</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-blue-500/30">
                                                    <p className="text-slate-300"><span className="text-blue-400 font-bold">Teacher:</span> &quot;To what Airport will you arrive?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;I will arrive at Cleveland Hopkins International Airport (CLE).&quot;</p>
                                                    <p className="text-red-400 text-sm">❌ &quot;I don&apos;t know&quot; / &quot;Whatever is cheapest&quot;</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
                                            <h4 className="text-white font-semibold mb-3">🎯 Activity: Duty Description Challenge (10 min)</h4>
                                            <p className="text-slate-300 text-sm mb-3">Without looking at their offer letter, each student must stand and describe their job duties in 30 seconds or less. The class votes on whether the description was specific enough.</p>
                                            <p className="text-slate-400 text-xs italic">Scoring: 3 pts = specific + confident. 2 pts = vague but correct. 1 pt = confused. 0 = couldn&apos;t answer.</p>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock icon={<DollarSign />} title="SEVIS Registration & Activation" subtitle="Módulo 2 • Parte 2" methodology="Systems Check & Theory" accentColor="blue">
                                        <p className="text-slate-300 leading-relaxed mb-4">
                                            SEVIS (Student and Exchange Visitor Information System) is the US government database that tracks all J1 visa holders. The I-901 fee ($35 for J1 Exchange Visitors) must be paid before the interview.
                                        </p>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4">📖 What Is SEVIS? — Theory Block</h4>
                                            <ul className="space-y-2 text-slate-300 text-sm">
                                                <li>• <strong className="text-white">SEVIS ID:</strong> Starts with N00... Found on the DS-2019 form (upper right corner, barcode area).</li>
                                                <li>• <strong className="text-white">I-901 Fee:</strong> $35 USD for J1 Exchange Visitors (NOT $350, that&apos;s for F1 students).</li>
                                                <li>• <strong className="text-white">Payment:</strong> Done at fmjfee.com before the embassy interview.</li>
                                                <li>• <strong className="text-white">Receipt:</strong> Print the receipt AND save a digital copy. Bring the printed copy to the interview.</li>
                                                <li>• <strong className="text-white">Activation:</strong> Upon arriving in the US, validate through your sponsor&apos;s portal within the first 10 days.</li>
                                            </ul>
                                        </div>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4">Script with Model Answers</h4>
                                            <div className="space-y-5">
                                                <div className="pl-4 border-l-2 border-blue-500/30">
                                                    <p className="text-slate-300"><span className="text-blue-400 font-bold">Teacher:</span> &quot;How much did you pay for your SEVIS registration?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;I paid $35 US dollars for my I-901 SEVIS fee.&quot;</p>
                                                    <p className="text-red-400 text-sm">❌ &quot;I don&apos;t know, my agency paid it&quot; / &quot;$350&quot; (wrong — that&apos;s F1)</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-blue-500/30">
                                                    <p className="text-slate-300"><span className="text-blue-400 font-bold">Teacher:</span> &quot;Do you know how to activate it in the US?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;Yes, I need to validate my SEVIS registration through my sponsor&apos;s online portal within the first 10 days of arrival.&quot;</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-blue-500/30">
                                                    <p className="text-slate-300"><span className="text-blue-400 font-bold">Teacher:</span> &quot;Do you have a receipt?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;Yes, I have a printed copy right here.&quot; (Student shows it from their folder)</p>
                                                    <p className="text-amber-400 text-xs mt-1 italic">Teacher Note: Verify the receipt physically. Students who say &quot;it&apos;s on my phone&quot; need to print it.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
                                            <h4 className="text-white font-semibold mb-3">🎯 Activity: SEVIS Pop Quiz (5 min)</h4>
                                            <p className="text-slate-300 text-sm mb-3">Rapid-fire quiz. Teacher asks — students answer instantly:</p>
                                            <ol className="space-y-1 text-slate-300 text-sm list-decimal list-inside">
                                                <li>&quot;What does SEVIS stand for?&quot; → Student and Exchange Visitor Information System</li>
                                                <li>&quot;How much is the fee?&quot; → $35</li>
                                                <li>&quot;Where do you pay it?&quot; → fmjfee.com</li>
                                                <li>&quot;Where is your SEVIS ID on the DS-2019?&quot; → Upper right corner</li>
                                                <li>&quot;What happens if you don&apos;t activate SEVIS?&quot; → You violate your visa status</li>
                                            </ol>
                                        </div>
                                    </CurriculumBlock>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* MODULE 3 */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-32 relative">
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/10 to-transparent hidden lg:block"></div>
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                            <div className="lg:w-1/3 relative">
                                <div className="sticky top-24 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.15)] flex-shrink-0 font-mono">
                                            <span className="text-2xl font-bold">M3</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white tracking-tight">The Core Documents</h2>
                                            <p className="text-purple-400 font-medium tracking-wide text-xs uppercase">DS-160 & DS-2019</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        The paperwork phase. Academic rigor is validated here. If their stated credits do not match their university certificates, the visa is jeopardized.
                                    </p>
                                    <CurriculumContext title="Document Handling" accentColor="purple">
                                        <p className="text-sm text-slate-300 leading-relaxed mb-2">
                                            <strong>Data Cohesion:</strong> How many credits? This MUST exactly match the certificate provided. Teachers: check the student&apos;s drive.
                                        </p>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            <strong>The Handover:</strong> The interview heavily relies on physical document presentation and signature verification.
                                        </p>
                                    </CurriculumContext>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="space-y-8">

                                    <CurriculumBlock icon={<FileText />} title="Theory: What Is the DS-160?" subtitle="Módulo 3 • Fundamentals" methodology="Direct Instruction" accentColor="purple">
                                        <p className="text-slate-300 leading-relaxed mb-4">
                                            The DS-160 is the <strong className="text-white">Online Nonimmigrant Visa Application</strong>. It contains all the personal, educational, and travel information the student submitted. The consular officer has this form in front of them during the interview and will cross-reference answers against it.
                                        </p>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4">📋 Key DS-160 Fields Students Must Memorize</h4>
                                            <ul className="space-y-2 text-slate-300 text-sm">
                                                <li>• <strong className="text-white">Full name</strong> — exactly as it appears on the passport</li>
                                                <li>• <strong className="text-white">Date of birth</strong> — in English format (Month Day, Year)</li>
                                                <li>• <strong className="text-white">University name</strong> — full official name, not abbreviations</li>
                                                <li>• <strong className="text-white">Degree / Career</strong> — &quot;I am studying International Business&quot; not &quot;negocios&quot;</li>
                                                <li>• <strong className="text-white">Expected graduation date</strong> — must match enrollment certificate</li>
                                                <li>• <strong className="text-white">Number of credits enrolled</strong> — MUST match the university certificate exactly</li>
                                                <li>• <strong className="text-white">Travel history</strong> — any previous trips to the US or other countries</li>
                                            </ul>
                                        </div>
                                        <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/20">
                                            <h4 className="text-white font-semibold mb-3">⚠️ Common DS-160 Mistakes</h4>
                                            <ul className="space-y-2 text-slate-300 text-sm">
                                                <li>• Saying a different number of credits than what&apos;s on their certificate</li>
                                                <li>• Not knowing their own graduation date</li>
                                                <li>• Confusing their career name in English</li>
                                                <li>• Forgetting they listed previous travel on the form</li>
                                            </ul>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock icon={<FileText />} title="DS-160: Academic Interrogation" subtitle="Módulo 3 • Parte 1" methodology="Data Verification" accentColor="purple">
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4">Simulation Script with Model Answers</h4>
                                            <div className="space-y-5">
                                                <div className="pl-4 border-l-2 border-purple-500/30">
                                                    <p className="text-slate-300"><span className="text-purple-400 font-bold">Teacher:</span> &quot;When do you finish your degree? (Expected Graduation)&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;I expect to graduate in December 2028.&quot;</p>
                                                    <p className="text-red-400 text-sm">❌ &quot;I don&apos;t know&quot; / &quot;In a few years&quot;</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-red-500/30 bg-red-500/5 p-3 rounded-r-lg">
                                                    <p className="text-slate-300"><span className="text-red-400 font-bold">Critical Verify:</span> &quot;How many credits are you taking?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;I am currently enrolled in 18 credits this semester.&quot; (Must match certificate!)</p>
                                                    <p className="text-amber-400 text-xs mt-1 italic">Teacher: Open the student&apos;s enrollment certificate and verify the number. If it doesn&apos;t match, drill them until it does.</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-purple-500/30">
                                                    <p className="text-slate-300"><span className="text-purple-400 font-bold">Teacher:</span> &quot;How many subjects? Can you name them?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;I have 6 subjects: Marketing, Statistics, Business English, Economics, Accounting, and Entrepreneurship.&quot;</p>
                                                    <p className="text-amber-400 text-xs mt-1 italic">Teacher Tip: Students should practice naming subjects IN ENGLISH, not in Spanish.</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-purple-500/30">
                                                    <p className="text-slate-300"><span className="text-purple-400 font-bold">Teacher:</span> &quot;When did you finish high school?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;I graduated from high school in June 2022.&quot;</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-purple-500/30">
                                                    <p className="text-slate-300"><span className="text-purple-400 font-bold">Teacher:</span> &quot;When did you start university?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;I started university in January 2023 at Universidad del Norte.&quot;</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-purple-500/30">
                                                    <p className="text-slate-300"><span className="text-purple-400 font-bold">Teacher:</span> &quot;How many hours per week do you have? / Intensity per week in class?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;I have about 20 hours of classes per week, Monday through Friday.&quot;</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/20">
                                            <h4 className="text-white font-semibold mb-3">🎯 Activity: Certificate Cross-Check (10 min)</h4>
                                            <p className="text-slate-300 text-sm">Students pull out their enrollment certificates. In pairs, Student A reads the info while Student B verifies each point matches what they would say in the interview. Any discrepancy is flagged immediately.</p>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock icon={<PenTool />} title="DS-2019: Presentation & Signatures" subtitle="Módulo 3 • Parte 2" methodology="Physical Protocol" accentColor="purple">
                                        <p className="text-slate-300 leading-relaxed mb-4">
                                            The DS-2019 is the <strong className="text-white">Certificate of Eligibility</strong> issued by the sponsor. It confirms the student&apos;s participation in the J1 program. The interview STARTS with the student handing this document to the officer along with their passport.
                                        </p>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4">📖 DS-2019 Key Facts</h4>
                                            <ul className="space-y-2 text-slate-300 text-sm">
                                                <li>• <strong className="text-white">Must be SIGNED</strong> — both by the student and the sponsor representative</li>
                                                <li>• <strong className="text-white">SEVIS ID</strong> is located in the upper-right barcode area (starts with N00...)</li>
                                                <li>• <strong className="text-white">Program dates</strong> — start and end dates define the legal duration of stay</li>
                                                <li>• <strong className="text-white">Sponsor info</strong> — the sponsor name on the DS-2019 is what you answer when asked &quot;Who is your sponsor?&quot;</li>
                                                <li>• <strong className="text-white">Category</strong> — should show &quot;Summer Work Travel&quot; or equivalent J1 category</li>
                                            </ul>
                                        </div>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                                <GraduationCap className="w-5 h-5 text-purple-400" />
                                                Document Handover Script
                                            </h4>
                                            <p className="text-sm text-slate-400 mb-4 italic">La entrevista inicia mostrando el DS-2019, DS-160 y el pasaporte.</p>
                                            <div className="space-y-5">
                                                <div className="pl-4 border-l-2 border-purple-500/30">
                                                    <p className="text-slate-300"><span className="text-purple-400 font-bold">Teacher:</span> &quot;Can I see your DS-2019, DS-160 and your Passport?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ Student calmly opens folder, hands documents in order: DS-2019 on top, DS-160 confirmation, passport.</p>
                                                    <p className="text-red-400 text-sm">❌ Fumbling through a backpack, loose papers, handing one at a time.</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-purple-500/30">
                                                    <p className="text-slate-300"><span className="text-purple-400 font-bold">Teacher:</span> &quot;Can I see your enrollment certification?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;Of course, here it is.&quot; (Hands it from the organized folder section)</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-purple-500/30">
                                                    <p className="text-slate-300"><span className="text-purple-400 font-bold">Teacher:</span> &quot;Can I see your University ID?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;Yes, here is my student ID card.&quot;</p>
                                                    <p className="text-red-400 text-sm">❌ &quot;I forgot it at home&quot; / &quot;I don&apos;t have one&quot;</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/20">
                                            <h4 className="text-white font-semibold mb-3">🎯 Activity: Document Handover Drill (15 min)</h4>
                                            <p className="text-slate-300 text-sm mb-3">Each student physically practices the handover sequence with their actual documents. The teacher plays the officer and evaluates:</p>
                                            <ol className="space-y-1 text-slate-300 text-sm list-decimal list-inside">
                                                <li>Are the documents in the correct order?</li>
                                                <li>Is the DS-2019 signed?</li>
                                                <li>Can the student locate their SEVIS ID on the DS-2019?</li>
                                                <li>Is the handover smooth and confident?</li>
                                                <li>Can they answer follow-up questions while presenting documents?</li>
                                            </ol>
                                        </div>
                                    </CurriculumBlock>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* MODULE 4 */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-16 relative">
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/10 to-transparent hidden lg:block"></div>
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                            <div className="lg:w-1/3 relative">
                                <div className="sticky top-24 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_40px_rgba(245,158,11,0.15)] flex-shrink-0 font-mono">
                                            <span className="text-2xl font-bold">M4</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white tracking-tight">The Final Check</h2>
                                            <p className="text-amber-400 font-medium tracking-wide text-xs uppercase">Family Ties & J1 Rights</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        The final module tests financial security, checks for potential immigrant intent via US relatives, and ensures the student understands their labor rights.
                                    </p>
                                    <CurriculumContext title="Teacher's Goal" accentColor="amber">
                                        <p className="text-sm text-slate-300 leading-relaxed mb-2">
                                            <strong>Family Sensitivity:</strong> Having family in the US is NOT automatic denial. But the student must be transparent and show they understand the difference between visiting family and overstaying.
                                        </p>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            <strong>Rights Recall:</strong> The student must memorize at least 3 J1 worker rights and be able to articulate them under pressure.
                                        </p>
                                    </CurriculumContext>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="space-y-8">

                                    <CurriculumBlock icon={<Users />} title="Theory: Family & Financial Sponsors" subtitle="Módulo 4 • Fundamentals" methodology="Background Verification" accentColor="amber">
                                        <p className="text-slate-300 leading-relaxed mb-4">
                                            The officer will ask about who is financing the trip and whether the student has family in the US. This section is designed to detect <strong className="text-white">immigrant intent</strong> — the suspicion that the student plans to stay in the US permanently.
                                        </p>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4">📖 Financial Sponsor vs. Family in the US</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="bg-amber-500/10 rounded-lg p-4 border border-amber-500/20">
                                                    <p className="text-amber-400 font-bold text-sm mb-2">💰 FINANCIAL SPONSOR</p>
                                                    <p className="text-slate-300 text-sm">Usually a parent or guardian who covers travel costs, insurance, and initial expenses. The student must know their name, occupation, and approximate income level.</p>
                                                </div>
                                                <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                                                    <p className="text-red-400 font-bold text-sm mb-2">🇺🇸 FAMILY IN THE US</p>
                                                    <p className="text-slate-300 text-sm">If yes, transparency is key. Know their immigration status (citizen, permanent resident, visa holder). NEVER lie about having family there — officers can check databases.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock icon={<Users />} title="Family & Financial Interrogation" subtitle="Módulo 4 • Parte 1" methodology="Interrogation Simulation" accentColor="amber">
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4">Simulation Script with Model Answers</h4>
                                            <div className="space-y-5">
                                                <div className="pl-4 border-l-2 border-amber-500/30">
                                                    <p className="text-slate-300"><span className="text-amber-400 font-bold">Teacher:</span> &quot;Who is your financial sponsor?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;My father, Carlos García. He is an engineer and works at [Company Name].&quot;</p>
                                                    <p className="text-red-400 text-sm">❌ &quot;My parents&quot; (too vague) / &quot;I&apos;m paying myself&quot; (raises questions about a student&apos;s finances)</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-amber-500/30">
                                                    <p className="text-slate-300"><span className="text-amber-400 font-bold">Teacher:</span> &quot;Tell me about your parents, what do they do?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;My father is a civil engineer and my mother is an accountant. They both work in Bogotá.&quot;</p>
                                                    <p className="text-amber-400 text-xs mt-1 italic">Teacher Tip: Students should describe parents&apos; jobs IN ENGLISH with specifics. &quot;They work&quot; is not enough.</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-red-500/30 bg-red-500/5 p-3 rounded-r-lg">
                                                    <p className="text-slate-300"><span className="text-red-400 font-bold">⚠️ SENSITIVE:</span> &quot;Do you have family in the US?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ If NO: &quot;No, all my family lives in Colombia.&quot;</p>
                                                    <p className="text-green-400 text-sm">✅ If YES: &quot;Yes, I have an aunt who lives in Miami. She is a US citizen. But I will not be visiting her during my program — I will be working in Ohio.&quot;</p>
                                                    <p className="text-red-400 text-sm">❌ &quot;No&quot; (when they actually do — officers can verify this)</p>
                                                    <p className="text-amber-400 text-xs mt-2 italic">NEVER LIE. If caught lying about family in the US, the visa is denied on the spot for misrepresentation.</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-amber-500/30">
                                                    <p className="text-slate-300"><span className="text-amber-400 font-bold">Teacher:</span> &quot;What status do they have?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;My aunt is a US citizen. She has lived there for 15 years.&quot;</p>
                                                    <p className="text-amber-400 text-xs mt-1 italic">Students must know the difference: Citizen, Permanent Resident (Green Card), Visa Holder, Undocumented.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/20">
                                            <h4 className="text-white font-semibold mb-3">🎯 Activity: Family Scenario Cards (10 min)</h4>
                                            <p className="text-slate-300 text-sm mb-3">Teacher hands out scenario cards. Each student gets a different family situation and must answer the officer&apos;s questions about it:</p>
                                            <ul className="space-y-1 text-slate-300 text-sm">
                                                <li>• Card A: &quot;You have a cousin who is a permanent resident in New York&quot;</li>
                                                <li>• Card B: &quot;You have no family in the US&quot;</li>
                                                <li>• Card C: &quot;Your uncle is undocumented in Florida&quot;</li>
                                                <li>• Card D: &quot;Your sister is a student on an F1 visa in California&quot;</li>
                                            </ul>
                                            <p className="text-slate-400 text-xs mt-3 italic">Class discusses: Which scenarios are highest risk? How should each be handled?</p>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock icon={<ShieldCheck />} title="J1 Worker Rights" subtitle="Módulo 4 • Parte 2" methodology="Recall & Rote Practice" accentColor="amber">
                                        <p className="text-slate-300 mb-4">
                                            The student MUST memorize their fundamental rights while working in the US. The officer may ask &quot;Do you know your rights?&quot; — the student should be able to list at least 2-3 without hesitation.
                                        </p>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4">📜 J1 Worker Rights — Full List</h4>
                                            <div className="space-y-3">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold shrink-0 mt-0.5">1</div>
                                                    <p className="text-slate-300 text-sm"><strong className="text-white">Fair wages:</strong> You must be paid at least the federal or state minimum wage (whichever is higher) for all hours worked.</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold shrink-0 mt-0.5">2</div>
                                                    <p className="text-slate-300 text-sm"><strong className="text-white">Safe working conditions:</strong> Your employer must provide a workplace free from hazards and follow OSHA standards.</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold shrink-0 mt-0.5">3</div>
                                                    <p className="text-slate-300 text-sm"><strong className="text-white">No discrimination:</strong> You cannot be discriminated against based on race, gender, religion, or national origin.</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold shrink-0 mt-0.5">4</div>
                                                    <p className="text-slate-300 text-sm"><strong className="text-white">Right to keep documents:</strong> Your employer CANNOT confiscate your passport, DS-2019, or other personal documents.</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold shrink-0 mt-0.5">5</div>
                                                    <p className="text-slate-300 text-sm"><strong className="text-white">Right to report abuse:</strong> You can call the National Human Trafficking Hotline (1-888-373-7888) or contact your sponsor if you face abuse.</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold shrink-0 mt-0.5">6</div>
                                                    <p className="text-slate-300 text-sm"><strong className="text-white">Workers&apos; compensation:</strong> If injured on the job, you are entitled to medical treatment and compensation.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
                                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                                <Scale className="w-5 h-5 text-amber-400" />
                                                Rights Interrogation Script
                                            </h4>
                                            <div className="space-y-5">
                                                <div className="pl-4 border-l-2 border-amber-500/30">
                                                    <p className="text-slate-300"><span className="text-amber-400 font-bold">Teacher:</span> &quot;Do you know your rights?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;Yes! I have the right to fair wages, safe working conditions, and I know I can contact my sponsor if I have any problems.&quot;</p>
                                                    <p className="text-red-400 text-sm">❌ &quot;I think so&quot; / &quot;Not really&quot; / Silence</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-amber-500/30">
                                                    <p className="text-slate-300"><span className="text-amber-400 font-bold">Teacher:</span> &quot;Can you mention one or two?&quot;</p>
                                                    <p className="text-green-400 text-sm mt-1">✅ &quot;I have the right to be paid at least minimum wage for all hours worked, and my employer cannot take my passport or personal documents.&quot;</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/20">
                                            <h4 className="text-white font-semibold mb-3">🎯 Activity: Rights Recall Challenge (10 min)</h4>
                                            <p className="text-slate-300 text-sm mb-3">Students stand in a circle. Going around, each student must name ONE J1 right without repeating what someone else said. If they repeat or can&apos;t name one, they sit down. Last person standing wins.</p>
                                            <p className="text-slate-400 text-xs italic">Variation: After the game, quiz students individually — &quot;Name 3 rights in 10 seconds.&quot;</p>
                                        </div>
                                    </CurriculumBlock>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            <CurriculumNavigation 
                prevHref="/english-class"
                prevLabel="English Unit 1"
                nextHref="/"
                nextLabel="Back to Home"
            />
        </div>
    );
}
