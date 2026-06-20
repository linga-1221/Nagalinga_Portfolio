'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';

// Components that use framer-motion must be client-only
const Skills = dynamic(() => import('@/components/skills/Skills'), { ssr: false });
const Timeline = dynamic(() => import('@/components/timeline/Timeline'), { ssr: false });
const Projects = dynamic(() => import('@/components/projects/Projects'), { ssr: false });
const Achievements = dynamic(() => import('@/components/achievements/Achievements'), { ssr: false });
const AIAssistant = dynamic(() => import('@/components/ai-assistant/AIAssistant'), { ssr: false });
const Contact = dynamic(() => import('@/components/contact/Contact'), { ssr: false });

const AnimatedCursor = dynamic(() => import('@/components/ui/AnimatedCursor'), { ssr: false });
const ScrollProgress = dynamic(() => import('@/components/ui/ScrollProgress'), { ssr: false });
const ParticleBackground = dynamic(() => import('@/components/ui/ParticleBackground'), { ssr: false });

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedCursor />
      <ScrollProgress />
      <ParticleBackground />

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Hero />
      </section>

      <section id="about" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <About />
        </div>
      </section>

      <section id="skills" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Skills />
        </div>
      </section>


      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Projects />
        </div>
      </section>

      <section id="achievements" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Achievements />
        </div>
      </section>


      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Contact />
        </div>
      </section>
    </div>
  );
}