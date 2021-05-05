import React from 'react'
import styled, { css } from 'styled-components'

const PanelSection = styled.section`
  margin: 5em 0 1.5em;
  ${props =>
    props.wide === false &&
    css`
      max-width: 50em;
    `}
`

const Permalink = styled.a`
  position: absolute;
<<<<<<< HEAD
  font-size: 0.75em;
  text-decoration: none;
  transition: all 0.1s;
  display: inline-block;
  padding: 1em;
=======
  font-size: .75em;
  text-decoration:none;
  transition: all .1s;
  display:inline-block;
  padding:1em;
>>>>>>> repo-a/master
  margin: -1em 0 0 -2.5em;
`

const Heading = styled.h2`
  font-size: 32px;
  font-family: 'NeutraText-Bold';
  & ${Permalink} {
    opacity: 0;
  }
  &:hover ${Permalink} {
    opacity: 1;
  }
`

const Panel = ({ heading, children, id, wide = false }) => (
  <PanelSection wide={wide} id={id}>
    {heading && (
      <Heading>
        {id && (
<<<<<<< HEAD
          <Permalink href={`#${id}`} aria-label="Copy link">
            📎
          </Permalink>
=======
          <Permalink href={`#${id}`} aria-label="Copy link">📎</Permalink>
>>>>>>> repo-a/master
        )}
        {heading}
      </Heading>
    )}
    {children}
  </PanelSection>
)

export const LargeParagraph = styled.p`
  font-size: 1.25em;
<<<<<<< HEAD
  color: ${props => props.theme.boldBlue};
`

export const BoldText = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`
=======
  color: ${props => props.theme.lightPurple};
`

>>>>>>> repo-a/master
export default Panel
