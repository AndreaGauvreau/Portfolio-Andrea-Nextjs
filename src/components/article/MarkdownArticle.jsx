import Head from 'next/head'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import './mdstyle.css'

const MarkdownArticle = ({params, post}) => {
  const link = params.link
  let markdownContent = ''
  if (
    link === 'comment-faire-un-configurateur-3d-sur-three-fiber-et-next-js-13'
  ) {
    markdownContent = articles[post?.number].content
  }
  return (
    <>
      <div id="mainmd">
        <div id="contentmd">
          <ReactMarkdown className={'markdown'}>
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export default MarkdownArticle

const articles = [
  {
    content:
      '# Je refais de le site de tesla en mieux !' +
      '\n' +
      '## Step 1 : Analyse du site' +
      '\n' +
      '## Step 2 : Coder la home page' +
      '\n' +
      '###  1 - Coder la home page' +
      '\n' +
      '## Step 3 : Coder le configurateur ' +
      '\n' +
      '## Step 4 : Coder les pages vehicules' +
      '\n' +
      '## Conclusion et résultat',
  },
]
