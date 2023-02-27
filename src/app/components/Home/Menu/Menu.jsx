import {Box, Flex, IconButton, Image} from '@chakra-ui/react'
import React, {useState} from 'react'
import {colorsDD} from '../../ui/colors/colors'
import {DribbleIcon} from '../../ui/icones/dribbleIcon/dribbleicon'
import {GithIcon} from '../../ui/icones/githubicon/githubIcon'
import {IconeAndrea} from '../../ui/icones/iconeandrea/iconeandrea'
import {LinkdinIcon} from '../../ui/icones/linkedin/linkedinIcon'
import {LogoAndrea} from '../../ui/icones/logoandrea/logoandrea'

export default function Menu({color1, color2, blur}) {
  const [githubColor, setGithubColor] = useState('#ffffff50')
  const [linkedinColor, setLinkdedinColor] = useState('#ffffff50')
  const [dribbleColor, setDribbleColor] = useState('#ffffff50')
  return (
    <Flex
      pl={{base: 10, md: 5, lg: 10}}
      pr={{base: 10, md: 5, lg: 10}}
      pt={{base: 4, md: 4, lg: 4}}
      pb={{base: 4, md: 5, lg: 5}}
      justifyContent={'space-between'}
      position={'fixed'}
      w={'100vw'}
      zIndex={20}
      bg={'#ffffff00'}
      backdropFilter={{
        base: `blur(${blur}px)`,
        md: 'blur(0px)',
        lg: 'blur(0px)',
      }}
    >
      <Box w={{base: '100px', md: '90px', lg: '150px'}}>
        <LogoAndrea
          width={'100%'}
          color1={color1 ? color1 : colorsDD.pink}
          color2={color2 ? color2 : colorsDD.green}
          color={'white'}
        />
      </Box>
      <Flex gap={{base: 2, md: 5, lg: 10}} alignItems={'center'}>
        <IconButton
          aria-label="github link"
          variant={'ghost'}
          bgColor={'#ffffff00'}
          _hover={{bgColor: '#ffffff20'}}
          boxSize={{base: 8, md: 10, lg: 12}}
          onMouseEnter={() => setGithubColor('white')}
          onMouseLeave={() => setGithubColor('#ffffff50')}
          icon={
            <GithIcon
              color={githubColor}
              color1={color1 ? color1 : colorsDD.pink}
              color2={color2 ? color2 : colorsDD.green}
              width={'100%'}
            />
          }
        />
        <IconButton
          aria-label="github link"
          variant={'ghost'}
          boxSize={{base: 8, md: 10, lg: 12}}
          bgColor={'#ffffff00'}
          _hover={{bgColor: '#ffffff20'}}
          onMouseEnter={() => setLinkdedinColor('white')}
          onMouseLeave={() => setLinkdedinColor('#ffffff50')}
          icon={
            <LinkdinIcon
              color={linkedinColor}
              color1={color1 ? color1 : colorsDD.pink}
              color2={color2 ? color2 : colorsDD.green}
              width={'100%'}
            />
          }
        />
        <IconButton
          aria-label="github link"
          variant={'ghost'}
          boxSize={{base: 8, md: 10, lg: 12}}
          bgColor={'#ffffff00'}
          _hover={{bgColor: '#ffffff20'}}
          onMouseEnter={() => setDribbleColor('white')}
          onMouseLeave={() => setDribbleColor('#ffffff50')}
          icon={
            <DribbleIcon
              color={dribbleColor}
              color1={color1 ? color1 : colorsDD.pink}
              color2={color2 ? color2 : colorsDD.green}
              width={'100%'}
            />
          }
        />
      </Flex>
    </Flex>
  )
}
