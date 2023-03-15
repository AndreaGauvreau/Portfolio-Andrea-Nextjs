import {Box, Heading, Text, Stack, Flex, SimpleGrid} from '@chakra-ui/react'
import {colorsDD} from '../ui/colors/colors'

import CardTools from './CardTools'
import CardToolsSkeleton from './CardToolsSkeleton'
import React, {useState, useEffect, Suspense} from 'react'

export default function PageTools() {
  const [listTools, setListTools] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const module = await import('./listTools.js')
        setListTools(module.listTools)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <Flex
        w="100%"
        m="0"
        p={{base: '20px', md: '10px', lg: '0px'}}
        flexDirection={'column'}
        justifyContent="flex-start"
        alignItems={'center'}
        bgImage={'/images/path-background.svg'}
        bgSize="cover"
        boxSizing="border-box"
        position="relative"
      >
        <Stack
          id={'maincover'}
          as={Box}
          textAlign={'center'}
          spacing={{base: 8, md: 14}}
          py={{base: 20, md: 36}}
        >
          <Heading
            fontWeight={600}
            fontSize={{base: '2xl', sm: '4xl', md: '6xl'}}
            lineHeight={'110%'}
            as={'h1'}
            zIndex={1}
          >
            Outils Css
            <br />
            <Text as={'span'} color={colorsDD.green}>
              Pour les développeurs
            </Text>
          </Heading>

          <Flex
            flexDirection="row"
            flexWrap={{base: 'nowrap', lg: 'wrap'}}
            overflowX={{base: 'scroll', lg: 'none'}}
            overflowY={{base: 'hidden', lg: 'scroll'}}
            maxW={{base: '100vw', lg: '992px'}}
            pb="5"
            gap={10}
            paddingLeft={{base: '70px', lg: '0px'}}
            justifyContent={{base: 'flex-start', lg: 'center'}}
          >
            {listTools ? (
              <Suspense fallback={<LoadingListTools />}>
                {listTools.map((e, index) => (
                  <CardTools key={index} data={e} />
                ))}
              </Suspense>
            ) : (
              <LoadingListTools />
            )}
          </Flex>
        </Stack>
      </Flex>
    </>
  )
}

const LoadingListTools = () => (
  <>
    {[1, 2, 3].map((e, index) => (
      <CardToolsSkeleton key={index} />
    ))}
  </>
)
