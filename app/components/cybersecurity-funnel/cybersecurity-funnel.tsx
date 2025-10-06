'use client';

import React from 'react';
import CybersecurityHero from './cybersecurity-hero';
import CybersecurityProblems from './cybersecurity-problems';
import CybersecuritySolution from './cybersecurity-solution';
import HowItWorks from './how-it-works';
import CybersecurityRoadmap from './cybersecurity-roadmap';
import BusinessValue from './business-value';
import FinalCTA from './final-cta';

export default function CybersecurityFunnel() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <CybersecurityHero />
      
      {/* Problem/Pain Points Section */}
      <CybersecurityProblems />
      
      {/* Solution/Benefits Section */}
      <CybersecuritySolution />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Roadmap Section */}
      <CybersecurityRoadmap />
      
      {/* Business Value Section */}
      <BusinessValue />
      
      {/* Final CTA Section */}
      <FinalCTA />
    </main>
  );
}
