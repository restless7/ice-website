import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Swords, 
  AlertTriangle, 
  CheckCircle,
  Play,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Settings2,
  Check
} from 'lucide-react';
import { getRandomQuestions, Question } from '../../lib/english-class/gauntletQuestions';

type ExamMode = 'setup' | 'active' | 'results';

interface Scores {
  fluency: number;
  tense: number;
  vocabulary: number;
  poise: number;
}

export function GauntletExamModule() {
  const [examMode, setExamMode] = useState<ExamMode>('setup');
  const [studentName, setStudentName] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Scores>({
    fluency: 0,
    tense: 0,
    vocabulary: 0,
    poise: 0
  });

  const startExam = () => {
    if (!studentName.trim()) return;
    setQuestions(getRandomQuestions(10));
    setCurrentIndex(0);
    setScores({ fluency: 0, tense: 0, vocabulary: 0, poise: 0 });
    setExamMode('active');
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const finishExam = () => {
    setExamMode('results');
  };

  const updateScore = (category: keyof Scores, value: number) => {
    setScores(prev => ({ ...prev, [category]: value }));
  };

  const totalScore = scores.fluency + scores.tense + scores.vocabulary + scores.poise;
  const isPass = totalScore >= 12;

  return (
    <div className="bg-slate-900 border border-rose-500/30 rounded-2xl overflow-hidden shadow-2xl relative my-12">
      {/* Decorative header */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-orange-500 to-rose-500"></div>
      
      <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-rose-500/10 rounded-lg">
            <Swords className="w-6 h-6 text-rose-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">The Gauntlet Module</h3>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-mono">Live Assessment Terminal</p>
          </div>
        </div>
        
        {examMode !== 'setup' && (
          <div className="text-right">
            <p className="text-xs text-slate-400">Candidate</p>
            <p className="text-sm font-bold text-white">{studentName}</p>
          </div>
        )}
      </div>

      <div className="p-6 lg:p-8">
        <AnimatePresence mode="wait">
          
          {/* SETUP MODE */}
          {examMode === 'setup' && (
            <motion.div 
              key="setup"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-md mx-auto text-center"
            >
              <div className="w-20 h-20 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings2 className="w-10 h-10 text-rose-500" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Initialize Exam</h4>
              <p className="text-slate-400 mb-8 max-w-sm mx-auto text-sm">
                Enter the candidate's name to generate a randomized 10-question high-pressure Gauntlet exam.
              </p>
              
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Student Name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500/50 transition-colors"
                  onKeyDown={(e) => e.key === 'Enter' && startExam()}
                />
                <button 
                  onClick={startExam}
                  disabled={!studentName.trim()}
                  className="w-full bg-rose-600 hover:bg-rose-500 disabled:opacity-50 disabled:hover:bg-rose-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Play className="w-4 h-4" /> Start Assessment
                </button>
              </div>
            </motion.div>
          )}

          {/* ACTIVE MODE */}
          {examMode === 'active' && questions.length > 0 && (
            <motion.div 
              key="active"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Question View (Left - 2cols) */}
              <div className="lg:col-span-2 space-y-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-rose-400 font-mono text-sm tracking-widest uppercase">
                    Question {currentIndex + 1} of 10
                  </span>
                  <span className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border ${
                    questions[currentIndex].category === 'Hostile' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                    questions[currentIndex].category === 'Immigrant Intent' ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' :
                    questions[currentIndex].category === 'Vocational' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                    'bg-blue-500/10 border-blue-500/20 text-blue-400'
                  }`}>
                    {questions[currentIndex].category}
                  </span>
                </div>
                
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 flex-grow flex flex-col justify-center min-h-[250px] relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-rose-500/50"></div>
                  <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                    "{questions[currentIndex].text}"
                  </h2>
                  
                  {questions[currentIndex].failureTriggers && (
                    <div className="mt-8 bg-red-950/30 border border-red-500/20 rounded-lg p-4">
                      <p className="text-xs text-red-400 font-bold uppercase flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-3 h-3" /> Specific Failure Triggers
                      </p>
                      <ul className="list-disc list-inside text-sm text-red-200/70">
                        {questions[currentIndex].failureTriggers.map((trigger, idx) => (
                          <li key={idx}>{trigger}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between gap-4 mt-auto pt-4">
                  <button 
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Previous
                  </button>
                  
                  {currentIndex < questions.length - 1 ? (
                    <button 
                      onClick={handleNext}
                      className="flex-1 bg-rose-600/20 hover:bg-rose-600/30 text-rose-100 border border-rose-500/50 font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button 
                      onClick={finishExam}
                      className="flex-1 bg-gradient-to-r from-rose-600 to-orange-500 hover:opacity-90 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-orange-500/20"
                    >
                      Finish Exam <Check className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Grading Sidebar (Right - 1col) */}
              <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-500" /> Grading Rubric
                </h4>

                <div className="space-y-6">
                  {/* Category 1 */}
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <p className="text-sm font-medium text-slate-300">Fluency & Hesitation</p>
                      <span className="text-rose-400 font-mono text-xs">{scores.fluency}/4</span>
                    </div>
                    <div className="flex gap-2">
                      {[1,2,3,4].map(num => (
                        <button key={`fluency-${num}`} onClick={() => updateScore('fluency', num)} className={`flex-1 py-1 px-2 text-sm rounded ${scores.fluency === num ? 'bg-rose-600 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>{num}</button>
                      ))}
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <p className="text-sm font-medium text-slate-300">Tense Accuracy</p>
                      <span className="text-rose-400 font-mono text-xs">{scores.tense}/4</span>
                    </div>
                    <div className="flex gap-2">
                      {[1,2,3,4].map(num => (
                        <button key={`tense-${num}`} onClick={() => updateScore('tense', num)} className={`flex-1 py-1 px-2 text-sm rounded ${scores.tense === num ? 'bg-rose-600 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>{num}</button>
                      ))}
                    </div>
                  </div>

                  {/* Category 3 */}
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <p className="text-sm font-medium text-slate-300">Vocabulary & Details</p>
                      <span className="text-rose-400 font-mono text-xs">{scores.vocabulary}/4</span>
                    </div>
                    <div className="flex gap-2">
                      {[1,2,3,4].map(num => (
                        <button key={`vocab-${num}`} onClick={() => updateScore('vocabulary', num)} className={`flex-1 py-1 px-2 text-sm rounded ${scores.vocabulary === num ? 'bg-rose-600 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>{num}</button>
                      ))}
                    </div>
                  </div>

                  {/* Category 4 */}
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <p className="text-sm font-medium text-slate-300">Poise & Confidence</p>
                      <span className="text-rose-400 font-mono text-xs">{scores.poise}/4</span>
                    </div>
                    <div className="flex gap-2">
                      {[1,2,3,4].map(num => (
                        <button key={`poise-${num}`} onClick={() => updateScore('poise', num)} className={`flex-1 py-1 px-2 text-sm rounded ${scores.poise === num ? 'bg-rose-600 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>{num}</button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <div className="flex items-end justify-between font-mono">
                    <span className="text-slate-400 text-xs tracking-widest uppercase">Current Total</span>
                    <span className={`text-2xl font-bold ${totalScore >= 12 ? 'text-emerald-400' : 'text-slate-300'}`}>{totalScore}/16</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${totalScore >= 12 ? 'bg-emerald-500' : 'bg-rose-500'}`} 
                      style={{ width: `${(totalScore / 16) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* RESULTS MODE */}
          {examMode === 'results' && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto"
            >
              <div className={`p-8 rounded-2xl border text-center ${isPass ? 'bg-emerald-950/30 border-emerald-500/30' : 'bg-red-950/30 border-red-500/30'}`}>
                <div className="flex justify-center mb-6">
                  {isPass ? (
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-emerald-400" />
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-10 h-10 text-red-400" />
                    </div>
                  )}
                </div>
                
                <h4 className="text-3xl font-bold text-white mb-2">
                  {isPass ? 'Embassy Ready' : 'Gauntlet Failed'}
                </h4>
                <p className={`text-lg mb-8 ${isPass ? 'text-emerald-300/80' : 'text-red-300/80'}`}>
                  {studentName} scored {totalScore}/16 points
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <p className="text-xs text-slate-500 uppercase">Fluency</p>
                    <p className="text-xl font-bold text-white">{scores.fluency}</p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <p className="text-xs text-slate-500 uppercase">Tense</p>
                    <p className="text-xl font-bold text-white">{scores.tense}</p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <p className="text-xs text-slate-500 uppercase">Vocab</p>
                    <p className="text-xl font-bold text-white">{scores.vocabulary}</p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <p className="text-xs text-slate-500 uppercase">Poise</p>
                    <p className="text-xl font-bold text-white">{scores.poise}</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button 
                    onClick={() => {
                      setStudentName('');
                      setExamMode('setup');
                    }}
                    className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-8 rounded-xl flex items-center gap-2 transition-colors border border-slate-700"
                  >
                    <RotateCcw className="w-4 h-4" /> Start New Assessment
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
