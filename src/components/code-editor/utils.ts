// Extensible Emmet language configuration for Monaco Editor
export interface EmmetLanguageConfig {
  language: string;
  emmetType: 'html' | 'css' | 'jsx';
  extensions?: string[];
}

export const EMMET_SUPPORTED_LANGUAGES: EmmetLanguageConfig[] = [
  { language: 'html', emmetType: 'html' },
  { language: 'liquid', emmetType: 'html' }, // Liquid templates support HTML-like syntax
  { language: 'markdown', emmetType: 'html' }, // Markdown can contain HTML
  { language: 'javascript', emmetType: 'jsx' },
  { language: 'typescript', emmetType: 'jsx' },
  { language: 'javascriptreact', emmetType: 'jsx' },
  { language: 'typescriptreact', emmetType: 'jsx' },
  { language: 'jsx', emmetType: 'jsx' },
  { language: 'tsx', emmetType: 'jsx' },
  { language: 'css', emmetType: 'css' },
  { language: 'scss', emmetType: 'css' },
  { language: 'sass', emmetType: 'css' },
  { language: 'less', emmetType: 'css' },
  { language: 'postcss', emmetType: 'css' },
  { language: 'json', emmetType: 'jsx' }, // JSON can benefit from JSX-like completions for structure
];

// Utility function to add new language support (for future extensibility)
export const addEmmetLanguageSupport = (config: EmmetLanguageConfig) => {
  const existingIndex = EMMET_SUPPORTED_LANGUAGES.findIndex(
    (lang) => lang.language === config.language
  );
  if (existingIndex >= 0) {
    // Update existing configuration
    EMMET_SUPPORTED_LANGUAGES[existingIndex] = config;
  } else {
    // Add new language support
    EMMET_SUPPORTED_LANGUAGES.push(config);
  }
};

// Utility function to get supported languages (for debugging/info)
export const getSupportedEmmetLanguages = (): string[] => {
  return EMMET_SUPPORTED_LANGUAGES.map((config) => config.language);
};

// Utility function to check if a language is supported
export const isEmmetLanguageSupported = (language: string): boolean => {
  return EMMET_SUPPORTED_LANGUAGES.some(
    (config) => config.language === language
  );
};

// One Dark Pro theme definition
export const oneDarkProTheme = {
  base: 'vs-dark' as const,
  inherit: true,
  rules: [
    { token: '', foreground: 'abb2bf' },
    { token: 'comment', foreground: '5c6370', fontStyle: 'italic' },
    { token: 'comment.line', foreground: '5c6370', fontStyle: 'italic' },
    { token: 'comment.block', foreground: '5c6370', fontStyle: 'italic' },
    { token: 'keyword', foreground: 'c678dd' },
    { token: 'keyword.control', foreground: 'c678dd' },
    { token: 'keyword.operator', foreground: 'c678dd' },
    { token: 'operator', foreground: '56b6c2' },
    { token: 'punctuation', foreground: 'abb2bf' },
    { token: 'string', foreground: '98c379' },
    { token: 'string.quoted', foreground: '98c379' },
    { token: 'string.template', foreground: '98c379' },
    { token: 'number', foreground: 'd19a66' },
    { token: 'number.hex', foreground: 'd19a66' },
    { token: 'number.octal', foreground: 'd19a66' },
    { token: 'number.binary', foreground: 'd19a66' },
    { token: 'type', foreground: 'e06c75' },
    { token: 'type.identifier', foreground: 'e06c75' },
    { token: 'function', foreground: '61afef' },
    { token: 'function.call', foreground: '61afef' },
    { token: 'function.definition', foreground: '61afef' },
    { token: 'variable', foreground: 'e06c75' },
    { token: 'variable.name', foreground: 'e06c75' },
    { token: 'variable.parameter', foreground: 'e06c75' },
    { token: 'constant', foreground: 'd19a66' },
    { token: 'constant.language', foreground: 'd19a66' },
    { token: 'constant.numeric', foreground: 'd19a66' },
    { token: 'attribute.name', foreground: 'd19a66' },
    { token: 'attribute.value', foreground: '98c379' },
    { token: 'tag', foreground: 'e06c75' },
    { token: 'tag.class', foreground: 'e06c75' },
    { token: 'tag.id', foreground: 'e06c75' },
    { token: 'delimiter', foreground: 'abb2bf' },
    { token: 'delimiter.bracket', foreground: 'abb2bf' },
    { token: 'delimiter.parenthesis', foreground: 'abb2bf' },
    { token: 'delimiter.square', foreground: 'abb2bf' },
    { token: 'delimiter.angle', foreground: 'abb2bf' },
    { token: 'meta.tag', foreground: 'abb2bf' },
    { token: 'entity.name.tag', foreground: 'e06c75' },
    { token: 'entity.other.attribute-name', foreground: 'd19a66' },
    { token: 'support.type', foreground: '56b6c2' },
    { token: 'support.class', foreground: '56b6c2' },
    { token: 'support.function', foreground: '56b6c2' },
    { token: 'storage.type', foreground: 'c678dd' },
    { token: 'storage.modifier', foreground: 'c678dd' },
    { token: 'invalid', foreground: 'f44747' },
    { token: 'invalid.illegal', foreground: 'f44747' },
  ],
  colors: {
    'editor.background': '#282c34',
    'editor.foreground': '#abb2bf',
    'editor.lineHighlightBackground': '#2c313c',
    'editor.selectionBackground': '#3e4451',
    'editor.selectionHighlightBackground': '#3e4451',
    'editorCursor.foreground': '#528bff',
    'editorWhitespace.foreground': '#3b4048',
    'editorIndentGuide.background': '#3b4048',
    'editorLineNumber.foreground': '#636d83',
    'editorLineNumber.activeForeground': '#abb2bf',
    'editorSuggestWidget.background': '#2c313c',
    'editorSuggestWidget.foreground': '#abb2bf',
    'editorSuggestWidget.border': '#3e4451',
    'editorSuggestWidget.selectedBackground': '#3e4451',
    'editorSuggestWidget.highlightForeground': '#61afef',
  },
};

