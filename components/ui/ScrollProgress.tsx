'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const pct = (current / totalHeight) * 100;
      setProgress(pct);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='fixed top-0 left-0 right-0 h-1 z-50 bg-white/10'>
      <div
        className='h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-100'
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
