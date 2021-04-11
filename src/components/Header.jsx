import React from 'react';
import styled from 'styled-components';
import {Navbar} from 'react-bootstrap'

const NavbarStyled = styled(Navbar)`
    background-color:#4346E9;
`;

function Header() {
    return (
        <NavbarStyled variant="dark" className="mb-5">
            <div className="container">
            <Navbar.Brand href="./">Exch - Stack</Navbar.Brand>
            </div>
        </NavbarStyled>
    )
}

export default Header
