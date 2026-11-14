import type { Guide, GuideImage } from './content';

const SHOT = 'assets/screenshots/';

const IMG = {
  quicklook: {
    src: `${SHOT}quicklook.webp`,
    width: 900,
    height: 1048,
    alt: 'Una ventana de Vista Rápida del Finder con la vista previa de Field Notes.md en el tema Serif oscuro, con un bloque de código swift y un botón Open with MarkPeek',
  },
  finderSpace: {
    src: `${SHOT}finder-space-poster.webp`,
    width: 1440,
    height: 900,
    alt: 'Una ventana de Vista Rápida sobre el Finder con la vista previa de sample.md en un tema oscuro, con una fórmula en bloque renderizada y un diagrama de flujo Mermaid',
  },
  previewLight: {
    src: `${SHOT}preview-light.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek en modo Preview con la nota Field Notes: Building a Quiet App en el tema Serif, con la barra lateral que lista Documents, Outline y seis temas',
  },
  previewDark: {
    src: `${SHOT}preview-dark.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek en modo Preview con el tema Paper en aspecto oscuro, con una letra capital y texto justificado',
  },
  quicklookMath: {
    src: `${SHOT}quicklook-math-mermaid.webp`,
    width: 845,
    height: 980,
    alt: 'Vista Rápida con la vista previa de un archivo Markdown con una fórmula en línea, una integral renderizada y un diagrama de flujo Mermaid',
  },
  splitLight: {
    src: `${SHOT}split-light.webp`,
    width: 1400,
    height: 832,
    alt: 'MarkPeek en modo Split con el tema GitHub: el código Markdown a la izquierda, la página renderizada a la derecha, y Auto Save y un recuento de palabras en la barra de estado',
  },
  splitDark: {
    src: `${SHOT}split-dark.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek en modo Split con el tema Serif en aspecto oscuro, el código a la izquierda y la página renderizada a la derecha',
  },
  inspector: {
    src: `${SHOT}inspector.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeek con el Theme Inspector abierto en la pestaña Type del tema Modern, con selectores de tipografía, reguladores de tamaño y un botón Save As',
  },
  builder: {
    src: `${SHOT}theme-builder.webp`,
    width: 1400,
    height: 880,
    alt: 'La hoja New Theme de MarkPeek con Name, Author, Start from, Appearance, tipografías, tamaño de texto, ancho del contenido y colores de acento, y un botón Create Theme',
  },
  exportPdf: {
    src: `${SHOT}export-pdf.webp`,
    width: 1400,
    height: 880,
    alt: 'La hoja Export as PDF de MarkPeek con opciones de Paper (Size, Orientation, Margins) y de Document (Layout, Appearance, Page numbers, Open in Preview when done)',
  },
  tour: {
    src: `${SHOT}app-tour-poster.webp`,
    width: 1440,
    height: 876,
    alt: 'MarkPeek en modo Preview con el tema Modern en aspecto oscuro, con un documento de ejemplo que incluye una tabla de front matter, títulos, listas y una cita',
  },
} satisfies Record<string, GuideImage>;

const PUBLISHED = '2026-11-12';

