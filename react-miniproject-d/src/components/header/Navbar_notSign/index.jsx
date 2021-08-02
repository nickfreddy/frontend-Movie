import React, { useState } from 'react';
import './index.css'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, NavItem, Grid, Modal } from 'react-bootstrap'
import logo from '../../../img/brand-logo.png'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ModalSignUp from '../../modalSignUp/ModalSignUp';
import ModalSignIn from '../../modalSignIn/ModalSignIn';



function Navbar_notSign(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <Navbar.Brand className='me-auto' href="#home" style={{ fontWeight: "500" }}>deMovie</Navbar.Brand>
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
                            <Switch>
                                <Route exact path='/'>
                                    <Button style={{ fontWeight: "500", color: "black" }} variant="outline-secondary" onClick={handleShow}>Sign Up</Button>
                                </Route>
                                <Route exact path='/SignIn'>
                                    <Button style={{ fontWeight: "500", color: "black" }} variant="outline-secondary" onClick={handleShow}>Sign in</Button>
                                </Route>
                            </Switch>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* ----------modal--------------- */}
            <Modal className="mt-5" show={show} onHide={handleClose}  >
                <Switch>
                <Route exact path='/'>
                        <ModalSignUp/>
                    </Route>
                    <Route path='/SignIn'>
                        <ModalSignIn/>
                    </Route>
                </Switch>
            </Modal>

            
        </div >

        
    );
}

export default Navbar_notSign;