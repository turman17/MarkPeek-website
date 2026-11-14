import type { Guide, GuideImage } from './content';

const SHOT = 'assets/screenshots/';

const IMG = {
  quicklook: {
    src: `${SHOT}quicklook.webp`,
    width: 900,
    height: 1048,
    alt: 'Une fenêtre Coup d’œil du Finder affichant l’aperçu de Field Notes.md dans le thème Serif sombre, avec un bloc de code swift et un bouton Open with MarkPeek',
  },
  finderSpace: {
    src: `${SHOT}finder-space-poster.webp`,
    width: 1440,
    height: 900,
    alt: 'Une fenêtre Coup d’œil au-dessus du Finder affichant l’aperçu de sample.md dans un thème sombre, avec des maths en bloc rendues et un organigramme Mermaid',
  },
  previewLight: {
    src: `${SHOT}preview-light.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek en mode Preview affichant la note Field Notes: Building a Quiet App dans le thème Serif, avec la barre latérale listant Documents, Outline et six thèmes',
  },
  previewDark: {
    src: `${SHOT}preview-dark.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek en mode Preview avec le thème Paper en apparence sombre, montrant une lettrine et du texte justifié',
  },
  quicklookMath: {
    src: `${SHOT}quicklook-math-mermaid.webp`,
    width: 845,
    height: 980,
    alt: 'Coup d’œil affichant l’aperçu d’un fichier Markdown avec une formule en ligne, une intégrale rendue et un organigramme Mermaid',
  },
  splitLight: {
    src: `${SHOT}split-light.webp`,
    width: 1400,
    height: 832,
    alt: 'MarkPeek en mode Split avec le thème GitHub : la source Markdown à gauche, la page rendue à droite, et Auto Save et un compteur de mots dans la barre d’état',
  },
  splitDark: {
    src: `${SHOT}split-dark.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek en mode Split avec le thème Serif en apparence sombre, la source à gauche et la page rendue à droite',
  },
  inspector: {
    src: `${SHOT}inspector.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek avec le Theme Inspector ouvert sur l’onglet Type pour le thème Modern, avec des sélecteurs de police, des curseurs de taille et un bouton Save As',
  },
  builder: {
    src: `${SHOT}theme-builder.webp`,
    width: 1400,
    height: 880,
    alt: 'La feuille New Theme dans MarkPeek avec Name, Author, Start from, Appearance, les polices, la taille de texte, la largeur de contenu et les couleurs d’accent, et un bouton Create Theme',
  },
  exportPdf: {
    src: `${SHOT}export-pdf.webp`,
    width: 1400,
    height: 880,
    alt: 'La feuille Export as PDF dans MarkPeek avec les options Paper (Size, Orientation, Margins) et Document (Layout, Appearance, Page numbers, Open in Preview when done)',
  },
  tour: {
    src: `${SHOT}app-tour-poster.webp`,
    width: 1440,
    height: 876,
    alt: 'MarkPeek en mode Preview avec le thème Modern en apparence sombre, montrant un document d’exemple avec un tableau de front matter, des titres, des listes et une citation',
  },
} satisfies Record<string, GuideImage>;

const PUBLISHED = '2026-11-12';

