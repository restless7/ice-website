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
    Plane,
    Briefcase,
    AlertTriangle,
    Coffee,
    ArrowRight,
    MapPin,
    Building,
    MessageSquareQuote
} from "lucide-react";
import Link from "next/link";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function IntensiveCoursePage() {
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
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
            <CurriculumHeader 
                hourNumber="1 - 5"
                title="The Intensive Crash Course."
                subtitle="5 Hours to Survival."
                description="Short on time? This high-speed, hyper-focused masterclass condenses the 40-hour program into the absolute essentials. Master introductions, daily routines, critical workplace rules, and the J-1 Visa interview."
                accentColor="cyan"
            />

            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    
                    {/* HOUR 1: The Fundamentals */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="mb-32 relative"
                    >
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/10 to-transparent hidden lg:block"></div>
                        
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                            <div className="lg:w-1/3 relative">
                                <div className="sticky top-24 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.15)] flex-shrink-0 font-mono">
                                            <span className="text-2xl font-bold">01</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white tracking-tight">The Fundamentals</h2>
                                            <p className="text-cyan-400 font-medium tracking-wide text-xs uppercase">Introductions &amp; To Be</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        Establish who you are, where you are from, and your current status. The verb "To Be" is the architectural foundation of the English language.
                                    </p>

                                    <CurriculumContext title="Crash Course Strategy" accentColor="cyan">
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            <strong>Zero Fluff:</strong> We skip the alphabet and colors, diving straight into high-stakes data transmission (name, age, profession, country).
                                        </p>
                                    </CurriculumContext>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="space-y-8">
                                    <CurriculumBlock 
                                        icon={<Users />}
                                        title="Phase 1: Your Professional Profile"
                                        subtitle="Core Vocabulary &amp; Sentences"
                                        methodology="Repetitive Modeling"
                                        accentColor="cyan"
                                    >
                                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mt-4">
                                            <div className="space-y-4 font-mono text-sm">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-cyan-400 w-24">Name:</span>
                                                    <span className="text-white">"I <strong className="text-cyan-300">am</strong> Sebastian." / "My name <strong className="text-cyan-300">is</strong>..."</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-cyan-400 w-24">Age:</span>
                                                    <span className="text-white">"I <strong className="text-cyan-300">am</strong> 22 years old." <span className="text-xs text-rose-400 ml-2">(Never use 'have')</span></span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-cyan-400 w-24">Origin:</span>
                                                    <span className="text-white">"I <strong className="text-cyan-300">am</strong> from Colombia."</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-cyan-400 w-24">Status:</span>
                                                    <span className="text-white">"I <strong className="text-cyan-300">am</strong> a university student."</span>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<MessageCircle />}
                                        title="Phase 2: Formal vs Informal Greetings"
                                        subtitle="Situational Awareness"
                                        methodology="Roleplay Dialogues"
                                        accentColor="cyan"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                            <div className="bg-slate-900 border border-cyan-500/20 rounded p-4">
                                                <h4 className="text-cyan-400 font-bold mb-2">Formal (The Interview)</h4>
                                                <p className="text-sm text-slate-300 mb-2">"Good morning. It is a pleasure to meet you."</p>
                                                <p className="text-sm text-slate-300">"How are you doing today?"</p>
                                            </div>
                                            <div className="bg-slate-900 border border-blue-500/20 rounded p-4">
                                                <h4 className="text-blue-400 font-bold mb-2">Informal (Coworkers)</h4>
                                                <p className="text-sm text-slate-300 mb-2">"Hey! Nice to meet you."</p>
                                                <p className="text-sm text-slate-300">"How's it going?" / "What's up?"</p>
                                            </div>
                                        </div>
                                    </CurriculumBlock>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* HOUR 2: The Daily Grind */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="mb-32 relative"
                    >
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/10 to-transparent hidden lg:block"></div>
                        
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                            <div className="lg:w-1/3 relative">
                                <div className="sticky top-24 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.15)] flex-shrink-0 font-mono">
                                            <span className="text-2xl font-bold">02</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white tracking-tight">The Daily Grind</h2>
                                            <p className="text-blue-400 font-medium tracking-wide text-xs uppercase">Simple Present &amp; Routines</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        Communicate facts, habits, and schedules. This tense is mandatory for describing your job back home and anticipating your new schedule in the US.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="space-y-8">
                                    <CurriculumBlock 
                                        icon={<Clock />}
                                        title="Phase 1: Action Verbs &amp; Schedules"
                                        subtitle="Building the Routine"
                                        methodology="Direct Construction"
                                        accentColor="blue"
                                    >
                                        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                                            <div className="p-5 space-y-4 font-serif text-sm">
                                                <p className="text-slate-300"><strong className="text-white">You:</strong> "What time <strong className="text-blue-300">do</strong> you wake up?"</p>
                                                <p className="text-slate-400 italic">"I <strong className="text-blue-300">wake up</strong> at 6 AM. I <strong className="text-blue-300">take</strong> a shower and <strong className="text-blue-300">eat</strong> breakfast."</p>
                                                <p className="text-slate-300"><strong className="text-white">You:</strong> "<strong className="text-blue-300">Do</strong> you work at night?"</p>
                                                <p className="text-slate-400 italic">"No, I <strong className="text-rose-300">don't</strong>. I <strong className="text-blue-300">finish</strong> my shift at 4 PM."</p>
                                            </div>
                                        </div>
                                        <div className="bg-blue-900/20 mt-4 p-4 rounded-lg border border-blue-500/20">
                                            <p className="text-xs text-blue-200">
                                                <strong>Focus:</strong> Memorize the auxiliaries <strong className="text-white">DO / DOES</strong> and <strong className="text-white">DON'T / DOESN'T</strong>. They are the keys to asking and denying in English.
                                            </p>
                                        </div>
                                    </CurriculumBlock>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* HOUR 3: Action & Ability */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="mb-32 relative"
                    >
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/10 to-transparent hidden lg:block"></div>
                        
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                            <div className="lg:w-1/3 relative">
                                <div className="sticky top-24 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,0.15)] flex-shrink-0 font-mono">
                                            <span className="text-2xl font-bold">03</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white tracking-tight">Action &amp; Ability</h2>
                                            <p className="text-indigo-400 font-medium tracking-wide text-xs uppercase">Present Continuous &amp; CAN</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        Report what is happening *right now* and express your physical or professional capacities.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="space-y-8">
                                    <CurriculumBlock 
                                        icon={<PlayCircle />}
                                        title="Phase 1: Present Continuous vs Simple"
                                        subtitle="Contrast &amp; Context"
                                        methodology="Comparative Syntax"
                                        accentColor="indigo"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm font-mono">
                                            <div className="bg-slate-900 border border-indigo-500/20 rounded p-4">
                                                <h4 className="text-indigo-400 font-bold mb-2">Right Now (Continuous)</h4>
                                                <p className="text-slate-300">"I <strong className="text-white">am cleaning</strong> the lobby."</p>
                                                <p className="text-slate-300">"He <strong className="text-white">is talking</strong> to a customer."</p>
                                            </div>
                                            <div className="bg-slate-900 border border-slate-700/50 rounded p-4">
                                                <h4 className="text-slate-400 font-bold mb-2">Usually (Simple)</h4>
                                                <p className="text-slate-300">"I <strong className="text-white">clean</strong> the lobby every day."</p>
                                                <p className="text-slate-300">"He <strong className="text-white">talks</strong> to customers."</p>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<Briefcase />}
                                        title="Phase 2: Power of 'CAN'"
                                        subtitle="Abilities &amp; Workplace Permission"
                                        methodology="Workplace Scenarios"
                                        accentColor="indigo"
                                    >
                                        <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800 mt-4">
                                            <ul className="space-y-3 text-sm text-slate-300 font-serif">
                                                <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold mt-1">✓</span> <span>"I <strong className="text-white font-bold">can</strong> lift heavy boxes." <span className="text-xs text-slate-500 ml-2">(Ability)</span></span></li>
                                                <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold mt-1">✓</span> <span>"I <strong className="text-white font-bold">can</strong> work under pressure." <span className="text-xs text-slate-500 ml-2">(Skill)</span></span></li>
                                                <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold mt-1">?</span> <span>"Boss, <strong className="text-white font-bold">can</strong> I take my break now?" <span className="text-xs text-slate-500 ml-2">(Permission)</span></span></li>
                                            </ul>
                                        </div>
                                    </CurriculumBlock>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* HOUR 4: Rules & Recommendations */}
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
                                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_40px_rgba(245,158,11,0.15)] flex-shrink-0 font-mono">
                                            <span className="text-2xl font-bold">04</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white tracking-tight">Rules &amp; Advice</h2>
                                            <p className="text-amber-400 font-medium tracking-wide text-xs uppercase">Modals &amp; Compliance</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        Understand severe warnings, mandatory rules, and provide polite suggestions to coworkers. Master MUST, HAVE TO, and SHOULD.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="space-y-8">
                                    <CurriculumBlock 
                                        icon={<AlertTriangle />}
                                        title="Phase 1: Compliance &amp; Prohibitions"
                                        subtitle="Must vs Have To"
                                        methodology="Scenario Warnings"
                                        accentColor="amber"
                                    >
                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 font-mono text-xs">
                                            <div className="bg-slate-900/80 border-t-2 border-red-500 rounded p-4">
                                                <p className="text-red-400 font-bold mb-3 uppercase flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Strictly Forbidden</p>
                                                <ul className="space-y-2 text-slate-300">
                                                    <li>"You <strong className="text-white">MUST NOT</strong> smoke here."</li>
                                                    <li>"You <strong className="text-white">MUST NOT</strong> use your phone."</li>
                                                    <li>"You <strong className="text-white">MUST NOT</strong> steal."</li>
                                                </ul>
                                            </div>
                                            <div className="bg-slate-900/80 border-t-2 border-amber-500 rounded p-4">
                                                <p className="text-amber-400 font-bold mb-3 uppercase flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Required by Job</p>
                                                <ul className="space-y-2 text-slate-300">
                                                    <li>"I <strong className="text-white">HAVE TO</strong> wear a uniform."</li>
                                                    <li>"She <strong className="text-white">HAS TO</strong> arrive at 8 AM."</li>
                                                    <li>"We <strong className="text-white">HAVE TO</strong> clean the pool."</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<MessageSquareQuote />}
                                        title="Phase 2: Giving Advice"
                                        subtitle="Should &amp; Had Better"
                                        methodology="Peer Review"
                                        accentColor="amber"
                                    >
                                        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                                            <div className="p-5 space-y-4 font-serif text-sm">
                                                <p className="text-slate-300">"I am very tired today."</p>
                                                <p className="text-amber-400 italic">"You <strong className="text-amber-300 font-bold">should</strong> go to sleep early." <span className="text-xs text-slate-500">(Suggestion)</span></p>
                                                <hr className="border-slate-800 my-2" />
                                                <p className="text-slate-300">"I am going to be late for work!"</p>
                                                <p className="text-rose-400 italic">"You <strong className="text-rose-300 font-bold">had better</strong> call your manager right now." <span className="text-xs text-slate-500">(Strong warning)</span></p>
                                            </div>
                                        </div>
                                    </CurriculumBlock>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* HOUR 5: Travel, Customs & Mock Interview */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="mb-12 relative"
                    >
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/10 to-transparent hidden lg:block"></div>
                        
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                            <div className="lg:w-1/3 relative">
                                <div className="sticky top-24 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/10 text-teal-400 border border-teal-500/20 shadow-[0_0_40px_rgba(20,184,166,0.15)] flex-shrink-0 font-mono">
                                            <span className="text-2xl font-bold">05</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white tracking-tight">The Final Exam</h2>
                                            <p className="text-teal-400 font-medium tracking-wide text-xs uppercase">J1 Visa Mock Interview</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        The culmination of the crash course. We prepare for the Embassy and Customs border control, mixing all tenses in high-pressure rapid-fire format.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="space-y-8">
                                    <CurriculumBlock 
                                        icon={<Plane />}
                                        title="Phase 1: Airport &amp; Customs Survival"
                                        subtitle="Passing Immigration"
                                        methodology="Script Memorization"
                                        accentColor="teal"
                                    >
                                        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                                            <div className="p-5 space-y-4 font-serif text-sm">
                                                <p className="text-slate-300"><strong className="text-white">Officer:</strong> "Passport and DS-2019, please. What is the purpose of your visit?"</p>
                                                <p className="text-slate-400 italic">"I am participating in a J-1 Cultural Exchange program."</p>
                                                <p className="text-slate-300"><strong className="text-white">Officer:</strong> "Where will you be working?"</p>
                                                <p className="text-slate-400 italic">"I will work at the Kalahari Resort in Wisconsin."</p>
                                                <p className="text-slate-300"><strong className="text-white">Officer:</strong> "How long are you staying?"</p>
                                                <p className="text-slate-400 italic">"I am staying for 3 months, returning in March."</p>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<MapPin />}
                                        title="Phase 2: The J1 Visa Final Interview"
                                        subtitle="30 Minutes • One-on-One Evaluation"
                                        methodology="Live Assessment"
                                        accentColor="teal"
                                    >
                                        <div className="bg-slate-950/50 p-6 rounded-xl border border-teal-500/30 mt-4">
                                            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                                                Students sit individually in front of the "Officer" (Teacher). They must answer 10 randomized questions with complete accuracy, projecting confidence and volume.
                                            </p>
                                            <h4 className="text-teal-400 font-bold mb-3 uppercase text-xs tracking-widest">Assessment Criteria:</h4>
                                            <ul className="space-y-2 text-sm text-slate-400 font-mono">
                                                <li className="flex items-start gap-2"><span className="text-teal-500">✓</span> No hesitations or "Uhhh..."</li>
                                                <li className="flex items-start gap-2"><span className="text-teal-500">✓</span> Accurate use of To Be vs To Have</li>
                                                <li className="flex items-start gap-2"><span className="text-teal-500">✓</span> Correct pronunciation of Job Role</li>
                                                <li className="flex items-start gap-2"><span className="text-teal-500">✓</span> Knowledge of Sponsor and Location</li>
                                            </ul>
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
                prevLabel="Curriculum Home"
                nextHref="/english-class/hours-1-2"
                nextLabel="Start 40hr Program"
                accentColor="cyan"
                moduleTitle="Intensive 5-Hour Course"
            />
        </div>
    );
}
