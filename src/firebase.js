import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  doc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export {db, storage}

export async function countArticles() {
  console.log('ok')
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
