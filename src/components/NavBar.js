import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    
    return (
        <Navbar className="tilesBackground mb-5" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <img alt="Sprout logo" src="/assets/sprout.png" width="35" height="35" className="d-inline-block align-top"/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Brand>
                    <Link to='/' className='nav-link'>
                        Proyecto React - PB
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className='p-3 nav-link'>Catalogo</Link>
                    <Link to="/productos/suculentas" className='p-3 nav-link'>Suculentas</Link>
                    <Link to="/productos/cactus" className='p-3 nav-link'>Cactus</Link>
                </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar;