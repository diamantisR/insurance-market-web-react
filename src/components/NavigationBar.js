import React from 'react';
import { Nav, Navbar, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import dragonLogo from '../assets/dragon_logo.png';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        // &:hover {
        //     color: white;
        // }
    }
`;

export const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/home">
                <img
                    alt=""
                    src={dragonLogo}
                    width="60"
                    height="60"
                    className="d-inline-block align-middle"
                />{' '}
                Donjons and Wyrms</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="/monster">Create Monster</Nav.Link>
                    <Nav.Link eventKey={2} href="/monsters">
                        My Monsters
            </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}