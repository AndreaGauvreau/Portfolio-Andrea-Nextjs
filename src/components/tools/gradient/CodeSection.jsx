'use client'
import {CheckIcon, CopyIcon} from '@chakra-ui/icons'
import {Flex, IconButton, Text} from '@chakra-ui/react'
import React, {useRef, useState} from 'react'

export default function CodeSection({copyValue, children}) {
  const [isCopied, setIsCopied] = useState(false)

  const textRef = useRef(null)
  let timeoutId = null

  const copyToClipboard = () => {
    textRef.current.select()
    document.execCommand('copy')
    setIsCopied(true)
    timeoutId = setTimeout(() => setIsCopied(false), 2000)
  }

  const handleButtonClick = () => {
    clearTimeout(timeoutId)
    copyToClipboard()
  }

  return (
    <Flex
      justifyContent={{base: 'center', lg: 'flex-start'}}
      alignItems={{base: 'center', lg: 'flex-start'}}
      w={{base: '90vw', md: '80vw', lg: '992px'}}
      pl={'20px'}
      pt={'20px'}
      bg={'#00000050'}
      pb={'20px'}
      borderRadius={10}
      zIndex={2}
      position="relative"
      p={12}
    >
      <Text fontSize={'15px'}>{children}</Text>
      <IconButton
        position={'absolute'}
        right={2}
        bottom={2}
        colorScheme={'blackAlpha'}
        onClick={handleButtonClick}
        marginTop="10px"
        pl={2}
        leftIcon={isCopied ? <CheckIcon /> : <CopyIcon />}
        disabled={isCopied}
      />
      <textarea
        ref={textRef}
        value={copyValue}
        style={{
          position: 'absolute',
          left: '-9999px',
        }}
      />
    </Flex>
  )
}
