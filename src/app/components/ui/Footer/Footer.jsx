'use client'
import {Box, Flex, IconButton} from '@chakra-ui/react'
import Link from 'next/link'
import React, {useState} from 'react'
import {colorsDD} from '../colors/colors'
import {MaltIcon} from '../icones/malt/malt'
import {GithIcon} from '../icones/githubicon/githubIcon'
import {IconeAndrea} from '../icones/iconeandrea/iconeandrea'
import {LinkdinIcon} from '../icones/linkedin/linkedinIcon'
import {LogoAndrea} from '../icones/logoandrea/logoandrea'

export default function Footer({color1, color2, blur}) {
  const currentYear = new Date().getFullYear()

  const wait1 = 1.6
  const wait2 = 1.6
  return (
    <Flex
      pl={{base: 10, md: 5, lg: 10}}
      pr={{base: 10, md: 5, lg: 10}}
      pt={{base: 4, md: 4, lg: 4}}
      pb={{base: 4, md: 5, lg: 5}}
      justifyContent={'space-between'}
      position={'absolute'}
      w={'100vw'}
      zIndex={20}
      bg={colorsDD.bgcolor}
      backdropFilter={{
        base: `blur(${blur}px)`,
        md: 'blur(0px)',
        lg: 'blur(0px)',
      }}
    >
      <Box w={{base: '100px', md: '90px', lg: '150px'}}>
        <Link href="/">
          <IconeAndrea
            width={'70px'}
            color1={color1 ? color1 : colorsDD.pink}
            color2={color2 ? color2 : colorsDD.green}
            wait={wait2}
            color={'white'}
          />
        </Link>
      </Box>
      <Flex gap={{base: 2, md: 5, lg: 10}} alignItems={'center'}>
        <Box fontSize={'sm'} color={'white'}>
          © {currentYear} Andrea Gauvreau
        </Box>
      </Flex>
    </Flex>
  )
}
