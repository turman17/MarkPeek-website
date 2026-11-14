'use client';

import { useEffect, useState } from 'react';

type Theme = {
  name: string;
  font: string;
  headingFont?: string;
  bg: string;
  text: string;
  heading: string;
  link: string;
  accent: string;
  codeBg: string;
  quoteBorder: string;
  quoteText: string;
  headingWeight: number;
  headingUnderline?: boolean;
  italicQuote?: boolean;
  underlineLinks?: boolean;
  justify?: boolean;
  square?: boolean;
  dash?: boolean;
  codeFont: string;
  size: number;
};

const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const MONO = "ui-monospace, 'SF Mono', Menlo, Consolas, monospace";

/** Light palettes and type choices taken from MarkPeek's built-in themes. */
const THEMES: Theme[] = [
  { name: 'Modern', font: SANS, bg: '#ffffff', text: '#333333', heading: '#1a1a1a', link: '#0969da', accent: '#0969da', codeBg: '#f4f4f4', quoteBorder: '#dddddd', quoteText: '#666666', headingWeight: 700, codeFont: MONO, size: 13 },
  { name: 'Serif', font: "Charter, 'Iowan Old Style', Georgia, serif", bg: '#ffffff', text: '#222222', heading: '#1a1a1a', link: '#7a5c2e', accent: '#7a5c2e', codeBg: '#f7f5f0', quoteBorder: '#b8a98a', quoteText: '#555555', headingWeight: 600, italicQuote: true, codeFont: "Menlo, monospace", size: 13.5 },
  { name: 'GitHub', font: SANS, bg: '#ffffff', text: '#1f2328', heading: '#1f2328', link: '#0969da', accent: '#1f883d', codeBg: '#f6f8fa', quoteBorder: '#d1d9e0', quoteText: '#59636e', headingWeight: 600, headingUnderline: true, codeFont: MONO, size: 13 },
  { name: 'Plain', font: "Helvetica, Arial, sans-serif", bg: '#ffffff', text: '#000000', heading: '#000000', link: '#000000', accent: '#000000', codeBg: '#f0f0f0', quoteBorder: '#000000', quoteText: '#000000', headingWeight: 700, underlineLinks: true, square: true, codeFont: "Courier, monospace", size: 13 },
  { name: 'Paper', font: "'Iowan Old Style', Charter, Georgia, serif", headingFont: SANS, bg: '#fbf8f1', text: '#2c2a25', heading: '#1e1c18', link: '#8b5f3e', accent: '#8b5f3e', codeBg: '#f0ebe0', quoteBorder: '#c9bba3', quoteText: '#5e5a50', headingWeight: 600, italicQuote: true, justify: true, dash: true, codeFont: "Menlo, monospace", size: 13.5 },
  { name: 'Mono', font: MONO, bg: '#fafafa', text: '#24292f', heading: '#000000', link: '#0550ae', accent: '#0550ae', codeBg: '#eff1f3', quoteBorder: '#24292f', quoteText: '#57606a', headingWeight: 700, headingUnderline: true, underlineLinks: true, dash: true, codeFont: MONO, size: 12 },
];

type SceneCopy = {
  hint: string;
  chipsLabel: string;
  rawLabel: string;
  windowAria: string;
  stateRaw: string;
  stateStyled: string;
  openWith: string;
  keyHint: string;
  space: string;
};

const RAW = `# Release Notes

Shipping **v2.0** this week: the
\`quick-look\` branch is merged.

> Previews render instantly now.

- [x] Styled headings
- [x] Code blocks
- [ ] Write the changelog`;

export default function QuickLookScene({ copy }: { copy: SceneCopy }) {
  const [chip, setChip] = useState(1); // 0 = Raw, 1.. = THEMES[chip - 1]
  const [held, setHeld] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (held || reduced) return;
    const cycle = setInterval(() => setChip((c) => (c + 1) % (THEMES.length + 1)), 2400);
    return () => clearInterval(cycle);
  }, [held, reduced]);

  const raw = chip === 0;
  const t = THEMES[raw ? 0 : chip - 1];
  const names = [copy.rawLabel, ...THEMES.map((x) => x.name)];
  const state = raw ? copy.stateRaw : copy.stateStyled.replace('{name}', t.name);
  const bullet = t.dash ? '–' : '•';

  return (
    <div className="scene">
      <p className="scene-hint" id="scene-hint">{copy.hint}</p>

      <div className="chips" role="group" aria-labelledby="scene-hint">
        {names.map((name, i) => (
          <button
            key={name}
            type="button"
            className={`chip${i === chip ? ' chip-active' : ''}`}
            aria-pressed={i === chip}
            aria-label={`${copy.chipsLabel}: ${name}`}
            onClick={() => {
              setChip(i);
              setHeld(true);
            }}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="ql-window" role="img" aria-label={copy.windowAria.replace('{state}', state)}>
        <div className="ql-titlebar" aria-hidden="true">
          <span className="ql-dot" />
          <span className="ql-title">README.md</span>
          <span className="ql-open">{copy.openWith}</span>
        </div>

        {raw ? (
          <div className="ql-content ql-raw" aria-hidden="true">
            <pre>{RAW}</pre>
          </div>
        ) : (
          <div
            className="ql-content"
            aria-hidden="true"
            style={{
              background: t.bg,
              color: t.text,
              fontFamily: t.font,
              fontSize: t.size,
              textAlign: t.justify ? 'justify' : 'left',
              ['--ql-link' as string]: t.link,
            }}
          >
            <div
              className="ql-h"
              style={{
                fontFamily: t.headingFont ?? t.font,
                fontWeight: t.headingWeight,
                color: t.heading,
                borderBottom: t.headingUnderline ? `1px solid ${t.quoteBorder}` : 'none',
              }}
            >
              Release Notes
            </div>
            <p>
              Shipping <strong>v2.0</strong> this week: the{' '}
              <span className="ql-code" style={{ background: t.codeBg, fontFamily: t.codeFont, borderRadius: t.square ? 0 : 4 }}>quick-look</span>{' '}
              branch is{' '}
              <span style={{ color: t.link, textDecoration: t.underlineLinks ? 'underline' : 'none' }}>merged</span>.
            </p>
            <div
              className="ql-quote"
              style={{ borderLeft: `3px solid ${t.quoteBorder}`, color: t.quoteText, fontStyle: t.italicQuote ? 'italic' : 'normal' }}
            >
              Previews render instantly now.
            </div>
            <ul className="ql-list">
              {['Styled headings', 'Code blocks', 'Write the changelog'].map((item, i) => (
                <li key={item}>
                  <span className="ql-bullet" style={{ color: t.accent }}>{bullet}</span>
                  <span style={{ opacity: i < 2 ? 0.6 : 1 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="ql-keyhint" aria-hidden="true">
          <span className="ql-key">{copy.space}</span>
          <span>{copy.keyHint}</span>
        </div>
      </div>
    </div>
  );
}
