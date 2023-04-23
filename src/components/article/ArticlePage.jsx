'use client'
import {
  Box,
  Button,
  Container,
  createIcon,
  Flex,
  Stack,
  Tag,
} from '@chakra-ui/react'
import Image from 'next/image'

import {FadeInTop} from '@/helpers/FaedinTop.jsx'
import {colorsDD} from '../ui/colors/colors'

export default function ArticlePage({post}) {
  console.log(post, 'post')
  return (
    <>
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{base: 8, md: 10}}
          pb={10}
          pt={'120px'}
          direction={{base: 'column', md: 'row'}}
        >
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
            flexDirection="column"
            gap={10}
          >
            <Box
              position={'relative'}
              height={{base: '30vh', md: '60vh'}}
              rounded={'2xl'}
              boxShadow={'2xl'}
              maxW={'1000px'}
              w={'100%'}
              id={'boxconicanim'}
              p={'2px'}
            >
              <Box
                position={'relative'}
                w={'100%'}
                h={'100%'}
                rounded={'2xl'}
                overflow={'hidden'}
                zIndex={2}
              >
                <Image
                  alt={'Hero Image'}
                  fill
                  src={post?.imagePath}
                  objectFit="cover"
                  priority
                />
              </Box>
              <Box
                position={'absolute'}
                w={'calc(100% + 20px)'}
                h={'calc(100% + 20px)'}
                rounded={'2xl'}
                id={'boxconicanim'}
                top={'-10px'}
                left={'-10px'}
                zIndex={0}
                filter={'blur(50px)'}
                opacity={0.1}
              />
              <Box
                position={'absolute'}
                w={'calc(100% + 20px)'}
                h={'calc(100% + 20px)'}
                rounded={'2xl'}
                id={'boxconicanim'}
                top={'-10px'}
                left={'-10px'}
                zIndex={3}
                filter={'blur(50px)'}
                mixBlendMode={'plus-lighter'}
                opacity={0.3}
              />
              <Box
                position={'absolute'}
                w={'calc(100% + 20px)'}
                h={'calc(100% + 20px)'}
                rounded={'2xl'}
                id={'boxconicanim'}
                top={'-10px'}
                left={'-10px'}
                zIndex={0}
                filter={'blur(10px)'}
                opacity={0.1}
              />
            </Box>
            <Stack
              spacing={{base: 4, sm: 6}}
              direction={{base: 'column', md: 'row'}}
            >
              {post?.audio ? (
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}
                >
                  lecture audio de l'article
                </Button>
              ) : (
                ''
              )}
              <Flex gap={2} flexWrap="wrap">
                {post?.tags?.map((e, index) => {
                  return (
                    <FadeInTop delay={0 + index / 6}>
                      <Tag
                        variant="subtle"
                        bg={colorsDD.green20}
                        color={colorsDD.green}
                        borderRadius={'full'}
                        size={'md'}
                        px={5}
                        minH={10}
                        transition={'0.3s'}
                        _hover={{opacity: 0.7}}
                      >
                        {e}
                      </Tag>
                    </FadeInTop>
                  )
                })}
              </Flex>
            </Stack>
          </Flex>
        </Stack>

        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
          flexDirection="column"
          gap={10}
        ></Flex>
      </Container>
    </>
  )
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
})
