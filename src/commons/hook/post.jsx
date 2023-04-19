'use client'
import {useQuery} from 'react-query'
import {
  getAllDocuments,
  getDocumentsByTitle,
  getDocumentsBylink,
} from '@/commons/api/post'
import {useEffect, useState} from 'react'

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
export function usePostByLink(link) {
  return useQuery(
    ['article', link],
    () => getDocumentsBylink('article', link),
    {
      onError: error => {
        console.error(error)
      },
      select: data => data?.[0] ?? null,
    },
  )
}
export const useStorage = path => {
  const [url, setUrl] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const firebaseApp = useFirebaseApp()
  const storage = getStorage(firebaseApp)

  useEffect(() => {
    const storageRef = ref(storage, path)
    getDownloadURL(storageRef)
      .then(url => {
        setUrl(url)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error)
        setIsLoading(false)
      })
  }, [path, storage])

  return {url, error, isLoading}
}
