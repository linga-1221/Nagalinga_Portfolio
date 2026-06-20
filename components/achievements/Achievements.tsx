'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const achievements = [
'Springer Nature Research Publication (SmartCom 2026)',
'Winner - KARE Open Source Hackathon',
'Redrob India Runs Data & AI Challenge',
'Oracle Certified Foundations Associate',
'AI for Data Analytics & Power BI (Infosys Springboard)',
'Learn Java (CodeChef)',
];

export default function Achievements() {
return ( <section className="py-20 px-6"> <div className="max-w-6xl mx-auto"> <h2 className="text-4xl font-bold text-center mb-12 text-text-primary">
Achievements & Certifications </h2>

```
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {achievements.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 text-center"
        >
          <Award className="mx-auto mb-4 text-primary-500" />
          <p>{item}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

);
}
