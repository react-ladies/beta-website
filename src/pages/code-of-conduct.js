import React from 'react'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import Layout from '../containers/layout'
import Panel from '../components/Panel'

const CodeOfConduct = () => {
  return (
    <Layout>
      <SEO
<<<<<<< HEAD
        title="React Ladies - Code Of Conduct"
        description="A supportive community for women and non-binary React enthusiasts"
=======
        title="QueerJS - Code Of Conduct"
        description="A meetup for everyone where Queer Speakers take the stage"
>>>>>>> repo-a/master
      />
      <main
        css={`
          margin-bottom: 40px;
        `}
      >
<<<<<<< HEAD
        <h1 hidden>Welcome to React Ladies</h1>
=======
        <h1 hidden>Welcome to QueerJS</h1>
>>>>>>> repo-a/master
        <Panel heading="Code of Conduct">
          <section
            css={`
              line-height: 1.5;
            `}
          >
            <p>
<<<<<<< HEAD
              All attendees, speakers, sponsors and volunteers at React Ladies meetup are required
              to agree with the following code of conduct.
            </p>
            <p>
              Organizers enforce this code throughout the event. We expect cooperation from all
              participants to help ensure a safe environment for everybody.
=======
              All attendees, speakers, sponsors and volunteers at QueerJS meetup are required to
              agree with the following code of conduct.
            </p>
            <p>
              Organizers enforce this code throughout the event. We expect cooperation
              from all participants to help ensure a safe environment for everybody.
>>>>>>> repo-a/master
            </p>
            <p>
              {' '}
              <Link to="/report" title="Code of Conduct">
                Report an Issue
              </Link>
              .
            </p>

            <h2>The Quick Version</h2>
            <p>
<<<<<<< HEAD
              Here at React Ladies meetup, we are dedicated to providing a harassment-free meetup
=======
              Here at QueerJS meetup, we are dedicated to providing a harassment-free meetup
>>>>>>> repo-a/master
              experience for everyone, regardless of gender, sexual orientation, disability,
              physical appearance, body size, race, or religion (or lack thereof).
            </p>
            <br />
            <p>
              We do not tolerate harassment of meetup participants in any form. We ask that all
              attendees are mindful of their surroundings and of their fellow participants.
            </p>
            <br />
            <p>Meetup attendees violating these rules will be expelled from the meetup.</p>
            <h2>The Less Quick Version</h2>
            <p>
              Harassment includes, but is not limited to, offensive verbal comments related to
              gender, age, sexual orientation, disability, physical appearance, body size, race,
              religion, sexual images in public spaces, deliberate intimidation, stalking,
              following, harassing photography or recording, sustained disruption of talks or other
              events, inappropriate physical contact, and unwelcome sexual attention.
            </p>
            <p>
              Participants asked to stop any harassing behaviour are expected to comply immediately.
            </p>
            <p>
              Sponsors are also subject to the anti-harassment policy. In particular, sponsors
              should not use sexualised images, activities, or other material.
            </p>
            <p>
              If a participant engages in harassing behaviour, the meetup organizers may take any
              action they deem appropriate, including warning the offender or expulsion from the
              meetup with no refund.
            </p>
            <p>
              If you are subject to or witness unacceptable behavior, or have any other concerns,
<<<<<<< HEAD
              please notify a React Ladies organizer as soon as possible.
=======
              please notify a QueerJS organizer as soon as possible.
>>>>>>> repo-a/master
            </p>
            <p>
              If you can’t find the organizer, please{' '}
              <Link to="/report" title="Code of Conduct">
                Report an Issue
              </Link>
              .
            </p>
            <p>
<<<<<<< HEAD
              Meetup staff are happy to help participants and assist people experiencing harassment
              by providing safe environment, arranging transport, accommodation or otherwise assist
              in the situation.
=======
              Meetup staff are happy to help participants and assist people experiencing
              harassment by providing safe environment, arranging transport, accommodation or
              otherwise assist in the situation.
>>>>>>> repo-a/master
            </p>
            <p>
              We expect all community participants (contributors, paid or otherwise; sponsors; and
              other guests) to abide by this Code of Conduct in all community venues—online and
              in-person—as well as in all one-on-one communications pertaining to community
              business.
            </p>
          </section>
        </Panel>
      </main>
    </Layout>
  )
}

export default CodeOfConduct
