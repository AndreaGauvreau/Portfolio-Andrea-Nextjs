import {Flex, Heading, Text} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import ButtonDD from '../../ui/ButtonDD/ButtonDD'

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
            src="/images/identite/dd-assis.jpg"
            alt="andrea-gauvreau-developpeur-front-end"
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
            fontFamily={'Bely Display'}
            fontWeight={400}
          >
            Un Parcours Atypique
          </Heading>
          <Heading
            fontSize={{base: '13px', md: '15px', lg: '18px'}}
            color={'white'}
          >
            Suis-je suis la 893 000 ème personnes à dire ca ?
          </Heading>
          <Text
            color={'white'}
            mb={{base: 5, md: 5, lg: 10}}
            mt={{base: 5, md: 5, lg: 10}}
          >
            Tombé dans le monde du code par hasard, c’est ma volonté à améliorer
            et contribuer à un monde du web meilleur qui m’a poussé à devenir
            développeur.<br></br>
            <br></br> Tout droit sortit d’école de commerce, je me lance avec 3
            amis dans un projet fou. Alors que nous voulions agir dans l’univers
            de l’edtech, notre manque de compétences dans le web m’a poussé à
            agir et apprendre rapidement à developper une plateforme comme nous
            l’imaginions.<br></br> Depuis j’allie compétences marketing,
            artistique et un savoir faire de développeur front-end pour proposer
            le meilleur mélange possible pour vos projets.
          </Text>
          <ButtonDD text={'contactez-moi'} link={'#'} colorThemeDD={'green'} />
        </Flex>
      </Flex>
    </Flex>
  )
}
