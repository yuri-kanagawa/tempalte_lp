import {
  generatePrivacyPolicy,
  generatePrivacyPolicyArray
} from 'src/locales/en/privacy-policies'

export const privacyPolicies = generatePrivacyPolicyArray(
  generatePrivacyPolicy('', '')
)
