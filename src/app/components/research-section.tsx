import { SectionHeader } from './section-header';
import { Card } from './ui/card';
import { TagChip } from './tag-chip';
import { GraduationCap } from 'lucide-react';

export function ResearchSection() {
  const courses = [
    'LLM Systems',
    'Deep Learning Systems',
    'Generative AI',
    'LLM Applications',
    'Advanced NLP',
    'Deep Reinforcement Learning',
  ];

  return (
    <section id="research" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader 
          title="Research" 
          subtitle="Reliability and evaluation in LLM systems"
        />
        
        <div className="grid lg:grid-cols-[minmax(0,1fr)_17rem] gap-8 items-stretch">
          {/* Research Spotlight */}
          <div>
            <Card className="h-full p-8 bg-gradient-to-br from-white to-blue-50/30 border-2 border-[var(--link-color)]/20">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-[var(--link-color)]/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-[var(--link-color)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Contextual Faithfulness in Post-Trained LLMs
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono">
                      Advisor: Prof. Yonatan Bisk • CMU SCS (LTI/MIIS) • Under review at EMNLP 2026
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-foreground/80">
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--link-color)] font-bold mt-0.5">→</span>
                    <p>
                      <strong>Goal:</strong> Improve how faithfully models follow relevant context while preserving their parametric knowledge and general capabilities.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--link-color)] font-bold mt-0.5">→</span>
                    <p>
                      <strong>Approach:</strong> Evaluating consistent and counterfactual data augmentation across supervised fine-tuning and direct preference optimization.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  <TagChip label="RAG" />
                  <TagChip label="Contextual Faithfulness" />
                  <TagChip label="Post-Training" />
                  <TagChip label="Evaluation" />
                  <TagChip label="LLM Systems" />
                </div>
              </div>
            </Card>
          </div>

          {/* Coursework */}
          <div className="h-full">
            {/* Coursework */}
            <Card className="h-full p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[var(--link-color)]" />
                Coursework
              </h3>
              <div className="flex flex-wrap gap-2">
                {courses.map((course) => (
                  <TagChip key={course} label={course} variant="outline" />
                ))}
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}
