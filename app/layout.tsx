import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import SmoothScroll from '@/components/ui/SmoothScroll';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'Nagalinga Kuchivaripalli | AI Engineer • LLM Developer • Full-Stack Developer',
  description:
    'Portfolio of Nagalinga Kuchivaripalli - AI Engineer, LLM Developer, Full-Stack Developer, Springer Nature Published Researcher and Hackathon Winner.',
  keywords: [
    'AI Engineer',
    'LLM Developer',
    'Generative AI',
    'AI Agents',
    'Semantic Search',
    'Full Stack Developer',
    'Nagalinga Kuchivaripalli',
  ],
  authors: [{ name: 'Nagalinga Kuchivaripalli' }],
  creator: 'Nagalinga Kuchivaripalli',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title:
      'Nagalinga Kuchivaripalli | AI Engineer • LLM Developer • Full-Stack Developer',
    description:
      'Building AI Agents, Semantic Search Systems, and Full-Stack Applications.',
    siteName: 'Nagalinga Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Nagalinga Kuchivaripalli | AI Engineer • LLM Developer • Full-Stack Developer',
    description:
      'Building AI Agents, Semantic Search Systems, and Full-Stack Applications.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.className} antialiased bg-background text-text-primary overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <SmoothScroll />

          <Navigation />

          <main className="relative">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}