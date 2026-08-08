'use client';

import { useEffect, useRef, useState } from 'react';

type StyleDef = {
  name: string;
  body: string;
  heading: string;
  bg: string;
  text: string;
  soft: string;
  link: string;
  codeBg: string;
  quoteBorder: string;
  headingWeight: number;
  underline: boolean;
};

const STYLES: StyleDef[] = [
  {
    name: 'Modern',
    body: "-apple-system, 'Segoe UI', sans-serif",
    heading: "-apple-system, 'Segoe UI', sans-serif",
    bg: '#ffffff', text: '#333333', soft: '#666666', link: '#0969da',
    codeBg: '#f4f4f4', quoteBorder: '#dddddd', headingWeight: 700, underline: false,
  },
  {
    name: 'Serif',
    body: "Georgia, 'Times New Roman', serif",
    heading: "Georgia, 'Times New Roman', serif",
    bg: '#ffffff', text: '#222222', soft: '#555555', link: '#7a5c2e',
    codeBg: '#f7f5f0', quoteBorder: '#b8a98a', headingWeight: 600, underline: false,
  },
  {
    name: 'GitHub',
    body: "-apple-system, 'Segoe UI', sans-serif",
    heading: "-apple-system, 'Segoe UI', sans-serif",
    bg: '#ffffff', text: '#1f2328', soft: '#59636e', link: '#0969da',
    codeBg: '#f6f8fa', quoteBorder: '#d1d9e0', headingWeight: 600, underline: true,
  },
  {
    name: 'Dark',
    body: "-apple-system, 'Segoe UI', sans-serif",
    heading: "-apple-system, 'Segoe UI', sans-serif",
    bg: '#0d1117', text: '#e6edf3', soft: '#8d96a0', link: '#4493f8',
    codeBg: '#161b22', quoteBorder: '#30363d', headingWeight: 600, underline: true,
  },
];

const CHIPS = ['Raw', ...STYLES.map((s) => s.name)];

export default function QuickLookScene() {
  const [chip, setChip] = useState(0); // 0 = Raw, 1.. = STYLES[chip-1]
  const [held, setHeld] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (held) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setChip(1);
      return;
    }
    const cycle = setInterval(() => {
      setChip((c) => (c + 1) % CHIPS.length);
    }, 2200);
    return () => clearInterval(cycle);
  }, [held]);

  const raw = chip === 0;
  const style = STYLES[raw ? 0 : chip - 1];

  return (
    <div className="scene" ref={sceneRef}>
      <p className="scene-hint" id="scene-hint">Click a style to hold it</p>

      <div className="chips" role="group" aria-labelledby="scene-hint">
        {CHIPS.map((name, i) => (
          <button
            key={name}
            type="button"
            className={`chip${i === chip ? ' chip-active' : ''}`}
            onClick={() => { setChip(i); setHeld(true); }}
          >
            {name}
          </button>
        ))}
      </div>

      <div
        className="ql-window"
        role="img"
        aria-label={`A macOS Quick Look panel previewing README.md, shown ${raw ? 'as raw text' : `in the ${style.name} style`}`}
      >
        <div className="ql-titlebar">
          <span className="ql-dot" />
          <span className="ql-title">README.md</span>
          <span className="ql-open">Open with Xcode</span>
        </div>

        {raw ? (
          <div className="ql-content ql-raw">
            <pre>{`# Release Notes

Shipping **v2.0** this week - the
\`quick-look\` branch is merged.

> Previews render instantly now.

- [x] Styled headings
- [x] Code blocks
- [x] Dark mode`}</pre>
          </div>
        ) : (
          <div
            className="ql-content"
            style={{ background: style.bg, color: style.text, fontFamily: style.body }}
          >
            <h4
              style={{
                fontFamily: style.heading,
                fontWeight: style.headingWeight,
                borderBottom: style.underline ? `1px solid ${style.quoteBorder}` : 'none',
              }}
            >
              Release Notes
            </h4>
            <p>
              Shipping <strong>v2.0</strong> this week — the{' '}
              <code style={{ background: style.codeBg }}>quick-look</code> branch is merged.
            </p>
            <blockquote style={{ borderLeft: `3px solid ${style.quoteBorder}`, color: style.soft }}>
              Previews render instantly now.
            </blockquote>
            <ul>
              <li>Styled headings</li>
              <li>Code blocks</li>
              <li style={{ color: style.link }}>Dark mode</li>
            </ul>
          </div>
        )}

        <div className="ql-keyhint" aria-hidden="true">
          <span className="ql-key">space</span>
          <span>to preview</span>
        </div>
      </div>
    </div>
  );
}
