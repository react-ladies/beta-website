import React from 'react'
import Header from '../header'
import { ThemeProvider } from 'styled-components'
<<<<<<< HEAD
import { theme, Global, Wrapper, SubWrapper } from './elements'
=======
import { theme, Global, Wrapper, SubWrapper, SideRainbow } from './elements'
>>>>>>> repo-a/master
import Footer from '../../components/footer'

const Layout = ({ children, siteTitle }) => (
  <ThemeProvider theme={theme}>
    <>
<<<<<<< HEAD
=======
      <SideRainbow />
>>>>>>> repo-a/master
      <Global />
      <Wrapper>
        <Header siteTitle={siteTitle} />
        <SubWrapper>{children}</SubWrapper>
<<<<<<< HEAD
        <Footer />
=======
        <Footer/>
>>>>>>> repo-a/master
      </Wrapper>
    </>
  </ThemeProvider>
)

export default Layout
