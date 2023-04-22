import ArticlePage from '@/components/article/ArticlePage.jsx'
import MarkdownArticle from '@/components/article/MarkdownArticle'

export default function Page({params}) {
  const post = {imagePath: '/2k_earth_nightmap.jpg'}
  return (
    <div>
      <ArticlePage post={post} />
      <MarkdownArticle params={params} />
    </div>
  )
}
