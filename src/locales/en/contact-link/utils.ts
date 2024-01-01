import { SnsType, SnsLink } from 'src/locales/en/contact-link/type.d'

export const generateSnsLink = (value: SnsType): SnsLink => {
  return {
    snsLink: value
  }
}
