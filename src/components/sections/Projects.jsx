import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { motion } from 'framer-motion'
import { GitBranch, TrendingUp, Activity, Gauge } from 'lucide-react'
import { portfolio } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { Pill } from '../ui/Pill'
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal'

function MiniTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-2xl border border-white/10 bg-ink/80 backdrop-blur-xl px-3 py-2 shadow-glass">
      <div className="text-[11px] text-zinc-300/70">{label}</div>
      <div className="mt-0.5 text-xs font-semibold text-zinc-50">
        {payload[0].value}
      </div>
    </div>
  )
}

function Kpi({ icon: Icon, label, value, tone = 'cyan' }) {
  const toneCls =
    tone === 'cyan'
      ? 'text-cyan-200 bg-cyan-400/10 border-cyan-400/20'
      : 'text-purple-200 bg-purple-400/10 border-purple-400/20'
  return (
    <div className={`rounded-2xl border px-4 py-3 ${toneCls}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="text-[11px] text-zinc-200/70">{label}</div>
        <Icon className="h-4 w-4 opacity-90" />
      </div>
      <div className="mt-2 text-sm font-semibold text-zinc-50">{value}</div>
    </div>
  )
}

function DashboardPreview({ type }) {
  const commonAxis = {
    tick: { fill: 'rgba(244,244,245,0.55)', fontSize: 11 },
    axisLine: false,
    tickLine: false,
  }

  const usedCars = [
    { m: 'Jan', price: 64, mileage: 18 },
    { m: 'Feb', price: 62, mileage: 19 },
    { m: 'Mar', price: 60, mileage: 22 },
    { m: 'Apr', price: 58, mileage: 24 },
    { m: 'May', price: 56, mileage: 26 },
    { m: 'Jun', price: 55, mileage: 28 },
    { m: 'Jul', price: 53, mileage: 29 },
  ]

  const fuel = [
    { name: 'Diesel', value: 46, color: 'rgba(34,211,238,0.85)' },
    { name: 'Petrol', value: 38, color: 'rgba(192,132,252,0.75)' },
    { name: 'Other', value: 16, color: 'rgba(255,255,255,0.28)' },
  ]

  const capstone = [
    { k: 'Week 1', a: 28, b: 19 },
    { k: 'Week 2', a: 34, b: 23 },
    { k: 'Week 3', a: 31, b: 26 },
    { k: 'Week 4', a: 42, b: 29 },
    { k: 'Week 5', a: 47, b: 33 },
  ]

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10" />
      <div className="relative p-5 sm:p-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-7 rounded-3xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs text-zinc-300/70">
                {type === 'usedCars' ? 'Resale Trend' : 'Dashboard Activity'}
              </div>
              <div className="text-xs text-zinc-200/70">synthetic preview</div>
            </div>
            <div className="mt-3 h-44">
              <ResponsiveContainer width="100%" height="100%">
                {type === 'usedCars' ? (
                  <AreaChart data={usedCars} margin={{ left: -18, right: 4 }}>
                    <defs>
                      <linearGradient id="pFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(34,211,238,0.55)" />
                        <stop offset="100%" stopColor="rgba(34,211,238,0.05)" />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="m" {...commonAxis} />
                    <YAxis {...commonAxis} />
                    <Tooltip content={<MiniTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="rgba(34,211,238,0.95)"
                      strokeWidth={2}
                      fill="url(#pFill)"
                      dot={false}
                    />
                  </AreaChart>
                ) : (
                  <BarChart data={capstone} margin={{ left: -18, right: 4 }}>
                    <XAxis dataKey="k" {...commonAxis} />
                    <YAxis {...commonAxis} />
                    <Tooltip content={<MiniTooltip />} />
                    <Bar dataKey="a" radius={[8, 8, 0, 0]} fill="rgba(34,211,238,0.70)" />
                    <Bar dataKey="b" radius={[8, 8, 0, 0]} fill="rgba(192,132,252,0.60)" />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-3">
            <Kpi
              icon={TrendingUp}
              label={type === 'usedCars' ? 'Price Signal' : 'Insight Velocity'}
              value={type === 'usedCars' ? '+12.4%' : '+8.6%'}
              tone="cyan"
            />
            <Kpi
              icon={Activity}
              label={type === 'usedCars' ? 'Mileage Impact' : 'Trend Stability'}
              value={type === 'usedCars' ? '-0.31 corr' : '0.92 score'}
              tone="purple"
            />
            <Kpi
              icon={Gauge}
              label={type === 'usedCars' ? 'Market Coverage' : 'Dataset Coverage'}
              value={type === 'usedCars' ? '98%' : '94%'}
              tone="cyan"
            />
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-[11px] text-zinc-300/70">
                {type === 'usedCars' ? 'Fuel Mix' : 'Segments'}
              </div>
              <div className="mt-2 h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={fuel}
                      dataKey="value"
                      innerRadius={18}
                      outerRadius={30}
                      paddingAngle={2}
                    >
                      {fuel.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<MiniTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-300/65">
                <span>Diesel</span>
                <span className="text-cyan-200">46%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="glass p-6 sm:p-7 ring-glow"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-7">
        <div className="lg:w-[54%]">
          <DashboardPreview type={project.previewType} />
        </div>

        <div className="flex-1">
          <Reveal>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs text-zinc-300/70">
                  Case study · {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-zinc-50">
                  {project.title}
                </h3>
              </div>
              <Button
                href={project.github}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="shrink-0"
              >
                <GitBranch className="h-4 w-4" />
                GitHub
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mt-4 text-sm sm:text-base text-zinc-200/75 leading-relaxed">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-5">
              <div className="text-xs font-semibold text-zinc-50 tracking-tight">
                Key insights
              </div>
              <ul className="mt-3 space-y-2">
                {project.insights.map((x) => (
                  <li key={x} className="flex gap-3 text-sm text-zinc-200/75">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300/90 shadow-glowCyan" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s, i) => (
                <Pill key={s} tone={i % 2 === 0 ? 'cyan' : 'purple'}>
                  {s}
                </Pill>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-max">
        <SectionHeading
          title="Analytics case studies."
          subtitle="Dashboard-first projects that surface patterns, quantify impact, and communicate insights clearly."
        />

        <Stagger className="mt-10 space-y-5">
          {portfolio.projects.map((p, idx) => (
            <StaggerItem key={p.title}>
              <ProjectCard project={p} index={idx} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

