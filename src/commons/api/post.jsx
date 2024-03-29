import {
  collection,
  getDocs,
  getDoc,
  query,
  where,
  doc,
} from 'firebase/firestore'
import {db} from '@/firebase'

export async function fetchArticleByTitle2(title) {
  const articlesQuery = query(
    collection(db, 'articles'),
    where('titre', '==', title),
  )
  const snapshot = await getDocs(articlesQuery)

  if (snapshot.empty) {
    return null
  }

  const doc = snapshot.docs[0]
  return {id: doc.id, ...doc.data()}
}

export async function countArticles() {
  const querySnapshot = await getDocs(collection(db, 'article'))
  const articles = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
  const numArticles = querySnapshot.size
  console.log(`Number of articles: ${numArticles}`)
  return {numArticles, articles}
}
export async function getDocumentsById(collectionName, docId) {
  const docRef = doc(db, collectionName, docId)
  try {
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return {id: docSnap.id, ...docSnap.data()}
    } else {
      console.log('No such document!')
      return null
    }
  } catch (e) {
    console.error('Error fetching document:', e)
    return null
  }
}

export async function getDocumentsByTitle(collectionName, title) {
  const articlesQuery = query(
    collection(db, collectionName),
    where('titre', '==', title),
  )
  const snapshot = await getDocs(articlesQuery)
  if (snapshot.empty) {
    console.log('No matching documents.')
    return null
  }
  const docs = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
  return docs
}
export async function getAllDocuments(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName))
  return querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
}

export async function getDocumentsBylink(collectionName, link) {
  const articlesQuery = query(
    collection(db, collectionName),
    where('link', '==', link),
  )
  const snapshot = await getDocs(articlesQuery)
  if (snapshot.empty) {
    console.log('No matching documents.')
    return null
  }
  const docs = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
  return docs
}

export async function fetchPostByLink(link) {
  const docs = await getDocumentsBylink('article', link)
  if (docs === null) {
    throw new Error(`No matching documents found for link ${link}`)
  }
  return docs[0]
}
export async function getArticle({params}) {
  const post = await fetchPostByLink(params.link)
  return {
    props: {
      post,
    },
  }
}
export async function fetchPostByLink2(link) {
  try {
    const docs = await getDocumentsBylink('article', link)
    return {data: docs?.[0] ?? null, error: null}
  } catch (error) {
    console.error(error)
    return {data: null, error}
  }
}