// One Light Pro theme definition
export const oneLightProTheme = {
  base: 'vs' as const,
  inherit: true,
  rules: [
    { token: '', foreground: '383a42' },
    { token: 'comment', foreground: 'a0a1a7', fontStyle: 'italic' },
    { token: 'comment.line', foreground: 'a0a1a7', fontStyle: 'italic' },
    { token: 'comment.block', foreground: 'a0a1a7', fontStyle: 'italic' },
    { token: 'keyword', foreground: 'a626a4' },
    { token: 'keyword.control', foreground: 'a626a4' },
    { token: 'keyword.operator', foreground: 'a626a4' },
    { token: 'operator', foreground: '0184bc' },
    { token: 'punctuation', foreground: '383a42' },
    { token: 'string', foreground: '50a14f' },
    { token: 'string.quoted', foreground: '50a14f' },
    { token: 'string.template', foreground: '50a14f' },
    { token: 'number', foreground: '986801' },
    { token: 'number.hex', foreground: '986801' },
    { token: 'number.octal', foreground: '986801' },
    { token: 'number.binary', foreground: '986801' },
    { token: 'type', foreground: 'e45649' },
    { token: 'type.identifier', foreground: 'e45649' },
    { token: 'function', foreground: '4078f2' },
    { token: 'function.call', foreground: '4078f2' },
    { token: 'function.definition', foreground: '4078f2' },
    { token: 'variable', foreground: 'e45649' },
    { token: 'variable.name', foreground: 'e45649' },
    { token: 'variable.parameter', foreground: 'e45649' },
    { token: 'constant', foreground: '986801' },
    { token: 'constant.language', foreground: '986801' },
    { token: 'constant.numeric', foreground: '986801' },
    { token: 'attribute.name', foreground: '986801' },
    { token: 'attribute.value', foreground: '50a14f' },
    { token: 'tag', foreground: 'e45649' },
    { token: 'tag.class', foreground: 'e45649' },
    { token: 'tag.id', foreground: 'e45649' },
    { token: 'delimiter', foreground: '383a42' },
    { token: 'delimiter.bracket', foreground: '383a42' },
    { token: 'delimiter.parenthesis', foreground: '383a42' },
    { token: 'delimiter.square', foreground: '383a42' },
    { token: 'delimiter.angle', foreground: '383a42' },
    { token: 'meta.tag', foreground: '383a42' },
    { token: 'entity.name.tag', foreground: 'e45649' },
    { token: 'entity.other.attribute-name', foreground: '986801' },
    { token: 'support.type', foreground: '0184bc' },
    { token: 'support.class', foreground: '0184bc' },
    { token: 'support.function', foreground: '0184bc' },
    { token: 'storage.type', foreground: 'a626a4' },
    { token: 'storage.modifier', foreground: 'a626a4' },
    { token: 'invalid', foreground: 'ca1243' },
    { token: 'invalid.illegal', foreground: 'ca1243' },
  ],
  colors: {
    'editor.background': '#fafafa',
    'editor.foreground': '#383a42',
    'editor.lineHighlightBackground': '#f0f0f0',
    'editor.selectionBackground': '#e5e5e6',
    'editor.selectionHighlightBackground': '#e5e5e6',
    'editorCursor.foreground': '#4078f2',
    'editorWhitespace.foreground': '#d0d0d0',
    'editorIndentGuide.background': '#d0d0d0',
    'editorLineNumber.foreground': '#9da5b4',
    'editorLineNumber.activeForeground': '#383a42',
    'editorSuggestWidget.background': '#e8e8e8',
    'editorSuggestWidget.foreground': '#2c2c2c',
    'editorSuggestWidget.border': '#c0c0c0',
    'editorSuggestWidget.selectedBackground': '#d0d0d0',
    'editorSuggestWidget.highlightForeground': '#0066cc',
  },
};
