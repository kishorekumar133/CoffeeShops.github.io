import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../Styles/Navi.css'
const Navigation = () => {
  return (

      <Navbar expand="lg" bg='black' variant='dark'id='navbar'>
      <Container>
        <Navbar.Brand as={Link} to="/home" id='logo'><h1 className='time'>TimePass</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/home"className="fw-bold"id='nav-item'>Home</Nav.Link>
            <Nav.Link as={Link} to="/menu"className="fw-bold"id='nav-item'>Menu</Nav.Link>
            <Nav.Link as={Link} to="/about"className="fw-bold"id='nav-item'>About</Nav.Link>
            <Nav.Link as={Link} to="/product"className="fw-bold"id='nav-item'>Product</Nav.Link>
            <Nav.Link as={Link} to="/contact"className="fw-bold"id='nav-item'>Contact</Nav.Link>
            <Nav.Link as={Link} to="/book"className="fw-bold"id='nav-item'>Reserve</Nav.Link>
            <Nav.Link as={Link} to="/sign"className="fw-bold"id='nav-item'>SignIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  )
}

export default Navigation
