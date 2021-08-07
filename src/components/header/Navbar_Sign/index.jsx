import React, { useState } from 'react';
import '../Navbar_Sign/index.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Container, Dropdown, Button } from 'react-bootstrap'
import logo from '../../../img/brand-logo.png'
import user from '../../../img/user.png'
import { searchMovieRdx } from '../../../redux/action/search';
import { useDispatch } from 'react-redux';

function Navbar_Sign(props) {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch()
    const USERID = localStorage.getItem('USERID');

    function LogOut() {
        localStorage.clear();
        window.location.replace("/");
    };

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
                            {window.location.pathname === '/' ?
                                <Form className="d-flex" style={{ width: "500px" }}>
                                    <FormControl
                                        type="search"
                                        placeholder="Search Movie"
                                        aria-label="Search"
                                        value={searchValue}
                                        onChange={handleSearchInputChanges}
                                    />
                                    <Button onClick={callSearchFunction} type="submit">Search</Button>
                                </Form> : null}
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
                                <NavDropdown.Item href={`/Profile-page/${USERID}`}>Profile</NavDropdown.Item>
                                <NavDropdown.Item href={`/Review-page/${USERID}`} >My Review</NavDropdown.Item>
                                <NavDropdown.Item href={`/Admin-page/${USERID}`} >Setting Movie</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={LogOut}>Sign out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}

export default Navbar_Sign;