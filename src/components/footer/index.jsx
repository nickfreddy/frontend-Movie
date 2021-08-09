import React from 'react';
import '../footer/index.css'
import logo from '../../img/brand-logo.png'
import apple from '../../img/apple.png'
import googleplay from '../../img/googleplay.png'
import facebook from '../../img/facebook.png'
import pinterest from '../../img/pinterest .png'
import instagram from '../../img/instagram.png'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap';
import '../../style/style.css'


function Footer() {
    return (
        <div className="bg-secondary">
            <Container >
                <Row className="text-light pt-4 pb-5">
                    <Col xs={5}>
                        <div className="brand-logo d-flex align-items-center">
                            <img
                                src={logo}
                                width="40"
                                height="40"
                                className="d-inline-block align-top m-3"
                                alt="React Bootstrap logo"
                            />
                            <h5 className="pt-2">deMovie</h5>
                        </div>
                        <p className="ps-3 pe-5" style={{ fontWeight: "300" }}>
                        deMovie is the world's most laidback source for movie, and celebrity content. Find ratings and reviews for some movie.
                        </p>
                    </Col>
                    <Col>
                        <div className="about-us">
                            <h5>About Us</h5>
                            <h5>Blog</h5>
                            <h5>Service</h5>
                            <h5>Career</h5>
                            <h5>Media Center</h5>
                        </div>

                    </Col>
                    <Col className="pt-2">
                        <h5 className="pb-1">Download</h5>
                        <div className="download pb-5">
                            <img
                                src={googleplay}
                                width="175"
                                height="65"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                            <img
                                src={apple}
                                width="175"
                                height="65"
                                className="d-inline-block align-top mt-1"
                                alt="React Bootstrap logo"
                            />
                        </div>
                        <h5 className="">Social Media</h5>
                        <div className="social-media">
                            <img
                                src={facebook}
                                width="45"
                                height="52"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                            <img
                                src={pinterest}
                                width="45"
                                height="45"
                                className="d-inline-block align-top mt-1"
                                alt="React Bootstrap logo"
                            />
                            <img
                                src={instagram}
                                width="47"
                                height="45"
                                className="d-inline-block align-top mt-1"
                                alt="React Bootstrap logo"
                            />
                        </div>
                    </Col>
                    <hr style={{ border: "solid 2px", borderRadius: "10px", color: "white", margin: "20px 0" }} />
                    <h5 className="text-center">Copyright © 2000-2021 deMovie.  All Rights Reserved</h5>
                </Row >

            </Container >
        </div>
    );
}

export default Footer;