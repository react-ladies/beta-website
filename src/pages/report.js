import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Panel from '../components/Panel'
import { Link } from 'gatsby'

const Report = () => {
  const contactInfo = {
    email: 'monica@aboutmonica.com',
    twitterHandle: '@ReactJSLadies',
    githubHandle: 'react-ladies'
  }

  return (
    <Layout>
      <SEO
        title="React Ladies - Code Of Conduct"
        description="A supportive community for women and non-binary React enthusiasts"
      />
      <main>
        <h1 hidden>Welcome to React Ladies</h1>
        <Panel heading="Code of Conduct - Report An Issue">
          <section
            css={`
              line-height: 1.5;
            `}
          >
            <p>
              We want React Ladies to be a safe and inclusive environment. That’s why we ask our
              attendees to follow our{' '}
              <Link to="/code-of-conduct" title="Code of Conduct">
                Code of Conduct
              </Link>
              !
            </p>
            <p>
              In the unfortunate case that you see someone violating the code of conduct, here are
              some ways you can report it to us:
            </p>
            <ul>
              <li> Send a DM to {contactInfo.twitterHandle}</li>
              <li>
                Let a{' '}
                <Link to="/organizers" title="Code of Conduct">
                  Core Team
                </Link>{' '}
                organizer know, either in person or via Twitter.
              </li>
              <li>
                {' '}
                Send an email to <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
            </ul>
          </section>
        </Panel>
      </main>
    </Layout>
  )
}

export default Report
