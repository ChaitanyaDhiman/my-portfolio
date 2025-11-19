'use client';


import Navigation from '@/components/about/Navigation'
import ProjectCard from '@/components/projects/ProjectCard';
import FooterSection from '@/components/Footer'


export default function Projects() {

  const projects = {
    featured: [
      {
        title: 'My Portfolio Website',
        description: 'My personal hub, demonstrating end-to-end mastery: from efficient server-side architecture to a clean, responsive user experience.',
        tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
        image: '👨‍💻',
        demo: 'https://www.chaitanyadhiman.com/',
        github: 'https://github.com/ChaitanyaDhiman/my-portfolio'
      }
    ],
    AI_Powered: [
      {
        title: 'Resume Forge',
        description: 'ResumeForge is an AI-powered resume optimization tool that helps job seekers tailor their resumes to specific job descriptions.',
        tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'OpenAI', 'Python', 'Flask', 'Vercel'],
        image: '📄',
        demo: '',
        github: 'https://github.com/ChaitanyaDhiman/ResumeForge'
      }
    ]
  };

  return (
    <>

      <div className="relative min-h-screen overflow-hidden bg-black text-white">

        <div className="animated-background" />
        <div
          className="relative z-10 transition-opacity duration-1000"
        >
          <Navigation />

          <section id="featured" className="flex items-center justify-center px-8 py-24">
            <div className="max-w-6xl w-full">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center tracking-tight">Featured Projects</h2>
              <p className="text-gray-400 text-center mb-16 text-lg">Some of my best work</p>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {projects.featured.map((project, index) => (
                  <ProjectCard key={index} {...project} compact />
                ))}
              </div>
            </div>
          </section>

          <section id="AI_Powered" className="flex items-center justify-center px-8 py-12">
            <div className="max-w-6xl w-full">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center tracking-tight">AI-Powered Projects</h2>
              <p className="text-gray-400 text-center mb-16 text-lg">Projects that use AI to enhance user experience</p>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {projects.AI_Powered.map((project, index) => (
                  <ProjectCard key={index} {...project} compact />
                ))}
              </div>
            </div>
          </section>

          {/* <section id="web-apps" className="min-h-screen flex items-center justify-center px-8 py-24">
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center tracking-tight">Web Applications</h2>
            <p className="text-gray-400 text-center mb-16 text-lg">Full-stack web applications</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.webApps.map((project, index) => (
                <ProjectCard key={index} {...project} compact />
              ))}
            </div>
          </div>
        </section>

        <section id="design" className="min-h-screen flex items-center justify-center px-8 py-24">
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center tracking-tight">Design Work</h2>
            <p className="text-gray-400 text-center mb-16 text-lg">UI/UX and brand design</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.design.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section> */}

          <FooterSection />

        </div>

      </div>
    </>
  );
}
