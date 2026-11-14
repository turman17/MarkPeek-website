/**
 * Every user-visible string on the site, per locale.
 *
 * Strings may use three inline markers, rendered by components/Rich.tsx:
 *   **bold text**            -> <strong>
 *   [link text](#privacy)    -> <a href>
 *   `code`                   -> <code>
 */
export type Titled = { title: string; body: string };

export type SiteCopy = {
  nav: {
    ariaLabel: string;
    what: string;
    formats: string;
    themes: string;
    guides: string;
    faq: string;
    /** Nav link to the download section, e.g. "Download" */
    download: string;
  };
  footer: {
    /** e.g. "Made by" - followed by a link to the author */
    madeBy: string;
    /** Label for the language switcher, e.g. "Language" */
    language: string;
    /** e.g. "Version {version}" */
    statusLine: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    ogDescription: string;
    ogImageAlt: string;
    /** Used in the SoftwareApplication structured data */
    appDescription: string;
    heroTitleLine1: string;
    heroTitleLine2: string;
    /** May contain **bold** and `code` */
    heroLede: string;
    /** Hero download button label */
    heroCta: string;
    /** Last word of the ticker: file + space = ... */
    tickerResult: string;
    /** May contain {version} and a [link](#download) */
    heroNote: string;
    scene: {
      hint: string;
      chipsLabel: string;
      rawLabel: string;
      /** `{state}` is replaced with stateRaw or stateStyled */
      windowAria: string;
      stateRaw: string;
      /** `{name}` is replaced with the theme name */
      stateStyled: string;
      openWith: string;
      keyHint: string;
      space: string;
    };
    whatTitle: string;
    whatParas: string[];
    whatFacts: { term: string; detail: string }[];
    formatsTitle: string;
    formatsLede: string;
    formatsNote: string;
    howTitle: string;
    howVideoAria: string;
    howVideoCaption: string;
    steps: Titled[];
    themesTitle: string;
    themesLede: string;
    themes: { name: string; blurb: string }[];
    themesParas: string[];
    inspectorAlt: string;
    builderAlt: string;
    readTitle: string;
    readLede: string;
    readItems: Titled[];
    tourVideoAria: string;
    tourVideoCaption: string;
    mathTitle: string;
    mathParas: string[];
    mathSampleLabel: string;
    mathResultLabel: string;
    mathResultAlt: string;
    exportTitle: string;
    exportLede: string;
    exportItems: Titled[];
    exportAlt: string;
    guidesTitle: string;
    guidesLede: string;
    privacyTitle: string;
    privacyLede: string;
    privacyItems: Titled[];
    installTitle: string;
    installLede: string;
    installSteps: Titled[];
    installFineprint: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
    downloadTitle: string;
    /** May contain {version} */
    downloadLede: string;
    downloadIconAlt: string;
    /** Each body may contain [links] and `code`; the commands themselves are not translated */
    downloadBrew: Titled;
    downloadScript: Titled;
    downloadManual: Titled;
    /** Button labels for the release files */
    downloadDmg: string;
    downloadZip: string;
    /** Labels for the release facts: version, release date, requirements */
    versionLabel: string;
    releasedLabel: string;
    requiresLabel: string;
    requiresDetail: string;
    /** May contain a [link](https://github.com/...) */
    downloadFineprint: string;
  };
  guidesIndex: {
    metaTitle: string;
    metaDescription: string;
    ogDescription: string;
    ogImageAlt: string;
    breadcrumb: string;
    title: string;
    lede: string;
  };
  guide: {
    /** e.g. "Instead of" - followed by the tools the guide replaces */
    insteadOf: string;
    updated: string;
    by: string;
    /** e.g. "tested with MarkPeek" - followed by the version */
    testedWith: string;
    testedOn: string;
    faqTitle: string;
    ctaTitle: string;
    ctaBody: string;
    /** Button to the home page download section, may contain {version} */
    ctaButton: string;
    /** May contain a [link](#privacy) */
    ctaFineprint: string;
    related: string;
  };
  notFound: {
    metaTitle: string;
    heading: string;
    body: string;
    back: string;
  };
};
