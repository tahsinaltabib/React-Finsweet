import React from 'react'
import  './navber.css'
import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import logo from '../../assets/Logo.png'
import Image from '../../reuseable/Image';

const Navber = () => {
  return (
    <section className='nav-sec'>
      <Container className="g-0">
        <Navbar expand="lg" className="">
          <Navbar.Brand href="#home">
            <Image src={logo}/>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto list-main">
              <NavLink className=" navlist no-underline" to="/">Home</NavLink>
              <NavLink className=" navlist no-underline" to="/About">About us</NavLink>
              <NavLink className=" navlist no-underline" to="/Features">Features</NavLink>
              <NavLink className=" navlist no-underline" to="/Pricing">Pricing</NavLink>
              <NavLink className=" navlist no-underline" to="/ReadCase">FAQ</NavLink>
              <NavLink className=" navlist no-underline" to="/Blog">Blog</NavLink>
            </Nav>
            <NavLink to="/Contact" className='no-underline'>
              <button className="nav-btn">Contact us</button>
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  )
}

export default Navber