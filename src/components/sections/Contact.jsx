import { GitBranch, Link2, Mail, ArrowUpRight } from 'lucide-react'
import { portfolio } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export function Contact() {
  const { links } = portfolio
  const linkedinDisabled = !links.linkedin

  return (
    <section id="contact" className="section">
      <div className="container-max">
        <SectionHeading
          title="Let’s build something insight-first."
          subtitle="If you’re hiring for analytics engineering, data visualization, or dashboard product work, I’d love to connect."
        />

        <div className="mt-10 grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-7 ring-glow">
              <div className="text-xs text-zinc-300/70">Quick links</div>
              <div className="mt-4 grid sm:grid-cols-3 gap-3">
                <Button
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  className="justify-between"
                >
                  <span className="inline-flex items-center gap-2">
                    <GitBranch className="h-4 w-4" /> GitHub
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
                </Button>

                <Button
                  href={links.linkedin || '#'}
                  target={linkedinDisabled ? undefined : '_blank'}
                  rel={linkedinDisabled ? undefined : 'noreferrer'}
                  variant="secondary"
                  className="justify-between"
                  aria-disabled={linkedinDisabled}
                  onClick={(e) => {
                    if (linkedinDisabled) e.preventDefault()
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    <Link2 className="h-4 w-4" /> LinkedIn
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
                </Button>

                <Button href={links.email} variant="secondary" className="justify-between">
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Email
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
                </Button>
              </div>

              {linkedinDisabled ? (
                <div className="mt-4 text-xs text-zinc-300/60">
                  Add your LinkedIn URL in <code className="rounded bg-white/5 px-2 py-1">src/data/portfolio.js</code>.
                </div>
              ) : null}
            </Card>
          </div>

          <div className="lg:col-span-5">
            <Card className="p-6 sm:p-7 ring-glow">
              <div className="text-xs text-zinc-300/70">Signal snapshot</div>
              <div className="mt-4 space-y-3">
                {[
                  { k: 'LeetCode', v: links.leetcodeLabel },
                  { k: 'Rating', v: '1858' },
                  { k: 'Problems', v: '200+' },
                  { k: 'AI projects', v: '10+' },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="text-xs text-zinc-300/70">{x.k}</div>
                    <div className="text-sm font-semibold text-zinc-50">{x.v}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

