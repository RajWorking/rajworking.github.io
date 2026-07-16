import { SectionHeader } from './section-header';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { GraduationCap, ExternalLink } from 'lucide-react';

interface PublicationProps {
  title: string;
  authors?: string;
  venue: string;
  year?: string;
  paperUrl?: string;
}

function PublicationItem({ title, authors, venue, year, paperUrl }: PublicationProps) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-[var(--link-color)]/10 rounded-lg shrink-0">
          <GraduationCap className="w-5 h-5 text-[var(--link-color)]" />
        </div>
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-lg font-semibold leading-tight mb-2">{title}</h3>
            {authors && (
              <p className="text-sm text-muted-foreground mb-1">{authors}</p>
            )}
            <div className="flex items-center gap-2 text-sm">
              <span className="font-mono text-[var(--link-color)]">{venue}</span>
              {year && (
                <>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{year}</span>
                </>
              )}
            </div>
          </div>
          {paperUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={paperUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View paper
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

export function PublicationsSection() {
  const publications: PublicationProps[] = [
    {
      title: 'Mind the Gap: Multilingual Divide in LLM Bias Detection and Reasoning',
      venue: 'ACL Student Research Workshop',
      year: '2026',
      paperUrl: 'https://openreview.net/pdf?id=xtOfzwKwXN',
    },
    {
      title: 'Public blockchain-envisioned security scheme using post quantum lattice-based aggregate signature for internet of drones applications',
      venue: 'IEEE Transactions on Vehicular Technology',
      year: '2023',
      paperUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=W2EjY_EAAAAJ&citation_for_view=W2EjY_EAAAAJ:u5HHmVD_uO8C',
    },
    {
      title: 'Blockchain-based efficient access control with handover policy in IoV-enabled intelligent transportation system',
      venue: 'IEEE Transactions on Vehicular Technology',
      year: '2023',
      paperUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=W2EjY_EAAAAJ&citation_for_view=W2EjY_EAAAAJ:qjMakFHDy7sC',
    },
    {
      title: 'An efficient and secure post-quantum multi-authority ciphertext-policy attribute-based encryption method using lattice',
      venue: 'IEEE INFOCOM - Conference on Computer Communications Workshop',
      year: '2023',
      paperUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=W2EjY_EAAAAJ&citation_for_view=W2EjY_EAAAAJ:9yKSN-GCB0IC',
    },
    {
      title: 'Cloud-assisted security framework for drone-enabled offshore communications',
      venue: 'IEEE INFOCOM - Conference on Computer Communications Workshop',
      year: '2023',
      paperUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=W2EjY_EAAAAJ&citation_for_view=W2EjY_EAAAAJ:2osOgNQ5qMEC',
    },
    {
      title: 'QuickSync: A quickly synchronizing PoS-based blockchain protocol',
      venue: 'IEEE International Conference on Blockchain and Cryptocurrency (ICBC)',
      year: '2023',
      paperUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=W2EjY_EAAAAJ&citation_for_view=W2EjY_EAAAAJ:d1gkVwhDpl0C',
    }
  ];

  

  return (
    <section id="publications" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader 
          title="Publications" 
          subtitle="Research across language models, security, and distributed systems"
        />
        
        <div className="max-w-4xl space-y-4">
          {publications.map((pub, index) => (
            <PublicationItem key={index} {...pub} />
          ))}
        </div>
      </div>
    </section>
  );
}
