import type { Guide, GuideImage } from './content';

const SHOT = 'assets/screenshots/';

const IMG = {
  quicklook: {
    src: `${SHOT}quicklook.webp`,
    width: 900,
    height: 1048,
    alt: 'Ein Quick-Look-Fenster über dem Finder mit Vorschau von Field Notes.md im dunklen Serif-Theme, mit einem Swift-Codeblock und der Schaltfläche „Open with MarkPeek“',
  },
  finderSpace: {
    src: `${SHOT}finder-space-poster.webp`,
    width: 1440,
    height: 900,
    alt: 'Ein Quick-Look-Fenster über dem Finder mit Vorschau von sample.md in einem dunklen Theme, mit gerenderter abgesetzter Formel und einem Mermaid-Flussdiagramm',
  },
  previewLight: {
    src: `${SHOT}preview-light.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek im Modus Preview mit der Notiz Field Notes: Building a Quiet App im Serif-Theme, mit einer Seitenleiste, die Documents, Outline und sechs Themes zeigt',
  },
  previewDark: {
    src: `${SHOT}preview-dark.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek im Modus Preview mit dem Paper-Theme in dunkler Darstellung, mit Initial und Blocksatz',
  },
  quicklookMath: {
    src: `${SHOT}quicklook-math-mermaid.webp`,
    width: 845,
    height: 980,
    alt: 'Quick Look zeigt eine Markdown-Datei mit einer Inline-Formel, einem gerenderten Integral und einem Mermaid-Flussdiagramm',
  },
  splitLight: {
    src: `${SHOT}split-light.webp`,
    width: 1400,
    height: 832,
    alt: 'MarkPeek im Modus Split mit dem GitHub-Theme: links der Markdown-Quelltext, rechts die gerenderte Seite, in der Statusleiste Auto Save und eine Wortzahl',
  },
  splitDark: {
    src: `${SHOT}split-dark.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek im Modus Split mit dem Serif-Theme in dunkler Darstellung, links der Quelltext, rechts die gerenderte Seite',
  },
  inspector: {
    src: `${SHOT}inspector.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek mit geöffnetem Theme Inspector auf dem Tab Type für das Theme Modern, mit Schriftauswahl, Größenreglern und einer Schaltfläche Save As',
  },
  builder: {
    src: `${SHOT}theme-builder.webp`,
    width: 1400,
    height: 880,
    alt: 'Das Blatt New Theme in MarkPeek mit Name, Author, Start from, Appearance, Schriften, Textgröße, Inhaltsbreite und Akzentfarben sowie einer Schaltfläche Create Theme',
  },
  exportPdf: {
    src: `${SHOT}export-pdf.webp`,
    width: 1400,
    height: 880,
    alt: 'Das Blatt Export as PDF in MarkPeek mit Paper-Optionen (Size, Orientation, Margins) und Document-Optionen (Layout, Appearance, Page numbers, Open in Preview when done)',
  },
  tour: {
    src: `${SHOT}app-tour-poster.webp`,
    width: 1440,
    height: 876,
    alt: 'MarkPeek im Modus Preview mit dem Modern-Theme in dunkler Darstellung, mit einem Beispieldokument aus Front-Matter-Tabelle, Überschriften, Listen und einem Zitat',
  },
} satisfies Record<string, GuideImage>;

const PUBLISHED = '2026-11-12';

