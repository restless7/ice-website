'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ServerIcon,
  ShieldCheckIcon,
  EyeIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function CybersecurityRoadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      number: '01',
      title: 'Secure Infrastructure Buildout',
      subtitle: 'ICE Server Hardening',
      timeline: 'Weeks 1-4',
      description: 'Deploy and configure enterprise-grade security infrastructure at ICE facilities, including network segmentation, firewall deployment, and server hardening.',
      deliverables: [
        'Network security architecture implementation',
        'Firewall and IPS deployment at ICE locations',
        'Server hardening and security baseline establishment',
        'Initial backup and disaster recovery setup'
      ],
      status: 'Foundation',
      icon: ServerIcon,
      color: {
        primary: 'from-cyan-500 to-blue-600',
        secondary: 'from-cyan-500/20 to-blue-600/20',
        accent: 'text-cyan-400'
      }
    },
    {
      number: '02',
      title: 'Secure-by-Design Implementation',
      subtitle: 'CRM/ERP/Portal Integration',
      timeline: 'Weeks 5-10',
      description: 'Implement security controls directly into CRM, ERP, Student Portal, and Omni-channel systems with encrypted data flows and secure authentication.',
      deliverables: [
        'Secure CRM/ERP database encryption',
        'Multi-factor authentication implementation',
        'API security and rate limiting',
        'Secure student portal with RBAC'
      ],
      status: 'Integration',
      icon: ShieldCheckIcon,
      color: {
        primary: 'from-green-500 to-emerald-600',
        secondary: 'from-green-500/20 to-emerald-600/20',
        accent: 'text-green-400'
      }
    },
    {
      number: '03',
      title: 'Continuous Monitoring & Management',
      subtitle: 'Security Operations',
      timeline: 'Weeks 11-14',
      description: 'Deploy 24/7 security monitoring, automated threat detection, vulnerability management, and incident response capabilities.',
      deliverables: [
        'Security Information and Event Management (SIEM)',
        'Automated vulnerability scanning',
        'Incident response procedures',
        'Security awareness training program'
      ],
      status: 'Operations',
      icon: EyeIcon,
      color: {
        primary: 'from-purple-500 to-indigo-600',
        secondary: 'from-purple-500/20 to-indigo-600/20',
        accent: 'text-purple-400'
      }
    },
    {
      number: '04',
      title: 'Apex Cybersecurity Department',
      subtitle: 'Sebastian as Security Lead',
      timeline: 'Weeks 15-16',
      description: 'Establish dedicated cybersecurity department with Sebastian Garcia as Head of Cybersecurity, creating sustainable security leadership and governance.',
      deliverables: [
        'Cybersecurity governance framework',
        'Security team structure and roles',
        'Ongoing security roadmap and budget',
        'Sebastian\'s transition to cybersecurity leadership'
      ],
      status: 'Leadership',
      icon: UserGroupIcon,
      color: {
        primary: 'from-orange-500 to-red-600',
        secondary: 'from-orange-500/20 to-red-600/20',
        accent: 'text-orange-400'
      }
    }
  ];

  return (
    <section id="roadmap-section" ref={ref} className="py-20 bg-gradient-to-br from-black via-slate-950 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,_rgba(6,182,212,0.1)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,_rgba(168,85,247,0.1)_0%,_transparent_50%)]" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Timeline connection lines */}
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Security Implementation </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-500 to-purple-500">
              Roadmap
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A 16-week strategic plan to transform ICE into a security-first organization with Apex leadership
          </p>
        </motion.div>

        {/* Interactive Timeline Navigation */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex gap-4 p-2 bg-slate-900/50 rounded-2xl backdrop-blur-sm border border-slate-700/50">
            {phases.map((phase, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activePhase === index
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-slate-800/50'
                }`}
                onClick={() => setActivePhase(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Phase {phase.number}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Timeline Phases */}
        <div className="space-y-24">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className={`relative transition-all duration-500 ${
                activePhase === index ? 'scale-105' : 'scale-100 opacity-80'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={() => setActivePhase(index)}
            >
              {/* Timeline Node */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ top: '50%' }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${phase.color.primary} flex items-center justify-center cursor-pointer`}
                  animate={activePhase === index ? {
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(6, 182, 212, 0)',
                      '0 0 0 15px rgba(6, 182, 212, 0.1)',
                      '0 0 0 0 rgba(6, 182, 212, 0)'
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  whileHover={{ scale: 1.05 }}
                >
                  {React.createElement(phase.icon, { className: "w-8 h-8 text-white" })}
                </motion.div>
                
                {/* Phase Number Badge */}
                <motion.div
                  className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r ${phase.color.primary} text-white text-xs font-bold flex items-center justify-center`}
                  animate={activePhase === index ? { rotate: [0, 360] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>

              {/* Content Cards */}
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Content Side */}
                <motion.div
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                >
                  {/* Timeline & Status */}
                  <div className="flex items-center gap-4">
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${phase.color.secondary} border border-${phase.color.accent.split('-')[1]}-500/30`}>
                      <span className={`text-sm font-semibold ${phase.color.accent}`}>
                        {phase.timeline}
                      </span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-600/30">
                      <span className="text-sm text-gray-400">
                        {phase.status}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {phase.title}
                    </h3>
                    <p className={`text-lg font-medium ${phase.color.accent}`}>
                      {phase.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {phase.description}
                  </p>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-400" />
                      Key Deliverables
                    </h4>
                    <div className="space-y-3">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <motion.div
                          key={deliverableIndex}
                          className="flex items-start gap-3 group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.2 + 0.5 + deliverableIndex * 0.1 
                          }}
                        >
                          <motion.div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.color.primary} mt-2 flex-shrink-0`}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: deliverableIndex * 0.3
                            }}
                          />
                          <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
                            {deliverable}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Visual Side */}
                <motion.div
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                >
                  {/* Card Container */}
                  <motion.div
                    className={`relative bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 ${
                      activePhase === index ? 'border-cyan-400/30' : ''
                    }`}
                    whileHover={{ 
                      scale: 1.02,
                      borderColor: 'rgba(6, 182, 212, 0.4)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${phase.color.secondary} rounded-3xl blur-xl opacity-50`}
                      animate={activePhase === index ? {
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.6, 0.3]
                      } : {}}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    <div className="relative z-10">
                      {/* Phase Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${phase.color.primary}`}>
                          {phase.number}
                        </div>
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-r ${phase.color.primary}`}
                          animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                        >
                          {React.createElement(phase.icon, { className: "w-6 h-6 text-white" })}
                        </motion.div>
                      </div>

                      {/* Progress Visualization */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <ClockIcon className="w-4 h-4" />
                          <span>Duration: {phase.timeline}</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full h-3 bg-slate-700/50 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${phase.color.primary} rounded-full`}
                            initial={{ width: '0%' }}
                            animate={isInView ? { width: '100%' } : {}}
                            transition={{
                              duration: 2,
                              delay: index * 0.2 + 1,
                              ease: 'easeInOut'
                            }}
                          />
                        </div>

                        {/* Status Indicator */}
                        <motion.div
                          className={`flex items-center justify-center py-3 px-4 rounded-xl bg-gradient-to-r ${phase.color.secondary} border border-slate-600/30`}
                          animate={activePhase === index ? {
                            borderColor: [
                              'rgba(71, 85, 105, 0.3)',
                              'rgba(6, 182, 212, 0.5)',
                              'rgba(71, 85, 105, 0.3)'
                            ]
                          } : {}}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <span className={`font-semibold ${phase.color.accent}`}>
                            {phase.status} Phase
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Sebastian Leadership Highlight for Phase 4 */}
                  {index === 3 && (
                    <motion.div
                      className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [-2, 2, -2]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      🎯 Sebastian as Security Lead
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-900/80 to-black/80 border border-cyan-400/30 rounded-2xl backdrop-blur-sm">
            <BuildingOfficeIcon className="w-6 h-6 text-cyan-400" />
            <div className="text-left">
              <div className="text-white font-semibold">16-Week Timeline</div>
              <div className="text-cyan-400 text-sm">From Security Foundation to Leadership Excellence</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
