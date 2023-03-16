'use client'
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import Cursor from '@/components/ui/cursor/Cursor.jsx'
import Menu from '@/components/ui/Menu/Menu'
import {colorsDD} from '@/components/ui/colors/colors'
import Gradient from '@/components/ui/GradientBgElems/Gradient'
import ButtonDD from '@/components/ui/ButtonDD/ButtonDD'
import '@/components/projects/gradient.css'
import {coopacityColor} from './componentState'
import Link from 'next/link'
import {ArrowBackIcon, ArrowDownIcon} from '@chakra-ui/icons'

export default function SkeletonProjetPage() {
  const color1 = coopacityColor(colorsDD.green)
  return (
    <>
      <Box
        id="backgroundGradient"
        w={'100%'}
        padding={2}
        background={`linear-gradient(-45deg, ${colorsDD.green},${colorsDD.pink})`}
        maxH={{base: '100svh', md: '100vh'}}
      >
        <Flex>
          <Cursor />
          <Menu blur={0} />
          <Flex
            id={'scrollsectionskeleton'}
            bg={colorsDD.bgcolor}
            m={0}
            w={'100%'}
            flexDirection={'column'}
            alignItems={'center'}
            maxH={{base: 'calc(100svh - 15px)', md: 'calc(100vh - 15px)'}}
            borderRadius={20}
            overflow={'scroll'}
            overflowX={'hidden'}
            gap={5}
          >
            <Flex
              minH={{base: '100svh', md: '100vh'}}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={5}
              position="relative"
            >
              <Flex
                h={{base: '50vh', md: '50vh', lg: '70vh'}}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={{
                  base: 'flex-start',
                  md: 'flex-start',
                  lg: 'center',
                }}
                gap={10}
                w={{base: '90vw', md: '90vw', lg: '100%'}}
              >
                <ButtonPageElement />
                <SkeletonText
                  noOfLines={1}
                  width={'220px'}
                  skeletonHeight="8"
                />

                <SkeletonText
                  noOfLines={2}
                  width={'300px'}
                  skeletonHeight="4"
                />
              </Flex>
              <ImageProjectSkeleton />
            </Flex>

            <Flex
              id={'stack'}
              minH={{base: 'auto', md: '100px', lg: '220px'}}
              justifyContent="flex-end"
              flexDirection={'column'}
              w={{base: '90%', md: '90%', lg: '500px'}}
              gap={3}
              alignItems="center"
            >
              <Heading p={2} color={'white'}>
                Stack
              </Heading>
              <Flex flexWrap={'wrap'} gap={2} justifyContent="center">
                <Skeleton w={120} h={30} />
                <Skeleton w={120} h={30} />
                <Skeleton w={120} h={30} />
              </Flex>
            </Flex>
            <Flex
              id={'details'}
              flexWrap={'wrap'}
              w={{base: '90%', md: '90%', lg: '500px'}}
              position="relative"
              gap={2}
              alignContent="flex-start"
              justifyContent={'center'}
            >
              <Heading p={2} color={'white'} w={'100%'} textAlign="center">
                Détails
              </Heading>
              <Gradient colorG={color1} versionG={1} />

              <Flex
                w={'calc(50% - 5px)'}
                bg={`linear-gradient(290deg,${colorsDD.bgcolor},${color1})`}
                minH={'200px'}
                p={5}
                borderRadius={10}
                alignItems={'flex-start'}
                flexDirection={'column'}
                gap={5}
                border={`0.5px solid ${colorsDD.green}`}
              >
                <Badge
                  bg={color1}
                  color={colorsDD.green}
                  p={1}
                  border={`0px solid ${color1}`}
                  borderRadius={5}
                >
                  avis client
                </Badge>
                <SkeletonText noOfLines={2} width={'full'} skeletonHeight="4" />
                <Flex>
                  <Box color={colorsDD.green20}>
                    <Text fontSize="sm">Project Owner</Text>
                    <SkeletonText
                      mt={4}
                      noOfLines={1}
                      width={'full'}
                      skeletonHeight="4"
                    />
                  </Box>
                </Flex>
              </Flex>
              <Flex
                w={'calc(50% - 5px)'}
                bg={colorsDD.green20}
                minH={'200px'}
                p={5}
                borderRadius={10}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <SkeletonCircle width={'70%'} height={'80%'} />
              </Flex>
              <Flex
                w={'100%'}
                bg={colorsDD.green20}
                minH={'200px'}
                p={5}
                borderRadius={10}
              >
                <SkeletonText
                  mt={4}
                  noOfLines={6}
                  width={'full'}
                  skeletonHeight="4"
                />
              </Flex>
            </Flex>
            <Flex
              id={'mission'}
              flexDirection={'column'}
              gap={3}
              alignItems="center"
            >
              <Heading p={2} color={'white'}>
                Missions
              </Heading>
              <SkeletonText
                mt={8}
                noOfLines={8}
                width={{base: '300px', lg: '500px'}}
                skeletonHeight="8"
              />
            </Flex>
            {/* 
            {datas?.retourVideo ? (
              <Flex
                id={'retourclient'}
                flexDirection={'column'}
                gap={3}
                alignItems="center"
              >
                <Heading p={2} color={'white'}>
                  Retour Client
                </Heading>
                <Box
                  width="270px"
                  height="480px"
                  m={0}
                  p={0}
                  overflow="hidden"
                  borderRadius={20}
                >
                  <ReactPlayer
                    url={datas?.retourVideo}
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Flex>
            ) : (
              ''
            )}*/}
            <Box mt={20} mb={20}>
              <ButtonDD
                text={'Contactez-moi 🚀'}
                colorButton={colorsDD.green}
                colorThemeDD={'custom'}
                link={'https://calendly.com/andrea-formizi/30min'}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export function ImageProjectSkeleton() {
  const widthImage = 100
  const widthImageBase = 60
  const heightImage = 80
  const heightImageBase = 40
  const heightImageMd = 50

  return (
    <>
      <Flex justifyContent={'center'} alignItems={'center'} w={'100vw'}>
        <Flex
          w={{base: '90vw', md: '90vw', lg: `1024px`}}
          position="relative"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Skeleton
            w={{
              base: `${widthImageBase}%`,
              md: `${widthImageBase}%`,
              lg: `${widthImage}%`,
            }}
            h={{
              lg: `${heightImage}vh`,
              base: `${heightImageBase}vh`,
              md: `${heightImageMd}vh`,
            }}
            borderRadius={20}
            position="absolute"
            transform={'translate(-50%,-50%'}
            top={'50%'}
            left={'50%'}
            filter="blur(10px)"
            p={10}
            zIndex={1}
          ></Skeleton>
        </Flex>
      </Flex>
    </>
  )
}
function ButtonPageElement() {
  return (
    <Flex gap={2}>
      <Link href={'/'}>
        <Button
          bgColor={colorsDD.pink}
          color={'white'}
          leftIcon={<ArrowBackIcon />}
          _hover={{bg: colorsDD.green, color: colorsDD.bgcolor}}
          _active={{
            transform: 'scale(0.95)',
          }}
        >
          retour
        </Button>
      </Link>

      <Button
        bgColor={colorsDD.pink}
        color={'white'}
        leftIcon={<ArrowDownIcon />}
        className={'badge'}
        _hover={{bg: colorsDD.green, color: colorsDD.bgcolor}}
        _active={{
          transform: 'scale(0.95)',
        }}
      >
        scroll pour découvrir
      </Button>
    </Flex>
  )
}
