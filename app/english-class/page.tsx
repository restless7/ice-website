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
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { StepCard } from "@/components/english-class/StepCard";

export default function EnglishClassPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
            <CurriculumHeader 
                hourNumber="1 & 2"
                title="Master the Essentials."
                subtitle="In Just Two Hours."
                description="Equip yourself with the fundamental tools for clear communication, from professional greetings to flawless spelling, designed specifically for your travel and career success."
                accentColor="blue"
            />

            {/* Course Structure */}
            <section className="py-24 bg-slate-900/50 border-y border-white/5 relative z-10 transition-all duration-500">
                <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Hour 1 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-b from-blue-500/5 to-transparent rounded-3xl -z-10 blur-xl"></div>
                            <div className="sticky top-24">
                                <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
                                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] font-mono">
                                        <span className="text-xl font-bold">01</span>
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-white tracking-tight">Icebreakers &amp; Interactions</h2>
                                        <p className="text-blue-400 font-medium">Fundamental Greetings</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeIn} className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8 shadow-xl">
                                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-white">
                                        <Award className="w-5 h-5 text-yellow-400" />
                                        Objective
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed text-sm">
                                        By the end of this hour, you will be able to confidently greet others appropriately based on context (formal vs. informal), use correct titles, and introduce yourself and peers effortlessly.
                                    </p>
                                </motion.div>

                                <div className="space-y-4">
                                    <StepCard
                                        icon={<Clock />}
                                        title="Warm-Up: Context Setting"
                                        description="First impressions matter. Categorize greetings into 'Formal' (Embassy/Job) and 'Informal' (Coworkers/Friends)."
                                        color="blue"
                                    />
                                    <StepCard
                                        icon={<PlayCircle />}
                                        title="Presentation: Greetings & Titles"
                                        description="Native interaction analysis. Master Mr., Mrs., Ms. and essential subject pronouns for professional identity."
                                        color="blue"
                                    />
                                    <StepCard
                                        icon={<Users />}
                                        title="Active Practice: Q&A Methodology"
                                        description="Role-play scenarios: Meeting a boss vs. a roommate. Includes interactive comprehension quizzes."
                                        color="blue"
                                    />
                                    <StepCard
                                        icon={<CheckCircle />}
                                        title="Verification: Live Feedback"
                                        description="Demonstrate your interactions and receive precision feedback on pronunciation and body language."
                                        color="blue"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Hour 2 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-b from-purple-500/5 to-transparent rounded-3xl -z-10 blur-xl"></div>
                            <div className="sticky top-24">
                                <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
                                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)] font-mono">
                                        <span className="text-xl font-bold">02</span>
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-white tracking-tight">The Building Blocks</h2>
                                        <p className="text-purple-400 font-medium">Spelling & Phonetics</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeIn} className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8 shadow-xl">
                                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-white">
                                        <Award className="w-5 h-5 text-yellow-400" />
                                        Objective
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed text-sm">
                                        By the end of this hour, you will master the English alphabet, recognize phonetic sounds, and confidently spell out personal information under pressure.
                                    </p>
                                </motion.div>

                                <div className="space-y-4">
                                    <StepCard
                                        icon={<MessageCircle />}
                                        title="Warm-Up: Greeting Review"
                                        description="Active cross-room greetings to reinforce connections and immediately use learned material."
                                        color="purple"
                                    />
                                    <StepCard
                                        icon={<BookOpen />}
                                        title="Presentation: The Phonetic Code"
                                        description="Group letters by rhyming sounds. Tackle common A1/A2 hurdles: Vowels and tricky consonants (J, Y, G, R)."
                                        color="purple"
                                    />
                                    <StepCard
                                        icon={<Headphones />}
                                        title="Active Practice: Spell It Out"
                                        description="Interactive spelling drills focusing on your own name and critical travel details like passport and flight info."
                                        color="purple"
                                    />
                                    <StepCard
                                        icon={<SpellCheck />}
                                        title="Verification: Mini Spelling Bee"
                                        description="Low-stakes competition to build confidence and accuracy under slight situational pressure."
                                        color="purple"
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Footer / CTA */}
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Ready to Level Up?</h2>
                        <p className="text-slate-300 mb-8 max-w-xl mx-auto relative z-10 text-sm md:text-base leading-relaxed">
                            Join our immersive sessions and transform your communication skills. This is just the beginning of your 40-hour linguistic journey.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <button className="bg-white text-slate-950 font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow duration-300 hover:scale-105 transform min-w-[200px]">
                                Download Syllabus
                            </button>
                            <Link href="/english-class/hours-3-4" className="flex items-center gap-3 py-4 px-8 rounded-full bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors border border-white/10 group/btn transition-all duration-300 min-w-[200px] justify-center">
                                <span>Next Module</span>
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
