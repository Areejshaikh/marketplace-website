
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId} from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: "sk1mY5iZthWFUf3aciebg8vRDTZReWuArFyvoaX0OjqOvA2baKRWdK41gV3Rtr5ZqEjr5qej9hNn2ajxRpAh0ZWKmWZ6MkejySWRFJgYw2H0Q4G3qWutqNANwqRwkfU7AfbtIvjgYPoSBHnyEYSOA34tZxFuEIfhnMwow3WkFdfhm2SUGmnU",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
