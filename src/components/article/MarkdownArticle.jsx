import Head from 'next/head'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import './mdstyle.css'

const MarkdownArticle = ({params, post}) => {
  const link = params.link
  const markdownContent = articles[post?.number].content
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
      '## Step 2 : Installer le projet' +
      '\n' +
      '## Step 3 : Coder la home page' +
      '\n' +
      '### 1 - Animation des slides au scroll' +
      '\n' +
      '### 2 - Animation du menu principal' +
      '\n' +
      '## Step 4 : Coder le configurateur ' +
      '\n' +
      '### 1 - Options/selections du vehicule' +
      '\n' +
      '### 2 - Créer mon propre slider' +
      '\n' +
      '### 3 - Configurateur 3D' +
      '\n' +
      '## Step 5 : Coder les pages vehicules' +
      '\n' +
      '### 1 - Hero banner principal' +
      '\n' +
      '### 2 - Autres composants' +
      '\n' +
      '## Conclusion et résultat' +
      '\n' +
      "Nous voici enfin arrivé au bout ! Comme tu peux le voir c'est un sacré défis qui m'attendais. Mais en décomposant chaque partie du site on a réussi au final à produire quelque chose de vraiement intéressant !",
  },
  {
    content:
      '# Je refais de le site de tesla en mieux !' +
      '\n' +
      '## Step 1 : Analyse du site' +
      '\n' +
      '## Step 2 : Installer le projet' +
      '\n' +
      '## Step 3 : Coder la home page' +
      '\n' +
      '### 1 - Animation des slides au scroll' +
      '\n' +
      '### 2 - Animation du menu principal' +
      '\n' +
      '## Step 4 : Coder le configurateur ' +
      '\n' +
      '### 1 - Options/selections du vehicule' +
      '\n' +
      '### 2 - Créer mon propre slider' +
      '\n' +
      '### 3 - Configurateur 3D' +
      '\n' +
      '## Step 5 : Coder les pages vehicules' +
      '\n' +
      '### 1 - Hero banner principal' +
      '\n' +
      '### 2 - Autres composants' +
      '\n' +
      '## Conclusion et résultat' +
      '\n' +
      "Nous voici enfin arrivé au bout ! Comme tu peux le voir c'est un sacré défis qui m'attendais. Mais en décomposant chaque partie du site on a réussi au final à produire quelque chose de vraiement intéressant !",
  },
]
