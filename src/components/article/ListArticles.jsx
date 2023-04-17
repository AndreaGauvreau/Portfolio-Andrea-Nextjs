import {Box, Heading, Text, Stack, Flex} from '@chakra-ui/react'
import {colorsDD} from '../ui/colors/colors'

import Card from '@/components/ui/Card/Card.jsx'
import CardSkeleton from '@/components/ui/Card/Card.jsx'
import React, {useState, useEffect, Suspense} from 'react'
import {useAllDocuments} from '@/commons/hook/post'
import {getAllDocuments} from '@/commons/api/post'

export default function ListArticles() {
  const {isLoading, error, data: articles} = useAllDocuments('article')
  console.log('data', articles)
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
            Boostez vos compétences de développeur
            <br />
            <Text as={'span'} color={colorsDD.green} fontSize={'xl'}>
              blog fait par un développeur pour les développeurs
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
            {articles ? (
              <Suspense fallback={<LoadingListTools />}>
                {articles.map((e, index) => (
                  <Card
                    key={index}
                    image={e?.imagePath}
                    titre={e?.titre}
                    lien={`/articles/${e?.titre}`}
                  />
                ))}
              </Suspense>
            ) : (
              <LoadingListTools />
            )}
          </Flex>
          <Text>ok</Text>
        </Stack>
      </Flex>
    </>
  )
}

const LoadingListTools = () => (
  <>
    {[1, 2].map((e, index) => (
      <CardSkeleton key={index} />
    ))}
  </>
)
