export type GuideImage = { src: string; alt: string; width: number; height: number };

export type GuideSection = {
  heading: string;
  paras?: string[];
  steps?: string[];
  bullets?: string[];
  /** A terminal command or code sample, shown after the steps/bullets */
  code?: string;
  note?: string;
  image?: GuideImage;
};

export type GuideDemo = {
  from: string;
  to: string;
};

export type Guide = {
  slug: string;
  title: string;
  demo: GuideDemo;
  replaces: string;
  metaTitle: string;
  description: string;
  lede: string;
  image: GuideImage;
  sections: GuideSection[];
  faq: { q: string; a: string }[];
  related: string[];
  datePublished: string;
  dateModified: string;
};

const SHOT = 'assets/screenshots/';

const IMG = {
  quicklook: {
    src: `${SHOT}quicklook.webp`,
    width: 900,
    height: 1048,
    alt: 'A Finder Quick Look window previewing Field Notes.md in the dark Serif theme, with a swift code block and an Open with MarkPeek button',
  },
  finderSpace: {
    src: `${SHOT}finder-space-poster.webp`,
    width: 1440,
    height: 900,
    alt: 'A Quick Look window over Finder previewing sample.md in a dark theme, with rendered display math and a Mermaid flowchart',
  },
  previewLight: {
    src: `${SHOT}preview-light.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek in Preview mode showing the note Field Notes: Building a Quiet App in the Serif theme, with the sidebar listing Documents, Outline and six themes',
  },
  previewDark: {
    src: `${SHOT}preview-dark.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek in Preview mode with the Paper theme in dark appearance, showing a drop cap and justified text',
  },
  quicklookMath: {
    src: `${SHOT}quicklook-math-mermaid.webp`,
    width: 845,
    height: 980,
    alt: 'Quick Look previewing a Markdown file with an inline formula, a rendered integral and a Mermaid flowchart',
  },
  splitLight: {
    src: `${SHOT}split-light.webp`,
    width: 1400,
    height: 832,
    alt: 'MarkPeek in Split mode with the GitHub theme: Markdown source on the left, the rendered page on the right, and Auto Save and a word count in the status bar',
  },
  splitDark: {
    src: `${SHOT}split-dark.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek in Split mode with the Serif theme in dark appearance, source on the left and the rendered page on the right',
  },
  inspector: {
    src: `${SHOT}inspector.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek with the Theme Inspector open on the Type tab for the Modern theme, with font pickers, size sliders and a Save As button',
  },
  builder: {
    src: `${SHOT}theme-builder.webp`,
    width: 1400,
    height: 880,
    alt: 'The New Theme sheet in MarkPeek with Name, Author, Start from, Appearance, fonts, text size, content width and accent colors, and a Create Theme button',
  },
  exportPdf: {
    src: `${SHOT}export-pdf.webp`,
    width: 1400,
    height: 880,
    alt: 'The Export as PDF sheet in MarkPeek with Paper options (Size, Orientation, Margins) and Document options (Layout, Appearance, Page numbers, Open in Preview when done)',
  },
  tour: {
    src: `${SHOT}app-tour-poster.webp`,
    width: 1440,
    height: 876,
    alt: 'MarkPeek in Preview mode with the Modern theme in dark appearance, showing a sample document with a front matter table, headings, lists and a blockquote',
  },
} satisfies Record<string, GuideImage>;

const PUBLISHED = '2026-11-12';

