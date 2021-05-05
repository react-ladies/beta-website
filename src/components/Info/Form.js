import React, { useState } from 'react'
<<<<<<< HEAD
=======
import createRecord from '../../helpers/airtable'
>>>>>>> repo-a/master
import { Button, Form } from './elements'

export default ({ onSubmit, city }) => {
  const [name, setName] = useState('')
<<<<<<< HEAD
  const [email, setEmail] = useState('')
=======
>>>>>>> repo-a/master
  const [gh, setGH] = useState('')
  const [plusOne, setPlusOne] = useState(false)
  const [plusOneName, setPlusOneName] = useState('')
  const [plusOneGH, setPlusOneGH] = useState('')
<<<<<<< HEAD
  // TODO: use error to change the front end state, right now it just fails silently if there was an issue persisting the data to Airtable.
  const [error, setError] = useState(false)

  const createUser = () => {
    if (name && email) {
      if (plusOne && !plusOneName) return

      fetch(
        `/.netlify/functions/register?name=${name}&github=${gh ||
          'react-ladies'}&city=${city}&email=${encodeURI(email)}`
      )
        .then(res => res.text())
        .then(text => setError(text.includes('Error')))

      if (plusOne) {
        fetch(
          `/.netlify/functions/register?name=${plusOneName}&github=${plusOneGH ||
            'react-ladies'}&city=${city}`
        )
          .then(res => res.text())
          .then(text => console.log(text))
=======

  const createUser = () => {
    if (name && gh) {
      if (plusOne && !plusOneName) return

      createRecord({
        city: city,
        name: name,
        ghLink: gh || 'QueerJS'
      })

      if (plusOne) {
        createRecord({
          city: city,
          name: plusOneName,
          ghLink: plusOneGH || 'QueerJS'
        })
>>>>>>> repo-a/master
      }
    }
  }

  return (
    <Form
      onSubmit={e => {
        e.preventDefault()
        createUser()
        onSubmit()
      }}
    >
      <p>
<<<<<<< HEAD
        If you're not comfortable showing your photo and link, you may leave the `GitHub Handle`
        field blank and it will default to `react-ladies`.
=======
        If you're not comfortable showing your photo and link, you may leave the `GitHub Handle` field blank and it will default
        to `QueerJS`.
>>>>>>> repo-a/master
      </p>
      <label htmlFor="name">
        Your Name
        <input
          required
          id="name"
          placeholder="Name"
          type="text"
          minLength="2"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label htmlFor="gh">
        Github Handle
        <input
          id="gh"
          type="text"
<<<<<<< HEAD
          placeholder="react-ladies"
          pattern="[A-Za-z0-9-]{1,30}"
          value={gh}
          onInvalid={e =>
            e.target.setCustomValidity(
              `A GitHub handle, e.g. 'react-ladies' for 'https://github.com/react-ladies'`
            )
          }
          onChange={e => setGH(e.target.value.trim())}
        />
      </label>
      <label htmlFor="email">
        E-Mail Address
        <input
          required
          id="email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          value={email}
          onInvalid={e => e.target.setCustomValidity(`Please provide a valid e-mail address.`)}
          onChange={e => setEmail(e.target.value.trim())}
        />
      </label>
      {/* TODO: PlusOne functionality should only be enabled for in-person events. */}
      {/*     <label
                                               htmlFor="plus-one"
                                               css={`
                                                 display: flex;
                                               `}
                                             >
                                               <input
                                                 id="plus-one"
                                                 type="checkbox"
                                                 pattern="[a-zA-Z0-9]+"
                                                 value={plusOne}
                                                 css={`
                                                   width: auto !important;
                                                   margin-right: 12px !important;
                                                 `}
                                                 onChange={e => setPlusOne(e.target.checked)}
                                               />
                                               <span>I am taking a plus one</span>
                                        </label>*/}
=======
          placeholder="QueerJS"
          pattern="[A-Za-z0-9-]{1,30}"
          value={gh}
          onInvalid={e => e.target.setCustomValidity(`A GitHub handle, e.g. 'QueerJS' for 'https://github.com/queerjs'`)}
          onChange={e => setGH(e.target.value.trim())}
        />
      </label>
      <label
        htmlFor="plus-one"
        css={`
          display: flex;
        `}
      >
        <input
          id="plus-one"
          type="checkbox"
          pattern="[a-zA-Z0-9]+"
          value={plusOne}
          css={`
            width: auto !important;
            margin-right: 12px !important;
          `}
          onChange={e => setPlusOne(e.target.checked)}
        />
        <span>I am taking a plus one</span>
      </label>
>>>>>>> repo-a/master
      {plusOne && (
        <label htmlFor="plus-one-name">
          +1 Name
          <input
            required
            id="plus-one-name"
            type="text"
            value={plusOneName}
            onChange={e => setPlusOneName(e.target.value.trim())}
          />
        </label>
      )}
      {plusOne && (
        <label htmlFor="plus-one-gh">
          +1 Github Handle
          <input
            id="plus-one-gh"
            type="text"
<<<<<<< HEAD
            placeholder="ReactLadies"
            pattern="[A-Za-z0-9-]{1,30}"
            value={plusOneGH}
            onInvalid={e =>
              e.target.setCustomValidity(
                `A GitHub handle, e.g. 'react-ladies' for 'https://github.com/react-ladies'`
              )
            }
=======
            placeholder="QueerJS"
            pattern="[A-Za-z0-9-]{1,30}"
            value={plusOneGH}
            onInvalid={e => e.target.setCustomValidity(`A GitHub handle, e.g. 'QueerJS' for 'https://github.com/queerjs'`)}
>>>>>>> repo-a/master
            onChange={e => setPlusOneGH(e.target.value.trim())}
          />
        </label>
      )}

      <Button>
        I AM IN{' '}
        <span role="img" aria-label="Party">
          🎉
        </span>
      </Button>
    </Form>
  )
}
