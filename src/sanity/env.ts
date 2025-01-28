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
  "sk1mY5iZthWFUf3aciebg8vRDTZReWuArFyvoaX0OjqOvA2baKRWdK41gV3Rtr5ZqEjr5qej9hNn2ajxRpAh0ZWKmWZ6MkejySWRFJgYw2H0Q4G3qWutqNANwqRwkfU7AfbtIvjgYPoSBHnyEYSOA34tZxFuEIfhnMwow3WkFdfhm2SUGmnU",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}


