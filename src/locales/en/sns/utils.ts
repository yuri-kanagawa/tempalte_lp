import { SnsType, SnsLink } from 'src/locales/en/sns/type.d'

export const generateSnsLink = (value: SnsType): SnsLink => {
  return {
    snsLink: value
  }
}
