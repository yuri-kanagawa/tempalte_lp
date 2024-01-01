import { DefaultLanguage, LanguageKey, LANGUAGES } from 'src/constants/language'

const root = '/'
const LanguageRoot = LANGUAGES.map(key => `/${key}`)
const rootPath = [root, ...LanguageRoot]

export const getUrlLanguage = (path: string): LanguageKey => {
  if (path === '/') return DefaultLanguage
  if (LanguageRoot.includes(path)) return path.replace(/^\//, '') as LanguageKey

  const segments = path.split('/')
  const firstPath = segments[1]
  if (LANGUAGES.includes(firstPath as LanguageKey))
    return firstPath as LanguageKey
  else return DefaultLanguage
}

export const getIsRoot = (path: string): boolean => rootPath.includes(path)
