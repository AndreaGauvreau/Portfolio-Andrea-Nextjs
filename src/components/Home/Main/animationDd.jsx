import {Box} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function AnimationDd() {
  return (
    <Box className="absolute">
      <Box className="relative">
        <Image
          className="index1 animationimg"
          src="/images/identite/index-1-dd-animation.png"
          alt="banderole-qui-tourne-andrea-gauvreau"
          width={300}
          height={300}
        />
        <Image
          className="index2 animationimg"
          src="/images/identite/index-2-dd-animation.png"
          alt="banderole-qui-tourne-andrea-gauvreau-numero-2"
          width={300}
          height={300}
        />
        <Image
          className="index3 animationimg"
          src="/images/identite/index-3-dd-animation.png"
          alt="andrea-gauvreau-light"
          width={300}
          height={300}
        />
      </Box>
    </Box>
  )
}
