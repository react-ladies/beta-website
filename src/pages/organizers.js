import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { Link } from 'gatsby'
import Panel from '../components/Panel'
import Speakers from '../components/Speakers'

import organizers from './_organizers'

const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const OrganizersPage = () => {
  const { site } = {
    site: {
<<<<<<< HEAD
      title: 'React Ladies',
      description: 'A supportive community for women and non-binary React enthusiasts'
=======
      title: 'QueerJS',
      description: 'A meetup for everyone where Queer Speakers take the stage'
>>>>>>> repo-a/master
    }
  }
  return (
    <Layout>
      <SEO title={site.title} description={site.description} />
      <main>
        <h1 hidden>Welcome to {site.title}</h1>
        <Panel heading="Organizers">
          <p>
<<<<<<< HEAD
            Meet the team behind React Ladies 👋🏾 and let us know if you are interested in
            <Link to="/getting-involved"> getting involved</Link>.
=======
            Nothing can be organized by only one person - there is a team helping QueerJS be a
            safe space all over the world.
          </p>
          <p>The cities indicate what events they helped organize. Want to help organize a
            meetup in your own city? See some of the ways you can{' '}
            <Link to="/getting-involved"> get involved</Link>.
>>>>>>> repo-a/master
          </p>
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
                <Speakers organizers speakers={organizers[location]} />
              </>
            )
          })}
        </Panel>
      </main>
    </Layout>
  )
}

export default OrganizersPage
