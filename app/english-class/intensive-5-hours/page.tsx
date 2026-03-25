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
                                            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                                                To survive the first 5 minutes of any professional interaction, you must state your core data. We use the verb <strong className="text-cyan-400">To Be</strong> for identity, physical states, ages, and origins.
                                            </p>
                                            <div className="space-y-4 font-mono text-sm">
                                                <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
                                                    <span className="text-cyan-400 w-24">Identity:</span>
                                                    <span className="text-white">"I <strong className="text-cyan-300">am</strong> Sebastian." / "My name <strong className="text-cyan-300">is</strong>..."</span>
                                                </div>
                                                <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
                                                    <span className="text-cyan-400 w-24">Age:</span>
                                                    <span className="text-white">"I <strong className="text-cyan-300">am</strong> 22 years old." <span className="text-xs text-amber-400 ml-2">(ERROR WARNING: 'I have 22' is wrong)</span></span>
                                                </div>
                                                <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
                                                    <span className="text-cyan-400 w-24">Origin:</span>
                                                    <span className="text-white">"I <strong className="text-cyan-300">am</strong> from Colombia, but right now I <strong className="text-cyan-300">am</strong> in New York."</span>
                                                </div>
                                                <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
                                                    <span className="text-cyan-400 w-24">Profession:</span>
                                                    <span className="text-white">"I <strong className="text-cyan-300">am</strong> a university student. She <strong className="text-cyan-300">is</strong> an engineer."</span>
                                                </div>
                                                <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
                                                    <span className="text-cyan-400 w-24">State:</span>
                                                    <span className="text-white">"I <strong className="text-cyan-300">am</strong> tired." / "They <strong className="text-cyan-300">are</strong> hungry." <span className="text-xs text-amber-400 ml-2">(ERROR WARNING: 'I have hunger' is wrong)</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<BookOpen />}
                                        title="Phase 1.5: The To Be Arsenal"
                                        subtitle="Positive, Negative, Question"
                                        methodology="Structural Syntax"
                                        accentColor="cyan"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xs font-mono">
                                            <div className="bg-slate-950 p-4 rounded border-t-2 border-green-500">
                                                <h4 className="text-green-400 font-bold mb-2">Positive (+)</h4>
                                                <ul className="space-y-1 text-slate-300">
                                                    <li>I <strong className="text-white">am</strong></li>
                                                    <li>You/We/They <strong className="text-white">are</strong></li>
                                                    <li>He/She/It <strong className="text-white">is</strong></li>
                                                </ul>
                                                <p className="mt-2 text-slate-400">"I am a server."</p>
                                            </div>
                                            <div className="bg-slate-950 p-4 rounded border-t-2 border-rose-500">
                                                <h4 className="text-rose-400 font-bold mb-2">Negative (-)</h4>
                                                <ul className="space-y-1 text-slate-300">
                                                    <li>I <strong className="text-white">am not</strong> (I'm not)</li>
                                                    <li>You <strong className="text-white">are not</strong> (aren't)</li>
                                                    <li>He <strong className="text-white">is not</strong> (isn't)</li>
                                                </ul>
                                                <p className="mt-2 text-slate-400">"I am not a manager."</p>
                                            </div>
                                            <div className="bg-slate-950 p-4 rounded border-t-2 border-blue-500">
                                                <h4 className="text-blue-400 font-bold mb-2">Question (?)</h4>
                                                <p className="text-[10px] text-slate-500 mb-1">Invert the subject & verb.</p>
                                                <ul className="space-y-1 text-slate-300">
                                                    <li><strong className="text-white">Am</strong> I?</li>
                                                    <li><strong className="text-white">Are</strong> you?</li>
                                                    <li><strong className="text-white">Is</strong> he?</li>
                                                </ul>
                                                <p className="mt-2 text-slate-400">"Are you ready?"</p>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<MessageCircle />}
                                        title="Phase 2: Formal vs Informal Contexts"
                                        subtitle="Situational Awareness &amp; Greetings"
                                        methodology="Roleplay Dialogues"
                                        accentColor="cyan"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                            <div className="bg-slate-900/80 border border-cyan-500/20 rounded p-4 relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 p-2 opacity-50"><Briefcase className="w-8 h-8 text-cyan-500" /></div>
                                                <h4 className="text-cyan-400 font-bold mb-3 uppercase tracking-widest text-xs">Formal (The Interview / The Boss)</h4>
                                                <ul className="space-y-3">
                                                    <li>
                                                        <p className="text-sm font-medium text-white">"Good morning / afternoon / evening."</p>
                                                        <p className="text-xs text-slate-400 italic">Always use time of day for respect.</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-sm font-medium text-white">"It is a pleasure to meet you."</p>
                                                        <p className="text-xs text-slate-400 italic">Do not use 'Nice to meet you' in high-stakes interviews.</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-sm font-medium text-white">"How are you doing today?"</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-slate-900/80 border border-blue-500/20 rounded p-4 relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 p-2 opacity-50"><Coffee className="w-8 h-8 text-blue-500" /></div>
                                                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-widest text-xs">Informal (Coworkers / Roommates)</h4>
                                                <ul className="space-y-3">
                                                    <li>
                                                        <p className="text-sm font-medium text-white">"Hey! / Hi! / What's up?"</p>
                                                        <p className="text-xs text-slate-400 italic">Casual energy, often paired with a nod.</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-sm font-medium text-white">"Nice to meet you."</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-sm font-medium text-white">"How's it going?" / "How are things?"</p>
                                                    </li>
                                                </ul>
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
                                        subtitle="Building the Routine with Simple Present"
                                        methodology="Direct Construction"
                                        accentColor="blue"
                                    >
                                        <p className="text-slate-300 text-sm mt-4 leading-relaxed mb-4">
                                            The Simple Present is used for facts, habits, and repeated truths. It is NOT for what is happening right now. It describes the rhythm of your life.
                                        </p>
                                        
                                        <div className="bg-slate-900/50 rounded-xl border border-slate-700 w-full mb-4 px-5 py-4">
                                            <h4 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-3">The Third Person "S" Rule</h4>
                                            <div className="grid grid-cols-2 gap-4 text-sm font-mono text-slate-300">
                                                <div>
                                                    <p className="text-white mb-1 border-b border-slate-800 pb-1">I / You / We / They</p>
                                                    <p>"I <strong className="text-blue-300">work</strong> at the resort."</p>
                                                    <p>"They <strong className="text-blue-300">clean</strong> the pool."</p>
                                                    <p>"We <strong className="text-blue-300">cook</strong> the food."</p>
                                                </div>
                                                <div className="bg-blue-950/20 p-2 rounded border border-blue-500/10">
                                                    <p className="text-white mb-1 border-b border-blue-500/20 pb-1 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-amber-500"/> He / She / It (Add +s)</p>
                                                    <p>"He <strong className="text-blue-300">works</strong> at the resort."</p>
                                                    <p>"She <strong className="text-blue-300">cleans</strong> the pool."</p>
                                                    <p>"It <strong className="text-blue-300">cooks</strong> the food faster."</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-slate-900/80 rounded-xl overflow-hidden border border-slate-700 w-full">
                                            <div className="p-5 space-y-4 font-serif text-sm">
                                                <p className="text-slate-300"><strong className="text-white">Interviewer:</strong> "What is your daily routine back home?"</p>
                                                <div className="bg-slate-950 p-3 rounded-lg border-l-2 border-blue-500">
                                                    <p className="text-slate-400 italic mb-2">"I <strong className="text-blue-300">wake up</strong> at 6 AM every day."</p>
                                                    <p className="text-slate-400 italic mb-2">"Then, I <strong className="text-blue-300">take</strong> a shower and <strong className="text-blue-300">eat</strong> breakfast."</p>
                                                    <p className="text-slate-400 italic mb-2">"After that, I <strong className="text-blue-300">take</strong> the bus to the university."</p>
                                                    <p className="text-slate-400 italic">"I <strong className="text-blue-300">study</strong> from 8 AM to 2 PM, and finally I <strong className="text-blue-300">go</strong> home."</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<MessageCircle />}
                                        title="Phase 2: Auxiliaries &amp; Interrogation"
                                        subtitle="Do vs Does / Don't vs Doesn't"
                                        methodology="Question Formulation"
                                        accentColor="blue"
                                    >
                                        <p className="text-slate-300 text-sm mt-4 leading-relaxed mb-4">
                                            In English, you <strong className="text-white underline">cannot</strong> just raise your voice to make a question, and you <strong className="text-white underline">cannot</strong> just say "No" to make a negative sentence. You must use <strong className="text-blue-400">DO/DOES</strong>.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-sans">
                                            <div className="bg-slate-900 border-t-2 border-rose-500 rounded p-4">
                                                <h4 className="text-rose-400 font-bold mb-3 flex items-center gap-2">Negatives (-)</h4>
                                                <div className="space-y-3 font-mono text-xs">
                                                    <div className="border border-slate-800 rounded p-2">
                                                        <p className="text-slate-400 line-through">I no work at night.</p>
                                                        <p className="text-white font-bold text-sm mt-1">I <span className="text-rose-400">don't</span> work at night.</p>
                                                    </div>
                                                    <div className="border border-slate-800 rounded p-2">
                                                        <p className="text-slate-400 line-through">She no like pizza.</p>
                                                        <p className="text-white font-bold text-sm mt-1">She <span className="text-rose-400">doesn't</span> like pizza.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-slate-900 border-t-2 border-blue-500 rounded p-4">
                                                <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2">Questions (?)</h4>
                                                <div className="space-y-3 font-mono text-xs">
                                                    <div className="border border-slate-800 rounded p-2">
                                                        <p className="text-slate-400 line-through">You work tomorrow?</p>
                                                        <p className="text-white font-bold text-sm mt-1"><span className="text-blue-400">Do</span> you work tomorrow?</p>
                                                    </div>
                                                    <div className="border border-slate-800 rounded p-2">
                                                        <p className="text-slate-400 line-through">He speak English?</p>
                                                        <p className="text-white font-bold text-sm mt-1"><span className="text-blue-400">Does</span> he speak English?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<Users />}
                                        title="Phase 3: The Coworker Interview"
                                        subtitle="30 Minutes • Live Practice"
                                        methodology="Pair Interactive Assessment"
                                        accentColor="blue"
                                    >
                                        <div className="bg-blue-900/10 p-5 rounded-xl border border-blue-500/30 mt-4">
                                            <p className="text-sm text-slate-300 leading-relaxed mb-4">
                                                Students pair up. Student A is an HR Manager for the resort. Student B is applying for a job as a Lifeguard. They must accurately grill each other on their daily habits to ensure they are fit for the job.
                                            </p>
                                            <ul className="space-y-2 text-sm text-slate-400 font-mono">
                                                <li>- "<strong className="text-white">Do</strong> you swim every day?"</li>
                                                <li>- "What time <strong className="text-white">do</strong> you go to sleep?"</li>
                                                <li>- "<strong className="text-white">Does</strong> your mother know you are traveling?"</li>
                                                <li>- "Why <strong className="text-white">don't</strong> you have lifeguard experience?"</li>
                                            </ul>
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
                                        title="Phase 1: The 'Right Now' (Continuous)"
                                        subtitle="Am/Is/Are + Verb-ING"
                                        methodology="Structural Syntax"
                                        accentColor="indigo"
                                    >
                                        <div className="bg-slate-900 border border-slate-700 w-full mt-4 p-5 rounded-xl">
                                            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                                                Use Present Continuous to describe actions happening <strong className="text-white italic">at this exact moment</strong> or temporary situations. You <strong className="text-rose-400">must</strong> include the verb To Be.
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                                                <div className="bg-slate-950 p-4 rounded border-t-2 border-green-500">
                                                    <h4 className="text-green-400 font-bold mb-2">Positive (+)</h4>
                                                    <p className="text-slate-400">"I <strong className="text-indigo-400">am cleaning</strong> the kitchen right now."</p>
                                                    <p className="text-slate-400">"She <strong className="text-indigo-400">is helping</strong> a customer."</p>
                                                    <p className="text-slate-400">"We <strong className="text-indigo-400">are washing</strong> the dishes."</p>
                                                </div>
                                                <div className="bg-slate-950 p-4 rounded border-t-2 border-indigo-500">
                                                    <h4 className="text-indigo-400 font-bold mb-2">Question (?)</h4>
                                                    <p className="text-slate-400">"<strong className="text-indigo-400">Are</strong> you <strong className="text-indigo-400">cleaning</strong> the kitchen?"</p>
                                                    <p className="text-slate-400">"<strong className="text-indigo-400">Is</strong> she <strong className="text-indigo-400">helping</strong> the customer?"</p>
                                                    <p className="text-slate-400">"What <strong className="text-indigo-400">are</strong> they <strong className="text-indigo-400">doing</strong>?"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<PlayCircle />}
                                        title="Phase 2: Continuous vs Simple"
                                        subtitle="Contrast &amp; Context"
                                        methodology="Comparative Syntax"
                                        accentColor="indigo"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm font-mono">
                                            <div className="bg-slate-900 border border-indigo-500/20 rounded p-4 relative overflow-hidden">
                                                <div className="absolute -right-2 top-0 opacity-10 font-bold text-6xl text-indigo-500">ING</div>
                                                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-widest text-[10px]">Right Now (Continuous)</h4>
                                                <p className="text-slate-300 border-b border-slate-800 pb-2 mb-2">"I <strong className="text-white">am making</strong> the burgers." <br/><span className="text-xs text-slate-500">(Do not interrupt me, my hands are busy)</span></p>
                                                <p className="text-slate-300">"He <strong className="text-white">is talking</strong> to the manager." <br/><span className="text-xs text-slate-500">(Action in progress)</span></p>
                                            </div>
                                            <div className="bg-slate-900 border border-slate-700/50 rounded p-4 relative overflow-hidden">
                                                <div className="absolute -right-2 top-0 opacity-10 font-bold text-6xl text-slate-500">REG</div>
                                                <h4 className="text-slate-400 font-bold mb-3 uppercase tracking-widest text-[10px]">Usually (Simple)</h4>
                                                <p className="text-slate-300 border-b border-slate-800 pb-2 mb-2">"I <strong className="text-white">make</strong> the burgers every day." <br/><span className="text-xs text-slate-500">(That is my job profile)</span></p>
                                                <p className="text-slate-300">"He <strong className="text-white">talks</strong> to the manager every morning." <br/><span className="text-xs text-slate-500">(Routine)</span></p>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<Briefcase />}
                                        title="Phase 3: The Power of 'CAN'"
                                        subtitle="Abilities, Skills, and Permission"
                                        methodology="Workplace Scenarios"
                                        accentColor="indigo"
                                    >
                                        <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800 mt-4">
                                            <p className="text-sm text-slate-300 leading-relaxed mb-4">
                                                Modals are special verbs. <strong className="text-indigo-400">CAN</strong> never changes (No "S" for he/she), and it never uses 'Do/Does'. It stands alone to show what you have the power or permission to do.
                                            </p>
                                            <ul className="space-y-4 text-sm text-slate-300 font-serif">
                                                <li className="flex items-start gap-4 p-3 bg-slate-950 rounded border border-slate-800">
                                                    <span className="text-indigo-400 font-bold mt-1 uppercase text-xs tracking-widest w-24 shrink-0">Ability:</span> 
                                                    <div>
                                                        "I <strong className="text-white font-bold">can</strong> lift 50 pounds easily."
                                                        <p className="text-rose-400 mt-1 text-xs">"I <strong className="text-rose-500 font-bold">can't</strong> speak German."</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start gap-4 p-3 bg-slate-950 rounded border border-slate-800">
                                                    <span className="text-indigo-400 font-bold mt-1 uppercase text-xs tracking-widest w-24 shrink-0">Skill:</span> 
                                                    <div>
                                                        "She <strong className="text-white font-bold">can</strong> handle angry customers very well."
                                                    </div>
                                                </li>
                                                <li className="flex items-start gap-4 p-3 bg-slate-950 rounded border border-slate-800">
                                                    <span className="text-amber-400 font-bold mt-1 uppercase text-xs tracking-widest w-24 shrink-0">Permission:</span> 
                                                    <div>
                                                        "Boss, <strong className="text-white font-bold">can</strong> I take my 15-minute break now?"
                                                    </div>
                                                </li>
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
                                        title="Phase 1: Compliance &amp; Obligations"
                                        subtitle="Must vs Have To"
                                        methodology="Scenario Warnings"
                                        accentColor="amber"
                                    >
                                        <p className="text-slate-300 text-sm mt-4 leading-relaxed mb-4">
                                            American workplaces have strict liability rules. Understanding when an action is a hard requirement vs a corporate policy is essential for survival.
                                        </p>
                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 font-mono text-xs">
                                            <div className="bg-slate-900/80 border-t-2 border-red-500 rounded p-4">
                                                <p className="text-red-400 font-bold mb-3 uppercase tracking-widest flex items-center gap-2">Must (Legal/Strict)</p>
                                                <p className="text-slate-500 mb-3 text-[10px] leading-tight font-sans">Used for unbendable rules, signs, and deep personal obligations.</p>
                                                <ul className="space-y-3 text-slate-300">
                                                    <li className="border-l-2 border-red-500/30 pl-2">"You <strong className="text-white">MUST NOT</strong> smoke inside."</li>
                                                    <li className="border-l-2 border-red-500/30 pl-2">"Employees <strong className="text-white">MUST</strong> wash hands."</li>
                                                    <li className="border-l-2 border-red-500/30 pl-2">"You <strong className="text-white">MUST</strong> bring your passport."</li>
                                                </ul>
                                            </div>
                                            <div className="bg-slate-900/80 border-t-2 border-amber-500 rounded p-4">
                                                <p className="text-amber-400 font-bold mb-3 uppercase tracking-widest flex items-center gap-2">Have To (Routine Policy)</p>
                                                <p className="text-slate-500 mb-3 text-[10px] leading-tight font-sans">Used for external responsibilities and daily corporate rules.</p>
                                                <ul className="space-y-3 text-slate-300">
                                                    <li className="border-l-2 border-amber-500/30 pl-2">"I <strong className="text-white">HAVE TO</strong> wear a uniform at work."</li>
                                                    <li className="border-l-2 border-amber-500/30 pl-2">"She <strong className="text-white">HAS TO</strong> arrive at 8 AM sharp."</li>
                                                    <li className="border-l-2 border-amber-500/30 pl-2">"We <strong className="text-white">DON'T HAVE TO</strong> work on Sundays."</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<CheckCircle />}
                                        title="Phase 1.5: Polite Permission"
                                        subtitle="May I? vs Can I?"
                                        methodology="Register Switching"
                                        accentColor="amber"
                                    >
                                        <div className="bg-slate-900 overflow-hidden rounded-xl border border-slate-700 w-full mt-4 flex items-center justify-between p-5">
                                            <div className="w-1/2 pr-4 border-r border-slate-800">
                                                <h4 className="text-white font-bold mb-1">"Can I help you?"</h4>
                                                <p className="text-xs text-slate-400">Standard, friendly service. Used at fast food, retail, or casual environments.</p>
                                            </div>
                                            <div className="w-1/2 pl-4">
                                                <h4 className="text-amber-400 font-bold mb-1">"How may I help you?"</h4>
                                                <p className="text-xs text-amber-200">Highly formal, premium service. Used at fine-dining and front desk concierges.</p>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<MessageSquareQuote />}
                                        title="Phase 2: Giving Advice &amp; Warnings"
                                        subtitle="Should vs Had Better"
                                        methodology="Peer Review Roleplay"
                                        accentColor="amber"
                                    >
                                        <p className="text-slate-300 text-sm mt-4 leading-relaxed mb-4">
                                            When coworkers make mistakes, how you correct them determines if they appreciate you or hate you.
                                        </p>
                                        <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 w-full mt-4">
                                            <div className="p-5 space-y-5 font-serif text-sm">
                                                <div>
                                                    <p className="text-slate-300 mb-1">"I am very tired today."</p>
                                                    <p className="text-amber-400 italic">"You <strong className="text-amber-300 font-bold">should</strong> go to sleep early." <span className="text-xs font-sans text-slate-500 tracking-wider ml-2 uppercase">(Friendly Suggestion)</span></p>
                                                </div>
                                                <hr className="border-slate-800" />
                                                <div>
                                                    <p className="text-slate-300 mb-1">"I lost the master key to the rooms."</p>
                                                    <p className="text-rose-400 italic">"You <strong className="text-rose-500 font-bold">had better</strong> call your manager right now." <span className="text-xs font-sans tracking-wider text-rose-900 bg-rose-500/20 px-2 py-1 rounded ml-2 uppercase">(Critical Warning: Bad things will happen if you don't)</span></p>
                                                </div>
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
                                        <p className="text-slate-300 text-sm mt-4 leading-relaxed mb-4">
                                            The Customs and Border Protection (CBP) officer is the final boss. You must respond quickly, clearly, and without hesitation. If you stall, they will suspect you.
                                        </p>
                                        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                                            <div className="p-5 space-y-4 font-serif text-sm">
                                                <p className="text-slate-300"><strong className="text-white">Officer:</strong> "Passport and DS-2019 form, please. What is the purpose of your visit?"</p>
                                                <div className="bg-teal-950/30 p-3 rounded-lg border-l-2 border-teal-500">
                                                    <p className="text-teal-400 italic font-bold">"I am participating in a J-1 Summer Work and Travel program."</p>
                                                </div>
                                                
                                                <p className="text-slate-300"><strong className="text-white">Officer:</strong> "Where will you be working?"</p>
                                                <div className="bg-teal-950/30 p-3 rounded-lg border-l-2 border-teal-500">
                                                    <p className="text-teal-400 italic">"I will work at the <strong className="text-white">Kalahari Resort</strong> in <strong className="text-white">Wisconsin Dells, Wisconsin</strong>."</p>
                                                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">(Must state exact city and state)</p>
                                                </div>
                                                
                                                <p className="text-slate-300"><strong className="text-white">Officer:</strong> "What is your job role?"</p>
                                                <div className="bg-teal-950/30 p-3 rounded-lg border-l-2 border-teal-500">
                                                    <p className="text-teal-400 italic">"I am going to be a <strong className="text-white">Lifeguard / Housekeeper / Food Runner</strong>."</p>
                                                </div>

                                                <p className="text-slate-300"><strong className="text-white">Officer:</strong> "How long are you staying?"</p>
                                                <div className="bg-teal-950/30 p-3 rounded-lg border-l-2 border-teal-500">
                                                    <p className="text-teal-400 italic">"I am staying for 3 months, returning in March."</p>
                                                </div>
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
                                            
                                            <div className="mb-4">
                                                <h4 className="text-teal-400 font-bold mb-3 uppercase text-xs tracking-widest">Randomized Trap Questions:</h4>
                                                <ul className="space-y-2 text-sm text-slate-400 font-serif border-l border-slate-800 pl-4">
                                                    <li>• "Who is paying for your trip?" <span className="text-xs ml-2 text-indigo-400">("My parents / my savings.")</span></li>
                                                    <li>• "Do you have family in the US?" <span className="text-xs ml-2 text-indigo-400">("No.")</span></li>
                                                    <li>• "What do you study in Colombia?" <span className="text-xs ml-2 text-indigo-400">("I study engineering at...")</span></li>
                                                </ul>
                                            </div>

                                            <h4 className="text-rose-400 font-bold mb-3 uppercase text-xs tracking-widest">Automatic Failure Criteria:</h4>
                                            <ul className="space-y-2 text-sm text-slate-400 font-mono">
                                                <li className="flex items-start gap-2"><span className="text-rose-500">✗</span> Hesitating or using "Uhhh... Mmmm..."</li>
                                                <li className="flex items-start gap-2"><span className="text-rose-500">✗</span> Confusing "To Be" and "To Have" (e.g. "I have 22 years old")</li>
                                                <li className="flex items-start gap-2"><span className="text-rose-500">✗</span> Not knowing the name of the Sponsor or the exact Work Location</li>
                                                <li className="flex items-start gap-2"><span className="text-rose-500">✗</span> Breaking eye contact or speaking too softly</li>
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
