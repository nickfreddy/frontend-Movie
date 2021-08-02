import React from 'react';
import { Button, ListGroupItem, ListGroup, Navbar, Card, Nav, NavDropdown, Form, FormControl, Container, Row, Col, NavItem, Grid } from 'react-bootstrap'
import back_button from '../../img/back-button.png'
import '../Profile-page/index.css'
import logo from '../../img/brand-logo.png'
import AddMovie from './AddMovie';


const AdminPage = () => {
    return (
        <div>
            <div className="back-header">
                <div className="back-button p-3">
                    <Navbar.Brand className="ms-4" href="#home">
                        <img
                            src={back_button}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </div>
            </div >
            <div className="Profile-page">
                <Container>
                    <Row>
                        <Col xs={2}>
                            <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E" }}>
                                <Card.Body style={{ padding: "0" }}>
                                    <div className="card-title">
                                        <h3>Setting</h3>
                                        <p>Admin page for movie CRUD</p>
                                    </div>
                                    <div className="button-profile">
                                        <h5>Add Movie</h5>
                                    </div>
                                    <div className="button-profile watchlist">
                                        <h5>Update Movie</h5>
                                    </div>
                                    <div className="button-profile delete">
                                        <h5>Delete Movie</h5>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <AddMovie />

                        </Col>

                    </Row>
                </Container>

            </div>
            <div className="footer">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top m-3"
                    alt="React Bootstrap logo"
                />
                <h3>De Movie</h3>
            </div>
        </div >
    );
};

export default AdminPage;