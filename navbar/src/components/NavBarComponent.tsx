import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import "./NavBarComponent.css"

function NavBarComponent() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} id="navlikn" to="/" >Home</Nav.Link>
          <Nav.Link as={NavLink} id="navlikn" to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} id="navlikn" to="/characters">Characters</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBarComponent
