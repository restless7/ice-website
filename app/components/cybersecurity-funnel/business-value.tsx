'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ShieldCheckIcon,
  DocumentCheckIcon,
  TrophyIcon,
  ChartBarIcon,
  BanknotesIcon,
  ExclamationTriangleIcon,
  UsersIcon,
  RocketLaunchIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

export default function BusinessValue() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeValue, setActiveValue] = useState(0);

  const businessValues = [
    {
      title: 'Risk Reduction',
      subtitle: 'Avoid Costly Security Incidents',
      description: 'Proactive cybersecurity prevents data breaches, regulatory fines, and business interruptions that can cost millions and damage reputation permanently.',
      metrics: [
        { label: 'Average Breach Cost', value: '$4.45M', trend: 'prevented' },
        { label: 'Regulatory Fines', value: 'Up to 4%', subtext: 'of annual revenue' },
        { label: 'Downtime Cost', value: '$300K/hr', trend: 'avoided' }
      ],
      icon: ShieldCheckIcon,
      color: {
        primary: 'from-red-500 to-orange-600',
        secondary: 'from-red-500/20 to-orange-600/20',
        accent: 'text-red-400'
      }
    },
    {
      title: 'Compliance Readiness',
      subtitle: 'Meet Client & Government Requirements',
      description: 'Stay ahead of GDPR, FERPA, and local Colombian data protection laws. Position ICE as the secure choice for enterprise clients and government contracts.',
      metrics: [
        { label: 'Compliance Standards', value: '100%', subtext: 'ready on day one' },
        { label: 'Audit Preparation', value: '2 weeks', trend: 'vs 6 months' },
        { label: 'Enterprise Contracts', value: '+40%', trend: 'opportunity increase' }
      ],
      icon: DocumentCheckIcon,
      color: {
        primary: 'from-blue-500 to-cyan-600',
        secondary: 'from-blue-500/20 to-cyan-600/20',
        accent: 'text-blue-400'
      }
    },
    {
      title: 'Client Trust & Reputation',
      subtitle: 'The Secure Choice in Colombia',
      description: 'Become the market leader that enterprise clients trust with their most sensitive data. Security-first positioning opens doors to premium contracts.',
      metrics: [
        { label: 'Client Retention', value: '+35%', trend: 'improvement' },
        { label: 'Premium Pricing', value: '+25%', subtext: 'for secure services' },
        { label: 'Market Position', value: '#1', subtext: 'secure provider' }
      ],
      icon: TrophyIcon,
      color: {
        primary: 'from-green-500 to-emerald-600',
        secondary: 'from-green-500/20 to-emerald-600/20',
        accent: 'text-green-400'
      }
    },
    {
      title: 'Scalable Growth',
      subtitle: 'Foundation That Supports Expansion',
      description: 'Security infrastructure that scales with business growth, supports international expansion, and attracts investment by demonstrating operational maturity.',
      metrics: [
        { label: 'Growth Capacity', value: '10x', subtext: 'without security rebuild' },
        { label: 'International Ready', value: 'Day 1', trend: 'expansion capable' },
        { label: 'Investment Appeal', value: '+60%', subtext: 'due diligence pass rate' }
      ],
      icon: RocketLaunchIcon,
      color: {
        primary: 'from-purple-500 to-indigo-600',
        secondary: 'from-purple-500/20 to-indigo-600/20',
        accent: 'text-purple-400'
      }
    }
  ];

  return (
    <section id="business-value-section" ref={ref} className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(34,197,94,0.1)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(59,130,246,0.1)_0%,_transparent_50%)]" />
        
        {/* Business grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
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
            <span className="text-white">Security is Not a Cost — </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
              It's a Competitive Advantage
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform cybersecurity from an expense into your most powerful business differentiator
          </p>
        </motion.div>

        {/* Interactive Value Selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {businessValues.map((value, index) => (
            <motion.button
              key={index}
              className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 border backdrop-blur-sm ${
                activeValue === index
                  ? `bg-gradient-to-r ${value.color.primary} text-white border-transparent`
                  : 'text-gray-300 border-slate-600/50 bg-slate-800/30 hover:bg-slate-700/50 hover:border-slate-500/50'
              }`}
              onClick={() => setActiveValue(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {React.createElement(value.icon, { className: "w-4 h-4 inline mr-2" })}
              {value.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Value Display */}
        <motion.div
          key={activeValue}
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Content Side */}
          <div className="space-y-8">
            {/* Value Header */}
            <div>
              <motion.div
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.div
                  className={`p-3 rounded-2xl bg-gradient-to-r ${businessValues[activeValue].color.primary}`}
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {React.createElement(businessValues[activeValue].icon, { className: "w-8 h-8 text-white" })}
                </motion.div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {businessValues[activeValue].title}
                  </h3>
                  <p className={`text-lg font-medium ${businessValues[activeValue].color.accent}`}>
                    {businessValues[activeValue].subtitle}
                  </p>
                </div>
              </motion.div>

              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {businessValues[activeValue].description}
              </motion.p>
            </div>

            {/* Metrics Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {businessValues[activeValue].metrics.map((metric, metricIndex) => (
                <motion.div
                  key={metricIndex}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${businessValues[activeValue].color.secondary} border border-slate-700/50 backdrop-blur-sm`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + metricIndex * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: 'rgba(6, 182, 212, 0.3)'
                  }}
                >
                  <motion.div
                    className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${businessValues[activeValue].color.primary} mb-2`}
                    animate={{
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: metricIndex * 0.5
                    }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-white font-semibold text-sm mb-1">
                    {metric.label}
                  </div>
                  {metric.subtext && (
                    <div className={`text-xs ${businessValues[activeValue].color.accent}`}>
                      {metric.subtext}
                    </div>
                  )}
                  {metric.trend && (
                    <div className="flex items-center gap-1 mt-2">
                      <ArrowTrendingUpIcon className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-green-400">{metric.trend}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Visualization Container */}
            <motion.div
              className="relative bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50"
              animate={{
                borderColor: [
                  'rgba(71, 85, 105, 0.5)',
                  'rgba(6, 182, 212, 0.3)',
                  'rgba(71, 85, 105, 0.5)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Background Glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${businessValues[activeValue].color.secondary} rounded-3xl blur-xl opacity-50`}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative z-10">
                {/* Executive Dashboard Mockup */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-semibold">Executive Dashboard</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-sm">Live</span>
                    </div>
                  </div>
                  
                  {/* Chart Visualization */}
                  <div className="space-y-4">
                    {/* ROI Chart */}
                    <div className="p-4 bg-slate-800/30 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-300 text-sm">Security ROI</span>
                        <span className={`text-sm font-semibold ${businessValues[activeValue].color.accent}`}>
                          +340%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${businessValues[activeValue].color.primary} rounded-full`}
                          initial={{ width: '0%' }}
                          animate={{ width: '85%' }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Risk Reduction */}
                    <div className="p-4 bg-slate-800/30 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-300 text-sm">Risk Reduction</span>
                        <span className="text-sm font-semibold text-green-400">-92%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '92%' }}
                          transition={{ duration: 2, delay: 0.7 }}
                        />
                      </div>
                    </div>

                    {/* Compliance Score */}
                    <div className="p-4 bg-slate-800/30 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-300 text-sm">Compliance Score</span>
                        <span className="text-sm font-semibold text-blue-400">100%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 2, delay: 0.9 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Impact Summary */}
                <motion.div
                  className={`p-4 rounded-xl bg-gradient-to-r ${businessValues[activeValue].color.secondary} border border-slate-600/30`}
                  animate={{
                    borderColor: [
                      'rgba(71, 85, 105, 0.3)',
                      'rgba(6, 182, 212, 0.5)',
                      'rgba(71, 85, 105, 0.3)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-center">
                    <motion.div
                      className={`text-2xl font-bold ${businessValues[activeValue].color.accent} mb-1`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Market Leader Position
                    </motion.div>
                    <div className="text-gray-300 text-sm">
                      Colombia's Most Trusted Secure Provider
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Business Benefits */}
            <motion.div
              className="absolute -top-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              animate={{
                y: [0, -10, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              💼 Business Growth
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              animate={{
                y: [0, 10, 0],
                rotate: [2, -2, 2]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
            >
              🏆 Market Leadership
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Summary */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-900/80 to-black/80 border border-green-400/30 rounded-2xl backdrop-blur-sm">
            <ChartBarIcon className="w-6 h-6 text-green-400" />
            <div className="text-left">
              <div className="text-white font-semibold">Security = Competitive Advantage</div>
              <div className="text-green-400 text-sm">Position ICE as Colombia's secure choice</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
