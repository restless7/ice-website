"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Clock,
    MessageCircle,
    Users,
    CheckCircle,
    PlayCircle,
    BookOpen,
    SpellCheck,
    Headphones,
    Award,
    ArrowRight,
    Speech,
    Handshake,
    Mic2,
    Briefcase,
    Coffee
} from "lucide-react";
import Link from "next/link";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function EnglishClassPage() {
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
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
            <CurriculumHeader 
                hourNumber="1 & 2"
                title="Master the Essentials."
                subtitle="The First 2 of 10 Hours."
                description="Equip yourself with the fundamental tools for clear communication, from professional greetings to flawless spelling. This is Step 1 of your comprehensive 10-Hour Unit 1 Capstone."
                accentColor="blue"
            />

            {/* Intensive Crash Course Banner */}
            <div className="container mx-auto px-6 max-w-7xl pt-12 pb-4">
                <Link href="/english-class/intensive-5-hours" className="block group">
                    <div className="bg-gradient-to-r from-cyan-900/40 via-blue-900/20 to-cyan-900/40 border border-cyan-500/30 rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(6,182,212,0.15)] group-hover:border-cyan-400/50 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all duration-300">
                        <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors" />
                        <div className="relative z-10">
                            <h3 className="text-cyan-400 font-bold text-2xl mb-2 flex items-center gap-3">
                                <Award className="w-6 h-6" /> Intensive 5-Hour Crash Course
                            </h3>
                            <p className="text-slate-300 max-w-2xl leading-relaxed">
                                Short on time? Take our hyper-condensed survival masterclass. Covering introductions, routines, obligations, and the critical J-1 Visa interview in just 5 intensive hours.
                            </p>
                        </div>
                        <div className="relative z-10 shrink-0">
                            <span className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 font-bold py-3 px-6 rounded-full border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                                Start Intensive Course <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </div>
                </Link>
            </div>

            {/* AU PAIR Elevated Course Banner */}
            <div className="container mx-auto px-6 max-w-7xl pb-4">
                <Link href="/english-class/au-pair-5-hours" className="block group">
                    <div className="bg-gradient-to-r from-rose-900/40 via-purple-900/20 to-rose-900/40 border border-rose-500/30 rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(244,63,94,0.15)] group-hover:border-rose-400/50 group-hover:shadow-[0_0_40px_rgba(244,63,94,0.3)] transition-all duration-300">
                        <div className="absolute inset-0 bg-rose-500/5 group-hover:bg-rose-500/10 transition-colors" />
                        <div className="relative z-10">
                            <h3 className="text-rose-400 font-bold text-2xl mb-2 flex items-center gap-3">
                                <Award className="w-6 h-6" /> AU PAIR 5-Hour Elevated Course
                            </h3>
                            <p className="text-slate-300 max-w-2xl leading-relaxed">
                                Intermediate-level masterclass for AU PAIR candidates. Master household vocabulary, childcare communication, cultural fluency, conflict resolution, and the AU PAIR J-1 Visa interview.
                            </p>
                        </div>
                        <div className="relative z-10 shrink-0">
                            <span className="inline-flex items-center gap-2 bg-rose-500/20 text-rose-300 font-bold py-3 px-6 rounded-full border border-rose-500/30 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                                Start AU PAIR Course <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Curriculum Grid */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    
                    {/* HOUR 1: Icebreakers & Interactions */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="mb-32 relative"
                    >
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/10 to-transparent hidden lg:block"></div>
                        
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                            {/* Left Column: Context */}
                            <div className="lg:w-1/3 relative">
                                <div className="sticky top-24 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.15)] flex-shrink-0 font-mono">
                                            <span className="text-2xl font-bold">01</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white tracking-tight">Icebreakers</h2>
                                            <p className="text-blue-400 font-medium tracking-wide text-xs uppercase">Fundamental Greetings</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        First impressions are made in the first 7 seconds of an interaction. Here, we establish the rules of engagement for both formal and informal environments.
                                    </p>

                                    <CurriculumContext title="Pedagogical Focus: Registers" accentColor="blue">
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            <strong>Context is King:</strong> Speaking to a J1 Visa interviewer requires entirely different vocabulary than speaking to a roommate. We drill this split constantly.
                                        </p>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            <strong>Title Precision:</strong> Explicitly clarify that "Miss" is for unmarried women, "Mrs." for married, and "Ms." (pronounced Mizz) as the professional universal default.
                                        </p>
                                    </CurriculumContext>
                                </div>
                            </div>

                            {/* Right Column: Content */}
                            <div className="lg:w-2/3">
                                <div className="space-y-8">
                                    
                                    <CurriculumBlock 
                                        icon={<BookOpen />}
                                        title="Phase 1: Registers & Formality Theory"
                                        subtitle="15 Minutes • Direct Instruction"
                                        methodology="Explicit Grammar Translation"
                                        accentColor="blue"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm font-mono">
                                            <div className="bg-slate-950/50 rounded-xl p-5 border border-blue-500/20">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Briefcase className="w-5 h-5 text-blue-400" />
                                                    <h4 className="text-white font-semibold font-sans">Formal (High Stakes)</h4>
                                                </div>
                                                <ul className="space-y-3 text-slate-300">
                                                    <li className="border-b border-blue-500/20 pb-2">"Good morning / afternoon."</li>
                                                    <li className="border-b border-blue-500/20 pb-2">"How are you doing today?"</li>
                                                    <li>"It is a pleasure to meet you."</li>
                                                </ul>
                                            </div>

                                            <div className="bg-slate-950/50 rounded-xl p-5 border border-cyan-500/20">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Coffee className="w-5 h-5 text-cyan-400" />
                                                    <h4 className="text-white font-semibold font-sans">Informal (Casual)</h4>
                                                </div>
                                                <ul className="space-y-3 text-slate-300">
                                                    <li className="border-b border-cyan-500/20 pb-2">"Hey / Hi."</li>
                                                    <li className="border-b border-cyan-500/20 pb-2">"How's it going? / What's up?"</li>
                                                    <li>"Nice to meet you."</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<Speech />}
                                        title="Phase 2: Conversational Matrix"
                                        subtitle="20 Minutes • Heavy Examples"
                                        methodology="Contextual Shadowing"
                                        accentColor="blue"
                                    >
                                        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                                            <div className="p-5 space-y-6">
                                                
                                                <div className="group">
                                                    <p className="text-blue-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-blue-500 pl-2">Dialogue 1: The Embassy Interview</p>
                                                    <div className="space-y-2 font-serif text-sm">
                                                        <p className="text-slate-300"><strong className="text-white">Officer:</strong> "Good morning. Please step forward."</p>
                                                        <p className="text-slate-400 italic">"Good morning, Officer. How are you doing today?"</p>
                                                        <p className="text-slate-300"><strong className="text-white">Officer:</strong> "I'm doing well, thank you. What is your name?"</p>
                                                        <p className="text-slate-400 italic">"My name is Sebastian Garcia. It is a pleasure to meet you."</p>
                                                    </div>
                                                </div>

                                                <div className="group">
                                                    <p className="text-cyan-400 text-xs font-bold mb-2 uppercase tracking-widest border-l-2 border-cyan-500 pl-2">Dialogue 2: Meeting a Coworker</p>
                                                    <div className="space-y-2 font-serif text-sm">
                                                        <p className="text-slate-300"><strong className="text-white">Coworker:</strong> "Hey! Are you the new intern?"</p>
                                                        <p className="text-slate-400 italic">"Hi. Yeah, I'm Sebastian. How's it going?"</p>
                                                        <p className="text-slate-300"><strong className="text-white">Coworker:</strong> "Going great. I'm Mike."</p>
                                                        <p className="text-slate-400 italic">"Nice to meet you, Mike."</p>
                                                    </div>
                                                </div>

                                                <div className="bg-blue-950/30 p-4 rounded-lg border border-blue-500/20 mt-4">
                                                    <p className="text-xs text-blue-300 font-medium">
                                                        <strong className="text-blue-400">Survival Tip:</strong> If you are unsure of the register, always default to Formal. It is better to be slightly too polite than offensively casual to a manager or official.
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<Handshake />}
                                        title="Phase 3: Active Interaction"
                                        subtitle="25 Minutes • Live Roleplay"
                                        methodology="Kinesthetic Movement & Pairs"
                                        accentColor="blue"
                                    >
                                        <p className="text-sm text-slate-300 leading-relaxed mt-4">
                                            Students stand up and move around the room. The instructor calls out "Visa Officer!" and students must immediately shake hands and execute the formal dialogue. Then "Party!" and they switch to informal.
                                        </p>
                                    </CurriculumBlock>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    {/* HOUR 2: The Building Blocks */}
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
                                            <span className="text-2xl font-bold">02</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white tracking-tight">The Code</h2>
                                            <p className="text-purple-400 font-medium tracking-wide text-xs uppercase">Spelling & Phonetics</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        Surviving abroad means transmitting data accurately. Names, email addresses, and flight confirmation numbers must be spelled flawlessly over the phone.
                                    </p>

                                    <CurriculumContext title="Pedagogical Focus: Vowels" accentColor="purple">
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            <strong>The A-E-I Trap:</strong> Spanish speakers universally mispronounce vowels. A (ey), E (ee), I (ai). These must be drilled brutally using rhyming groups.
                                        </p>
                                        <p className="text-sm text-slate-300 leading-relaxed mt-2 border-l-2 border-purple-500 pl-2">
                                            Never teach the alphabet sequentially (A to Z). Teach it by phonetic rhyming groups.
                                        </p>
                                    </CurriculumContext>
                                </div>
                            </div>

                            {/* Right Column: Content */}
                            <div className="lg:w-2/3">
                                <div className="space-y-8">
                                    <CurriculumBlock 
                                        icon={<BookOpen />}
                                        title="Phase 1: Phonetic Grouping Theory"
                                        subtitle="20 Minutes • Direct Instruction"
                                        methodology="Sound Categorization"
                                        accentColor="purple"
                                    >
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4 text-xs font-mono">
                                            <div className="bg-slate-900 border border-purple-500/20 rounded p-3 text-center">
                                                <p className="text-purple-400 font-bold mb-2 pb-2 border-b border-purple-500/20">The "EY" Sound</p>
                                                <p className="text-white text-lg">A, H, J, K</p>
                                            </div>
                                            <div className="bg-slate-900 border border-fuchsia-500/20 rounded p-3 text-center">
                                                <p className="text-fuchsia-400 font-bold mb-2 pb-2 border-b border-fuchsia-500/20">The "EE" Sound</p>
                                                <p className="text-white text-lg">B,C,D,E,G,P,T,V,Z</p>
                                            </div>
                                            <div className="bg-slate-900 border border-pink-500/20 rounded p-3 text-center">
                                                <p className="text-pink-400 font-bold mb-2 pb-2 border-b border-pink-500/20">The "EH" Sound</p>
                                                <p className="text-white text-lg">F,L,M,N,S,X</p>
                                            </div>
                                            <div className="bg-slate-900 border border-indigo-500/20 rounded p-3 text-center">
                                                <p className="text-indigo-400 font-bold mb-2 pb-2 border-b border-indigo-500/20">The "AI" Sound</p>
                                                <p className="text-white text-lg">I, Y</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 bg-slate-950 p-4 rounded-lg border border-purple-500/30">
                                            <p className="text-sm text-white">
                                                <span className="text-purple-400 font-bold">Crucial Exceptions:</span> <br/>
                                                <span className="font-mono text-xs">J (Jey) vs G (Jee) - The most common Spanish speaker error.</span><br/>
                                                <span className="font-mono text-xs">R (Ar), W (Double-U), Q (Kyu)</span>
                                            </p>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<Mic2 />}
                                        title="Phase 2: High-Stakes Spelling Practice"
                                        subtitle="20 Minutes • Heavy Examples"
                                        methodology="Data Transmission"
                                        accentColor="purple"
                                    >
                                        <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800 mt-4 space-y-4">
                                            
                                            <div className="p-4 bg-slate-950 rounded border-l-2 border-purple-500">
                                                <p className="text-xs text-purple-400 font-bold mb-2 uppercase tracking-widest flex justify-between">
                                                    <span>Scenario 1: Hotel Reservation</span>
                                                    <span className="text-slate-500">Front Desk</span>
                                                </p>
                                                <p className="text-sm text-slate-300 italic mb-2">"Can you spell your last name for me?"</p>
                                                <p className="text-sm text-white font-mono bg-slate-900 p-2 rounded">"It's Garcia. G-A-R-C-I-A."</p>
                                                <p className="text-xs text-purple-300 mt-2 font-medium">(Watch for the G vs J, and I vs E confusion here)</p>
                                            </div>

                                            <div className="p-4 bg-slate-950 rounded border-l-2 border-fuchsia-500">
                                                <p className="text-xs text-fuchsia-400 font-bold mb-2 uppercase tracking-widest flex justify-between">
                                                    <span>Scenario 2: The Email Address</span>
                                                    <span className="text-slate-500">HR Manager</span>
                                                </p>
                                                <p className="text-sm text-slate-300 italic mb-2">"What is your email address?"</p>
                                                <p className="text-sm text-white font-mono bg-slate-900 p-2 rounded">"It's s.garcia@gmail.com. S - dot - G-A-R-C-I-A - at - G-M-A-I-L - dot - com."</p>
                                                <p className="text-xs text-fuchsia-300 mt-2 font-medium">(Must explicitly teach "dot", "at", "underscore", "dash")</p>
                                            </div>

                                            <div className="p-4 bg-slate-950 rounded border-l-2 border-pink-500">
                                                <p className="text-xs text-pink-400 font-bold mb-2 uppercase tracking-widest flex justify-between">
                                                    <span>Scenario 3: Flight Confirmation</span>
                                                    <span className="text-slate-500">Airline Agent</span>
                                                </p>
                                                <p className="text-sm text-slate-300 italic mb-2">"What is your record locator code?"</p>
                                                <p className="text-sm text-white font-mono bg-slate-900 p-2 rounded">"It's X-Y-7-Q-W-2."</p>
                                            </div>

                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<SpellCheck />}
                                        title="Phase 3: The J1 Spelling Bee"
                                        subtitle="20 Minutes • High Pressure Evaluation"
                                        methodology="Competitive Stress Testing"
                                        accentColor="purple"
                                    >
                                        <p className="text-sm text-slate-300 leading-relaxed mt-4">
                                            A fast-paced, high-stress game. The instructor flashes random, complex confirmation numbers, email addresses, and difficult names on the board. Students must stand up and spell them aloud with zero hesitation. 3 strikes and they sit down.
                                        </p>
                                    </CurriculumBlock>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Footer / CTA remains similar but visually updated if needed */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent -z-10" />
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Unit 1 Capstone Journey</h2>
                        <p className="text-slate-300 mb-8 max-w-xl mx-auto relative z-10 text-sm md:text-base leading-relaxed">
                            Transform your communication skills over 10 cohesive hours, culminating in the Ultimate Survival Roleplay. Ready to master the first steps of your upcoming 40-hour journey?
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <button className="bg-white text-slate-950 font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow duration-300 hover:scale-105 transform min-w-[200px]">
                                Download Syllabus
                            </button>
                            <Link href="/english-class/hours-3-4" className="flex items-center gap-3 py-4 px-8 rounded-full bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors border border-white/10 group/btn transition-all duration-300 min-w-[200px] justify-center">
                                <span>Next: Hours 3 & 4</span>
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
