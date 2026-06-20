'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    slug: 'candidate-ranking-system',
    title: 'AI-Powered Semantic Candidate Ranking System',
    subtitle: 'AI Recruitment Intelligence Platform',
    challenge:
      'Traditional ATS systems rely heavily on keyword matching and often miss highly qualified candidates who use different terminology.',

    solution:
      'Built an end-to-end semantic candidate ranking platform that processes 100,000 candidate profiles using embeddings, semantic search, trust scoring, behavioral scoring, explainable AI recommendations, and recruiter analytics dashboards.',

    tech: [
      'Python',
      'Sentence Transformers',
      'Semantic Search',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'Streamlit',
      'Plotly'
    ],

    links: {
      live: 'https://redrob-thedataandaichallenge.streamlit.app/',
      github: 'https://github.com/linga-1221/the_data_and_ai_challenge',
    },

    highlight: 'Redrob Data & AI Challenge',
  },

  {
    slug: 'agent-eval-lab',
    title: 'Agent Eval Lab',
    subtitle: 'Multi-Agent LLM Evaluation Framework',

    challenge:
      'Evaluating LLM-generated code and tests is difficult because quality issues, hallucinations, and failure modes are often hidden.',

    solution:
      'Built a multi-agent evaluation framework where Generator, Reviewer, and Judge agents collaborate to generate, validate, score, and analyze PyTest test suites using AST-based evaluation, failure-mode tracking, Docker reproducibility, and CI/CD automation.',

    tech: [
      'Python',
      'LangChain',
      'Groq API',
      'Pydantic',
      'PyTest',
      'Docker',
      'GitHub Actions'
    ],

    links: {
      github: 'https://github.com/linga-1221/agent-eval-lab',
    },

    highlight: 'LLM Evaluation Research',
  },

  {
    slug: 'skill-ladder',
    title: 'Skill Ladder',
    subtitle: 'AI-Powered Career Development Platform',

    challenge:
      'Students and job seekers struggle to understand their skill gaps, ATS readiness, and job-market fit.',

    solution:
      'Developed a full-stack career platform featuring AI resume analysis, ATS scoring, smart job recommendations, role-based dashboards, interview management, coding assessments, and personalized career guidance.',

    tech: [
      'React',
      'FastAPI',
      'Firebase',
      'Tailwind CSS',
      'JWT',
      'PyPDF2'
    ],

    links: {
      github: 'https://github.com/linga-1221/skillladder',
    },

    highlight: 'Full Stack Platform',
  },

  {
    slug: 'fairhire-ai',
    title: 'FairHire AI',
    subtitle: 'Bias-Free Hiring Intelligence Platform',

    challenge:
      'Bias in job descriptions and resume screening can lead to unfair hiring decisions and reduced candidate diversity.',

    solution:
      'Built a recruitment platform powered by Gemini AI that detects hiring bias, anonymizes resumes, ranks candidates, generates inclusive job descriptions, and provides recruiter analytics through an interactive dashboard.',

    tech: [
      'Python',
      'Flask',
      'Gemini AI',
      'SQLite',
      'Chart.js',
      'PyPDF2'
    ],

    links: {
      live: 'https://ai-for-reducing-bias-in-hiring.vercel.app',
      github: 'https://github.com/linga-1221/ai-bias-reduction-hiring',
    },

    highlight: 'KARE Hackathon Winner',
  },
];

