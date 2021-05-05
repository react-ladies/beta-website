import React from 'react'
import RainbowWithClicker from '../rainbow/RainbowWithClicker'

import {
  InlineRainbow,
  SpeakerPhoto,
  CFP,
  CFPInner,
  SpeakersGrid,
  Unstyled,
  ListItem,
  UnstyledLink
} from './elements'

const Speakers = ({ noSpeak, speakers, cfp }) => {
  return (
    <SpeakersGrid>
<<<<<<< HEAD
      {speakers.map(human => (
=======
      {speakers.map((human) => (
>>>>>>> repo-a/master
        <ListItem
          talk={human.talk}
          key={human.twitterLink}
          data-tooltip={`I'm speaking about ${human.talk}!`}
        >
          <UnstyledLink
            as="a"
            href={human.link || `https://twitter.com/${human.twitterLink}`}
            target="_blank"
            rel="noopener noreferrer"
            title={human.name}
          >
            <SpeakerPhoto>
              {human.githubLink ? (
                <>
                  <InlineRainbow flag={human.colors} />
                  <img
                    width="240"
                    height="240"
                    src={`https://github.com/${human.githubLink}.png`}
                    alt="Speaker"
                  />
                </>
              ) : (
                <RainbowWithClicker />
              )}
            </SpeakerPhoto>
            <Unstyled>{human.name}</Unstyled>
            {human.location && <Unstyled>{human.location}</Unstyled>}
          </UnstyledLink>
        </ListItem>
      ))}
      {cfp && !noSpeak && (
        <li>
<<<<<<< HEAD
          <UnstyledLink to="/speak" title="Speak at React Ladies">
=======
          <UnstyledLink to="/speak" title="Speak at QueerJS">
>>>>>>> repo-a/master
            <SpeakerPhoto>
              <RainbowWithClicker>
                <CFP>
                  <CFPInner>
<<<<<<< HEAD
                    <h2>You?</h2> <span>Speak at React Ladies</span>
=======
                    <h2>You?</h2> <span>Speak at QueerJS</span>
>>>>>>> repo-a/master
                  </CFPInner>
                </CFP>
              </RainbowWithClicker>
            </SpeakerPhoto>
          </UnstyledLink>
        </li>
      )}
    </SpeakersGrid>
  )
}

export default Speakers
