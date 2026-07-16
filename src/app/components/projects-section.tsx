import { SectionHeader } from './section-header';
import { Card } from './ui/card';
import { TagChip } from './tag-chip';
import { Button } from './ui/button';
import { Github, ExternalLink, Calendar } from 'lucide-react';

interface ProjectProps {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

function ProjectCard({ title, period, description, highlights, tags, githubUrl, liveUrl }: ProjectProps) {
  return (
    <Card className="h-full rounded-2xl border-zinc-200/80 bg-white p-6 md:p-7 flex flex-col transition-all duration-300 group hover:-translate-y-1 hover:border-[var(--link-color)]/30 hover:shadow-xl hover:shadow-cyan-950/5">
      <div className="space-y-4 flex-1">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-2xl font-semibold group-hover:text-[var(--link-color)] transition-colors">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground/80">{description}</p>

        {/* Highlights */}
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-foreground/70">
              <span className="text-[var(--link-color)] mt-1 shrink-0">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-6">
        {tags.map((tag) => (
          <TagChip key={tag} label={tag} />
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 pt-4 border-t border-border mt-4">
        {githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View repository
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Read More
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
}

export function ProjectsSection() {
  const projects: ProjectProps[] = [
    {
      title: 'Agentic Concierge',
      period: 'Mar 2026 – Apr 2026',
      description: 'A safety-first harness for agents that book rides and appointments end to end.',
      highlights: [
        'Designed pluggable provider and domain adapters so one agent loop can discover, compare, and execute across services',
        'Added a propose-then-commit gate requiring explicit user confirmation before every state-changing action',
        'Built append-only SHA-256 hash-chained audit logs to detect replay, parameter substitution, and tampering',
      ],
      tags: ['Python', 'FastAPI', 'SQLite', 'Agent Safety', 'Tool Use'],
      githubUrl: 'https://github.com/RajWorking/Agentic-Concierge',
    },
    {
      title: 'TaskWeaver',
      period: 'Aug 2025 – Nov 2025',
      description: 'Instance-level language-model adaptation through dynamically generated LoRA weights.',
      highlights: [
        'Generated per-input LoRA weights from semantic prompt embeddings without relying on task labels',
        'Learned a universal adaptation mapping across Pythia, Gemma, and Qwen model families',
        'Outperformed mixed-LoRA baselines on held-out RACE and SVAMP evaluations',
      ],
      tags: ['PyTorch', 'LoRA', 'Hypernetworks', 'Model Adaptation', 'Multi-Task Learning'],
      githubUrl: 'https://github.com/RajWorking/taskweaver',
    },
    {
      title: 'ToolsmithBench',
      period: 'Spring 2026',
      description: 'An agent benchmark for authoring, testing, maintaining, and reusing tools over time.',
      highlights: [
        'Moves beyond fixed tool-use benchmarks to measure whether agents can expand their own action space',
        'Evaluates tool lifecycle capabilities including implementation, debugging, maintenance, and reuse',
      ],
      tags: ['Python', 'AI Agents', 'Benchmarking', 'Tool Learning', 'Evaluation'],
      githubUrl: 'https://github.com/RajWorking/ToolsmithBench',
    },
    {
      title: '3D Voxel Packing',
      period: 'Spring 2026',
      description: 'A tool-augmented frontier-model evaluation for multi-turn spatial reasoning.',
      highlights: [
        'Challenges agents to pack voxelized 3D objects into the smallest collision-free bounding box',
        'Exposes place, rotate, and collision-check actions to test planning across multiple turns',
      ],
      tags: ['Python', 'Spatial Reasoning', 'Tool Use', 'Model Evaluation', '3D'],
      githubUrl: 'https://github.com/RajWorking/3D-Voxel-Packing',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader 
          title="Projects" 
          subtitle="Recent work in agent safety, adaptation, and evaluation"
        />
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
