import Image from "next/image";
import Reveal from "./Reveal";

const SHOTS = [
  { src: "/images/screenshot-home.jpeg", label: "Home" },
  { src: "/images/screenshot-addtask.jpeg", label: "Add a task" },
  { src: "/images/screenshot-history.jpeg", label: "History" },
  // { src: "/images/screenshot-learning.jpeg", label: "Learning" },
  { src: "/images/screenshot-settings.jpeg", label: "Settings" },
];

export default function ScreenshotsSection() {
  return (
    <section className="overflow-hidden bg-ink-soft px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-parchment sm:text-4xl">
            A look inside
          </h2>
        </Reveal>

        <div className="mt-14 flex gap-6 overflow-x-auto pb-4">
          {SHOTS.map((shot, i) => (
            <Reveal
              key={shot.label}
              delay={i * 0.08}
              className="shrink-0"
            >
              <div
                className="relative aspect-[3/4] w-64 overflow-hidden rounded-3xl border border-ink-line bg-ink-soft shadow-2xl"
                style={{
                  transform: i % 2 === 0 ? "rotate(-1.5deg)" : "rotate(1.5deg)",
                }}
              >
                <Image
                  src={shot.src}
                  alt={`${shot.label} screen of Fajr2Isha`}
                  fill
                  className="object-contain p-3"
                  sizes="256px"
                />
              </div>
              <p className="mt-3 text-center text-sm text-parchment-dim">
                {shot.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}