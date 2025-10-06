'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { ArrowRightIcon, ShieldCheckIcon, ServerIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function CybersecurityHero() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    { text: 'Compliance Ready', color: 'from-blue-400 to-cyan-500', icon: ShieldCheckIcon },
    { text: 'Secure Foundation', color: 'from-green-400 to-emerald-500', icon: LockClosedIcon },
    { text: 'Scalable Growth', color: 'from-purple-400 to-indigo-500', icon: ServerIcon },
    { text: 'Enterprise Grade', color: 'from-cyan-400 to-blue-500', icon: ShieldCheckIcon }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrimaryAction = () => {
    scrollToSection('roadmap-section');
  };

  const handleSecondaryAction = () => {
    scrollToSection('business-value-section');
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden py-16 lg:py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Cybersecurity grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Dynamic security network nodes */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/60 rounded-full"
              style={{
                top: `${20 + (i * 15) % 60}%`,
                left: `${15 + (i * 12) % 70}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
          
          {/* Connecting lines between nodes */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
              style={{
                top: `${30 + i * 15}%`,
                left: `${10 + i * 20}%`,
                width: `${200 + i * 50}px`,
                transform: `rotate(${i * 30}deg)`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 1.5,
              }}
            />
          ))}
        </div>

        {/* Floating shield elements */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              top: `${10 + i * 20}%`,
              left: `${5 + i * 18}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut",
            }}
          >
            <ShieldCheckIcon className="w-16 h-16 text-cyan-400" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Badge 
                variant="outline" 
                className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 px-4 py-2 text-sm font-semibold tracking-wider bg-cyan-400/5"
              >
                ICE × APEX CYBERSECURITY
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">Secure Foundations for</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400">
                Scalable Growth
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building ICE + Apex solutions with enterprise-grade security, compliance, and resilience — from day one.
            </motion.p>

            {/* Dynamic Feature Highlight */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 min-h-[2rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                key={currentFeature}
                className={`flex items-center gap-3 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${features[currentFeature].color}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                {React.createElement(features[currentFeature].icon, { className: "w-6 h-6 text-cyan-400" })}
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
                {features[currentFeature].text}
              </motion.div>
            </motion.div>
            
            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl shadow-2xl shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 border-0 group"
                onClick={handlePrimaryAction}
              >
                See the Security Roadmap
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 bg-cyan-400/5 backdrop-blur-sm group"
                onClick={handleSecondaryAction}
              >
                <ShieldCheckIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Why This Matters for Growth
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Security Architecture Mockup */}
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Main Security Dashboard Container */}
            <div className="relative">
              {/* 3D Security Dashboard */}
              <motion.div 
                className="relative bg-gradient-to-br from-slate-900/90 to-black/90 rounded-3xl p-6 shadow-2xl border border-cyan-400/20 backdrop-blur-xl"
                style={{
                  transform: "perspective(1000px) rotateX(10deg) rotateY(-10deg)",
                }}
                animate={{
                  rotateY: [-10, -5, -10],
                  rotateX: [10, 15, 10],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Security Dashboard Interface */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 w-80 h-96 border border-cyan-400/10 overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                        <ShieldCheckIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">Apex Security Center</div>
                        <div className="text-green-400 text-xs flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          All Systems Secure
                        </div>
                      </div>
                    </div>
                    <div className="text-cyan-400 text-xs">ICE Protected</div>
                  </div>
                  
                  {/* Security Metrics */}
                  <div className="space-y-4 mb-4">
                    {/* Firewall Status */}
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <ShieldCheckIcon className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-gray-300 text-sm">Firewall</span>
                      </div>
                      <span className="text-green-400 text-sm font-semibold">Active</span>
                    </div>
                    
                    {/* Encryption Status */}
                    <motion.div 
                      className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl"
                      animate={{ 
                        backgroundColor: ['rgba(30, 41, 59, 0.5)', 'rgba(6, 182, 212, 0.1)', 'rgba(30, 41, 59, 0.5)']
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                          <LockClosedIcon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="text-gray-300 text-sm">Data Encryption</span>
                      </div>
                      <span className="text-cyan-400 text-sm font-semibold">256-bit AES</span>
                    </motion.div>
                    
                    {/* Server Status */}
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <ServerIcon className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-gray-300 text-sm">ICE Servers</span>
                      </div>
                      <span className="text-blue-400 text-sm font-semibold">99.9% Uptime</span>
                    </div>

                    {/* Threat Detection */}
                    <motion.div 
                      className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl"
                      animate={{ 
                        borderColor: ['rgba(34, 197, 94, 0.3)', 'rgba(34, 197, 94, 0.6)', 'rgba(34, 197, 94, 0.3)']
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm font-semibold">Threat Detection</span>
                      </div>
                      <p className="text-green-300 text-xs">0 threats detected in last 24h</p>
                    </motion.div>
                  </div>
                </div>
                
                {/* Glowing border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border border-cyan-400/30 pointer-events-none"
                  animate={{
                    borderColor: ["rgba(6, 182, 212, 0.3)", "rgba(59, 130, 246, 0.5)", "rgba(6, 182, 212, 0.3)"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
              
              {/* Floating Security Stats */}
              <motion.div 
                className="absolute -top-8 -right-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm border border-white/20"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [-2, 2, -2],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                100% Compliance Ready
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-8 -left-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm border border-white/20"
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [2, -2, 2],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                Zero Breach Record
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('problems-section')}
      >
        <div className="w-6 h-10 border-2 border-cyan-400/60 rounded-full flex justify-center hover:border-cyan-500 transition-colors">
          <motion.div 
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
