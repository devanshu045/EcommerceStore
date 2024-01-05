import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Navebar = () => {
  return (
    <>
         
         <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo on the left */}
        <Navbar.Brand href="#home">
          <img
            // src={logo}
            alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Centered navigation links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="/">About Us</Nav.Link>
            <Nav.Link href="Orders">ORDERS</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Login and Signup buttons on the right */}
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Button variant="outline-light" className="me-2">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Navebar