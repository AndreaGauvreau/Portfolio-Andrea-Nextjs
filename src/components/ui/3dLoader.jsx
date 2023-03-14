'use client'
import {Skeleton, Text} from '@chakra-ui/react'
import React from 'react'
import {colorsDD} from './colors/colors'

export default function Loader({progress}) {
  const progressbar = Math.round(progress)
  return (
    <>
      <Skeleton
        w="200px"
        h="300px"
        tartColor={colorsDD.pink}
        endColor={colorsDD.green}
        position={'relative'}
      />
      <Text
        color={'white'}
        position={'absolute'}
        left="50%"
        top="50%"
        transform={'translate(-50%,-50%'}
      >
        {progressbar} %
      </Text>
    </>
  )
}
