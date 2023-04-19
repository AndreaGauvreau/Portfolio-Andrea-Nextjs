import ArticlePage from '@/components/article/ArticlePage.jsx'
import {getDocumentsBylink} from '@/commons/api/post'

async function fetchPostByLink(link) {
  const docs = await getDocumentsBylink('article', link)
  if (docs === null) {
    throw new Error(`No matching documents found for link ${link}`)
  }
  return docs[0]
}

export async function generateMetadata({params}) {
  const post = await fetchPostByLink(params?.link)
  return {
    title: post?.metaTitle,
    description: post?.metaDescription,
    keywords: post?.tags.map(e => e),
    publisher: post?.auteur,
    creator: post?.auteur,
    authors: [
      {name: 'Gauvreau'},
      {name: 'andréa', url: 'https://andrea-gauvreau.fr'},
    ],
    metadataBase: new URL('https://www.andrea-gauvreau.fr/'),
    alternates: {
      canonical: `/${post?.link}`,
    },
  }
}

export default async function Page({params}) {
  return <ArticlePage params={params} />
}

export async function getArticle({params}) {
  const post = await fetchPostByLink(params.link)
  return {
    props: {
      post,
    },
  }
}
