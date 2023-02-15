import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../styles/navBar.module.css';

export default function NavBar() {

  return (
    <div className={styles.navBarBox}>
        <Navbar id={styles.navBarBox} fixed='top' expand={false} className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} className='test' id={styles.navBarButton} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="end"
              className={styles.offCanvasNavBar}
            >
              <Offcanvas.Header className={styles.navBarHeaderBox} closeButton>
                <Offcanvas.Title className={styles.navBarHeader} id={`offcanvasNavbarLabel-expand`}>
                  My Work
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className={styles.navBarSelections} href="/">Home</Nav.Link>
                  <Nav.Link className={styles.navBarSelections} href="/Portfolio">Portfolios</Nav.Link>
                  <Nav.Link className={styles.navBarSelections} href="/Contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  );
}
