import Reveal from "./Reveal";

const BLOCKS = [
  {
    name: "Fajr",
    time: "Before sunrise",
    color: "var(--color-fajr)",
    note: "Pray, then read Qur'an while the day is still quiet.",
  },
  {
    name: "Dhuhr",
    time: "Midday",
    color: "var(--color-dhuhr)",
    note: "A short reset in the middle of the day.",
  },
  {
    name: "Asr",
    time: "Afternoon",
    color: "var(--color-asr)",
    note: "Personal time carved out after you pray.",
  },
  {
    name: "Maghrib",
    time: "Sunset",
    color: "var(--color-maghrib)",
    note: "Evening tasks land here, right after prayer.",
  },
  {
    name: "Isha",
    time: "Night",
    color: "var(--color-isha)",
    note: "Qur'an, then wind down toward sleep.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-ink-soft px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-parchment sm:text-4xl">
            How a day flows
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-5">
          {BLOCKS.map((block, i) => (
            <Reveal key={block.name} delay={i * 0.08}>
              <div
                className="flex h-full flex-col justify-between rounded-2xl p-5"
                style={{ backgroundColor: block.color }}
              >
                <div>
                  <p className="font-display text-lg font-medium text-parchment">
                    {block.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-parchment/70">
                    {block.time}
                  </p>
                </div>
                <p className="mt-6 text-sm text-parchment/90">{block.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
