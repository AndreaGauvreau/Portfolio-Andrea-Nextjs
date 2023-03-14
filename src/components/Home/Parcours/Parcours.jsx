import {Flex, Heading, Text} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import ButtonDD from '@/components/ui/ButtonDD/ButtonDD'
import {Poppins} from 'next/font/google'

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '900'],
})
export default function Parcours() {
  return (
    <Flex
      minH="100vh"
      w="100%"
      m={0}
      p={{base: '20px', md: '10px', lg: '0px'}}
      flexDirection={{base: 'column', md: 'column', lg: 'row'}}
      justifyContent={'center'}
      alignItems={'center'}
      bgSize="cover"
      boxSizing="border-box"
      position={'relative'}
      bgColor={{base: '#00000000', md: '#00000000', lg: '#19191D'}}
    >
      <Flex
        w={{base: '100%', md: '100%', lg: '1024px'}}
        flexDirection={{base: 'column', md: 'column', lg: 'row'}}
        bgColor={{base: '#19191D', md: '#19191D', lg: '#ffffff00'}}
        borderRadius={20}
        p={{base: 5, md: 5, lg: 0}}
      >
        <Flex
          w={{base: '100%', md: '100%', lg: '50%'}}
          alignItems={'center'}
          justifyContent={'center'}
          h={{base: '100%', md: '100%', lg: '100vh'}}
        >
          <Image
            src="/images/identite/andrea-galaxy.png"
            alt="andrea-gauvreau-developpeur-front-end"
            colour
            quality={100}
            loading="lazy"
            width={420}
            height={200}
          />
        </Flex>
        <Flex
          w={{base: '100%', md: '100%', lg: '45%'}}
          flexDirection={'column'}
          gap={5}
          pb={{base: 5, md: 0}}
          justifyContent={'center'}
          alignItems={{base: 'center', md: 'center', lg: 'flex-start'}}
        >
          <Heading
            color={'white'}
            fontSize={{base: '27px', md: '30px', lg: '40px'}}
            fontWeight={400}
          >
            Un Parcours Atypique
          </Heading>
          <Text
            fontSize={{base: '13px', md: '15px', lg: '18px'}}
            fontWeight={'600'}
            lineHeight={{base: '13px', md: '15px', lg: '18px'}}
            className={fontPoppins.className}
            textAlign={'center'}
            color={'white'}
            zIndex={10}
            mt={3}
          >
            Suis-je suis la 893 000 ème personnes à dire ca ?
          </Text>
          <Text
            color={'white'}
            mb={{base: 5, md: 5, lg: 10}}
            mt={{base: 5, md: 5, lg: 10}}
            fontSize={{base: '13px', md: '15px'}}
          >
            Tombé par hasard dans le monde du code, c'est mon désir d'améliorer
            et de contribuer à un monde du web meilleur que je décide de me
            lancer dans l'aventure du code! <br></br>
            <br></br>Petite explication. 🤓
            <br></br>
            <br></br> Issu d'une école de commerce, je me suis lancé avec trois
            amis dans un projet ambitieux... Nous souhaitions agir dans
            l'univers de l'edtech, mais notre manque de compétences dans le
            domaine du web m'a poussé à réagir et à prendre rapidement une
            décision... Celle de pousser la porte du monde du dev. 🤯 <br></br>
            <br></br>
            Depuis, j'allie mes compétences en marketing, mon sens artistique et
            mon savoir-faire de développeur front-end pour proposer le meilleur
            mélange possible pour vos projets.
          </Text>
          <ButtonDD
            text={'contactez-moi'}
            colorThemeDD={'green'}
            link={'https://calendly.com/andrea-formizi/30min'}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
