'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ExclamationTriangleIcon, 
  ShieldExclamationIcon, 
  ChartBarSquareIcon,
  LockClosedIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

export default function CybersecurityProblems() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const problems = [
    {
      title: 'Compliance Risk',
      description: 'Without proper security controls, ERP/CRM/student data handling can trigger legal exposure under GDPR, FERPA, and local Colombian data protection laws.',
      icon: '⚖️',
      detail: 'Data breaches can result in fines up to 4% of annual revenue',
      bgColor: 'from-red-500/20 to-orange-500/20',
      borderColor: 'border-red-400/50',
      accentColor: 'text-red-400'
    },
    {
      title: 'Trust Risk',
      description: 'Clients and partners expect secure handling of sensitive data. Weak security infrastructure equals lost deals, damaged reputation, and reduced market confidence.',
      icon: '🤝',
      detail: '78% of clients abandon vendors after security incidents',
      bgColor: 'from-yellow-500/20 to-amber-500/20',
      borderColor: 'border-yellow-400/50',
      accentColor: 'text-yellow-400'
    },
    {
      title: 'Scalability Risk',
      description: 'Unsecured systems don\'t scale effectively. Security holes cause downtime, system vulnerabilities block growth, and reactive security is exponentially more costly.',
      icon: '📈',
      detail: 'Security incidents cost 10x more to fix than prevent',
      bgColor: 'from-purple-500/20 to-indigo-500/20',
      borderColor: 'border-purple-400/50',
      accentColor: 'text-purple-400'
    }
  ];

  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % problems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [problems.length]);

  return (
    <section id="problems-section" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(239,68,68,0.1)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(168,85,247,0.1)_0%,_transparent_50%)]" />
        
        {/* Warning pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(239,68,68,0.02)_25%,transparent_25%),linear-gradient(-45deg,rgba(239,68,68,0.02)_25%,transparent_25%)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">ICE's Current </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
              Cybersecurity Gap
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every day without proper security controls puts growth, compliance, and client trust at risk
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const isActive = activeCard === index;
            return (
              <motion.div
                key={index}
                className="relative h-full cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => setActiveCard(index)}
              >
                {/* Glassmorphism Container */}
                <motion.div
                  className={`relative h-full min-h-[380px] rounded-2xl backdrop-blur-lg border transition-all duration-700 overflow-hidden ${
                    isActive 
                      ? `bg-gradient-to-br ${problem.bgColor} ${problem.borderColor} shadow-2xl scale-105` 
                      : 'bg-slate-800/20 border-slate-700/50 shadow-xl hover:bg-slate-800/30 hover:border-slate-600/50'
                  }`}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    rotateY: isActive ? [0, 2, -2, 0] : 0,
                  }}
                  transition={{ 
                    scale: { duration: 0.5 },
                    rotateY: { duration: 3, repeat: isActive ? Infinity : 0 }
                  }}
                >
                  {/* Warning Glow Background */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0"
                    animate={{
                      opacity: isActive ? [0, 0.2, 0] : 0,
                      background: isActive 
                        ? [
                            'radial-gradient(circle at 20% 20%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 20%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)'
                          ]
                        : 'transparent'
                    }}
                    transition={{ duration: 4, repeat: isActive ? Infinity : 0 }}
                  />
                  
                  {/* Content Container */}
                  <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center">
                    
                    {/* Icon */}
                    <motion.div 
                      className="text-6xl mb-6"
                      animate={{
                        scale: isActive ? [1, 1.15, 1] : 1,
                        rotate: isActive ? [0, -5, 5, 0] : 0,
                        filter: isActive ? [
                          'drop-shadow(0 0 20px rgba(239, 68, 68, 0.5))',
                          'drop-shadow(0 0 30px rgba(245, 158, 11, 0.5))',
                          'drop-shadow(0 0 20px rgba(239, 68, 68, 0.5))'
                        ] : 'none'
                      }}
                      transition={{ duration: 2.5, repeat: isActive ? Infinity : 0 }}
                    >
                      {problem.icon}
                    </motion.div>
                    
                    {/* Title */}
                    <motion.h3 
                      className={`text-2xl font-bold mb-4 transition-all duration-500 ${
                        isActive 
                          ? `text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400` 
                          : 'text-gray-200'
                      }`}
                      animate={{
                        textShadow: isActive 
                          ? [
                              '0 0 20px rgba(239, 68, 68, 0.3)',
                              '0 0 30px rgba(245, 158, 11, 0.3)',
                              '0 0 20px rgba(239, 68, 68, 0.3)'
                            ]
                          : '0 0 0px rgba(0, 0, 0, 0)'
                      }}
                      transition={{ duration: 2.5, repeat: isActive ? Infinity : 0 }}
                    >
                      {problem.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="leading-relaxed text-base text-gray-300 mb-6 font-medium"
                    >
                      {problem.description}
                    </motion.p>

                    {/* Impact Detail */}
                    <motion.div 
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-500 ${
                        isActive 
                          ? `${problem.accentColor} bg-red-500/10 border border-red-400/30` 
                          : 'text-gray-400 bg-gray-700/30 border border-gray-600/30'
                      }`}
                      animate={{
                        scale: isActive ? [1, 1.05, 1] : 1,
                      }}
                      transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                    >
                      ⚠️ {problem.detail}
                    </motion.div>
                  </div>

                  {/* Active Card Pulse Effect */}
                  {isActive && (
                    <motion.div
                      className={`absolute inset-0 rounded-2xl border-2 ${problem.borderColor} pointer-events-none`}
                      animate={{
                        borderColor: [
                          'rgba(239, 68, 68, 0.6)',
                          'rgba(245, 158, 11, 0.8)',
                          'rgba(239, 68, 68, 0.6)'
                        ],
                        boxShadow: [
                          '0 0 20px rgba(239, 68, 68, 0.3)',
                          '0 0 40px rgba(245, 158, 11, 0.4)',
                          '0 0 20px rgba(239, 68, 68, 0.3)'
                        ]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  )}

                  {/* Gradient Overlay for better text contrast */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent rounded-2xl pointer-events-none" />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Card Rotation Indicators */}
        <motion.div
          className="flex justify-center items-center gap-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {problems.map((_, index) => (
            <motion.button
              key={index}
              className={`relative w-3 h-3 rounded-full transition-all duration-500 cursor-pointer ${
                activeCard === index 
                  ? 'bg-gradient-to-r from-red-500 to-orange-600 scale-125' 
                  : 'bg-gray-600 hover:bg-red-400'
              }`}
              onClick={() => setActiveCard(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Active indicator glow */}
              {activeCard === index && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-orange-600"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
          
          {/* Progress Text */}
          <span className="ml-4 text-sm text-gray-400 font-medium">
            Risk {activeCard + 1} of {problems.length}
          </span>
        </motion.div>

        {/* Bottom CTA hint */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-400/30 rounded-full backdrop-blur-sm">
            <motion.div 
              className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-cyan-400 font-medium">These risks are preventable with the right foundation...</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative warning elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full opacity-30 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 25, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-red-500/20 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -35, 0],
          y: [0, 25, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
}
