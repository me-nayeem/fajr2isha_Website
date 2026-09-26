import Reveal from "./Reveal";

const STEPS = [
  {
    title: "Download the APK",
    body: "Tap the button above from your Android phone.",
  },
  {
    title: "Allow this install",
    body: "Android will ask for permission to install from this source the first time — that's expected, since this isn't from the Play Store.",
  },
  {
    title: "Open Fajr2Isha",
    body: "Set your location for automatic prayer times, or enter them manually in Settings.",
  },
];

export default function DownloadSection({ downloadUrl }) {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 sm:py-32">
      <div
        className="animate-sky absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(120deg, var(--color-fajr), var(--color-maghrib), var(--color-isha))",
        }}
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-parchment sm:text-4xl">
            Get Fajr2Isha
          </h2>
          <p className="mt-4 text-parchment-dim">
            Free, offline, and installed directly — the same way F-Droid apps
            are, no Play Store account needed.
          </p>
          <a
            href={downloadUrl}
            className="mt-8 inline-block rounded-full bg-gold px-8 py-3 font-medium text-ink transition-colors hover:bg-gold-bright"
          >
            Download for Android
          </a>
        </Reveal>

        <div className="mt-16 grid gap-8 text-left sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <p className="font-display text-2xl text-gold">{i + 1}</p>
              <p className="mt-2 font-medium text-parchment">{step.title}</p>
              <p className="mt-1 text-sm text-parchment-dim">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
