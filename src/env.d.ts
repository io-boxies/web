interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  VITE_IS_EMULATE: string
  VITE_IO_MODE: 'test' | 'production' | 'development'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
