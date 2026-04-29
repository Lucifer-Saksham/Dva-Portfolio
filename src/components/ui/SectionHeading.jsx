import { Reveal } from '../motion/Reveal'

export function SectionHeading({ title, subtitle, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={alignCls}>
      <Reveal>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.06}>
          <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}

