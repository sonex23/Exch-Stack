import React from 'react';
import styled from 'styled-components';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavbarStyled = styled(Navbar)`
    background-color:#4346E9;
`;

function Header() {
    return (
        <NavbarStyled variant="dark" expand="lg">
            <div className="container">
                <Navbar.Brand><Link to="/" className="text-white"><img src="img/Exch-Stack-Header.png" height="40px" alt="logo"></img></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link><Link to="/" className="text-white mx-3">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/markets" className="text-white mx-3">Markets</Link></Nav.Link>
                        <Nav.Link><Link to="/emiten-list" className="text-white mx-3">Emiten</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </NavbarStyled>
    )
}

export default Header
