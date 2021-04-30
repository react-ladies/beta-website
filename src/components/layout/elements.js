import styled, { createGlobalStyle } from 'styled-components'
import otherFont from '../../fonts/neutra-text/style.css'
import RainbowWithClicker from '../rainbow/RainbowWithClicker'
import animate from 'animate.css'

export const theme = {
  darkPurple: '#f3fbff',
  contrastPurple: '#7bdff2',
  white: '#01a7c2',
  lightGrey: '#6445c7',
  lightPurple: '#00178c',
  roboto: 'Space Mono',
  neutra: 'NeutraText-Bold'
}

export const Global = createGlobalStyle`
${otherFont}
${animate}

body {
  font-family: 'Space Mono';
  background: ${props => props.theme.darkPurple};
    -webkit-font-smoothing: antialiased;
  color:  ${props => props.theme.white};
  margin: 0;
  box-sizing: border-box;
}

*, *:before,*:after {
  box-sizing: inherit;
}

a {
  color: ${props => props.theme.white};
}

html,
body,
body > div,
body > div > div {
  height: 100%;
}

figure {
  margin: 0;
}

.gatsby-image-wrapper > div {
    position: relative;
       padding-bottom: 100% !important;
}

`
export const Container = styled.div`
  overflow-x: hidden;
  position: relative;
  max-width: 100%;
`

export const Wrapper = styled.main`
  width: 80%;
  max-width: 56em;
  margin: auto;
  display: grid;
  grid-template-rows: auto 1fr 100px;
  height: 100%;
`

export const SubWrapper = styled.div``

export const SideRainbow = styled(RainbowWithClicker)`
  position: fixed;
  width: 1em;
  left: 0;
  top: 0;
  bottom: 0;
  @media (min-width: 720px) {
    width: 6vw;
  }
`
