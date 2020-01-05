import React from 'react'
import PropTypes from 'prop-types'
import { useField } from '../hooks'
import { Form, Button } from 'react-bootstrap'

const LoginForm = ({ onLogin }) => {
  const { reset: resetUsername, ...username } = useField('')
  const { reset: resetPassword, ...password } = useField('')
  const handleLogin = (e) => {
    e.preventDefault()

    onLogin(username.value, password.value)
    resetUsername('')
    resetPassword('')
  }

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control {...username} type="text" placeholder="Enter username"  />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control {...password} type="password" placeholder="Enter password" />
      </Form.Group>

      <Button variant="primary" type='submit'>
        Login
      </Button>
    </Form>
  )
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired
}

export default LoginForm