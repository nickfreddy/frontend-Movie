import React from 'react';
import './index.css'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, NavItem, Grid } from 'react-bootstrap'
import logo from '../../../img/brand-logo.png'

function Navbar_notSign(props) {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" className="custom-navbar">
                <Container>
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top m-3"
                        alt="React Bootstrap logo"
                    />
                    <Navbar.Brand className='me-auto' href="#home" style={{ fontWeight: "500" }}>MilanTv</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto pe-3" >
                            <Form className="d-flex" style={{ width: "500px" }}>
                                <FormControl
                                    type="search"
                                    placeholder="Search Movie"
                                    aria-label="Search"

                                />
                            </Form>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" style={{ fontWeight: "500", color: "black" }}>Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}

export default Navbar_notSign;