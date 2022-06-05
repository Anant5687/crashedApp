import React from 'react'
import {
  Navbar, Container, FormControl,
  NavDropdown, Form, Nav
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const onDeleteHandeler = () => {
    localStorage.removeItem('userInfo')
    navigate('/login')
  }
  return (
    <div>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container >
          <Navbar.Brand>
            <Link to="/" style={{ color: 'white', textDecoration: "none" }}>
              Note Zipper
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Nav
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link >
                <Link to="/mynotes"
                  style={{ color: 'white', textDecoration: "none" }}>
                  My Notes
                </Link>
              </Nav.Link>
              <NavDropdown title="Anant Jindal" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">My profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={onDeleteHandeler}> <Link to="/login">Logout</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