export const GUIDES_FR: Guide[] = [
  {
    slug: 'quick-look-markdown-preview-mac',
    demo: { from: 'notes.md', to: 'aperçu Coup d’œil' },
    replaces: 'Coup d’œil en texte brut',
    title: 'Prévisualiser des fichiers Markdown dans le Finder avec Coup d’œil sur Mac',
    metaTitle: 'Aperçu Markdown dans le Finder avec Coup d’œil sur Mac | MarkPeek',
    description:
      'Prévisualisez des .md dans le Finder avec la barre d’espace sur Mac : pourquoi macOS affiche du texte brut, et comment MarkPeek ajoute un aperçu Coup d’œil thématisé.',
    lede:
      'Vous sélectionnez un fichier Markdown dans le Finder, appuyez sur Espace, et macOS affiche le texte brut : dièses, astérisques et tout le reste. Coup d’œil peut afficher une page finie, mais il lui faut quelque chose qui sait rendre le Markdown. Voici ce que le Mac fait seul, où cela s’arrête, et comment obtenir un aperçu mis en forme.',
    image: IMG.quicklook,
    sections: [
      {
        heading: 'Ce que macOS fait d’un fichier Markdown',
        paras: [
          'Les fichiers Markdown sont du texte brut, donc Coup d’œil les traite comme du texte brut. Vous voyez la source telle qu’elle a été écrite, en police à chasse fixe, avec les titres toujours marqués par # et l’emphase toujours entourée d’astérisques. C’est suffisant pour une note de trois lignes, et fatigant pour un long README.',
          'Le panneau d’aperçu d’une fenêtre du Finder utilise les mêmes aperçus, il affiche donc le même texte brut. macOS n’a aucun moteur de rendu Markdown intégré pour Coup d’œil.',
        ],
      },
      {
        heading: 'Option 1 : se contenter du texte brut',
        paras: [
          'Pour les fichiers courts, l’aperçu en texte brut est rapide et ne demande rien. Les flèches du clavier permettent toujours de parcourir un dossier de notes, vous pouvez donc survoler le contenu sans rien ouvrir.',
        ],
        note:
          'Là où ça coince : les tableaux deviennent des lignes de barres verticales, les liens apparaissent sous forme d’URL entre crochets, les blocs de code n’ont pas de coloration syntaxique, et aucune structure n’est perceptible. Les longs documents sont difficiles à parcourir.',
      },
      {
        heading: 'Option 2 : ouvrir le fichier dans une autre app',
        paras: [
          'TextEdit ouvre aussi les .md comme du texte brut, il affiche donc la même vue brute. Des éditeurs comme VS Code ont un aperçu Markdown, mais ouvrir un éditeur pour lire un fichier va à l’encontre d’un coup d’œil rapide, et vous payez le temps de lancement pour chaque fichier.',
          'Il existe aussi des extensions Coup d’œil tierces pour le Markdown. Elles résolvent le même problème, mais vérifiez que celle que vous choisissez est maintenue, s’exécute dans le bac à sable et vous laisse changer le style.',
        ],
      },
      {
        heading: 'La méthode MarkPeek',
        paras: [
          'MarkPeek fournit une extension Coup d’œil pour le Markdown, ainsi qu’une extension de vignettes pour le Finder. Une fois installée et activée, la barre d’espace affiche votre fichier rendu avec le thème MarkPeek actif.',
        ],
        steps: [
          'Déplacez MarkPeek dans /Applications et ouvrez-le une fois, pour que macOS enregistre l’extension Coup d’œil. Il n’est pas notarisé, donc le premier lancement demande une étape Gatekeeper (voir la page d’accueil).',
          'Sélectionnez n’importe quel fichier Markdown dans le Finder : .md, .markdown, .mdown, .mkd, .mkdn, .mdwn, .mdtxt, .mdtext, .mdx, .rmd ou .qmd.',
          'Appuyez sur Espace. La fenêtre Coup d’œil s’ouvre avec la page rendue et un bouton « Open with MarkPeek ».',
          'Utilisez les flèches du clavier pour passer aux autres fichiers Markdown du dossier.',
        ],
      },
      {
        heading: 'Choisir le thème qu’utilise Coup d’œil',
        paras: [
          'Coup d’œil utilise le thème actif dans l’app. Choisissez-en un dans le menu Theme ou la barre latérale : Modern, Serif, GitHub, Plain, Paper ou Mono. Chacun a une palette claire et une palette sombre, et par défaut les aperçus suivent l’apparence du système. Pour affiner un thème, ouvrez le Theme Inspector avec ⌥⌘I et ajustez les onglets Type, Layout, Colors et Extras, puis utilisez « Save As… » pour le conserver.',
          'Comme l’app et l’extension partagent un même stockage de thèmes, il n’y a rien à synchroniser : changez de thème, et le prochain appui sur Espace aura un autre aspect.',
        ],
        image: IMG.inspector,
      },
      {
        heading: 'Réglages et configuration qui comptent',
        bullets: [
          'Interrupteur de l’extension : si l’aperçu affiche toujours du texte brut, allez dans Réglages Système ▸ Général ▸ Éléments de connexion et extensions ▸ Coup d’œil et activez MarkPeek. Dans l’app, Settings ▸ General propose un bouton « Open Extension Settings… » pour ce même panneau.',
          'Aperçus périmés : si le Finder garde l’ancien aspect, exécutez qlmanage -r dans Terminal pour réinitialiser le cache de Coup d’œil.',
          'Images à côté du fichier : le bac à sable ne laisse MarkPeek lire que le fichier que vous ouvrez. Utilisez « Allow a Folder… » (Settings ▸ General ▸ Images, ou File ▸ « Allow Folder Access… ») une seule fois, et chaque document de ce dossier, sous-dossiers compris, affiche ses images.',
        ],
        code: 'qlmanage -r',
      },
      {
        heading: 'Ce qu’il faut attendre de l’aperçu',
        paras: [
          'L’aperçu rend le CommonMark avec tableaux, listes de tâches et texte barré, front matter, coloration syntaxique du code délimité, maths et diagrammes Mermaid. Si un rendu de maths ou de Mermaid prend trop de temps, l’aperçu affiche la source au lieu de se bloquer. Les vignettes sont une extension distincte qui dessine une petite page avec le titre et les premières lignes, toujours dans la palette claire du thème actif.',
          'Les images référencées par une adresse web sont récupérées depuis le web à l’ouverture de l’aperçu. Les images stockées à côté du fichier sont intégrées localement, une fois le dossier autorisé.',
        ],
      },
    ],
    faq: [
      { q: 'Pourquoi Coup d’œil affiche-t-il le Markdown en texte brut ?', a: 'Les fichiers Markdown sont du texte brut et macOS n’a aucun moteur de rendu Markdown intégré pour Coup d’œil, il affiche donc la source. Une extension comme MarkPeek doit fournir le rendu.' },
      { q: 'L’aperçu Coup d’œil suit-il le mode sombre ?', a: 'Oui. Par défaut, un thème suit l’apparence du système, avec sa palette claire ou sombre. Un thème peut aussi être réglé sur toujours clair ou toujours sombre.' },
      { q: 'L’aperçu a-t-il besoin d’une connexion internet ?', a: 'Non, sauf pour les images distantes. Le Markdown, les maths et Mermaid sont rendus hors ligne. Si un document lie une image par une URL http ou https, elle est chargée depuis le web.' },
      { q: 'Quelles extensions de fichier ont droit à l’aperçu ?', a: 'Les onze extensions que MarkPeek déclare : .md, .markdown, .mdown, .mkd, .mkdn, .mdwn, .mdtxt, .mdtext, .mdx, .rmd et .qmd, plus les types de contenu Markdown utilisés par iA Writer et TextBundle.' },
    ],
    related: ['fix-quick-look-markdown-plain-text', 'open-view-md-files-mac', 'markdown-math-mermaid-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'open-view-md-files-mac',
    demo: { from: 'README.md', to: 'page lisible' },
    replaces: 'TextEdit, Xcode, un navigateur',
    title: 'La meilleure façon d’ouvrir et de lire des fichiers .md sur Mac',
    metaTitle: 'Ouvrir et lire des fichiers .md sur Mac | MarkPeek',
    description:
      'Façons d’ouvrir des fichiers Markdown (.md) sur macOS : TextEdit, VS Code, Xcode, un navigateur, Coup d’œil, et MarkPeek comme lecteur thématisé avec vue Split.',
    lede:
      'Double-cliquez sur un fichier .md sur Mac et vous obtenez généralement un éditeur de texte avec des symboles bruts. Le Markdown est fait pour être lu comme du texte mis en forme, et le Mac n’a aucune app intégrée qui le fasse. Voici les options, ce que chacune vous coûte, et comment MarkPeek fonctionne comme lecteur.',
    image: IMG.previewLight,
    sections: [
      {
        heading: 'Ce qu’est un fichier .md',
        paras: [
          'Un fichier .md est du texte brut avec un balisage léger : # pour les titres, des astérisques pour l’emphase, des tirets pour les listes, des accents graves pour le code. Les README, les apps de notes, les dossiers de documentation et le contenu des sites statiques sont tous écrits ainsi. Les extensions voisines comme .markdown, .mdown, .mdx, .rmd et .qmd sont des variantes du Markdown.',
        ],
      },
      {
        heading: 'Option 1 : TextEdit',
        paras: [
          'TextEdit ouvre le Markdown comme du texte brut. Vous voyez la source et pouvez la modifier, sans aucun rendu. Il est toujours disponible et convient pour corriger rapidement une faute de frappe.',
        ],
        note: 'Là où ça coince : aucun rendu, donc lire un long document revient à lire aussi les symboles.',
      },
      {
        heading: 'Option 2 : un éditeur de code comme VS Code ou Xcode',
        paras: [
          'VS Code a un aperçu Markdown intégré, ouvert à côté de l’éditeur avec la commande « Markdown: Open Preview to the Side ». Il rend bien, mais c’est un éditeur de code complet : plus lourd à démarrer, conçu pour des projets plutôt que pour des documents isolés, et les diagrammes ou autres extras demandent des extensions. Xcode ouvre les .md comme du texte source et son installation est très volumineuse pour un simple lecteur.',
        ],
      },
      {
        heading: 'Option 3 : Coup d’œil, un navigateur ou un service web',
        paras: [
          'Coup d’œil affiche le texte brut, comme expliqué dans le guide Coup d’œil. Un navigateur affiche soit la source en texte, soit télécharge le fichier. Coller un document dans un moteur de rendu en ligne fonctionne, mais envoie votre texte sur le serveur de quelqu’un d’autre, ce que vous ne souhaitez peut-être pas pour des notes privées.',
        ],
      },
      {
        heading: 'La méthode MarkPeek',
        paras: [
          'MarkPeek est un lecteur et éditeur Markdown natif pour macOS. Il ouvre les fichiers dans une fenêtre avec une liste de documents, un Outline des titres et un menu de thèmes.',
        ],
        steps: [
          'Ouvrez un fichier avec File ▸ « Open… » (⌘O), en le faisant glisser sur la fenêtre (« Drop to Open »), ou depuis « Open Recent ». Le panneau d’ouverture accepte aussi les fichiers .txt.',
          'Lisez en Preview. Zoomez avec ⌘= et ⌘-, réinitialisez avec ⌘0, cherchez avec « Find in Document… » (⌘F) et passez d’un titre à l’autre dans l’Outline.',
          'Changez l’apparence depuis le menu Theme : Modern, Serif, GitHub, Plain, Paper ou Mono, chacun avec une palette claire et une palette sombre.',
          'Appuyez sur ⌘2 pour Split ou ⌘3 pour Edit quand vous voulez modifier le texte. ⌘1 revient à Preview.',
        ],
      },
      {
        heading: 'Faire de MarkPeek l’app par défaut pour les fichiers Markdown',
        paras: [
          'Ouvrir le Markdown dans MarkPeek est facultatif. Dans Settings (⌘,) ▸ General, la ligne « Markdown files » affiche un bouton « Open in MarkPeek by Default ». Cliquez dessus, et un double-clic sur un fichier .md dans le Finder ouvre MarkPeek. La visite de bienvenue du premier lancement propose le même choix sous le nom « Make MarkPeek the Default ».',
          'Vous pouvez annuler plus tard avec le panneau Lire les informations du Finder : sélectionnez un fichier .md, choisissez Fichier ▸ Lire les informations, puis changez l’app sous « Ouvrir avec ».',
        ],
        image: IMG.builder,
      },
      {
        heading: 'Réglages utiles à connaître',
        bullets: [
          '« Reopen the last document at launch » (Settings ▸ General ▸ Documents) rouvre là où vous vous étiez arrêté. C’est activé par défaut.',
          '« Save automatically while editing » contrôle l’enregistrement automatique. Vous pouvez aussi basculer « Auto Save » dans la barre d’état du mode Edit.',
          'Images : MarkPeek peut lire le document que vous ouvrez, mais pas les images à côté, tant que vous n’autorisez pas le dossier. Utilisez « Allow a Folder… » dans Settings ▸ General ▸ Images, ou le bouton « Allow… » du bandeau qui indique « Images in this folder need access to show. »',
          'Thèmes : ouvrez le Theme Inspector avec ⌥⌘I, ou créez-en un avec Theme ▸ « New Theme… » (⇧⌘N).',
        ],
      },
      {
        heading: 'Une routine pour un dossier de notes',
        paras: [
          'Si votre Markdown vit dans un seul dossier, comme des notes de réunion ou un répertoire de docs, une routine simple fonctionne bien. Appuyez sur Espace dans le Finder pour parcourir les fichiers avec l’aperçu Coup d’œil mis en forme, et descendez dans la liste avec la flèche du bas. Quand l’un mérite de l’attention, choisissez « Open with MarkPeek » dans la fenêtre Coup d’œil pour le lire ou le modifier. Les documents que vous ouvrez sont conservés sous Documents dans la barre latérale, et les dix derniers sont mémorisés dans « Open Recent ».',
        ],
      },
      {
        heading: 'Ce qu’il ne fait pas',
        paras: [
          'MarkPeek rend le CommonMark plus tableaux, listes de tâches et texte barré, front matter, maths et Mermaid. Les notes de bas de page, les blocs d’alerte à la GitHub, les codes courts d’emoji et les liens wiki ne font pas partie du moteur de rendu, donc une note qui en dépend affichera ces éléments en texte brut. Si votre travail en dépend, gardez un autre lecteur pour ces fichiers.',
        ],
      },
    ],
    faq: [
      { q: 'Quelle app ouvre les fichiers .md par défaut sur Mac ?', a: 'Un éditeur de texte brut, généralement TextEdit, ou l’éditeur que vous avez installé. macOS n’a aucune app intégrée qui rende le Markdown.' },
      { q: 'Puis-je ouvrir un fichier .md sans rien installer ?', a: 'Oui : TextEdit ou Coup d’œil affichent le texte brut. Aucun des deux ne rend la mise en forme.' },
      { q: 'MarkPeek ouvre-t-il d’autres fichiers que du Markdown ?', a: 'C’est une app Markdown, mais le panneau d’ouverture et le glisser-déposer acceptent aussi les fichiers .txt.' },
      { q: 'MarkPeek modifiera-t-il mes fichiers ?', a: 'Seulement si vous les modifiez et les enregistrez. La lecture n’écrit rien dans le fichier, et si le fichier change sur le disque pendant qu’il est ouvert, MarkPeek conserve vos modifications non enregistrées et propose de recharger.' },
    ],
    related: ['quick-look-markdown-preview-mac', 'edit-markdown-live-preview-mac', 'markdown-to-pdf-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'markdown-to-pdf-mac',
    demo: { from: 'report.md', to: 'report.pdf' },
    replaces: 'pandoc, contournements d’impression en PDF',
    title: 'Exporter du Markdown en PDF sur Mac',
    metaTitle: 'Exporter du Markdown en PDF sur Mac : impression, pandoc, MarkPeek',
    description:
      'Quatre façons de convertir du Markdown en PDF sur macOS : impression navigateur, VS Code, pandoc, et MarkPeek avec format de papier, marges, numéros de page, clair ou sombre.',
    lede:
      'Le Markdown est facile à écrire et pénible à transmettre à quelqu’un qui ne l’utilise pas. Un PDF règle cela, mais le Mac n’a aucun chemin intégré du Markdown vers le PDF. Voici les contournements habituels, ce que chacun demande, et comment MarkPeek exporte un PDF thématisé en quelques clics.',
    image: IMG.exportPdf,
    sections: [
      {
        heading: 'Option 1 : imprimer en PDF depuis ce qui ouvre le fichier',
        paras: [
          'Tout Mac sait imprimer en PDF depuis la fenêtre d’impression. Le problème est ce qui est imprimé. TextEdit et Coup d’œil impriment la source brute, vous obtenez donc un PDF plein de dièses. Un navigateur peut imprimer du Markdown rendu, mais seulement après avoir mis le fichier sur une page web, par exemple en l’affichant sur GitHub.',
        ],
        note: 'Là où ça coince : le résultat vaut ce que vaut la page depuis laquelle vous imprimez, et vous obtenez les en-têtes, pieds de page et sauts de page du navigateur.',
      },
      {
        heading: 'Option 2 : un éditeur de code avec une extension PDF',
        paras: [
          'VS Code peut exporter du Markdown en PDF via des extensions. Cela marche, mais vous installez un éditeur et une extension pour une tâche ponctuelle, et le style de sortie est celui que fournit l’extension.',
        ],
      },
      {
        heading: 'Option 3 : pandoc',
        paras: [
          'pandoc est la voie puissante, et celle que beaucoup finissent par utiliser. Il convertit le Markdown en PDF, Word et des dizaines d’autres formats. La sortie PDF demande un moteur PDF séparé, souvent une distribution LaTeX, qui est une installation volumineuse, et le style passe par l’écriture de modèles ou d’options.',
        ],
        code: 'brew install pandoc\npandoc report.md -o report.pdf',
        note: 'Là où ça coince : pour un seul document, vous passerez plus de temps à configurer qu’à exporter, et vous n’avez aucun aperçu du résultat avant qu’il soit écrit.',
      },
      {
        heading: 'La méthode MarkPeek',
        paras: [
          'MarkPeek exporte le PDF avec le même moteur de rendu et le même thème que ceux dans lesquels vous lisez le document, donc le PDF exporté utilise le même thème et le même moteur que l’aperçu.',
        ],
        steps: [
          'Ouvrez le document et choisissez un thème dans le menu Theme. Serif ou Paper conviennent aux longues lectures ; Plain convient à tout ce qui sera imprimé.',
          'Choisissez File ▸ « Export as PDF… » (⇧⌘E), ou cliquez sur « Export PDF » dans la barre d’outils.',
          'Dans la feuille, réglez Paper : Size (A4, US Letter, US Legal ou A5), Orientation (Portrait ou Landscape) et Margins (None, Narrow, Normal ou Wide).',
          'Réglez Document : Layout (« Pages » ou « Single long page »), Appearance (« Follow theme », « Light » ou « Dark »), « Page numbers » et « Title at the top of each page ». Laissez « Open in Preview when done » activé pour vérifier le résultat tout de suite.',
          'Cliquez sur « Export… » et choisissez où enregistrer. Le nom de fichier par défaut est celui du document avec l’extension .pdf.',
        ],
        image: IMG.previewDark,
      },
      {
        heading: 'Choisir le thème avant d’exporter',
        paras: [
          'Le thème décide de la police, de la longueur de ligne, du style des titres et des couleurs du PDF, il vaut donc mieux le choisir avant d’exporter que corriger le résultat ensuite. Serif utilise Charter avec un espacement généreux et convient aux rapports. GitHub donne des titres soulignés et des tableaux quadrillés. Plain est noir sur blanc sans décoration. Si aucun ne convient, ouvrez le Theme Inspector (⌥⌘I), modifiez les onglets Type et Layout, et utilisez « Save As… ». La ligne « Theme » de la feuille d’export est en lecture seule et indique simplement quel thème sera utilisé.',
        ],
      },
      {
        heading: 'Des exports répétés plus rapides',
        paras: [
          'MarkPeek mémorise les options que vous avez utilisées. « Export PDF Next to File » (⌥⇧⌘E) saute la feuille, réutilise ces options et enregistre le PDF à côté du fichier Markdown. Pour changer les valeurs de départ, ouvrez Settings (⌘,) ▸ Export : la section « PDF defaults » propose les sélecteurs Paper, Orientation, Margins, Layout et Appearance, et l’interrupteur « Open in Preview when done ».',
        ],
      },
      {
        heading: 'HTML et impression',
        paras: [
          'File ▸ « Export as HTML… » (⌥⌘E) écrit un seul fichier .html autonome : le CSS du thème et les images locales sont intégrés, et MathJax ou Mermaid sont inclus quand le document les utilise. Il n’y a pas de boîte de dialogue d’options. File ▸ « Print… » (⌘P) imprime avec le même moteur de rendu, vous pouvez donc aussi utiliser le menu PDF de la fenêtre d’impression standard.',
          'Ce sont les seuls formats d’export. MarkPeek n’exporte pas vers Word (DOCX), PNG ou EPUB ; utilisez pandoc si vous en avez besoin.',
        ],
      },
      {
        heading: 'À vérifier avant l’envoi',
        bullets: [
          'Documents sombres sur papier : réglez Appearance sur « Light » si le thème dans lequel vous lisez est sombre et que le PDF sera imprimé.',
          '« Single long page » produit une seule page haute et désactive les numéros de page et les titres par page, car ils ne s’appliquent qu’à une sortie paginée.',
          'Les images stockées à côté du fichier Markdown n’apparaissent qu’après avoir autorisé le dossier (« Allow a Folder… »). Les images référencées par une adresse web restent des liens web au lieu d’être intégrées au fichier.',
        ],
      },
    ],
    faq: [
      { q: 'macOS peut-il convertir du Markdown en PDF tout seul ?', a: 'Pas en tant que fonction intégrée. Vous pouvez imprimer du Markdown rendu depuis un navigateur, ou utiliser pandoc ou une app comme MarkPeek.' },
      { q: 'Le PDF ressemble-t-il à l’aperçu à l’écran ?', a: 'Il utilise le même thème et le même moteur. La mise en page PDF ajoute le format de papier, les marges et des numéros de page facultatifs, donc les sauts de page et les largeurs diffèrent de l’aperçu défilant.' },
      { q: 'Puis-je exporter les maths et les diagrammes Mermaid en PDF ?', a: 'Oui. Les maths et Mermaid sont rendus dans l’export PDF comme dans l’app.' },
      { q: 'Puis-je choisir le format de page ?', a: 'Oui : A4, US Letter, US Legal ou A5, en Portrait ou Landscape, avec des marges None, Narrow, Normal ou Wide.' },
    ],
    related: ['markdown-math-mermaid-mac', 'open-view-md-files-mac', 'edit-markdown-live-preview-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'markdown-math-mermaid-mac',
    demo: { from: 'proof.md', to: 'maths + diagrammes' },
    replaces: 'GitHub, mermaid-cli, LaTeX',
    title: 'Rendre des maths (LaTeX) et des diagrammes Mermaid dans le Markdown sur Mac',
    metaTitle: 'Rendre maths (LaTeX) et Mermaid dans le Markdown sur Mac',
    description:
      'Voyez des maths LaTeX et des diagrammes Mermaid rendus depuis du Markdown sur macOS : GitHub, extensions d’éditeur, pandoc, et MarkPeek avec moteurs intégrés, hors ligne.',
    lede:
      'Le Markdown seul n’a ni maths ni diagrammes. Les outils les ajoutent avec des signes dollar à la LaTeX et des blocs de code Mermaid, mais la plupart des lecteurs Mac les affichent en texte brut. Ce guide explique où ils sont rendus et comment MarkPeek affiche les deux dans l’app, dans les exports et dans Coup d’œil sans connexion réseau.',
    image: IMG.splitDark,
    sections: [
      {
        heading: 'La syntaxe sur laquelle la plupart des outils s’accordent',
        paras: [
          'Les maths s’écrivent avec des signes dollar : un seul pour les maths en ligne, deux pour un bloc. Les diagrammes s’écrivent comme un bloc de code délimité dont le langage est mermaid. Si un outil les prend en charge, le même fichier est rendu de la même façon ailleurs.',
        ],
        code: 'Inline: $E = mc^2$\n\n$$\n\\int_0^1 x^2 \\, dx = \\tfrac{1}{3}\n$$\n\n```mermaid\ngraph LR\n  A[Write] --> B[Preview]\n```',
      },
      {
        heading: 'Option 1 : le pousser sur GitHub',
        paras: [
          'GitHub rend à la fois les maths et Mermaid dans les fichiers Markdown de son site. C’est pratique pour un README, mais cela oblige à valider et pousser un fichier juste pour voir son aspect, et le contenu doit se trouver dans un dépôt.',
        ],
      },
      {
        heading: 'Option 2 : un éditeur de code avec des extensions',
        paras: [
          'Des éditeurs comme VS Code rendent le Markdown dans un aperçu latéral, et des extensions ajoutent la prise en charge de Mermaid. Cela marche bien pour ceux qui vivent déjà dans un éditeur, mais chaque fonction dépend de l’extension choisie et de sa version, et rien de tout cela n’aide le Finder ou Coup d’œil.',
        ],
      },
      {
        heading: 'Option 3 : pandoc et mermaid-cli',
        paras: [
          'pandoc peut convertir les maths Markdown en HTML avec MathJax ou en PDF via LaTeX. Les diagrammes Mermaid demandent l’outil séparé mermaid-cli, qui lance un navigateur sans interface, pour transformer d’abord chaque diagramme en image. C’est flexible et scriptable, et lourd pour lire un seul document.',
        ],
        note: 'Là où ça coince : la configuration est une chaîne de traitement, pas un lecteur. Vous ne voyez les résultats qu’après avoir exécuté des commandes.',
      },
      {
        heading: 'La méthode MarkPeek',
        paras: [
          'MarkPeek rend les maths avec MathJax 3.2.2 et les diagrammes avec Mermaid 11.4.1, tous deux inclus dans l’app. Il n’y a aucun appel à un CDN, donc cela fonctionne hors ligne. Les moteurs ne se chargent que pour les documents qui les utilisent.',
        ],
        steps: [
          'Écrivez les maths en ligne entre des signes dollar simples et les maths en bloc entre des doubles signes dollar.',
          'Écrivez un diagramme comme un bloc de code délimité dont le langage est mermaid. Le nom du langage n’est pas sensible à la casse.',
          'Ouvrez le fichier dans MarkPeek en Preview, ou en Split (⌘2) pour modifier la source à côté de la page rendue.',
          'Appuyez sur Espace sur le fichier dans le Finder pour le voir dans Coup d’œil, ou choisissez File ▸ « Export as PDF… » (⇧⌘E) ou « Export as HTML… » (⌥⌘E). Les maths et les diagrammes sont rendus dans tous ces cas.',
        ],
        image: IMG.quicklookMath,
      },
      {
        heading: 'Règles pour les signes dollar',
        paras: [
          'Pour éviter que des prix ne deviennent des maths, MarkPeek applique une règle simple aux maths en ligne : le signe dollar ouvrant ne doit pas être suivi d’une espace, et le fermant ne doit pas être précédé d’une espace ni suivi d’un caractère de mot. Ainsi « costs $5 or $10 » est laissé tel quel, alors que $x + y$ est rendu. Les signes dollar dans les segments de code et les blocs de code délimités sont ignorés.',
          'Mermaid s’exécute dans son mode de sécurité strict, et ses couleurs suivent le schéma clair ou sombre du document.',
        ],
      },
      {
        heading: 'Écrire des maths et des diagrammes qui restent lisibles',
        paras: [
          'Gardez les maths en bloc sur leurs propres lignes entre les doubles signes dollar, et laissez une ligne vide avant et après. Pour les diagrammes, commencez petit : un court graphe de gauche à droite se lit mieux dans un aperçu qu’un graphe tentaculaire. Si un diagramme n’apparaît pas, vérifiez d’abord la clôture : elle doit s’ouvrir par trois accents graves et le mot mermaid, et se fermer par trois accents graves sur leur propre ligne. Les signes dollar dans la prose, comme les prix, ne posent pas de problème tant qu’il n’y a pas de paire isolée qui ressemble à une formule.',
          'Comme la vue Split (⌘2) affiche la source à côté de la page rendue, c’est l’endroit le plus simple pour corriger une formule : changez un symbole, regardez à droite, ajustez. Coup d’œil est idéal pour vérifier le fichier fini dans le Finder, et l’app pour les itérations entre les deux.',
        ],
      },
      {
        heading: 'Réglages et limites',
        bullets: [
          'Coup d’œil rend les maths et Mermaid dans une vue web hors écran avec une limite de temps. Si cela prend trop de temps, l’aperçu affiche la source au lieu d’attendre.',
          'Les thèmes contrôlent le texte, les titres et les blocs de code autour. Les blocs de code délimités reçoivent aussi une coloration syntaxique pour 16 familles de langages, que vous pouvez activer ou non sous Theme Inspector ▸ Extras ▸ « Syntax colors ».',
          'La sortie de MathJax est en SVG, donc les formules restent nettes quand vous zoomez avec ⌘= ou exportez un PDF.',
        ],
      },
    ],
    faq: [
      { q: 'MarkPeek a-t-il besoin d’une connexion internet pour les maths et les diagrammes ?', a: 'Non. MathJax et Mermaid sont inclus dans l’app. Seules les images distantes référencées par URL viennent du web.' },
      { q: 'Quelle syntaxe mathématique utilise-t-il ?', a: 'Des maths de style TeX entre signes dollar, rendues par MathJax. Un signe dollar simple donne des maths en ligne, deux signes dollar donnent un bloc.' },
      { q: 'Coup d’œil affiche-t-il les diagrammes Mermaid ?', a: 'Oui, rendus hors écran à l’ouverture de l’aperçu. Si le rendu dépasse le délai, l’aperçu revient à la source.' },
      { q: 'Les maths et Mermaid apparaissent-ils dans les fichiers exportés ?', a: 'Oui. L’export PDF les rend, et le fichier HTML exporté inclut MathJax ou Mermaid quand le document les utilise.' },
    ],
    related: ['markdown-to-pdf-mac', 'quick-look-markdown-preview-mac', 'edit-markdown-live-preview-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'edit-markdown-live-preview-mac',
    demo: { from: 'draft.md', to: 'aperçu en direct' },
    replaces: 'TextEdit, VS Code, éditeurs en ligne',
    title: 'Éditer du Markdown avec un aperçu en direct sur Mac',
    metaTitle: 'Éditer du Markdown avec aperçu en direct sur Mac | MarkPeek',
    description:
      'Écrivez du Markdown sur Mac avec un aperçu en direct : TextEdit, VS Code, éditeurs en ligne, et la vue Split de MarkPeek avec défilement synchronisé, Focus Mode et Auto Save.',
    lede:
      'Écrire du Markdown à l’aveugle va bien jusqu’à ce qu’un tableau ou une liste imbriquée tourne mal. Un aperçu en direct montre le résultat rendu à côté du texte pendant que vous tapez. Le Mac n’a pas d’éditeur Markdown à lui, voici donc comment se comparent les options et comment fonctionne la vue Split de MarkPeek.',
    image: IMG.splitLight,
    sections: [
      {
        heading: 'Option 1 : TextEdit',
        paras: [
          'TextEdit modifie le Markdown comme du texte brut et n’affiche aucun aperçu. Pour vérifier votre travail, vous enregistrez le fichier, l’ouvrez ailleurs et regardez. Pour une note courte, c’est acceptable ; pour un long document, la boucle est lente.',
        ],
      },
      {
        heading: 'Option 2 : VS Code',
        paras: [
          'VS Code a un aperçu Markdown intégré que vous pouvez ouvrir à côté de l’éditeur et qui se met à jour pendant la saisie. Il est puissant, avec la recherche dans les fichiers et des extensions pour presque tout, mais c’est un environnement de développement complet. Beaucoup de gens veulent seulement écrire une page et la voir.',
        ],
      },
      {
        heading: 'Option 3 : un éditeur en ligne',
        paras: [
          'Les éditeurs dans le navigateur offrent une vue scindée sans rien installer. Votre document se trouve alors dans une page web, généralement sans lien direct avec le fichier sur le disque, donc enregistrer revient à recopier le texte. Ils conviennent mal aux fichiers qui vivent dans des dossiers que vous gérez déjà.',
        ],
        note: 'Là où ça coince : chaque option manque d’aperçu, pèse plus lourd que la tâche ne l’exige, ou se tient loin de vos fichiers.',
      },
      {
        heading: 'La méthode MarkPeek',
        paras: [
          'MarkPeek modifie les fichiers sur place. Il propose trois modes d’affichage dans un sélecteur de barre d’outils nommé « View » : Preview, Split et Edit.',
        ],
        steps: [
          'Ouvrez un fichier Markdown avec ⌘O, ou faites-le glisser sur la fenêtre.',
          'Appuyez sur ⌘2 pour Split. La source Markdown est à gauche et la page rendue à droite, dans le thème actif.',
          'Tapez. L’aperçu se met à jour, survoler un paragraphe le met en évidence de l’autre côté, et le défilement garde les deux côtés synchronisés.',
          'Enregistrez avec ⌘S, ou activez « Auto Save » dans la barre d’état pour que MarkPeek enregistre peu après l’arrêt de la saisie.',
          'Appuyez sur ⌘1 pour un Preview pleine largeur quand vous voulez lire le résultat.',
        ],
        image: IMG.tour,
      },
      {
        heading: 'Focus Mode, Find et Outline',
        paras: [
          'Focus Mode (⌥⌘F) passe en Edit et masque la barre latérale et l’inspecteur, pour ne laisser que le texte. Choisissez « Exit Focus Mode » dans le menu View, ou le bouton « Exit Focus » de la barre d’outils, pour revenir.',
          'Find in Document… (⌘F) ouvre une barre de recherche, avec ⌘G pour l’occurrence suivante et ⇧⌘G pour la précédente. L’Outline dans la barre latérale liste les titres du document pour naviguer dans un long fichier. La barre d’état affiche votre nombre de mots, par exemple « 232 words », et l’état d’enregistrement : « Saved », « Unsaved changes » ou « Saving… ».',
        ],
      },
      {
        heading: 'Quand le fichier change sous vos pieds',
        paras: [
          'Si un autre programme modifie le fichier pendant qu’il est ouvert dans MarkPeek, un bandeau indique « This file changed on disk. Your unsaved edits are kept. » Vous pouvez alors choisir « Reload from Disk » ou « Keep Mine ». Vous pouvez ainsi garder un document ouvert pendant qu’un script, un client de synchronisation ou un autre éditeur y touche, sans risque.',
        ],
      },
      {
        heading: 'Une routine de rédaction qui marche',
        paras: [
          'Rédigez en vue Split, avec « Auto Save » activé, pour que chaque pause enregistre votre travail. Quand une section est terminée, appuyez sur ⌘1 pour lire la page en pleine largeur et vérifier titres, listes et tableaux comme le verra un lecteur. Passez à un thème Plain ou Serif pour juger le texte lui-même, puis revenez à votre thème habituel. Appuyez sur ⌥⌘F pour le Focus Mode quand vous voulez simplement écrire.',
        ],
      },
      {
        heading: 'Réglages qui influencent l’édition',
        bullets: [
          'Settings (⌘,) ▸ General ▸ Documents : « Save automatically while editing » et « Reopen the last document at launch ».',
          'Theme Inspector (⌥⌘I) : les onglets Type, Layout, Colors et Extras modifient l’aperçu en direct. Sous Extras, vous pouvez activer la numérotation des titres, les lettrines, les numéros de ligne dans les blocs de code et plus encore.',
          'Images : autorisez un dossier une fois (« Allow a Folder… ») pour que les images stockées à côté du document apparaissent dans l’aperçu.',
        ],
      },
      {
        heading: 'Ce qu’est et n’est pas l’éditeur',
        paras: [
          'MarkPeek est conçu d’abord comme un lecteur, avec un éditeur pour le texte lui-même. L’aperçu prend en charge CommonMark, les tableaux, les listes de tâches, les maths et Mermaid, mais les notes de bas de page, les blocs d’alerte, les codes courts d’emoji et les liens wiki ne sont pas rendus. Si vous en dépendez, gardez un autre éditeur pour ces fichiers.',
        ],
      },
    ],
    faq: [
      { q: 'MarkPeek a-t-il un aperçu en direct ?', a: 'Oui. La vue Split (⌘2) affiche la source Markdown à côté de la page rendue, et elle se met à jour pendant la saisie.' },
      { q: 'Enregistre-t-il automatiquement ?', a: 'En option. Activez « Auto Save » dans la barre d’état ou « Save automatically while editing » dans Settings. Par défaut, il n’enregistre pas automatiquement.' },
      { q: 'Puis-je éditer et lire dans des fenêtres séparées ?', a: 'Les trois modes d’affichage (Preview, Split, Edit) partagent une même fenêtre. Utilisez Split pour voir les deux à la fois.' },
      { q: 'Que se passe-t-il si je modifie le fichier dans une autre app ?', a: 'MarkPeek détecte le changement sur le disque, conserve vos modifications non enregistrées et vous laisse choisir « Reload from Disk » ou « Keep Mine ».' },
    ],
    related: ['open-view-md-files-mac', 'markdown-math-mermaid-mac', 'markdown-to-pdf-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'fix-quick-look-markdown-plain-text',
    demo: { from: 'notes.md', to: 'pas du texte brut' },
    replaces: 'une configuration Coup d’œil défaillante',
    title: 'Corriger Coup d’œil qui affiche le Markdown en texte brut sur Mac',
    metaTitle: 'Coup d’œil affiche le Markdown en texte brut : correctif Mac',
    description:
      'Coup d’œil affiche toujours du Markdown brut ? Activez l’extension dans Réglages Système, réinitialisez le cache avec qlmanage -r, vérifiez les types de fichier. Étapes pour MarkPeek.',
    lede:
      'Vous avez installé une extension d’aperçu Markdown, appuyé sur Espace sur un fichier .md et obtenu quand même du texte brut. C’est presque toujours l’une de quatre causes : l’extension est désactivée, l’app n’a jamais été lancée, Coup d’œil a mis l’ancien résultat en cache, ou le type de fichier n’est pas pris en charge par l’extension. Passez-les en revue dans cet ordre.',
    image: IMG.finderSpace,
    sections: [
      {
        heading: 'Pourquoi macOS affiche du texte brut au départ',
        paras: [
          'Le Markdown est un format texte, donc sans aperçu Markdown installé, Coup d’œil se rabat sur le texte brut. Une extension d’aperçu doit s’enregistrer pour les types de contenu Markdown, et macOS vous laisse activer ou désactiver chaque extension. Tant qu’elle n’est pas à la fois enregistrée et activée, vous voyez la source.',
        ],
      },
      {
        heading: 'Correctif 1 : lancer l’app une fois',
        paras: [
          'Les extensions Coup d’œil vivent dans le paquet d’une app, et macOS ne les découvre qu’après l’ouverture de l’app. Si vous avez installé l’app sans jamais la démarrer, l’extension n’est pas encore enregistrée. Ouvrez MarkPeek une fois. Le premier lancement affiche aussi une visite de bienvenue (Welcome Tour) qui présente les aperçus du Finder, l’accès aux images et l’app par défaut. Si macOS refuse de l’ouvrir parce qu’elle n’est pas notarisée, supprimez d’abord le drapeau de quarantaine.',
        ],
        code: 'xattr -dr com.apple.quarantine /Applications/MarkPeek.app',
        note: 'Sinon, essayez d’ouvrir l’app, puis allez dans Réglages Système ▸ Confidentialité et sécurité et choisissez « Ouvrir quand même ». Gardez l’app dans /Applications.',
      },
      {
        heading: 'Correctif 2 : activer l’extension',
        paras: [
          'Sur la plupart des Mac, macOS active automatiquement une nouvelle extension Coup d’œil. Si ce n’est pas le cas, ouvrez Réglages Système ▸ Général ▸ Éléments de connexion et extensions ▸ Coup d’œil et activez MarkPeek. MarkPeek peut vous y emmener : dans Settings ▸ General, la ligne « Finder previews » a un bouton « Open Extension Settings… », et le Welcome Tour a le même bouton à son étape Finder Previews.',
        ],
      },
      {
        heading: 'Correctif 3 : réinitialiser le cache de Coup d’œil',
        paras: [
          'Coup d’œil conserve les aperçus générés et une liste de ses extensions. Après avoir activé une extension, réinitialisez-le pour que le Finder redemande.',
        ],
        code: 'qlmanage -r\nqlmanage -r cache',
        note: 'Si une fenêtre du Finder affiche toujours l’ancien aperçu, fermez la fenêtre Coup d’œil, sélectionnez un autre fichier et réessayez. Relancer le Finder est un dernier recours.',
        image: IMG.quicklook,
      },
      {
        heading: 'Correctif 4 : vérifier le type de fichier',
        paras: [
          'L’aperçu s’applique aux types de contenu Markdown, pas à tous les fichiers texte. MarkPeek couvre ces extensions : .md, .markdown, .mdown, .mkd, .mkdn, .mdwn, .mdtxt, .mdtext, .mdx, .rmd et .qmd, plus les types Markdown utilisés par iA Writer et TextBundle. Un fichier appelé notes.txt qui contient du Markdown est du texte brut pour macOS et n’est pas prévisualisé, même si le panneau d’ouverture de MarkPeek accepte .txt. Renommez-le en .md et appuyez de nouveau sur Espace.',
          'Vous pouvez tester un seul fichier depuis Terminal. La commande ouvre une fenêtre Coup d’œil pour ce fichier, ce qui permet de distinguer un problème du Finder d’un problème de fichier.',
        ],
        code: 'qlmanage -p ~/Documents/notes.md',
      },
      {
        heading: 'Correctif 5 : chercher des extensions concurrentes',
        paras: [
          'Si une autre extension Coup d’œil pour le Markdown est installée, deux extensions peuvent revendiquer les mêmes types de fichier. Désactivez celle que vous ne voulez pas dans le même panneau de Réglages Système et réinitialisez de nouveau le cache.',
        ],
      },
      {
        heading: 'Si rien ne marche',
        paras: [
          'Vérifiez que vous êtes sous macOS 14 Sonoma ou ultérieur, car MarkPeek ne prend pas en charge les versions plus anciennes. Confirmez que l’app est dans /Applications et qu’elle a été lancée après tout déplacement ou remplacement. Quittez et rouvrez le Finder, ou fermez puis rouvrez votre session, pour que macOS réanalyse ses extensions. Si vous avez compilé MarkPeek depuis les sources, le script de compilation enregistre les extensions et réinitialise le cache de Coup d’œil pour vous, relancez-le donc après chaque recompilation.',
        ],
      },
      {
        heading: 'Deux choses qui ressemblent à des bugs mais n’en sont pas',
        bullets: [
          'Images manquantes : MarkPeek s’exécute dans le bac à sable de macOS, il ne peut donc pas lire les images à côté d’un document tant que vous n’avez pas autorisé le dossier avec « Allow a Folder… » dans Settings ▸ General ▸ Images. Une fois autorisé, les sous-dossiers sont couverts aussi.',
          'Vignettes : les icônes du Finder utilisent une extension de vignettes distincte qui dessine une petite page dans la palette claire du thème actif. Elles peuvent différer de l’aperçu avec Espace, et macOS décide de la vignette qu’il affiche pour certaines extensions.',
        ],
      },
      {
        heading: 'Comment confirmer que ça marche',
        paras: [
          'Sélectionnez un fichier Markdown, appuyez sur Espace, et cherchez des titres rendus, un bloc de code mis en forme et un bouton « Open with MarkPeek » dans la fenêtre Coup d’œil. L’aspect suit le thème actif dans l’app, donc changer de thème et appuyer de nouveau sur Espace est le contrôle le plus rapide.',
        ],
      },
    ],
    faq: [
      { q: 'Coup d’œil affiche toujours du Markdown brut après avoir activé l’extension. Que faire ?', a: 'Exécutez qlmanage -r dans Terminal pour réinitialiser le cache, fermez la fenêtre Coup d’œil et réessayez. Vérifiez que le fichier se termine par .md ou une autre extension prise en charge.' },
      { q: 'Où se trouve l’interrupteur de l’extension Coup d’œil ?', a: 'Réglages Système ▸ Général ▸ Éléments de connexion et extensions ▸ Coup d’œil. Le bouton « Open Extension Settings… » de MarkPeek l’ouvre.' },
      { q: 'Pourquoi dois-je d’abord ouvrir l’app ?', a: 'macOS enregistre les extensions quand il voit l’app. Lancer MarkPeek une fois rend disponibles ses extensions Coup d’œil et de vignettes.' },
      { q: 'L’aperçu fonctionne-t-il pour les fichiers .txt ?', a: 'Non. L’extension Coup d’œil couvre les types de contenu Markdown. Renommez le fichier en .md pour obtenir l’aperçu.' },
    ],
    related: ['quick-look-markdown-preview-mac', 'open-view-md-files-mac', 'markdown-math-mermaid-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
];
