import { portfolio } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { Card, CardHeader, CardMeta, CardTitle } from '../ui/Card'
import { Stagger, StaggerItem } from '../motion/Reveal'
import { Briefcase, GraduationCap, Trophy, Sparkles } from 'lucide-react'

const icons = [Briefcase, GraduationCap, Trophy, Sparkles]

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-max">
        <SectionHeading
          title="Data-driven problem solver."
          subtitle="Analytics engineering mindset, dashboard-first execution, and an obsession with making insights usable."
        />

        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="glass p-6 sm:p-7">
              <div className="text-xs text-zinc-300/70">About</div>
              <div className="mt-3 text-sm sm:text-base text-zinc-200/80 leading-relaxed whitespace-pre-line">
                {portfolio.about}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['EDA', 'Dashboards', 'Data Storytelling', 'Analytics UI'].map(
                  (x, i) => (
                    <span
                      key={x}
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${
                        i % 2 === 0
                          ? 'border-cyan-400/20 bg-cyan-400/10 text-cyan-200'
                          : 'border-purple-400/20 bg-purple-400/10 text-purple-200'
                      }`}
                    >
                      {x}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Stagger className="grid sm:grid-cols-2 gap-4">
              {portfolio.highlightCards.map((c, idx) => {
                const Icon = icons[idx % icons.length]
                return (
                  <StaggerItem key={c.title}>
                    <Card className="h-full">
                      <CardHeader>
                        <div>
                          <CardTitle>{c.title}</CardTitle>
                          <CardMeta className="mt-1">{c.subtitle}</CardMeta>
                        </div>
                        <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/6 grid place-items-center ring-glow">
                          <Icon className="h-4 w-4 text-cyan-200" />
                        </div>
                      </CardHeader>
                      <div className="mt-4 text-sm text-zinc-200/75 leading-relaxed">
                        {c.meta}
                      </div>
                    </Card>
                  </StaggerItem>
                )
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}

