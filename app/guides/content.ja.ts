import type { Guide, GuideImage } from './content';

const SHOT = 'assets/screenshots/';

const IMG = {
  quicklook: {
    src: `${SHOT}quicklook.webp`,
    width: 900,
    height: 1048,
    alt: 'FinderのクイックルックウインドウでField Notes.mdをダークのSerifテーマでプレビューしているところ。swiftのコードブロックとOpen with MarkPeekボタンがある',
  },
  finderSpace: {
    src: `${SHOT}finder-space-poster.webp`,
    width: 1440,
    height: 900,
    alt: 'Finderの上に開いたクイックルックウインドウでsample.mdをダークテーマでプレビューしているところ。レンダリングされたディスプレイ数式とMermaidのフローチャートが表示されている',
  },
  previewLight: {
    src: `${SHOT}preview-light.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeekのPreviewモードでSerifテーマの「Field Notes: Building a Quiet App」というノートを表示しているところ。サイドバーにはDocuments、Outline、6つのテーマが並んでいる',
  },
  previewDark: {
    src: `${SHOT}preview-dark.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeekのPreviewモードでPaperテーマをダークの外観で表示しているところ。ドロップキャップと両端揃えの本文が見える',
  },
  quicklookMath: {
    src: `${SHOT}quicklook-math-mermaid.webp`,
    width: 845,
    height: 980,
    alt: 'クイックルックでMarkdownファイルをプレビューしているところ。インライン数式、レンダリングされた積分、Mermaidのフローチャートが表示されている',
  },
  splitLight: {
    src: `${SHOT}split-light.webp`,
    width: 1400,
    height: 832,
    alt: 'MarkPeekのSplitモードでGitHubテーマを表示しているところ。左にMarkdownのソース、右にレンダリングされたページがあり、ステータスバーにはAuto Saveと文字数が表示されている',
  },
  splitDark: {
    src: `${SHOT}split-dark.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeekのSplitモードでSerifテーマをダークの外観で表示しているところ。左にソース、右にレンダリングされたページがある',
  },
  inspector: {
    src: `${SHOT}inspector.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeekでModernテーマのTheme InspectorをTypeタブで開いたところ。フォントの選択、サイズのスライダ、Save Asボタンがある',
  },
  builder: {
    src: `${SHOT}theme-builder.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeekのNew Themeシート。Name、Author、Start from、Appearance、フォント、文字サイズ、コンテンツ幅、アクセントカラーの各項目と、Create Themeボタンがある',
  },
  exportPdf: {
    src: `${SHOT}export-pdf.webp`,
    width: 1400,
    height: 880,
    alt: 'MarkPeekのExport as PDFシート。Paperのオプション（Size、Orientation、Margins）とDocumentのオプション（Layout、Appearance、Page numbers、Open in Preview when done）がある',
  },
  tour: {
    src: `${SHOT}app-tour-poster.webp`,
    width: 1440,
    height: 876,
    alt: 'MarkPeekのPreviewモードでModernテーマをダークの外観で表示しているところ。フロントマターの表、見出し、リスト、引用を含むサンプル書類が表示されている',
  },
} satisfies Record<string, GuideImage>;

const PUBLISHED = '2026-11-12';

export const GUIDES_JA: Guide[] = [
  {
    slug: 'quick-look-markdown-preview-mac',
    demo: { from: 'notes.md', to: 'クイックルックのプレビュー' },
    replaces: 'プレーンテキストのクイックルック',
    title: 'MacのFinderでクイックルックを使ってMarkdownファイルをプレビューする',
    metaTitle: 'MacのFinderでMarkdownをクイックルックでプレビュー | MarkPeek',
    description:
      'Macで.mdファイルをFinderでスペースキーでプレビュー。macOSがプレーンテキストを表示する理由と、MarkPeekでテーマ付きクイックルックを使う方法。',
    lede:
      'FinderでMarkdownファイルを選んでスペースキーを押すと、macOSはシャープ記号やアスタリスクがそのまま並んだ生のテキストを表示します。クイックルックで仕上がったページを表示することもできますが、そのためにはMarkdownをレンダリングできる仕組みが必要です。ここでは、Macが標準でできること、その限界、そしてスタイル付きプレビューを表示する方法を紹介します。',
    image: IMG.quicklook,
    sections: [
      {
        heading: 'macOSはMarkdownファイルをどう扱うか',
        paras: [
          'Markdownファイルはプレーンテキストなので、クイックルックもプレーンテキストとして扱います。ソースが書いたままの姿で等幅フォントで表示され、見出しは#のまま、強調はアスタリスクで囲まれたままです。3行のメモなら問題ありませんが、長いREADMEを読むのは疲れます。',
          'Finderウインドウのプレビュー欄にも同じプレビューが使われるため、表示されるのは同じ生のテキストです。macOSには、クイックルック用のMarkdownレンダラーが標準では用意されていません。',
        ],
      },
      {
        heading: '方法1：生のテキストのまま使う',
        paras: [
          '短いファイルなら、プレーンテキストのプレビューは手早く、何も準備しなくて済みます。矢印キーでフォルダ内のメモを順番にたどれるので、何も開かずに中身をざっと確認できます。',
        ],
        note:
          '面倒なところ：表はパイプ記号が並んだ行になり、リンクは角括弧付きのURLとして表示され、コードブロックにはシンタックスカラーがなく、構造がまったくわかりません。長い書類は流し読みしにくくなります。',
      },
      {
        heading: '方法2：別のアプリでファイルを開く',
        paras: [
          'テキストエディットも.mdファイルをプレーンテキストとして開くため、表示は同じ生のテキストです。VS CodeなどのエディタにはMarkdownのプレビュー機能がありますが、ファイルを読むためにエディタを起動するのではクイックルックの意味がなく、ファイルごとに起動の待ち時間がかかります。',
          'Markdown用のサードパーティ製クイックルック機能拡張もあります。解決しようとしている問題は同じなので、選ぶときは、メンテナンスされているか、サンドボックスで動作するか、スタイルを変更できるかを確認してください。',
        ],
      },
      {
        heading: 'MarkPeekを使う方法',
        paras: [
          'MarkPeekには、Markdown用のクイックルック機能拡張と、Finderのサムネール機能拡張が付属しています。インストールして有効にすると、スペースキーを押すだけで、MarkPeekで選択中のテーマでレンダリングされたファイルが表示されます。',
        ],
        steps: [
          'MarkPeekを/Applicationsに移動し、一度開いて、macOSにクイックルック機能拡張を登録させます。公証を受けていないため、初回起動にはGatekeeperの手順が必要です（ホームページを参照）。',
          'Finderで任意のMarkdownファイルを選びます：.md、.markdown、.mdown、.mkd、.mkdn、.mdwn、.mdtxt、.mdtext、.mdx、.rmd、.qmdのいずれかです。',
          'スペースキーを押します。クイックルックウインドウが開き、レンダリングされたページと「Open with MarkPeek」ボタンが表示されます。',
          '矢印キーで、同じフォルダ内の他のMarkdownファイルに移動できます。',
        ],
      },
      {
        heading: 'クイックルックで使うテーマを選ぶ',
        paras: [
          'クイックルックには、アプリで選択中のテーマが使われます。Themeメニューまたはサイドバーから、Modern、Serif、GitHub、Plain、Paper、Monoのいずれかを選んでください。どのテーマにもライトとダークのパレットがあり、プレビューは標準でシステムの外観に従います。テーマを細かく調整するには、⌥⌘IでTheme Inspectorを開き、Type、Layout、Colors、Extrasの各タブで調整してから、「Save As…」で保存します。',
          'アプリと機能拡張は同じテーマストアを共有しているため、同期は不要です。テーマを変更すれば、次にスペースキーを押したときに見た目が変わります。',
        ],
        image: IMG.inspector,
      },
      {
        heading: '知っておきたい設定とセットアップ',
        bullets: [
          '機能拡張のスイッチ：プレビューがまだ生のテキストのままなら、「システム設定」▸「一般」▸「ログイン項目と機能拡張」▸「クイックルック」でMarkPeekを有効にします。アプリ内では、Settings ▸ Generalの「Open Extension Settings…」ボタンから同じパネルを開けます。',
          '古いプレビュー：Finderに古い見た目が残る場合は、ターミナルでqlmanage -rを実行してクイックルックのキャッシュをリセットします。',
          'ファイルと同じ場所にある画像：サンドボックスのため、MarkPeekが読み込めるのは開いたファイルだけです。「Allow a Folder…」（Settings ▸ General ▸ Images、またはFile ▸ 「Allow Folder Access…」）を一度実行すると、そのフォルダ内（サブフォルダを含む）のすべての書類で画像が表示されます。',
        ],
        code: 'qlmanage -r',
      },
      {
        heading: 'プレビューでできること',
        paras: [
          'プレビューは、CommonMarkに加えて、表、タスクリスト、取り消し線、フロントマター、フェンスコードのシンタックスカラー、数式、Mermaid図をレンダリングします。数式やMermaidのレンダリングに時間がかかりすぎる場合は、固まらずにソースが表示されます。サムネールは別の機能拡張で、タイトルと最初の数行を含む小さなページを描画し、常に選択中のテーマのライトのパレットで表示されます。',
          'Webアドレスで参照されている画像は、プレビューを開いたときにWebから取得されます。ファイルと同じ場所にある画像は、フォルダを許可すれば、ローカルで埋め込まれます。',
        ],
      },
    ],
    faq: [
      { q: 'クイックルックでMarkdownがプレーンテキストで表示されるのはなぜですか？', a: 'Markdownファイルはプレーンテキストで、macOSにはクイックルック用のMarkdownレンダラーが標準では用意されていないため、ソースがそのまま表示されます。レンダリングはMarkPeekのような機能拡張が担う必要があります。' },
      { q: 'クイックルックのプレビューはダークモードに対応していますか？', a: 'はい。標準では、テーマはシステムの外観に従い、ライトまたはダークのパレットを使います。テーマを常にライト、または常にダークに固定することもできます。' },
      { q: 'プレビューにインターネット接続は必要ですか？', a: 'リモート画像を除き、不要です。Markdown、数式、Mermaidはオフラインでレンダリングされます。書類がhttpまたはhttpsのURLで画像をリンクしている場合のみ、その画像がWebから読み込まれます。' },
      { q: 'どのファイル拡張子でプレビューできますか？', a: 'MarkPeekが宣言している11種類の拡張子（.md、.markdown、.mdown、.mkd、.mkdn、.mdwn、.mdtxt、.mdtext、.mdx、.rmd、.qmd）に加えて、iA WriterやTextBundleで使われるMarkdownのコンテンツタイプです。' },
    ],
    related: ['fix-quick-look-markdown-plain-text', 'open-view-md-files-mac', 'markdown-math-mermaid-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'open-view-md-files-mac',
    demo: { from: 'README.md', to: '読みやすいページ' },
    replaces: 'テキストエディット、Xcode、ブラウザ',
    title: 'Macで.mdファイルを開いて表示する、いちばんよい方法',
    metaTitle: 'Macで.mdファイルを開く・表示する方法 | MarkPeek',
    description:
      'macOSでMarkdown（.md）ファイルを開く方法：テキストエディット、VS Code、Xcode、ブラウザ、クイックルック、そしてSplitビュー付きのテーマ対応リーダーMarkPeek。',
    lede:
      'Macで.mdファイルをダブルクリックすると、たいていは生の記号が並んだテキストエディタが開きます。Markdownは整形されたテキストとして読むためのものですが、Macには標準でそれができるアプリがありません。ここでは、各方法の選択肢と、それぞれの欠点、そしてMarkPeekをリーダーとして使う方法を紹介します。',
    image: IMG.previewLight,
    sections: [
      {
        heading: '.mdファイルとは',
        paras: [
          '.mdファイルは、軽量なマークアップを含むプレーンテキストです。見出しには#、強調にはアスタリスク、リストにはハイフン、コードにはバッククォートを使います。README、メモアプリ、ドキュメントフォルダ、静的サイトのコンテンツは、すべてこの形式で書かれています。.markdown、.mdown、.mdx、.rmd、.qmdといった関連する拡張子は、Markdownの派生形式です。',
        ],
      },
      {
        heading: '方法1：テキストエディット',
        paras: [
          'テキストエディットはMarkdownをプレーンテキストとして開きます。ソースが表示され、編集もできますが、レンダリングはされません。いつでも使えるので、誤字をちょっと直すくらいなら十分です。',
        ],
        note: '面倒なところ：レンダリングがまったくないため、長い書類を読むときは記号も一緒に読むことになります。',
      },
      {
        heading: '方法2：VS CodeやXcodeなどのコードエディタ',
        paras: [
          'VS CodeにはMarkdownのプレビュー機能が内蔵されており、「Markdown: Open Preview to the Side」コマンドでエディタの横に開けます。きれいにレンダリングされますが、本格的なコードエディタなので起動が重く、1つの書類よりもプロジェクト向けに作られており、図などの機能を追加するには拡張機能が必要です。Xcodeは.mdファイルをソーステキストとして開くだけで、リーダーとして使うにはインストールがとても大がかりです。',
        ],
      },
      {
        heading: '方法3：クイックルック、ブラウザ、Webサービス',
        paras: [
          'クイックルックは、クイックルックのガイドで説明したとおり、生のテキストを表示します。ブラウザは、ソースをテキストとして表示するか、ファイルをダウンロードします。書類をWebベースのレンダラーに貼り付ければ表示できますが、テキストが他人のサーバーに送信されるため、非公開のメモには避けたいところです。',
        ],
      },
      {
        heading: 'MarkPeekを使う方法',
        paras: [
          'MarkPeekは、Markdown用のmacOSネイティブなリーダー兼エディタです。書類のリスト、見出しのOutline、Themeメニューを備えたウインドウでファイルを開きます。',
        ],
        steps: [
          'File ▸ 「Open…」（⌘O）、ウインドウへのドラッグ（「Drop to Open」）、または「Open Recent」からファイルを開きます。「開く」パネルでは.txtファイルも選べます。',
          'Previewで読みます。⌘=と⌘-でズーム、⌘0でリセット、「Find in Document…」（⌘F）で検索し、Outlineから見出しへジャンプできます。',
          'Themeメニューから見た目を変更します：Modern、Serif、GitHub、Plain、Paper、Mono。どれもライトとダークのパレットがあります。',
          'テキストを変更したいときは、⌘2でSplit、⌘3でEditに切り替えます。⌘1でPreviewに戻ります。',
        ],
      },
      {
        heading: 'MarkPeekをMarkdownファイルの既定のアプリにする',
        paras: [
          'MarkPeekでMarkdownを開くかどうかは任意です。Settings（⌘,）▸ Generalにある「Markdown files」の行に、「Open in MarkPeek by Default」ボタンがあります。これをクリックすると、Finderで.mdファイルをダブルクリックしたときにMarkPeekが開くようになります。初回起動時のWelcome Tourにも、「Make MarkPeek the Default」として同じ選択肢があります。',
          '後から戻すには、Finderの「情報を見る」パネルを使います。.mdファイルを選び、「ファイル」▸「情報を見る」を選んで、「このアプリケーションで開く」のアプリを変更します。',
        ],
        image: IMG.builder,
      },
      {
        heading: '知っておきたい設定',
        bullets: [
          '「Reopen the last document at launch」（Settings ▸ General ▸ Documents）をオンにすると、前回の続きから再開できます。標準でオンです。',
          '「Save automatically while editing」は自動保存の設定です。Editモードのステータスバーにある「Auto Save」でも切り替えられます。',
          '画像：MarkPeekは開いた書類は読み込めますが、フォルダを許可するまでは、そのそばにある画像は読み込めません。Settings ▸ General ▸ Imagesの「Allow a Folder…」、または「Images in this folder need access to show.」というバナーの「Allow…」ボタンを使います。',
          'テーマ：⌥⌘IでTheme Inspectorを開くか、Theme ▸ 「New Theme…」（⇧⌘N）で新しいテーマを作成します。',
        ],
      },
      {
        heading: 'メモのフォルダ向けの使い方',
        paras: [
          '会議メモやドキュメントのディレクトリなど、Markdownが1つのフォルダにまとまっているなら、シンプルな使い方がおすすめです。Finderでスペースキーを押し、スタイル付きのクイックルックプレビューでファイルをざっと確認しながら、矢印キーで下に進みます。気になるファイルがあれば、クイックルックウインドウで「Open with MarkPeek」を選んで、読んだり編集したりします。開いた書類はサイドバーのDocumentsに保持され、直近の10件は「Open Recent」に記憶されます。',
        ],
      },
      {
        heading: 'できないこと',
        paras: [
          'MarkPeekがレンダリングするのは、CommonMarkに加えて、表、タスクリスト、取り消し線、フロントマター、数式、Mermaidです。脚注、GitHub形式のアラートブロック、絵文字ショートコード、Wikiリンクはレンダラーに含まれていないため、それらを使っているメモでは該当部分がプレーンテキストとして表示されます。ワークフローがそれらに依存している場合は、そうしたファイル用に別のビューアを残しておいてください。',
        ],
      },
    ],
    faq: [
      { q: 'Macで.mdファイルを標準で開くアプリは何ですか？', a: 'プレーンテキストエディタ（たいていはテキストエディット）か、インストールしてあるエディタです。macOSにはMarkdownをレンダリングする標準アプリがありません。' },
      { q: '何もインストールせずに.mdファイルを開けますか？', a: 'はい。テキストエディットやクイックルックで、生のテキストを表示できます。どちらも書式はレンダリングされません。' },
      { q: 'MarkPeekはMarkdown以外のファイルも開けますか？', a: 'Markdownのアプリですが、「開く」パネルとドラッグ＆ドロップでは、プレーンな.txtファイルも受け付けます。' },
      { q: 'MarkPeekでファイルが書き換えられることはありますか？', a: '編集して保存したときだけです。表示するだけではファイルに書き込まれず、開いている間にファイルがディスク上で変更された場合も、MarkPeekは未保存の編集内容を保持したまま、再読み込みするかどうかを尋ねます。' },
    ],
    related: ['quick-look-markdown-preview-mac', 'edit-markdown-live-preview-mac', 'markdown-to-pdf-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'markdown-to-pdf-mac',
    demo: { from: 'report.md', to: 'report.pdf' },
    replaces: 'pandoc、PDFへの印刷という回避策',
    title: 'MacでMarkdownをPDFに書き出す',
    metaTitle: 'MacでMarkdownをPDFに書き出す：印刷、pandoc、MarkPeek',
    description:
      'macOSでMarkdownをPDFにする4つの方法：ブラウザ印刷、VS Code、pandoc、そして用紙サイズ・余白・ページ番号・ライト/ダークを選べるMarkPeek。',
    lede:
      'Markdownは書くのは簡単ですが、Markdownを使わない人に渡すのは面倒です。PDFにすれば解決しますが、MacにはMarkdownからPDFへの標準の手順がありません。ここでは、よくある回避策と、それぞれに必要な手間、そしてMarkPeekでテーマ付きのPDFを数クリックで書き出す方法を紹介します。',
    image: IMG.exportPdf,
    sections: [
      {
        heading: '方法1：ファイルを開いたアプリからPDFに印刷する',
        paras: [
          'どのMacでも、「プリント」ダイアログからPDFに印刷できます。問題は、何が印刷されるかです。テキストエディットやクイックルックは生のソースを印刷するため、シャープ記号だらけのPDFになります。ブラウザならレンダリングされたMarkdownを印刷できますが、それにはまずファイルをWebページとして表示する必要があります（たとえばGitHubで表示するなど）。',
        ],
        note: '面倒なところ：出力の品質は印刷元のページ次第で、ブラウザのヘッダ、フッタ、改ページがそのまま入ってしまいます。',
      },
      {
        heading: '方法2：PDF拡張機能付きのコードエディタ',
        paras: [
          'VS Codeは、拡張機能を使ってMarkdownをPDFに書き出せます。動作はしますが、一度きりの作業のためにエディタと拡張機能をインストールすることになり、出力のスタイルも拡張機能が用意したものに限られます。',
        ],
      },
      {
        heading: '方法3：pandoc',
        paras: [
          'pandocは強力な選択肢で、多くの人が最終的にたどり着く方法です。MarkdownをPDFやWordなど数十種類の形式に変換できます。PDF出力には別途PDFエンジンが必要で、一般的にはLaTeXのディストリビューションですが、これは大きなインストールになり、スタイルを整えるにはテンプレートやオプションを書く必要があります。',
        ],
        code: 'brew install pandoc\npandoc report.md -o report.pdf',
        note: '面倒なところ：1つの書類のために、書き出しよりもセットアップに時間がかかり、書き出す前に結果をプレビューすることもできません。',
      },
      {
        heading: 'MarkPeekを使う方法',
        paras: [
          'MarkPeekは、書類を読むときと同じレンダラーとテーマでPDFを書き出すため、書き出されたPDFにはプレビューと同じテーマとレンダラーが使われます。',
        ],
        steps: [
          '書類を開き、Themeメニューからテーマを選びます。長文にはSerifやPaper、印刷するものにはPlainが向いています。',
          'File ▸ 「Export as PDF…」（⇧⌘E）を選ぶか、ツールバーの「Export PDF」をクリックします。',
          'シートで、Paperを設定します：Size（A4、US Letter、US Legal、A5）、Orientation（PortraitまたはLandscape）、Margins（None、Narrow、Normal、Wide）。',
          'Documentを設定します：Layout（「Pages」または「Single long page」）、Appearance（「Follow theme」、「Light」、「Dark」）、「Page numbers」、「Title at the top of each page」。「Open in Preview when done」をオンにしておくと、すぐに結果を確認できます。',
          '「Export…」をクリックして保存先を選びます。標準のファイル名は、書類名に.pdf拡張子を付けたものです。',
        ],
        image: IMG.previewDark,
      },
      {
        heading: '書き出す前にテーマを選ぶ',
        paras: [
          'PDFの書体、行の長さ、見出しのスタイル、色はテーマで決まるため、書き出したあとで直すのではなく、書き出す前に選ぶのがおすすめです。Serifはゆとりのある余白でCharterフォントを使い、レポートに向いています。GitHubは下線付きの見出しと格子状の表になります。Plainは装飾のない白地に黒の文字です。どれも合わない場合は、Theme Inspector（⌥⌘I）を開いてTypeとLayoutのタブを調整し、「Save As…」で保存します。書き出しシートの「Theme」行は読み取り専用で、使われるテーマを表示するだけです。',
        ],
      },
      {
        heading: '繰り返しの書き出しを速くする',
        paras: [
          'MarkPeekは、使ったオプションを記憶します。「Export PDF Next to File」（⌥⇧⌘E）は、シートを省略して前回のオプションを再利用し、Markdownファイルの隣にPDFを保存します。初期値を変えるには、Settings（⌘,）▸ Exportを開きます。「PDF defaults」セクションに、Paper、Orientation、Margins、Layout、Appearanceのピッカーと、「Open in Preview when done」のトグルがあります。',
        ],
      },
      {
        heading: 'HTMLと印刷',
        paras: [
          'File ▸ 「Export as HTML…」（⌥⌘E）は、テーマのCSSとローカル画像を埋め込んだ、自己完結型の.htmlファイルを1つ書き出します。書類でMathJaxやMermaidを使っている場合は、それらも含まれます。オプションのダイアログはありません。File ▸ 「Print…」（⌘P）も同じレンダラーを通して印刷するので、標準のプリントダイアログにあるPDFメニューも使えます。',
          '書き出せる形式はこれだけです。MarkPeekはWord（DOCX）、PNG、EPUBには書き出せません。それらが必要なときはpandocを使ってください。',
        ],
      },
      {
        heading: '送る前に確認したいこと',
        bullets: [
          '紙に印刷するダークな書類：読むときのテーマがダークで、PDFを印刷する予定なら、Appearanceを「Light」にします。',
          '「Single long page」は縦長の1ページを作り、ページ番号とページごとのタイトルはオフになります。これらはページ分けされた出力にしか適用されないためです。',
          'Markdownファイルと同じ場所にある画像は、フォルダを許可（「Allow a Folder…」）しないと表示されません。Webアドレスで参照されている画像は、ファイルに埋め込まれず、Webリンクのまま残ります。',
        ],
      },
    ],
    faq: [
      { q: 'macOSだけでMarkdownをPDFに変換できますか？', a: '標準機能としてはできません。ブラウザでレンダリングされたMarkdownを印刷するか、pandocやMarkPeekのようなアプリを使います。' },
      { q: 'PDFは画面上のプレビューと同じ見た目になりますか？', a: '同じテーマとレンダラーを使います。PDFのレイアウトには用紙サイズ、余白、オプションのページ番号が加わるため、改ページや幅はスクロールするプレビューとは異なります。' },
      { q: '数式やMermaid図もPDFに書き出せますか？', a: 'はい。数式とMermaidは、アプリ内と同じようにPDF書き出しでもレンダリングされます。' },
      { q: 'ページサイズは選べますか？', a: 'はい。A4、US Letter、US Legal、A5から選べ、向きはPortraitまたはLandscape、余白はNone、Narrow、Normal、Wideから選べます。' },
    ],
    related: ['markdown-math-mermaid-mac', 'open-view-md-files-mac', 'edit-markdown-live-preview-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'markdown-math-mermaid-mac',
    demo: { from: 'proof.md', to: '数式と図' },
    replaces: 'GitHub、mermaid-cli、LaTeX',
    title: 'MacでMarkdownの数式（LaTeX）とMermaid図をレンダリングする',
    metaTitle: 'MacでMarkdownの数式（LaTeX）とMermaidを表示する',
    description:
      'macOSでMarkdownのLaTeX数式とMermaid図を表示する方法：GitHub、エディタの拡張機能、pandoc、そしてオフラインで動くエンジンを同梱したMarkPeek。',
    lede:
      'Markdown自体には、数式も図もありません。ツールによっては、LaTeX風のドル記号やMermaidのコードブロックで補っていますが、Mac用のビューアの多くはそれらを生のテキストのまま表示します。このガイドでは、それらがどこでレンダリングされるか、そしてMarkPeekがアプリ内、書き出し、クイックルックのすべてで、ネットワーク接続なしに両方を表示する方法を紹介します。',
    image: IMG.splitDark,
    sections: [
      {
        heading: '多くのツールが共通で使う記法',
        paras: [
          '数式はドル記号で書きます。インライン数式は1つのドル記号、ディスプレイブロックは2つのドル記号です。図は、言語をmermaidとしたフェンスコードブロックで書きます。ツールがこれらに対応していれば、同じファイルが他の場所でも同じようにレンダリングされます。',
        ],
        code: 'Inline: $E = mc^2$\n\n$$\n\\int_0^1 x^2 \\, dx = \\tfrac{1}{3}\n$$\n\n```mermaid\ngraph LR\n  A[Write] --> B[Preview]\n```',
      },
      {
        heading: '方法1：GitHubにプッシュする',
        paras: [
          'GitHubは、WebサイトでMarkdownファイルの数式とMermaidの両方をレンダリングします。READMEには便利ですが、見た目を確認するだけのためにファイルをコミットしてプッシュする必要があり、内容はリポジトリに置かなければなりません。',
        ],
      },
      {
        heading: '方法2：拡張機能付きのコードエディタ',
        paras: [
          'VS Codeなどのエディタは、サイドプレビューでMarkdownをレンダリングし、拡張機能でMermaidに対応できます。すでにエディタで作業している人にはうまく機能しますが、各機能は選んだ拡張機能とそのバージョンに依存しており、Finderやクイックルックにはまったく役に立ちません。',
        ],
      },
      {
        heading: '方法3：pandocとmermaid-cli',
        paras: [
          'pandocは、Markdownの数式をMathJaxでHTMLに、またはLaTeX経由でPDFに変換できます。Mermaid図は、まず別のmermaid-cliツールで、ヘッドレスブラウザを使って各図を画像に変換する必要があります。柔軟でスクリプト化もできますが、1つの書類を読むには大がかりです。',
        ],
        note: '面倒なところ：ビューアではなく、パイプラインを組むことになります。結果が見られるのは、コマンドを実行したあとだけです。',
      },
      {
        heading: 'MarkPeekを使う方法',
        paras: [
          'MarkPeekは、数式をMathJax 3.2.2で、図をMermaid 11.4.1でレンダリングします。どちらもアプリに同梱されています。CDNへのアクセスはないため、オフラインで動作します。エンジンは、それらを使っている書類でのみ読み込まれます。',
        ],
        steps: [
          'インライン数式は1つのドル記号で、ディスプレイ数式は2つのドル記号で囲んで書きます。',
          '図は、言語をmermaidとしたフェンスコードブロックで書きます。言語名は大文字小文字を区別しません。',
          'MarkPeekでファイルをPreviewで開くか、Split（⌘2）でソースをレンダリングされたページの横に並べて編集します。',
          'Finderでファイルを選んでスペースキーを押せばクイックルックで表示でき、File ▸ 「Export as PDF…」（⇧⌘E）または「Export as HTML…」（⌥⌘E）でも書き出せます。数式と図は、そのどれでもレンダリングされます。',
        ],
        image: IMG.quicklookMath,
      },
      {
        heading: 'ドル記号のルール',
        paras: [
          '価格が数式として扱われないように、MarkPeekはインライン数式に単純なルールを適用します。開きのドル記号の直後に空白があってはならず、閉じのドル記号の直前に空白があってはならず、直後に単語を構成する文字が続いてもいけません。そのため、「costs $5 or $10」はそのまま残り、$x + y$はレンダリングされます。コードスパンやフェンスコードブロック内のドル記号は無視されます。',
          'Mermaidはstrictセキュリティモードで動作し、その色は書類のライトまたはダークの配色に従います。',
        ],
      },
      {
        heading: '読みやすい数式と図を書くコツ',
        paras: [
          'ディスプレイ数式は、2つのドル記号の間に独立した行として書き、前後に空行を入れます。図は小さく始めましょう。短い左から右へのグラフのほうが、複雑に広がったものよりもプレビューで読みやすくなります。図が表示されない場合は、まずフェンスを確認してください。バッククォート3つとmermaidという語で始め、バッククォート3つだけの行で閉じる必要があります。価格などの文章中のドル記号は、数式に見えてしまう余計なペアがなければ問題ありません。',
          'Splitビュー（⌘2）ならソースがレンダリングされたページの横に表示されるので、数式の修正にはいちばん向いています。記号を変えて、右を見て、また調整する、という流れです。クイックルックはFinderで完成したファイルを確認するのに最適で、その間の試行錯誤にはアプリが最適です。',
        ],
      },
      {
        heading: '設定と制限',
        bullets: [
          'クイックルックは、数式とMermaidを、時間制限付きでオフスクリーンのWebビューでレンダリングします。時間がかかりすぎると、待たずにソースが表示されます。',
          'テーマが制御するのは、周囲のテキスト、見出し、コードブロックです。フェンスコードブロックには、16の言語ファミリーのシンタックスカラーも付き、Theme Inspector ▸ Extras ▸ 「Syntax colors」で切り替えられます。',
          'MathJaxの出力はSVGなので、⌘=でズームしたりPDFに書き出したりしても、数式は鮮明なままです。',
        ],
      },
    ],
    faq: [
      { q: 'MarkPeekの数式と図の表示にインターネット接続は必要ですか？', a: '不要です。MathJaxとMermaidはアプリに同梱されています。Webから読み込まれるのは、URLで参照されたリモート画像だけです。' },
      { q: 'どの数式の記法を使いますか？', a: 'ドル記号で囲んだTeX形式の数式で、MathJaxがレンダリングします。1つのドル記号でインライン数式、2つのドル記号でディスプレイブロックになります。' },
      { q: 'クイックルックでMermaid図は表示されますか？', a: 'はい。プレビューを開いたときにオフスクリーンでレンダリングされます。レンダリングがタイムアウトした場合は、プレビューはソース表示に切り替わります。' },
      { q: '書き出したファイルにも数式やMermaidは表示されますか？', a: 'はい。PDF書き出しではレンダリングされ、書き出したHTMLファイルには、書類で使っている場合にMathJaxやMermaidが含まれます。' },
    ],
    related: ['markdown-to-pdf-mac', 'quick-look-markdown-preview-mac', 'edit-markdown-live-preview-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'edit-markdown-live-preview-mac',
    demo: { from: 'draft.md', to: 'ライブプレビュー' },
    replaces: 'テキストエディット、VS Code、ブラウザ上のエディタ',
    title: 'Macでライブプレビュー付きでMarkdownを編集する',
    metaTitle: 'MacでMarkdownをライブプレビュー付きで編集 | MarkPeek',
    description:
      'Macでライブプレビューを見ながらMarkdownを書く方法：テキストエディット、VS Code、ブラウザのエディタ、そして同期スクロール、Focus Mode、Auto Save付きのMarkPeek Splitビュー。',
    lede:
      '手探りでMarkdownを書くのは、表や入れ子のリストが崩れるまでは問題ありません。ライブプレビューなら、入力しながらレンダリング結果をテキストの隣で確認できます。Macには標準のMarkdownエディタがないため、ここでは各方法の比較と、MarkPeekのSplitビューの使い方を紹介します。',
    image: IMG.splitLight,
    sections: [
      {
        heading: '方法1：テキストエディット',
        paras: [
          'テキストエディットはMarkdownをプレーンテキストとして編集し、プレビューは表示しません。確認するには、ファイルを保存して別のアプリで開いて見る必要があります。短いメモならそれでも構いませんが、長い書類では遅いサイクルになります。',
        ],
      },
      {
        heading: '方法2：VS Code',
        paras: [
          'VS CodeにはMarkdownのプレビュー機能が内蔵されており、エディタの横に開いて、入力に合わせて更新させることができます。ファイルをまたぐ検索やほぼあらゆる機能の拡張があり強力ですが、本格的な開発環境です。多くの人は、ただページを書いて見たいだけでしょう。',
        ],
      },
      {
        heading: '方法3：Webベースのエディタ',
        paras: [
          'ブラウザのエディタなら、インストール不要で分割表示が使えます。ただし、書類はWebページの中にあり、たいていはディスク上のファイルと直接つながっていないため、保存するにはテキストをコピーして外に出す必要があります。すでに管理しているフォルダにあるファイルには向いていません。',
        ],
        note: '面倒なところ：どの方法も、プレビューがないか、作業に対して重すぎるか、自分のファイルから離れた場所にあります。',
      },
      {
        heading: 'MarkPeekを使う方法',
        paras: [
          'MarkPeekは、ファイルをその場で編集します。ツールバーの「View」というピッカーに、Preview、Split、Editの3つの表示モードがあります。',
        ],
        steps: [
          '⌘OでMarkdownファイルを開くか、ウインドウにドラッグします。',
          '⌘2でSplitにします。左にMarkdownのソース、右に選択中のテーマでレンダリングされたページが表示されます。',
          '入力します。プレビューが更新され、段落にカーソルを重ねると反対側の対応する部分がハイライトされ、スクロールも両側で連動します。',
          '⌘Sで保存するか、ステータスバーの「Auto Save」をオンにして、入力を止めてしばらくすると自動で保存されるようにします。',
          '結果を読みたいときは、⌘1で全幅のPreviewにします。',
        ],
        image: IMG.tour,
      },
      {
        heading: 'Focus Mode、Find、Outline',
        paras: [
          'Focus Mode（⌥⌘F）はEditに切り替わり、サイドバーとインスペクタを隠して、テキストだけにします。元に戻るには、Viewメニューの「Exit Focus Mode」か、ツールバーの「Exit Focus」ボタンを選びます。',
          'Find in Document…（⌘F）で検索バーが開き、⌘Gで次の一致箇所、⇧⌘Gで前の一致箇所に移動します。サイドバーのOutlineには書類の見出しが一覧表示され、長いファイルでも簡単に移動できます。ステータスバーには、たとえば「232 words」のような文字数と、保存状態（「Saved」、「Unsaved changes」、「Saving…」）が表示されます。',
        ],
      },
      {
        heading: 'ファイルが知らないうちに変更されたとき',
        paras: [
          'MarkPeekで開いている間に別のプログラムがファイルを変更すると、「This file changed on disk. Your unsaved edits are kept.」というバナーが表示されます。そこで「Reload from Disk」か「Keep Mine」を選べます。これにより、スクリプト、同期クライアント、別のエディタがファイルに触れても、書類を開いたままにしておいて安心です。',
        ],
      },
      {
        heading: 'うまくいく下書きの進め方',
        paras: [
          '「Auto Save」をオンにしたSplitビューで下書きすれば、手を止めるたびに作業が保存されます。1つのセクションが書き終わったら、⌘1でページを全幅で読み、見出し、リスト、表を読者が見るとおりに確認します。テーマをPlainやSerifに切り替えて文章そのものを確かめ、そのあといつものテーマに戻します。ただ書くことに集中したいときは、⌥⌘FでFocus Modeにします。',
        ],
      },
      {
        heading: '編集に影響する設定',
        bullets: [
          'Settings（⌘,）▸ General ▸ Documents：「Save automatically while editing」と「Reopen the last document at launch」。',
          'Theme Inspector（⌥⌘I）：Type、Layout、Colors、Extrasの各タブで、プレビューがライブで変わります。Extrasでは、見出しの番号付け、ドロップキャップ、コードブロックの行番号などをオンにできます。',
          '画像：フォルダを一度許可（「Allow a Folder…」）すると、書類と同じ場所にある画像がプレビューに表示されます。',
        ],
      },
      {
        heading: 'このエディタでできることと、できないこと',
        paras: [
          'MarkPeekはまず読むためのアプリとして作られており、テキストそのものを編集するためのエディタを備えています。プレビューはCommonMark、表、タスクリスト、数式、Mermaidに対応しますが、脚注、アラートブロック、絵文字ショートコード、Wikiリンクはレンダリングされません。それらに頼っている場合は、そうしたファイル用に別のエディタを残しておいてください。',
        ],
      },
    ],
    faq: [
      { q: 'MarkPeekにはライブプレビューがありますか？', a: 'はい。Splitビュー（⌘2）では、Markdownのソースとレンダリングされたページが並んで表示され、入力に合わせて更新されます。' },
      { q: '自動で保存されますか？', a: 'オプションです。ステータスバーの「Auto Save」、またはSettingsの「Save automatically while editing」をオンにします。標準では自動保存されません。' },
      { q: '編集用と閲覧用で別々のウインドウを使えますか？', a: '3つの表示モード（Preview、Split、Edit）は1つのウインドウを共有します。両方を同時に見るにはSplitを使ってください。' },
      { q: '別のアプリでファイルを編集するとどうなりますか？', a: 'MarkPeekはディスク上の変更を検知し、未保存の編集内容を保持したまま、「Reload from Disk」か「Keep Mine」を選べるようにします。' },
    ],
    related: ['open-view-md-files-mac', 'markdown-math-mermaid-mac', 'markdown-to-pdf-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: 'fix-quick-look-markdown-plain-text',
    demo: { from: 'notes.md', to: '生のテキストではない' },
    replaces: 'うまく動かないクイックルックの設定',
    title: 'MacのクイックルックでMarkdownがプレーンテキストになる問題を直す',
    metaTitle: 'MacでクイックルックのMarkdownがプレーンテキストになる問題の解決',
    description:
      'クイックルックでまだ生のMarkdownが表示される？「システム設定」で機能拡張を有効にし、qlmanage -rでキャッシュをリセットし、ファイル形式を確認します。MarkPeekでの手順。',
    lede:
      'Markdownプレビュー用の機能拡張をインストールして、.mdファイルでスペースキーを押したのに、まだ生のテキストが表示される。その原因は、ほぼ次の4つのどれかです：機能拡張がオフになっている、アプリを一度も起動していない、クイックルックが古い結果をキャッシュしている、ファイル形式が機能拡張の対象ではない。この順番で確認していきましょう。',
    image: IMG.finderSpace,
    sections: [
      {
        heading: 'そもそもmacOSがプレーンテキストを表示する理由',
        paras: [
          'Markdownはテキスト形式なので、Markdown用のプレビューがインストールされていなければ、クイックルックはプレーンテキストにフォールバックします。プレビュー機能拡張は、Markdownのコンテンツタイプに対して自分自身を登録する必要があり、macOSでは機能拡張ごとにオンとオフを切り替えられます。登録され、かつ有効になるまでは、ソースが表示されます。',
        ],
      },
      {
        heading: '対処1：アプリを一度起動する',
        paras: [
          'クイックルック機能拡張はアプリバンドルの中にあり、macOSがそれを見つけるのは、アプリが一度開かれたあとだけです。アプリをインストールしただけで一度も起動していなければ、機能拡張はまだ登録されていません。MarkPeekを一度開いてください。初回起動時には、Finderのプレビュー、画像へのアクセス、既定のアプリを案内するWelcome Tourも表示されます。公証を受けていないためにmacOSが開くことを拒否する場合は、先に検疫フラグを外してください。',
        ],
        code: 'xattr -dr com.apple.quarantine /Applications/MarkPeek.app',
        note: '別の方法として、アプリを一度開こうとしてから、「システム設定」▸「プライバシーとセキュリティ」で「このまま開く」を選びます。アプリは/Applicationsに置いたままにしてください。',
      },
      {
        heading: '対処2：機能拡張をオンにする',
        paras: [
          'たいていのMacでは、macOSが新しいクイックルック機能拡張を自動的に有効にします。そうならなかった場合は、「システム設定」▸「一般」▸「ログイン項目と機能拡張」▸「クイックルック」を開き、MarkPeekをオンにします。MarkPeekからもそこへ移動できます。Settings ▸ Generalの「Finder previews」の行に「Open Extension Settings…」ボタンがあり、Welcome Tourの「Finder Previews」のステップにも同じボタンがあります。',
        ],
      },
      {
        heading: '対処3：クイックルックのキャッシュをリセットする',
        paras: [
          'クイックルックは、生成したプレビューと機能拡張のリストを保持しています。機能拡張を有効にしたあとは、Finderが改めて確認するようにリセットします。',
        ],
        code: 'qlmanage -r\nqlmanage -r cache',
        note: 'Finderウインドウにまだ古いプレビューが表示される場合は、クイックルックウインドウを閉じ、別のファイルを選んでから、もう一度試してください。Finderの再起動は最後の手段です。',
        image: IMG.quicklook,
      },
      {
        heading: '対処4：ファイル形式を確認する',
        paras: [
          'プレビューが適用されるのはMarkdownのコンテンツタイプであり、すべてのテキストファイルではありません。MarkPeekが対象とする拡張子は、.md、.markdown、.mdown、.mkd、.mkdn、.mdwn、.mdtxt、.mdtext、.mdx、.rmd、.qmdと、iA WriterやTextBundleで使われるMarkdownの種類です。たまたまMarkdownが書かれているnotes.txtというファイルは、macOSにとってはプレーンテキストなのでプレビューされません（MarkPeekの「開く」パネルは.txtを受け付けますが）。.mdに名前を変更して、もう一度スペースキーを押してください。',
          'ターミナルから単一のファイルをテストすることもできます。このコマンドでそのファイルのクイックルックウインドウが開くため、Finderの問題とファイルの問題を切り分けるのに役立ちます。',
        ],
        code: 'qlmanage -p ~/Documents/notes.md',
      },
      {
        heading: '対処5：競合するプレビューアがないか確認する',
        paras: [
          '別のMarkdown用クイックルック機能拡張をインストールしている場合、2つの機能拡張が同じファイル形式を取り合っている可能性があります。使わないほうを同じ「システム設定」のパネルでオフにして、もう一度キャッシュをリセットしてください。',
        ],
      },
      {
        heading: 'それでも直らないとき',
        paras: [
          'macOS 14 Sonoma以降であることを確認してください。MarkPeekはそれより古いバージョンには対応していません。アプリが/Applicationsにあり、移動や入れ替えのあとに起動されたことも確認します。Finderを終了して開き直すか、ログアウトして再度ログインすると、macOSが機能拡張を再スキャンします。MarkPeekをソースからビルドした場合は、ビルドスクリプトが機能拡張の登録とクイックルックのキャッシュのリセットを行うので、再ビルドのあとにもう一度実行してください。',
        ],
      },
      {
        heading: 'バグに見えて、そうではない2つのこと',
        bullets: [
          '画像が表示されない：MarkPeekはmacOSのサンドボックス内で動作するため、Settings ▸ General ▸ Imagesの「Allow a Folder…」でフォルダを許可するまで、書類のそばにある画像は読み込めません。許可すれば、サブフォルダも対象になります。',
          'サムネール：Finderのアイコンは別のサムネール機能拡張を使い、選択中のテーマのライトのパレットで小さなページを描画します。スペースキーのプレビューとは異なる場合があり、一部の拡張子ではmacOSがどのサムネールを表示するかを決めます。',
        ],
      },
      {
        heading: '動作を確認する方法',
        paras: [
          'Markdownファイルを選んでスペースキーを押し、クイックルックウインドウに、レンダリングされた見出し、スタイル付きのコードブロック、「Open with MarkPeek」ボタンが表示されることを確認します。見た目はアプリで選択中のテーマに従うので、テーマを変えてからもう一度スペースキーを押すのが、いちばん手早い確認方法です。',
        ],
      },
    ],
    faq: [
      { q: '機能拡張を有効にしたのに、クイックルックがまだ生のMarkdownを表示します。どうすればいいですか？', a: 'ターミナルでqlmanage -rを実行してキャッシュをリセットし、クイックルックウインドウを閉じてもう一度試してください。ファイルが.mdなどの対応する拡張子で終わっていることも確認してください。' },
      { q: 'クイックルック機能拡張のスイッチはどこにありますか？', a: '「システム設定」▸「一般」▸「ログイン項目と機能拡張」▸「クイックルック」です。MarkPeekの「Open Extension Settings…」ボタンからも開けます。' },
      { q: '先にアプリを開く必要があるのはなぜですか？', a: 'macOSは、アプリを認識したときに機能拡張を登録します。MarkPeekを一度起動すると、そのクイックルックとサムネールの機能拡張が使えるようになります。' },
      { q: '.txtファイルでもプレビューできますか？', a: 'できません。クイックルック機能拡張の対象はMarkdownのコンテンツタイプです。ファイル名を.mdに変更すれば、プレビューされます。' },
    ],
    related: ['quick-look-markdown-preview-mac', 'open-view-md-files-mac', 'markdown-math-mermaid-mac'],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
];
