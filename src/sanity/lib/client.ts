
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId,token} from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: "skUn7n1cvtRpPkdLdfgfyHXfix7UrKaguOWKtTJOCN3ddX4mUPJB65CbQmf9vuUNgg90eAxrxFgpT4qD3Xxzt28nSTFJOtIUNvyRTZGiH0NIk0riPUWnlU35W4VW7I9OQFoe7twYR7zgSiqZqARk5fTzQlFvHykLP9LpzhHpfSddsEjMyuZx",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
