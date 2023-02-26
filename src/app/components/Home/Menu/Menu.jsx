'use client'
import React, {useState} from 'react'
import Flex from '../../../../components/ui/Flex/Flex'
import Box from '../../../../components/ui/Box/Box'
import {colorsDD} from '../../../../components/ui/colors/colors'
import {DribbleIcon} from '../../../../components/ui/icones/dribbleIcon/dribbleicon'
import {GithIcon} from '../../../../components/ui/icones/githubicon/githubIcon'
import {LinkdinIcon} from '../../../../components/ui/icones/linkedin/linkedinIcon'
import {LogoAndrea} from '../../../../components/ui/icones/logoandrea/logoandrea'

export default function Menu({color1, color2, blur}) {
  const [githubColor, setGithubColor] = useState('#ffffff50')
  const [linkedinColor, setLinkdedinColor] = useState('#ffffff50')
  const [dribbleColor, setDribbleColor] = useState('#ffffff50')
  return (
    <Flex
      jC={'space-between'}
      aI={'center'}
      m={'0px 20px'}
      w={{
        Sm: '400px',
        Tab: '100px',
        Or: '1200px',
      }}
      h={'100px'}
      bgColor={'red'}
    >
      <Box w={'150px'}>
        <LogoAndrea
          width={'100%'}
          color1={color1 ? color1 : colorsDD.pink}
          color2={color2 ? color2 : colorsDD.green}
          color={'white'}
        />
      </Box>
      <Flex gap={'10px'}>
        <Box
          bgColor={'#ffffff00'}
          _hover={{bgColor: '#ffffff50'}}
          onMouseEnter={() => setGithubColor('white')}
          onMouseLeave={() => setGithubColor('#ffffff50')}
        >
          <GithIcon
            color={githubColor}
            color1={color1 ? color1 : colorsDD.pink}
            color2={color2 ? color2 : colorsDD.green}
            width={'100px'}
          />
        </Box>
        <Box
          bgColor={'#ffffff50'}
          onMouseEnter={() => setLinkdedinColor('white')}
          onMouseLeave={() => setLinkdedinColor('#ffffff50')}
        >
          <LinkdinIcon
            color={linkedinColor}
            color1={color1 ? color1 : colorsDD.pink}
            color2={color2 ? color2 : colorsDD.green}
            width={'100px'}
          />
        </Box>
        <Box
          bgColor={'#ffffff50'}
          onMouseEnter={() => setDribbleColor('white')}
          onMouseLeave={() => setDribbleColor('#ffffff50')}
        >
          <DribbleIcon
            color={dribbleColor}
            color1={color1 ? color1 : colorsDD.pink}
            color2={color2 ? color2 : colorsDD.green}
            width={'100px'}
          />
        </Box>
      </Flex>
    </Flex>
  )
}
