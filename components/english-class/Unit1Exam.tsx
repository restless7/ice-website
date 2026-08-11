"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase/client";
import {
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Send,
  User,
  Mail,
  Phone as PhoneIcon,
  BookOpen,
  Trophy,
  RefreshCw,
  Award,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

// --- EXAM DATA (UNIT 1: HOURS 1 - 10) --- //
const EXAM_QUESTIONS = [
  // Session 1: Alphabet, Numbers & Personal Details (Hours 1-2)
  {
    id: 1,
    topic: "Spelling & Personal Details",
    question: "How do you spell the last name 'SMITH' in English?",
    options: ["S - M - I - T - H", "S - N - I - T - H", "C - M - I - T - H", "S - M - E - T - H"],
    correctAnswer: "S - M - I - T - H",
  },
  {
    id: 2,
    topic: "Numbers & Phone Numbers",
    question: "Select the standard clear form for reciting phone digits ending in 8045:",
    options: ["Eight-zero-four-five", "Eight-oh-four-five", "Both A and B are acceptable", "Eighty-forty-five"],
    correctAnswer: "Both A and B are acceptable",
  },
  {
    id: 3,
    topic: "Greetings & Register",
    question: "Which greeting is most appropriate when entering a formal embassy interview at 9:00 AM?",
    options: ["Hey bro, what's up?", "Good morning, Officer.", "How's it going, man?", "See ya!"],
    correctAnswer: "Good morning, Officer.",
  },
  {
    id: 4,
    topic: "Personal Details",
    question: "When asked 'What is your nationality?', the correct response is:",
    options: ["I am Colombia.", "I am Colombian.", "I live in Colombia.", "My country is Colombia."],
    correctAnswer: "I am Colombian.",
  },
  // Session 2: Verb TO BE & Occupations (Hours 3-4)
  {
    id: 5,
    topic: "Verb TO BE (Affirmative)",
    question: "She ___ a university student at UNAB in Bucaramanga.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "is",
  },
  {
    id: 6,
    topic: "Verb TO BE (Negative)",
    question: "We ___ tourists; we are international exchange students.",
    options: ["isn't", "aren't", "am not", "not are"],
    correctAnswer: "aren't",
  },
  {
    id: 7,
    topic: "Verb TO BE (Questions)",
    question: "___ your sponsor currently living in the United States?",
    options: ["Is", "Are", "Do", "Does"],
    correctAnswer: "Is",
  },
  {
    id: 8,
    topic: "Occupations",
    question: "My brother works in a hospital. He is ___ physician.",
    options: ["a", "an", "the", "—"],
    correctAnswer: "a",
  },
  // Session 3: Possessives, Family & Descriptions (Hours 5-6)
  {
    id: 9,
    topic: "Possessive Adjectives",
    question: "I am traveling with my sister. ___ name is Valentina.",
    options: ["His", "Her", "Their", "Its"],
    correctAnswer: "Her",
  },
  {
    id: 10,
    topic: "Possessive Nouns",
    question: "This is my ___ house in Miami where I will stay during summer.",
    options: ["uncle", "uncles'", "uncle's", "uncles"],
    correctAnswer: "uncle's",
  },
  {
    id: 11,
    topic: "Family & Relationships",
    question: "My mother's brother is my ___.",
    options: ["nephew", "uncle", "cousin", "grandfather"],
    correctAnswer: "uncle",
  },
  {
    id: 12,
    topic: "Physical Description",
    question: "My sponsor has short brown hair and ___ brown eyes.",
    options: ["is", "has", "are", "have"],
    correctAnswer: "has",
  },
  // Session 4: Demonstratives & Present Simple Basics (Hours 7-8)
  {
    id: 13,
    topic: "Demonstratives",
    question: "Please hand me ___ documents on the desk over there.",
    options: ["this", "that", "these", "those"],
    correctAnswer: "those",
  },
  {
    id: 14,
    topic: "Present Simple (Habits)",
    question: "I ___ in Bogota with my parents and two brothers.",
    options: ["lives", "live", "am living", "living"],
    correctAnswer: "live",
  },
  {
    id: 15,
    topic: "Present Simple (Preference)",
    question: "He ___ American culture and wants to practice his conversational English.",
    options: ["like", "likes", "is liking", "liking"],
    correctAnswer: "likes",
  },
  {
    id: 16,
    topic: "Classroom / Document Vocabulary",
    question: "Do you have your valid DS-2019 ___ with you?",
    options: ["form", "passport", "ticket", "declaration"],
    correctAnswer: "form",
  },
  // Session 5: Prepositions of Place & Time (Hours 9-10)
  {
    id: 17,
    topic: "Prepositions of Place",
    question: "I am staying ___ 1500 Ocean Drive in Miami Beach.",
    options: ["in", "on", "at", "to"],
    correctAnswer: "at",
  },
  {
    id: 18,
    topic: "Prepositions of Time (Dates)",
    question: "My flight back to Colombia leaves ___ September 15th.",
    options: ["in", "on", "at", "by"],
    correctAnswer: "on",
  },
  {
    id: 19,
    topic: "Prepositions of Time (Clock)",
    question: "The border control interview begins ___ 8:30 AM.",
    options: ["at", "on", "in", "from"],
    correctAnswer: "at",
  },
  {
    id: 20,
    topic: "CBP Border Simulation Capstone",
    question: "Officer: 'When do you return to Colombia?' — Select the grammatically correct answer:",
    options: [
      "I return on October 1st because my university classes start.",
      "I returning in October 1st.",
      "I return at October 1st.",
      "I will to return in October 1st."
    ],
    correctAnswer: "I return on October 1st because my university classes start.",
  },
];

type ExamState = "intro" | "exam" | "processing" | "results";

export function Unit1Exam() {
  const [examState, setExamState] = useState<ExamState>("intro");
  
  // Registration data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  
  // Exam data
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStartExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    setErrorMessage("");
    setExamState("exam");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOptionSelect = (questionId: number, option: string) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const checkCompletion = () => {
    return Object.keys(answers).length === EXAM_QUESTIONS.length;
  };

  const handleSubmitExam = async () => {
    if (!checkCompletion()) {
      setErrorMessage("Please answer all questions before submitting.");
      return;
    }

    setExamState("processing");

    // Calculate score
    let calculatedScore = 0;
    EXAM_QUESTIONS.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        calculatedScore++;
      }
    });

    setScore(calculatedScore);

    try {
      // Record to supabase
      const { error } = await supabase
        .from('english_course_exams')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            unit: 1,
            score: calculatedScore,
            total_questions: EXAM_QUESTIONS.length,
            answers: answers,
            submitted_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error("Supabase error (non-blocking if table is missing):", error);
      }
      
      setTimeout(() => {
        setExamState("results");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 1500);

    } catch (err) {
      console.error("Submission failed", err);
      setExamState("results"); 
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        
        {/* --- STATE 1: INTRO / REGISTRATION --- */}
        {examState === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-slate-900 border border-blue-500/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400">Official Certification</span>
                <h2 className="text-2xl font-bold text-white">Unit 1 Practice Exam (Hours 1 - 10)</h2>
              </div>
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-8">
              This exam evaluates your mastery of <strong className="text-white">Foundational English (Hours 1 to 10)</strong>, covering greetings, numbers, verb TO BE, possessives, family vocabulary, present simple habits, prepositions of time &amp; place, and the border simulation.
            </p>

            {errorMessage && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleStartExam} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <User className="w-3.5 h-3.5" /> First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="e.g. Maria"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <User className="w-3.5 h-3.5" /> Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rodriguez"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" /> Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="maria@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <PhoneIcon className="w-3.5 h-3.5" /> Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+57 300 123 4567"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-lg py-4 px-10 rounded-2xl transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2"
                >
                  Start Exam <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* --- STATE 2: ACTIVE EXAM --- */}
        {examState === "exam" && (
          <motion.div
            key="exam"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            {/* Header progress bar */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-4 z-40 shadow-xl backdrop-blur-md bg-slate-900/90">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Candidate</p>
                <p className="text-base font-bold text-white">{formData.firstName} {formData.lastName}</p>
              </div>

              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="flex-1 md:w-48 bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full transition-all duration-300"
                    style={{ width: `${(Object.keys(answers).length / EXAM_QUESTIONS.length) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-mono text-blue-400 font-bold whitespace-nowrap">
                  {Object.keys(answers).length} / {EXAM_QUESTIONS.length}
                </span>
              </div>
            </div>

            {errorMessage && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                {errorMessage}
              </div>
            )}

            {/* Questions list */}
            <div className="space-y-6">
              {EXAM_QUESTIONS.map((q, idx) => (
                <div
                  key={q.id}
                  className={`bg-slate-900 border rounded-2xl p-6 md:p-8 transition-all ${
                    answers[q.id] ? "border-blue-500/40 bg-slate-900/90" : "border-slate-800"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg">
                      Question {idx + 1} &bull; {q.topic}
                    </span>
                    {answers[q.id] && (
                      <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                        <CheckCircle className="w-3.5 h-3.5" /> Answered
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-white mb-6 leading-relaxed">
                    {q.question}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {q.options.map((opt) => {
                      const isSelected = answers[q.id] === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleOptionSelect(q.id, opt)}
                          className={`w-full text-left p-4 rounded-xl border font-medium text-sm transition-all flex items-center justify-between ${
                            isSelected
                              ? "bg-blue-600 text-white border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                              : "bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50"
                          }`}
                        >
                          <span>{opt}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? "border-white bg-white/20" : "border-slate-700"
                          }`}>
                            {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit button */}
            <div className="pt-6 pb-12 flex justify-center">
              <button
                type="button"
                onClick={handleSubmitExam}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-lg py-5 px-12 rounded-2xl transition-all shadow-[0_0_40px_rgba(59,130,246,0.4)] flex items-center gap-3 uppercase tracking-wider"
              >
                <Send className="w-5 h-5" /> Submit Exam
              </button>
            </div>
          </motion.div>
        )}

        {/* --- STATE 3: PROCESSING --- */}
        {examState === "processing" && (
          <motion.div
            key="processing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-16 text-center space-y-6"
          >
            <div className="inline-block p-4 bg-blue-500/10 rounded-full text-blue-400 animate-spin">
              <RefreshCw className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Grading your exam...</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Please wait while your answers are processed and recorded.
            </p>
          </motion.div>
        )}

        {/* --- STATE 4: RESULTS --- */}
        {examState === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center space-y-8 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />

            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 text-blue-400 border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
              <Trophy className="w-12 h-12" />
            </div>

            <div>
              <h2 className="text-3xl font-black text-white tracking-tight">Exam Completed!</h2>
              <p className="text-slate-400 text-sm mt-1">
                Candidate: <strong className="text-white">{formData.firstName} {formData.lastName}</strong> ({formData.email})
              </p>
            </div>

            {/* Score display */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 max-w-md mx-auto">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold block mb-2">Final Score</span>
              <div className="text-6xl font-black text-white">
                {score} <span className="text-2xl text-slate-500 font-normal">/ {EXAM_QUESTIONS.length}</span>
              </div>
              <div className="mt-4">
                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                  score >= 14
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                }`}>
                  {score >= 14 ? "PASSED — Unit 1 Mastered" : "NEEDS REVIEW — Recommended to re-study"}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
              {score >= 14
                ? "Congratulations! You have demonstrated strong command over Unit 1 fundamentals. You are ready to advance to Unit 2."
                : "Good attempt! Review Hours 1 to 10, specifically prepositions and TO BE structures, and retake the exam when ready."}
            </p>

            <div className="pt-4 flex flex-col md:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => {
                  setAnswers({});
                  setExamState("exam");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" /> Retake Exam
              </button>

              <Link
                href="/english-class/hours-11-12"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2"
              >
                Begin Unit 2 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
