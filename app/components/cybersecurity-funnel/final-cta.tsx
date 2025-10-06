'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { 
  ArrowRightIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handlePrimaryAction = () => {
    // In a real implementation, this would trigger the roadmap review process
    window.open('mailto:contact@apex.ai?subject=ICE Cybersecurity Roadmap Review&body=I would like to schedule a security roadmap review for ICE Colombia.', '_blank');
  };

  const handleSecondaryAction = () => {
    // In a real implementation, this would show technical architecture details
    window.open('mailto:sebastian@apex.ai?subject=Technical Architecture Details&body=Please provide detailed technical architecture documentation for the ICE cybersecurity implementation.', '_blank');
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-black via-slate-950 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,_rgba(34,197,94,0.1)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,_rgba(168,85,247,0.1)_0%,_transparent_50%)]" />
        
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Animated security nodes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Container */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-400/30 rounded-full mb-8"
              animate={{
                borderColor: [
                  'rgba(6, 182, 212, 0.3)',
                  'rgba(34, 197, 94, 0.5)',
                  'rgba(6, 182, 212, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <SparklesIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 font-medium text-sm tracking-wider">THE SECURE FUTURE STARTS NOW</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Let's Lead the Market — </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-500 to-blue-500">
                Securely
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Transform ICE into Colombia's most trusted secure technology partner with enterprise-grade cybersecurity from day one.
            </p>
          </motion.div>

          {/* Value Proposition Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              {
                icon: ShieldCheckIcon,
                title: '16-Week Implementation',
                description: 'Complete security transformation',
                color: 'from-cyan-500 to-blue-600'
              },
              {
                icon: UserGroupIcon,
                title: 'Sebastian as Security Lead',
                description: 'Experienced Apex leadership',
                color: 'from-green-500 to-emerald-600'
              },
              {
                icon: RocketLaunchIcon,
                title: 'Growth-Ready Foundation',
                description: 'Scale without security debt',
                color: 'from-purple-500 to-indigo-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(6, 182, 212, 0.3)',
                  y: -5
                }}
              >
                <motion.div
                  className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
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
                  {React.createElement(item.icon, { className: "w-6 h-6 text-white" })}
                </motion.div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main CTA Buttons */}
          <motion.div
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-green-600 hover:from-cyan-600 hover:to-green-700 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl shadow-cyan-500/25 transition-all duration-300 border-0 group"
                onClick={handlePrimaryAction}
              >
                <DocumentTextIcon className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                Review the Security Roadmap
                <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-600/50 text-gray-300 hover:bg-slate-800/50 hover:border-cyan-400/50 hover:text-cyan-400 px-10 py-5 text-lg rounded-2xl transition-all duration-300 bg-slate-900/30 backdrop-blur-sm group"
                onClick={handleSecondaryAction}
              >
                <BuildingOfficeIcon className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                See Detailed Technical Architecture
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              { value: '100%', label: 'Compliance Ready' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '16', label: 'Week Timeline' },
              { value: '24/7', label: 'Security Monitoring' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gradient-to-br from-slate-900/30 to-black/30 backdrop-blur-sm rounded-xl border border-slate-700/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.3)' }}
              >
                <motion.div
                  className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500 mb-1"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Security Badge */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-900/80 to-black/80 border border-cyan-400/30 rounded-full backdrop-blur-sm"
              animate={{
                borderColor: [
                  'rgba(6, 182, 212, 0.3)',
                  'rgba(34, 197, 94, 0.5)',
                  'rgba(6, 182, 212, 0.3)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <ShieldCheckIcon className="w-6 h-6 text-cyan-400" />
              </motion.div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">Apex AI Solutions</div>
                <div className="text-cyan-400 text-xs">Enterprise Cybersecurity Leadership</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-cyan-400/10 to-green-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-blue-500/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
}
