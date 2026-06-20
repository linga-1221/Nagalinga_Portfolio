'use client';

import { useState, useEffect, useRef } from 'react';
import {
Mail,
MapPin,
Github,
Linkedin,
ExternalLink,
} from 'lucide-react';

const contactLinks = [
{
label: 'Email',
value: 'nagakuchivaripalli@gmail.com',
href: 'mailto:nagakuchivaripalli@gmail.com',
icon: Mail,
},
{
label: 'GitHub',
value: 'github.com/linga-1221',
href: 'https://github.com/linga-1221',
icon: Github,
},
{
label: 'LinkedIn',
value: 'linkedin.com/in/nagalinga-k',
href: 'https://linkedin.com/in/nagalinga-k',
icon: Linkedin,
},
{
label: 'Resume',
value: 'Download Resume',
href: '/Resume.pdf',
icon: ExternalLink,
},
{
label: 'Location',
value: 'Tadipatri, Andhra Pradesh, India',
href: null,
icon: MapPin,
},
];

function OpportunityCard() {
return ( <div className="glass-card p-8 h-full"> <h3 className="text-2xl font-bold text-text-primary mb-6">
Currently Open To </h3>

  <div className="space-y-4 text-text-secondary">
    <div>✓ AI Engineer Roles</div>
    <div>✓ Generative AI / LLM Engineering</div>
    <div>✓ Software Engineer Roles</div>
    <div>✓ Full Stack Development</div>
    <div>✓ Internships | Full-Time | Remote</div>
    <div>✓ Remote / Relocation</div>
  </div>

  <div className="mt-8 pt-6 border-t border-white/10">
    <p className="text-sm text-primary-500 font-medium">
      Response Time
    </p>
    <p className="text-text-secondary">
      Usually within 24 hours
    </p>
  </div>
</div>

);
}

export default function Contact() {
const [visible, setVisible] = useState(false);
const ref = useRef(null);

useEffect(() => {
const observer = new IntersectionObserver(
([entry]) => {
if (entry.isIntersecting) setVisible(true);
},
{ threshold: 0.1 }
);


if (ref.current) observer.observe(ref.current);

return () => observer.disconnect();


}, []);

return ( <section
   ref={ref}
   id="contact"
   className="py-32 px-6 bg-background"
 > <div className="max-w-7xl mx-auto">
<div
className={`grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 transition-all duration-700 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
> <div className="lg:col-span-4"> <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500">
Contact </span> </div>

```
      <div className="lg:col-span-8">
        <h2 className="text-5xl md:text-7xl font-bold text-text-primary leading-tight">
          Let's{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
            Connect
          </span>
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mt-6" />
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div
        className={`lg:col-span-4 transition-all duration-700 delay-200 ${
          visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-xl text-text-primary leading-tight mb-6">
          Open to opportunities in AI Engineering,
          Full Stack Development, and Software Engineering.
        </p>

        <p className="text-text-secondary leading-relaxed mb-8">
          Passionate about Generative AI, LLMs,
          AI Agents, and scalable web applications.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-500 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for opportunities
        </div>
      </div>

      <div
        className={`lg:col-span-4 transition-all duration-700 delay-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <OpportunityCard />
      </div>

      <div
        className={`lg:col-span-4 transition-all duration-700 delay-400 ${
          visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="glass-card p-6">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;

            const content = (
              <>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary-500/10 text-primary-500">
                    <Icon size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-primary-500 mb-0.5">
                      {link.label}
                    </p>

                    <p className="text-sm text-text-secondary">
                      {link.value}
                    </p>
                  </div>
                </div>

                {link.href && (
                  <ExternalLink
                    size={16}
                    className="text-text-muted"
                  />
                )}
              </>
            );

            return link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.href.startsWith('http')
                    ? '_blank'
                    : undefined
                }
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className={`flex items-center justify-between py-4 ${
                  i !== 0 ? 'border-t border-white/10' : ''
                } hover:bg-white/5 transition-colors`}
              >
                {content}
              </a>
            ) : (
              <div
                key={link.label}
                className={`flex items-center justify-between py-4 ${
                  i !== 0 ? 'border-t border-white/10' : ''
                }`}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</section>

);
}
