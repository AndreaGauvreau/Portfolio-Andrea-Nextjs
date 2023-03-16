'use client'
import {colorsDD} from '@/components/ui/colors/colors'
import {useEffect, useState} from 'react'
const projetsdata = [
  {
    id: 1,
    color1: '#398ffc',
    color2: 'white',
    title: 'Teachizi',
    slug: 'teachizi',
    dateStart: 'Septembre 2021',
    dateEnd: 'Janvier 2023',
    description:
      'Teachizi est une plateforme de mise en relation dédiée aux élèves et aux professeurs indépendants',
    contribution:
      "j'ai developpé la marketplace teachizi.fr dans le but d'obtenir un espace utilisateur eleve et professeur, possibilité de réserver et payer le cours d'un prof",
    categories: ['CMS', 'Marketplace', 'Mangopay'],
    image: '/images/teachizi.fr-portfolio-andrea-gauvreau.jpg',
    hash: 'L99ReZ4T0P~UL#%iMwE30[%Ms$9Z',
    projectOwner: 'Mathis Thomas',
    comment: "Notre projet à vu le jour grâce au travail d'andréa",
    logo: '/images/logo-teachizi-blanc-450x102.png',
    stack: [
      'Wordpress',
      'WooCommerce',
      'MangoPay',
      'Elementor',
      'Crocoblock',
      'Javascript',
      'Css',
      'Php',
    ],
    missions: [
      "🚧 Construire Toute l'ui/ux du site",
      '🚧 Construction de la charte Graphique',
      "🐣 Création d'un dashboard pour les 2 types d'utilisateurs",
      "🐣 Création d'un système de réservation",
      "🏅 Optimisation SEO avec création d'un Blog",
      '🏅 Optimisation SEO avec ajout de schemas du les pages',
      '🤌 Affichage des tous les cours disponible sur une page dédiée',
      "🛟 Mise en place d'un service support client",
    ],
    retourVideo:
      'https://www.youtube.com/watch?v=y6oMutwJQCw&ab_channel=4KRelaxationChannel',
  },
  {
    id: 2,
    color1: '#398ffc',
    color2: colorsDD?.green,
    title: 'SchoolBooster',
    slug: 'schoolBooster',
    dateStart: 'Janvier 2023',
    dateEnd: 'Mars 2023',
    description:
      "SchoolBooster est une plateforme de gestion de formation et d'équipe",
    contribution: `J'ai contribué à l'amélioration de lateamV2, je me suis principalement occupé de divers problème ui/ux, appels API avec react Query. J'ai eu la chance d'être épaulé par un developpeur senior tout au long de cette mission ce qui a grandement augmenté mes compétences de developpeur`,
    categories: ['React', 'React Query', 'Chakra Ui'],
    image: '/images/schoolbooster.jpg',
    hash: 'LkFslT%gE0Io%%ohRkWEE4M|xu%2',
    projectOwner: 'Mike Codeur',
    comment: 'Merci à andréa pour son aide apporté au projet',
    logo: '/images/logo-teachizi-blanc-450x102.png',
    stack: [
      'React',
      'Jest',
      'React Query',
      'Github',
      'Chakra UI',
      'TypeScript',
      'MDeditor',
      'AWS',
      'GraphQL',
      'Formik',
    ],
    missions: [
      '🚧 Construire des formulaires Formik',
      "🚧 Construire et améliorer l'ui/ux de l'app",
      "🚧 Construire et améliorer l'ui/ux du site",
      "🐣 Création d'espaces dédiées sur l'app pour les 2 types d'utilisateurs",
      "🐣 Création d'appels API avec GraphQl et React Query",
      "🏅 Optimisation Des Performances de l'app",
      "🤌 Travail d'équipe au quotidien sur Github",
      '🛟 Mise en place des tests avec JEST',
    ],
    retourVideo:
      'https://www.youtube.com/watch?v=y6oMutwJQCw&ab_channel=4KRelaxationChannel',
  },
  {
    id: 3,
    color1: '#ff954e',
    color2: '#b201de',
    title: 'Formizi',
    slug: 'formizi',
    dateStart: 'Septembre 2022',
    dateEnd: 'Janvier 2023',
    description:
      'Formizi est une plateforme spécialisé dans la digitalisation de formation professionnelle.',
    contribution:
      "J'ai developpé Formizi qui est une lxp offrant une experience de formation digital innovante.",
    categories: ['CMS', 'LXP', 'LMS'],
    image: '/images/formizi-portfolio.jpg',
    hash: 'LQN7{kRf:X-m}ftQobVt{oxGFqNb',
    projectOwner: 'Hadrien Loridon',
    comment:
      "Les organismes de formations sont satisfaits de l'experience utilisateur de la plateforme",
    logo: '/images/Formizi-Logo-Blanc.png',
    stack: [
      'Wordpress',
      'Learndash',
      'Javascript',
      'Three.JS',
      'Elementor',
      'Crocoblock',
      'Query',
      'Php',
    ],
    missions: [
      "🚧 Construire Toute l'ui/ux du site",
      '🚧 Construction de la charte Graphique',
      "🐣 Création d'un dashboard pour suivre l'évolution de sa formation",
      "🐣 Création d'un système de lecture de formation",
      '🏅 Optimisation SEO',
      '🤓 Utilisation de Three.js Pour les landing pages',
      '🤌 Création des formations',
      "🛟 Mise en place d'un service support client",
    ],
    retourVideo:
      'https://www.youtube.com/watch?v=y6oMutwJQCw&ab_channel=4KRelaxationChannel',
  },
  {
    id: 4,
    color1: '#398ffc',
    color2: 'white',
    title: 'Teachizi',
    slug: 'teachizi',
    dateStart: 'Septembre 2021',
    dateEnd: 'Janvier 2023',
    description:
      'Teachizi est une plateforme de mise en relation dédiée aux élèves et aux professeurs indépendants',
    contribution:
      "j'ai developpé la marketplace teachizi.fr dans le but d'obtenir un espace utilisateur eleve et professeur, possibilité de réserver et payer le cours d'un prof",
    categories: ['CMS', 'Marketplace', 'Mangopay'],
    image: '/images/teachizi.fr-portfolio-andrea-gauvreau.jpg',
    hash: 'L99ReZ4T0P~UL#%iMwE30[%Ms$9Z',
    projectOwner: 'Mathis Thomas',
    comment: "Notre projet à vu le jour grâce au travail d'andréa",
    logo: '/images/logo-teachizi-blanc-450x102.png',
    stack: [
      'Wordpress',
      'WooCommerce',
      'MangoPay',
      'Elementor',
      'Crocoblock',
      'Javascript',
      'Css',
      'Php',
    ],
    missions: [
      "🚧 Construire Toute l'ui/ux du site",
      '🚧 Construction de la charte Graphique',
      "🐣 Création d'un dashboard pour les 2 types d'utilisateurs",
      "🐣 Création d'un système de réservation",
      "🏅 Optimisation SEO avec création d'un Blog",
      '🏅 Optimisation SEO avec ajout de schemas du les pages',
      '🤌 Affichage des tous les cours disponible sur une page dédiée',
      "🛟 Mise en place d'un service support client",
    ],
    retourVideo:
      'https://www.youtube.com/watch?v=y6oMutwJQCw&ab_channel=4KRelaxationChannel',
  },
  {
    id: 5,
    color1: '#398ffc',
    color2: colorsDD?.green,
    title: 'SchoolBooster',
    slug: 'schoolBooster',
    dateStart: 'Janvier 2023',
    dateEnd: 'Mars 2023',
    description:
      "SchoolBooster est une plateforme de gestion de formation et d'équipe",
    contribution: `J'ai contribué à l'amélioration de lateamV2, je me suis principalement occupé de divers problème ui/ux, appels API avec react Query. J'ai eu la chance d'être épaulé par un developpeur senior tout au long de cette mission ce qui a grandement augmenté mes compétences de developpeur`,
    categories: ['React', 'React Query', 'Chakra Ui'],
    image: '/images/schoolbooster.jpg',
    hash: 'LkFslT%gE0Io%%ohRkWEE4M|xu%2',
    projectOwner: 'Mike Codeur',
    comment: 'Merci à andréa pour son aide apporté au projet',
    logo: '/images/logo-teachizi-blanc-450x102.png',
    stack: [
      'React',
      'Jest',
      'React Query',
      'Github',
      'Chakra UI',
      'TypeScript',
      'MDeditor',
      'AWS',
      'GraphQL',
      'Formik',
    ],
    missions: [
      '🚧 Construire des formulaires Formik',
      "🚧 Construire et améliorer l'ui/ux de l'app",
      "🚧 Construire et améliorer l'ui/ux du site",
      "🐣 Création d'espaces dédiées sur l'app pour les 2 types d'utilisateurs",
      "🐣 Création d'appels API avec GraphQl et React Query",
      "🏅 Optimisation Des Performances de l'app",
      "🤌 Travail d'équipe au quotidien sur Github",
      '🛟 Mise en place des tests avec JEST',
    ],
    retourVideo:
      'https://www.youtube.com/watch?v=y6oMutwJQCw&ab_channel=4KRelaxationChannel',
  },
  {
    id: 6,
    color1: '#ff954e',
    color2: '#b201de',
    title: 'Formizi',
    slug: 'formizi',
    dateStart: 'Septembre 2022',
    dateEnd: 'Janvier 2023',
    description:
      'Formizi est une plateforme spécialisé dans la digitalisation de formation professionnelle.',
    contribution:
      "J'ai developpé Formizi qui est une lxp offrant une experience de formation digital innovante.",
    categories: ['CMS', 'LXP', 'LMS'],
    image: '/images/formizi-portfolio.jpg',
    hash: 'LQN7{kRf:X-m}ftQobVt{oxGFqNb',
    projectOwner: 'Hadrien Loridon',
    comment:
      "Les organismes de formations sont satisfaits de l'experience utilisateur de la plateforme",
    logo: '/images/Formizi-Logo-Blanc.png',
    stack: [
      'Wordpress',
      'Learndash',
      'Javascript',
      'Three.JS',
      'Elementor',
      'Crocoblock',
      'Query',
      'Php',
    ],
    missions: [
      "🚧 Construire Toute l'ui/ux du site",
      '🚧 Construction de la charte Graphique',
      "🐣 Création d'un dashboard pour suivre l'évolution de sa formation",
      "🐣 Création d'un système de lecture de formation",
      '🏅 Optimisation SEO',
      '🤓 Utilisation de Three.js Pour les landing pages',
      '🤌 Création des formations',
      "🛟 Mise en place d'un service support client",
    ],
    retourVideo:
      'https://www.youtube.com/watch?v=y6oMutwJQCw&ab_channel=4KRelaxationChannel',
  },
  {
    id: 7,
    color1: '#398ffc',
    color2: 'white',
    title: 'Teachizi',
    slug: 'teachizi',
    dateStart: 'Septembre 2021',
    dateEnd: 'Janvier 2023',
    description:
      'Teachizi est une plateforme de mise en relation dédiée aux élèves et aux professeurs indépendants',
    contribution:
      "j'ai developpé la marketplace teachizi.fr dans le but d'obtenir un espace utilisateur eleve et professeur, possibilité de réserver et payer le cours d'un prof",
    categories: ['CMS', 'Marketplace', 'Mangopay'],
    image: '/images/teachizi.fr-portfolio-andrea-gauvreau.jpg',
    hash: 'L99ReZ4T0P~UL#%iMwE30[%Ms$9Z',
    projectOwner: 'Mathis Thomas',
    comment: "Notre projet à vu le jour grâce au travail d'andréa",
    logo: '/images/logo-teachizi-blanc-450x102.png',
    stack: [
      'Wordpress',
      'WooCommerce',
      'MangoPay',
      'Elementor',
      'Crocoblock',
      'Javascript',
      'Css',
      'Php',
    ],
    missions: [
      "🚧 Construire Toute l'ui/ux du site",
      '🚧 Construction de la charte Graphique',
      "🐣 Création d'un dashboard pour les 2 types d'utilisateurs",
      "🐣 Création d'un système de réservation",
      "🏅 Optimisation SEO avec création d'un Blog",
      '🏅 Optimisation SEO avec ajout de schemas du les pages',
      '🤌 Affichage des tous les cours disponible sur une page dédiée',
      "🛟 Mise en place d'un service support client",
    ],
    retourVideo:
      'https://www.youtube.com/watch?v=y6oMutwJQCw&ab_channel=4KRelaxationChannel',
  },
  {
    id: 8,
    color1: '#398ffc',
    color2: colorsDD?.green,
    title: 'SchoolBooster',
    slug: 'schoolBooster',
    dateStart: 'Janvier 2023',
    dateEnd: 'Mars 2023',
    description:
      "SchoolBooster est une plateforme de gestion de formation et d'équipe",
    contribution: `J'ai contribué à l'amélioration de lateamV2, je me suis principalement occupé de divers problème ui/ux, appels API avec react Query. J'ai eu la chance d'être épaulé par un developpeur senior tout au long de cette mission ce qui a grandement augmenté mes compétences de developpeur`,
    categories: ['React', 'React Query', 'Chakra Ui'],
    image: '/images/schoolbooster.jpg',
    hash: 'LkFslT%gE0Io%%ohRkWEE4M|xu%2',
    projectOwner: 'Mike Codeur',
    comment: 'Merci à andréa pour son aide apporté au projet',
    logo: '/images/logo-teachizi-blanc-450x102.png',
    stack: [
      'React',
      'Jest',
      'React Query',
      'Github',
      'Chakra UI',
      'TypeScript',
      'MDeditor',
      'AWS',
      'GraphQL',
      'Formik',
    ],
    missions: [
      '🚧 Construire des formulaires Formik',
      "🚧 Construire et améliorer l'ui/ux de l'app",
      "🚧 Construire et améliorer l'ui/ux du site",
      "🐣 Création d'espaces dédiées sur l'app pour les 2 types d'utilisateurs",
      "🐣 Création d'appels API avec GraphQl et React Query",
      "🏅 Optimisation Des Performances de l'app",
      "🤌 Travail d'équipe au quotidien sur Github",
      '🛟 Mise en place des tests avec JEST',
    ],
    retourVideo:
      'https://www.youtube.com/watch?v=y6oMutwJQCw&ab_channel=4KRelaxationChannel',
  },
  {
    id: 9,
    color1: '#ff954e',
    color2: '#b201de',
    title: 'Formizi',
    slug: 'formizi',
    dateStart: 'Septembre 2022',
    dateEnd: 'Janvier 2023',
    description:
      'Formizi est une plateforme spécialisé dans la digitalisation de formation professionnelle.',
    contribution:
      "J'ai developpé Formizi qui est une lxp offrant une experience de formation digital innovante.",
    categories: ['CMS', 'LXP', 'LMS'],
    image: '/images/formizi-portfolio.jpg',
    hash: 'LQN7{kRf:X-m}ftQobVt{oxGFqNb',
    projectOwner: 'Hadrien Loridon',
    comment:
      "Les organismes de formations sont satisfaits de l'experience utilisateur de la plateforme",
    logo: '/images/Formizi-Logo-Blanc.png',
    stack: [
      'Wordpress',
      'Learndash',
      'Javascript',
      'Three.JS',
      'Elementor',
      'Crocoblock',
      'Query',
      'Php',
    ],
    missions: [
      "🚧 Construire Toute l'ui/ux du site",
      '🚧 Construction de la charte Graphique',
      "🐣 Création d'un dashboard pour suivre l'évolution de sa formation",
      "🐣 Création d'un système de lecture de formation",
      '🏅 Optimisation SEO',
      '🤓 Utilisation de Three.js Pour les landing pages',
      '🤌 Création des formations',
      "🛟 Mise en place d'un service support client",
    ],
    retourVideo:
      'https://www.youtube.com/watch?v=y6oMutwJQCw&ab_channel=4KRelaxationChannel',
  },
]

export default projetsdata

export const useGetDataProjet = slug => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (slug) {
      try {
        const project = projetsdata.find(item => item.slug === slug)

        if (project) {
          setData(project)
          setLoading(false)
        } else {
          setError('Aucun projet trouvé avec ce slug.')
          setLoading(false)
        }
      } catch (err) {
        setError('Une erreur est survenue lors de la récupération des données.')
        setLoading(false)
      }
    } else {
      setError('Slug non fourni.')
      setLoading(false)
    }
  }, [slug])

  return {data, loading, error}
}
