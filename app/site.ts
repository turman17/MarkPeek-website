export const SITE_URL = 'https://turman17.github.io/MarkPeek-website/';
export const BASE_PATH = '/MarkPeek-website';
export const REPO_URL = 'https://github.com/turman17/MarkPeek';
export const AUTHOR_URL = 'https://github.com/turman17';
export const SITE_UPDATED = '2026-11-14';

/** The MarkPeek build the guides were tested with (not a release claim). */
export const TESTED_VERSION = '1.0.0';

/**
 * The current public release. On a new release, update these three and SITE_UPDATED;
 * copy strings use {version}, which fillVersion() replaces.
 */
export const APP_VERSION = '1.0.0';
export const RELEASE_DATE = '2026-11-14';
export const RELEASES_URL = `${REPO_URL}/releases/latest`;
export const DMG_URL = `${REPO_URL}/releases/download/v${APP_VERSION}/MarkPeek-v${APP_VERSION}.dmg`;
export const ZIP_URL = `${REPO_URL}/releases/download/v${APP_VERSION}/MarkPeek-v${APP_VERSION}.zip`;
export const INSTALL_SCRIPT_URL = `${REPO_URL}/blob/main/scripts/install.sh`;

export const fillVersion = (s: string) => s.replaceAll('{version}', APP_VERSION);
