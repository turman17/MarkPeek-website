'use client';

import { useEffect, useState } from 'react';

const FILES = ['README.md', 'notes.md', 'CHANGELOG.md', 'meeting-minutes.md', 'TODO.md', 'blog-draft.md', 'CONTRIBUTING.md', 'chapter-1.mdx'];

/** Cycles file names in mono type. The first name is rendered on the server so the page reads fine without JS. */
export default function FileTicker({ spaceLabel, result }: { spaceLabel: string; result: string }) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let swap: ReturnType<typeof setTimeout>;
    const cycle = setInterval(() => {
      setLeaving(true);
      swap = setTimeout(() => {
        setIndex((i) => (i + 1) % FILES.length);
        setLeaving(false);
      }, 260);
    }, 2400);
    return () => {
      clearInterval(cycle);
      clearTimeout(swap);
    };
  }, []);

  return (
    <p className={`ticker${leaving ? ' ticker-leaving' : ''}`} aria-live="off">
      <span className="file-chip">{FILES[index]}</span>
      <span className="ticker-arrow" aria-hidden="true">+</span>
      <span className="ticker-key" aria-hidden="true">{spaceLabel}</span>
      <span className="ticker-arrow" aria-hidden="true">→</span>
      <span className="ticker-to">{result}</span>
    </p>
  );
}
