import React from 'react'
<<<<<<< HEAD
import { Nav, LogoWrap, Codelings, Subtitle, NavRow, NavLink, NavHref } from './elements'
import ReactLogo from './logo'
=======

import logo from './logo.svg'
import text from './text.svg'
import RainbowWithClicker from '../rainbow/RainbowWithClicker'
import { Nav, LogoWrap, Logo, Codelings, Subtitle, NavRow, NavLink, NavHref } from './elements'
>>>>>>> repo-a/master

const Header = ({ siteTitle }) => (
  <Nav>
    <Codelings />
    <h1
      css={`
        display: block;
        overflow: hidden;
        text-indent: 100%;
        white-space: nowrap;
        font-size: 2px;
      `}
    >
<<<<<<< HEAD
      React Ladies
    </h1>
    <Subtitle>A supportive community for women and non-binary React enthusiasts</Subtitle>
    <NavRow>
      <LogoWrap>
        React Ladies <ReactLogo />
=======
      QueerJS
    </h1>
    <Subtitle>A meetup for everyone where Queer Speakers take the stage</Subtitle>
    <NavRow>
      <LogoWrap>
        <Logo irrelevant alt="" src={text} />
        <RainbowWithClicker stripes={['red']}>
          <Logo src={logo} alt="Queer JS" />
        </RainbowWithClicker>
>>>>>>> repo-a/master
      </LogoWrap>

      <ul>
        <li>
<<<<<<< HEAD
          <NavLink to="/">Events</NavLink>
        </li>
        <li>
          <NavHref
            href="https://opencollective.com/react-ladies"
            target="_blank"
            title="Donate to React Ladies"
=======
          <NavLink to="/">Meetups</NavLink>
        </li>
        <li>
          <NavHref
            href="https://opencollective.com/queerjs"
            target="_blank"
            title="Donate to QueerJS"
>>>>>>> repo-a/master
            rel="noopener noreferrer"
          >
            Donate
          </NavHref>
        </li>
<<<<<<< HEAD
        <li>
          <NavLink to="/organizers">Organizers</NavLink>{' '}
        </li>
        {/* TODO: Add a React Ladies FAQ
           <li>
          <NavLink to="/faq">FAQ</NavLink>{' '}
         </li> */}
        <li>
          <NavHref href="/discord">Discord</NavHref>{' '}
        </li>
=======
        <li><NavLink to="/organizers">Organizers</NavLink> </li>
        <li><NavLink to="/faq">FAQ</NavLink> </li>
        <li><NavHref href="/discord">Discord</NavHref> </li>
>>>>>>> repo-a/master
      </ul>
    </NavRow>
  </Nav>
)

export default Header
