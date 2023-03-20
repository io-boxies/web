export type IO_LOCALE = 'ko' | 'en' | 'cn'

export type Trans = { [l in IO_LOCALE]: { [k: string]: string } }
export type TransType<T extends string> = {
  [l in IO_LOCALE]: { [k in T]: string }
}

export const parseLocale = (code: string): IO_LOCALE => {
  console.info(`lang code in parseLocale: ${code}`)
  code = code.toLowerCase()
  if (code.includes('en')) return 'en'
  else if (code.includes('ko')) return 'ko'
  else if (code.includes('zh')) return 'cn'
  else return 'ko'
}
