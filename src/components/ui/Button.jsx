import { cn } from '../../lib/cn'

export function Button({
  as: Comp = 'a',
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-0 disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-400/90 via-cyan-400/70 to-purple-400/80 text-zinc-950 shadow-glowCyan hover:brightness-110',
    secondary:
      'border border-white/12 bg-white/5 text-zinc-100 hover:bg-white/8 hover:border-white/18',
    ghost: 'text-zinc-200 hover:bg-white/6 border border-transparent',
  }

  const sizes = {
    md: 'h-11 px-5 text-sm',
    lg: 'h-12 px-6 text-sm sm:text-base',
    sm: 'h-10 px-4 text-sm',
  }

  return (
    <Comp
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
}

