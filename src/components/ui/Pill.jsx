import { cn } from '../../lib/cn'

export function Pill({ children, tone = 'cyan', className }) {
  const tones = {
    cyan: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-200',
    purple: 'border-purple-400/20 bg-purple-400/10 text-purple-200',
    neutral: 'border-white/12 bg-white/6 text-zinc-200',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-tight',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

