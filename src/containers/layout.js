import React from 'react'
import Layout from '../components/layout'
<<<<<<< HEAD

function LayoutContainer(props) {
  return <Layout {...props} siteTitle={'React Ladies'} />
=======
import { RainbowProvider } from '../helpers/useRainbow'

function LayoutContainer(props) {
  return (
    <RainbowProvider>
      <Layout {...props} siteTitle={'QueerJS'} />
    </RainbowProvider>
  )
>>>>>>> repo-a/master
}

export default LayoutContainer
