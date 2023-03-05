'use client'
import {Flex} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      bg={'#0d0d12'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      position="relative"
    >
      <div style={{position: 'relative'}}>
        <Image
          src="/images/icones/icone-load-int-andrea.png"
          alt="icone-andrea-gauvreau"
          width={200}
          height={200}
        />
        <Image
          src="/images/icones/icone-ext-load-andrea.png"
          alt="andrea-gauvreau-banderole"
          width={200}
          height={200}
          className="spin"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </div>
      <link rel="stylesheet" href="/loading.css" />
    </Flex>
  )
}
