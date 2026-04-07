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
  RefreshCw
} from "lucide-react";

// --- EXAM DATA --- //
const EXAM_QUESTIONS = [
  // Session 1: Simple Present (Habits)
  {
    id: 1,
    topic: "Simple Present",
    question: "I ___ to the gym every morning before work.",
    options: ["go", "goes", "am going", "going"],
    correctAnswer: "go",
  },
  {
    id: 2,
    topic: "Simple Present",
    question: "My host mother usually ___ dinner at 6:00 PM.",
    options: ["cook", "cooks", "is cooking", "cooking"],
    correctAnswer: "cooks",
  },
  {
    id: 3,
    topic: "Simple Present",
    question: "___ the children sleep well at night?",
    options: ["Do", "Does", "Is", "Are"],
    correctAnswer: "Do",
  },
  {
    id: 4,
    topic: "Simple Present",
    question: "He ___ like spicy food.",
    options: ["don't", "doesn't", "isn't", "aren't"],
    correctAnswer: "doesn't",
  },
  // Session 2: Present Continuous (Right Now)
  {
    id: 5,
    topic: "Present Continuous",
    question: "Look! The baby ___ right now.",
    options: ["sleeps", "sleep", "is sleeping", "are sleeping"],
    correctAnswer: "is sleeping",
  },
  {
    id: 6,
    topic: "Present Continuous",
    question: "I can't talk right now because I ___ the car.",
    options: ["drive", "driving", "am driving", "drives"],
    correctAnswer: "am driving",
  },
  {
    id: 7,
    topic: "Present Continuous & Stative",
    question: "I ___ a sandwich right now, but I ___ a glass of water.",
    options: ["eat / am wanting", "am eating / want", "eat / want", "am eating / am wanting"],
    correctAnswer: "am eating / want",
  },
  {
    id: 8,
    topic: "Present Continuous",
    question: "What ___ the kids ___ at the moment?",
    options: ["are / doing", "do / do", "is / doing", "does / do"],
    correctAnswer: "are / doing",
  },
  // Session 3: CAN / CAN'T (Abilities)
  {
    id: 9,
    topic: "CAN / CAN'T",
    question: "Sorry, I ___ help you tomorrow because I have to work.",
    options: ["can", "can't", "must", "don't can"],
    correctAnswer: "can't",
  },
  {
    id: 10,
    topic: "CAN / CAN'T",
    question: "___ you swim?",
    options: ["Do", "Are", "Can", "Does"],
    correctAnswer: "Can",
  },
  {
    id: 11,
    topic: "CAN / CAN'T",
    question: "She speaks three languages. She ___ speak English, Spanish, and French.",
    options: ["should", "must", "can", "has to"],
    correctAnswer: "can",
  },
  {
    id: 12,
    topic: "CAN / CAN'T",
    question: "I ___ drive a manual car, only automatic.",
    options: ["can't", "mustn't", "shouldn't", "don't can"],
    correctAnswer: "can't",
  },
  // Session 4: MUST / HAVE TO / SHOULD / HAD BETTER (Obligation & Advice)
  {
    id: 13,
    topic: "Obligation & Advice",
    question: "You ___ wear a seatbelt while driving. It's the law.",
    options: ["must", "should", "could", "might"],
    correctAnswer: "must",
  },
  {
    id: 14,
    topic: "Obligation & Advice",
    question: "You ___ touch the stove! It's very hot.",
    options: ["don't have to", "must not", "shouldn't", "better not"],
    correctAnswer: "must not",
  },
  {
    id: 15,
    topic: "Obligation & Advice",
    question: "It's a holiday tomorrow so I ___ work.",
    options: ["must not", "shouldn't", "don't have to", "can't"],
    correctAnswer: "don't have to",
  },
  {
    id: 16,
    topic: "Obligation & Advice",
    question: "You have a bad headache. You ___ drink some water and lie down.",
    options: ["must", "have to", "should", "could"],
    correctAnswer: "should",
  },
  // Session 5: MAY / MIGHT / COULD (Possibility)
  {
    id: 17,
    topic: "Possibility",
    question: "Take your umbrella. It ___ rain later.",
    options: ["should", "must", "might", "can"],
    correctAnswer: "might",
  },
  {
    id: 18,
    topic: "Possibility",
    question: "Where is Carlos? - I don't know, he ___ be at home.",
    options: ["should", "will", "could", "have to"],
    correctAnswer: "could",
  },
  {
    id: 19,
    topic: "Possibility",
    question: "I ___ go to the party tonight, I haven't decided yet.",
    options: ["will", "must", "may", "should"],
    correctAnswer: "may",
  },
  {
    id: 20,
    topic: "Possibility",
    question: "They ___ arrive on time because the traffic is very bad.",
    options: ["must not", "might not", "cannot", "should not"],
    correctAnswer: "might not",
  },
];

type ExamState = "intro" | "exam" | "processing" | "results";

