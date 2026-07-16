import { Linkedin, Github, GraduationCap, ArrowDownRight } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from '../../assets/profile_img.png';

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,rgba(8,145,178,0.12),transparent_30%),linear-gradient(to_bottom,#f8fdff,white_70%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-4">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--link-color)]">
                ML research engineer
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
                Raj Maheshwari
              </h1>
              <p className="max-w-3xl text-2xl md:text-3xl leading-snug text-zinc-700">
                I build reliable learning systems for <span className="text-zinc-950">language models</span> and <span className="text-zinc-950">coding agents</span>.
              </p>
              <p
                className="
                  inline-flex flex-wrap items-center gap-x-3 gap-y-2
                  text-lg md:text-xl
                  font-medium
                  text-zinc-700
                "
                style={{ fontFamily: "EB Garamond, serif" }}
              >
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5">
                  ML Research Intern @ <span className="font-semibold text-zinc-900">OpenHands</span>
                </span>
              
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5">
                  MS in <span className="font-semibold text-zinc-900">ML/NLP</span> @{" "}
                  <span className="font-semibold text-zinc-900">CMU</span>
                </span>

                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5">
                  Previously <span className="font-semibold text-zinc-900">SWE</span> @{" "}
                  <span className="font-semibold">
                    <span style={{ color: "#4285F4" }}>G</span>
                    <span style={{ color: "#DB4437" }}>o</span>
                    <span style={{ color: "#F4B400" }}>o</span>
                    <span style={{ color: "#4285F4" }}>g</span>
                    <span style={{ color: "#0F9D58" }}>l</span>
                    <span style={{ color: "#DB4437" }}>e</span>
                  </span>
                </span>

              </p>
            </div>

            {/* About Section */}
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                At <strong>OpenHands</strong>, advised by <strong>Prof. Graham Neubig</strong>, I turn large-scale, real-world agent trajectories into verifiable reinforcement-learning tasks and build graders that combine deterministic tests with structured LLM judgments.
              </p>
              <p>
                Previously, I spent <strong>2 years at Google</strong> solving challenging product and infrastructure problems—from context engineering for Gemini-powered experiences on Samsung's Now Bar to integration-testing systems operating at Google scale.
              </p>
            </div>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 font-medium text-[var(--link-color)] hover:text-[var(--link-hover)]"
            >
              Explore my work <ArrowDownRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right: Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="space-y-6 w-80 md:w-[22rem] lg:w-[26rem]">
              <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                <div className="w-80 h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={profileImage}
                    alt="Raj Maheshwari"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Social Buttons */}
              <div className="flex justify-center gap-3">
                <Button variant="outline" asChild className="bg-[#0A66C2] text-white border-[#0A66C2] hover:bg-[#004182] hover:text-white hover:border-[#004182]">
                  <a
                    href="https://www.linkedin.com/in/raj-maheshwari-awesome/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild className="bg-[#24292e] text-white border-[#24292e] hover:bg-black hover:text-white hover:border-black">
                  <a
                    href="https://github.com/RajWorking/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild className="bg-[#4285F4] text-white border-[#4285F4] hover:bg-[#1a73e8] hover:text-white hover:border-[#1a73e8]">
                  <a
                    href="https://scholar.google.com/citations?user=W2EjY_EAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Scholar"
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Scholar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
