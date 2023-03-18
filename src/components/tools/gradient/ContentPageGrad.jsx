import Head from 'next/head'
import {
  Box,
  Heading,
  Container,
  Text,
  Flex,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  IconButton,
  SimpleGrid,
  HStack,
  VStack,
} from '@chakra-ui/react'
import {QuestionIcon} from '@chakra-ui/icons'
import MainSection from './MainSectionGrad'
import {colorsDD} from '@/components/ui/colors/colors'
import Image from 'next/image'
import Footer from '@/components/ui/Footer/Footer'
import Link from 'next/link'

export default function ContentPageBlur() {
  return (
    <>
      <MainSection />
      <Box
        bg={colorsDD.bgcolor}
        color={'white'}
        maxW={'100vw'}
        overflow={'hidden'}
      >
        <Container maxW={'7xl'}>
          <Stack
            align={'center'}
            spacing={{base: 8, md: 10}}
            py={{base: 20, md: 28}}
            direction={{base: 'column', md: 'row'}}
          >
            <Stack flex={1} spacing={{base: 5, md: 10}}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{base: '3xl', sm: '4xl', lg: '6xl'}}
              >
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'red.400',
                    zIndex: -1,
                  }}
                >
                  Comment utiliser
                </Text>
                <br />
                <Text as={'span'} color={colorsDD.pink}>
                  Le générateur ?
                </Text>
              </Heading>
              <Text color={'white'}>
                Pour utiliser le générateur de dégradé il vous suffit de
                selectionner correctement les paramètres voulu, puis de copier
                le code, et enfin de le coller dans votre fichier css.
              </Text>
              <Stack
                spacing={{base: 4, sm: 6}}
                direction={{base: 'column', sm: 'row'}}
              >
                <Link href={'/tools'}>
                  <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    bg={colorsDD.pink20}
                    _hover={{bg: colorsDD.pink}}
                  >
                    Plus d'outils
                  </Button>
                </Link>
                <Button
                  rounded={'full'}
                  color={colorsDD.pink}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  leftIcon={<PlayIcon color={colorsDD.pink20} h={4} w={4} />}
                >
                  Fonctionnement
                </Button>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}
            >
              <Blob
                w={'150%'}
                h={'150%'}
                position={'absolute'}
                top={'-20%'}
                left={0}
                zIndex={-1}
                color={useColorModeValue('red.50', 'red.400')}
              />
              <Box
                position={'relative'}
                height={'300px'}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}
              >
                <IconButton
                  aria-label={'Play Button'}
                  variant={'ghost'}
                  _hover={{bg: 'transparent'}}
                  icon={<PlayIcon w={12} h={12} />}
                  size={'lg'}
                  color={'white'}
                  position={'absolute'}
                  left={'50%'}
                  top={'50%'}
                  transform={'translateX(-50%) translateY(-50%)'}
                />
                <Image
                  alt={
                    'Ajouter un effet glassmorphism avec un generateur de code en ligne'
                  }
                  width={700}
                  height={700}
                  src={'/images/identite/portfolio-andrea-gauvreau.jpg'}
                />
              </Box>
            </Flex>
          </Stack>
        </Container>

        <Box p={4}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>
              FAQ - Questions fréquentes sur le générateur de dégradé CSS
            </Heading>
          </Stack>

          <Container maxW={'6xl'} mt={10}>
            <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={10}>
              {features.map(feature => (
                <HStack key={feature.id} align={'top'}>
                  <Box color={colorsDD.green} px={2}>
                    <Icon as={QuestionIcon} />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600}>{feature.title}</Text>
                    <Text color={'#ffffff80'}>{feature.text}</Text>
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
        <Container maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{base: 8, md: 14}}
            py={{base: 20, md: 36}}
          >
            <Heading
              fontWeight={600}
              fontSize={{base: '2xl', sm: '4xl', md: '6xl'}}
              lineHeight={'110%'}
              color={'white'}
            >
              C'est quoi le <br />
              <Text as={'span'} color={colorsDD.green}>
                Dégradé css ?
              </Text>
            </Heading>
            <Text color={'white'}>
              Salut ! Es-tu prêt à plonger dans le monde passionnant des
              dégradés CSS (linear-gradient) ?<br></br> Alors, laisse-moi te
              présenter cette technique qui a révolutionné le design web et les
              applications.<br></br>
              <br></br>Les dégradés CSS, c'est quoi ? En gros, c'est une façon
              super cool de créer une transition en douceur entre deux ou
              plusieurs couleurs le long d'une ligne droite. Ils sont souvent
              utilisés pour créer des arrière-plans, des boutons et d'autres
              éléments de design attrayants sur les sites web et les
              applications.<br></br>
              <br></br> L'histoire des dégradés CSS remonte à quelques années,
              lors de l'introduction de la fonction linear-gradient dans la
              spécification CSS3. Les designers et les développeurs ont alors
              commencé à expérimenter avec des dégradés pour créer des effets
              visuels saisissants et dynamiques dans leurs projets.<br></br> Ce
              style a rapidement gagné en popularité, et aujourd'hui, il est
              utilisé partout, des interfaces utilisateur aux sites web et aux
              applications mobiles.<br></br>
              <br></br> Mais pourquoi les dégradés CSS sont-ils si populaires ?
              Eh bien, c'est simple : ils offrent une manière élégante et
              innovante de mettre en valeur les éléments d'une page tout en
              ajoutant de la profondeur et de la dimension à un design.{' '}
              <br></br>De plus, les dégradés CSS sont très polyvalents – tu peux
              les adapter à n'importe quel contexte et les combiner avec
              d'autres tendances pour créer des designs vraiment
              impressionnants. <br></br>
              <br></br>Pour te lancer dans l'aventure des dégradés CSS, tu peux
              utiliser un générateur de dégradés en ligne et gratuit.<br></br>{' '}
              Grâce à cet outil, tu pourras facilement créer des dégradés
              personnalisés et générer le code CSS correspondant pour l'ajouter
              à tes projets en un rien de temps.<br></br>
              <br></br> Alors, prêt à rejoindre la révolution des dégradés CSS ?
              N'hésite pas à explorer notre générateur de dégradés CSS
              (linear-gradient) et à t'amuser avec les différentes options.
              <br></br> Ensemble, créons des designs incroyables et faisons
              briller le monde des dégradés CSS !<br></br>Les générateurs de
              dégradés CSS en ligne, comme le nôtre, ont simplifié la tâche des
              développeurs et des concepteurs en offrant un moyen rapide et
              facile de créer des dégradés personnalisés. Ces outils gratuits
              permettent de gagner du temps et d'assurer une cohérence
              esthétique sans avoir à écrire manuellement le code CSS.<br></br>
              <br></br>En utilisant notre générateur de dégradés CSS
              (linear-gradient), tu pourras explorer de nombreuses possibilités
              en choisissant les couleurs, les angles, les positions et d'autres
              paramètres pour créer des dégradés uniques et adaptés à tes
              besoins. N'oublie pas que les dégradés CSS fonctionnent sur la
              plupart des navigateurs modernes, mais il peut être nécessaire
              d'utiliser des préfixes spécifiques aux navigateurs ou des
              solutions de repli pour assurer une expérience utilisateur.
            </Text>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}
            >
              <Link href={'/tools'}>
                <Button
                  colorScheme={'green'}
                  bg={colorsDD.green20}
                  rounded={'full'}
                  px={6}
                  _hover={{
                    bg: colorsDD.green,
                  }}
                >
                  Plus de générateur css
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
})

