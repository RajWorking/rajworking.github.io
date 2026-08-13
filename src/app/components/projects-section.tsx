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
      description: 'An extensible execution framework that turns conversational intent into safe, auditable real-world actions.',
      highlights: [
        'Decoupled providers, domains, and messaging channels through pluggable adapters around a reusable agent loop',
        'Required explicit approval through a propose → confirm → execute protocol before any costly or state-changing action',
        'Made sessions reconstructable and tamper-evident with durable plans and append-only SHA-256 hash-chained audit logs',
      ],
      tags: ['Python', 'FastAPI', 'SQLite', 'Agent Safety', 'Tool Use'],
      githubUrl: 'https://github.com/RajWorking/Agentic-Concierge',
    },
    {
      title: 'TaskWeaver',
      period: 'Aug 2025 – Nov 2025',
      description: 'A hypernetwork that adapts a language model to each prompt by generating input-specific LoRA weights on the fly.',
      highlights: [
        'Learned a task-label-free mapping from semantic prompt embeddings to model adaptations',
        'Built dynamic LoRA layers and a training and evaluation stack spanning Pythia, Gemma, and Qwen',
        'Improved over mixed-LoRA baselines on held-out RACE (18.7% → 25.1%) and SVAMP (4.67% → 16.3%)',
      ],
      tags: ['PyTorch', 'LoRA', 'Hypernetworks', 'Model Adaptation', 'Multi-Task Learning'],
      githubUrl: 'https://github.com/RajWorking/taskweaver',
    },
    {
      title: 'ToolsmithBench',
      period: 'Spring 2026',
      description: 'A benchmark for whether agents can build a durable toolbox—not merely call tools they are given.',
      highlights: [
        'Evaluates tool authoring, repair, validation, and reuse across sequential task families with hidden tests',
        'Compares persistent and non-persistent agents through success, reuse, cost, latency, and amortization reports',
        'Persistent GPT-5.4 runs improved success from 33.3% to 76.7% on the user-spending task sequence',
      ],
      tags: ['Python', 'AI Agents', 'Benchmarking', 'Persistent Agents', 'Hidden Tests'],
      githubUrl: 'https://github.com/RajWorking/ToolsmithBench',
    },
    {
      title: '3D Voxel Packing',
      period: 'Spring 2026',
      description: 'An objective frontier-model evaluation of spatial planning under hard geometric constraints.',
      highlights: [
        'Requires agents to rotate and place irregular voxel objects while minimizing collision-free bounding-box volume',
        'Built a geometry verifier and 3D visualizer to separate reasoning failures from formatting and parsing errors',
        'Evaluated GPT-5.4, Claude Opus 4.6, and Gemini 3.1 Pro; no model solved the task reliably at pass@2',
      ],
      tags: ['Python', 'Spatial Reasoning', 'Frontier Models', 'Model Evaluation', '3D'],
      githubUrl: 'https://github.com/RajWorking/3D-Voxel-Packing',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader 
          title="Projects" 
          subtitle="Building adaptive models, capable agents, and evaluations that reveal where they fail"
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
