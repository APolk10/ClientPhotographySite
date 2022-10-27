import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';

export default function NavBar() {
  let styleNav = {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "white"
  }

  return (
    <div id="nav-bar-menu-selector" style={styleNav}>
        <Navbar bg="light" expand={false} className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/AboutMe">About Me</Nav.Link>
                  <Nav.Link href="/Contact">Contact</Nav.Link>
                  <NavDropdown
                    title="Portfolios"
                    id={`offcanvasNavbarDropdown-expand`}
                  >
                    <NavDropdown.Item href="#action3">Weddings</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Graduations
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Family
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  );
}
