'use client'
import React from 'react'
import ContentPageBlur from '@/components/tools/gradient/ContentPageGrad'

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Qu'est-ce qu'un dégradé CSS (linear-gradient) ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un dégradé CSS (linear-gradient) est une fonction CSS qui permet de créer une transition en douceur entre deux ou plusieurs couleurs le long d'une ligne droite. Il est souvent utilisé pour créer des arrière-plans, des boutons et d'autres éléments de design attrayants sur les sites web et les applications.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment fonctionne le générateur de dégradés CSS (linear-gradient) ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le générateur de dégradés CSS (linear-gradient) vous permet de choisir les couleurs et les paramètres du dégradé, puis génère automatiquement le code CSS correspondant. Il suffit de sélectionner les options souhaitées et de copier-coller le code dans votre projet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pourquoi utiliser un générateur de dégradés CSS ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un générateur de dégradés CSS facilite la création de dégradés personnalisés en générant automatiquement le code CSS correspondant. Cela permet aux développeurs et aux concepteurs de gagner du temps et de créer des dégradés cohérents et esthétiquement plaisants sans avoir à écrire manuellement le code.',
        },
      },
      {
        '@type': 'Question',
        name: 'Est-ce que les dégradés CSS (linear-gradient) fonctionnent sur tous les navigateurs ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les dégradés CSS (linear-gradient) sont pris en charge par la plupart des navigateurs modernes, mais il peut y avoir des problèmes de compatibilité avec certains navigateurs plus anciens. Dans ces cas-là, il est recommandé d'utiliser des préfixes spécifiques aux navigateurs ou des solutions de repli pour assurer une expérience utilisateur cohérente.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment puis-je adapter les dégradés CSS générés à mon propre projet ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il suffit d'utiliser le générateur pour créer le code CSS correspondant au dégradé souhaité, puis d'intégrer ce code dans votre projet. Vous pouvez également personnaliser les couleurs, les angles, les positions et d'autres aspects du dégradé pour l'adapter à vos besoins.",
        },
      },
      {
        '@type': 'Question',
        name: 'Le générateur de dégradés CSS (linear-gradient) est-il gratuit ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, le générateur est totalement gratuit et accessible à tous. Vous pouvez l'utiliser autant de fois que vous le souhaitez pour créer des dégradés CSS pour vos projets personnels ou professionnels.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        key="product-jsonld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <ContentPageBlur />
    </>
  )
}