export const GUIDES_ES: Guide[] = [
  {
    slug: 'quick-look-markdown-preview-mac',
    demo: { from: 'notes.md', to: 'vista rápida' },
    replaces: 'Vista Rápida en texto sin formato',
    title: 'Previsualizar archivos Markdown en el Finder con Vista Rápida en Mac',
    metaTitle: 'Previsualizar Markdown en el Finder con Vista Rápida | MarkPeek',
    description:
      'Previsualiza archivos .md en el Finder con la barra espaciadora en Mac: por qué macOS muestra texto sin formato y cómo MarkPeek añade una vista rápida con tema.',
    lede:
      'Selecciona un archivo Markdown en el Finder, pulsa Espacio y macOS muestra el texto sin procesar: almohadillas, asteriscos y todo. Vista Rápida puede mostrar una página terminada, pero necesita algo que sepa renderizar Markdown. Esto es lo que hace el Mac por sí solo, dónde se queda corto y cómo conseguir una vista previa con estilo.',
    image: IMG.quicklook,
    sections: [
      {
        heading: 'Qué hace macOS con un archivo Markdown',
        paras: [
          'Los archivos Markdown son texto sin formato, así que Vista Rápida los trata como tal. Ves el código tal como está escrito, en una tipografía monoespaciada, con los títulos aún marcados con # y el énfasis aún entre asteriscos. Está bien para una nota de tres líneas y resulta cansado para un README largo.',
          'El panel de vista previa de una ventana del Finder usa las mismas vistas, así que muestra el mismo texto sin procesar. macOS no incluye ningún renderizador de Markdown para Vista Rápida.',
        ],
      },
      {
        heading: 'Opción 1: Conformarse con el texto sin procesar',
        paras: [
          'Para archivos cortos, la vista previa en texto sin formato es rápida y no requiere nada. Las teclas de flecha siguen moviéndose por una carpeta de notas, así que puedes echar un vistazo al contenido sin abrir nada.',
        ],
        note:
          'Dónde falla: las tablas se convierten en filas de barras verticales, los enlaces aparecen como URL entre corchetes, los bloques de código no tienen colores de sintaxis y no hay sensación de estructura. Los documentos largos son difíciles de recorrer.',
      },
      {
        heading: 'Opción 2: Abrir el archivo en otra app',
        paras: [
          'TextEdit también abre los .md como texto sin formato, así que muestra la misma vista sin procesar. Editores como VS Code tienen una vista previa de Markdown, pero abrir un editor para leer un archivo anula el sentido de una vista rápida, y pagas el tiempo de arranque con cada archivo.',
          'También existen extensiones de Vista Rápida de terceros para Markdown. Resuelven el mismo problema, así que comprueba que la que elijas tenga mantenimiento, se ejecute en el entorno aislado y te deje cambiar el estilo.',
        ],
      },
      {
        heading: 'La forma de MarkPeek',
        paras: [
          'MarkPeek incluye una extensión de Vista Rápida para Markdown, además de una extensión de miniaturas del Finder. Una vez instalada y activada, la barra espaciadora muestra tu archivo renderizado con el tema activo de MarkPeek.',
        ],
        steps: [
          'Mueve MarkPeek a /Applications y ábrela una vez, para que macOS registre la extensión de Vista Rápida. No está notarizada, así que el primer arranque requiere un paso con Gatekeeper (consulta la página de inicio).',
          'Selecciona cualquier archivo Markdown en el Finder: .md, .markdown, .mdown, .mkd, .mkdn, .mdwn, .mdtxt, .mdtext, .mdx, .rmd o .qmd.',
          'Pulsa Espacio. La ventana de Vista Rápida se abre con la página renderizada y un botón "Open with MarkPeek".',
          'Usa las teclas de flecha para moverte por los demás archivos Markdown de la carpeta.',
        ],
      },
      {
        heading: 'Elige el tema que usa Vista Rápida',
        paras: [
          'Vista Rápida usa el tema que esté activo en la app. Elige uno en el menú Theme o en la barra lateral: Modern, Serif, GitHub, Plain, Paper o Mono. Cada uno tiene una paleta clara y otra oscura, y por defecto las vistas previas siguen el aspecto del sistema. Para ajustar un tema, abre el Theme Inspector con ⌥⌘I y modifica las pestañas Type, Layout, Colors y Extras; después usa "Save As…" para conservarlo.',
          'Como la app y la extensión comparten un único almacén de temas, no hay nada que sincronizar: cambias el tema y la siguiente vez que pulses Espacio se verá distinto.',
        ],
        image: IMG.inspector,
      },
      {
        heading: 'Ajustes y configuración que importan',
        bullets: [
          'Interruptor de la extensión: si la vista previa sigue mostrando texto sin procesar, ve a Ajustes del Sistema ▸ General ▸ Ítems de inicio y extensiones ▸ Vista Rápida y activa MarkPeek. En la app, Settings ▸ General tiene un botón "Open Extension Settings…" para ese mismo panel.',
          'Vistas previas obsoletas: si el Finder conserva el aspecto antiguo, ejecuta qlmanage -r en Terminal para restablecer la caché de Vista Rápida.',
          'Imágenes junto al archivo: el entorno aislado solo deja a MarkPeek leer el archivo que abres. Usa "Allow a Folder…" (Settings ▸ General ▸ Images, o File ▸ "Allow Folder Access…") una vez y todos los documentos de esa carpeta, subcarpetas incluidas, mostrarán sus imágenes.',
        ],
        code: 'qlmanage -r',
      },
      {
        heading: 'Qué esperar de la vista previa',
        paras: [
          'La vista previa renderiza CommonMark con tablas, listas de tareas y tachado, front matter, colores de sintaxis para el código delimitado, fórmulas y diagramas Mermaid. Si el renderizado de una fórmula o de Mermaid tarda demasiado, la vista previa muestra el código fuente en lugar de quedarse colgada. Las miniaturas son una extensión aparte que dibuja una página pequeña con el título y las primeras líneas, siempre con la paleta clara del tema activo.',
          'Las imágenes referenciadas por una dirección web se descargan de la web al abrir la vista previa. Las imágenes guardadas junto al archivo se incrustan en local, una vez permitida la carpeta.',
        ],
      },
    ],
    faq: [
      { q: '¿Por qué Vista Rápida muestra el Markdown como texto sin formato?', a: 'Los archivos Markdown son texto sin formato y macOS no incluye ningún renderizador de Markdown para Vista Rápida, así que muestra el código fuente. Una extensión como MarkPeek tiene que aportar el renderizado.' },
      { q: '¿La vista previa de Vista Rápida sigue el modo oscuro?', a: 'Sí. Por defecto un tema sigue el aspecto del sistema y usa su paleta clara u oscura. También se puede fijar un tema siempre en claro o siempre en oscuro.' },
      { q: '¿La vista previa necesita conexión a internet?', a: 'No, salvo para las imágenes remotas. Markdown, fórmulas y Mermaid se renderizan sin conexión. Si un documento enlaza una imagen mediante una URL http o https, se carga desde la web.' },
      { q: '¿Qué extensiones de archivo tienen vista previa?', a: 'Las once extensiones que declara MarkPeek: .md, .markdown, .mdown, .mkd, .mkdn, .mdwn, .mdtxt, .mdtext, .mdx, .rmd y .qmd, además de los tipos de contenido Markdown que usan iA Writer y TextBundle.' },
    ],
    related: ['fix-quick-look-markdown-plain-text', 'open-view-md-files-mac', 'markdown-math-mermaid-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'open-view-md-files-mac',
    demo: { from: 'README.md', to: 'página legible' },
    replaces: 'TextEdit, Xcode, un navegador',
    title: 'La mejor forma de abrir y ver archivos .md en un Mac',
    metaTitle: 'Cómo abrir y ver archivos .md en Mac | MarkPeek',
    description:
      'Formas de abrir archivos Markdown (.md) en macOS: TextEdit, VS Code, Xcode, un navegador, Vista Rápida y MarkPeek como lector con tema y vista Split.',
    lede:
      'Haz doble clic en un archivo .md en un Mac y lo normal es que se abra un editor de texto con símbolos sin procesar. Markdown está pensado para leerse como texto con formato, y el Mac no tiene ninguna app integrada que lo haga. Estas son las opciones, lo que te cuesta cada una y cómo funciona MarkPeek como lector.',
    image: IMG.previewLight,
    sections: [
      {
        heading: 'Qué es un archivo .md',
        paras: [
          'Un archivo .md es texto sin formato con un marcado ligero: # para los títulos, asteriscos para el énfasis, guiones para las listas, comillas invertidas para el código. Los README, las apps de notas, las carpetas de documentación y el contenido de los sitios estáticos se escriben así. Extensiones relacionadas como .markdown, .mdown, .mdx, .rmd y .qmd son variantes de Markdown.',
        ],
      },
      {
        heading: 'Opción 1: TextEdit',
        paras: [
          'TextEdit abre Markdown como texto sin formato. Ves el código y puedes editarlo, sin nada renderizado. Siempre está disponible y sirve para corregir una errata rápidamente.',
        ],
        note: 'Dónde falla: no renderiza nada, así que leer un documento largo implica leer también los símbolos.',
      },
      {
        heading: 'Opción 2: Un editor de código como VS Code o Xcode',
        paras: [
          'VS Code tiene una vista previa de Markdown integrada, que se abre junto al editor con el comando "Markdown: Open Preview to the Side". Renderiza bien, pero es un editor de código completo: más pesado de arrancar, pensado para proyectos y no para documentos sueltos, y los diagramas u otros extras necesitan extensiones. Xcode abre los .md como texto de código y es una instalación enorme para usarla como lector.',
        ],
      },
      {
        heading: 'Opción 3: Vista Rápida, un navegador o un servicio web',
        paras: [
          'Vista Rápida muestra el texto sin procesar, como se explica en la guía de Vista Rápida. Un navegador muestra el código como texto o descarga el archivo. Pegar un documento en un renderizador web funciona, pero envía tu texto al servidor de otra persona, algo que quizá no quieras para notas privadas.',
        ],
      },
      {
        heading: 'La forma de MarkPeek',
        paras: [
          'MarkPeek es un lector y editor nativo de macOS para Markdown. Abre los archivos en una ventana con una lista de documentos, un Outline de títulos y un menú de temas.',
        ],
        steps: [
          'Abre un archivo con File ▸ "Open…" (⌘O), arrastrándolo a la ventana ("Drop to Open") o desde "Open Recent". El panel Abrir también acepta archivos .txt.',
          'Lee en Preview. Haz zoom con ⌘= y ⌘-, restablécelo con ⌘0, busca con "Find in Document…" (⌘F) y salta entre títulos en el Outline.',
          'Cambia el aspecto desde el menú Theme: Modern, Serif, GitHub, Plain, Paper o Mono, cada uno con paletas clara y oscura.',
          'Pulsa ⌘2 para Split o ⌘3 para Edit cuando quieras cambiar el texto. ⌘1 vuelve a Preview.',
        ],
      },
      {
        heading: 'Haz de MarkPeek la app predeterminada para archivos Markdown',
        paras: [
          'Abrir Markdown en MarkPeek es opcional. En Settings (⌘,) ▸ General, la fila "Markdown files" muestra un botón "Open in MarkPeek by Default". Púlsalo y, al hacer doble clic en un archivo .md en el Finder, se abrirá MarkPeek. El Welcome Tour del primer arranque ofrece la misma opción como "Make MarkPeek the Default".',
          'Puedes deshacerlo más tarde con el panel Obtener información del Finder: selecciona un archivo .md, elige Archivo ▸ Obtener información y cambia la app en "Abrir con".',
        ],
        image: IMG.builder,
      },
      {
        heading: 'Ajustes que conviene conocer',
        bullets: [
          '"Reopen the last document at launch" (Settings ▸ General ▸ Documents) recupera donde lo dejaste. Viene activado por defecto.',
          '"Save automatically while editing" controla el guardado automático. También puedes activar "Auto Save" en la barra de estado del modo Edit.',
          'Imágenes: MarkPeek puede leer el documento que abres, pero no las imágenes que hay a su lado, hasta que permitas la carpeta. Usa "Allow a Folder…" en Settings ▸ General ▸ Images, o el botón "Allow…" del aviso que dice "Images in this folder need access to show."',
          'Temas: abre el Theme Inspector con ⌥⌘I o crea uno con Theme ▸ "New Theme…" (⇧⌘N).',
        ],
      },
      {
        heading: 'Una rutina para una carpeta de notas',
        paras: [
          'Si tu Markdown vive en una sola carpeta, como notas de reuniones o un directorio de documentación, funciona bien una rutina sencilla. Pulsa Espacio en el Finder para echar un vistazo a los archivos con la vista rápida con estilo y baja con la flecha por la lista. Cuando uno merezca atención, elige "Open with MarkPeek" en la ventana de Vista Rápida para leerlo o editarlo. Los documentos que abres se guardan en Documents, en la barra lateral, y los últimos diez se recuerdan en "Open Recent".',
        ],
      },
      {
        heading: 'Lo que no hace',
        paras: [
          'MarkPeek renderiza CommonMark más tablas, listas de tareas y tachado, front matter, fórmulas y Mermaid. Las notas al pie, los bloques de alerta al estilo de GitHub, los códigos de emoji y los enlaces wiki no forman parte del renderizador, así que una nota que dependa de ellos mostrará esas partes como texto sin formato. Si tu flujo de trabajo depende de ellos, conserva otro visor para esos archivos.',
        ],
      },
    ],
    faq: [
      { q: '¿Qué app abre los archivos .md por defecto en un Mac?', a: 'Un editor de texto sin formato, normalmente TextEdit, o el editor que tengas instalado. macOS no tiene ninguna app integrada que renderice Markdown.' },
      { q: '¿Puedo abrir un archivo .md sin instalar nada?', a: 'Sí: TextEdit o Vista Rápida mostrarán el texto sin procesar. Ninguno renderiza el formato.' },
      { q: '¿MarkPeek abre archivos que no sean Markdown?', a: 'Es una app de Markdown, pero el panel Abrir y el arrastrar y soltar también aceptan archivos .txt de texto sin formato.' },
      { q: '¿MarkPeek modificará mis archivos?', a: 'Solo si los editas y los guardas. Ver no escribe en el archivo, y si el archivo cambia en el disco mientras está abierto, MarkPeek conserva tus ediciones sin guardar y ofrece recargar.' },
    ],
    related: ['quick-look-markdown-preview-mac', 'edit-markdown-live-preview-mac', 'markdown-to-pdf-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'markdown-to-pdf-mac',
    demo: { from: 'report.md', to: 'report.pdf' },
    replaces: 'pandoc, trucos de imprimir a PDF',
    title: 'Exportar Markdown a PDF en un Mac',
    metaTitle: 'Exportar Markdown a PDF en Mac: imprimir, pandoc o MarkPeek',
    description:
      'Cuatro formas de convertir Markdown en PDF en macOS: imprimir desde el navegador, VS Code, pandoc y MarkPeek con tamaño de papel, márgenes y páginas numeradas.',
    lede:
      'Markdown es fácil de escribir y incómodo de entregar a alguien que no lo usa. Un PDF lo soluciona, pero el Mac no tiene una vía integrada de Markdown a PDF. Estos son los rodeos habituales, qué te exige cada uno y cómo MarkPeek exporta un PDF con tema en unos pocos clics.',
    image: IMG.exportPdf,
    sections: [
      {
        heading: 'Opción 1: Imprimir en PDF desde lo que abra el archivo',
        paras: [
          'Cualquier Mac puede imprimir en PDF desde el cuadro de diálogo Imprimir. El problema es qué se imprime. TextEdit y Vista Rápida imprimen el código sin procesar, así que acabas con un PDF lleno de almohadillas. Un navegador puede imprimir Markdown renderizado, pero solo después de llevar el archivo a una página web, por ejemplo viéndolo en GitHub.',
        ],
        note: 'Dónde falla: el resultado es tan bueno como la página desde la que imprimes, y obtienes los encabezados, pies y saltos de página del navegador.',
      },
      {
        heading: 'Opción 2: Un editor de código con una extensión de PDF',
        paras: [
          'VS Code puede exportar Markdown a PDF mediante extensiones. Funciona, pero instalas un editor y una extensión para una tarea puntual, y el estilo del resultado es el que traiga la extensión.',
        ],
      },
      {
        heading: 'Opción 3: pandoc',
        paras: [
          'pandoc es la vía potente y la que muchos acaban usando. Convierte Markdown a PDF, Word y decenas de formatos más. La salida en PDF necesita un motor de PDF aparte, normalmente una distribución de LaTeX, que es una instalación grande, y darle estilo implica escribir plantillas u opciones.',
        ],
        code: 'brew install pandoc\npandoc report.md -o report.pdf',
        note: 'Dónde falla: para un solo documento dedicarás más tiempo a la configuración que a la exportación, y no ves una vista previa del resultado antes de que se escriba.',
      },
      {
        heading: 'La forma de MarkPeek',
        paras: [
          'MarkPeek exporta PDF desde el mismo renderizador y tema con los que lees el documento, así que el PDF exportado usa el mismo tema y renderizador que la vista previa.',
        ],
        steps: [
          'Abre el documento y elige un tema en el menú Theme. Serif o Paper van bien para lecturas largas; Plain va bien para cualquier cosa que se vaya a imprimir.',
          'Elige File ▸ "Export as PDF…" (⇧⌘E), o haz clic en "Export PDF" en la barra de herramientas.',
          'En la hoja, ajusta Paper: Size (A4, US Letter, US Legal o A5), Orientation (Portrait o Landscape) y Margins (None, Narrow, Normal o Wide).',
          'Ajusta Document: Layout ("Pages" o "Single long page"), Appearance ("Follow theme", "Light" o "Dark"), "Page numbers" y "Title at the top of each page". Deja activado "Open in Preview when done" para comprobar el resultado al momento.',
          'Haz clic en "Export…" y elige dónde guardar. El nombre de archivo por defecto es el del documento con la extensión .pdf.',
        ],
        image: IMG.previewDark,
      },
      {
        heading: 'Elige el tema antes de exportar',
        paras: [
          'El tema decide la tipografía, la longitud de línea, el estilo de los títulos y los colores del PDF, así que conviene elegirlo antes de exportar en lugar de corregir el resultado después. Serif usa Charter con mucho espacio y va bien para informes. GitHub ofrece títulos subrayados y tablas con cuadrícula. Plain es negro sobre blanco, sin decoración. Si ninguno encaja, abre el Theme Inspector (⌥⌘I), cambia las pestañas Type y Layout y usa "Save As…". La fila "Theme" de la hoja de exportación es de solo lectura y se limita a mostrar qué tema se usará.',
        ],
      },
      {
        heading: 'Exportaciones repetidas más rápidas',
        paras: [
          'MarkPeek recuerda las opciones que usaste. "Export PDF Next to File" (⌥⇧⌘E) se salta la hoja, reutiliza esas opciones y guarda el PDF junto al archivo Markdown. Para cambiar los valores iniciales, abre Settings (⌘,) ▸ Export: la sección "PDF defaults" tiene los selectores Paper, Orientation, Margins, Layout y Appearance y el interruptor "Open in Preview when done".',
        ],
      },
      {
        heading: 'HTML e impresión',
        paras: [
          'File ▸ "Export as HTML…" (⌥⌘E) escribe un único archivo .html autónomo: el CSS del tema y las imágenes locales van incrustados, y se incluyen MathJax o Mermaid cuando el documento los usa. No hay cuadro de opciones. File ▸ "Print…" (⌘P) imprime con el mismo renderizador, así que también puedes usar el menú PDF del propio cuadro de diálogo Imprimir estándar.',
          'Estos son los únicos formatos de exportación. MarkPeek no exporta a Word (DOCX), PNG ni EPUB; usa pandoc si los necesitas.',
        ],
      },
      {
        heading: 'Cosas que comprobar antes de enviarlo',
        bullets: [
          'Documentos oscuros en papel: pon Appearance en "Light" si el tema con el que lees es oscuro y el PDF se va a imprimir.',
          '"Single long page" genera una sola página alta y desactiva los números de página y los títulos por página, porque solo se aplican a la salida paginada.',
          'Las imágenes guardadas junto al archivo Markdown solo aparecen después de permitir la carpeta ("Allow a Folder…"). Las imágenes referenciadas por una dirección web se dejan como enlaces web en lugar de incrustarse en el archivo.',
        ],
      },
    ],
    faq: [
      { q: '¿Puede macOS convertir Markdown a PDF por sí solo?', a: 'No como función integrada. Puedes imprimir Markdown renderizado desde un navegador, o usar pandoc o una app como MarkPeek.' },
      { q: '¿El PDF se parece a la vista previa en pantalla?', a: 'Usa el mismo tema y renderizador. La maquetación del PDF añade tamaño de papel, márgenes y números de página opcionales, así que los saltos de página y los anchos difieren de la vista previa con desplazamiento.' },
      { q: '¿Puedo exportar fórmulas y diagramas Mermaid a PDF?', a: 'Sí. Las fórmulas y Mermaid se renderizan en la exportación a PDF igual que en la app.' },
      { q: '¿Puedo elegir el tamaño de página?', a: 'Sí: A4, US Letter, US Legal o A5, en vertical u horizontal, con márgenes None, Narrow, Normal o Wide.' },
    ],
    related: ['markdown-math-mermaid-mac', 'open-view-md-files-mac', 'edit-markdown-live-preview-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'markdown-math-mermaid-mac',
    demo: { from: 'proof.md', to: 'fórmulas + diagramas' },
    replaces: 'GitHub, mermaid-cli, LaTeX',
    title: 'Renderizar fórmulas (LaTeX) y diagramas Mermaid en Markdown en un Mac',
    metaTitle: 'Renderizar fórmulas (LaTeX) y Mermaid en Markdown en Mac',
    description:
      'Ve fórmulas LaTeX y diagramas Mermaid renderizados desde Markdown en macOS: GitHub, extensiones de editor, pandoc y MarkPeek con motores incluidos y sin conexión.',
    lede:
      'Markdown por sí solo no tiene fórmulas ni diagramas. Las herramientas los añaden con signos de dólar al estilo LaTeX y bloques de código Mermaid, pero la mayoría de los visores de Mac los muestran como texto sin procesar. Esta guía explica dónde se renderizan y cómo MarkPeek muestra ambos en la app, en las exportaciones y en Vista Rápida sin conexión a la red.',
    image: IMG.splitDark,
    sections: [
      {
        heading: 'La sintaxis en la que coinciden casi todas las herramientas',
        paras: [
          'Las fórmulas se escriben con signos de dólar: uno para las fórmulas en línea y dos para un bloque. Los diagramas se escriben como un bloque de código delimitado cuyo lenguaje es mermaid. Si una herramienta admite esto, el mismo archivo se renderiza igual en otros sitios.',
        ],
        code: 'Inline: $E = mc^2$\n\n$$\n\\int_0^1 x^2 \\, dx = \\tfrac{1}{3}\n$$\n\n```mermaid\ngraph LR\n  A[Write] --> B[Preview]\n```',
      },
      {
        heading: 'Opción 1: Subirlo a GitHub',
        paras: [
          'GitHub renderiza tanto fórmulas como Mermaid en los archivos Markdown de su web. Es práctico para un README, pero significa confirmar y subir un archivo solo para ver cómo queda, y el contenido tiene que estar en un repositorio.',
        ],
      },
      {
        heading: 'Opción 2: Un editor de código con extensiones',
        paras: [
          'Editores como VS Code renderizan Markdown en una vista previa lateral, y las extensiones añaden compatibilidad con Mermaid. Funciona bien para quien ya vive en un editor, pero cada función depende de la extensión que elijas y de su versión, y nada de eso ayuda al Finder ni a Vista Rápida.',
        ],
      },
      {
        heading: 'Opción 3: pandoc y mermaid-cli',
        paras: [
          'pandoc puede convertir las fórmulas de Markdown a HTML con MathJax o a PDF mediante LaTeX. Los diagramas Mermaid necesitan la herramienta aparte mermaid-cli, que ejecuta un navegador sin interfaz, para convertir antes cada diagrama en una imagen. Es flexible y programable, y pesado para leer un solo documento.',
        ],
        note: 'Dónde falla: la configuración es una cadena de procesos, no un visor. Solo ves resultados después de ejecutar comandos.',
      },
      {
        heading: 'La forma de MarkPeek',
        paras: [
          'MarkPeek renderiza las fórmulas con MathJax 3.2.2 y los diagramas con Mermaid 11.4.1, ambos incluidos en la app. No hay llamadas a un CDN, así que funciona sin conexión. Los motores solo se cargan para los documentos que los usan.',
        ],
        steps: [
          'Escribe las fórmulas en línea entre signos de dólar simples y las fórmulas en bloque entre signos de dólar dobles.',
          'Escribe un diagrama como un bloque de código delimitado cuyo lenguaje sea mermaid. El nombre del lenguaje no distingue mayúsculas de minúsculas.',
          'Abre el archivo en MarkPeek en Preview, o en Split (⌘2) para editar el código junto a la página renderizada.',
          'Pulsa Espacio sobre el archivo en el Finder para verlo en Vista Rápida, o elige File ▸ "Export as PDF…" (⇧⌘E) o "Export as HTML…" (⌥⌘E). Las fórmulas y los diagramas se renderizan en todos ellos.',
        ],
        image: IMG.quicklookMath,
      },
      {
        heading: 'Reglas para los signos de dólar',
        paras: [
          'Para evitar que los precios se conviertan en fórmulas, MarkPeek aplica una regla sencilla a las fórmulas en línea: el signo de dólar de apertura no debe ir seguido de un espacio en blanco, y el de cierre no debe ir precedido de un espacio en blanco ni seguido de un carácter de palabra. Así, "cuesta $5 o $10" se deja como está, mientras que $x + y$ se renderiza. Los signos de dólar dentro de fragmentos de código y de bloques de código delimitados se omiten.',
          'Mermaid se ejecuta en su modo de seguridad estricto, y sus colores siguen el esquema claro u oscuro del documento.',
        ],
      },
      {
        heading: 'Cómo escribir fórmulas y diagramas que sigan siendo legibles',
        paras: [
          'Coloca las fórmulas en bloque en líneas propias entre los signos de dólar dobles, y deja una línea en blanco antes y después. Para los diagramas, empieza por algo pequeño: un grafo corto de izquierda a derecha se lee mejor en una vista previa que uno enorme. Si un diagrama no aparece, revisa primero el delimitador: debe abrirse con tres comillas invertidas y la palabra mermaid, y cerrarse con tres comillas invertidas en su propia línea. Los signos de dólar en la prosa, como los precios, no dan problemas mientras no haya un par suelto que parezca una fórmula.',
          'Como la vista Split (⌘2) muestra el código junto a la página renderizada, es el lugar más fácil para corregir una fórmula: cambias un símbolo, miras a la derecha y ajustas. Vista Rápida es lo mejor para comprobar el archivo terminado en el Finder, y la app es lo mejor para la iteración intermedia.',
        ],
      },
      {
        heading: 'Ajustes y límites',
        bullets: [
          'Vista Rápida renderiza las fórmulas y Mermaid en una vista web fuera de pantalla con un límite de tiempo. Si tarda demasiado, la vista previa muestra el código fuente en lugar de esperar.',
          'Los temas controlan el texto, los títulos y los bloques de código de alrededor. Los bloques de código delimitados también reciben colores de sintaxis para 16 familias de lenguajes, que puedes activar o desactivar en Theme Inspector ▸ Extras ▸ "Syntax colors".',
          'La salida de MathJax es SVG, así que las fórmulas se mantienen nítidas al hacer zoom con ⌘= o al exportar un PDF.',
        ],
      },
    ],
    faq: [
      { q: '¿MarkPeek necesita conexión a internet para fórmulas y diagramas?', a: 'No. MathJax y Mermaid vienen incluidos en la app. Solo las imágenes remotas referenciadas por URL vienen de la web.' },
      { q: '¿Qué sintaxis de fórmulas usa?', a: 'Fórmulas al estilo TeX entre signos de dólar, renderizadas por MathJax. Un signo de dólar simple crea una fórmula en línea y uno doble crea un bloque.' },
      { q: '¿Vista Rápida muestra los diagramas Mermaid?', a: 'Sí, renderizados fuera de pantalla al abrir la vista previa. Si el renderizado supera el tiempo límite, la vista previa muestra el código fuente.' },
      { q: '¿Las fórmulas y Mermaid aparecen en los archivos exportados?', a: 'Sí. La exportación a PDF los renderiza, y el archivo HTML exportado incluye MathJax o Mermaid cuando el documento los usa.' },
    ],
    related: ['markdown-to-pdf-mac', 'quick-look-markdown-preview-mac', 'edit-markdown-live-preview-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'edit-markdown-live-preview-mac',
    demo: { from: 'draft.md', to: 'vista en directo' },
    replaces: 'TextEdit, VS Code, editores en el navegador',
    title: 'Editar Markdown con vista previa en directo en un Mac',
    metaTitle: 'Editar Markdown con vista previa en directo en Mac | MarkPeek',
    description:
      'Escribe Markdown en un Mac con vista previa en directo: TextEdit, VS Code, editores web y la vista Split de MarkPeek con desplazamiento sincronizado y Auto Save.',
    lede:
      'Escribir Markdown a ciegas va bien hasta que falla una tabla o una lista anidada. Una vista previa en directo muestra el resultado renderizado junto al texto mientras escribes. El Mac no tiene un editor de Markdown propio, así que veamos cómo se comparan las opciones y cómo funciona la vista Split de MarkPeek.',
    image: IMG.splitLight,
    sections: [
      {
        heading: 'Opción 1: TextEdit',
        paras: [
          'TextEdit edita Markdown como texto sin formato y no muestra vista previa. Para comprobar tu trabajo guardas el archivo, lo abres en otro sitio y miras. Para una nota corta es aceptable; para un documento largo es un ciclo lento.',
        ],
      },
      {
        heading: 'Opción 2: VS Code',
        paras: [
          'VS Code tiene una vista previa de Markdown integrada que puedes abrir junto al editor y que se actualiza mientras escribes. Es potente, con búsqueda entre archivos y extensiones para casi todo, pero es un entorno de desarrollo completo. Mucha gente solo quiere escribir una página y verla.',
        ],
      },
      {
        heading: 'Opción 3: Un editor en el navegador',
        paras: [
          'Los editores en el navegador ofrecen una vista dividida sin instalar nada. Pero tu documento queda en una página web, normalmente sin un vínculo directo con el archivo del disco, así que guardar implica copiar el texto de vuelta. Encajan mal con archivos que viven en carpetas que ya gestionas.',
        ],
        note: 'Dónde falla: cada opción o carece de vista previa, o pesa más de lo que necesita la tarea, o queda lejos de tus archivos.',
      },
      {
        heading: 'La forma de MarkPeek',
        paras: [
          'MarkPeek edita los archivos en su sitio. Tiene tres modos de vista en un selector de la barra de herramientas llamado "View": Preview, Split y Edit.',
        ],
        steps: [
          'Abre un archivo Markdown con ⌘O, o arrástralo a la ventana.',
          'Pulsa ⌘2 para Split. El código Markdown queda a la izquierda y la página renderizada a la derecha, con el tema activo.',
          'Escribe. La vista previa se actualiza, al pasar el cursor por un párrafo se resalta en el otro lado y el desplazamiento mantiene sincronizados ambos lados.',
          'Guarda con ⌘S, o activa "Auto Save" en la barra de estado para que MarkPeek guarde poco después de que dejes de escribir.',
          'Pulsa ⌘1 para una vista Preview a ancho completo cuando quieras leer el resultado.',
        ],
        image: IMG.tour,
      },
      {
        heading: 'Focus Mode, Find y el Outline',
        paras: [
          'Focus Mode (⌥⌘F) cambia a Edit y oculta la barra lateral y el inspector, dejando solo el texto. Elige "Exit Focus Mode" en el menú View, o el botón "Exit Focus" de la barra de herramientas, para volver.',
          'Find in Document… (⌘F) abre una barra de búsqueda, con ⌘G para la siguiente coincidencia y ⇧⌘G para la anterior. El Outline de la barra lateral lista los títulos del documento para que puedas moverte por un archivo largo. La barra de estado muestra el recuento de palabras, por ejemplo "232 words", y el estado de guardado: "Saved", "Unsaved changes" o "Saving…".',
        ],
      },
      {
        heading: 'Cuando el archivo cambia por debajo',
        paras: [
          'Si otro programa modifica el archivo mientras está abierto en MarkPeek, un aviso dice "This file changed on disk. Your unsaved edits are kept." Entonces puedes elegir "Reload from Disk" o "Keep Mine". Así es seguro mantener un documento abierto mientras un script, un cliente de sincronización u otro editor lo toca.',
        ],
      },
      {
        heading: 'Una rutina de redacción que funciona',
        paras: [
          'Redacta en la vista Split, con "Auto Save" activado, para que cada pausa guarde tu trabajo. Cuando termines una sección, pulsa ⌘1 para leer la página a ancho completo y revisar títulos, listas y tablas como los verá un lector. Cambia el tema a uno plain o serif para juzgar el texto en sí y luego vuelve al habitual. Pulsa ⌥⌘F para Focus Mode cuando solo quieras escribir.',
        ],
      },
      {
        heading: 'Ajustes que afectan a la edición',
        bullets: [
          'Settings (⌘,) ▸ General ▸ Documents: "Save automatically while editing" y "Reopen the last document at launch".',
          'Theme Inspector (⌥⌘I): las pestañas Type, Layout, Colors y Extras cambian la vista previa en directo. En Extras puedes activar la numeración de títulos, las letras capitales, los números de línea en los bloques de código y más.',
          'Imágenes: permite una carpeta una vez ("Allow a Folder…") para que las imágenes guardadas junto al documento aparezcan en la vista previa.',
        ],
      },
      {
        heading: 'Qué es y qué no es el editor',
        paras: [
          'MarkPeek está pensado primero como lector, con un editor para el propio texto. La vista previa admite CommonMark, tablas, listas de tareas, fórmulas y Mermaid, pero no renderiza notas al pie, bloques de alerta, códigos de emoji ni enlaces wiki. Si dependes de ellos, conserva otro editor para esos archivos.',
        ],
      },
    ],
    faq: [
      { q: '¿MarkPeek tiene vista previa en directo?', a: 'Sí. La vista Split (⌘2) muestra el código Markdown junto a la página renderizada, y se actualiza mientras escribes.' },
      { q: '¿Guarda automáticamente?', a: 'De forma opcional. Activa "Auto Save" en la barra de estado o "Save automatically while editing" en Settings. Por defecto no guarda automáticamente.' },
      { q: '¿Puedo editar y leer en ventanas separadas?', a: 'Los tres modos de vista (Preview, Split, Edit) comparten una sola ventana. Usa Split para ver ambos a la vez.' },
      { q: '¿Qué pasa si edito el archivo en otra app?', a: 'MarkPeek detecta el cambio en el disco, conserva tus ediciones sin guardar y te deja elegir "Reload from Disk" o "Keep Mine".' },
    ],
    related: ['open-view-md-files-mac', 'markdown-math-mermaid-mac', 'markdown-to-pdf-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'fix-quick-look-markdown-plain-text',
    demo: { from: 'notes.md', to: 'no texto sin formato' },
    replaces: 'una configuración de Vista Rápida rota',
    title: 'Solucionar que Vista Rápida muestre Markdown como texto sin formato en Mac',
    metaTitle: 'Vista Rápida muestra Markdown como texto sin formato: solución',
    description:
      '¿Vista Rápida sigue mostrando Markdown sin procesar? Activa la extensión en Ajustes del Sistema, restablece la caché con qlmanage -r y revisa los tipos de archivo.',
    lede:
      'Instalaste una extensión de vista previa de Markdown, pulsaste Espacio en un archivo .md y sigues viendo texto sin procesar. Casi siempre es una de estas cuatro cosas: la extensión está desactivada, la app nunca se abrió, Vista Rápida guardó en caché el resultado antiguo o el tipo de archivo no es uno de los que gestiona la extensión. Revísalas en este orden.',
    image: IMG.finderSpace,
    sections: [
      {
        heading: 'Por qué macOS muestra texto sin formato en primer lugar',
        paras: [
          'Markdown es un formato de texto, así que sin ninguna vista previa de Markdown instalada, Vista Rápida recurre al texto sin formato. Una extensión de vista previa tiene que registrarse para los tipos de contenido Markdown, y macOS te deja activar o desactivar cada extensión. Hasta que está registrada y activada, ves el código fuente.',
        ],
      },
      {
        heading: 'Solución 1: Abre la app una vez',
        paras: [
          'Las extensiones de Vista Rápida viven dentro de un paquete de app, y macOS solo las descubre después de abrir la app. Si instalaste la app y nunca la iniciaste, la extensión aún no está registrada. Abre MarkPeek una vez. El primer arranque también muestra un Welcome Tour que repasa las vistas previas del Finder, el acceso a imágenes y la app predeterminada. Si macOS se niega a abrirla porque no está notarizada, quita primero la marca de cuarentena.',
        ],
        code: 'xattr -dr com.apple.quarantine /Applications/MarkPeek.app',
        note: 'Como alternativa, intenta abrir la app y ve a Ajustes del Sistema ▸ Privacidad y seguridad y elige "Abrir de todos modos". Mantén la app en /Applications.',
      },
      {
        heading: 'Solución 2: Activa la extensión',
        paras: [
          'En la mayoría de los Mac, macOS activa automáticamente una nueva extensión de Vista Rápida. Si no lo hizo, abre Ajustes del Sistema ▸ General ▸ Ítems de inicio y extensiones ▸ Vista Rápida y activa MarkPeek. MarkPeek puede llevarte hasta allí: en Settings ▸ General, la fila "Finder previews" tiene un botón "Open Extension Settings…", y el Welcome Tour tiene el mismo botón en su paso Finder Previews.',
        ],
      },
      {
        heading: 'Solución 3: Restablece la caché de Vista Rápida',
        paras: [
          'Vista Rápida guarda las vistas previas generadas y una lista de sus extensiones. Tras activar una extensión, restablécela para que el Finder vuelva a preguntar.',
        ],
        code: 'qlmanage -r\nqlmanage -r cache',
        note: 'Si una ventana del Finder sigue mostrando la vista previa antigua, cierra la ventana de Vista Rápida, selecciona otro archivo y vuelve a intentarlo. Reiniciar el Finder es el último recurso.',
        image: IMG.quicklook,
      },
      {
        heading: 'Solución 4: Comprueba el tipo de archivo',
        paras: [
          'La vista previa se aplica a los tipos de contenido Markdown, no a cualquier archivo de texto. MarkPeek cubre estas extensiones: .md, .markdown, .mdown, .mkd, .mkdn, .mdwn, .mdtxt, .mdtext, .mdx, .rmd y .qmd, además de los tipos Markdown que usan iA Writer y TextBundle. Un archivo llamado notes.txt que casualmente contenga Markdown es texto sin formato para macOS y no se previsualiza, aunque el panel Abrir de MarkPeek acepte .txt. Cámbiale el nombre a .md y vuelve a pulsar Espacio.',
          'Puedes probar un solo archivo desde Terminal. El comando abre una ventana de Vista Rápida para él, lo que sirve para distinguir un problema del Finder de un problema del archivo.',
        ],
        code: 'qlmanage -p ~/Documents/notes.md',
      },
      {
        heading: 'Solución 5: Busca visores que compitan',
        paras: [
          'Si tienes instalada otra extensión de Vista Rápida para Markdown, dos extensiones pueden reclamar los mismos tipos de archivo. Desactiva la que no quieras en el mismo panel de Ajustes del Sistema y restablece de nuevo la caché.',
        ],
      },
      {
        heading: 'Si nada funciona',
        paras: [
          'Comprueba que tienes macOS 14 Sonoma o posterior, porque MarkPeek no admite versiones anteriores. Confirma que la app está en /Applications y que se abrió después de cualquier movimiento o sustitución. Cierra y vuelve a abrir el Finder, o cierra sesión y vuelve a iniciarla, para que macOS vuelva a analizar sus extensiones. Si compilaste MarkPeek desde el código fuente, el script de compilación registra las extensiones y restablece la caché de Vista Rápida por ti, así que vuelve a ejecutarlo después de recompilar.',
        ],
      },
      {
        heading: 'Dos cosas que parecen fallos pero no lo son',
        bullets: [
          'Imágenes que faltan: MarkPeek se ejecuta en el entorno aislado de macOS, así que no puede leer las imágenes junto a un documento hasta que permitas la carpeta con "Allow a Folder…" en Settings ▸ General ▸ Images. Una vez permitida, también se cubren las subcarpetas.',
          'Miniaturas: los iconos del Finder usan una extensión de miniaturas aparte que dibuja una página pequeña con la paleta clara del tema activo. Puede diferir de la vista con Espacio, y macOS decide qué miniatura muestra para algunas extensiones.',
        ],
      },
      {
        heading: 'Cómo confirmar que funciona',
        paras: [
          'Selecciona un archivo Markdown, pulsa Espacio y busca títulos renderizados, un bloque de código con estilo y un botón "Open with MarkPeek" en la ventana de Vista Rápida. El aspecto sigue el tema activo en la app, así que cambiar el tema y volver a pulsar Espacio es la comprobación más rápida.',
        ],
      },
    ],
    faq: [
      { q: 'Vista Rápida sigue mostrando Markdown sin procesar después de activar la extensión. ¿Qué hago?', a: 'Ejecuta qlmanage -r en Terminal para restablecer la caché, cierra la ventana de Vista Rápida y vuelve a intentarlo. Confirma que el archivo termina en .md u otra extensión compatible.' },
      { q: '¿Dónde está el interruptor de la extensión de Vista Rápida?', a: 'Ajustes del Sistema ▸ General ▸ Ítems de inicio y extensiones ▸ Vista Rápida. El botón "Open Extension Settings…" de MarkPeek lo abre.' },
      { q: '¿Por qué tengo que abrir primero la app?', a: 'macOS registra las extensiones cuando ve la app. Abrir MarkPeek una vez deja disponibles sus extensiones de Vista Rápida y de miniaturas.' },
      { q: '¿La vista previa funciona con archivos .txt?', a: 'No. La extensión de Vista Rápida cubre los tipos de contenido Markdown. Cambia el nombre del archivo a .md para obtener la vista previa.' },
    ],
    related: ['quick-look-markdown-preview-mac', 'open-view-md-files-mac', 'markdown-math-mermaid-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
];
