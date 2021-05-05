import React from 'react'

<<<<<<< HEAD
import { OrganizerPhoto, OrganizersGrid, Unstyled, ListItem, UnstyledLink } from './elements'
=======
import {
  InlineRainbow,
  OrganizerPhoto,
  OrganizersGrid,
  Unstyled,
  ListItem,
  UnstyledLink
} from './elements'
>>>>>>> repo-a/master

const size = 100

const Organizers = ({ organizers }) => {
  return (
    <OrganizersGrid size={size}>
<<<<<<< HEAD
      {organizers.map(human => (
=======
      {organizers.map((human) => (
>>>>>>> repo-a/master
        <ListItem key={human.twitterHandle}>
          <UnstyledLink
            as="a"
            href={`https://twitter.com/${human.twitterHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            title={human.name}
          >
            <OrganizerPhoto size={size}>
<<<<<<< HEAD
=======
              <InlineRainbow flag={human.colors} />
>>>>>>> repo-a/master
              <img
                width={size + 'px'}
                height={size + 'px'}
                src={`https://github.com/${human.githubLink}.png`}
                alt="Organizer"
              />
            </OrganizerPhoto>
            <Unstyled>{human.name}</Unstyled>
          </UnstyledLink>
        </ListItem>
      ))}
    </OrganizersGrid>
  )
}

export default Organizers
