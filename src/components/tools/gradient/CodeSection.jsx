'use client'
import {CheckIcon, CopyIcon} from '@chakra-ui/icons'
import {IconButton, Text, VStack} from '@chakra-ui/react'
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
    <VStack
      flex="1"
      justifyContent={{base: 'center', lg: 'flex-start'}}
      alignItems={{base: 'center', lg: 'flex-start'}}
      pl={'20px'}
      pt={'20px'}
      bg={'#ffffff10'}
      pb={'20px'}
      borderRadius={10}
    >
      <Text fontSize={'15px'}>{children}</Text>
      <IconButton
        colorScheme={'whiteAlpha'}
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
    </VStack>
  )
}
