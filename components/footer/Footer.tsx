import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-background/80 backdrop-blur-md border-t border-white/10 py-8'>
      <div className='max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4'>
        <div className='flex items-center gap-3'>
          <span className='text-xl font-bold text-text-primary'>
            NK<span className='text-primary-500'>.</span>
          </span>
          <span className='text-sm text-text-secondary'>
            © {currentYear} Nagalinga Kuchivaripalli · Open to opportunities
          </span>
        </div>
        <div className='flex items-center gap-6'>
          <Link href='https://github.com/linga-1221' target='_blank' rel='noopener noreferrer' className='text-sm text-text-secondary hover:text-primary-500 transition-colors'>
            GitHub
          </Link>
          <Link href='https://linkedin.com/in/nagalinga-k' target='_blank' rel='noopener noreferrer' className='text-sm text-text-secondary hover:text-primary-500 transition-colors'>
            LinkedIn
          </Link>
          <Link href='mailto:nagakuchivaripalli@gmail.com' className='text-sm text-text-secondary hover:text-primary-500 transition-colors'>
            Email
          </Link>
        </div>
      </div>
      <div className='text-center mt-6 text-text-muted text-sm'>
        Built with Next.js, Tailwind, Framer Motion, Three.js • Hosted on Vercel
      </div>
    </footer>
  );
}
