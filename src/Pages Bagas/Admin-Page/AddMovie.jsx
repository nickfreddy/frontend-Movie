import React from 'react';
import PropTypes from 'prop-types';
import { Button, ListGroupItem, ListGroup, Navbar, Card, Nav, NavDropdown, Form, FormControl, Container, Row, Col, NavItem, Grid } from 'react-bootstrap'


function AddMovie() {
    return (
        <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E" }}>
            <Card.Body style={{ padding: "0" }}>
                <div className="card-title">
                    <h3>Add Movie</h3>
                    <p>add a new movie </p>
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
                        <Form.Control type="text" placeholder="Release date" />
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
    );
}

export default AddMovie;