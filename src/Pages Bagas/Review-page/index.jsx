// import React, { useState } from 'react';
import { Navbar, Card, Container, Row, Col } from 'react-bootstrap'
import back_button from '../../img/back-button.png'
import './index.css'
import logo from '../../img/brand-logo.png'
import ReviewMovie from './ListReview';
import React from 'react';

const ReviewPage = () => {

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <div className="back-header">
                <div className="back-button p-3">
                    <Navbar.Brand className=" ms-4" href="/">
                        <img
                            src={back_button}
                            width="50"
                            height="50"
                            className="back d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </div>
            </div >
            <div className="Profile-page">
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E" }}>
                                <Card.Body style={{ padding: "0" }}>
                                    <div className="card-title">
                                        <h3>Review</h3>
                                        <p>Review page for update your review</p>
                                    </div>
                                    <div className="button-profile review">
                                        <h5>My Review</h5>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={8}>
                            <ReviewMovie />
                        </Col>

                    </Row>
                </Container>

            </div>
            <div className="footer bg-secondary">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top m-3"
                    alt="React Bootstrap logo"
                />
                <h3>deMovie</h3>
            </div>
        </div >
    );
};

export default ReviewPage;