export default function Projects() {
  return (
    <section id='projects' className='py-32 px-6 bg-background'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='mb-6'
          >
            <span className='text-xs font-bold tracking-[0.3em] uppercase text-primary-400'>Selected Work</span>
            <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mt-4 leading-tight'>
              Featured Projects
            </h2>
            <p className='text-lg text-text-secondary mt-4 max-w-2xl'>
              A collection of AI-powered applications and systems I\'ve built to solve real-world problems.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto'>
          {/* Candidate Ranking System - Hero card (8 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='lg:col-span-8 group relative glass-card overflow-hidden hover:shadow-glow-lg transition-all duration-500'
          >
            {/* Gradient accent */}
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-glow-blue to-secondary-500' />

            <div className='p-8 lg:p-10'>
              <div className='flex items-start justify-between mb-6'>
                <div>
                  <p className='text-xs font-bold tracking-[0.2em] uppercase text-primary-400 mb-2'>Project 01</p>
                  <h3 className='text-3xl md:text-4xl font-bold text-text-primary group-hover:text-primary-400 transition-colors'>
                    {projects[0].title}
                  </h3>
                  <p className='text-primary-500/80 text-sm font-mono mt-1'>{projects[0].subtitle}</p>
                </div>
                {projects[0].highlight && (
                  <span className='px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full'>
                    {projects[0].highlight}
                  </span>
                )}
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='lg:col-span-2 space-y-6'>
                  <div>
                    <h4 className='text-xs font-bold tracking-wider uppercase text-text-muted mb-2'>The Challenge</h4>
                    <p className='text-text-secondary leading-relaxed'>{projects[0].challenge}</p>
                  </div>
                  <div>
                    <h4 className='text-xs font-bold tracking-wider uppercase text-text-muted mb-2'>The Solution</h4>
                    <p className='text-text-secondary leading-relaxed'>{projects[0].solution}</p>
                  </div>
                </div>

                <div className='space-y-6'>
                  <div>
                    <h4 className='text-xs font-bold tracking-wider uppercase text-text-muted mb-3'>Tech Stack</h4>
                    <div className='flex flex-wrap gap-2'>
                      {projects[0].tech.map((t) => (
                        <span
                          key={t}
                          className='px-3 py-1.5 text-xs font-medium text-text-primary bg-primary-500/15 border border-primary-500/25 rounded-lg'
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className='text-xs font-bold tracking-wider uppercase text-text-muted mb-3'>Links</h4>
                    <div className='flex flex-col gap-3'>
                      {projects[0].links.live && (
                        <a
                          href={projects[0].links.live}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors group/link'
                        >
                          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                          </svg>
                          <span>View Live</span>
                        </a>
                      )}
                      {projects[0].links.github && (
                        <a
                          href={projects[0].links.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary-400 transition-colors group/link'
                        >
                          <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                          </svg>
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Agent Eval Lab - Right-side card (4 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='lg:col-span-4 group relative glass-card overflow-hidden hover:shadow-glow-lg transition-all duration-500'
          >
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-500 to-glow-purple' />

            <div className='p-8 lg:p-10 h-full flex flex-col'>
              <div className='mb-6'>
                <p className='text-xs font-bold tracking-[0.2em] uppercase text-secondary-400 mb-2'>Project 02</p>
                <h3 className='text-2xl md:text-3xl font-bold text-text-primary group-hover:text-secondary-400 transition-colors'>
                  {projects[1].title}
                </h3>
                <p className='text-secondary-500/80 text-sm font-mono mt-1'>{projects[1].subtitle}</p>
              </div>

              <div className='flex-1 space-y-5'>
                <div>
                  <h4 className='text-xs font-bold tracking-wider uppercase text-text-muted mb-2'>The Challenge</h4>
                  <p className='text-text-secondary text-sm leading-relaxed'>{projects[1].challenge}</p>
                </div>
                <div>
                  <h4 className='text-xs font-bold tracking-wider uppercase text-text-muted mb-2'>The Solution</h4>
                  <p className='text-text-secondary text-sm leading-relaxed'>{projects[1].solution}</p>
                </div>
              </div>

              <div className='mt-6 pt-6 border-t border-white/10 space-y-4'>
                <div>
                  <h4 className='text-xs font-bold tracking-wider uppercase text-text-muted mb-2'>Tech Stack</h4>
                  <div className='flex flex-wrap gap-2'>
                    {projects[1].tech.map((t) => (
                      <span
                        key={t}
                        className='px-2.5 py-1 text-[10px] font-medium text-text-primary bg-secondary-500/15 border border-secondary-500/25 rounded-md'
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='flex gap-4'>
                  {projects[1].links.live && (
                    <a
                      href={projects[1].links.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-xs font-medium text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1'
                    >
                      <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {projects[1].links.github && (
                    <a
                      href={projects[1].links.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-xs font-medium text-text-secondary hover:text-primary-400 transition-colors flex items-center gap-1'
                    >
                      <svg className='w-3 h-3' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>

          {/* Skill Ladder - Full width card (12 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='lg:col-span-8   group relative glass-card overflow-hidden hover:shadow-glow-lg transition-all duration-500'
          >
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-glow-cyan to-primary-500' />

            <div className='p-8 lg:p-10'>
              <div className='flex flex-wrap items-start justify-between gap-4 mb-8'>
                <div>
                  <p className='text-xs font-bold tracking-[0.2em] uppercase text-glow-cyan mb-2'>Project 03</p>
                  <h3 className='text-3xl md:text-4xl font-bold text-text-primary group-hover:text-glow-cyan transition-colors'>
                    {projects[2].title}
                  </h3>
                  <p className='text-glow-cyan/80 text-sm font-mono mt-1'>{projects[2].subtitle}</p>
                </div>

                <div className='flex gap-3'>
                  {projects[2].links.github && (
                    <a
                      href={projects[2].links.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-primary-400 transition-all'
                    >
                      <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                      </svg>
                      View Source
                    </a>
                  )}
                </div>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='lg:col-span-2 space-y-6'>
                  <div>
                    <h4 className='text-xs font-bold tracking-wider uppercase text-text-muted mb-3'>The Challenge</h4>
                    <p className='text-text-secondary leading-relaxed text-lg'>{projects[2].challenge}</p>
                  </div>
                  <div>
                    <h4 className='text-xs font-bold tracking-wider uppercase text-text-muted mb-3'>The Solution</h4>
                    <p className='text-text-secondary leading-relaxed text-lg'>{projects[2].solution}</p>
                  </div>
                </div>

                <div className='space-y-6'>
                  <div>
                    <h4 className='text-xs font-bold tracking-wider uppercase text-text-muted mb-3'>Architecture</h4>
                    <div className='bg-surface-light/50 rounded-xl p-5 border border-white/5'>
                      <div className='flex flex-col gap-3 text-sm'>
                        <div className='flex items-center gap-3'>
                          <div className='w-3 h-3 rounded-full bg-primary-500/50' />
                          <span className='text-text-secondary'>Generator Agent (creates tests)</span>
                        </div>
                        <div className='flex items-center gap-3'>
                          <div className='w-3 h-3 rounded-full bg-secondary-500/50' />
                          <span className='text-text-secondary'>Reviewer Agent (analyzes quality)</span>
                        </div>
                        <div className='flex items-center gap-3'>
                          <div className='w-3 h-3 rounded-full bg-glow-cyan/50' />
                          <span className='text-text-secondary'>Judge Agent (final verdict)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className='text-xs font-bold tracking-wider uppercase text-text-muted mb-3'>Tech Stack</h4>
                    <div className='flex flex-wrap gap-2'>
                      {projects[2].tech.map((t) => (
                        <span
                          key={t}
                          className='px-3 py-1.5 text-xs font-medium text-text-primary bg-glow-cyan/15 border border-glow-cyan/25 rounded-lg'
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* FairHire AI - Full width card (12 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='lg:col-span-4 group relative glass-card overflow-hidden hover:shadow-glow-lg transition-all duration-500'
          >
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-glow-purple to-secondary-500' />

            <div className='p-8 lg:p-10'>
              <div className='flex flex-wrap items-start justify-between gap-4 mb-8'>
                <div>
                  <p className='text-xs font-bold tracking-[0.2em] uppercase text-primary-400 mb-2'>Project 04</p>
                  <h3 className='text-3xl md:text-4xl font-bold text-text-primary group-hover:text-primary-400 transition-colors'>
                    {projects[3].title}
                  </h3>
                  <p className='text-primary-500/80 text-sm font-mono mt-1'>{projects[3].subtitle}</p>
                </div>

                <div className='flex gap-3'>
                  {projects[3].links.live && (
                    <a
                      href={projects[3].links.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-primary-400 transition-all'
                    >
                      <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                      </svg>
                      View Live
                    </a>
                  )}
                  {projects[3].links.github && (
                    <a
                      href={projects[3].links.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-primary-400 transition-all'
                    >
                      <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                      </svg>
                      View Source
                    </a>
                  )}
                </div>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='lg:col-span-2 space-y-6'>
                  <div>
                    <h4 className='text-xs font-bold tracking-wider uppercase text-text-muted mb-3'>The Challenge</h4>
                    <p className='text-text-secondary leading-relaxed text-lg'>{projects[3].challenge}</p>
                  </div>
                  <div>
                    <h4 className='text-xs font-bold tracking-wider uppercase text-text-muted mb-3'>The Solution</h4>
                    <p className='text-text-secondary leading-relaxed text-lg'>{projects[3].solution}</p>
                  </div>
                </div>

                <div className='space-y-6'>
                  <div>
                    
                  </div>

                  <div>
                    <h4 className='text-xs font-bold tracking-wider uppercase text-text-muted mb-3'>Tech Stack</h4>
                    <div className='flex flex-wrap gap-2'>
                      {projects[3].tech.map((t) => (
                        <span
                          key={t}
                          className='px-3 py-1.5 text-xs font-medium text-text-primary bg-primary-500/15 border border-primary-500/25 rounded-lg'
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
