import { motion } from 'framer-motion'
import { portfolio } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Stagger, StaggerItem } from '../motion/Reveal'
import { Crown, Code2, Trophy, Medal, Dumbbell } from 'lucide-react'

const iconMap = [Crown, Code2, Trophy, Medal, Dumbbell]

export function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-max">
        <SectionHeading
          title="Achievements & credibility."
          subtitle="Signals that show consistency: competitive programming, leadership, and high-volume delivery."
        />

        <Stagger className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.achievements.map((a, idx) => {
            const Icon = iconMap[idx % iconMap.length]
            return (
              <StaggerItem key={a.title}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                >
                  <Card className="h-full ring-glow">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold text-zinc-50 tracking-tight">
                          {a.title}
                        </div>
                        <div className="mt-2 text-xs text-zinc-300/70 leading-relaxed">
                          {a.meta}
                        </div>
                      </div>
                      <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/6 grid place-items-center">
                        <Icon className="h-4 w-4 text-cyan-200" />
                      </div>
                    </div>
                    <div className="mt-5 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-300/80 to-purple-300/70"
                        style={{ width: `${62 + idx * 7}%` }}
                      />
                    </div>
                  </Card>
                </motion.div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}

