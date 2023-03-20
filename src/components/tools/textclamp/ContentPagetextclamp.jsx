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
import Footer from '@/components/ui/Footer/Footer'
import Link from 'next/link'
import {CodeBlock} from '@/components/ui/CodeBlock/CodeBlock'

export default function ContentPagetextclamp() {
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
                Pour utiliser le générateur de glassmorphism il vous suffit de
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
              Introduction à <br />
              <Text as={'span'} color={colorsDD.green}>
                la fonction CSS clamp{' '}
              </Text>
            </Heading>
            <Text>
              La fonction CSS clamp() est une fonction très utile pour créer des
              designs responsives, en particulier pour ajuster la taille des
              polices de caractères. Elle permet de définir une taille minimale,
              une taille maximale et une taille optimale pour un élément, tout
              en s'adaptant automatiquement en fonction des dimensions de
              l'écran ou de la fenêtre. Cette fonction est particulièrement
              utile pour les designs fluides, où vous souhaitez que la taille
              des éléments s'ajuste automatiquement en fonction de la taille de
              l'écran.
            </Text>

            <Heading as="h3">Comment utiliser la fonction clamp()</Heading>
            <Text>
              Pour utiliser la fonction clamp(), vous devez spécifier trois
              valeurs : la taille minimale, la taille optimale et la taille
              maximale. La syntaxe générale de la fonction est la suivante :
            </Text>

            <CodeBlock
              lineNB={false}
              language={'css'}
              code={'font-size: clamp(min, optimal, max);'}
            />

            <Text>
              Voici un exemple concret d'utilisation de la fonction `clamp()`
              pour définir la taille de la police d'un élément en fonction de la
              largeur de l'écran :
            </Text>
            <CodeBlock
              lineNB={false}
              language={'css'}
              code={`h1 { font-size: clamp(24px, 4vw, 36px); }`}
            />

            <Text>
              Dans cet exemple, la taille de la police de l'élément `h1` sera de
              24 pixels au minimum, de 36 pixels au maximum, et elle s'ajustera
              de manière optimale en fonction de la largeur de l'écran, avec une
              taille correspondant à 4% de cette largeur (4vw).
            </Text>
            <Heading as="h3">Avantages de la fonction clamp()</Heading>
            <Text>
              La fonction clamp() présente plusieurs avantages pour les
              développeurs et les designers. Voici quelques-uns de ces avantages
              :
            </Text>

            <Text>
              1. <strong>Responsive</strong> : La fonction `clamp()` permet de
              créer des designs responsives sans avoir besoin de plusieurs
              règles `@media`. Cela simplifie considérablement le code CSS et
              facilite la maintenance.
            </Text>
            <Text>
              2. <strong>Contrôle précis</strong> : Grâce à la fonction
              `clamp()`, vous pouvez définir des limites minimales et maximales
              pour la taille d'un élément, ce qui garantit que votre design
              reste cohérent et lisible sur tous les écrans.
            </Text>
            <Text>
              3. <strong>Flexibilité</strong> : La fonction `clamp()` peut être
              utilisée avec diverses unités CSS, telles que les pixels, les
              pourcentages, les ems, les rems et les unités relatives à la
              taille de la fenêtre (vh, vw, vmin, vmax). Cela offre une grande
              flexibilité pour adapter votre design à différents dispositifs et
              résolutions d'écran.
            </Text>
            <Heading as="h3">
              Exemple d'utilisation de la fonction clamp() pour le font-size
            </Heading>
            <Text>
              Voici un exemple de code CSS utilisant la fonction clamp() pour
              ajuster la taille de la police d'un paragraphe en fonction de la
              largeur de l'écran :
            </Text>

            <CodeBlock
              lineNB={false}
              language={'css'}
              code={`p { font-size: clamp(14px, 2vw, 20px); }`}
            />
            <Text>
              Dans cet exemple, la taille de la police du paragraphe (élément
              `p`) sera de 14 pixels au minimum, de 20 pixels au maximum, et
              elle s'ajustera de manière optimale en fonction de la largeur de
              l'écran, avec une taille correspondant à 2% de cette largeur
              (2vw).
            </Text>
            <Heading as="h3">Conclusion</Heading>
            <Text>
              La fonction CSS clamp() est un outil puissant et flexible pour
              créer des designs responsives et fluides. Elle permet d'ajuster la
              taille des éléments, comme la taille de la police, en fonction des
              dimensions de l'écran ou de la fenêtre, tout en définissant des
              limites minimales et maximales pour garantir une expérience
              utilisateur cohérente et lisible. N'hésitez pas à expérimenter
              avec la fonction clamp() et à l'intégrer dans vos projets pour
              créer des designs plus adaptatifs et maintenables. Elle peut être
              utilisée non seulement pour ajuster la taille de la police, mais
              également pour d'autres propriétés CSS, telles que la largeur, la
              hauteur, et les marges, offrant ainsi une solution complète pour
              créer des designs responsives et fluides.
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
              FAQ - Questions fréquentes sur la fonction css clamp() et le
              générateur de CSS
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
    title: "Qu'est-ce que la fonction CSS clamp() ?",
    text: "La fonction CSS clamp() est une fonction permettant d'ajuster une valeur CSS entre une limite minimale et une limite maximale, en fonction d'une valeur préférée. Elle est particulièrement utile pour créer des designs responsives et fluides en ajustant les propriétés telles que la taille de la police, la largeur, la hauteur et les marges.",
  },
  {
    id: 2,
    title:
      'Pourquoi la fonction clamp() est-elle pratique pour le responsive design ?',
    text: "La fonction clamp() est pratique pour le responsive design car elle permet d'ajuster automatiquement les propriétés CSS en fonction des dimensions de l'écran ou de la fenêtre, tout en définissant des limites minimales et maximales pour garantir une expérience utilisateur cohérente et lisible.",
  },
  {
    id: 3,
    title: 'Comment fonctionne le générateur gratuit en ligne de clamp() ?',
    text: 'Le générateur de clamp() en ligne te permet de personnaliser les éléments clés de la fonction, tels que les limites minimale et maximale et la valeur préférée, puis de générer automatiquement le code CSS correspondant. Il suffit de sélectionner les options souhaitées et de copier-coller le code dans ton projet.',
  },
  {
    id: 4,
    title:
      'Est-ce que la fonction CSS clamp() est compatible avec tous les navigateurs ?',
    text: "La fonction CSS clamp() est compatible avec la plupart des navigateurs modernes, y compris Chrome, Firefox, Safari et Edge. Cependant, elle n'est pas prise en charge par Internet Explorer. Pour assurer une expérience utilisateur cohérente sur les anciens navigateurs, il est recommandé d'utiliser des solutions de repli ou des techniques alternatives.",
  },
  {
    id: 5,
    title:
      'Comment puis-je intégrer la fonction CSS clamp() dans mon propre projet ?',
    text: "Il te suffit d'utiliser le générateur en ligne pour créer le code CSS correspondant à l'utilisation de la fonction clamp() souhaitée, puis d'intégrer ce code dans ton projet. Tu peux également personnaliser les valeurs et les propriétés pour les adapter à tes besoins.",
  },
  {
    id: 6,
    title: 'Le générateur en ligne de clamp() est-il gratuit ?',
    text: "Oui, le générateur de clamp() en ligne est totalement gratuit et accessible à tous. Tu peux l'utiliser autant de fois que tu le souhaites pour créer des designs responsives et fluides pour tes projets personnels ou professionnels.",
  },
]
