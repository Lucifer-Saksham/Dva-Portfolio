import { motion } from 'framer-motion'
import { portfolio } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { Pill } from '../ui/Pill'
import { Stagger, StaggerItem } from '../motion/Reveal'

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-max">
        <SectionHeading
          title="Skills built for analytics workflows."
          subtitle="A focused stack for EDA, visualization, dashboards, and building systems that make insights actionable."
        />

        <Stagger className="mt-10 grid lg:grid-cols-2 gap-4">
          {portfolio.skills.map((block, idx) => (
            <StaggerItem key={block.category}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="glass p-6 sm:p-7 ring-glow"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-semibold tracking-tight text-zinc-50">
                    {block.category}
                  </div>
                  <div className="text-xs text-zinc-300/60">Toolkit</div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {block.items.map((item, i) => (
                    <Pill
                      key={item}
                      tone={(idx + i) % 3 === 0 ? 'cyan' : (idx + i) % 3 === 1 ? 'purple' : 'neutral'}
                      className="hover:brightness-110 transition"
                    >
                      {item}
                    </Pill>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

