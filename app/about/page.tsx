'use client';

import { useState } from 'react';

import Navigation from '@/components/about/Navigation'
import FooterSection from '@/components/Footer'
import Section from '@/components/about/Section'
import SkillCard from '@/components/about/SkillCard'
import { Code, Palette, Rocket, Award, BookOpen, Heart, Instagram, Linkedin, Github, FileText, Eye, EyeOff } from 'lucide-react';
import { BsThreads } from 'react-icons/bs';

export default function AboutPage() {
  const [showPDF, setShowPDF] = useState(false);

  const skillsData = [
    {
      category: 'Backend',
      skills: ['Java', 'Spring Boot', 'Hibernate', 'J2EE', 'REST APIs']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS']
    },
    {
      category: 'Database',
      skills: ['SQL', 'PostgreSQL']
    },
    {
      category: 'Tools',
      skills: ['Git', 'Maven', 'Docker', 'IntelliJ IDEA', 'VS Code', 'Vercel']
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="animated-background" />
      <div
        className="relative z-10 transition-opacity duration-1000"
      >
        <Navigation />

        <Section id="intro" title="About Me" properties="flex items-center justify-center px-8 py-24" icon={Code}>
          <p className="max-w-2xl mx-auto">
            Hello! I&apos;m Chaitanya Dhiman, a passionate creative developer and designer based in India.
            I believe in the power of design and technology to create meaningful experiences that
            make a difference in people&apos;s lives.
          </p>
          <p className="max-w-2xl mx-auto">
            With a keen eye for aesthetics and a deep understanding of user-centered design,
            I craft digital experiences that are not only visually stunning but also intuitive
            and accessible to everyone.
          </p>
        </Section>

        <Section id="resume" title="Resume" properties="flex items-center justify-center px-8" icon={Award}>
          <div className="max-w-5xl mx-auto w-full">
            <p className="mb-8 text-center">
              Download my resume or view it directly below to learn more about my experience, education, and skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/api/download-resume"
                download
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
              <button
                onClick={() => setShowPDF(!showPDF)}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                {showPDF ? (
                  <>
                    <EyeOff className="w-5 h-5" />
                    Hide Resume
                  </>
                ) : (
                  <>
                    <Eye className="w-5 h-5" />
                    View Resume
                  </>
                )}
              </button>
            </div>

            {showPDF && (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 mb-8 overflow-hidden">
                <div className="bg-black/20 rounded-lg overflow-hidden">
                  <iframe
                    src="/Chaitanya_Resume_2025.pdf#toolbar=1&navpanes=1&scrollbar=1"
                    className="w-full h-[800px] border-0"
                    title="Resume PDF Viewer"
                  />
                </div>
                <p className="text-sm text-gray-400 text-center mt-4">
                  If the PDF doesn&apos;t load, you can{' '}
                  <a
                    href="/Chaitanya_Resume_2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    open it in a new tab
                  </a>
                </p>
              </div>
            )}

          </div>
        </Section>

        <Section id="skills" title="Skills & Expertise" properties="flex items-center justify-center px-8 py-20" icon={Award}>
          <p className="mb-12 max-w-2xl mx-auto">
            I&apos;ve developed a diverse skill set that spans across development, design, and
            modern web technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {skillsData.map((skillGroup) => (
              <SkillCard
                key={skillGroup.category}
                category={skillGroup.category}
                skills={skillGroup.skills}
              />
            ))}
          </div>
        </Section>

        <Section id="passion" title="What I Love" properties="flex items-center justify-center px-8" icon={Heart}>
          <p className="max-w-2xl mx-auto mb-12">
            I&apos;m passionate about creating experiences that blend form and function seamlessly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <Palette size={40} className="text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-sm text-gray-400">
                Crafting beautiful, intuitive interfaces that users love
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <Code size={40} className="text-pink-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-sm text-gray-400">
                Building robust, scalable applications with modern tech
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <BookOpen size={40} className="text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Learning</h3>
              <p className="text-sm text-gray-400">
                Constantly exploring new technologies and techniques
              </p>
            </div>
          </div>
        </Section>

        <Section id="socials" title="Socials" properties="flex items-center justify-center px-8 py-24" icon={Rocket}>
          <p className="max-w-2xl mx-auto mb-12">
            You can find me on these Social Media Platforms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-4xl mx-auto">
            <a href='https://www.instagram.com/chaitanya_dhiman/'>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <Instagram size={40} className="text-purple-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">Follow me on Instagarm</h3>
              </div>
            </a>
            <a href='https://www.threads.com/@chaitanya_dhiman'>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <BsThreads size={40} className="text-pink-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">Follow me on Threads</h3>
              </div>
            </a>
            <a href='https://www.linkedin.com/in/chaitanya-dhiman-569a2b136/'>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <Linkedin size={40} className="text-cyan-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">Let&apos;s connect on LinkedIn</h3>
              </div>
            </a>
            <a href='https://github.com/ChaitanyaDhiman'>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <Github size={40} className="text-cyan-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">Star me on GitHub</h3>
              </div>
            </a>
          </div>
        </Section>

        <FooterSection />
      </div>

    </div>
  );
}