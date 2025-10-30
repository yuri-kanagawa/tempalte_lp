import { Language } from 'src/domains/valueObjects/language'

const root = '/'
const languageKeys = Object.keys(Language.LANGUAGES)
const LanguageRoot = languageKeys.map((key) => `/${key}`)
const rootPath = [root, ...LanguageRoot]

export const getUrlLanguage = (path: string): string => {
  if (path === '/') return Language.default().value
  if (LanguageRoot.includes(path)) return path.replace(/^\//, '')

  const segments = path.split('/')
  const firstPath = segments[1]
  if (languageKeys.includes(firstPath)) return firstPath
  else return Language.default().value
}

export const getIsRoot = (path: string): boolean => rootPath.includes(path)
