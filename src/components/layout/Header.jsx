import React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarStyled = styled(Navbar)`
  background-color: #4346e9;
`;

function Header() {
  return (
    <NavbarStyled variant="dark" expand="lg">
      <div className="container">
        <Navbar.Brand as={Link} to="/" className="text-white">
          <img src="/img/Exch-Stack-Header.png" height="40px" alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="text-white mx-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/exchanges" className="text-white mx-3">
              Exchanges List
            </Nav.Link>
            <Nav.Link as={Link} to="/tickers/XNAS" className="text-white mx-3">
              Stock Tickers
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </NavbarStyled>
  );
}

export default Header;
