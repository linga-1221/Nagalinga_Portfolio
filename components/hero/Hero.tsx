'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id='hero' className='relative min-h-screen flex items-center justify-center overflow-hidden bg-background'>
      {/* Decorative gradient orbs */}
      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl opacity-30 animate-pulse' />
      <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl opacity-20 animate-pulse' style={{ animationDelay: '1s' }} />

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-10'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'ease-out' }}
          className='text-center'
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-sm md:text-base font-mono text-primary-400 mb-6 tracking-widest uppercase'
          >
            AI Engineer • LLM Developer • Full-Stack Builder
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-5xl sm:text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bold text-text-primary tracking-tight mb-6 leading-[1.1]'
          >
            Nagalinga
            <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-glow-blue to-secondary-400'>
              Kuchivaripalli
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='text-lg md:text-xl text-text-secondary mb-4 max-w-2xl mx-auto font-light'
          >
            Building AI Agents, Semantic Search Systems, and Full-Stack Applications powered by Generative AI and Large Language Models.
          </motion.p>

          {/* Credentials line */}
          

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='flex flex-wrap items-center justify-center gap-4 mb-16'
          >
            <a
              href='#projects'
              className='group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-glow-md hover:shadow-glow-lg'
            >
              <span>View Projects</span>
              <svg className='w-4 h-4 transition-transform group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </a>
            <a
              href='#contact'
              className='inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-text-primary font-semibold rounded-full hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300'
            >
              <span>Get in Touch</span>
            </a>
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-8 py-4 border border-primary-500/30 text-primary-400 font-semibold rounded-full hover:bg-primary-500/10 transition-all duration-300'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
              </svg>
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className='flex items-center justify-center gap-8'
          >
            {[
              { label: 'GitHub', href: 'https://github.com/linga-1221' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/nagalinga-k' },
              { label: 'Email', href: 'mailto:nagakuchivaripalli@gmail.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className='group relative text-text-secondary hover:text-primary-400 transition-colors duration-300'
              >
                <span className='text-sm font-mono uppercase tracking-wider'>{link.label}</span>
                <span className='absolute -bottom-2 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full' />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2'
      >
        <div className='flex flex-col items-center gap-2 text-text-muted'>
          <span className='text-xs font-mono uppercase tracking-wider'>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
