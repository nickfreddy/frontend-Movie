import React, { useState, useEffect } from 'react';
import './index.css'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, NavItem, Grid, Modal } from 'react-bootstrap'
import logo from '../../../img/brand-logo.png'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ModalSignUp from '../../modalSignUp/ModalSignUp';
import ModalSignIn from '../../modalSignIn/ModalSignIn';
import { searchMovieRdx } from '../../../redux/action/search';
import { useDispatch } from 'react-redux';




function Navbar_notSign() {

    const [showIn, setShowIn] = useState(false);
    const [showUp, setShowUp] = useState(false);
    const [stepIn, setStepIn] = useState(1);
    const [stepUp, setStepUp] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch()


    const handleCloseIn = () => {
        setShowIn(false);
        resetStepIn();
    }
    const handleShowIn = () => setShowIn(true);

    const handleCloseUp = () => {
        setShowUp(false);
        resetStepUp();
    };
    const handleShowUp = () => setShowUp(true);

    const resetStepIn = () => setStepIn(1)
    const resetStepUp = () => setStepUp(1)

    function goNextPageIn() {
        setStepIn(step => step + 1)
    }
    function goPrevPageIn() {
        setStepIn(step => step - 1)
    }

    function goNextPageUp() {
        setStepUp(step => step + 1)
    }
    function goPrevPageUp() {
        setStepUp(step => step - 1)
    }

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        // search(searchValue);
        dispatch(searchMovieRdx(searchValue))
        resetInputField();
    }

    const hideHeaderFooter = window.location.pathname.includes("/Admin-page") || window.location.pathname.includes("/Profile-page") || window.location.pathname.includes("/Update-movie") || window.location.pathname.includes("/Review-page") || window.location.pathname.includes("/DetailPage");



    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="secondary" className="custom-navbar d-flex">
                <Container>
                    <a href='/'><img
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top m-3"
                        alt="React Bootstrap logo"
                    /></a>
                    <Navbar.Brand className='me-auto text-light' href='/' style={{ fontWeight: "500" }}>deMovie</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        <Nav className="m-auto  d-flex justify-content-center align-content-between" >
                            <Form className="">
                                {window.location.pathname === "/" ? 
                                    <Form className="d-flex" style={{ maxWidth: "50rem" }}>
                                        <FormControl
                                            type="search"
                                            placeholder="Search Movie"
                                            aria-label="Search"
                                            value={searchValue}
                                            onChange={handleSearchInputChanges}
                                        />
                                        <Button onClick={callSearchFunction} style={{ width: "5rem" }} type="submit">Search</Button>
                                    </Form> : null
                                }
                            </Form>
                        </Nav>

                        <Nav>
                            <div className="d-flex p-nokay">
                                <Button style={{ fontWeight: "500", color: "black" }} variant="secondary text-light me-1 m-nokay" style={{maxWidth: '8rem'}} onClick={handleShowUp}>Register</Button>
                                <Button style={{ fontWeight: "500", color: "black" }} variant="secondary text-light m-nokay" style={{maxWidth: '8rem'}} onClick={handleShowIn}>Sign In</Button>
                            </div>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* ----------modal--------------- */}
            <Modal className="mt-5" show={showUp} onHide={handleCloseUp}>
                {stepUp === 1 && <ModalSignUp onClick={goNextPageUp} setShow={setShowUp} />}
                {stepUp === 2 && <ModalSignIn onClick={goPrevPageUp} setShow={setShowUp} />}
            </Modal>

            <Modal className="mt-5" show={showIn} onHide={handleCloseIn}>
                {stepIn === 1 && <ModalSignIn onClick={goNextPageIn} setShow={setShowIn} />}
                {stepIn === 2 && <ModalSignUp onClick={goPrevPageIn} setShow={setShowIn} />}
                
            </Modal>


        </div >


    );
}

export default Navbar_notSign;