import { PrivacyPolicyArrayType, PrivacyPolicy } from './type'

export const generatePrivacyPolicy = (
  value1: string,
  value2: string
): PrivacyPolicy => {
  return {
    question: value1,
    answer: value2
  }
}

export const generatePrivacyPolicyArray = (
  ...value: PrivacyPolicy[]
): PrivacyPolicyArrayType => {
  return {
    privacyPolicyArray: value
  }
}
