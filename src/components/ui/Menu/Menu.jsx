'use client'
import {Box, Flex, IconButton} from '@chakra-ui/react'
import Link from 'next/link'
import React, {useState} from 'react'
import {colorsDD} from '../colors/colors'
import {YoutubeIcon} from '../icones/youtubeIcon/YoutubeIcon'
import {GithIcon} from '../icones/githubicon/githubIcon'
import {IconeAndrea} from '../icones/iconeandrea/iconeandrea'
import {LinkdinIcon} from '../icones/linkedin/linkedinIcon'
import {LogoAndrea} from '../icones/logoandrea/logoandrea'
import MiniMenu from './MiniMenu'

export default function Menu({color1, color2, blur, isMain, linkList}) {
  const [githubColor, setGithubColor] = useState('#ffffff50')
  const [linkedinColor, setLinkdedinColor] = useState('#ffffff50')
  const [dribbleColor, setDribbleColor] = useState('#ffffff50')
  const wait1 = 1.6
  const wait2 = 1.6
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
        <Link href="/">
          <LogoAndrea
            width={'100%'}
            color1={color1 ? color1 : colorsDD.pink}
            color2={color2 ? color2 : colorsDD.green}
            wait={wait2}
            color={'white'}
          />
        </Link>
      </Box>
      <Flex gap={{base: 2, md: 5, lg: 10}} alignItems={'center'}>
        <Link href={'https://github.com/AndreaGauvreau'} target="_blank">
          <IconButton
            aria-label="github link"
            variant={'ghost'}
            bgColor={'#ffffff00'}
            _hover={{bgColor: '#ffffff20'}}
            boxSize={{base: 10, md: 12, lg: 14}}
            p={1}
            onMouseEnter={() => setGithubColor('white')}
            onMouseLeave={() => setGithubColor('#ffffff50')}
            icon={
              <GithIcon
                color={githubColor}
                color1={color1 ? color1 : colorsDD.pink}
                color2={color2 ? color2 : colorsDD.green}
                wait={wait1}
                width={'100%'}
              />
            }
          />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/andr%C3%A9a-gauvreau-8564b3170/'}
          target="_blank"
        >
          <IconButton
            aria-label="github link"
            variant={'ghost'}
            boxSize={{base: 10, md: 12, lg: 14}}
            p={1}
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
                wait={wait1}
              />
            }
          />
        </Link>
        <Link
          href={
            'https://www.youtube.com/watch?v=Zh06rzhTWeA&t=569s&ab_channel=Andreagv'
          }
          target="_blank"
        >
          <IconButton
            aria-label="github link"
            variant={'ghost'}
            boxSize={{base: 10, md: 12, lg: 14}}
            p={1}
            bgColor={'#ffffff00'}
            _hover={{bgColor: '#ffffff20'}}
            onMouseEnter={() => setDribbleColor('white')}
            onMouseLeave={() => setDribbleColor('#ffffff50')}
            icon={
              <YoutubeIcon
                color={dribbleColor}
                color1={color1 ? color1 : colorsDD.pink}
                color2={color2 ? color2 : colorsDD.green}
                width={'100%'}
                wait={wait1}
              />
            }
          />
        </Link>
        <MiniMenu />
      </Flex>
    </Flex>
  )
}
