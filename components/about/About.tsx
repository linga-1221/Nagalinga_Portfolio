'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className='py-32 px-6 bg-background'>
      <div className='max-w-7xl mx-auto'>
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20'>
            <div className='lg:col-span-4'>
              <span className='text-xs font-bold tracking-[0.3em] uppercase text-primary-500'>
                About
              </span>
            </div>

            <div className='lg:col-span-8'>
              <h2 className='text-5xl md:text-7xl font-bold text-text-primary leading-tight mb-6'>
                Building AI Agents &{' '}
                <span className='text-primary-500'>
                  Intelligent Systems
                </span>
              </h2>

              <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mb-8'></div>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2 space-y-8'>
              <div className='glass-card p-8 lg:p-10'>
                <p className='text-text-secondary leading-relaxed mb-6'>
                  I am a recent B.Tech Computer Science and Engineering graduate at
                  Kalasalingam University with a CGPA of 7.84. My expertise
                  includes Generative AI, Natural Language Processing,
                  Semantic Search, and AI Agents. My research has been
                  published by Springer Nature and I was honored as the
                  winner of the KARE Open Source Hackathon.
                </p>
              </div>

              <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
                {[
                  { value: '10+', label: 'Projects' },
                  { value: '1', label: 'Publication' },
                  { value: '6+', label: 'Certifications' },
                  { value: 'Winner', label: 'Hackathon' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 * index,
                    }}
                    className='glass-card p-6 text-center'
                  >
                    <div className='text-3xl font-bold text-primary-500 mb-2'>
                      {stat.value}
                    </div>

                    <div className='text-sm text-text-secondary'>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className='lg:col-span-1'>
              <div className='glass-card p-8 h-full'>
                <h3 className='text-xl font-bold text-text-primary mb-6'>
                  Expertise
                </h3>

                <div className='space-y-6'>
                  <div>
                    <h4 className='font-semibold text-text-primary mb-2'>
                      Full Stack
                    </h4>

                    <p className='text-sm text-text-secondary'>
                      React.js, Next.js, Node.js, FastAPI, Flask
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-text-primary mb-2'>
                      AI / ML
                    </h4>

                    <p className='text-sm text-text-secondary'>
                      Generative AI, NLP, Semantic Search, AI Agents, LangChain
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-text-primary mb-2'>
                      Research & Achievements
                    </h4>

                    <p className='text-sm text-text-secondary'>
                      Springer Nature Publication • KARE Hackathon Winner
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-text-primary mb-2'>
                      Education
                    </h4>

                    <p className='text-sm text-text-secondary'>
                      B.Tech CSE, Kalasalingam University | CGPA 7.84
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}