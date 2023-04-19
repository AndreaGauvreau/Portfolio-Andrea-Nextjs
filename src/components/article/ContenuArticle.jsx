import {Box, Flex, Heading, Icon, Text} from '@chakra-ui/react'
import React from 'react'
import {CodeBlock} from '@/components/ui/CodeBlock/CodeBlock.jsx'
import {FadeInTop} from '@/helpers/FaedinTop.jsx'
import {colorsDD} from '../ui/colors/colors'
import Image from 'next/image'
import {ChevronLeftIcon} from '@chakra-ui/icons'
import Link from 'next/link'
export default function ContenuArticle({elements, post}) {
  return (
    <Flex direction="column" gap={10}>
      <Flex align="center" maxW={'1000px'} w={'100%'}>
        <Link href={'/articles'}>
          <Icon
            as={ChevronLeftIcon}
            mr={4}
            cursor="pointer"
            boxSize={10}
            transition={'0.3s ease'}
            _hover={{transform: 'translateX(-5px)'}}
          />
        </Link>
        <Heading as={'h1'} fontSize={{base: 'xl', sm: '2xl', lg: '3xl'}}>
          {post?.titre}
        </Heading>
      </Flex>
      {elements.map((e, i) => (
        <Flex key={i} order={i} justifyContent={'center'}>
          {e.type === 'soustitres' && e.element !== 'null' && (
            <Heading fontSize={{base: 'lg', sm: 'md', lg: 'xl'}}>
              {e.element}
            </Heading>
          )}
          {e.type === 'paragraphe' && (
            <>
              <Text fontSize={'lg'}>{e.element}</Text>
              <br />
            </>
          )}
          {e.type === 'code' && e.element !== 'null' && (
            <CodeBlock code={e.element} />
          )}
          {e.type === 'image' && e.element !== 'null' && (
            <>
              <FadeInTop>
                <Box
                  w={{base: '90vw', md: '500px', lg: '700px'}}
                  h={{base: '350px', md: '350px', lg: '400px'}}
                  position={'relative'}
                  borderRadius={'10px'}
                  overflow={'hidden'}
                >
                  <Image
                    src={e.element.src}
                    fill
                    objectFit="cover"
                    alt={`image de ${e.element.alt}`}
                  />
                </Box>
              </FadeInTop>
            </>
          )}
        </Flex>
      ))}
    </Flex>
  )
}
