import {Flex, Heading} from '@chakra-ui/react'
import React, {useEffect, useRef} from 'react'
import {useLocation} from 'react-router-dom'
import ButtonDD from '../../ui/ButtonDD/ButtonDD'
import {colorsDD} from '../../ui/colors/colors'
import Gradient from '../../ui/GradientBgElems/Gradient'
import CardMap from './floatingCards/CardsContent'

export default function Project() {
  const location = useLocation()
  const projetsRef = useRef(null)

  useEffect(() => {
    if (location.hash && projetsRef.current) {
      projetsRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }, [location.hash])
  return (
    <Flex
      minH="100vh"
      w="100%"
      m="0"
      p={{base: '20px', md: '10px', lg: '0px'}}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      bgSize="cover"
      boxSizing="border-box"
      position={'relative'}
      id={'projets'}
      className={'projets'}
      ref={projetsRef}
      bg={'linear-gradient(180deg, #ffffff05, #ffffff00)'}
    >
      <Flex
        w={{base: '100%', md: '100%', lg: '1024px'}}
        flexDirection={{base: 'column', md: 'column', lg: 'column'}}
        gap={{base: 5, md: 0, lg: 0}}
      >
        <Gradient colorG={colorsDD.pink} versionG={1} />
        <Heading
          variant={'dew'}
          zIndex={10}
          color={'white'}
          textAlign="center"
          fontSize={{base: '27px', md: '30px', lg: '40px'}}
        >
          Projets après Projets
        </Heading>
        <Heading
          variant={'dd'}
          fontSize={{base: '13px', md: '15px', lg: '18px'}}
          textAlign={'center'}
          color={'white'}
          zIndex={10}
        >
          Que de beaux projets ! <br></br>
          Peut-être serez-vous le prochain ?
        </Heading>
        <CardMap />
        <Flex w={'100%'} alignItems="center" justifyContent="center">
          <ButtonDD
            text={'Tous les projets'}
            link="/projets"
            colorThemeDD={'pink'}
            indexB={10}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
