export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skUn7n1cvtRpPkdLdfgfyHXfix7UrKaguOWKtTJOCN3ddX4mUPJB65CbQmf9vuUNgg90eAxrxFgpT4qD3Xxzt28nSTFJOtIUNvyRTZGiH0NIk0riPUWnlU35W4VW7I9OQFoe7twYR7zgSiqZqARk5fTzQlFvHykLP9LpzhHpfSddsEjMyuZx"
,  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}


