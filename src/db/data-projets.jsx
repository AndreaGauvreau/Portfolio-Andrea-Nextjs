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
export const competencesDatas = [
  {
    competences: 'TypeScript',
    pays: 'France',
    emoji: '🇫🇷',
    id: 'Paris',
    description:
      "Comme la langue française, élégante et structurée, TypeScript apporte de la clarté et de la rigueur à vos projets JavaScript. En ajoutant un typage statique, il permet d'écrire un code plus sûr et plus compréhensible, tout comme la beauté et la précision de la langue française captivent l'attention.",
    projets: [1, 2, 3],
    montravail:
      "J'ai conçu plusieurs interfaces en utilisant la technologie TypeScript.",
  },
  {
    competences: 'React',
    pays: 'États-Unis',
    emoji: '🇺🇸',
    id: 'United States',
    description:
      'Tout comme le "melting-pot" culturel américain fusionne des idées et des influences diverses, React combine des composants réutilisables et un état facile à gérer pour créer des applications Web harmonieuses et performantes.',
    projets: [4, 5, 6],
    montravail:
      "J'ai développé de nombreuses applications Web en utilisant React pour créer des interfaces modernes et réactives.",
  },
  {
    competences: 'Next.js',
    pays: 'Japon',
    emoji: '🇯🇵',
    id: 'Japan',
    description:
      "À l'image du Shinkansen, le train à grande vitesse japonais qui symbolise l'innovation et l'efficacité, Next.js propulse vos applications Web vers de nouveaux sommets en offrant des performances inégalées et un développement rapide.",
    projets: [7, 8, 9],
    montravail:
      "J'ai utilisé Next.js pour construire des applications Web performantes et optimisées avec un routage dynamique et une génération de pages statiques.",
  },
  {
    competences: 'Three.js',
    pays: 'Inde',
    emoji: '🇮🇳',
    id: 'India',
    description:
      "Les épices de l'Inde sont faites pour apporter du goût à vos plats, tout comme Three.js est là pour relever votre site avec ses saveurs graphiques et ses animations époustouflantes.",
    projets: [10, 11, 12],
    montravail:
      "J'ai intégré Three.js dans plusieurs projets pour créer des visualisations 3D interactives et des expériences immersives.",
  },
  {
    competences: 'GraphQL',
    pays: 'Chine',
    emoji: '🇨🇳',
    id: 'China',
    description:
      "Comme la Chine est un pays aux multiples facettes où tradition et modernité cohabitent, GraphQL s'adapte à vos besoins en offrant une interface unifiée et flexible pour interroger et manipuler les données de vos applications Web.",
    projets: [13, 14, 15],
    montravail:
      "J'ai mis en place des API GraphQL pour faciliter l'accès aux données et améliorer la communication entre le client et le serveur.",
  },

  {
    competences: 'Jest Test',
    pays: 'Allemagne',
    emoji: '🇩🇪',
    id: 'Germany',
    description:
      "Tout comme les voitures allemandes sont réputées pour leur fiabilité et leur ingénierie de précision, Jest Test s'assure que vos applications fonctionnent sans faille en fournissant des tests précis et fiables.",
    projets: [16, 17, 18],
    montravail:
      "J'ai utilisé Jest Test pour garantir la qualité et la fiabilité des applications en créant et en maintenant des tests unitaires et d'intégration.",
  },
  {
    competences: 'Chakra UI',
    pays: 'Brésil',
    emoji: '🇧🇷',
    id: 'Brazil',
    description:
      "À l'image du Brésil, terre de contrastes et de diversité, Chakra UI apporte de la vie à vos applications en fournissant une bibliothèque de composants accessibles et esthétiquement variés pour refléter les goûts de tous les utilisateurs.",
    projets: [19, 20, 21],
    montravail:
      "J'ai utilisé Chakra UI pour créer des interfaces utilisateur accessibles et attrayantes, en mettant l'accent sur l'expérience utilisateur et la conformité aux normes d'accessibilité.",
  },
  {
    competences: 'Formik',
    pays: 'Italie',
    emoji: '🇮🇹',
    id: 'Italy',
    description:
      'Comme une pizza italienne, savoureuse et adaptable à une infinité de garnitures, Formik est un outil polyvalent pour gérer les formulaires dans vos applications React, rendant leur création et leur validation aussi simple et délicieuse que votre pizza préférée.',
    projets: [22, 23, 24],
    montravail:
      "J'ai utilisé Formik pour gérer la logique des formulaires et la validation dans plusieurs applications React, simplifiant ainsi le processus de création et de gestion des formulaires.",
  },
  {
    competences: 'GitHub',
    pays: 'Royaume-Uni',
    emoji: '🇬🇧',
    id: 'United Kingdom',
    description:
      'À l\'image du système de métro londonien, le "Tube", qui connecte les différentes parties de la ville et permet un transport efficace et organisé, GitHub relie les développeurs du monde entier en leur offrant un espace de collaboration et de partage pour leurs projets.',
    projets: [25, 26, 27],
    montravail:
      "J'ai utilisé GitHub pour collaborer avec des équipes de développeurs, gérer les versions de mes projets et contribuer à des projets open-source.",
  },
]

export const useGetDataCompetences = pays => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (pays) {
      try {
        const project = competencesDatas.find(item => item.id === pays)

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
  }, [pays])

  return {data, loading, error}
}
