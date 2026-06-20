'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
{
year: '2022',
title: 'Started B.Tech CSE',
company: 'Kalasalingam University',
description: 'B.Tech Computer Science and Engineering.',
},
{
year: '2024',
title: 'KARE Open Source Hackathon Winner',
company: 'Achievement',
description: 'Winner of the KARE Open Source Hackathon.',
},
{
year: '2025',
title: 'Skill Ladder',
company: 'Project',
description:
'AI-powered career development platform with resume analysis, job matching, and coding assessment features.',
},
{
year: '2025',
title: 'Agent Eval Lab',
company: 'Project',
description:
'Multi-agent LLM evaluation framework using Generator → Reviewer → Judge architecture.',
},
{
year: '2026',
title: 'Springer Nature Publication',
company: 'Research',
description:
'Research work published at SmartCom 2026.',
},
];

export default function Timeline() {
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: '-100px' });

return ( <section
   ref={ref}
   id='timeline'
   className='py-32 px-6 bg-background'
 > <div className='max-w-7xl mx-auto'> <div className='mb-20'> <span className='text-xs font-bold tracking-[0.3em] uppercase text-primary-500'>
Journey </span>

```
      <h2 className='text-5xl md:text-7xl font-bold text-text-primary mt-4'>
        Academic & Project Journey
      </h2>

      <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mt-6'></div>
    </div>

    <div className='relative'>
      <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-primary-500/30'></div>

      {milestones.map((milestone, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
          }}
          className='relative pl-20 pb-12 last:pb-0'
        >
          <div
            className={`absolute left-6 top-6 w-4 h-4 rounded-full border-2 ${
              index % 2 === 0
                ? 'bg-primary-500 border-primary-500'
                : 'bg-secondary-500 border-secondary-500'
            }`}
          ></div>

          <div className='glass-card p-6'>
            <span className='text-primary-500 text-sm font-mono mb-2 block'>
              {milestone.year}
            </span>

            <h3 className='text-xl font-bold text-text-primary mb-2'>
              {milestone.title}
            </h3>

            <p className='text-sm text-text-secondary mb-2'>
              {milestone.company}
            </p>

            <p className='text-sm text-text-secondary/70'>
              {milestone.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

);
}
