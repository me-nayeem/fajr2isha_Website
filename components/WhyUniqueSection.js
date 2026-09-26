import Reveal from "./Reveal";

export default function WhyUniqueSection() {
  return (
    <section className="bg-ink px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-display text-3xl font-medium leading-snug text-parchment sm:text-4xl">
            Most habit apps sell you a streak and call it motivation.
            <br />
            We&apos;d rather tell you the truth.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl text-parchment-dim">
            No streak counters that reset your progress to zero over one
            missed day. No cheerful praise when you&apos;ve barely shown up.
            Fajr2Isha gives you one honest number and a short message about
            what&apos;s actually happening — so you can trust it, even on the
            days it isn&apos;t good news.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
