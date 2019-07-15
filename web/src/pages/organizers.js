import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Panel from '../components/Panel'
import Speakers from '../components/Speakers'

import organizers from './_organizers'

const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const CodeOfConduct = ({ location }) => {
  const { site } = location.state || {
    site: {
      title: 'QueerJS',
      description: 'A meetup for everyone where Queer Speakers take the stage'
    }
  }
  return (
    <Layout>
      <SEO title={site.title} description={site.description} />
      <main>
        <h1 hidden>Welcome to {site.title}</h1>
        <Panel heading="Organizers">
          <p>
            Nothing can be organized by only one person and there is a team helping QueerJS be a
            safe space all over the world.
          </p>
          <p>The cities indicate what events they helped organize</p>
          <p
            css={`
              margin-bottom: 40px;
            `}
          >
            Thank you.
          </p>
          {Object.keys(organizers).map(location => {
            return (
              <>
                <h2
                  css={`
                    margin-bottom: 20px;
                  `}
                >
                  {capitalize(location)}
                </h2>
                <Speakers speakers={organizers[location]} />
              </>
            )
          })}
        </Panel>
      </main>
    </Layout>
  )
}

export default CodeOfConduct