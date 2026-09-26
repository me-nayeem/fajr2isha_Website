import Reveal from "./Reveal";

const STACK = [
  "Flutter",
  "Dart",
  "Riverpod",
  "Drift (SQLite)",
  "adhan",
  "flutter_local_notifications",
];

export default function TechStackSection() {
  return (
    <section className="bg-ink px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-wide text-parchment-dim/70">
            Built with
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {STACK.map((tool) => (
              <span
                key={tool}
                className="font-display text-lg text-parchment-dim"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
