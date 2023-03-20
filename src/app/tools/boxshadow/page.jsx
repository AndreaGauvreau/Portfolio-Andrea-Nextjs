'use client'
import React from 'react'
import ContentPageboxshadow from '@/components/tools/boxshadow/ContentPageboxshadow'

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Qu'est-ce que le Box Shadow exactement ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le Box Shadow est un effet CSS qui permet d'ajouter des ombres portées aux éléments graphiques, créant ainsi de la profondeur et de la dimension. Il repose sur des ombres floues et des décalages pour donner un aspect moderne et sophistiqué aux projets.",
        },
      },
      {
        '@type': 'Question',
        name: 'Pourquoi le Box Shadow est-il populaire ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le Box Shadow est populaire parce qu'il offre un aspect élégant et réaliste, tout en étant extrêmement polyvalent et adaptable à de nombreux contextes de design. Il permet de créer des interfaces et des éléments visuels attrayants et mémorables.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment fonctionne le générateur de CSS Box Shadow ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le générateur de CSS Box Shadow te permet de personnaliser les éléments clés de l'effet, tels que les décalages, les ombres et les flous, et de générer automatiquement le code CSS correspondant. Il suffit de sélectionner les options souhaitées et de copier-coller le code dans ton projet.",
        },
      },
      {
        '@type': 'Question',
        name: 'Est-ce que le Box Shadow fonctionne sur tous les navigateurs ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le Box Shadow fonctionne sur la plupart des navigateurs modernes, mais il peut y avoir des problèmes de compatibilité avec certains navigateurs plus anciens. Dans ces cas-là, il est recommandé d'utiliser des préfixes spécifiques aux navigateurs ou des solutions de repli pour assurer une expérience utilisateur cohérente.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment puis-je adapter le Box Shadow à mon propre projet ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il te suffit d'utiliser le générateur pour créer le code CSS correspondant à l'effet Box Shadow souhaité, puis d'intégrer ce code dans ton projet. Tu peux également personnaliser les couleurs, les dimensions et d'autres aspects du design pour l'adapter à tes besoins.",
        },
      },
      {
        '@type': 'Question',
        name: 'Le générateur de CSS Box Shadow est-il gratuit ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, le générateur est totalement gratuit et accessible à tous. Tu peux l'utiliser autant de fois que tu le souhaites pour créer des designs Box Shadow pour tes projets personnels ou professionnels.",
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
      <ContentPageboxshadow />
    </>
  )
}
