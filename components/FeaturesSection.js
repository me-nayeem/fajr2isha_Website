import Reveal from "./Reveal";

const FEATURES = [
  "Prayer times from your exact location, or set manually",
  "Each prayer carries its own fixed habits and personal tasks",
  "Drag to reorder tasks within a prayer — your order is remembered daily",
  "Works fully offline, no connection required",
  "One daily reminder, at a time you choose",
  "A Learning tab with Qur'an videos and resources",
  "A full history of every day's Consistency Value and feedback",
  "No accounts, no tracking, no ads",
];

export default function FeaturesSection() {
  return (
    <section className="bg-ink px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-parchment sm:text-4xl">
            What&apos;s inside
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature} delay={(i % 4) * 0.06}>
              <div className="flex gap-4 border-t border-ink-line pt-4">
                <span className="mt-1 h-px w-6 shrink-0 bg-gold" />
                <p className="text-parchment-dim">{feature}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
