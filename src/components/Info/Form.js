import React, { useState } from 'react'
import { Button, Form } from './elements'

export default ({ onSubmit, city }) => {
  const [name, setName] = useState('')
  const [gh, setGH] = useState('')
  const [plusOne, setPlusOne] = useState(false)
  const [plusOneName, setPlusOneName] = useState('')
  const [plusOneGH, setPlusOneGH] = useState('')

  const createUser = () => {
    if (name && gh) {
      if (plusOne && !plusOneName) return

      fetch(`/.netlify/functions/register?name=${name}&github=${gh || 'react-ladies'}&city=${city}`)
        .then(res => res.text())
        .then(text => console.log(text))

      if (plusOne) {
        fetch(
          `/.netlify/functions/register?name=${plusOneName}&github=${plusOneGH ||
            'react-ladies'}&city=${city}`
        )
          .then(res => res.text())
          .then(text => console.log(text))
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
        If you're not comfortable showing your photo and link, you may leave the `GitHub Handle`
        field blank and it will default to `react-ladies`.
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
            placeholder="ReactLadies"
            pattern="[A-Za-z0-9-]{1,30}"
            value={plusOneGH}
            onInvalid={e =>
              e.target.setCustomValidity(
                `A GitHub handle, e.g. 'react-ladies' for 'https://github.com/react-ladies'`
              )
            }
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
