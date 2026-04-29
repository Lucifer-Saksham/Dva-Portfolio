import { motion } from 'framer-motion'
import { ArrowRight, GitBranch } from 'lucide-react'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { portfolio } from '../../data/portfolio'

function FloatingPanel({ className, children, delay = 0, duration = 8 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-strong p-4"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade [background-position:center] opacity-100" />
      <div className="absolute inset-0 bg-grid-faint [background-size:theme(backgroundSize.grid)] opacity-[0.35]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />

      <div className="container-max relative pt-16 sm:pt-20 lg:pt-28 pb-10 sm:pb-14">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200/85"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-glowCyan" />
              {portfolio.location} · {portfolio.title}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-50"
            >
              <span className="block">SAKSHAM</span>
              <span className="block text-gradient">MIGLANI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-300/80 leading-relaxed"
            >
              {portfolio.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Button href="#projects" size="lg">
                View Projects <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={portfolio.links.github}
                target="_blank"
                rel="noreferrer"
                size="lg"
                variant="secondary"
              >
                <GitBranch className="h-4 w-4" />
                GitHub
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {portfolio.heroStats.map((s) => (
                <Card key={s.label} className="p-4 sm:p-5">
                  <div className="text-xs text-zinc-300/70">{s.label}</div>
                  <div className="mt-2 text-lg sm:text-xl font-semibold text-zinc-50 tracking-tight">
                    {s.value}
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[420px] lg:min-h-[520px]">
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/3 backdrop-blur-xl shadow-glass ring-glow" />

            <div className="absolute inset-0 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-300/70">Analytics Workspace</div>
                  <div className="mt-1 text-sm font-semibold text-zinc-50 tracking-tight">
                    Insight Console
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-cyan-300/90" />
                  <div className="h-2 w-2 rounded-full bg-purple-300/80" />
                  <div className="h-2 w-2 rounded-full bg-white/30" />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: 'Signal', v: 'High', c: 'text-cyan-200' },
                  { k: 'Latency', v: '42ms', c: 'text-purple-200' },
                  { k: 'Coverage', v: '98%', c: 'text-zinc-50' },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="text-[11px] text-zinc-300/60">{x.k}</div>
                    <div className={`mt-1 text-sm font-semibold ${x.c}`}>{x.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-12 gap-3">
                <div className="col-span-7 rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-zinc-300/70">Trend</div>
                    <div className="text-xs text-cyan-200">+12.4%</div>
                  </div>
                  <div className="mt-3 h-20 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-400/15 to-transparent" />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[34, 41, 52].map((n, i) => (
                      <div
                        key={i}
                        className="h-2 rounded-full bg-white/10 overflow-hidden"
                      >
                        <div
                          className="h-full bg-cyan-300/60"
                          style={{ width: `${n}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-5 rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-zinc-300/70">Segments</div>
                  <div className="mt-3 space-y-2">
                    {[
                      { k: 'A', v: 56, t: 'bg-cyan-300/70' },
                      { k: 'B', v: 28, t: 'bg-purple-300/70' },
                      { k: 'C', v: 16, t: 'bg-white/35' },
                    ].map((r) => (
                      <div key={r.k} className="flex items-center gap-3">
                        <div className="w-5 text-[11px] text-zinc-300/70">
                          {r.k}
                        </div>
                        <div className="h-2 flex-1 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className={`h-full ${r.t}`}
                            style={{ width: `${r.v}%` }}
                          />
                        </div>
                        <div className="w-8 text-right text-[11px] text-zinc-300/70">
                          {r.v}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0">
                <FloatingPanel
                  delay={0.25}
                  duration={9}
                  className="absolute -left-6 top-24 hidden lg:block w-56"
                >
                  <div className="text-xs text-zinc-300/70">Model Confidence</div>
                  <div className="mt-2 flex items-end justify-between">
                    <div className="text-lg font-semibold text-zinc-50">0.92</div>
                    <div className="text-xs text-cyan-200">stable</div>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[92%] bg-gradient-to-r from-cyan-300/80 to-purple-300/60" />
                  </div>
                </FloatingPanel>

                <FloatingPanel
                  delay={0.32}
                  duration={10}
                  className="absolute -right-6 bottom-24 hidden lg:block w-60"
                >
                  <div className="text-xs text-zinc-300/70">Insight Feed</div>
                  <div className="mt-3 space-y-2">
                    {[
                      { k: 'Pricing elasticity', v: '↑' },
                      { k: 'Mileage decay', v: '↓' },
                      { k: 'Brand premium', v: '↑' },
                    ].map((x) => (
                      <div
                        key={x.k}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
                      >
                        <div className="text-[11px] text-zinc-200/80">{x.k}</div>
                        <div className="text-xs text-purple-200">{x.v}</div>
                      </div>
                    ))}
                  </div>
                </FloatingPanel>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/4 px-5 py-4">
          <div className="text-xs sm:text-sm text-zinc-200/80">
            <span className="text-zinc-50 font-semibold">Focus</span>: analytics
            engineering, dashboards, and data storytelling.
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-300/80" />
            <div className="h-2 w-2 rounded-full bg-purple-300/70" />
            <div className="h-2 w-2 rounded-full bg-white/25" />
          </div>
        </div>
      </div>
    </section>
  )
}

