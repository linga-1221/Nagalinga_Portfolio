'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    category: 'Programming',
    items: ['Java', 'Python', 'SQL', 'JavaScript'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'LangChain', 'Generative AI','Semantic Search', 'AI Agents', 'RAG Systems', 'LLM Evaluation'],
  },
  {
    category: 'Web Development',
    items: ['React', 'Tailwind CSS','FastAPI' ,'Node.js', 'Express', 'Flask', 'Next.js'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Docker', 'Git', 'Power BI', 'MySQL', 'MongoDB', 'VS Code', 'Google Colab', 'Microsoft tools'],
  },
  {
    category: 'Soft Skills',
    items: ['Effective Communication', 'Team Collaboration', 'Problem Solving', 'Adaptability', 'Time Management'],
  },
  {
    category: 'Cloud & Deployment',
    items: [' Vercel', 'Render', 'Streamlit', 'REST APIs']
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id='skills' className='py-32 px-6 bg-background'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-16'>
          <span className='text-xs font-bold tracking-[0.3em] uppercase text-primary-500'>Skills</span>
          <h2 className='text-5xl md:text-7xl font-bold text-text-primary mt-4'>Engineering Toolkit</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mt-6'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className='glass-card p-8'
            >
              <p className='text-[10px] font-bold tracking-[0.25em] uppercase text-primary-500 mb-6'>
                {String(gi + 1).padStart(2, '0')}
              </p>
              <h3 className='text-2xl font-bold text-text-primary mb-6'>{group.category}</h3>
              <div className='flex flex-wrap gap-2'>
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-2 text-xs font-medium text-text-secondary bg-primary-500/10 rounded-full border border-primary-500/20'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
