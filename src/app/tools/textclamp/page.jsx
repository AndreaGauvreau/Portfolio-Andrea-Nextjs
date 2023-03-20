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
        name: "Qu'est-ce que la fonction CSS clamp() ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La fonction CSS clamp() est une fonction permettant d'ajuster une valeur CSS entre une limite minimale et une limite maximale, en fonction d'une valeur préférée. Elle est particulièrement utile pour créer des designs responsives et fluides en ajustant les propriétés telles que la taille de la police, la largeur, la hauteur et les marges.",
        },
      },
      {
        '@type': 'Question',
        name: 'Pourquoi la fonction clamp() est-elle pratique pour le responsive design ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La fonction clamp() est pratique pour le responsive design car elle permet d'ajuster automatiquement les propriétés CSS en fonction des dimensions de l'écran ou de la fenêtre, tout en définissant des limites minimales et maximales pour garantir une expérience utilisateur cohérente et lisible.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment fonctionne le générateur gratuit en ligne de clamp() ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le générateur de clamp() en ligne te permet de personnaliser les éléments clés de la fonction, tels que les limites minimale et maximale et la valeur préférée, puis de générer automatiquement le code CSS correspondant. Il suffit de sélectionner les options souhaitées et de copier-coller le code dans ton projet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Est-ce que la fonction CSS clamp() est compatible avec tous les navigateurs ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La fonction CSS clamp() est compatible avec la plupart des navigateurs modernes, y compris Chrome, Firefox, Safari et Edge. Cependant, elle n'est pas prise en charge par Internet Explorer. Pour assurer une expérience utilisateur cohérente sur les anciens navigateurs, il est recommandé d'utiliser des solutions de repli ou des techniques alternatives.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment puis-je intégrer la fonction CSS clamp() dans mon propre projet ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il te suffit d'utiliser le générateur en ligne pour créer le code CSS correspondant à l'utilisation de la fonction clamp() souhaitée, puis d'intégrer ce code dans ton projet. Tu peux également personnaliser les valeurs et les propriétés pour les adapter à tes besoins.",
        },
      },
      {
        '@type': 'Question',
        name: 'Le générateur en ligne de clamp() est-il gratuit ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, le générateur de clamp() en ligne est totalement gratuit et accessible à tous. Tu peux l'utiliser autant de fois que tu le souhaites pour créer des designs responsives et fluides pour tes projets personnels ou professionnels.",
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
