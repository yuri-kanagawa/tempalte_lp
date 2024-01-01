import { LanguageKey, LANGUAGES } from 'src/constants/language'

export const defaultPage = 'https://default.com'
export const getChainUrl = (value: string) => defaultPage + '/' + value
const root = '/'
const LanguageRoot = LANGUAGES.map(key => `/${key}`)
const rootPath = [root, ...LanguageRoot]

export const getUrlFirstSlash = (path: string): LanguageKey => {
  if (path === '/') return 'en'
  if (LanguageRoot.includes(path)) return path.replace(/^\//, '') as LanguageKey
  // const trimmedPath = path.trim()
  const segments = path.split('/')
  const firstPath = segments[1]
  if (LANGUAGES.includes(firstPath as LanguageKey))
    return firstPath as LanguageKey
  else return 'en'
}

export const getIsRoot = (path: string): boolean => rootPath.includes(path)
