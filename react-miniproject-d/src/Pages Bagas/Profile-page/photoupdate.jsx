import React from 'react';
import { Button, ListGroupItem, ListGroup, Navbar, Card, Nav, NavDropdown, Form, FormControl, Container, Row, Col, NavItem, Grid } from 'react-bootstrap'

import '../Profile-page/index.css'
import user from '../../img/user.png'




function Updatephoto(props) {
    return (
        <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E" }}>
            <Card.Body style={{ padding: "0" }}>
                <div className="card-title">
                    <h3>My profile Pitcure</h3>
                    <p>Customize profile pitcure</p>
                </div>
                <div className="profile-pitcure">
                    <img
                        src={user}
                        width="200"
                        height="200"
                        className="d-inline-block align-top m-3"
                        alt="React Bootstrap logo"
                    />
                    <div className="input-image">
                        <Form.Group controlId="formFile" className="mb-3 ">
                            <Form.Control type="file" />
                        </Form.Group>
                    </div>

                </div>
            </Card.Body>
        </Card>

    );
}

export default Updatephoto;