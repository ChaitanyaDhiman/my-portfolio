'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/about/Navigation'
import FooterSection from '@/components/Footer'

export default function AboutPage() {

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <AnimatedBackground />

      <div
        className="relative z-10 transition-opacity duration-1000"
      >
        <Navigation />
        <FooterSection />
      </div>

    </div>
  );
}