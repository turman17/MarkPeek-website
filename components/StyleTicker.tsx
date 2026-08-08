'use client';

import { useEffect, useState } from 'react';

const FILES = [
  'README.md',
  'notes.md',
  'CHANGELOG.md',
  'meeting-minutes.md',
  'TODO.md',
  'blog-draft.md',
  'CONTRIBUTING.md',
];

export default function StyleTicker() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const cycle = setInterval(() => {
      setLeaving(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % FILES.length);
        setLeaving(false);
      }, 260);
    }, 2400);
    return () => clearInterval(cycle);
  }, []);

  return (
    <p className={`ticker${leaving ? ' ticker-leaving' : ''}`} aria-live="off">
      <span className="ticker-from">{FILES[index]}</span>
      <span className="ticker-arrow" aria-hidden="true">+</span>
      <span className="ticker-key" aria-hidden="true">space</span>
      <span className="ticker-arrow" aria-hidden="true">→</span>
      <span className="ticker-to">beautiful</span>
    </p>
  );
}
