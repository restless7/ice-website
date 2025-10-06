'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { 
  CheckCircleIcon, 
  ArrowRightIcon, 
  ShieldCheckIcon,
  ServerIcon,
  LockClosedIcon,
  EyeIcon,
  CloudIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';

export default function CybersecuritySolution() {
  const [animatedStats, setAnimatedStats] = useState(false);

  const benefits = [
    'Secure cloud + on-premise server infrastructure at ICE',
    'Encrypted data storage & compliant access control (RBAC, IAM)', 
    'Continuous monitoring + backups to reduce downtime',
    'Secure-by-design CMR, ERP, Portal & Omni-channel integrations',
    'Regulatory compliance (GDPR, FERPA, local laws)',
    'Scalable architecture ready for enterprise growth'
  ];

  const stats = {
    compliance: '100%',
    complianceLabel: 'Compliance Ready',
    security: '99.9%',
    securityLabel: 'Uptime Guarantee',
    cost: '70%',
    costLabel: 'Cost Reduction vs Reactive'
  };

  const scrollToRoadmap = () => {
    const element = document.getElementById('roadmap-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(6,182,212,0.1)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(34,197,94,0.1)_0%,_transparent_50%)]" />
        
        {/* Security grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Floating secure elements */}
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-green-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-white">Cybersecurity as a </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-500 to-blue-500">
                  Growth Multiplier
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Transform security from a cost center into your competitive advantage
              </motion.p>
            </div>

            {/* Benefits List */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-green-500 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircleIcon className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-green-600 hover:from-cyan-600 hover:to-green-700 text-white px-8 py-4 rounded-xl shadow-2xl shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 border-0 group"
                onClick={scrollToRoadmap}
              >
                Build on Secure Foundations
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Security Architecture & Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onViewportEnter={() => setAnimatedStats(true)}
          >
            {/* Security Architecture Diagram */}
            <div className="relative bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-xl rounded-3xl overflow-hidden p-8 border border-cyan-400/20 shadow-2xl">
              
              {/* Dynamic background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-green-500/5 transition-all duration-1000" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

              {/* Glowing orb */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-cyan-400/30 to-green-500/30 rounded-full blur-3xl opacity-30 transition-all duration-1000" />

              <div className="relative z-10">
                {/* Architecture Title */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-green-500 flex items-center justify-center">
                    <ShieldCheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Secure Architecture</h3>
                    <p className="text-cyan-400 font-medium text-sm">Enterprise-Grade Protection</p>
                  </div>
                </div>

                {/* Architecture Components */}
                <div className="space-y-4 mb-8">
                  {/* Cloud Infrastructure */}
                  <motion.div
                    className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-cyan-400/10"
                    animate={animatedStats ? { 
                      backgroundColor: ['rgba(30, 41, 59, 0.3)', 'rgba(6, 182, 212, 0.1)', 'rgba(30, 41, 59, 0.3)']
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <CloudIcon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <span className="text-gray-200 font-medium">Cloud Security</span>
                        <div className="text-cyan-400 text-sm">Multi-layer protection</div>
                      </div>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">✓ Active</span>
                  </motion.div>

                  {/* Server Security */}
                  <motion.div
                    className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-green-400/10"
                    animate={animatedStats ? { 
                      backgroundColor: ['rgba(30, 41, 59, 0.3)', 'rgba(34, 197, 94, 0.1)', 'rgba(30, 41, 59, 0.3)']
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <ServerIcon className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <span className="text-gray-200 font-medium">ICE Servers</span>
                        <div className="text-green-400 text-sm">Hardened & monitored</div>
                      </div>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">✓ Secured</span>
                  </motion.div>

                  {/* Data Encryption */}
                  <motion.div
                    className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-blue-400/10"
                    animate={animatedStats ? { 
                      backgroundColor: ['rgba(30, 41, 59, 0.3)', 'rgba(59, 130, 246, 0.1)', 'rgba(30, 41, 59, 0.3)']
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <LockClosedIcon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <span className="text-gray-200 font-medium">Data Encryption</span>
                        <div className="text-blue-400 text-sm">End-to-end protection</div>
                      </div>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">✓ 256-bit AES</span>
                  </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Compliance Stat */}
                  <motion.div
                    className="text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={animatedStats ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.div
                      className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500 mb-1"
                      animate={animatedStats ? { 
                        scale: [1, 1.05, 1] 
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      {stats.compliance}
                    </motion.div>
                    <p className="text-gray-400 text-xs font-medium">{stats.complianceLabel}</p>
                  </motion.div>

                  {/* Security Stat */}
                  <motion.div
                    className="text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={animatedStats ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <motion.div
                      className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-1"
                      animate={animatedStats ? { 
                        scale: [1, 1.05, 1] 
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    >
                      {stats.security}
                    </motion.div>
                    <p className="text-gray-400 text-xs font-medium">{stats.securityLabel}</p>
                  </motion.div>

                  {/* Cost Stat */}
                  <motion.div
                    className="text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={animatedStats ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.div
                      className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-1"
                      animate={animatedStats ? { 
                        scale: [1, 1.05, 1] 
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                    >
                      {stats.cost}
                    </motion.div>
                    <p className="text-gray-400 text-xs font-medium">{stats.costLabel}</p>
                  </motion.div>
                </div>
              </div>

              {/* Glowing border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border border-cyan-400/30 pointer-events-none"
                animate={{
                  borderColor: ['rgba(6, 182, 212, 0.3)', 'rgba(34, 197, 94, 0.5)', 'rgba(6, 182, 212, 0.3)']
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              animate={{
                y: [0, -10, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              🛡️ Proactive Security
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              animate={{
                y: [0, 10, 0],
                rotate: [2, -2, 2]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
            >
              🚀 Growth Ready
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