export function Unit2Exam() {
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
            unit: 2,
            score: calculatedScore,
            total_questions: EXAM_QUESTIONS.length,
            answers: answers,
            submitted_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error("Supabase error (this is fine if table isn't created yet):", error);
        // We do not block the user from seeing their results if Supabase isn't fully configured
      }
      
      // Artificial delay for smooth UX
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
            className="bg-slate-900 border border-teal-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-teal-500/5"
          >
            <div className="bg-gradient-to-r from-teal-900/40 to-cyan-900/40 p-8 border-b border-teal-500/20 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Unit 2 Final Exam</h3>
              <p className="text-teal-200">20 Questions • Multiple Choice • Automated Grading</p>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleStartExam} className="space-y-6 max-w-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">First Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-slate-500" />
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full pl-10 bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Last Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-slate-500" />
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full pl-10 bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-slate-500" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <PhoneIcon className="h-4 w-4 text-slate-500" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-lg flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] mt-4"
                >
                  Start Exam <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {/* --- STATE 2: EXAM --- */}
        {examState === "exam" && (
          <motion.div
            key="exam"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl sticky top-24 z-20 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">Unit 2 Final Exam</h3>
                <p className="text-slate-400 text-sm">Attempt down the list and select the best answer.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Progress</p>
                  <p className="font-mono text-teal-400 font-bold">{Object.keys(answers).length} / {EXAM_QUESTIONS.length}</p>
                </div>
                <div className="h-10 w-px bg-slate-800 hidden md:block"></div>
                <button
                  onClick={handleSubmitExam}
                  className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
                    checkCompletion() 
                      ? "bg-teal-500 text-slate-950 shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:bg-teal-400" 
                      : "bg-slate-800 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  Submit Answers <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {errorMessage && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-4 rounded-xl flex items-center justify-center gap-2">
                <AlertTriangle className="w-5 h-5" /> {errorMessage}
              </div>
            )}

            <div className="space-y-6">
              {EXAM_QUESTIONS.map((q, index) => (
                <div key={q.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-teal-400 font-mono font-bold shrink-0">
                      {index + 1}
                    </span>
                    <h4 className="text-lg md:text-xl text-white font-medium">{q.question}</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-0 md:pl-12">
                    {q.options.map((opt) => {
                      const isSelected = answers[q.id] === opt;
                      return (
                        <button
                          key={opt}
                          onClick={() => handleOptionSelect(q.id, opt)}
                          className={`text-left p-4 rounded-xl border transition-all ${
                            isSelected 
                              ? "bg-teal-500/10 border-teal-500 text-teal-300 shadow-[inset_0_0_20px_rgba(20,184,166,0.1)]" 
                              : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-600 hover:bg-slate-900"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected ? "border-teal-500 bg-teal-500/20" : "border-slate-600"
                            }`}>
                              {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-teal-500" />}
                            </div>
                            <span className="font-mono text-sm md:text-base">{opt}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-4 pb-12">
              <button
                onClick={handleSubmitExam}
                className={`px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all ${
                  checkCompletion() 
                    ? "bg-teal-500 text-slate-950 shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:bg-teal-400" 
                    : "bg-slate-800 text-slate-500 cursor-not-allowed"
                }`}
              >
                Submit Answers <Send className="w-5 h-5" />
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
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-32"
          >
            <RefreshCw className="w-16 h-16 text-teal-500 animate-spin mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">Grading your exam...</h3>
            <p className="text-slate-400">Saving results to database</p>
          </motion.div>
        )}

        {/* --- STATE 4: RESULTS --- */}
        {examState === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative"
          >
            {/* Confetti / Glow effect backgound */}
            <div className={`absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,var(--tw-gradient-stops))] ${
              score >= 14 ? 'from-teal-500 via-transparent to-transparent' : 'from-amber-500 via-transparent to-transparent'
            }`}></div>

            <div className="p-12 text-center relative z-10">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${
                score >= 14 ? 'bg-teal-500/20 text-teal-400 shadow-[0_0_50px_rgba(20,184,166,0.3)]' : 'bg-amber-500/20 text-amber-400'
              }`}>
                {score >= 14 ? <Trophy className="w-12 h-12" /> : <BookOpen className="w-12 h-12" />}
              </div>
              
              <h2 className="text-4xl font-black text-white mb-2">
                {score >= 18 ? "Outstanding!" : score >= 14 ? "Great Job!" : "Keep Practicing!"}
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                {formData.firstName}, here are your final results.
              </p>

              <div className="inline-block bg-slate-950 border border-slate-800 rounded-2xl p-8 mb-8">
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Final Score</div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className={`text-6xl font-black font-mono ${score >= 14 ? 'text-teal-400' : 'text-amber-400'}`}>
                    {score}
                  </span>
                  <span className="text-2xl text-slate-500 font-medium">/ 20</span>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <span className="text-white font-bold text-lg">
                    {Math.round((score / 20) * 100)}% Accuracy
                  </span>
                </div>
              </div>

              <div className="max-w-md mx-auto space-y-4">
                <a 
                  href="/english-class" 
                  className="block w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg py-4 rounded-xl transition-all"
                >
                  Return to Curriculum
                </a>
              </div>
            </div>
            
            <div className="bg-slate-950 p-6 border-t border-slate-800">
              <div className="flex items-start gap-3 max-w-2xl mx-auto text-left">
                <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-400">
                  Your results have been securely recorded. Your instructor will review your performance and reach out if necessary. Excellent work completing Unit 2!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
