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
      `Salut à toi, cher lecteur ! 
      
Aujourd'hui, je te présente un projet complètement fou et audacieux que j'ai mené ces derniers temps. 

Tu sais combien je suis passionné par les défis et les nouvelles technologies, et bien sûr, tu connais mon amour pour Tesla, la marque de voitures électriques qui révolutionne le monde de l'automobile. 

Alors, j'ai eu une idée : pourquoi ne pas allier ces deux passions en relevant un défi incroyable ? 
Laisse-moi te présenter mon projet : 
j'ai recréé le site de Tesla en code pur sur Next.js version 13 et ajouté un configurateur 3D inédit ! Incroyable, non ? Et le meilleur, c'est que j'ai réussi à rendre mon site plus performant que le site officiel de Tesla ! Je tiens à préciser que ceci est un projet personnel et que je n'ai aucun lien avec Tesla.
Bon, je te vois déjà te demander : 

***"Pourquoi diable refaire le site de Tesla ?"***

Eh bien, je me suis dit que cela serait un excellent moyen de me lancer un défi, de pousser mes compétences en matière de développement web et de design, et de montrer à quel point on peut aller loin en explorant les possibilités offertes par les technologies modernes. 

Je voulais partager cette expérience avec toi pour t'inspirer et te montrer qu'avec de la passion et de la persévérance, on peut réaliser des projets hors du commun.    
Alors, qu'est-ce qui rend mon site si spécial ? D'abord, j'ai utilisé Next.js version 13, une plateforme de développement incroyable qui m'a permis de créer un site ultra-performant et réactif. 

Grâce à cela, j'ai pu offrir une expérience utilisateur hors pair, avec des temps de chargement réduits et une navigation fluide et intuitive. Ensuite, j'ai intégré un configurateur 3D inédit sur le site, une fonctionnalité qui n'existait pas sur le site officiel de Tesla. 

Ce configurateur permet de personnaliser ta voiture Tesla de manière interactive et réaliste, en explorant les différentes options de couleurs, de jantes, d'intérieur et bien plus encore. Le résultat est époustouflant, et je suis sûr que tu adoreras jouer avec ce configurateur autant que moi.    
Voilà, c'est tout pour cette introduction à mon projet de refonte du site de Tesla. Dans cet article, je vais te guider à travers les différentes étapes de réalisation de ce projet, en te partageant mes astuces, mes galères et mes réussites. Je suis convaincu que cela te donnera envie de te lancer toi-même dans des projets audacieux et passionnants.

Alors, accroche-toi et prépare-toi à embarquer dans cette aventure électrisante !
     
## Step 1 : Analyse du site
     
## Step 2 : Installer le projet
     
## Step 3 : Coder la home page
     
### 1 - Animation des slides au scroll
     
### 2 - Animation du menu principal
     
## Step 4 : Coder le configurateur 

### 1 - Options/selections du vehicule

### 2 - Créer mon propre slider

### 3 - Configurateur 3D

 ## Step 5 : Coder les pages vehicules

### 1 - Hero banner principal

### 2 - Autres composants

## Conclusion et résultat

"Nous voici enfin arrivé au bout ! Comme tu peux le voir c'est un sacré défis qui m'attendais. Mais en décomposant chaque partie du site on a réussi au final à produire quelque chose de vraiement intéressant !`,
  },
]
