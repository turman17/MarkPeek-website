import { Fragment, type ReactNode } from 'react';

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g;

/** Renders a copy string with **bold**, [link](href) and `code` markers. */
export default function Rich({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        let node: ReactNode = part;
        if (part.startsWith('**') && part.endsWith('**')) {
          node = <strong>{part.slice(2, -2)}</strong>;
        } else if (part.startsWith('`') && part.endsWith('`')) {
          node = <code>{part.slice(1, -1)}</code>;
        } else if (part.startsWith('[')) {
          const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
          if (m) {
            const external = /^https?:/.test(m[2]);
            node = (
              <a href={m[2]} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
                {m[1]}
              </a>
            );
          }
        }
        return <Fragment key={i}>{node}</Fragment>;
      })}
    </>
  );
}
