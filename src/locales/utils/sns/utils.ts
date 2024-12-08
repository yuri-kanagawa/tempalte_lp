import { SnsType, SnsLink } from './type'

export const generateSnsLink = (value: SnsType): SnsLink => {
  return {
    snsLink: value
  }
}