export const GUIDES: Guide[] = [
  {
    slug: 'quick-look-markdown-preview-mac',
    demo: { from: 'notes.md', to: 'Quick Look preview' },
    replaces: 'plain-text Quick Look',
    title: 'Preview Markdown files in Finder with Quick Look on Mac',
    metaTitle: 'Preview Markdown in Finder with Quick Look on Mac | MarkPeek',
    description:
      'Preview .md files in Finder with the Space bar on a Mac: why macOS shows plain text, and how MarkPeek adds a themed Quick Look preview.',
    lede:
      'Select a Markdown file in Finder, press Space, and macOS shows the raw text: pound signs, asterisks and all. Quick Look can show a finished page instead, but it needs something that knows how to render Markdown. Here is what the Mac does on its own, where that stops, and how to get a styled preview.',
    image: IMG.quicklook,
    sections: [
      {
        heading: 'What macOS does with a Markdown file',
        paras: [
          'Markdown files are plain text, so Quick Look treats them as plain text. You see the source exactly as written, in a monospaced font, with headings still marked by # and emphasis still wrapped in asterisks. That is fine for a three-line note and tiring for a long README.',
          'The Preview pane in a Finder window uses the same previews, so it shows the same raw text. macOS has no built-in Markdown renderer for Quick Look.',
        ],
      },
      {
        heading: 'Option 1: Live with the raw text',
        paras: [
          'For short files, the plain-text preview is quick and requires nothing. Arrow keys still move through a folder of notes, so you can skim contents without opening anything.',
        ],
        note:
          'Where it falls down: tables become rows of pipes, links show as bracketed URLs, code blocks have no syntax colors, and there is no sense of structure. Long documents are hard to scan.',
      },
      {
        heading: 'Option 2: Open the file in another app',
        paras: [
          'TextEdit opens .md files as plain text too, so it shows the same raw view. Editors such as VS Code have a Markdown preview, but opening an editor to read a file defeats the point of a quick look, and you pay for the launch time on every file.',
          'Third-party Quick Look extensions for Markdown also exist. They solve the same problem, so check that the one you choose is maintained, runs in the sandbox and lets you change the style.',
        ],
      },
      {
        heading: 'The MarkPeek way',
        paras: [
          'MarkPeek ships a Quick Look extension for Markdown, plus a Finder thumbnail extension. Once it is installed and enabled, the Space bar shows your file rendered with the active MarkPeek theme.',
        ],
        steps: [
          'Move MarkPeek to /Applications and open it once, so macOS registers the Quick Look extension. It is not notarized, so the first launch needs a Gatekeeper step (see the home page).',
          'Select any Markdown file in Finder: .md, .markdown, .mdown, .mkd, .mkdn, .mdwn, .mdtxt, .mdtext, .mdx, .rmd or .qmd.',
          'Press Space. The Quick Look window opens with the rendered page and an "Open with MarkPeek" button.',
          'Use the arrow keys to move through the other Markdown files in the folder.',
        ],
      },
      {
        heading: 'Choose the theme Quick Look uses',
        paras: [
          'Quick Look uses whichever theme is active in the app. Pick one from the Theme menu or the sidebar: Modern, Serif, GitHub, Plain, Paper or Mono. Each has a light and a dark palette, and by default previews follow the system appearance. To tune a theme, open the Theme Inspector with ⌥⌘I and adjust the Type, Layout, Colors and Extras tabs, then use "Save As…" to keep it.',
          'Because the app and the extension share one theme store, there is nothing to sync: change the theme, and the next Space press looks different.',
        ],
        image: IMG.inspector,
      },
      {
        heading: 'Settings and setup that matter',
        bullets: [
          'Extension switch: if the preview still shows raw text, go to System Settings ▸ General ▸ Login Items & Extensions ▸ Quick Look and enable MarkPeek. In the app, Settings ▸ General has an "Open Extension Settings…" button for the same pane.',
          'Stale previews: if Finder keeps the old look, run qlmanage -r in Terminal to reset the Quick Look cache.',
          'Images next to the file: the sandbox only lets MarkPeek read the file you open. Use "Allow a Folder…" (Settings ▸ General ▸ Images, or File ▸ "Allow Folder Access…") once and every document inside that folder, subfolders included, shows its images.',
        ],
        code: 'qlmanage -r',
      },
      {
        heading: 'What to expect from the preview',
        paras: [
          'The preview renders CommonMark with tables, task lists and strikethrough, front matter, syntax colors for fenced code, math and Mermaid diagrams. If a math or Mermaid render takes too long, the preview shows the source instead of hanging. Thumbnails are a separate extension that draws a small page with the title and first lines, always in the light palette of the active theme.',
          'Images referenced by a web address are fetched from the web when the preview opens. Images stored next to the file are embedded locally, once the folder is allowed.',
        ],
      },
    ],
    faq: [
      { q: 'Why does Quick Look show Markdown as plain text?', a: 'Markdown files are plain text and macOS has no built-in Markdown renderer for Quick Look, so it shows the source. An extension such as MarkPeek has to supply the rendering.' },
      { q: 'Does the Quick Look preview follow dark mode?', a: 'Yes. By default a theme follows the system appearance, using its light or dark palette. A theme can also be set to always light or always dark.' },
      { q: 'Does the preview need an internet connection?', a: 'No, except for remote images. Markdown, math and Mermaid render offline. If a document links an image by http or https URL, it is loaded from the web.' },
      { q: 'Which file extensions get the preview?', a: 'The eleven extensions MarkPeek declares: .md, .markdown, .mdown, .mkd, .mkdn, .mdwn, .mdtxt, .mdtext, .mdx, .rmd and .qmd, plus the Markdown content types used by iA Writer and TextBundle.' },
    ],
    related: ['fix-quick-look-markdown-plain-text', 'open-view-md-files-mac', 'markdown-math-mermaid-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'open-view-md-files-mac',
    demo: { from: 'README.md', to: 'readable page' },
    replaces: 'TextEdit, Xcode, a browser',
    title: 'The best way to open and view .md files on a Mac',
    metaTitle: 'How to Open and View .md Files on Mac | MarkPeek',
    description:
      'Ways to open Markdown (.md) files on macOS: TextEdit, VS Code, Xcode, a browser, Quick Look, and MarkPeek as a themed reader with Split view.',
    lede:
      'Double-click a .md file on a Mac and you usually get a text editor showing raw symbols. Markdown is meant to be read as formatted text, and the Mac has no built-in app that does that. These are the options, what each one costs you, and how MarkPeek works as a reader.',
    image: IMG.previewLight,
    sections: [
      {
        heading: 'What a .md file is',
        paras: [
          'A .md file is plain text with light markup: # for headings, asterisks for emphasis, hyphens for lists, backticks for code. READMEs, notes apps, documentation folders and static-site content are all written this way. Related extensions such as .markdown, .mdown, .mdx, .rmd and .qmd are Markdown variants.',
        ],
      },
      {
        heading: 'Option 1: TextEdit',
        paras: [
          'TextEdit opens Markdown as plain text. You see the source and can edit it, with nothing rendered. It is always available and fine for a quick fix to a typo.',
        ],
        note: 'Where it falls down: no rendering at all, so reading a long document means reading the symbols too.',
      },
      {
        heading: 'Option 2: A code editor such as VS Code or Xcode',
        paras: [
          'VS Code has a built-in Markdown preview, opened beside the editor with the "Markdown: Open Preview to the Side" command. It renders well, but it is a full code editor: heavier to start, tuned for projects rather than single documents, and diagrams or other extras need extensions. Xcode opens .md files as source text and is a very large install to use as a reader.',
        ],
      },
      {
        heading: 'Option 3: Quick Look, a browser, or a web service',
        paras: [
          'Quick Look shows the raw text, as covered in the Quick Look guide. A browser either shows the source as text or downloads the file. Pasting a document into a web-based renderer works but sends your text to someone else\'s server, which you may not want for private notes.',
        ],
      },
      {
        heading: 'The MarkPeek way',
        paras: [
          'MarkPeek is a native macOS reader and editor for Markdown. It opens files in a window with a document list, an Outline of headings, and a theme menu.',
        ],
        steps: [
          'Open a file with File ▸ "Open…" (⌘O), by dragging it onto the window ("Drop to Open"), or from "Open Recent". The Open panel also accepts .txt files.',
          'Read in Preview. Zoom with ⌘= and ⌘-, reset with ⌘0, search with "Find in Document…" (⌘F) and jump through headings in the Outline.',
          'Change how it looks from the Theme menu: Modern, Serif, GitHub, Plain, Paper or Mono, each with light and dark palettes.',
          'Press ⌘2 for Split or ⌘3 for Edit when you want to change the text. ⌘1 returns to Preview.',
        ],
      },
      {
        heading: 'Make MarkPeek the default for Markdown files',
        paras: [
          'Opening Markdown in MarkPeek is opt-in. In Settings (⌘,) ▸ General, the "Markdown files" row shows a button "Open in MarkPeek by Default". Click it, and double-clicking a .md file in Finder opens MarkPeek. The first-run Welcome Tour has the same choice as "Make MarkPeek the Default".',
          'You can undo it later with Finder\'s Get Info panel: select a .md file, choose File ▸ Get Info, and change the app under "Open with".',
        ],
        image: IMG.builder,
      },
      {
        heading: 'Settings worth knowing',
        bullets: [
          '"Reopen the last document at launch" (Settings ▸ General ▸ Documents) brings back where you left off. It is on by default.',
          '"Save automatically while editing" controls autosave. You can also toggle "Auto Save" in the status bar of Edit mode.',
          'Images: MarkPeek can read the document you open, but not the images beside it, until you allow the folder. Use "Allow a Folder…" in Settings ▸ General ▸ Images, or the "Allow…" button in the banner that says "Images in this folder need access to show."',
          'Themes: open the Theme Inspector with ⌥⌘I, or create one with Theme ▸ "New Theme…" (⇧⌘N).',
        ],
      },
      {
        heading: 'A routine for a folder of notes',
        paras: [
          'If your Markdown lives in one folder, such as meeting notes or a docs directory, a simple routine works well. Press Space in Finder to skim files with the styled Quick Look preview, and arrow down the list. When one deserves attention, choose "Open with MarkPeek" from the Quick Look window to read or edit it. Documents you open are kept under Documents in the sidebar, and the last ten are remembered in "Open Recent".',
        ],
      },
      {
        heading: 'What it does not do',
        paras: [
          'MarkPeek renders CommonMark plus tables, task lists and strikethrough, front matter, math and Mermaid. Footnotes, GitHub-style alert blocks, emoji shortcodes and wiki links are not part of the renderer, so a note that relies on them will show those pieces as plain text. If your workflow depends on them, keep another viewer for those files.',
        ],
      },
    ],
    faq: [
      { q: 'What app opens .md files on a Mac by default?', a: 'A plain text editor, usually TextEdit, or whichever editor you have installed. macOS has no built-in app that renders Markdown.' },
      { q: 'Can I open a .md file without installing anything?', a: 'Yes: TextEdit or Quick Look will show the raw text. Neither renders the formatting.' },
      { q: 'Does MarkPeek open files other than Markdown?', a: 'It is a Markdown app, but the Open panel and drag and drop also accept plain .txt files.' },
      { q: 'Will MarkPeek change my files?', a: 'Only if you edit and save them. Viewing does not write to the file, and if the file changes on disk while it is open, MarkPeek keeps your unsaved edits and offers to reload.' },
    ],
    related: ['quick-look-markdown-preview-mac', 'edit-markdown-live-preview-mac', 'markdown-to-pdf-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'markdown-to-pdf-mac',
    demo: { from: 'report.md', to: 'report.pdf' },
    replaces: 'pandoc, print-to-PDF workarounds',
    title: 'Export Markdown to PDF on a Mac',
    metaTitle: 'Export Markdown to PDF on Mac: Print, pandoc or MarkPeek',
    description:
      'Four ways to turn Markdown into a PDF on macOS: browser print, VS Code, pandoc, and MarkPeek with paper size, margins, page numbers and light or dark.',
    lede:
      'Markdown is easy to write and awkward to hand to someone who does not use it. A PDF fixes that, but the Mac has no built-in Markdown-to-PDF route. Here are the usual workarounds, what each one asks of you, and how MarkPeek exports a themed PDF with a few clicks.',
    image: IMG.exportPdf,
    sections: [
      {
        heading: 'Option 1: Print to PDF from whatever opens the file',
        paras: [
          'Every Mac can print to PDF from the Print dialog. The catch is what gets printed. TextEdit and Quick Look print the raw source, so you end up with a PDF full of pound signs. A browser can print rendered Markdown, but only after you get the file onto a web page first, for example by viewing it on GitHub.',
        ],
        note: 'Where it falls down: the output is only as good as the page you print from, and you get the browser\'s headers, footers and page breaks.',
      },
      {
        heading: 'Option 2: A code editor with a PDF extension',
        paras: [
          'VS Code can export Markdown to PDF through extensions. It works, but you are installing an editor and an extension for a one-off task, and the output style is whatever the extension ships with.',
        ],
      },
      {
        heading: 'Option 3: pandoc',
        paras: [
          'pandoc is the powerful route and the one many people end up using. It converts Markdown to PDF, Word and dozens of other formats. PDF output needs a separate PDF engine, commonly a LaTeX distribution, which is a large install, and styling means writing templates or options.',
        ],
        code: 'brew install pandoc\npandoc report.md -o report.pdf',
        note: 'Where it falls down: for a single document you will spend more time on setup than on the export, and you get no preview of the result before it is written.',
      },
      {
        heading: 'The MarkPeek way',
        paras: [
          'MarkPeek exports PDF from the same renderer and theme you read the document in, so the exported PDF uses the same theme and renderer as the preview.',
        ],
        steps: [
          'Open the document and pick a theme from the Theme menu. Serif or Paper suit long reads; Plain suits anything that will be printed.',
          'Choose File ▸ "Export as PDF…" (⇧⌘E), or click "Export PDF" in the toolbar.',
          'In the sheet, set Paper: Size (A4, US Letter, US Legal or A5), Orientation (Portrait or Landscape) and Margins (None, Narrow, Normal or Wide).',
          'Set Document: Layout ("Pages" or "Single long page"), Appearance ("Follow theme", "Light" or "Dark"), "Page numbers" and "Title at the top of each page". Leave "Open in Preview when done" on to check the result right away.',
          'Click "Export…" and choose where to save. The default file name is the document name with a .pdf extension.',
        ],
        image: IMG.previewDark,
      },
      {
        heading: 'Choose the theme before you export',
        paras: [
          'The theme decides the typeface, line length, heading style and colors of the PDF, so it is worth choosing before you export rather than fixing the result afterwards. Serif uses Charter with generous spacing and suits reports. GitHub gives underlined headings and grid tables. Plain is black on white with no decoration. If none fits, open the Theme Inspector (⌥⌘I), change the Type and Layout tabs, and use "Save As…". The "Theme" row in the export sheet is read-only and simply shows which theme will be used.',
        ],
      },
      {
        heading: 'Faster repeat exports',
        paras: [
          'MarkPeek remembers the options you used. "Export PDF Next to File" (⌥⇧⌘E) skips the sheet, reuses those options and saves the PDF next to the Markdown file. To change the starting values, open Settings (⌘,) ▸ Export: the "PDF defaults" section has Paper, Orientation, Margins, Layout and Appearance pickers and the "Open in Preview when done" toggle.',
        ],
      },
      {
        heading: 'HTML and Print',
        paras: [
          'File ▸ "Export as HTML…" (⌥⌘E) writes one self-contained .html file: the theme CSS and local images are embedded, and MathJax or Mermaid are included when the document uses them. There is no options dialog. File ▸ "Print…" (⌘P) prints through the same renderer, so you can use the standard Print dialog\'s own PDF menu as well.',
          'These are the only export formats. MarkPeek does not export to Word (DOCX), PNG or EPUB; use pandoc if you need those.',
        ],
      },
      {
        heading: 'Things to check before you send it',
        bullets: [
          'Dark documents on paper: set Appearance to "Light" if the theme you read in is dark and the PDF will be printed.',
          '"Single long page" produces one tall page and turns off page numbers and per-page titles, because they only apply to paged output.',
          'Images stored next to the Markdown file only appear after you allow the folder ("Allow a Folder…"). Images referenced by a web address are left as web links rather than embedded in the file.',
        ],
      },
    ],
    faq: [
      { q: 'Can macOS convert Markdown to PDF by itself?', a: 'Not as a built-in feature. You can print rendered Markdown from a browser, or use pandoc or an app such as MarkPeek.' },
      { q: 'Does the PDF look like the on-screen preview?', a: 'It uses the same theme and renderer. The PDF layout adds paper size, margins and optional page numbers, so page breaks and widths differ from the scrolling preview.' },
      { q: 'Can I export math and Mermaid diagrams to PDF?', a: 'Yes. Math and Mermaid render in the PDF export as they do in the app.' },
      { q: 'Can I choose the page size?', a: 'Yes: A4, US Letter, US Legal or A5, in Portrait or Landscape, with None, Narrow, Normal or Wide margins.' },
    ],
    related: ['markdown-math-mermaid-mac', 'open-view-md-files-mac', 'edit-markdown-live-preview-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'markdown-math-mermaid-mac',
    demo: { from: 'proof.md', to: 'math + diagrams' },
    replaces: 'GitHub, mermaid-cli, LaTeX',
    title: 'Render math (LaTeX) and Mermaid diagrams in Markdown on a Mac',
    metaTitle: 'Render Math (LaTeX) and Mermaid in Markdown on Mac',
    description:
      'See LaTeX math and Mermaid diagrams rendered from Markdown on macOS: GitHub, editor extensions, pandoc, and MarkPeek with bundled engines that work offline.',
    lede:
      'Markdown by itself has no math and no diagrams. Tools bolt them on with LaTeX-style dollar signs and Mermaid code blocks, but most Mac viewers show those as raw text. This guide covers where they render and how MarkPeek shows both in the app, in exports and in Quick Look without a network connection.',
    image: IMG.splitDark,
    sections: [
      {
        heading: 'The syntax most tools agree on',
        paras: [
          'Math is written with dollar signs: single ones for inline math, double ones for a display block. Diagrams are written as a fenced code block whose language is mermaid. If a tool supports these, the same file renders the same way elsewhere.',
        ],
        code: 'Inline: $E = mc^2$\n\n$$\n\\int_0^1 x^2 \\, dx = \\tfrac{1}{3}\n$$\n\n```mermaid\ngraph LR\n  A[Write] --> B[Preview]\n```',
      },
      {
        heading: 'Option 1: Push it to GitHub',
        paras: [
          'GitHub renders both math and Mermaid in Markdown files on its website. That is handy for a README, but it means committing and pushing a file just to see how it looks, and the content has to live in a repository.',
        ],
      },
      {
        heading: 'Option 2: A code editor with extensions',
        paras: [
          'Editors such as VS Code render Markdown in a side preview, and extensions add Mermaid support. This works well for people already living in an editor, but each feature depends on the extension you chose and its version, and none of it helps Finder or Quick Look.',
        ],
      },
      {
        heading: 'Option 3: pandoc and mermaid-cli',
        paras: [
          'pandoc can convert Markdown math to HTML with MathJax or to PDF through LaTeX. Mermaid diagrams need the separate mermaid-cli tool, which runs a headless browser, to turn each diagram into an image first. It is flexible and scriptable, and heavy for reading one document.',
        ],
        note: 'Where it falls down: the setup is a pipeline, not a viewer. You see results only after running commands.',
      },
      {
        heading: 'The MarkPeek way',
        paras: [
          'MarkPeek renders math with MathJax 3.2.2 and diagrams with Mermaid 11.4.1, both bundled in the app. There is no CDN call, so it works offline. The engines load only for documents that use them.',
        ],
        steps: [
          'Write inline math between single dollar signs and display math between double dollar signs.',
          'Write a diagram as a fenced code block whose language is mermaid. The language name is not case sensitive.',
          'Open the file in MarkPeek in Preview, or in Split (⌘2) to edit the source beside the rendered page.',
          'Press Space on the file in Finder to see it in Quick Look, or choose File ▸ "Export as PDF…" (⇧⌘E) or "Export as HTML…" (⌥⌘E). Math and diagrams render in all of them.',
        ],
        image: IMG.quicklookMath,
      },
      {
        heading: 'Rules for dollar signs',
        paras: [
          'To keep prices from turning into math, MarkPeek applies a simple rule to inline math: the opening dollar sign must not be followed by whitespace, and the closing one must not be preceded by whitespace or followed by a word character. So "costs $5 or $10" is left alone, while $x + y$ is rendered. Dollar signs inside code spans and fenced code blocks are skipped.',
          'Mermaid runs in its strict security mode, and its colors follow the light or dark scheme of the document.',
        ],
      },
      {
        heading: 'Writing math and diagrams that stay readable',
        paras: [
          'Keep display math on its own lines between the double dollar signs, and leave a blank line before and after it. For diagrams, start small: a short left-to-right graph reads better in a preview than a sprawling one. If a diagram does not appear, check the fence first: it must open with three backticks and the word mermaid, and close with three backticks on their own line. Dollar signs in prose, such as prices, are safe as long as there is no stray pair that looks like a formula.',
          'Because Split view (⌘2) shows the source beside the rendered page, it is the easiest place to fix a formula: change a symbol, look right, and adjust. Quick Look is best for checking the finished file in Finder, and the app is best for the iteration in between.',
        ],
      },
      {
        heading: 'Settings and limits',
        bullets: [
          'Quick Look renders math and Mermaid in an offscreen web view with a time limit. If it takes too long, the preview shows the source instead of waiting.',
          'Themes control the surrounding text, headings and code blocks. Fenced code blocks also get syntax colors for 16 language families, which you can toggle under Theme Inspector ▸ Extras ▸ "Syntax colors".',
          'MathJax output is SVG, so formulas stay sharp when you zoom with ⌘= or export a PDF.',
        ],
      },
    ],
    faq: [
      { q: 'Does MarkPeek need an internet connection for math and diagrams?', a: 'No. MathJax and Mermaid are bundled in the app. Only remote images referenced by URL come from the web.' },
      { q: 'Which math syntax does it use?', a: 'TeX-style math between dollar signs, rendered by MathJax. Single dollar signs make inline math, double dollar signs make a display block.' },
      { q: 'Does Quick Look show Mermaid diagrams?', a: 'Yes, rendered offscreen when the preview opens. If rendering times out, the preview falls back to the source.' },
      { q: 'Do math and Mermaid appear in exported files?', a: 'Yes. PDF export renders them, and the exported HTML file includes MathJax or Mermaid when the document uses them.' },
    ],
    related: ['markdown-to-pdf-mac', 'quick-look-markdown-preview-mac', 'edit-markdown-live-preview-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'edit-markdown-live-preview-mac',
    demo: { from: 'draft.md', to: 'live preview' },
    replaces: 'TextEdit, VS Code, browser editors',
    title: 'Edit Markdown with a live preview on a Mac',
    metaTitle: 'Edit Markdown with Live Preview on Mac | MarkPeek',
    description:
      'Write Markdown on a Mac with a live preview: TextEdit, VS Code, browser editors, and MarkPeek Split view with synced scrolling, Focus Mode and Auto Save.',
    lede:
      'Writing Markdown blind is fine until a table or a nested list goes wrong. A live preview shows the rendered result next to the text as you type. The Mac has no Markdown editor of its own, so here is how the options compare and how MarkPeek\'s Split view works.',
    image: IMG.splitLight,
    sections: [
      {
        heading: 'Option 1: TextEdit',
        paras: [
          'TextEdit edits Markdown as plain text and shows no preview. To check your work you save the file, open it somewhere else and look. For a short note that is acceptable; for a long document it is a slow loop.',
        ],
      },
      {
        heading: 'Option 2: VS Code',
        paras: [
          'VS Code has a built-in Markdown preview that you can open beside the editor and that updates as you type. It is powerful, with search across files and extensions for nearly everything, but it is a full development environment. Many people only want to write a page and see it.',
        ],
      },
      {
        heading: 'Option 3: A web-based editor',
        paras: [
          'Browser editors give you a split view with no install. Your document is then in a web page, usually with no direct link to the file on disk, so saving means copying text back out. They are poor fits for files that live in folders you already manage.',
        ],
        note: 'Where it falls down: each option either lacks a preview, carries more weight than the task needs, or sits away from your files.',
      },
      {
        heading: 'The MarkPeek way',
        paras: [
          'MarkPeek edits files in place. It has three view modes in a toolbar picker named "View": Preview, Split and Edit.',
        ],
        steps: [
          'Open a Markdown file with ⌘O, or drag it onto the window.',
          'Press ⌘2 for Split. The Markdown source is on the left and the rendered page on the right, in the active theme.',
          'Type. The preview updates, hovering a paragraph highlights it on the other side, and scrolling keeps both sides in step.',
          'Save with ⌘S, or turn on "Auto Save" in the status bar so MarkPeek saves shortly after you stop typing.',
          'Press ⌘1 for a full-width Preview when you want to read the result.',
        ],
        image: IMG.tour,
      },
      {
        heading: 'Focus Mode, Find and the Outline',
        paras: [
          'Focus Mode (⌥⌘F) switches to Edit and hides the sidebar and the inspector, leaving only the text. Choose "Exit Focus Mode" from the View menu, or the "Exit Focus" button in the toolbar, to come back.',
          'Find in Document… (⌘F) opens a find bar, with ⌘G for the next match and ⇧⌘G for the previous. The Outline in the sidebar lists the document\'s headings so you can navigate a long file. The status bar shows your word count, for example "232 words", and the save state: "Saved", "Unsaved changes" or "Saving…".',
        ],
      },
      {
        heading: 'When the file changes underneath you',
        paras: [
          'If another program changes the file while it is open in MarkPeek, a banner says "This file changed on disk. Your unsaved edits are kept." You can then choose "Reload from Disk" or "Keep Mine". That makes it safe to keep a document open while a script, a sync client or another editor touches it.',
        ],
      },
      {
        heading: 'A drafting routine that works',
        paras: [
          'Draft in Split view, with "Auto Save" on, so every pause saves your work. When a section is done, press ⌘1 to read the page full width and check headings, lists and tables the way a reader will see them. Switch the theme to something plain or serif to judge the text itself, then return to your usual one. Press ⌥⌘F for Focus Mode when you just want to write.',
        ],
      },
      {
        heading: 'Settings that affect editing',
        bullets: [
          'Settings (⌘,) ▸ General ▸ Documents: "Save automatically while editing" and "Reopen the last document at launch".',
          'Theme Inspector (⌥⌘I): the Type, Layout, Colors and Extras tabs change the preview live. Under Extras you can turn on heading numbering, drop caps, line numbers in code blocks and more.',
          'Images: allow a folder once ("Allow a Folder…") so images stored beside the document appear in the preview.',
        ],
      },
      {
        heading: 'What the editor is and is not',
        paras: [
          'MarkPeek is built as a reader first, with an editor for the text itself. The preview supports CommonMark, tables, task lists, math and Mermaid, but footnotes, alert blocks, emoji shortcodes and wiki links are not rendered. If you rely on those, keep a different editor for those files.',
        ],
      },
    ],
    faq: [
      { q: 'Does MarkPeek have a live preview?', a: 'Yes. Split view (⌘2) shows the Markdown source beside the rendered page, and it updates as you type.' },
      { q: 'Does it save automatically?', a: 'Optionally. Turn on "Auto Save" in the status bar or "Save automatically while editing" in Settings. By default it does not autosave.' },
      { q: 'Can I edit and read in separate windows?', a: 'The three view modes (Preview, Split, Edit) share one window. Use Split to see both at once.' },
      { q: 'What happens if I edit the file in another app?', a: 'MarkPeek notices the change on disk, keeps your unsaved edits and lets you choose "Reload from Disk" or "Keep Mine".' },
    ],
    related: ['open-view-md-files-mac', 'markdown-math-mermaid-mac', 'markdown-to-pdf-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'fix-quick-look-markdown-plain-text',
    demo: { from: 'notes.md', to: 'not raw text' },
    replaces: 'a broken Quick Look setup',
    title: 'Fix Quick Look showing plain text for Markdown on Mac',
    metaTitle: 'Fix Quick Look Showing Plain Text for Markdown on Mac',
    description:
      'Quick Look still shows raw Markdown? Enable the extension in System Settings, reset the cache with qlmanage -r, and check file types. Steps for MarkPeek.',
    lede:
      'You installed a Markdown preview extension, pressed Space on a .md file and still got raw text. That is almost always one of four things: the extension is switched off, the app was never launched, Quick Look cached the old result, or the file type is not one the extension handles. Work through them in this order.',
    image: IMG.finderSpace,
    sections: [
      {
        heading: 'Why macOS shows plain text in the first place',
        paras: [
          'Markdown is a text format, so with no Markdown preview installed, Quick Look falls back to plain text. A preview extension has to register itself for Markdown content types, and macOS lets you switch each extension on or off. Until it is both registered and enabled, you see the source.',
        ],
      },
      {
        heading: 'Fix 1: Launch the app once',
        paras: [
          'Quick Look extensions live inside an app bundle, and macOS only discovers them after the app has been opened. If you installed the app and never started it, the extension is not registered yet. Open MarkPeek once. The first launch also shows a Welcome Tour that walks through Finder previews, image access and the default app. If macOS refuses to open it because it is not notarized, clear the quarantine flag first.',
        ],
        code: 'xattr -dr com.apple.quarantine /Applications/MarkPeek.app',
        note: 'Alternatively try to open the app, then go to System Settings ▸ Privacy & Security and choose "Open Anyway". Keep the app in /Applications.',
      },
      {
        heading: 'Fix 2: Switch the extension on',
        paras: [
          'On most Macs macOS enables a new Quick Look extension automatically. If it did not, open System Settings ▸ General ▸ Login Items & Extensions ▸ Quick Look and turn MarkPeek on. MarkPeek can take you there: in Settings ▸ General, the "Finder previews" row has an "Open Extension Settings…" button, and the Welcome Tour has the same button on its Finder Previews step.',
        ],
      },
      {
        heading: 'Fix 3: Reset the Quick Look cache',
        paras: [
          'Quick Look keeps generated previews and a list of its extensions. After enabling an extension, reset it so Finder asks again.',
        ],
        code: 'qlmanage -r\nqlmanage -r cache',
        note: 'If a Finder window still shows the old preview, close the Quick Look window, select another file, and try again. Relaunching Finder is a last resort.',
        image: IMG.quicklook,
      },
      {
        heading: 'Fix 4: Check the file type',
        paras: [
          'The preview applies to Markdown content types, not to every text file. MarkPeek covers these extensions: .md, .markdown, .mdown, .mkd, .mkdn, .mdwn, .mdtxt, .mdtext, .mdx, .rmd and .qmd, plus the Markdown types used by iA Writer and TextBundle. A file called notes.txt that happens to contain Markdown is plain text to macOS and is not previewed, even though MarkPeek\'s Open panel accepts .txt. Rename it to .md and press Space again.',
          'You can test a single file from Terminal. The command opens a Quick Look window for it, which is useful for separating a Finder issue from a file issue.',
        ],
        code: 'qlmanage -p ~/Documents/notes.md',
      },
      {
        heading: 'Fix 5: Check for competing previewers',
        paras: [
          'If you have another Markdown Quick Look extension installed, two extensions may claim the same file types. Turn the one you do not want off in the same System Settings pane and reset the cache again.',
        ],
      },
      {
        heading: 'If nothing helps',
        paras: [
          'Check that you are on macOS 14 Sonoma or later, because MarkPeek does not support older versions. Confirm the app is in /Applications and was launched after any move or replacement. Quit and reopen Finder, or log out and back in, so macOS rescans its extensions. If you built MarkPeek from source, the build script registers the extensions and resets the Quick Look cache for you, so run it again after a rebuild.',
        ],
      },
      {
        heading: 'Two things that look like bugs but are not',
        bullets: [
          'Missing images: MarkPeek runs in the macOS sandbox, so it cannot read the images beside a document until you allow the folder with "Allow a Folder…" in Settings ▸ General ▸ Images. Once allowed, subfolders are covered too.',
          'Thumbnails: Finder icons use a separate thumbnail extension that draws a small page in the light palette of the active theme. It can differ from the Space preview, and macOS decides which thumbnail it shows for some extensions.',
        ],
      },
      {
        heading: 'How to confirm it works',
        paras: [
          'Select a Markdown file, press Space, and look for rendered headings, a styled code block and an "Open with MarkPeek" button in the Quick Look window. The look follows the theme active in the app, so changing the theme and pressing Space again is the quickest check.',
        ],
      },
    ],
    faq: [
      { q: 'Quick Look still shows raw Markdown after I enabled the extension. What now?', a: 'Run qlmanage -r in Terminal to reset the cache, close the Quick Look window and try again. Confirm the file ends in .md or another supported extension.' },
      { q: 'Where is the Quick Look extension switch?', a: 'System Settings ▸ General ▸ Login Items & Extensions ▸ Quick Look. MarkPeek\'s "Open Extension Settings…" button opens it.' },
      { q: 'Why do I need to open the app first?', a: 'macOS registers extensions when it sees the app. Launching MarkPeek once makes its Quick Look and thumbnail extensions available.' },
      { q: 'Does the preview work for .txt files?', a: 'No. The Quick Look extension covers Markdown content types. Rename the file to .md to get the preview.' },
    ],
    related: ['quick-look-markdown-preview-mac', 'open-view-md-files-mac', 'markdown-math-mermaid-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
];
