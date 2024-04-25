import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import logo from './images/logo.svg';
import './css/style.css';

function Header() {
  return (
    <header id="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" ><img src={logo} alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/investigations">Blog 1</Nav.Link>
              <Nav.Link href="#">Maps</Nav.Link>
              <Nav.Link href="#">Articles</Nav.Link>
              <Nav.Link href="#">Data</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;