export const Blob = props => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
}

const features = [
  {
    id: 1,
    title: "Qu'est-ce qu'un dégradé CSS (linear-gradient) ?",
    text: "Un dégradé CSS (linear-gradient) est une fonction CSS qui permet de créer une transition en douceur entre deux ou plusieurs couleurs le long d'une ligne droite. Il est souvent utilisé pour créer des arrière-plans, des boutons et d'autres éléments de design attrayants sur les sites web et les applications.",
  },
  {
    id: 2,
    title: 'Pourquoi utiliser un générateur de dégradés CSS ?',
    text: 'Un générateur de dégradés CSS facilite la création de dégradés personnalisés en générant automatiquement le code CSS correspondant. Cela permet aux développeurs et aux concepteurs de gagner du temps et de créer des dégradés cohérents et esthétiquement plaisants sans avoir à écrire manuellement le code.',
  },
  {
    id: 3,
    title:
      'Comment fonctionne le générateur de dégradés CSS (linear-gradient) ?',
    text: 'Le générateur de dégradés CSS (linear-gradient) vous permet de choisir les couleurs et les paramètres du dégradé, puis génère automatiquement le code CSS correspondant. Il suffit de sélectionner les options souhaitées et de copier-coller le code dans votre projet.',
  },
  {
    id: 4,
    title:
      'Est-ce que les dégradés CSS (linear-gradient) fonctionnent sur tous les navigateurs ?',
    text: "Les dégradés CSS (linear-gradient) sont pris en charge par la plupart des navigateurs modernes, mais il peut y avoir des problèmes de compatibilité avec certains navigateurs plus anciens. Dans ces cas-là, il est recommandé d'utiliser des préfixes spécifiques aux navigateurs ou des solutions de repli pour assurer une expérience utilisateur cohérente.",
  },
  {
    id: 5,
    title:
      'Comment puis-je adapter les dégradés CSS générés à mon propre projet ?',
    text: "Il suffit d'utiliser le générateur pour créer le code CSS correspondant au dégradé souhaité, puis d'intégrer ce code dans votre projet. Vous pouvez également personnaliser les couleurs, les angles, les positions et d'autres aspects du dégradé pour l'adapter à vos besoins.",
  },
  {
    id: 6,
    title: 'Le générateur de dégradés CSS (linear-gradient) est-il gratuit ?',
    text: "Oui, le générateur est totalement gratuit et accessible à tous. Vous pouvez l'utiliser autant de fois que vous le souhaitez pour créer des dégradés CSS pour vos projets personnels ou professionnels.",
  },
]
