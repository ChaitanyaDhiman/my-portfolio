'use client';

import { useState, useEffect } from 'react';
import IntroAnimation from '@/components/IntroAnimation';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FooterSection from '@/components/Footer'

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIntroComplete(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="animated-background" />

      <IntroAnimation introComplete={introComplete} />

      <div
        className={`relative z-10 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <Navigation />
        <HeroSection />
      </div>
    </div>
  );
}