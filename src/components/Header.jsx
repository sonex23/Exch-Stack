import React from 'react';
import styled from 'styled-components';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavbarStyled = styled(Navbar)`
    background-color:#4346E9;
`;

function Header() {
    return (
        <NavbarStyled variant="dark" className="mb-5">
            <div className="container">
                <Link to="/" >
                    <Navbar.Brand>Exch - Stack</Navbar.Brand>
                </Link>
            </div>
        </NavbarStyled>
    )
}

export default Header
