import { SectionHeader } from './section-header';
import { Card } from './ui/card';
import { TagChip } from './tag-chip';
import { Building2, Calendar, MapPin } from 'lucide-react';
import sobLogo from '../../assets/sob_logo.png';

interface ExperienceItemProps {
  company: string;
  title: string;
  location: string;
  period: string;
  highlights: (string | React.ReactNode)[];
  tags: string[];
  companyLink?: string;
  companyLogo?: string;
}

function ExperienceItem({ company, title, location, period, highlights, tags, companyLink, companyLogo }: ExperienceItemProps) {
  return (
    <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 group">
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-2xl font-semibold group-hover:text-[var(--link-color)] transition-colors flex items-center gap-3">
                {company}
                {companyLogo && companyLink && (
                  <a 
                    href={companyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src={companyLogo} 
                      alt={`${company} Logo`} 
                      className="w-6 h-6"
                    />
                  </a>
                )}
              </h3>
              <p className="text-lg text-muted-foreground mt-1">{title}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-mono">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2.5">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3 text-foreground/80">
              <span className="text-[var(--link-color)] mt-1.5 shrink-0">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <TagChip key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Card>
  );
}

export function ExperienceSection() {
  const experiences: ExperienceItemProps[] = [
    {
      company: 'OpenHands',
      title: 'Machine Learning Research Intern · advised by Prof. Graham Neubig',
      location: 'Pittsburgh, PA',
      period: 'May 2026 – Aug 2026',
      companyLink: 'https://www.openhands.dev/',
      highlights: [
        <>
          Architected an <strong>8-stage pipeline</strong> that transforms <strong>200K+ real agent conversations</strong> (<strong>~100 GB of trajectories</strong>) into verifiable, leak-proof reinforcement-learning coding tasks across <strong>1,000+ repositories</strong>.
        </>,
        <>
          Reconstructed <strong>pre-work and human-merged gold repository states</strong> from <strong>OpenTelemetry traces</strong>, packaging reproducible tasks as <strong>Git bundles in GCS</strong> using the <strong>Harbor format</strong>.
        </>,
        <>
          Automated grader creation through a <strong>multi-agent framework</strong> with deterministic <strong>fail-to-pass/pass-to-pass tests</strong> and structured <strong>LLM-as-a-judge checklists</strong>; explored <strong>meta-harness search and verifier rewards</strong> for recursively improving agent performance.
        </>,
      ],
      tags: ['Coding Agents', 'Reinforcement Learning', 'Evaluation', 'Multi-Agent Systems', 'Python', 'GCS'],
    },
    {
      company: 'Google',
      title: 'Software Engineer, Search Verticals — Sports',
      location: 'Bengaluru, India',
      period: 'Jul 2023 – Jul 2025',
      highlights: [
        <>
          Shipped <strong>Samsung Galaxy S25 “Now Bar”</strong> by enriching <strong>LLM-generated sports updates</strong> with <strong>real-time first- and third-party data</strong> for <strong>hundreds of millions of fans</strong> worldwide.
        </>,
        <>
          Improved engagement in the <strong>Google Sports MiniApp</strong> by enabling discovery and follow of teams and leagues through search; designed backend pipelines with <strong>Knowledge Graph queries</strong> to maintain active datasets across <strong>50+ locales</strong>.
        </>,
        <>
          Automated the migration of <strong>1,500+ server platform nodes</strong> to a new integration-testing framework, reducing manual effort and <strong>saving an estimated several decades of cumulative engineering effort</strong>.
        </>,
      ],
      tags: [
        'Java',
        'Python',
        'C++',
        'Knowledge Graphs',
        'Search Engines',
        'Protocol Buffers',
        'LLM Productionization',
        'Realtime Systems',
        'Data Quality',
        'Testing Infrastructure',
      ],
    },
    {
      company: 'Summer of Bitcoin',
      title: 'Open Source Contributor (bcoin)',
      location: 'Remote',
      period: 'Jul 2022 – Sep 2022',
      companyLink: 'https://www.summerofbitcoin.org/',
      companyLogo: sobLogo,
      highlights: [
        <>
          Contributed to <strong>bcoin</strong>, a production-grade <strong>Bitcoin full node and wallet</strong> in JavaScript, focusing on scalability, reliability, and protocol maturity.
        </>,
        <>
          Implemented <strong>feature upgrades aligned with modern Bitcoin standards</strong>, including{' '}
          <a 
            href="https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--link-color)] underline hover:text-[var(--link-color)]/80"
          >
            Bech32m
          </a>
          {' '}address support, BIP49/BIP84 flows, pruned node services, and{' '}
          <a 
            href="https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--link-color)] underline hover:text-[var(--link-color)]/80"
          >
            Taproot
          </a>
          -adjacent functionality.
        </>,
        <>
          Expanded <strong>automated test coverage</strong> to protect backward compatibility and harden the node against production edge cases.
        </>,
        <>
          Mentored contributors on <strong>Bitcoin architecture, consensus mechanics, and protocol fundamentals</strong>.
        </>,
      ],
      tags: [
        'Blockchain',
        'Bitcoin',
        'Cryptography',
        'Cryptocurrency',
        'Open-Source Development',
        'Git',
        'JavaScript',
      ],
    },
  ];


  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader 
          title="Experience" 
          subtitle="Building large-scale systems and LLM-powered experiences"
        />
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
