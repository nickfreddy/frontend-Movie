import React, { useState } from 'react';
import './index.css'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, NavItem, Grid, Modal } from 'react-bootstrap'
import logo from '../../../img/brand-logo.png'


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
                            <Button style={{ fontWeight: "500", color: "black" }} variant="outline-secondary" onClick={handleShow}>Sign in</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* ----------modal--------------- */}
            <Modal className="mt-5" show={show} onHide={handleClose}  >
               
                <Form className="d-flex justify-content-center bg-light rounded-3" >
                    <div style={{height: '30rem'}}>

                        <Form.Group className="d-flex mt-3 justify-content-center">
                            <img  src={logo} style={{width: '50px'}} />
                            <h2 className="mt-auto">deMovie</h2>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="name" placeholder="Full Name" style={{width: '25rem'}} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" style={{width: '25rem'}} />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" style={{width: '25rem'}} />
                        </Form.Group>

                        <Form.Group>
                            <Button className="mt-4" variant="danger" type="submit" style={{width: '25rem'}}>
                                Submit
                            </Button>
                            <p className="text-center mt-3">Already have an account ? <span className="text-danger">Log in</span></p>
                        </Form.Group>
                    </div>

                </Form>
            </Modal>
        </div >
    );
}

export default Navbar_notSign;