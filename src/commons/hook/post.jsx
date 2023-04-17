import {useQuery} from 'react-query'
import {getAllDocuments, getDocumentsByTitle} from '@/commons/api/post'

export function usePostByTitle(title) {
  return useQuery(
    ['article', title],
    () => getDocumentsByTitle('article', title),
    {
      onError: error => {
        console.error(error)
      },
      select: data => data?.[0] ?? null,
    },
  )
}
export function useAllDocuments(collectionName) {
  return useQuery(collectionName, () => getAllDocuments(collectionName), {
    onError: error => {
      console.error(error)
    },
    select: data => data ?? null,
  })
}
