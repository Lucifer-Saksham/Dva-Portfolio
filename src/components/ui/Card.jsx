import { cn } from '../../lib/cn'

export function Card({ className, children }) {
  return <div className={cn('glass p-5 sm:p-6', className)}>{children}</div>
}

export function CardHeader({ className, children }) {
  return <div className={cn('flex items-start justify-between gap-4', className)}>{children}</div>
}

export function CardTitle({ className, children }) {
  return (
    <div className={cn('text-sm font-semibold text-zinc-50', className)}>
      {children}
    </div>
  )
}

export function CardMeta({ className, children }) {
  return (
    <div className={cn('text-xs text-zinc-300/70 leading-relaxed', className)}>
      {children}
    </div>
  )
}

