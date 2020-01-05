import React from 'react'
import {
  Navbar, Nav, Form, Button
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Menu = ({ user, onLogout }) => (

  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Navbar.Brand href="#home">Bloglist</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/" exact>
          <Nav.Link>Blogs</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/users">
          <Nav.Link>Users</Nav.Link>
        </LinkContainer>
      </Nav>
      <Navbar.Text>
        {`logged in ${user.name}` }
      </Navbar.Text>
      <Form inline>
        <Button variant="outline-dark" onClick={onLogout}>Logout</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>


)

export default Menu