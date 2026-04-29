import { motion } from 'framer-motion'
import { GitBranch, Mail, Link2 } from 'lucide-react'
import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'

export function Navbar({ links }) {
  const nav = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ]

  const iconBtn =
    'h-10 w-10 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/16'

  return (
    <div className="sticky top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink/95 via-ink/70 to-transparent backdrop-blur-xl" />
      <div className="container-max pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 mb-2 flex items-center justify-between gap-4"
        >
          <a href="#top" className="group flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-white/6 border border-white/10 grid place-items-center ring-glow">
              <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-glowCyan" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-zinc-50 tracking-tight">
                Saksham
              </div>
              <div className="text-xs text-zinc-300/70 tracking-tight">
                Analytics / Viz
              </div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1 rounded-3xl border border-white/10 bg-white/5 px-2 py-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-xs font-medium text-zinc-200/85 hover:text-zinc-50 hover:bg-white/6 rounded-2xl transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              className={cn(iconBtn, 'hidden sm:inline-flex')}
              variant="ghost"
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitBranch className="h-4 w-4" />
            </Button>

            <Button
              className={cn(iconBtn, 'hidden sm:inline-flex')}
              variant="ghost"
              href={links.email}
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Button>

            <Button
              className={cn(iconBtn, 'hidden sm:inline-flex')}
              variant="ghost"
              href={links.linkedin || '#'}
              target={links.linkedin ? '_blank' : undefined}
              rel={links.linkedin ? 'noreferrer' : undefined}
              aria-label="LinkedIn"
              aria-disabled={!links.linkedin}
              onClick={(e) => {
                if (!links.linkedin) e.preventDefault()
              }}
            >
              <Link2 className="h-4 w-4" />
            </Button>

            <Button href="#projects" variant="secondary" className="h-10 px-4">
              View work
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

