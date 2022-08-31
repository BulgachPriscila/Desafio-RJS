import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import './NavBar.css'

function NavBar() {
    return (
        <Navbar className="tilesBackground mb-5" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                <img alt="Sprout logo" src="./../public/assets/sprout.png" width="35" height="35" className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Navbar.Brand href="#home">Proyecto React - PB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Catalogo</Nav.Link>
                    <Nav.Link href="#link">Quienes Somos</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <CartWidget/> 
            </Container>
        </Navbar>
    );
}

export default NavBar;