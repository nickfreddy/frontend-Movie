import React, { useState } from 'react';
import { Navbar, Card, Container, Row, Col } from 'react-bootstrap'
import back_button from '../../img/back-button.png'
import './index.css'
import logo from '../../img/brand-logo.png'
import ListMovie from './ListMovie';
import AddMovie from './AddMovie';


const AdminPage = () => {
    const [isAddMovie, setIsAddMovie] = useState(true)
    return (
        <>
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
                        <Col className='AdminTools' xs={12} md={4}lg={4}>
                            <Card style={{ borderRadius: "10px", }}>
                                <Card.Body style={{ padding: "0" }}>
                                    <div className="card-title">
                                        <h3>Movie</h3>
                                        <p>Admin page for movie CRUD</p>
                                    </div>
                                    <div className="button-profile" onClick={() => setIsAddMovie(true)}>
                                        <h5>List Movie</h5>
                                    </div>
                                    <div className="button-profile delete" onClick={() => setIsAddMovie(false)}>
                                        <h5>Add Movie</h5>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={8} lg={8} >
                            {isAddMovie ? <ListMovie /> : <AddMovie />}

                        </Col>

                    </Row>
                </Container>

            </div>
           
        </div >
        </>
    );
};

export default AdminPage;