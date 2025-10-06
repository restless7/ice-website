'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  CogIcon, 
  RocketLaunchIcon,
  ServerIcon,
  LockClosedIcon,
  EyeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      number: '01',
      title: 'Baseline Security Setup',
      subtitle: 'Foundation First',
      description: 'Deploy enterprise-grade firewalls, implement IAM systems, establish automated backups, and enable end-to-end encryption across all ICE infrastructure.',
      features: [
        'Firewall configuration & monitoring',
        'Identity & Access Management (IAM)',
        'Automated backup systems',
        'Data encryption protocols'
      ],
      icon: ShieldCheckIcon,
      color: {
        primary: 'from-cyan-500 to-blue-600',
        secondary: 'from-cyan-500/20 to-blue-600/20',
        accent: 'text-cyan-400'
      },
      timeline: '2-3 weeks'
    },
    {
      number: '02',
      title: 'Integrated Controls',
      subtitle: 'DevSecOps Implementation',
      description: 'Embed security into the development lifecycle with automated CI/CD security scans, continuous monitoring, and intelligent threat detection systems.',
      features: [
        'DevSecOps pipeline integration',
        'Continuous security monitoring',
        'Automated vulnerability scanning',
        'Incident response protocols'
      ],
      icon: CogIcon,
      color: {
        primary: 'from-green-500 to-emerald-600',
        secondary: 'from-green-500/20 to-emerald-600/20',
        accent: 'text-green-400'
      },
      timeline: '3-4 weeks'
    },
    {
      number: '03',
      title: 'Growth Enablement',
      subtitle: 'Scale Securely',
      description: 'Build scalable, compliance-ready infrastructure that grows with your business while maintaining security standards and regulatory requirements.',
      features: [
        'Auto-scaling secure architecture',
        'Compliance framework implementation',
        'Performance optimization',
        'Security team training & handoff'
      ],
      icon: RocketLaunchIcon,
      color: {
        primary: 'from-purple-500 to-indigo-600',
        secondary: 'from-purple-500/20 to-indigo-600/20',
        accent: 'text-purple-400'
      },
      timeline: '2-3 weeks'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.05)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
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
            <span className="text-white">How It </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-500 to-purple-500">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A systematic approach to building enterprise-grade cybersecurity from the ground up
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Connection Line (except for last step) */}
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 top-full w-px h-24 bg-gradient-to-b from-cyan-400/50 to-transparent z-10"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: '6rem' } : {}}
                  transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                />
              )}

              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Content Column */}
                <motion.div
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
                >
                  {/* Step Number */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color.primary}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.number}
                    </motion.div>
                    <div>
                      <div className={`text-sm font-semibold ${step.color.accent} mb-1`}>
                        {step.timeline}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.3 + 0.4 + featureIndex * 0.1 }}
                      >
                        <motion.div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color.primary}`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: featureIndex * 0.2
                          }}
                        />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Visual Column */}
                <motion.div
                  className={`relative flex justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.4 }}
                >
                  {/* Main Visual Container */}
                  <div className="relative">
                    {/* Background Glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${step.color.secondary} rounded-3xl blur-2xl`}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />

                    {/* Card Container */}
                    <motion.div
                      className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50"
                      whileHover={{ 
                        scale: 1.02,
                        borderColor: 'rgba(6, 182, 212, 0.3)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Icon */}
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color.primary} flex items-center justify-center`}
                        animate={{
                          rotateY: [0, 10, -10, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.7
                        }}
                      >
                        {React.createElement(step.icon, { className: "w-8 h-8 text-white" })}
                      </motion.div>

                      {/* Step Visualization */}
                      <div className="space-y-4">
                        {/* Progress Indicators */}
                        <div className="flex justify-between items-center">
                          {[...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.color.primary}`}
                              animate={{
                                scale: [0.8, 1.2, 0.8],
                                opacity: [0.4, 1, 0.4]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3 + index * 0.5
                              }}
                            />
                          ))}
                        </div>

                        {/* Process Bar */}
                        <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${step.color.primary} rounded-full`}
                            initial={{ width: '0%' }}
                            animate={isInView ? { width: '100%' } : {}}
                            transition={{
                              duration: 2,
                              delay: index * 0.3 + 1,
                              ease: 'easeInOut'
                            }}
                          />
                        </div>

                        {/* Status Indicator */}
                        <div className="text-center">
                          <motion.div
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${step.color.secondary} border border-slate-600/50`}
                            animate={{
                              borderColor: [
                                'rgba(71, 85, 105, 0.5)',
                                'rgba(6, 182, 212, 0.5)',
                                'rgba(71, 85, 105, 0.5)'
                              ]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.8
                            }}
                          >
                            <motion.div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color.primary}`}
                              animate={{
                                scale: [1, 1.5, 1]
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: index * 0.3
                              }}
                            />
                            <span className={`text-sm font-medium ${step.color.accent}`}>
                              Implementation Phase
                            </span>
                          </motion.div>
                        </div>
                      </div>

                      {/* Glowing Border */}
                      <motion.div
                        className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${step.color.primary} opacity-0`}
                        style={{
                          backgroundClip: 'padding-box',
                          WebkitBackgroundClip: 'padding-box'
                        }}
                        whileHover={{ opacity: 0.2 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    {/* Floating Elements */}
                    <motion.div
                      className={`absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r ${step.color.primary} flex items-center justify-center text-white text-xs font-bold`}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {index + 1}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 border border-cyan-400/30 rounded-full backdrop-blur-sm">
            <motion.div 
              className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-cyan-400 font-medium">Ready to implement enterprise-grade security?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
