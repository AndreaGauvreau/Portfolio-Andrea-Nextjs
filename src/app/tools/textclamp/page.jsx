'use client'
import React from 'react'
import ContentPagetextclamp from '@/components/tools/textclamp/ContentPagetextclamp'

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Qu'est-ce qu'un dégradé CSS animé ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un dégradé CSS animé est une combinaison d'un dégradé CSS (linear-gradient) et d'une animation CSS. Cela permet de créer un effet de transition fluide entre les couleurs d'un dégradé au fil du temps, offrant une expérience visuelle dynamique et attrayante sur les sites web et les applications.",
        },
      },
      {
        '@type': 'Question',
        name: 'Pourquoi utiliser un générateur de dégradés CSS animés ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un générateur de dégradés CSS animés facilite la création d'effets de dégradé animés en générant automatiquement le code CSS nécessaire. Cela permet aux développeurs et aux concepteurs de gagner du temps et de créer des animations de dégradé cohérentes et esthétiquement plaisantes sans avoir à écrire manuellement le code.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment fonctionne le générateur de dégradés CSS animés ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le générateur de dégradés CSS animés vous permet de choisir les couleurs, les paramètres du dégradé et les options d'animation, puis génère automatiquement le code CSS correspondant. Il suffit de sélectionner les options souhaitées et de copier-coller le code dans votre projet.",
        },
      },
      {
        '@type': 'Question',
        name: 'Est-ce que les dégradés CSS animés fonctionnent sur tous les navigateurs ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les dégradés CSS animés sont pris en charge par la plupart des navigateurs modernes, mais il peut y avoir des problèmes de compatibilité avec certains navigateurs plus anciens. Dans ces cas-là, il est recommandé d'utiliser des préfixes spécifiques aux navigateurs ou des solutions de repli pour assurer une expérience utilisateur cohérente.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment puis-je adapter les dégradés CSS animés générés à mon propre projet ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il suffit d'utiliser le générateur pour créer le code CSS correspondant au dégradé animé souhaité, puis d'intégrer ce code dans votre projet. Vous pouvez également personnaliser les couleurs, les angles, les positions, les paramètres d'animation et d'autres aspects du dégradé pour l'adapter à vos besoins.",
        },
      },
      {
        '@type': 'Question',
        name: 'Le générateur de dégradés CSS animés est-il gratuit ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, le générateur est totalement gratuit et accessible à tous. Vous pouvez l'utiliser autant de fois que vous le souhaitez pour créer des dégradés CSS animés pour vos projets personnels ou professionnels.",
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
      <ContentPagetextclamp />
    </>
  )
}
