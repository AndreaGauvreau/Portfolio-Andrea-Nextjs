import React, {useState} from 'react'
import styled from 'styled-components'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'
import {Box, Flex, Icon, useClipboard} from '@chakra-ui/react'
import {CheckIcon, CopyIcon} from '@chakra-ui/icons'
import {format} from 'prettier/standalone'
import parserCss from 'prettier/parser-postcss'

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 1.5em;
  padding-right: 3rem;
  overflow: scroll;
  border-radius: 10px;
  width: 100%;
`

const Line = styled.div`
  display: table-row;
`

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

const LineContent = styled.span`
  display: table-cell;
`

export const CodeBlock = ({code, language = 'css', lineNB = true}) => {
  const {onCopy, hasCopied} = useClipboard(code)

  const handleCopy = () => {
    onCopy()
    setTimeout(() => {}, 2000)
  }

  const formattedCode = format(code, {
    parser: language,
    plugins: [parserCss],
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: false,
    trailingComma: 'es5',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: 'always',
  })

  return (
    <>
      <Flex
        position="relative"
        alignItems="center"
        flexDirection="row"
        w={'100%'}
        maxW={'90vw'}
      >
        <Highlight
          {...defaultProps}
          theme={theme}
          code={formattedCode}
          language={language}
        >
          {({className, style, tokens, getLineProps, getTokenProps}) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({line, key: i})}>
                  {lineNB ? <LineNo>{i + 1}</LineNo> : ''}
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({token, key})} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </Pre>
          )}
        </Highlight>
        <Icon
          as={hasCopied ? CheckIcon : CopyIcon}
          position="absolute"
          top={'50%'}
          right={'1rem'}
          transform={'translateY(-50%)'}
          cursor="pointer"
          onClick={handleCopy}
        />
      </Flex>
    </>
  )
}
