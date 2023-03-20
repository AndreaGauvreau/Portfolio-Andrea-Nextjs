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
import {CheckIcon, QuestionIcon} from '@chakra-ui/icons'
import MainSection from './MainSection'
import {colorsDD} from '@/components/ui/colors/colors'
import Image from 'next/image'
import Menu from '@/components/ui/Menu/Menu'
import Footer from '@/components/ui/Footer/Footer'
import Link from 'next/link'

export default function ContentPageboxshadow() {
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
                Pour utiliser le générateur de smoothSadow ( ombre lisse ) il
                vous suffit de selectionner correctement les paramètres voulu,
                puis de copier le code, et enfin de le coller dans votre fichier
                css.
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
                Box Shadow ?
              </Text>
            </Heading>
            <Text color={'white'}>
              Salut ! Es-tu prêt à découvrir le monde passionnant des Box
              Shadows ? <br></br>Alors, laisse-moi t'expliquer ce que c'est et
              comment ça peut transformer tes designs.<br></br>
              <br></br>Le Box Shadow, c'est quoi ? En gros, c'est un effet
              d'ombre portée qui permet d'ajouter de la profondeur et de la
              dimension à tes éléments graphiques. Il s'appuie sur des ombres
              floues et des décalages pour donner un look moderne et sophistiqué
              à tes projets.<br></br>
              <br></br> L'histoire du Box Shadow remonte à plusieurs années,
              lorsqu'on a commencé à utiliser des effets d'ombre pour mettre en
              valeur des éléments et créer une sensation de profondeur dans les
              interfaces utilisateur, les sites web et les applications mobiles.
              <br></br> Depuis lors, cet effet est devenu un incontournable dans
              le monde du design.<br></br>
              <br></br> Mais pourquoi le Box Shadow est-il si populaire ? Eh
              bien, c'est simple : il ajoute un côté à la fois élégant et
              réaliste à tes designs, en imitant les ombres que l'on voit dans
              la vie réelle. <br></br>De plus, le Box Shadow est extrêmement
              versatile – tu peux l'adapter à n'importe quel contexte et
              l'associer à d'autres tendances pour créer des designs vraiment
              impressionnants. <br></br>
              <br></br>Pour te lancer dans l'aventure Box Shadow, tu peux
              utiliser des outils en ligne ou des générateurs de CSS.<br></br>{' '}
              Grâce à ces ressources, tu pourras facilement appliquer des ombres
              portées à tes projets et créer des designs saisissants en un rien
              de temps. <br></br>
              <br></br> Alors, prêt à explorer le monde des Box Shadows ?
              N'hésite pas à expérimenter avec différentes combinaisons d'ombres
              et de décalages pour créer des designs incroyables et donner vie à
              tes projets !
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
        <Box p={4}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>
              FAQ - Questions fréquentes sur le Box-shadow et le générateur de
              CSS
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
    title: "Qu'est-ce que le Box Shadow exactement ?",
    text: "Le Box Shadow est un effet CSS qui permet d'ajouter des ombres portées aux éléments graphiques, créant ainsi de la profondeur et de la dimension. Il repose sur des ombres floues et des décalages pour donner un aspect moderne et sophistiqué aux projets.",
  },
  {
    id: 2,
    title: 'Pourquoi le Box Shadow est-il populaire ?',
    text: "Le Box Shadow est populaire parce qu'il offre un aspect élégant et réaliste, tout en étant extrêmement polyvalent et adaptable à de nombreux contextes de design. Il permet de créer des interfaces et des éléments visuels attrayants et mémorables.",
  },
  {
    id: 3,
    title: 'Comment fonctionne le générateur de CSS Box Shadow ?',
    text: "Le générateur de CSS Box Shadow te permet de personnaliser les éléments clés de l'effet, tels que les décalages, les ombres et les flous, et de générer automatiquement le code CSS correspondant. Il suffit de sélectionner les options souhaitées et de copier-coller le code dans ton projet.",
  },
  {
    id: 4,
    title: 'Est-ce que le Box Shadow fonctionne sur tous les navigateurs ?',
    text: "Le Box Shadow fonctionne sur la plupart des navigateurs modernes, mais il peut y avoir des problèmes de compatibilité avec certains navigateurs plus anciens. Dans ces cas-là, il est recommandé d'utiliser des préfixes spécifiques aux navigateurs ou des solutions de repli pour assurer une expérience utilisateur cohérente.",
  },
  {
    id: 5,
    title: 'Comment puis-je adapter le Box Shadow à mon propre projet ?',
    text: "Il te suffit d'utiliser le générateur pour créer le code CSS correspondant à l'effet Box Shadow souhaité, puis d'intégrer ce code dans ton projet. Tu peux également personnaliser les couleurs, les dimensions et d'autres aspects du design pour l'adapter à tes besoins.",
  },
  {
    id: 6,
    title: 'Le générateur de CSS Box Shadow est-il gratuit ?',
    text: "Oui, le générateur est totalement gratuit et accessible à tous. Tu peux l'utiliser autant de fois que tu le souhaites pour créer des designs Box Shadow pour tes projets personnels ou professionnels.",
  },
]
