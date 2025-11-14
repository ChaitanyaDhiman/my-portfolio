'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/about/Navigation'
import FooterSection from '@/components/Footer'
import Section from '@/components/about/Section'
import SkillCard from '@/components/about/SkillCard'
import { Code, Palette, Rocket, Award, BookOpen, Heart, Instagram, Linkedin, Github, FileText } from 'lucide-react';
import { BsThreads } from 'react-icons/bs';
import ResumeSection from '@/components/ResumeSection';
//import ResumePDF from '@/assets/Chaitanya_Resume_2025.pdf'

export default function AboutPage() {

  const skillsData = [
    {
      category: 'Backend',
      skills: ['Java', 'Spring Boot', 'Hibernate', 'J2EE' ,'REST APIs']
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
      skills: ['Git', 'Maven', 'Docker', 'IntelliJ IDEA' ,'VS Code', 'Vercel']
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <AnimatedBackground />
      <div
        className="relative z-10 transition-opacity duration-1000"
      >
        <Navigation />
        
        <Section id="intro" title="About Me" properties = "flex items-center justify-center px-8 py-24" icon={Code}>
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

        <Section id="resume" title="Resume" properties = "flex items-center justify-center px-8" icon={Award}>
          <div className="max-w-3xl mx-auto">
            <p className="mb-12">
              Download my resume to learn more about my experience, education, and skills.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Chaitanya Dhiman</h3>
                  <p className="text-gray-400">Java Backend Developer</p>
                </div>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center text-3xl">
                  📄
                </div>
              </div>
              
              <div className="space-y-6 text-left">
                <ResumeSection title="Experience" items={[
                  { role: 'Backend Developer', company: 'FIS', period: '2022 - 2025' }
                ]} />
                
                <ResumeSection title="Education" items={[
                  { role: 'Bachelor of Computer Science', company: 'Chandigarh University', period: '2018 - 2022' }
                ]} />
                
                <ResumeSection title="Certifications" items={[
                  { role: 'Google Cloud IAM and Networking for AWS Professionals', company: 'Coursera', period: '2021' },
                  { role: 'Introduction to AWS Identity and Access Management', company: 'Coursera', period: '2021' }
                ]} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/assets/Chaitanya_Resume_2025.pdf"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
              <a
                href="/assets/Chaitanya_Resume_2025.pdf"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Online
              </a>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills & Expertise" properties = "flex items-center justify-center px-8 py-24" icon={Award}>
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

        <Section id="passion" title="What I Love" properties = "flex items-center justify-center px-8" icon={Heart}>
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

        <Section id="socials" title="Socials" properties = "flex items-center justify-center px-8 py-24" icon={Rocket}>
          <p className="max-w-2xl mx-auto mb-12">
            You can find me on these Social Media Platforms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-4xl mx-auto">
            <a href='https://www.instagram.com/chaitanya_dhiman/'>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <Instagram size={40} className="text-purple-400 mb-4 mx-auto"/>
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