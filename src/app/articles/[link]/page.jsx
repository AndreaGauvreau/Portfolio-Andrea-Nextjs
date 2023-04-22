import ArticlePage from '@/components/article/ArticlePage.jsx'
import MarkdownArticle from '@/components/article/MarkdownArticle'
import {fetchPostByLink} from '@/commons/api/post.jsx'

export default async function Page({params}) {
  const post = {imagePath: '/2k_earth_nightmap.jpg'}
  return (
    <div>
      <ArticlePage post={post} />
      <MarkdownArticle params={params} />
    </div>
  )
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
    openGraph: {
      images: post?.imagePath,
      url: `https://www.andrea-gauvreau.fr/${post?.link}`,
    },
  }
}
