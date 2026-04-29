import { portfolio } from '../../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="container-max flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="text-sm text-zinc-300/70">
          <span className="text-zinc-100 font-medium">{portfolio.name}</span> —{' '}
          {portfolio.title}
        </div>
        <div className="text-xs text-zinc-300/60">
          Built with React, Vite, Tailwind, Framer Motion, Recharts.
        </div>
      </div>
    </footer>
  )
}

