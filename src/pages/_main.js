import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Sponsors from '../components/Sponsors'
import Info from '../components/Info'
import Speakers from '../components/Speakers'
import Organizers from '../components/Organizers'
import Attendees from '../components/Attendees'
import Thanks from '../components/Thanks'
import Panel from '../components/Panel'
import Heading from '../components/Heading'
<<<<<<< HEAD
//import Announcement from '../components/Announcement'

const Main = ({ city, attendees }) => {
  // announcement
  const { site, thanks, speakers, sponsors, info, mainOrganizer } = city
=======
import Announcement from '../components/Announcement'

const Main = ({ city, attendees }) => {
  const { site, thanks, speakers, sponsors, info, mainOrganizer, announcement } = city
>>>>>>> repo-a/master

  return (
    <Layout>
      <SEO
<<<<<<< HEAD
        title={`React Ladies - ${info.city}`}
        description={'A supportive community for women and non-binary React enthusiasts'}
      />
      <section>
        <Heading sub="Join React Ladies @">{info.city}</Heading>
        <Panel>
=======
        title={`QueerJS - ${info.city}`}
        description={'A meetup for everyone where Queer Speakers take the stage'}
      />
      <section>
        <Heading sub="queerjs @">{info.city}</Heading>
        { announcement &&
          <Announcement message={announcement} />
        }
        <Info attendeesNumber={attendees.length} site={site} info={info} city={info.link} />
        <Panel heading="What?">
>>>>>>> repo-a/master
          {site.customDescription ? (
            <p>{site.customDescription}</p>
          ) : (
            <p>
<<<<<<< HEAD
              React Ladies is a supportive community for women and non-binary React enthusiasts with
              any level of programming experience to grow as technologists and meet other React
              developers. We center our events around JavaScript and other technologies within the
              React ecosystem.
            </p>
          )}
        </Panel>
        {/*announcement && <Announcement message={announcement} />*/}
        <Info attendeesNumber={attendees.length} site={site} info={info} city={info.link} />

=======
              This is a meetup where anyone is welcome to attend and support the speakers and the
              idea but all the speakers will be Queer.
              <br />
              This meetup exists to give a voice to everyone, to make a safe space where everyone is
              welcome.
            </p>
          )}
          <p>
            Join us! There will be {info.food ? 'food and' : ''} stickers{' '}
            <span role="img" aria-label="Queer Rainbow">
              🌈
            </span>
          </p>
        </Panel>
>>>>>>> repo-a/master
        {speakers.length > 0 || site.cfp ? (
          <Panel heading="Speakers">
            <Speakers cfp={site.cfp} speakers={speakers.filter(s => !s.mc)} />
          </Panel>
        ) : null}
        {speakers.filter(s => s.mc).length ? (
          <Panel heading="MC">
            <Speakers noSpeak cfp={site.cfp} speakers={speakers.filter(s => s.mc)} />
          </Panel>
        ) : null}
        {!site.rsvpLink ? (
          <Panel heading={`Attendees (${attendees.length})`}>
            <Attendees attendees={attendees} />
          </Panel>
        ) : null}
        <Panel heading="Sponsors">
          <Sponsors sponsors={sponsors} />
        </Panel>
        {mainOrganizer && mainOrganizer.length > 0 ? (
<<<<<<< HEAD
          <Panel heading={mainOrganizer.length > 1 ? 'Organizers' : 'Organizer'}>
=======
          <Panel heading={mainOrganizer.length > 1 ? "Organizers" : "Organizer"}>
>>>>>>> repo-a/master
            <Organizers organizers={mainOrganizer} />
          </Panel>
        ) : null}
      </section>

      <Panel heading={thanks && thanks.length ? 'Special Thanks' : null}>
        <Thanks thanks={thanks || []} />
      </Panel>
    </Layout>
  )
}

export default Main