export const GUIDES_DE: Guide[] = [
  {
    slug: 'quick-look-markdown-preview-mac',
    demo: { from: 'notes.md', to: 'Quick-Look-Vorschau' },
    replaces: 'Quick Look im Rohtext',
    title: 'Markdown-Dateien im Finder mit Quick Look ansehen (Mac)',
    metaTitle: 'Markdown im Finder per Quick Look ansehen (Mac) | MarkPeek',
    description:
      '.md-Dateien im Finder mit der Leertaste ansehen: warum macOS Rohtext zeigt und wie MarkPeek eine Quick-Look-Vorschau im Theme ergänzt.',
    lede:
      'Sie wählen im Finder eine Markdown-Datei aus, drücken die Leertaste, und macOS zeigt den Rohtext: Rautenzeichen, Sternchen und alles. Quick Look (in der deutschen macOS-Oberfläche „Übersicht“) kann stattdessen eine fertige Seite zeigen, braucht dafür aber etwas, das Markdown rendern kann. Hier steht, was der Mac von sich aus tut, wo das aufhört und wie Sie eine gestaltete Vorschau bekommen.',
    image: IMG.quicklook,
    sections: [
      {
        heading: 'Was macOS mit einer Markdown-Datei macht',
        paras: [
          'Markdown-Dateien sind reiner Text, deshalb behandelt Quick Look sie als reinen Text. Sie sehen den Quelltext genau so, wie er geschrieben wurde, in Festbreitenschrift, mit Überschriften, die weiter mit # markiert sind, und Hervorhebungen, die weiter in Sternchen stehen. Bei einer Notiz von drei Zeilen ist das in Ordnung, bei einer langen README anstrengend.',
          'Die Vorschau in einem Finder-Fenster nutzt dieselben Vorschauen und zeigt deshalb denselben Rohtext. macOS hat keinen eingebauten Markdown-Renderer für Quick Look.',
        ],
      },
      {
        heading: 'Option 1: Mit dem Rohtext leben',
        paras: [
          'Bei kurzen Dateien ist die Rohtext-Vorschau schnell und braucht nichts. Mit den Pfeiltasten wechseln Sie weiter durch einen Ordner voller Notizen und überfliegen Inhalte, ohne etwas zu öffnen.',
        ],
        note:
          'Wo es hakt: Tabellen werden zu Zeilen aus senkrechten Strichen, Links erscheinen als URLs in Klammern, Codeblöcke haben keine Syntaxfarben, und es gibt kein Gefühl für Struktur. Lange Dokumente sind schwer zu überblicken.',
      },
      {
        heading: 'Option 2: Die Datei in einer anderen App öffnen',
        paras: [
          'TextEdit öffnet .md-Dateien ebenfalls als reinen Text und zeigt daher dieselbe Rohansicht. Editoren wie VS Code haben eine Markdown-Vorschau, aber einen Editor zu öffnen, nur um eine Datei zu lesen, widerspricht dem Sinn eines kurzen Blicks, und bei jeder Datei zahlen Sie die Startzeit.',
          'Es gibt auch Quick-Look-Erweiterungen von Drittanbietern für Markdown. Sie lösen dasselbe Problem; achten Sie darauf, dass die gewählte gepflegt wird, in der Sandbox läuft und sich im Stil anpassen lässt.',
        ],
      },
      {
        heading: 'Der Weg mit MarkPeek',
        paras: [
          'MarkPeek bringt eine Quick-Look-Erweiterung für Markdown mit sowie eine Finder-Miniatur-Erweiterung. Sind sie installiert und aktiviert, zeigt die Leertaste Ihre Datei gerendert im aktiven MarkPeek-Theme.',
        ],
        steps: [
          'MarkPeek nach /Applications (Programme) verschieben und einmal öffnen, damit macOS die Quick-Look-Erweiterung registriert. Die App ist nicht notarisiert, daher braucht der erste Start einen Gatekeeper-Schritt (siehe Startseite).',
          'Eine beliebige Markdown-Datei im Finder auswählen: .md, .markdown, .mdown, .mkd, .mkdn, .mdwn, .mdtxt, .mdtext, .mdx, .rmd oder .qmd.',
          'Leertaste drücken. Das Quick-Look-Fenster öffnet sich mit der gerenderten Seite und der Schaltfläche „Open with MarkPeek“.',
          'Mit den Pfeiltasten durch die anderen Markdown-Dateien im Ordner wechseln.',
        ],
      },
      {
        heading: 'Das Theme für Quick Look wählen',
        paras: [
          'Quick Look nutzt das Theme, das in der App aktiv ist. Wählen Sie eines im Theme-Menü oder in der Seitenleiste: Modern, Serif, GitHub, Plain, Paper oder Mono. Jedes hat eine helle und eine dunkle Palette, und standardmäßig folgen Vorschauen dem Erscheinungsbild des Systems. Um ein Theme anzupassen, öffnen Sie mit ⌥⌘I den Theme Inspector, stellen die Tabs Type, Layout, Colors und Extras ein und behalten es mit „Save As…“.',
          'Weil App und Erweiterung einen gemeinsamen Theme-Speicher nutzen, gibt es nichts abzugleichen: Theme ändern, und die nächste Leertaste sieht anders aus.',
        ],
        image: IMG.inspector,
      },
      {
        heading: 'Einstellungen und Einrichtung, auf die es ankommt',
        bullets: [
          'Schalter der Erweiterung: Zeigt die Vorschau weiter Rohtext, gehen Sie zu Systemeinstellungen ▸ Allgemein ▸ Anmeldeobjekte & Erweiterungen ▸ Übersicht und aktivieren MarkPeek. In der App hat Settings ▸ General dafür die Schaltfläche „Open Extension Settings…“.',
          'Veraltete Vorschauen: Behält der Finder den alten Look, setzen Sie mit qlmanage -r im Terminal den Quick-Look-Cache zurück.',
          'Bilder neben der Datei: Die Sandbox lässt MarkPeek nur die Datei lesen, die Sie öffnen. Nutzen Sie einmal „Allow a Folder…“ (Settings ▸ General ▸ Images oder File ▸ „Allow Folder Access…“), und jedes Dokument in diesem Ordner, Unterordner eingeschlossen, zeigt seine Bilder.',
        ],
        code: 'qlmanage -r',
      },
      {
        heading: 'Was Sie von der Vorschau erwarten können',
        paras: [
          'Die Vorschau rendert CommonMark mit Tabellen, Aufgabenlisten und Durchstreichen, Front Matter, Syntaxfarben für Codeblöcke, Formeln und Mermaid-Diagramme. Dauert das Rendern einer Formel oder eines Mermaid-Diagramms zu lange, zeigt die Vorschau den Quelltext, statt zu hängen. Miniaturen sind eine eigene Erweiterung, die eine kleine Seite mit Titel und ersten Zeilen zeichnet, immer in der hellen Palette des aktiven Themes.',
          'Bilder, auf die per Webadresse verwiesen wird, werden beim Öffnen der Vorschau aus dem Web geladen. Neben der Datei gespeicherte Bilder werden lokal eingebettet, sobald der Ordner freigegeben ist.',
        ],
      },
    ],
    faq: [
      { q: 'Warum zeigt Quick Look Markdown als reinen Text?', a: 'Markdown-Dateien sind reiner Text, und macOS hat keinen eingebauten Markdown-Renderer für Quick Look, also zeigt es den Quelltext. Eine Erweiterung wie MarkPeek muss das Rendern liefern.' },
      { q: 'Folgt die Quick-Look-Vorschau dem Dunkelmodus?', a: 'Ja. Standardmäßig folgt ein Theme dem Erscheinungsbild des Systems und nutzt seine helle oder dunkle Palette. Ein Theme lässt sich auch auf immer hell oder immer dunkel stellen.' },
      { q: 'Braucht die Vorschau eine Internetverbindung?', a: 'Nein, außer für entfernte Bilder. Markdown, Formeln und Mermaid werden offline gerendert. Verweist ein Dokument per http- oder https-URL auf ein Bild, wird es aus dem Web geladen.' },
      { q: 'Welche Dateiendungen erhalten die Vorschau?', a: 'Die elf Endungen, die MarkPeek meldet: .md, .markdown, .mdown, .mkd, .mkdn, .mdwn, .mdtxt, .mdtext, .mdx, .rmd und .qmd, dazu die Markdown-Inhaltstypen von iA Writer und TextBundle.' },
    ],
    related: ['fix-quick-look-markdown-plain-text', 'open-view-md-files-mac', 'markdown-math-mermaid-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'open-view-md-files-mac',
    demo: { from: 'README.md', to: 'lesbare Seite' },
    replaces: 'TextEdit, Xcode, einen Browser',
    title: 'Der beste Weg, .md-Dateien auf dem Mac zu öffnen und anzusehen',
    metaTitle: '.md-Dateien auf dem Mac öffnen und ansehen | MarkPeek',
    description:
      'Wege, Markdown-Dateien (.md) unter macOS zu öffnen: TextEdit, VS Code, Xcode, Browser, Quick Look und MarkPeek als Reader mit Themes und Split-Ansicht.',
    lede:
      'Wer auf dem Mac eine .md-Datei doppelklickt, landet meist in einem Texteditor voller Rohzeichen. Markdown ist dafür gedacht, als formatierter Text gelesen zu werden, und der Mac hat keine eingebaute App, die das kann. Hier sind die Optionen, was jede kostet und wie MarkPeek als Reader funktioniert.',
    image: IMG.previewLight,
    sections: [
      {
        heading: 'Was eine .md-Datei ist',
        paras: [
          'Eine .md-Datei ist reiner Text mit leichter Auszeichnung: # für Überschriften, Sternchen für Hervorhebung, Bindestriche für Listen, Backticks für Code. READMEs, Notiz-Apps, Dokumentationsordner und Inhalte statischer Websites sind alle so geschrieben. Verwandte Endungen wie .markdown, .mdown, .mdx, .rmd und .qmd sind Markdown-Varianten.',
        ],
      },
      {
        heading: 'Option 1: TextEdit',
        paras: [
          'TextEdit öffnet Markdown als reinen Text. Sie sehen den Quelltext und können ihn bearbeiten, ohne dass etwas gerendert wird. Das Programm ist immer da und reicht für die schnelle Korrektur eines Tippfehlers.',
        ],
        note: 'Wo es hakt: Es wird gar nichts gerendert, ein langes Dokument zu lesen heißt also auch, die Zeichen mitzulesen.',
      },
      {
        heading: 'Option 2: Ein Code-Editor wie VS Code oder Xcode',
        paras: [
          'VS Code hat eine eingebaute Markdown-Vorschau, die mit dem Befehl „Markdown: Open Preview to the Side“ neben dem Editor erscheint. Sie rendert gut, aber VS Code ist ein vollständiger Code-Editor: schwerer beim Start, auf Projekte statt auf einzelne Dokumente ausgelegt, und für Diagramme oder anderes braucht es Erweiterungen. Xcode öffnet .md-Dateien als Quelltext und ist als Reader eine sehr große Installation.',
        ],
      },
      {
        heading: 'Option 3: Quick Look, ein Browser oder ein Webdienst',
        paras: [
          'Quick Look zeigt den Rohtext, wie in der Quick-Look-Anleitung beschrieben. Ein Browser zeigt den Quelltext entweder als Text an oder lädt die Datei herunter. Ein Dokument in einen webbasierten Renderer einzufügen funktioniert, schickt Ihren Text aber an den Server eines anderen, was Sie bei privaten Notizen womöglich nicht wollen.',
        ],
      },
      {
        heading: 'Der Weg mit MarkPeek',
        paras: [
          'MarkPeek ist ein nativer macOS-Reader und -Editor für Markdown. Es öffnet Dateien in einem Fenster mit Dokumentliste, einer Outline der Überschriften und einem Theme-Menü.',
        ],
        steps: [
          'Eine Datei mit File ▸ „Open…“ (⌘O) öffnen, per Ziehen auf das Fenster („Drop to Open“) oder über „Open Recent“. Der Öffnen-Dialog akzeptiert auch .txt-Dateien.',
          'In Preview lesen. Zoomen mit ⌘= und ⌘-, zurücksetzen mit ⌘0, suchen mit „Find in Document…“ (⌘F) und durch Überschriften in der Outline springen.',
          'Das Aussehen im Theme-Menü ändern: Modern, Serif, GitHub, Plain, Paper oder Mono, jeweils mit heller und dunkler Palette.',
          '⌘2 für Split oder ⌘3 für Edit drücken, wenn Sie den Text ändern wollen. ⌘1 führt zurück zu Preview.',
        ],
      },
      {
        heading: 'MarkPeek zum Standardprogramm für Markdown-Dateien machen',
        paras: [
          'Markdown in MarkPeek zu öffnen ist freiwillig. In Settings (⌘,) ▸ General zeigt die Zeile „Markdown files“ eine Schaltfläche „Open in MarkPeek by Default“. Klicken Sie darauf, öffnet ein Doppelklick auf eine .md-Datei im Finder MarkPeek. Die Welcome Tour beim ersten Start bietet dieselbe Wahl als „Make MarkPeek the Default“.',
          'Rückgängig machen können Sie das später im Finder mit dem Informationsfenster: eine .md-Datei auswählen, Ablage ▸ Informationen wählen und die App unter „Öffnen mit“ ändern.',
        ],
        image: IMG.builder,
      },
      {
        heading: 'Einstellungen, die Sie kennen sollten',
        bullets: [
          '„Reopen the last document at launch“ (Settings ▸ General ▸ Documents) stellt wieder her, wo Sie aufgehört haben. Es ist standardmäßig aktiviert.',
          '„Save automatically while editing“ steuert das automatische Sichern. Sie können auch „Auto Save“ in der Statusleiste des Edit-Modus umschalten.',
          'Bilder: MarkPeek kann das geöffnete Dokument lesen, aber nicht die Bilder daneben, bis Sie den Ordner freigeben. Nutzen Sie „Allow a Folder…“ in Settings ▸ General ▸ Images oder die Schaltfläche „Allow…“ im Hinweis „Images in this folder need access to show.“',
          'Themes: den Theme Inspector mit ⌥⌘I öffnen oder mit Theme ▸ „New Theme…“ (⇧⌘N) eines anlegen.',
        ],
      },
      {
        heading: 'Ein Ablauf für einen Ordner voller Notizen',
        paras: [
          'Liegt Ihr Markdown in einem Ordner, etwa Besprechungsnotizen oder ein Dokumentationsverzeichnis, funktioniert ein einfacher Ablauf gut. Drücken Sie im Finder die Leertaste, um Dateien mit der gestalteten Quick-Look-Vorschau zu überfliegen, und gehen Sie die Liste mit der Pfeiltaste nach unten durch. Verdient eine Datei Aufmerksamkeit, wählen Sie im Quick-Look-Fenster „Open with MarkPeek“, um sie zu lesen oder zu bearbeiten. Geöffnete Dokumente bleiben unter Documents in der Seitenleiste, und die letzten zehn merkt sich „Open Recent“.',
        ],
      },
      {
        heading: 'Was es nicht kann',
        paras: [
          'MarkPeek rendert CommonMark plus Tabellen, Aufgabenlisten und Durchstreichen, Front Matter, Formeln und Mermaid. Fußnoten, Hinweisblöcke im GitHub-Stil, Emoji-Kürzel und Wiki-Links gehören nicht zum Renderer, eine Notiz, die sich darauf stützt, zeigt diese Teile also als reinen Text. Hängt Ihr Ablauf davon ab, behalten Sie für diese Dateien einen anderen Viewer.',
        ],
      },
    ],
    faq: [
      { q: 'Welche App öffnet .md-Dateien auf dem Mac standardmäßig?', a: 'Ein einfacher Texteditor, meist TextEdit, oder der Editor, den Sie installiert haben. macOS hat keine eingebaute App, die Markdown rendert.' },
      { q: 'Kann ich eine .md-Datei öffnen, ohne etwas zu installieren?', a: 'Ja: TextEdit oder Quick Look zeigen den Rohtext. Keines von beiden rendert die Formatierung.' },
      { q: 'Öffnet MarkPeek auch andere Dateien als Markdown?', a: 'Es ist eine Markdown-App, aber der Öffnen-Dialog und Drag & Drop akzeptieren auch einfache .txt-Dateien.' },
      { q: 'Ändert MarkPeek meine Dateien?', a: 'Nur wenn Sie sie bearbeiten und sichern. Ansehen schreibt nicht in die Datei, und ändert sich die Datei auf dem Datenträger, während sie geöffnet ist, behält MarkPeek Ihre ungesicherten Änderungen und bietet das Neuladen an.' },
    ],
    related: ['quick-look-markdown-preview-mac', 'edit-markdown-live-preview-mac', 'markdown-to-pdf-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'markdown-to-pdf-mac',
    demo: { from: 'report.md', to: 'report.pdf' },
    replaces: 'pandoc, Umwege über „Als PDF sichern“',
    title: 'Markdown auf dem Mac als PDF exportieren',
    metaTitle: 'Markdown als PDF exportieren (Mac): Druck, pandoc, MarkPeek',
    description:
      'Vier Wege, Markdown unter macOS in ein PDF zu verwandeln: Browser-Druck, VS Code, pandoc und MarkPeek mit Papierformat, Rändern, Seitenzahlen, hell oder dunkel.',
    lede:
      'Markdown ist leicht zu schreiben und umständlich weiterzugeben, wenn das Gegenüber es nicht nutzt. Ein PDF löst das, aber der Mac hat keinen eingebauten Weg von Markdown zu PDF. Hier sind die üblichen Umwege, was jeder von Ihnen verlangt und wie MarkPeek mit wenigen Klicks ein PDF im Theme exportiert.',
    image: IMG.exportPdf,
    sections: [
      {
        heading: 'Option 1: Als PDF drucken, aus dem Programm, das die Datei öffnet',
        paras: [
          'Jeder Mac kann im Drucken-Dialog als PDF sichern. Der Haken ist, was gedruckt wird. TextEdit und Quick Look drucken den Rohquelltext, Sie erhalten also ein PDF voller Rautenzeichen. Ein Browser kann gerendertes Markdown drucken, aber erst, wenn Sie die Datei zuerst auf eine Webseite bringen, zum Beispiel durch Ansehen auf GitHub.',
        ],
        note: 'Wo es hakt: Das Ergebnis ist nur so gut wie die Seite, von der Sie drucken, und Sie bekommen die Kopf- und Fußzeilen und Seitenumbrüche des Browsers.',
      },
      {
        heading: 'Option 2: Ein Code-Editor mit PDF-Erweiterung',
        paras: [
          'VS Code kann Markdown über Erweiterungen als PDF exportieren. Das funktioniert, aber Sie installieren einen Editor und eine Erweiterung für eine einmalige Aufgabe, und der Stil des Ergebnisses ist das, was die Erweiterung mitbringt.',
        ],
      },
      {
        heading: 'Option 3: pandoc',
        paras: [
          'pandoc ist der mächtige Weg und der, bei dem viele landen. Es wandelt Markdown in PDF, Word und Dutzende weitere Formate um. Für PDF-Ausgabe braucht es eine separate PDF-Engine, meist eine LaTeX-Distribution, die eine große Installation ist, und Gestaltung heißt, Vorlagen oder Optionen zu schreiben.',
        ],
        code: 'brew install pandoc\npandoc report.md -o report.pdf',
        note: 'Wo es hakt: Bei einem einzelnen Dokument verbringen Sie mehr Zeit mit der Einrichtung als mit dem Export, und eine Vorschau des Ergebnisses gibt es nicht, bevor es geschrieben ist.',
      },
      {
        heading: 'Der Weg mit MarkPeek',
        paras: [
          'MarkPeek exportiert PDF aus demselben Renderer und Theme, in dem Sie das Dokument lesen, das exportierte PDF nutzt also dasselbe Theme und denselben Renderer wie die Vorschau.',
        ],
        steps: [
          'Das Dokument öffnen und im Theme-Menü ein Theme wählen. Serif oder Paper eignen sich für lange Texte; Plain für alles, was gedruckt wird.',
          'File ▸ „Export as PDF…“ (⇧⌘E) wählen oder in der Symbolleiste auf „Export PDF“ klicken.',
          'Im Blatt unter Paper einstellen: Size (A4, US Letter, US Legal oder A5), Orientation (Portrait oder Landscape) und Margins (None, Narrow, Normal oder Wide).',
          'Unter Document einstellen: Layout („Pages“ oder „Single long page“), Appearance („Follow theme“, „Light“ oder „Dark“), „Page numbers“ und „Title at the top of each page“. „Open in Preview when done“ eingeschaltet lassen, um das Ergebnis sofort zu prüfen.',
          'Auf „Export…“ klicken und den Speicherort wählen. Der Standarddateiname ist der Dokumentname mit der Endung .pdf.',
        ],
        image: IMG.previewDark,
      },
      {
        heading: 'Das Theme vor dem Export wählen',
        paras: [
          'Das Theme bestimmt Schrift, Zeilenlänge, Überschriftenstil und Farben des PDFs, es lohnt sich also, es vor dem Export zu wählen, statt das Ergebnis hinterher zu korrigieren. Serif nutzt Charter mit großzügigen Abständen und eignet sich für Berichte. GitHub liefert unterstrichene Überschriften und Gittertabellen. Plain ist schwarz auf weiß ohne Dekoration. Passt keines, öffnen Sie den Theme Inspector (⌥⌘I), ändern die Tabs Type und Layout und nutzen „Save As…“. Die Zeile „Theme“ im Exportblatt ist schreibgeschützt und zeigt nur an, welches Theme verwendet wird.',
        ],
      },
      {
        heading: 'Schnellere wiederholte Exporte',
        paras: [
          'MarkPeek merkt sich die zuletzt verwendeten Optionen. „Export PDF Next to File“ (⌥⇧⌘E) überspringt das Blatt, übernimmt diese Optionen und sichert das PDF neben der Markdown-Datei. Um die Startwerte zu ändern, öffnen Sie Settings (⌘,) ▸ Export: Der Abschnitt „PDF defaults“ hat Auswahlmenüs für Paper, Orientation, Margins, Layout und Appearance sowie den Schalter „Open in Preview when done“.',
        ],
      },
      {
        heading: 'HTML und Drucken',
        paras: [
          'File ▸ „Export as HTML…“ (⌥⌘E) schreibt eine einzelne, in sich geschlossene .html-Datei: Das Theme-CSS und lokale Bilder sind eingebettet, und MathJax oder Mermaid sind enthalten, wenn das Dokument sie nutzt. Einen Optionsdialog gibt es nicht. File ▸ „Print…“ (⌘P) druckt über denselben Renderer, Sie können also auch das PDF-Menü des üblichen Drucken-Dialogs verwenden.',
          'Das sind die einzigen Exportformate. MarkPeek exportiert nicht nach Word (DOCX), PNG oder EPUB; dafür nutzen Sie pandoc.',
        ],
      },
      {
        heading: 'Was Sie vor dem Versenden prüfen sollten',
        bullets: [
          'Dunkle Dokumente auf Papier: Stellen Sie Appearance auf „Light“, wenn das Theme, in dem Sie lesen, dunkel ist und das PDF gedruckt wird.',
          '„Single long page“ erzeugt eine einzige hohe Seite und schaltet Seitenzahlen und Titel pro Seite ab, weil sie nur für seitenweise Ausgabe gelten.',
          'Neben der Markdown-Datei gespeicherte Bilder erscheinen erst, wenn Sie den Ordner freigeben („Allow a Folder…“). Per Webadresse eingebundene Bilder bleiben Weblinks und werden nicht in die Datei eingebettet.',
        ],
      },
    ],
    faq: [
      { q: 'Kann macOS Markdown von sich aus in PDF umwandeln?', a: 'Nicht als eingebaute Funktion. Sie können gerendertes Markdown aus einem Browser drucken oder pandoc oder eine App wie MarkPeek nutzen.' },
      { q: 'Sieht das PDF aus wie die Vorschau auf dem Bildschirm?', a: 'Es nutzt dasselbe Theme und denselben Renderer. Das PDF-Layout fügt Papierformat, Ränder und optionale Seitenzahlen hinzu, daher unterscheiden sich Seitenumbrüche und Breiten von der scrollenden Vorschau.' },
      { q: 'Kann ich Formeln und Mermaid-Diagramme als PDF exportieren?', a: 'Ja. Formeln und Mermaid werden im PDF-Export so gerendert wie in der App.' },
      { q: 'Kann ich das Seitenformat wählen?', a: 'Ja: A4, US Letter, US Legal oder A5, im Hoch- oder Querformat, mit Rändern None, Narrow, Normal oder Wide.' },
    ],
    related: ['markdown-math-mermaid-mac', 'open-view-md-files-mac', 'edit-markdown-live-preview-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'markdown-math-mermaid-mac',
    demo: { from: 'proof.md', to: 'Formeln + Diagramme' },
    replaces: 'GitHub, mermaid-cli, LaTeX',
    title: 'Formeln (LaTeX) und Mermaid-Diagramme in Markdown auf dem Mac rendern',
    metaTitle: 'Formeln (LaTeX) und Mermaid in Markdown rendern (Mac)',
    description:
      'LaTeX-Formeln und Mermaid-Diagramme aus Markdown unter macOS darstellen: GitHub, Editor-Erweiterungen, pandoc und MarkPeek mit enthaltenen Engines, offline.',
    lede:
      'Markdown selbst kennt weder Formeln noch Diagramme. Werkzeuge ergänzen sie mit Dollarzeichen im LaTeX-Stil und Mermaid-Codeblöcken, aber die meisten Mac-Viewer zeigen sie als Rohtext. Diese Anleitung behandelt, wo beides gerendert wird und wie MarkPeek es in der App, in Exporten und in Quick Look ohne Netzwerkverbindung zeigt.',
    image: IMG.splitDark,
    sections: [
      {
        heading: 'Die Syntax, auf die sich die meisten Werkzeuge einigen',
        paras: [
          'Formeln werden mit Dollarzeichen geschrieben: einfache für Inline-Formeln, doppelte für einen abgesetzten Block. Diagramme werden als Codeblock geschrieben, dessen Sprache mermaid ist. Unterstützt ein Werkzeug das, wird dieselbe Datei anderswo genauso gerendert.',
        ],
        code: 'Inline: $E = mc^2$\n\n$$\n\\int_0^1 x^2 \\, dx = \\tfrac{1}{3}\n$$\n\n```mermaid\ngraph LR\n  A[Write] --> B[Preview]\n```',
      },
      {
        heading: 'Option 1: Auf GitHub pushen',
        paras: [
          'GitHub rendert auf seiner Website sowohl Formeln als auch Mermaid in Markdown-Dateien. Das ist für eine README praktisch, heißt aber, eine Datei zu committen und zu pushen, nur um zu sehen, wie sie aussieht, und der Inhalt muss in einem Repository liegen.',
        ],
      },
      {
        heading: 'Option 2: Ein Code-Editor mit Erweiterungen',
        paras: [
          'Editoren wie VS Code rendern Markdown in einer seitlichen Vorschau, und Erweiterungen ergänzen Mermaid-Unterstützung. Das funktioniert gut für alle, die ohnehin im Editor leben, doch jede Funktion hängt von der gewählten Erweiterung und ihrer Version ab, und nichts davon hilft dem Finder oder Quick Look.',
        ],
      },
      {
        heading: 'Option 3: pandoc und mermaid-cli',
        paras: [
          'pandoc kann Markdown-Formeln mit MathJax in HTML oder über LaTeX in PDF umwandeln. Mermaid-Diagramme brauchen das separate Werkzeug mermaid-cli, das einen Headless-Browser startet, um jedes Diagramm zuerst in ein Bild zu verwandeln. Das ist flexibel und skriptbar, und schwerfällig, um ein einzelnes Dokument zu lesen.',
        ],
        note: 'Wo es hakt: Die Einrichtung ist eine Pipeline, kein Viewer. Ergebnisse sehen Sie erst, nachdem Sie Befehle ausgeführt haben.',
      },
      {
        heading: 'Der Weg mit MarkPeek',
        paras: [
          'MarkPeek rendert Formeln mit MathJax 3.2.2 und Diagramme mit Mermaid 11.4.1, beides in der App enthalten. Es gibt keinen CDN-Aufruf, es funktioniert also offline. Die Engines werden nur für Dokumente geladen, die sie nutzen.',
        ],
        steps: [
          'Inline-Formeln zwischen einfachen Dollarzeichen schreiben und abgesetzte Formeln zwischen doppelten Dollarzeichen.',
          'Ein Diagramm als Codeblock schreiben, dessen Sprache mermaid ist. Die Groß- und Kleinschreibung des Sprachnamens spielt keine Rolle.',
          'Die Datei in MarkPeek in Preview öffnen oder in Split (⌘2), um den Quelltext neben der gerenderten Seite zu bearbeiten.',
          'Im Finder die Leertaste auf die Datei drücken, um sie in Quick Look zu sehen, oder File ▸ „Export as PDF…“ (⇧⌘E) bzw. „Export as HTML…“ (⌥⌘E) wählen. Formeln und Diagramme werden in allen gerendert.',
        ],
        image: IMG.quicklookMath,
      },
      {
        heading: 'Regeln für Dollarzeichen',
        paras: [
          'Damit Preise nicht zu Formeln werden, wendet MarkPeek auf Inline-Formeln eine einfache Regel an: Auf das öffnende Dollarzeichen darf kein Leerraum folgen, und dem schließenden darf weder Leerraum vorangehen noch ein Wortzeichen folgen. „costs $5 or $10“ bleibt also unberührt, während $x + y$ gerendert wird. Dollarzeichen in Code-Spans und Codeblöcken werden übersprungen.',
          'Mermaid läuft im strengen Sicherheitsmodus, und seine Farben folgen dem hellen oder dunklen Schema des Dokuments.',
        ],
      },
      {
        heading: 'Formeln und Diagramme, die lesbar bleiben',
        paras: [
          'Setzen Sie abgesetzte Formeln auf eigene Zeilen zwischen die doppelten Dollarzeichen und lassen Sie davor und danach eine Leerzeile. Beginnen Sie bei Diagrammen klein: Ein kurzer Graph von links nach rechts liest sich in der Vorschau besser als ein ausufernder. Erscheint ein Diagramm nicht, prüfen Sie zuerst den Zaun: Er muss mit drei Backticks und dem Wort mermaid beginnen und mit drei Backticks in einer eigenen Zeile enden. Dollarzeichen im Fließtext, etwa bei Preisen, sind unproblematisch, solange kein verirrtes Paar vorkommt, das wie eine Formel aussieht.',
          'Weil die Split-Ansicht (⌘2) den Quelltext neben der gerenderten Seite zeigt, lässt sich eine Formel dort am leichtesten korrigieren: Symbol ändern, nach rechts schauen, nachjustieren. Quick Look eignet sich am besten, um die fertige Datei im Finder zu prüfen, und die App für die Arbeit dazwischen.',
        ],
      },
      {
        heading: 'Einstellungen und Grenzen',
        bullets: [
          'Quick Look rendert Formeln und Mermaid in einer Offscreen-Webansicht mit Zeitlimit. Dauert es zu lange, zeigt die Vorschau stattdessen den Quelltext, statt zu warten.',
          'Themes steuern den umgebenden Text, Überschriften und Codeblöcke. Codeblöcke erhalten außerdem Syntaxfarben für 16 Sprachfamilien, die sich unter Theme Inspector ▸ Extras ▸ „Syntax colors“ umschalten lassen.',
          'MathJax gibt SVG aus, Formeln bleiben also scharf, wenn Sie mit ⌘= zoomen oder ein PDF exportieren.',
        ],
      },
    ],
    faq: [
      { q: 'Braucht MarkPeek für Formeln und Diagramme eine Internetverbindung?', a: 'Nein. MathJax und Mermaid sind in der App enthalten. Nur entfernte Bilder, auf die per URL verwiesen wird, kommen aus dem Web.' },
      { q: 'Welche Formelsyntax wird verwendet?', a: 'Formeln im TeX-Stil zwischen Dollarzeichen, gerendert von MathJax. Einfache Dollarzeichen ergeben eine Inline-Formel, doppelte einen abgesetzten Block.' },
      { q: 'Zeigt Quick Look Mermaid-Diagramme?', a: 'Ja, beim Öffnen der Vorschau offscreen gerendert. Läuft das Rendern in ein Zeitlimit, fällt die Vorschau auf den Quelltext zurück.' },
      { q: 'Erscheinen Formeln und Mermaid in exportierten Dateien?', a: 'Ja. Der PDF-Export rendert sie, und die exportierte HTML-Datei enthält MathJax oder Mermaid, wenn das Dokument sie nutzt.' },
    ],
    related: ['markdown-to-pdf-mac', 'quick-look-markdown-preview-mac', 'edit-markdown-live-preview-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'edit-markdown-live-preview-mac',
    demo: { from: 'draft.md', to: 'Live-Vorschau' },
    replaces: 'TextEdit, VS Code, Browser-Editoren',
    title: 'Markdown auf dem Mac mit Live-Vorschau bearbeiten',
    metaTitle: 'Markdown mit Live-Vorschau bearbeiten (Mac) | MarkPeek',
    description:
      'Markdown auf dem Mac mit Live-Vorschau schreiben: TextEdit, VS Code, Browser-Editoren und die MarkPeek-Split-Ansicht mit Scroll-Abgleich, Focus Mode und Auto Save.',
    lede:
      'Markdown blind zu schreiben ist in Ordnung, bis eine Tabelle oder eine verschachtelte Liste schiefgeht. Eine Live-Vorschau zeigt das gerenderte Ergebnis neben dem Text, während Sie tippen. Der Mac hat keinen eigenen Markdown-Editor, hier also ein Vergleich der Optionen und die Funktionsweise der Split-Ansicht von MarkPeek.',
    image: IMG.splitLight,
    sections: [
      {
        heading: 'Option 1: TextEdit',
        paras: [
          'TextEdit bearbeitet Markdown als reinen Text und zeigt keine Vorschau. Um Ihre Arbeit zu prüfen, sichern Sie die Datei, öffnen sie woanders und schauen nach. Für eine kurze Notiz ist das akzeptabel, bei einem langen Dokument ein langsamer Kreislauf.',
        ],
      },
      {
        heading: 'Option 2: VS Code',
        paras: [
          'VS Code hat eine eingebaute Markdown-Vorschau, die Sie neben dem Editor öffnen können und die sich beim Tippen aktualisiert. Sie ist mächtig, mit Suche über Dateien hinweg und Erweiterungen für fast alles, aber VS Code ist eine vollständige Entwicklungsumgebung. Viele wollen nur eine Seite schreiben und sehen.',
        ],
      },
      {
        heading: 'Option 3: Ein webbasierter Editor',
        paras: [
          'Browser-Editoren bieten eine geteilte Ansicht ohne Installation. Ihr Dokument liegt dann aber in einer Webseite, meist ohne direkte Verbindung zur Datei auf dem Datenträger, sodass Sichern heißt, Text wieder herauszukopieren. Für Dateien, die in Ordnern liegen, die Sie ohnehin verwalten, passen sie schlecht.',
        ],
        note: 'Wo es hakt: Jede Option hat entweder keine Vorschau, bringt mehr Gewicht mit, als die Aufgabe braucht, oder sitzt fern von Ihren Dateien.',
      },
      {
        heading: 'Der Weg mit MarkPeek',
        paras: [
          'MarkPeek bearbeitet Dateien an Ort und Stelle. Es hat drei Ansichtsmodi in einer Symbolleistenauswahl namens „View“: Preview, Split und Edit.',
        ],
        steps: [
          'Eine Markdown-Datei mit ⌘O öffnen oder auf das Fenster ziehen.',
          '⌘2 für Split drücken. Der Markdown-Quelltext steht links, die gerenderte Seite rechts, im aktiven Theme.',
          'Tippen. Die Vorschau aktualisiert sich, beim Überfahren eines Absatzes wird er auf der anderen Seite hervorgehoben, und das Scrollen hält beide Seiten im Gleichschritt.',
          'Mit ⌘S sichern oder „Auto Save“ in der Statusleiste einschalten, damit MarkPeek kurz nach dem Tippen sichert.',
          '⌘1 für eine Preview in voller Breite drücken, wenn Sie das Ergebnis lesen wollen.',
        ],
        image: IMG.tour,
      },
      {
        heading: 'Focus Mode, Find und die Outline',
        paras: [
          'Focus Mode (⌥⌘F) wechselt zu Edit und blendet Seitenleiste und Inspector aus, sodass nur der Text bleibt. Wählen Sie „Exit Focus Mode“ im Menü View oder die Schaltfläche „Exit Focus“ in der Symbolleiste, um zurückzukehren.',
          'Find in Document… (⌘F) öffnet eine Suchleiste, mit ⌘G für den nächsten Treffer und ⇧⌘G für den vorherigen. Die Outline in der Seitenleiste listet die Überschriften des Dokuments, damit Sie in einer langen Datei navigieren können. Die Statusleiste zeigt Ihre Wortzahl, zum Beispiel „232 words“, und den Sicherungsstatus: „Saved“, „Unsaved changes“ oder „Saving…“.',
        ],
      },
      {
        heading: 'Wenn sich die Datei unter Ihnen ändert',
        paras: [
          'Ändert ein anderes Programm die Datei, während sie in MarkPeek geöffnet ist, meldet ein Hinweis: „This file changed on disk. Your unsaved edits are kept.“ Danach können Sie „Reload from Disk“ oder „Keep Mine“ wählen. So können Sie ein Dokument gefahrlos geöffnet lassen, während ein Skript, ein Sync-Client oder ein anderer Editor daran arbeitet.',
        ],
      },
      {
        heading: 'Ein Schreibablauf, der funktioniert',
        paras: [
          'Entwerfen Sie in der Split-Ansicht mit eingeschaltetem „Auto Save“, damit jede Pause Ihre Arbeit sichert. Ist ein Abschnitt fertig, drücken Sie ⌘1, um die Seite in voller Breite zu lesen und Überschriften, Listen und Tabellen so zu prüfen, wie ein Leser sie sieht. Wechseln Sie das Theme zu etwas Schlichtem oder Serif, um den Text selbst zu beurteilen, und dann zurück zu Ihrem gewohnten. Drücken Sie ⌥⌘F für den Focus Mode, wenn Sie einfach nur schreiben wollen.',
        ],
      },
      {
        heading: 'Einstellungen, die das Bearbeiten betreffen',
        bullets: [
          'Settings (⌘,) ▸ General ▸ Documents: „Save automatically while editing“ und „Reopen the last document at launch“.',
          'Theme Inspector (⌥⌘I): Die Tabs Type, Layout, Colors und Extras ändern die Vorschau live. Unter Extras lassen sich Überschriftennummerierung, Initiale, Zeilennummern in Codeblöcken und mehr einschalten.',
          'Bilder: Einmal einen Ordner freigeben („Allow a Folder…“), damit neben dem Dokument gespeicherte Bilder in der Vorschau erscheinen.',
        ],
      },
      {
        heading: 'Was der Editor ist und was nicht',
        paras: [
          'MarkPeek ist zuerst ein Reader, mit einem Editor für den Text selbst. Die Vorschau unterstützt CommonMark, Tabellen, Aufgabenlisten, Formeln und Mermaid, doch Fußnoten, Hinweisblöcke, Emoji-Kürzel und Wiki-Links werden nicht gerendert. Verlassen Sie sich darauf, behalten Sie für diese Dateien einen anderen Editor.',
        ],
      },
    ],
    faq: [
      { q: 'Hat MarkPeek eine Live-Vorschau?', a: 'Ja. Die Split-Ansicht (⌘2) zeigt den Markdown-Quelltext neben der gerenderten Seite und aktualisiert sich beim Tippen.' },
      { q: 'Sichert es automatisch?', a: 'Optional. „Auto Save“ in der Statusleiste oder „Save automatically while editing“ in den Settings einschalten. Standardmäßig sichert es nicht automatisch.' },
      { q: 'Kann ich in getrennten Fenstern bearbeiten und lesen?', a: 'Die drei Ansichtsmodi (Preview, Split, Edit) teilen sich ein Fenster. Mit Split sehen Sie beides gleichzeitig.' },
      { q: 'Was passiert, wenn ich die Datei in einer anderen App bearbeite?', a: 'MarkPeek bemerkt die Änderung auf dem Datenträger, behält Ihre ungesicherten Änderungen und lässt Sie „Reload from Disk“ oder „Keep Mine“ wählen.' },
    ],
    related: ['open-view-md-files-mac', 'markdown-math-mermaid-mac', 'markdown-to-pdf-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'fix-quick-look-markdown-plain-text',
    demo: { from: 'notes.md', to: 'kein Rohtext' },
    replaces: 'ein defektes Quick-Look-Setup',
    title: 'Quick Look zeigt Markdown als reinen Text: Lösung für den Mac',
    metaTitle: 'Quick Look zeigt Markdown als Rohtext: Lösung (Mac)',
    description:
      'Quick Look zeigt noch Rohtext? Erweiterung in den Systemeinstellungen aktivieren, Cache mit qlmanage -r zurücksetzen, Dateityp prüfen. Schritte für MarkPeek.',
    lede:
      'Sie haben eine Markdown-Vorschau-Erweiterung installiert, die Leertaste auf einer .md-Datei gedrückt und trotzdem Rohtext bekommen. Fast immer ist es eines von vier Dingen: Die Erweiterung ist ausgeschaltet, die App wurde nie gestartet, Quick Look hat das alte Ergebnis zwischengespeichert, oder der Dateityp gehört nicht zu denen, die die Erweiterung abdeckt. Gehen Sie sie in dieser Reihenfolge durch.',
    image: IMG.finderSpace,
    sections: [
      {
        heading: 'Warum macOS überhaupt Rohtext zeigt',
        paras: [
          'Markdown ist ein Textformat, ohne installierte Markdown-Vorschau fällt Quick Look deshalb auf reinen Text zurück. Eine Vorschau-Erweiterung muss sich für Markdown-Inhaltstypen registrieren, und macOS lässt Sie jede Erweiterung ein- oder ausschalten. Solange sie nicht beides ist, registriert und aktiviert, sehen Sie den Quelltext.',
        ],
      },
      {
        heading: 'Lösung 1: Die App einmal starten',
        paras: [
          'Quick-Look-Erweiterungen liegen in einem App-Paket, und macOS entdeckt sie erst, nachdem die App geöffnet wurde. Haben Sie die App installiert und nie gestartet, ist die Erweiterung noch nicht registriert. Öffnen Sie MarkPeek einmal. Beim ersten Start erscheint außerdem eine Welcome Tour, die Finder-Vorschauen, Bildzugriff und die Standard-App durchgeht. Weigert sich macOS, die App zu öffnen, weil sie nicht notarisiert ist, entfernen Sie zuerst das Quarantäne-Flag.',
        ],
        code: 'xattr -dr com.apple.quarantine /Applications/MarkPeek.app',
        note: 'Alternativ versuchen Sie, die App zu öffnen, und gehen dann zu Systemeinstellungen ▸ Datenschutz & Sicherheit und wählen „Trotzdem öffnen“. Lassen Sie die App in /Applications (Programme).',
      },
      {
        heading: 'Lösung 2: Die Erweiterung einschalten',
        paras: [
          'Auf den meisten Macs aktiviert macOS eine neue Quick-Look-Erweiterung automatisch. Ist das nicht geschehen, öffnen Sie Systemeinstellungen ▸ Allgemein ▸ Anmeldeobjekte & Erweiterungen ▸ Übersicht (so heißt Quick Look dort) und schalten MarkPeek ein. MarkPeek kann Sie dorthin bringen: In Settings ▸ General hat die Zeile „Finder previews“ eine Schaltfläche „Open Extension Settings…“, und die Welcome Tour hat dieselbe Schaltfläche im Schritt Finder Previews.',
        ],
      },
      {
        heading: 'Lösung 3: Den Quick-Look-Cache zurücksetzen',
        paras: [
          'Quick Look speichert erzeugte Vorschauen und eine Liste seiner Erweiterungen. Setzen Sie ihn nach dem Aktivieren einer Erweiterung zurück, damit der Finder neu anfragt.',
        ],
        code: 'qlmanage -r\nqlmanage -r cache',
        note: 'Zeigt ein Finder-Fenster noch die alte Vorschau, schließen Sie das Quick-Look-Fenster, wählen eine andere Datei aus und versuchen es erneut. Den Finder neu zu starten ist das letzte Mittel.',
        image: IMG.quicklook,
      },
      {
        heading: 'Lösung 4: Den Dateityp prüfen',
        paras: [
          'Die Vorschau gilt für Markdown-Inhaltstypen, nicht für jede Textdatei. MarkPeek deckt diese Endungen ab: .md, .markdown, .mdown, .mkd, .mkdn, .mdwn, .mdtxt, .mdtext, .mdx, .rmd und .qmd, dazu die Markdown-Typen von iA Writer und TextBundle. Eine Datei namens notes.txt, die zufällig Markdown enthält, ist für macOS reiner Text und wird nicht in der Vorschau angezeigt, obwohl der Öffnen-Dialog von MarkPeek .txt akzeptiert. Benennen Sie sie in .md um und drücken Sie erneut die Leertaste.',
          'Eine einzelne Datei können Sie im Terminal testen. Der Befehl öffnet dafür ein Quick-Look-Fenster, was hilft, ein Finder-Problem von einem Dateiproblem zu trennen.',
        ],
        code: 'qlmanage -p ~/Documents/notes.md',
      },
      {
        heading: 'Lösung 5: Konkurrierende Vorschau-Programme prüfen',
        paras: [
          'Ist eine weitere Markdown-Quick-Look-Erweiterung installiert, beanspruchen womöglich zwei Erweiterungen dieselben Dateitypen. Schalten Sie die, die Sie nicht wollen, im selben Bereich der Systemeinstellungen aus und setzen Sie den Cache erneut zurück.',
        ],
      },
      {
        heading: 'Wenn nichts hilft',
        paras: [
          'Prüfen Sie, ob Sie macOS 14 Sonoma oder neuer haben, denn MarkPeek unterstützt ältere Versionen nicht. Vergewissern Sie sich, dass die App in /Applications liegt und nach jedem Verschieben oder Ersetzen gestartet wurde. Beenden Sie den Finder und öffnen Sie ihn neu, oder melden Sie sich ab und wieder an, damit macOS seine Erweiterungen neu einliest. Haben Sie MarkPeek aus dem Quellcode gebaut, registriert das Build-Skript die Erweiterungen und setzt den Quick-Look-Cache für Sie zurück, führen Sie es also nach jedem Neubau erneut aus.',
        ],
      },
      {
        heading: 'Zwei Dinge, die wie Fehler aussehen, aber keine sind',
        bullets: [
          'Fehlende Bilder: MarkPeek läuft in der macOS-Sandbox und kann die Bilder neben einem Dokument nicht lesen, bis Sie den Ordner mit „Allow a Folder…“ in Settings ▸ General ▸ Images freigeben. Danach sind auch Unterordner abgedeckt.',
          'Miniaturen: Finder-Symbole nutzen eine eigene Miniatur-Erweiterung, die eine kleine Seite in der hellen Palette des aktiven Themes zeichnet. Sie kann von der Leertasten-Vorschau abweichen, und bei manchen Endungen entscheidet macOS, welche Miniatur es zeigt.',
        ],
      },
      {
        heading: 'So prüfen Sie, ob es funktioniert',
        paras: [
          'Eine Markdown-Datei auswählen, die Leertaste drücken und im Quick-Look-Fenster nach gerenderten Überschriften, einem gestalteten Codeblock und der Schaltfläche „Open with MarkPeek“ schauen. Der Look folgt dem in der App aktiven Theme, das Theme zu wechseln und erneut die Leertaste zu drücken ist daher die schnellste Probe.',
        ],
      },
    ],
    faq: [
      { q: 'Quick Look zeigt nach dem Aktivieren der Erweiterung weiter Rohtext. Was nun?', a: 'Führen Sie qlmanage -r im Terminal aus, um den Cache zurückzusetzen, schließen Sie das Quick-Look-Fenster und versuchen Sie es erneut. Prüfen Sie, dass die Datei auf .md oder eine andere unterstützte Endung endet.' },
      { q: 'Wo ist der Schalter für die Quick-Look-Erweiterung?', a: 'Systemeinstellungen ▸ Allgemein ▸ Anmeldeobjekte & Erweiterungen ▸ Übersicht. Die Schaltfläche „Open Extension Settings…“ von MarkPeek öffnet ihn.' },
      { q: 'Warum muss ich zuerst die App öffnen?', a: 'macOS registriert Erweiterungen, wenn es die App sieht. Einmal MarkPeek zu starten macht seine Quick-Look- und Miniatur-Erweiterungen verfügbar.' },
      { q: 'Funktioniert die Vorschau bei .txt-Dateien?', a: 'Nein. Die Quick-Look-Erweiterung deckt Markdown-Inhaltstypen ab. Benennen Sie die Datei in .md um, um die Vorschau zu erhalten.' },
    ],
    related: ['quick-look-markdown-preview-mac', 'open-view-md-files-mac', 'markdown-math-mermaid-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
];
