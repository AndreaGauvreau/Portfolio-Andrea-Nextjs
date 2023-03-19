import React from 'react'
import styled from 'styled-components'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 1.5em;
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
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
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
  )
}
