"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

const STARS = [
  { x: 60, y: 60, delay: 0 },
  { x: 140, y: 110, delay: 0.6 },
  { x: 720, y: 70, delay: 1.1 },
  { x: 660, y: 130, delay: 1.7 },
  { x: 100, y: 200, delay: 2.2 },
  { x: 700, y: 210, delay: 0.3 },
];

const HAS_HERO_VIDEO = true;
const HERO_VIDEO_SRC = "/videos/hero-intro.mp4";

function ArchScene() {
  return (
    <svg
      className="absolute inset-0 mx-auto h-full w-full max-w-4xl opacity-90"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="g-fajr" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1b2a4a" />
          <stop offset="100%" stopColor="#0c1e1e" />
        </linearGradient>
        <linearGradient id="g-dhuhr" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d9c9a3" />
          <stop offset="100%" stopColor="#8a774f" />
        </linearGradient>
        <linearGradient id="g-asr" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#93a988" />
          <stop offset="100%" stopColor="#41523c" />
        </linearGradient>
        <linearGradient id="g-maghrib" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0954f" />
          <stop offset="100%" stopColor="#6b3a1c" />
        </linearGradient>
        <linearGradient id="g-isha" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2f55" />
          <stop offset="100%" stopColor="#0c1e1e" />
        </linearGradient>
      </defs>

      <path
        d="M 120 460 L 120 220 Q 120 80 400 40 Q 680 80 680 220 L 680 460"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="6"
      />

      {[
        { x: 175, w: 70, fill: "url(#g-fajr)", h: 300 },
        { x: 255, w: 70, fill: "url(#g-dhuhr)", h: 340 },
        { x: 335, w: 60, fill: "url(#g-asr)", h: 360 },
        { x: 405, w: 70, fill: "url(#g-maghrib)", h: 340 },
        { x: 485, w: 70, fill: "url(#g-isha)", h: 300 },
      ].map((panel, i) => (
        <rect
          key={i}
          x={panel.x}
          y={460 - panel.h}
          width={panel.w}
          height={panel.h}
          rx="30"
          fill={panel.fill}
          stroke="var(--color-gold)"
          strokeWidth="2.5"
        />
      ))}

      <path
        d="M 330 460 Q 330 380 400 380 Q 470 380 470 460 Z"
        fill="var(--color-ink)"
        stroke="var(--color-gold)"
        strokeWidth="3"
      />
      <path
        d="M 340 420 Q 400 340 460 420"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="3"
      />

      {STARS.map((star, i) => (
        <circle
          key={i}
          cx={star.x}
          cy={star.y}
          r="2.5"
          fill="var(--color-gold-bright)"
          className="animate-twinkle"
          style={{ animationDelay: `${star.delay}s` }}
        />
      ))}
    </svg>
  );
}

function UnmuteToggle({ muted, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={muted ? "Unmute intro video" : "Mute intro video"}
      className="absolute bottom-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-ink/60 text-parchment backdrop-blur transition-colors hover:border-gold"
    >
      {muted ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M11 5 6 9H2v6h4l5 4V5Z" fill="currentColor" />
          <path
            d="m16 9 5 6M21 9l-5 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M11 5 6 9H2v6h4l5 4V5Z" fill="currentColor" />
          <path
            d="M15.5 8.5a5 5 0 0 1 0 7M18 6a9 9 0 0 1 0 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}

export default function Hero({ downloadUrl }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted((prev) => {
      const next = !prev;
      if (videoRef.current) videoRef.current.muted = next;
      return next;
    });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-6 text-center">
      {HAS_HERO_VIDEO ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO_SRC}
          autoPlay
          loop
          muted={muted}
          playsInline
        />
      ) : (
        <>
          <div
            className="animate-sky absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(120deg, var(--color-fajr), var(--color-dhuhr), var(--color-asr), var(--color-maghrib), var(--color-isha), var(--color-fajr))",
            }}
          />
          <ArchScene />
        </>
      )}

      <div className="absolute inset-0 bg-ink/70" />

      {HAS_HERO_VIDEO && <UnmuteToggle muted={muted} onToggle={toggleMute} />}

      <motion.div
        className="relative z-10 flex max-w-2xl flex-col items-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="font-display text-5xl font-medium text-parchment sm:text-6xl">
          Fajr2Isha
        </h1>
        <p className="mt-5 text-lg text-parchment-dim sm:text-xl">
          A day organized the way you actually live it — prayer by prayer.
        </p>
        <p className="mt-3 max-w-lg text-sm text-parchment-dim/80">
          An offline companion for the five daily prayers and the habits
          around them. No streaks, no fake praise — just where you actually
          stand.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={downloadUrl}
            className="rounded-full bg-gold px-7 py-3 font-medium text-ink transition-colors hover:bg-gold-bright"
          >
            Download for Android
          </a>
        </div>
      </motion.div>
    </section>
  );
}