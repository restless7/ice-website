"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Heart,
    Home,
    MessageCircle,
    Users,
    CheckCircle,
    BookOpen,
    Plane,
    Briefcase,
    AlertTriangle,
    Baby,
    Shield,
    Globe,
    Brain,
    Phone,
    Scale,
    MapPin,
    Clock,
    Sparkles,
    ArrowRight,
    MessageSquareQuote
} from "lucide-react";
import Link from "next/link";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumContext } from "@/components/english-class/CurriculumContext";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

export default function AuPairCoursePage() {
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
                hourNumber="1 - 5"
                title="The AU PAIR Program."
                subtitle="5 Hours to Family Life."
                description="An elevated, intermediate-level masterclass designed for AU PAIR candidates. Master household vocabulary, childcare communication, cultural fluency, conflict resolution, and the J-1 AU PAIR visa interview."
                accentColor="rose"
                moduleInfo="AU PAIR Elevated Program"
            />

            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    
                    {/* HOUR 1: The Family Dynamic */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="mb-32 relative"
                    >
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500/50 via-rose-500/10 to-transparent hidden lg:block"></div>
                        
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                            <div className="lg:w-1/3 relative">
                                <div className="sticky top-24 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/10 text-rose-400 border border-rose-500/20 shadow-[0_0_40px_rgba(244,63,94,0.15)] flex-shrink-0 font-mono">
                                            <span className="text-2xl font-bold">01</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white tracking-tight">The Family Dynamic</h2>
                                            <p className="text-rose-400 font-medium tracking-wide text-xs uppercase">Introductions & House Rules</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        Your host family is not an employer — they are your American family. First impressions, household vocabulary, and diplomatic negotiation are your survival tools.
                                    </p>

                                    <CurriculumContext title="AU PAIR vs Work & Travel" accentColor="rose">
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            <strong>Elevated Baseline:</strong> We assume you already command To Be, Simple Present, and basic modals. This course builds FROM those foundations into nuanced, real-world fluency for domestic life.
                                        </p>
                                    </CurriculumContext>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="space-y-8">
                                    <CurriculumBlock 
                                        icon={<MessageCircle />}
                                        title="Phase 1: The Video Call Interview"
                                        subtitle="Host Family Matching"
                                        methodology="Guided Roleplay"
                                        accentColor="rose"
                                    >
                                        <p className="text-slate-300 text-sm mt-4 leading-relaxed mb-4">
                                            Host families interview AU PAIRs via video call. You must project <strong className="text-white">warmth, competence, and cultural curiosity</strong>. These are not job interviews — they are family compatibility assessments.
                                        </p>
                                        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                                            <div className="p-5 space-y-4 font-serif text-sm">
                                                <p className="text-slate-300"><strong className="text-white">Host Mom:</strong> "So, tell us a little about yourself and why you want to be an AU PAIR."</p>
                                                <div className="bg-rose-950/30 p-3 rounded-lg border-l-2 border-rose-500">
                                                    <p className="text-rose-400 italic">"Thank you so much for taking the time to speak with me. I'm Maria, I'm 22 years old, and I'm from Bucaramanga, Colombia. I've always <strong className="text-white">loved</strong> working with children — I've been a Sunday school teacher for 3 years."</p>
                                                </div>
                                                
                                                <p className="text-slate-300"><strong className="text-white">Host Dad:</strong> "How would you handle a situation where our 4-year-old is having a tantrum?"</p>
                                                <div className="bg-rose-950/30 p-3 rounded-lg border-l-2 border-rose-500">
                                                    <p className="text-rose-400 italic">"I <strong className="text-white">would</strong> first make sure the child is safe. Then I <strong className="text-white">would</strong> get down to their eye level and acknowledge their feelings: 'I can see you're very upset right now.' I <strong className="text-white">wouldn't</strong> yell or punish — I <strong className="text-white">would</strong> wait for the storm to pass and then talk about it."</p>
                                                    <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest">(Note the conditional WOULD for hypothetical scenarios)</p>
                                                </div>

                                                <p className="text-slate-300"><strong className="text-white">Host Mom:</strong> "Do you have any questions for us?"</p>
                                                <div className="bg-rose-950/30 p-3 rounded-lg border-l-2 border-rose-500">
                                                    <p className="text-rose-400 italic">"Yes! I <strong className="text-white">would love</strong> to know more about your children's daily routine. And <strong className="text-white">would</strong> it be possible to visit a college nearby during my free time?"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<Home />}
                                        title="Phase 2: Household Vocabulary Arsenal"
                                        subtitle="80+ Domestic Terms"
                                        methodology="Category Mapping"
                                        accentColor="rose"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs font-mono">
                                            <div className="bg-slate-950 p-4 rounded border-t-2 border-rose-500">
                                                <h4 className="text-rose-400 font-bold mb-3">🧺 Laundry</h4>
                                                <ul className="space-y-1 text-slate-300">
                                                    <li>sort the lights and darks</li>
                                                    <li>load / unload the washing machine</li>
                                                    <li>fold the clothes</li>
                                                    <li>iron a shirt</li>
                                                    <li>hang-dry the delicates</li>
                                                    <li>put away the clean laundry</li>
                                                </ul>
                                            </div>
                                            <div className="bg-slate-950 p-4 rounded border-t-2 border-pink-500">
                                                <h4 className="text-pink-400 font-bold mb-3">🍳 Kitchen</h4>
                                                <ul className="space-y-1 text-slate-300">
                                                    <li>load / unload the dishwasher</li>
                                                    <li>store the leftovers</li>
                                                    <li>defrost the chicken</li>
                                                    <li>wipe down the counters</li>
                                                    <li>pack the lunchboxes</li>
                                                    <li>set / clear the table</li>
                                                </ul>
                                            </div>
                                            <div className="bg-slate-950 p-4 rounded border-t-2 border-fuchsia-500">
                                                <h4 className="text-fuchsia-400 font-bold mb-3">🧹 Cleaning</h4>
                                                <ul className="space-y-1 text-slate-300">
                                                    <li>vacuum the carpet</li>
                                                    <li>sweep the floor</li>
                                                    <li>mop the kitchen tiles</li>
                                                    <li>disinfect the bathroom</li>
                                                    <li>take out the trash / recycling</li>
                                                    <li>make the beds</li>
                                                </ul>
                                            </div>
                                            <div className="bg-slate-950 p-4 rounded border-t-2 border-red-500">
                                                <h4 className="text-red-400 font-bold mb-3">👶 Childcare Gear</h4>
                                                <ul className="space-y-1 text-slate-300">
                                                    <li>car seat / booster seat</li>
                                                    <li>stroller / buggy</li>
                                                    <li>playpen / pack-n-play</li>
                                                    <li>high chair</li>
                                                    <li>sippy cup / bottle</li>
                                                    <li>pacifier / diaper bag</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<Scale />}
                                        title="Phase 3: Setting Boundaries with Grace"
                                        subtitle="WOULD/COULD Softeners"
                                        methodology="Diplomatic Negotiation"
                                        accentColor="rose"
                                    >
                                        <p className="text-slate-300 text-sm mt-4 leading-relaxed mb-4">
                                            In American culture, <strong className="text-white">directness without softeners feels aggressive</strong>. You must learn to frame requests as possibilities, not demands.
                                        </p>
                                        <div className="space-y-3 mt-4">
                                            <div className="bg-slate-900 border border-slate-700 rounded p-4 flex items-start gap-4">
                                                <span className="text-rose-500 text-lg">✗</span>
                                                <div>
                                                    <p className="text-slate-400 line-through text-sm">"I want Saturdays free."</p>
                                                    <p className="text-xs text-slate-500 mt-1">Too direct. Sounds like a demand.</p>
                                                </div>
                                            </div>
                                            <div className="bg-slate-900 border border-rose-500/30 rounded p-4 flex items-start gap-4">
                                                <span className="text-green-500 text-lg">✓</span>
                                                <div>
                                                    <p className="text-white text-sm font-medium">"<strong className="text-rose-400">Would</strong> it be possible to have Saturdays as my day off?"</p>
                                                    <p className="text-xs text-slate-500 mt-1">Diplomatic. Shows respect for the family's needs.</p>
                                                </div>
                                            </div>
                                            <div className="bg-slate-900 border border-slate-700 rounded p-4 flex items-start gap-4">
                                                <span className="text-rose-500 text-lg">✗</span>
                                                <div>
                                                    <p className="text-slate-400 line-through text-sm">"I don't eat meat."</p>
                                                    <p className="text-xs text-slate-500 mt-1">Factual but cold. No indication of flexibility.</p>
                                                </div>
                                            </div>
                                            <div className="bg-slate-900 border border-rose-500/30 rounded p-4 flex items-start gap-4">
                                                <span className="text-green-500 text-lg">✓</span>
                                                <div>
                                                    <p className="text-white text-sm font-medium">"I <strong className="text-rose-400">should</strong> mention that I'm vegetarian. I <strong className="text-rose-400">would</strong> be happy to cook my own meals — I <strong className="text-rose-400">wouldn't</strong> want to be an inconvenience."</p>
                                                    <p className="text-xs text-slate-500 mt-1">Graceful. Offers a solution alongside the limitation.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* HOUR 2: Childcare English */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="mb-32 relative"
                    >
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/10 to-transparent hidden lg:block"></div>
                        
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                            <div className="lg:w-1/3 relative">
                                <div className="sticky top-24 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.15)] flex-shrink-0 font-mono">
                                            <span className="text-2xl font-bold">02</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white tracking-tight">Childcare English</h2>
                                            <p className="text-emerald-400 font-medium tracking-wide text-xs uppercase">Communication & Safety</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        Speaking to a 3-year-old requires a completely different register than speaking to adults. Master child-directed speech, positive reinforcement, and emergency protocols.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="space-y-8">
                                    <CurriculumBlock 
                                        icon={<Baby />}
                                        title="Phase 1: The Language of Children"
                                        subtitle="Child-Directed Speech"
                                        methodology="Tonal Modeling"
                                        accentColor="emerald"
                                    >
                                        <div className="space-y-4 mt-4">
                                            <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800">
                                                <h4 className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-3">Positive Reinforcement</h4>
                                                <div className="grid grid-cols-2 gap-3 text-sm font-mono text-slate-300">
                                                    <div className="bg-emerald-950/30 p-3 rounded border border-emerald-500/10">
                                                        <p>"<strong className="text-white">Great job</strong> putting on your shoes!"</p>
                                                    </div>
                                                    <div className="bg-emerald-950/30 p-3 rounded border border-emerald-500/10">
                                                        <p>"I'm <strong className="text-white">so proud</strong> of you for sharing!"</p>
                                                    </div>
                                                    <div className="bg-emerald-950/30 p-3 rounded border border-emerald-500/10">
                                                        <p>"<strong className="text-white">Use your words</strong>, sweetie."</p>
                                                    </div>
                                                    <div className="bg-emerald-950/30 p-3 rounded border border-emerald-500/10">
                                                        <p>"You did it <strong className="text-white">all by yourself</strong>!"</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800">
                                                <h4 className="text-rose-400 font-bold text-xs uppercase tracking-widest mb-3">Redirecting Behavior (NOT Punishing)</h4>
                                                <div className="space-y-3 text-sm font-mono">
                                                    <div className="flex items-start gap-3 border-b border-slate-800 pb-2">
                                                        <span className="text-rose-500">✗</span>
                                                        <p className="text-slate-400 line-through">"Don't hit your brother!"</p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <span className="text-emerald-500">✓</span>
                                                        <p className="text-white">"We use <strong className="text-emerald-400">gentle hands</strong>. Can you show me gentle hands?"</p>
                                                    </div>
                                                    <div className="flex items-start gap-3 border-b border-slate-800 pb-2 mt-3">
                                                        <span className="text-rose-500">✗</span>
                                                        <p className="text-slate-400 line-through">"Stop crying!"</p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <span className="text-emerald-500">✓</span>
                                                        <p className="text-white">"I can see you're feeling <strong className="text-emerald-400">frustrated</strong>. Do you want a hug?"</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<Clock />}
                                        title="Phase 2: Daily Routine Narration"
                                        subtitle="Sequence & Time Management"
                                        methodology="Continuous Tense Mastery"
                                        accentColor="emerald"
                                    >
                                        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                                            <div className="p-5 space-y-3 font-serif text-sm">
                                                <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest border-l-2 border-emerald-500 pl-2 mb-4">A Morning with the Kids</p>
                                                <p className="text-slate-400 italic">"<strong className="text-emerald-300">First</strong>, we're going to brush our teeth."</p>
                                                <p className="text-slate-400 italic">"<strong className="text-emerald-300">Then</strong>, let's pick out your clothes for today."</p>
                                                <p className="text-slate-400 italic">"<strong className="text-emerald-300">After that</strong>, I'm going to make you some breakfast."</p>
                                                <p className="text-slate-400 italic">"<strong className="text-emerald-300">Next</strong>, we need to pack your backpack for school."</p>
                                                <p className="text-slate-400 italic">"<strong className="text-emerald-300">Finally</strong>, let's put on your jacket — it's cold outside!"</p>
                                                <div className="bg-emerald-950/20 p-3 rounded-lg border border-emerald-500/20 mt-4">
                                                    <p className="text-xs text-emerald-300 font-medium">
                                                        <strong className="text-emerald-400">Teaching Tip:</strong> Children need predictable language. Using the same sequence words every day creates security and builds their (and your) English routine naturally.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<Shield />}
                                        title="Phase 3: Emergency Protocols"
                                        subtitle="911, Allergies & Injury Reporting"
                                        methodology="Script Memorization"
                                        accentColor="emerald"
                                    >
                                        <div className="space-y-4 mt-4">
                                            <div className="bg-red-950/20 p-5 rounded-xl border border-red-500/30">
                                                <h4 className="text-red-400 font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Calling 911</h4>
                                                <div className="space-y-2 font-mono text-sm text-slate-300">
                                                    <p>"I need an <strong className="text-white">ambulance</strong> at <strong className="text-red-400">[full address]</strong>."</p>
                                                    <p>"A <strong className="text-white">3-year-old child</strong> is having an allergic reaction."</p>
                                                    <p>"He is <strong className="text-white">allergic to peanuts</strong>. I have already given him his <strong className="text-red-400">EpiPen</strong>."</p>
                                                    <p>"I am the <strong className="text-white">AU PAIR</strong>. The parents' number is <strong className="text-red-400">[phone number]</strong>."</p>
                                                </div>
                                            </div>
                                            <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800">
                                                <h4 className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-3">Reporting to Parents (Text/Call)</h4>
                                                <div className="space-y-2 font-mono text-xs text-slate-300">
                                                    <div className="bg-slate-950 p-3 rounded border-l-2 border-amber-500">
                                                        <p className="text-amber-300">"Hi Mrs. Johnson, I wanted to let you know that Emma fell at the playground. She scraped her knee but she's okay — I cleaned it and put a bandaid on it. She's resting now."</p>
                                                    </div>
                                                    <div className="bg-slate-950 p-3 rounded border-l-2 border-red-500 mt-2">
                                                        <p className="text-red-300">"URGENT: Liam has a fever of 101°F. He is vomiting. Should I give him Tylenol or take him to urgent care? Please call me."</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* HOUR 3: Cultural Fluency & Idioms */}
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
                                            <span className="text-2xl font-bold">03</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white tracking-tight">Cultural Fluency</h2>
                                            <p className="text-amber-400 font-medium tracking-wide text-xs uppercase">Idioms & American Codes</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        Surviving is not enough — you need to blend in. Understand American cultural codes, master the 30 essential phrasal verbs, and relay messages like a native.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="space-y-8">
                                    <CurriculumBlock 
                                        icon={<Globe />}
                                        title="Phase 1: American Cultural Codes"
                                        subtitle="The Unwritten Rules"
                                        methodology="Culture Shock Training"
                                        accentColor="amber"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
                                            <div className="bg-slate-950 p-4 rounded border-t-2 border-amber-500">
                                                <h4 className="text-amber-400 font-bold mb-3 text-xs uppercase tracking-widest">✅ DO in America</h4>
                                                <ul className="space-y-2 text-slate-300 text-xs">
                                                    <li className="border-l-2 border-amber-500/30 pl-2">Say "<strong className="text-white">please</strong>" and "<strong className="text-white">thank you</strong>" in <em>every</em> transaction</li>
                                                    <li className="border-l-2 border-amber-500/30 pl-2">Tip 18-20% at restaurants, always</li>
                                                    <li className="border-l-2 border-amber-500/30 pl-2">Make small talk: "How was your weekend?"</li>
                                                    <li className="border-l-2 border-amber-500/30 pl-2">Maintain 2-3 feet of personal space</li>
                                                    <li className="border-l-2 border-amber-500/30 pl-2">Say "excuse me" when passing someone</li>
                                                </ul>
                                            </div>
                                            <div className="bg-slate-950 p-4 rounded border-t-2 border-red-500">
                                                <h4 className="text-red-400 font-bold mb-3 text-xs uppercase tracking-widest">❌ DON'T in America</h4>
                                                <ul className="space-y-2 text-slate-300 text-xs">
                                                    <li className="border-l-2 border-red-500/30 pl-2">Ask personal questions (salary, age, weight)</li>
                                                    <li className="border-l-2 border-red-500/30 pl-2">Touch or kiss strangers when greeting</li>
                                                    <li className="border-l-2 border-red-500/30 pl-2">Be late without texting ahead</li>
                                                    <li className="border-l-2 border-red-500/30 pl-2">Talk loudly on public transportation</li>
                                                    <li className="border-l-2 border-red-500/30 pl-2">Discuss politics or religion casually</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<Sparkles />}
                                        title="Phase 2: Phrasal Verb Assault"
                                        subtitle="30 Essential Phrasal Verbs"
                                        methodology="Contextual Drilling"
                                        accentColor="amber"
                                    >
                                        <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800 mt-4">
                                            <p className="text-sm text-slate-300 leading-relaxed mb-4">
                                                Phrasal verbs are the <strong className="text-white">difference between textbook English and real English</strong>. Americans don't say "collect the children" — they say "<strong className="text-amber-400">pick up</strong> the kids."
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                                                <div className="bg-slate-950 p-3 rounded border border-amber-500/10">
                                                    <p className="text-amber-400 font-bold mb-2">Transportation</p>
                                                    <ul className="space-y-1 text-slate-300">
                                                        <li><strong className="text-white">pick up</strong> / <strong className="text-white">drop off</strong> (kids)</li>
                                                        <li><strong className="text-white">get in</strong> / <strong className="text-white">get out</strong> of the car</li>
                                                        <li><strong className="text-white">buckle up</strong> (seatbelt)</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-slate-950 p-3 rounded border border-amber-500/10">
                                                    <p className="text-amber-400 font-bold mb-2">Daily Life</p>
                                                    <ul className="space-y-1 text-slate-300">
                                                        <li><strong className="text-white">wake up</strong> / <strong className="text-white">get up</strong></li>
                                                        <li><strong className="text-white">clean up</strong> / <strong className="text-white">put away</strong></li>
                                                        <li><strong className="text-white">run out of</strong> (milk, diapers)</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-slate-950 p-3 rounded border border-amber-500/10">
                                                    <p className="text-amber-400 font-bold mb-2">Relationships</p>
                                                    <ul className="space-y-1 text-slate-300">
                                                        <li><strong className="text-white">get along with</strong> (host family)</li>
                                                        <li><strong className="text-white">look after</strong> / <strong className="text-white">take care of</strong></li>
                                                        <li><strong className="text-white">hang out</strong> with friends</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<MessageSquareQuote />}
                                        title="Phase 3: Reported Speech"
                                        subtitle="The WhatsApp Bridge"
                                        methodology="Message Relay Drills"
                                        accentColor="amber"
                                    >
                                        <p className="text-slate-300 text-sm mt-4 leading-relaxed mb-4">
                                            As an AU PAIR, you are the <strong className="text-white">communication hub</strong> of the family. You relay messages between parents, children, and schools constantly.
                                        </p>
                                        <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 w-full mt-4">
                                            <div className="p-5 space-y-5 font-serif text-sm">
                                                <div>
                                                    <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">Original Message</p>
                                                    <p className="text-slate-300 mb-1">"I will be late tonight." — <strong className="text-white">Host Mom (text)</strong></p>
                                                    <p className="text-amber-400 italic">"Your mom <strong className="text-amber-300 font-bold">said</strong> she <strong className="text-amber-300 font-bold">would</strong> be late tonight."</p>
                                                </div>
                                                <hr className="border-slate-800" />
                                                <div>
                                                    <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">Original Message</p>
                                                    <p className="text-slate-300 mb-1">"Pick Emma up at 3 PM." — <strong className="text-white">Host Dad (call)</strong></p>
                                                    <p className="text-amber-400 italic">"Dad <strong className="text-amber-300 font-bold">told</strong> me to <strong className="text-amber-300 font-bold">pick</strong> you <strong className="text-amber-300 font-bold">up</strong> at 3."</p>
                                                </div>
                                                <hr className="border-slate-800" />
                                                <div>
                                                    <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">Original Message</p>
                                                    <p className="text-slate-300 mb-1">"Emma has a fever and needs to go home." — <strong className="text-white">School Nurse</strong></p>
                                                    <p className="text-amber-400 italic">"The school <strong className="text-amber-300 font-bold">called</strong> and <strong className="text-amber-300 font-bold">said</strong> that Emma <strong className="text-amber-300 font-bold">had</strong> a fever and <strong className="text-amber-300 font-bold">needed</strong> to go home."</p>
                                                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">(Tense backshift: has → had, needs → needed)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* HOUR 4: Conflict Resolution & Emotional Intelligence */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="mb-32 relative"
                    >
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/10 to-transparent hidden lg:block"></div>
                        
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                            <div className="lg:w-1/3 relative">
                                <div className="sticky top-24 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.15)] flex-shrink-0 font-mono">
                                            <span className="text-2xl font-bold">04</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white tracking-tight">Conflict Resolution</h2>
                                            <p className="text-purple-400 font-medium tracking-wide text-xs uppercase">Emotional Intelligence</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        Living with a family means navigating disagreements, expressing discomfort, and communicating with your sponsoring agency professionally.
                                    </p>

                                    <CurriculumContext title="The Cultural Gap" accentColor="purple">
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            <strong>Direct vs Indirect:</strong> Latin American culture tends toward direct emotional expression. American culture values indirect, diplomatically-framed communication. Learning this gap prevents 90% of AU PAIR conflicts.
                                        </p>
                                    </CurriculumContext>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="space-y-8">
                                    <CurriculumBlock 
                                        icon={<Brain />}
                                        title="Phase 1: The I-Feel Framework"
                                        subtitle="Expressing Discomfort Diplomatically"
                                        methodology="Conditional Structures"
                                        accentColor="purple"
                                    >
                                        <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800 mt-4">
                                            <p className="text-sm text-slate-300 leading-relaxed mb-4">
                                                The <strong className="text-purple-400">"I feel... when... because..."</strong> framework is the gold standard for non-confrontational communication in American households.
                                            </p>
                                            <div className="space-y-4 font-mono text-sm">
                                                <div className="bg-slate-950 p-4 rounded border-l-2 border-purple-500">
                                                    <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">Scenario: Working Extra Hours</p>
                                                    <p className="text-purple-400 italic">"I <strong className="text-white">feel</strong> overwhelmed <strong className="text-white">when</strong> I work past 7 PM on weekdays <strong className="text-white">because</strong> I don't have time to rest or study. <strong className="text-purple-300">Would</strong> it be possible to discuss the schedule?"</p>
                                                </div>
                                                <div className="bg-slate-950 p-4 rounded border-l-2 border-fuchsia-500">
                                                    <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">Scenario: Children Being Disrespectful</p>
                                                    <p className="text-fuchsia-400 italic">"I <strong className="text-white">feel</strong> uncomfortable <strong className="text-white">when</strong> the children call me names <strong className="text-white">because</strong> it makes it hard to maintain their respect. <strong className="text-purple-300">Could</strong> we talk about how to address this together?"</p>
                                                </div>
                                                <div className="bg-slate-950 p-4 rounded border-l-2 border-pink-500">
                                                    <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">Scenario: Homesickness</p>
                                                    <p className="text-pink-400 italic">"I've been <strong className="text-white">feeling</strong> a bit homesick lately. I <strong className="text-white">would</strong> really appreciate it <strong className="text-white">if</strong> I could video-call my family on Sunday mornings. <strong className="text-purple-300">Would</strong> that work with the family schedule?"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<Users />}
                                        title="Phase 2: The Difficult Conversation"
                                        subtitle="Roleplay Scenarios"
                                        methodology="Case-Based Simulation"
                                        accentColor="purple"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
                                            <div className="bg-purple-950/20 p-4 rounded-xl border border-purple-500/20">
                                                <h4 className="text-purple-400 font-bold mb-2 text-xs uppercase tracking-widest">Scenario A</h4>
                                                <p className="text-slate-300 text-xs leading-relaxed mb-3">The host parents ask you to clean the entire house — but your contract says only children-related areas.</p>
                                                <div className="bg-slate-950 p-3 rounded text-xs font-mono">
                                                    <p className="text-purple-300 italic">"I <strong className="text-white">don't mind</strong> helping out when it's needed, but I <strong className="text-white">think</strong> cleaning the entire house <strong className="text-white">might be</strong> outside my responsibilities. <strong className="text-white">Could</strong> we review the handbook together?"</p>
                                                </div>
                                            </div>
                                            <div className="bg-purple-950/20 p-4 rounded-xl border border-purple-500/20">
                                                <h4 className="text-purple-400 font-bold mb-2 text-xs uppercase tracking-widest">Scenario B</h4>
                                                <p className="text-slate-300 text-xs leading-relaxed mb-3">You disagree with a parenting decision (e.g., too much screen time for the child).</p>
                                                <div className="bg-slate-950 p-3 rounded text-xs font-mono">
                                                    <p className="text-purple-300 italic">"I've noticed that Liam seems really energetic after watching TV. <strong className="text-white">Would</strong> you be open to trying some outdoor play before screen time? I read that it <strong className="text-white">can</strong> help with bedtime."</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<Briefcase />}
                                        title="Phase 3: Agency Communication"
                                        subtitle="Formal Written English"
                                        methodology="Email Templates"
                                        accentColor="purple"
                                    >
                                        <p className="text-slate-300 text-sm mt-4 leading-relaxed mb-4">
                                            Your sponsoring agency (InterExchange, Cultural Care) is your <strong className="text-white">safety net</strong>. Knowing how to write professional emails to them is critical.
                                        </p>
                                        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                                            <div className="p-5 font-mono text-xs text-slate-300">
                                                <p className="text-purple-400 font-bold mb-3 text-[10px] uppercase tracking-widest">Email Template: Reporting a Concern</p>
                                                <div className="bg-slate-950 p-4 rounded space-y-2">
                                                    <p><strong className="text-white">Subject:</strong> Concern Regarding Schedule — [Your Name] / [Host Family ID]</p>
                                                    <p className="mt-2"><strong className="text-white">Dear [Coordinator Name],</strong></p>
                                                    <p className="mt-2">I hope this email finds you well. I am writing to <strong className="text-purple-300">express a concern</strong> regarding my current work schedule.</p>
                                                    <p className="mt-2">Over the past two weeks, I <strong className="text-purple-300">have been asked</strong> to work an average of 52 hours per week, which <strong className="text-purple-300">exceeds</strong> the 45-hour limit outlined in my contract.</p>
                                                    <p className="mt-2">I have <strong className="text-purple-300">already spoken</strong> to my host family about this, but the situation <strong className="text-purple-300">has not changed</strong>. I <strong className="text-purple-300">would appreciate</strong> your guidance on how to proceed.</p>
                                                    <p className="mt-2">Thank you for your time and support.</p>
                                                    <p className="mt-2">Sincerely,<br />[Your Full Name]<br />[Phone Number]</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* HOUR 5: The Complete AU PAIR — Final Assessment */}
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
                                            <h2 className="text-3xl font-bold text-white tracking-tight">The Complete AU PAIR</h2>
                                            <p className="text-teal-400 font-medium tracking-wide text-xs uppercase">Final Assessment</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        The culmination: a J-1 AU PAIR visa interview, a full-day simulation, and a cultural readiness evaluation. Every tense, every register, 360-degree assessment.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="space-y-8">
                                    <CurriculumBlock 
                                        icon={<Plane />}
                                        title="Phase 1: AU PAIR J-1 Visa Interview"
                                        subtitle="Embassy Preparation"
                                        methodology="Script & Improvisation"
                                        accentColor="teal"
                                    >
                                        <p className="text-slate-300 text-sm mt-4 leading-relaxed mb-4">
                                            The AU PAIR visa interview is <strong className="text-white">different from Work & Travel</strong>. Officers probe your childcare experience, emotional maturity, and long-term commitment.
                                        </p>
                                        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 w-full mt-4">
                                            <div className="p-5 space-y-4 font-serif text-sm">
                                                <p className="text-slate-300"><strong className="text-white">Officer:</strong> "What experience do you have with children?"</p>
                                                <div className="bg-teal-950/30 p-3 rounded-lg border-l-2 border-teal-500">
                                                    <p className="text-teal-400 italic">"I have <strong className="text-white">over 1,200 hours</strong> of certified childcare experience. I worked as a babysitter for two families in my neighborhood for three years, and I <strong className="text-white">also volunteered</strong> at my church's children's program every Sunday."</p>
                                                </div>
                                                
                                                <p className="text-slate-300"><strong className="text-white">Officer:</strong> "You'll be away from home for at least a year. How will you handle homesickness?"</p>
                                                <div className="bg-teal-950/30 p-3 rounded-lg border-l-2 border-teal-500">
                                                    <p className="text-teal-400 italic">"I'm aware it <strong className="text-white">will be</strong> challenging. I plan to <strong className="text-white">stay connected</strong> with my family through regular video calls, and I'm <strong className="text-white">looking forward to</strong> building a support network with other AU PAIRs and the local community."</p>
                                                </div>

                                                <p className="text-slate-300"><strong className="text-white">Officer:</strong> "Who is your sponsoring agency and what is your host family's address?"</p>
                                                <div className="bg-teal-950/30 p-3 rounded-lg border-l-2 border-teal-500">
                                                    <p className="text-teal-400 italic">"My sponsor is <strong className="text-white">InterExchange</strong>. My host family, the Johnsons, live at <strong className="text-white">142 Maple Street, Westport, Connecticut</strong>."</p>
                                                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">(Must know exact address, city, and state by heart)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<CheckCircle />}
                                        title="Phase 2: The 24-Hour Simulation"
                                        subtitle="Full-Day Roleplay Assessment"
                                        methodology="Immersive Evaluation"
                                        accentColor="teal"
                                    >
                                        <div className="bg-teal-900/10 p-5 rounded-xl border border-teal-500/30 mt-4">
                                            <p className="text-sm text-slate-300 leading-relaxed mb-4">
                                                A comprehensive roleplay simulating an entire day. The student must navigate every scenario using all tenses, all registers, and all vocabulary from Hours 1-4.
                                            </p>
                                            <div className="space-y-3 text-sm text-slate-400 font-mono">
                                                <div className="flex items-start gap-3 bg-slate-950/50 p-3 rounded">
                                                    <span className="text-teal-400 font-bold shrink-0">06:30</span>
                                                    <p>Wake the children, prepare breakfast, narrate the morning routine</p>
                                                </div>
                                                <div className="flex items-start gap-3 bg-slate-950/50 p-3 rounded">
                                                    <span className="text-teal-400 font-bold shrink-0">08:00</span>
                                                    <p>Drive to school — give/receive directions, handle a tantrum in the car</p>
                                                </div>
                                                <div className="flex items-start gap-3 bg-slate-950/50 p-3 rounded">
                                                    <span className="text-teal-400 font-bold shrink-0">10:00</span>
                                                    <p>Handle a phone call from the school nurse — report to parents</p>
                                                </div>
                                                <div className="flex items-start gap-3 bg-slate-950/50 p-3 rounded">
                                                    <span className="text-teal-400 font-bold shrink-0">12:00</span>
                                                    <p>Grocery store — the toddler has a meltdown, redirect behavior</p>
                                                </div>
                                                <div className="flex items-start gap-3 bg-slate-950/50 p-3 rounded">
                                                    <span className="text-teal-400 font-bold shrink-0">15:00</span>
                                                    <p>Pick up from school, snack time, homework help</p>
                                                </div>
                                                <div className="flex items-start gap-3 bg-slate-950/50 p-3 rounded">
                                                    <span className="text-teal-400 font-bold shrink-0">18:00</span>
                                                    <p>Report the entire day to the parents using reported speech</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CurriculumBlock>

                                    <CurriculumBlock 
                                        icon={<MapPin />}
                                        title="Phase 3: Cultural Readiness Debrief"
                                        subtitle="Final Reflections & Tips"
                                        methodology="Open Discussion"
                                        accentColor="teal"
                                    >
                                        <div className="bg-slate-950/50 p-6 rounded-xl border border-teal-500/30 mt-4">
                                            <h4 className="text-teal-400 font-bold mb-4 uppercase text-xs tracking-widest">Your First Week Survival Kit</h4>
                                            <ul className="space-y-3 text-sm text-slate-300">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-teal-400 shrink-0">01</span>
                                                    <p><strong className="text-white">Learn the house rules</strong> on Day 1 — ask the family to walk you through everything together.</p>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-teal-400 shrink-0">02</span>
                                                    <p><strong className="text-white">Save emergency contacts</strong> — pediatrician, poison control (1-800-222-1222), nearest hospital, and neighbors.</p>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-teal-400 shrink-0">03</span>
                                                    <p><strong className="text-white">Join an AU PAIR community</strong> — use the InterExchange app, Facebook groups, or local meetups to build your support network.</p>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-teal-400 shrink-0">04</span>
                                                    <p><strong className="text-white">Set a weekly check-in</strong> with your host parents — 15 minutes to discuss what's working and what needs adjustment.</p>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-teal-400 shrink-0">05</span>
                                                    <p><strong className="text-white">Enroll in a local community college course</strong> — your educational stipend covers one class per semester. Use it.</p>
                                                </li>
                                            </ul>

                                            <h4 className="text-rose-400 font-bold mb-3 mt-6 uppercase text-xs tracking-widest">Automatic Failure Criteria (Visa Interview)</h4>
                                            <ul className="space-y-2 text-sm text-slate-400 font-mono">
                                                <li className="flex items-start gap-2"><span className="text-rose-500">✗</span> Not knowing the host family's full address and state</li>
                                                <li className="flex items-start gap-2"><span className="text-rose-500">✗</span> Not knowing your sponsor agency name</li>
                                                <li className="flex items-start gap-2"><span className="text-rose-500">✗</span> Unable to describe childcare experience in detail</li>
                                                <li className="flex items-start gap-2"><span className="text-rose-500">✗</span> Mixing up "I have 22 years" instead of "I am 22 years old"</li>
                                                <li className="flex items-start gap-2"><span className="text-rose-500">✗</span> Breaking eye contact or displaying visible anxiety</li>
                                            </ul>
                                        </div>
                                    </CurriculumBlock>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* APPLIED DIALOGUES — THE FINAL IMMERSION */}
                    <section className="py-20 relative z-10 border-t border-slate-800/60">
                        <div className="mb-12">
                            <p className="text-[10px] text-rose-400 font-bold uppercase tracking-widest mb-2">Applied Conversations</p>
                            <h2 className="text-3xl font-bold text-white">The Final Immersion</h2>
                            <p className="text-slate-400 mt-2 max-w-2xl">High-stakes scenarios for domestic life. Master the nuance of family communication and professional boundary setting.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                            {/* Dialogue 1 - The First Evening */}
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                                <div className="bg-rose-900/20 border-b border-rose-500/20 px-5 py-3">
                                    <span className="text-[10px] text-rose-400 font-bold uppercase tracking-widest">Scenario 01 · The "First Evening" Check-in</span>
                                </div>
                                <div className="p-5 space-y-4 font-serif text-sm">
                                    <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Host Mom</p><p className="text-slate-200">"We are so happy you're here, Maria. Let's talk about the kids' bedtime routine starting tomorrow."</p></div>
                                    <div><p className="text-[10px] text-rose-300 uppercase font-bold mb-1">Maria ✓</p><p className="text-rose-200 italic">"I'm so excited too! I'd love to go over that. <strong className="text-white">Would</strong> you like me to start bath time at 7 PM or earlier?"</p></div>
                                    <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Host Mom</p><p className="text-slate-200">"7 PM is perfect. But please, no sugar after 6 PM."</p></div>
                                    <div><p className="text-[10px] text-rose-300 uppercase font-bold mb-1">Maria ✓</p><p className="text-rose-200 italic">"Got it. No sugar after 6. And <strong className="text-white">if</strong> they ask for a snack before bed, <strong className="text-white">should</strong> I offer fruit or just water?"</p></div>
                                </div>
                                <div className="bg-slate-950 border-t border-slate-800 px-5 py-3">
                                    <p className="text-[10px] text-rose-400 font-bold uppercase">Teaching Point</p>
                                    <p className="text-[10px] text-slate-500 mt-1">Establishing specifics immediately avoids future conflict. Use "Would you like me to..." for professional initiative.</p>
                                </div>
                            </div>

                            {/* Dialogue 2 - The 911 Emergency */}
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden border-rose-500/30 shadow-[0_0_20px_rgba(244,63,94,0.1)]">
                                <div className="bg-red-950/40 border-b border-red-500/20 px-5 py-3">
                                    <span className="text-[10px] text-red-400 font-bold uppercase tracking-widest">Scenario 02 · The 911 Emergency Protocol</span>
                                </div>
                                <div className="p-5 space-y-4 font-serif text-sm">
                                    <div><p className="text-[10px] text-slate-400 uppercase font-bold mb-1">911 Operator</p><p className="text-slate-200">"911, what is your emergency?"</p></div>
                                    <div><p className="text-[10px] text-red-400 uppercase font-bold mb-1"> Maria (Urgent) ✓</p><p className="text-red-200 italic">"I need an ambulance. A 4-year-old child has fallen and is <strong className="text-white">unconscious</strong>. He hit his head on the kitchen counter."</p></div>
                                    <div><p className="text-[10px] text-slate-400 uppercase font-bold mb-1">911 Operator</p><p className="text-slate-200">"What is the address?"</p></div>
                                    <div><p className="text-[10px] text-red-400 uppercase font-bold mb-1"> Maria ✓</p><p className="text-red-200 italic">"142 Maple Street, Westport. I am the AU PAIR. The bleeding is steady from the back of the head. <strong className="text-white">What should I do first?</strong>"</p></div>
                                </div>
                                <div className="bg-slate-950 border-t border-slate-800 px-5 py-3">
                                    <p className="text-[10px] text-red-400 font-bold uppercase">CRITICAL</p>
                                    <p className="text-[10px] text-slate-500 mt-1">Clarity and sequence. Identification as 'AU PAIR' helps the operator understand the resident dynamic immediately.</p>
                                </div>
                            </div>

                            {/* Dialogue 3 - School Teacher Interaction */}
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                                <div className="bg-emerald-900/20 border-b border-emerald-500/20 px-5 py-3">
                                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Scenario 03 · School Interaction (Teacher)</span>
                                </div>
                                <div className="p-5 space-y-4 font-serif text-sm">
                                    <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Preschool Teacher</p><p className="text-slate-200">"Hi Maria, just a heads up, Leo had a bit of a hard time sharing the blocks today."</p></div>
                                    <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Maria ✓</p><p className="text-emerald-200 italic">"Oh, thank you for telling me. <strong className="text-white">Did something specific happen</strong> that triggered it?"</p></div>
                                    <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Preschool Teacher</p><p className="text-slate-200">"Another student grabbed them first. He was quite frustrated."</p></div>
                                    <div><p className="text-[10px] text-emerald-300 uppercase font-bold mb-1">Maria ✓</p><p className="text-emerald-200 italic">"I'll make sure to <strong className="text-white">report this to the parents</strong> tonight so we can work on 'sharing words' at home too."</p></div>
                                </div>
                                <div className="bg-slate-950 border-t border-slate-800 px-5 py-3">
                                    <p className="text-[10px] text-emerald-400 font-bold uppercase">Teaching Point</p>
                                    <p className="text-[10px] text-slate-500 mt-1">"Report this to the parents" shows you are a reliable bridge, not just a driver.</p>
                                </div>
                            </div>

                            {/* Dialogue 4 - The Boundary Protocol */}
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                                <div className="bg-purple-900/20 border-b border-purple-500/20 px-5 py-3">
                                    <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest">Scenario 04 · Boundary Setting (Cleaning vs Childcare)</span>
                                </div>
                                <div className="p-5 space-y-4 font-serif text-sm">
                                    <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Host Dad</p><p className="text-slate-200">"Maria, since the kids are at school, could you mop the whole downstairs and clean the guest bathroom?"</p></div>
                                    <div><p className="text-[10px] text-purple-300 uppercase font-bold mb-1">Maria ✓</p><p className="text-purple-200 italic">"I <strong className="text-white">don't mind helping out</strong>, but our contract specifies that I handle childcare-related cleaning. Moping the dining room and guest bath <strong className="text-white">seems to be</strong> general house cleaning. <strong className="text-white">Would it be okay if</strong> I focus on the kids' laundry and preparing their snacks instead?"</p></div>
                                    <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Host Dad</p><p className="text-slate-200">"Oh, you're right. I apologize. Those snacks are definitely higher priority."</p></div>
                                </div>
                                <div className="bg-slate-950 border-t border-slate-800 px-5 py-3">
                                    <p className="text-[10px] text-purple-400 font-bold uppercase">Diplomatic Mastery</p>
                                    <p className="text-[10px] text-slate-500 mt-1">Using "Would it be okay if..." instead of "I won't do that" preserves the relationship while enforcing the boundary.</p>
                                </div>
                            </div>

                            {/* Dialogue 5 - The Ultimate Visa Simulation */}
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden lg:col-span-2 shadow-xl border-teal-500/20">
                                <div className="bg-teal-900/20 border-b border-teal-500/20 px-5 py-3 flex items-center justify-between">
                                    <span className="text-[10px] text-teal-400 font-bold uppercase tracking-widest">Scenario 05 · The Ultimate AU PAIR Visa Interview Simulation</span>
                                    <span className="bg-teal-500/10 text-teal-400 text-[10px] px-2 py-0.5 rounded font-bold">MODE: HIGH DIFFICULTY</span>
                                </div>
                                <div className="p-8 grid md:grid-cols-2 gap-12 font-serif text-sm">
                                    <div className="space-y-6">
                                        <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"Why are you going as an AU PAIR instead of just visiting on a tourist visa?"</p></div>
                                        <div><p className="text-[10px] text-teal-400 uppercase font-bold mb-1">Candidate ✓</p><p className="text-teal-200 italic">"Because the J-1 Au Pair program is a specific cultural exchange. I <strong className="text-white">am committed to</strong> sharing my Colombian culture with an American family while gaining professional childcare experience. A tourist visa <strong className="text-white">would not allow</strong> this level of immersion or legal participation in family life."</p></div>
                                        <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"How do I know you won't stay and become an illegal nanny?"</p></div>
                                        <div><p className="text-[10px] text-teal-400 uppercase font-bold mb-1">Candidate ✓</p><p className="text-teal-200 italic">"Officer, I have a <strong className="text-white">scholarship waiting</strong> for me in Bucaramanga to finish my Child Psychology degree. This program is a bridge to my career in Colombia. My entire family, my property, and my legal future depend on my return and maintaining a clean visa record. I have <strong className="text-white">every incentive to follow the rules</strong>."</p></div>
                                    </div>
                                    <div className="space-y-6">
                                        <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"The child has a severe allergic reaction and the parents aren't home. What's the protocol?"</p></div>
                                        <div><p className="text-[10px] text-teal-400 uppercase font-bold mb-1">Candidate ✓</p><p className="text-teal-200 italic">"First, I administer the EpiPen immediately if prescribed. Then, I <strong className="text-white">call 911 instantly</strong>. Only after help is on the way do I call the parents to report the situation. Life-safety is the 100% priority."</p></div>
                                        <div><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Officer</p><p className="text-slate-200">"What do your parents think of this?"</p></div>
                                        <div><p className="text-[10px] text-teal-400 uppercase font-bold mb-1">Candidate ✓</p><p className="text-teal-200 italic">"My parents are fully supportive. They are actually <strong className="text-white">financing the upfront costs</strong> of my flights and program fees because they see this as a vital professional investment for my future career."</p></div>
                                    </div>
                                </div>
                                <div className="bg-slate-950 border-t border-slate-800 px-5 py-3 flex items-center justify-between">
                                    <p className="text-[10px] text-emerald-400 font-bold uppercase">Result: VISA APPROVED ✓</p>
                                    <p className="text-[10px] text-slate-500">Perfect alignment of intent, experience, and safety knowledge.</p>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>
            </section>

            <CurriculumNavigation 
                prevHref="/english-class"
                prevLabel="Curriculum Home"
                nextHref="/english-class/intensive-5-hours"
                nextLabel="Work & Travel Course"
                accentColor="rose"
                moduleTitle="AU PAIR 5-Hour Course"
            />
        </div>
    );
}
