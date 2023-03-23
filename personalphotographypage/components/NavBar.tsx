import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../styles/navBar.module.css';
import Head from 'next/head';

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
                  MP
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">
                    <div className={styles.navigationSelection}>
                      <img id={styles.navigationSelectionImage} src='https://cdn.pixabay.com/photo/2017/10/19/17/56/camera-2868622_960_720.png' alt='noImage'></img>
                      <p>&bull; Home</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link className={styles.navBarSelections} href="/Portfolio">
                    <div className={styles.navigationSelection}>
                      <img id={styles.navigationSelectionImage} src='https://cdn.pixabay.com/photo/2017/10/19/17/56/camera-2868622_960_720.png' alt='noImage'></img>
                      <p>&bull; Portfolios</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link className={styles.navBarSelections} href="/Contact">
                    <div className={styles.navigationSelection}>
                      <img id={styles.navigationSelectionImage} src='https://cdn.pixabay.com/photo/2017/10/19/17/56/camera-2868622_960_720.png' alt='noImage'></img>
                      <p>&bull; Contact</p>
                    </div>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  );
}
