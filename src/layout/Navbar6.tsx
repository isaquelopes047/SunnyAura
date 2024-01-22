import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Custom Hook
import useScroll from '../components/useScroll'
import useActiveLink from '../components/useActiveLink'

// Image
import logoLight from "../assets/images/logo-light.png"
import logoDark from "../assets/images/logo-dark.png"

const Navbar6 = () => {

  // scroll page state call
  const navClass = useScroll();

  // activation
  const { activeLink, handleLinkClick } = useActiveLink('.navbar-nav li.active');

  // responsive open navbar state
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <nav className={"navbar navbar-expand-lg fixed-top navbar-custom tarnsperant-sticky " + navClass} id="navbar">        
      <Container>
        <Link className="navbar-brand logo" to="#">
          <img src={logoLight} className="logo-light" alt="" height="100" />
          <img src={logoDark} className="logo-dark" alt="" height="100" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={toggle}>
          <i className="mdi mdi-menu"></i>
        </button>
        <Navbar.Collapse id="navbarSupportedContent" in={isOpen}>
          <ul className="navbar-nav ms-auto navbar-center">
            <li className={`nav-item ${activeLink === '/home' ? 'active' : ''}}`}>
              <Nav.Link href="#home" onClick={() => handleLinkClick('/home')}>Home</Nav.Link>
            </li>
            <li className={`nav-item ${activeLink === "/about" ? "active" : ''}`}>
              <Nav.Link href="#about" onClick={() => handleLinkClick('/about')}>Sobre nós</Nav.Link>
            </li>
            <li className={`nav-item ${activeLink === "/serviços" ? "active" : ''}`}>
              <Nav.Link href="#serviços" onClick={() => handleLinkClick('/serviços')}>serviços</Nav.Link>
            </li>
            <li className={`nav-item ${activeLink === "/ecommerce" ? "active" : ''}`}>
              <Nav.Link href="#ecommerce" onClick={() => handleLinkClick('/ecommerce')}>ecommerce</Nav.Link>
            </li>
            <li className={`nav-item ${activeLink === "/CEO" ? "active" : ''}`}>
              <Nav.Link href="#CEO" onClick={() => handleLinkClick('/CEO')}>CEO</Nav.Link>
            </li>
            <li className={`nav-item ${activeLink === "/contato" ? "active" : ''}`}>
              <Nav.Link href="#CONTATO" onClick={() => handleLinkClick('/CONTATO')}>CONTATO</Nav.Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
      </nav>
    </React.Fragment>
  )
}

export default Navbar6