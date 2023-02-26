import {Flex, Heading, Image, Text} from '@chakra-ui/react'
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
      bgColor={{base: '#ffffff00', md: '#ffffff00', lg: '#ffffff10'}}
    >
      <Flex
        w={{base: '100%', md: '100%', lg: '1024px'}}
        flexDirection={{base: 'column', md: 'column', lg: 'row'}}
        bgColor={{base: '#ffffff10', md: '#ffffff10', lg: '#ffffff00'}}
        borderRadius={20}
        p={{base: 5, md: 5, lg: 0}}
      >
        <Flex
          w={{base: '100%', md: '100%', lg: '45%'}}
          alignItems={'flex-end'}
          justifyContent={'center'}
          h={{base: '100%', md: '100%', lg: '100vh'}}
        >
          <Image
            src="./images/identite/andrea-lightup.png"
            w={{base: '60%', md: '60%', lg: '100%'}}
            zIndex={1}
          />
        </Flex>
        <Flex
          w={{base: '100%', md: '100%', lg: '45%'}}
          flexDirection={'column'}
          gap={5}
          justifyContent={'center'}
          alignItems={{base: 'center', md: 'center', lg: 'flex-start'}}
        >
          <Heading
            variant={'dew'}
            color={'white'}
            fontSize={{base: '27px', md: '30px', lg: '40px'}}
          >
            Un Parcours Atypique
          </Heading>
          <Heading
            variant={'dd'}
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
