import { portfolio } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal'
import { BriefcaseBusiness } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-max">
        <SectionHeading
          title="Experience timeline."
          subtitle="Dashboard UI experience + analytics-centric projects — optimized for shipping clear, data-backed interfaces."
        />

        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="glass p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/6 grid place-items-center ring-glow">
                  <BriefcaseBusiness className="h-4 w-4 text-purple-200" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-50">
                    Work focus
                  </div>
                  <div className="text-xs text-zinc-300/70">
                    dashboards · analytics UI · systems
                  </div>
                </div>
              </div>
              <div className="mt-5 text-sm text-zinc-200/75 leading-relaxed">
                I build interfaces that feel like analytics products: crisp, fast, and
                insight-first — with strong information hierarchy and clean visual
                encoding.
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Stagger className="relative pl-6">
              <div className="absolute left-2 top-1 bottom-1 w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-purple-400/40" />
              {portfolio.experience.map((e, idx) => (
                <StaggerItem key={e.role}>
                  <div className="relative mb-4">
                    <div className="absolute -left-[6px] top-6 h-3 w-3 rounded-full bg-ink border border-white/14">
                      <div className="absolute inset-0 m-[2px] rounded-full bg-cyan-300/80 shadow-glowCyan" />
                    </div>
                    <div className="glass p-6 sm:p-7 ring-glow">
                      <Reveal>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-xs text-zinc-300/70">
                              {String(idx + 1).padStart(2, '0')} · {e.org}
                            </div>
                            <div className="mt-2 text-lg font-semibold text-zinc-50 tracking-tight">
                              {e.role}
                            </div>
                          </div>
                          <div className="text-xs text-zinc-300/60">
                            {idx === 0 ? 'ERP dashboards' : idx === 1 ? 'AI projects' : 'freelance'}
                          </div>
                        </div>
                      </Reveal>
                      <Reveal delay={0.06}>
                        <p className="mt-4 text-sm sm:text-base text-zinc-200/75 leading-relaxed">
                          {e.description}
                        </p>
                      </Reveal>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}

