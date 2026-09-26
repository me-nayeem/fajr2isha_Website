import Reveal from "./Reveal";

export default function WhatIsSection() {
  return (
    <section className="bg-ink px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2 sm:items-center">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-parchment sm:text-4xl">
            Built around the five prayers, not a generic to-do list
          </h2>
          <p className="mt-5 max-w-md text-parchment-dim">
            Fajr2Isha splits every day into five blocks — Fajr, Dhuhr, Asr,
            Maghrib, and Isha. Each block carries the prayer itself, the
            small habits that naturally sit around it, and whatever else you
            add for that time of day. There&apos;s no separate task list
            fighting for your attention — everything lives where it
            naturally happens.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center sm:justify-end">
          <div className="grid grid-cols-5 gap-2">
            {["bg-fajr", "bg-dhuhr", "bg-asr", "bg-maghrib", "bg-isha"].map(
              (c, i) => (
                <div
                  key={i}
                  className={`h-40 w-9 rounded-full sm:h-52 ${c}`}
                />
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
