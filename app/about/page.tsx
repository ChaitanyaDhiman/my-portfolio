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

        <h1 className="py-3.5 px-0.5 z-10 mt-24 ml-8 text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text ">
          More About Me</h1>
        
        <FooterSection />
      </div>

    </div>
  );
}