import React from 'react';
import { Button, ListGroupItem, ListGroup, Navbar, Card, Nav, NavDropdown, Form, FormControl, Container, Row, Col, NavItem, Grid } from 'react-bootstrap'
import back_button from '../../img/back-button.png'
import '../Admin-Page/index.css'
import logo from '../../img/brand-logo.png'
import example from '../../img/example-movie.png'

const FormMovie = () => {
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
                        <Col xs={4}>
                            <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E" }}>
                                <Card.Body style={{ padding: "0" }}>
                                    <div className="card-title">
                                        <h3>Title Movie</h3>
                                        <p>Genre</p>
                                    </div>
                                    <div className="image-movie">
                                        <img
                                            src={example}
                                            width="350"
                                            height="500"
                                            className="d-inline-block align-top"
                                            alt="React Bootstrap logo"
                                        />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E" }}>
                                <Card.Body style={{ padding: "0" }}>
                                    <div className="card-title">
                                        <h3>Update Movie</h3>
                                        <p>update a new component movie </p>
                                    </div>
                                    <Form style={{ padding: "1px 32px 20px 110px" }}>
                                        <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                                            <Form.Label style={{ width: "30%" }} >Movie Title</Form.Label>
                                            <Form.Control type="text" placeholder="Title" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                                            <Form.Label style={{ width: "30%" }} >Genre</Form.Label>
                                            <Form.Control type="text" placeholder="Action, Anime, Drama, Comedy" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                                            <Form.Label style={{ width: "30%" }} >Release</Form.Label>
                                            <Form.Control type="text" placeholder="Year" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                                            <Form.Label style={{ width: "30%" }} >Trailer</Form.Label>
                                            <Form.Control type="text" placeholder="URL" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                                            <Form.Label style={{ width: "30%" }} >Synopsis</Form.Label>
                                            <Form.Control type="text" placeholder="synopsis" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                                            <Form.Label style={{ width: "30%" }} >Poster</Form.Label>
                                            <Form.Control type="file" />
                                        </Form.Group>


                                        <div className="button-submit">
                                            <Button style={{ width: "100px", height: "40px", marginRight: "20px" }} variant="secondary" type="reset">
                                                Cancel
                                            </Button>
                                            <Button style={{ width: "100px", height: "40px" }} variant="warning" type="submit">
                                                Save
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
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

export default FormMovie;