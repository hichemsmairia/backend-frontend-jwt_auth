import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
// pour remplacer Link
//import { LinkContainer } from "react-router-bootstrap";

function MyNavbar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Gestion des employeés</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link style={{ color: "white" }} className="text" to="/">
                Acceuil
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link style={{ color: "white" }} className="text" to="/">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
