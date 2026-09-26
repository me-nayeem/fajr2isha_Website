export default function Footer({ repoUrl }) {
  return (
    <footer className="border-t border-ink-line bg-ink px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-parchment-dim sm:flex-row">
        <p>Fajr2Isha</p>
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-gold"
        >
          View on GitHub
        </a>
      </div>
    </footer>
  );
}
