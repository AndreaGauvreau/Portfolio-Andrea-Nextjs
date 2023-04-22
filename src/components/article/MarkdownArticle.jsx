// components/MarkdownArticle.js
import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownArticle = () => {
  const [markdownContent, setMarkdownContent] = useState('')

  useEffect(() => {
    fetch('/markdown/article2.md')
      .then(response => response.text())
      .then(text => setMarkdownContent(text))
  }, [])

  return <ReactMarkdown>{markdownContent}</ReactMarkdown>
}

export default MarkdownArticle
