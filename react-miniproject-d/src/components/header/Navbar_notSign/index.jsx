import React, { useState } from 'react';
import './index.css'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, NavItem, Grid, Modal } from 'react-bootstrap'
import logo from '../../../img/brand-logo.png'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ModalSignUp from '../../modalSignUp/ModalSignUp';
import ModalSignIn from '../../modalSignIn/ModalSignIn';
import axios from 'axios';



function Navbar_notSign(props) {
    const {search} = props;
    const [show, setShow] = useState(false);
    const [ step, setStep ] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function goNextPage() {
        setStep(step => step +1)
    }

    function goPrevPage() {
        setStep(step => step -1)
    }

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
      }
    
    const resetInputField = () => {
        setSearchValue("")
      }
    
    const callSearchFunction = (e) => {
        e.preventDefault();
        search(searchValue);
        resetInputField();
      }

      

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
                    <Navbar.Brand className='me-auto text-light' href='/' style={{ fontWeight: "500" }}>deMovie</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto pe-3" >
                            <Form className="d-flex" style={{ width: "500px" }}>
                                <FormControl
                                    type="search"
                                    placeholder="Search Movie"
                                    aria-label="Search"
                                    value={searchValue}
                                    onChange={handleSearchInputChanges}
                                    

                                />
                                 <Button onClick={callSearchFunction} type="submit">Search</Button>
                            </Form>
                        </Nav>
                        <Nav>
                            <Switch>
                                <Route exact path='/'>
                                    <Button style={{ fontWeight: "500", color: "black" }} variant="outline-secondary text-light" onClick={handleShow}>Sign Up</Button>
                                </Route>
                                <Route exact path='/SignIn'>
                                    <Button style={{ fontWeight: "500", color: "black" }} variant="outline-secondary text-light" onClick={handleShow}>Sign in</Button>
                                </Route>
                            </Switch>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* ----------modal--------------- */}
            <Modal className="mt-5" show={show} onHide={handleClose}>
                {step === 1 && <ModalSignUp onClick={goNextPage}/>}
                {step === 2 && <ModalSignIn onClick={goPrevPage}/>}
            </Modal>

            
        </div >

        
    );
}

export default Navbar_notSign;