import React from 'react'
import { Link } from 'gatsby'
import { FooterWrap } from './elements'

const Footer = () => {
<<<<<<< HEAD
  return (
    <FooterWrap>
      All React Ladies community members should review and abide by our{' '}
      <Link to="/code-of-conduct"> Code of Conduct</Link>
      .
      <br />
      <br />
      Follow React Ladies on{' '}
      <a href="https://twitter.com/reactjsladies" title="Follow us on Twitter">
=======
  const site = {
    title: 'QueerJS',
    description: 'A meetup for everyone where Queer Speakers take the stage'
  }

  return (
    <FooterWrap>
      We have a{' '}
      <Link to="/code-of-conduct"> Code of Conduct</Link>
      .
      <br />
      <Link state={{ site: site }} to="/flags">
        What's with all the flags?
      </Link>
      <br />
      Follow QueerJS on{' '}
      <a href="https://twitter.com/queerjs" title="Follow us on Twitter">
>>>>>>> repo-a/master
        Twitter
      </a>
      <br />
      <br />
<<<<<<< HEAD
      Credits: This website was originally{' '}
      <span role="img" aria-label="fork">
        🍴
      </span>
      'd from{' '}
      <a href="https://www.queerjs.com" title="Visit QueerJS">
        QueerJS
      </a>
      .
      <br />
    </FooterWrap>
  )
=======
    </FooterWrap>
    )
>>>>>>> repo-a/master
}

export default Footer
