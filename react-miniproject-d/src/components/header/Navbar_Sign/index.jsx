import React from 'react';
import '../Navbar_Sign/index.css'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Dropdown } from 'react-bootstrap'
import logo from '../../../img/brand-logo.png'
import user from '../../../img/user.png'

function Navbar_Sign(props) {

    function LogOut() {
        localStorage.clear();
        window.location.replace("/");
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="secondary" className="custom-navbar">
                <Container>
                    <a href='/'><img
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top m-3"
                        alt="React Bootstrap logo"
                    /></a>
                    <Navbar.Brand className='me-auto' href='/' style={{ fontWeight: "500" }}>deMovie</Navbar.Brand>
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


                            <NavDropdown title={<div className="user-profile">
                                <img
                                    src={user}
                                    width="50"
                                    height="50"
                                    className="d-inline-block align-top m-3"
                                    alt="React Bootstrap logo"
                                />
                            </div>} id="navbarScrollingDropdown">
                                <Dropdown.ItemText style={{ fontWeight: "500", fontSize: "18px" }}>User Name</Dropdown.ItemText>
                                <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Setting</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Help</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5" onClick={LogOut}>Sign out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}

export default Navbar_Sign;