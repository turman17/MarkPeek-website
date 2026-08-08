'use client';

import { useEffect, useState } from 'react';

const REPO = 'turman17/MarkPeek-releases';
const RELEASES_PAGE = `https://github.com/${REPO}/releases/latest`;

type ReleaseInfo = {
  url: string;
  version: string;
  sizeMB: string | null;
};

// Module-level cache so the API is hit at most once per page load
let cachedFetch: Promise<ReleaseInfo | null> | null = null;

function fetchLatestRelease(): Promise<ReleaseInfo | null> {
  if (!cachedFetch) {
    cachedFetch = fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((release) => {
        if (!release) return null;
        const dmg = release.assets?.find((a: { name: string }) => a.name.endsWith('.dmg'));
        if (!dmg) return null;
        return {
          url: dmg.browser_download_url as string,
          version: String(release.tag_name ?? '').replace(/^v/, ''),
          sizeMB: dmg.size ? (dmg.size / (1024 * 1024)).toFixed(1) : null,
        };
      })
      .catch(() => null);
  }
  return cachedFetch;
}

export default function DownloadButton() {
  const [release, setRelease] = useState<ReleaseInfo | null>(null);

  useEffect(() => {
    fetchLatestRelease().then(setRelease);
  }, []);

  return (
    <>
      <a className="btn btn-primary btn-large" href={release?.url ?? RELEASES_PAGE}>
        {release ? `Download MarkPeek ${release.version}` : 'Download MarkPeek.dmg'}
      </a>
      <p className="fineprint download-meta">
        {release
          ? `Version ${release.version} · ${release.sizeMB ? `${release.sizeMB} MB · ` : ''}.dmg`
          : 'Latest release from GitHub'}
      </p>
    </>
  );
}
