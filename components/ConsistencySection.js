import Reveal from "./Reveal";

export default function ConsistencySection() {
  return (
    <section className="bg-ink-soft px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-14 sm:grid-cols-2 sm:items-center">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-parchment sm:text-4xl">
            The Consistency Value
          </h2>
          <p className="mt-5 text-parchment-dim">
            One number, from 0 to 100, weighted toward what actually matters:
            half from your prayers, just under a third from the fixed habits
            around them, and the rest from whatever you&apos;ve added
            yourself.
          </p>
          <p className="mt-4 text-parchment-dim">
            It leans on your last 30 days, but recent days count more than
            older ones — a strong week just now moves the number more than a
            perfect week a month ago. It reflects where you stand today, not
            a lifetime average you can never climb out of.
          </p>

          <div className="mt-8 space-y-3">
            <div className="rounded-xl border border-ink-line bg-ink px-5 py-4">
              <p className="font-display text-2xl text-parchment">88.94</p>
              <p className="mt-1 text-sm text-parchment-dim">
                &ldquo;You completed everything MaShaAllah.&rdquo;
              </p>
            </div>
            <div className="rounded-xl border border-ink-line bg-ink px-5 py-4">
              <p className="font-display text-2xl text-parchment">72.50</p>
              <p className="mt-1 text-sm text-parchment-dim">
                &ldquo;Your consistency this week is similar to last week, no
                major changes.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-ink-line bg-ink p-8">
            <p className="text-sm text-parchment-dim">Weighted from</p>
            <div className="mt-4 flex h-4 overflow-hidden rounded-full">
              <div className="bg-leaf" style={{ width: "50%" }} />
              <div className="bg-gold" style={{ width: "30%" }} />
              <div className="bg-parchment-dim" style={{ width: "20%" }} />
            </div>
            <div className="mt-5 space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-parchment">
                  <span className="h-2.5 w-2.5 rounded-full bg-leaf" />
                  Prayer
                </span>
                <span className="text-parchment-dim">50%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-parchment">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                  Fixed tasks
                </span>
                <span className="text-parchment-dim">30%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-parchment">
                  <span className="h-2.5 w-2.5 rounded-full bg-parchment-dim" />
                  Personal tasks
                </span>
                <span className="text-parchment-dim">20%</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
