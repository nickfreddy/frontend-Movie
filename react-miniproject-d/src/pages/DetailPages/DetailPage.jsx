// import {
// BrowserRouter as Router,
// Switch,
// Route,
// Link,
// useParams
// } from "react-router-dom";
import './Background.css'
import { Button, Badge, Container, Row, Col } from 'react-bootstrap';
import React from 'react'
import './DetailPage.css'
import TitleBackground from '../../components/DetailBackground/TitleBackground';
import DetailNavBtn from '../../components/DetailNavButton.jsx/DetailNavBtn';

function Detailpage() {
    return (
        <>
            <TitleBackground />

            <div className="PageContainer">

                {/* <div className='BG-Container'>
            <div className='FullbgImage'
                style={{backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
            url("https://gamebrott.com/wp-content/uploads/2019/07/bdd85ff4c1c38757d4ebc68bb3ed510b.jpg")`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',}}>
                <div className="Judul">
                    <h1>Judul</h1>
                </div>
                <div>
                    <div className='Rating'>
                        <div className="starRating">
                            <p>star review</p>
                        </div>
                        <div className="totalReview">
                            <p>review</p>
                        </div>
                    </div>
                    <div className='Overview'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, tenetur reiciendis laborum
                            animi
                            voluptatum, recusandae hic illum porro quia qui tempore molestiae nemo eos quisquam vel aut
                            quae
                            magnam sapiente?</p>
                    </div>
                    <div className='Tombol'>
                        <Button variant="danger" size='lg'>Watch Trailer</Button>
                        <div className='watchlist-btn'>
                            <Button style={{color:'white'}} variant="outline-secondary" size='lg'>Add to
                                Watchlist</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

                <Container>
                    <DetailNavBtn />
                    {/* <Container className='NavButton'>
            <Row>
                <Col className='LinkBtn' lg={8} md={6} xs={8} >
                <a href='/'>
                    <Badge pill bg="danger"> All </Badge>
                </a>
                <a href='/'>
                    <Badge pill bg="danger"> Danger </Badge>
                </a>
                <a href='/DetailPage/Character/'>
                    <Badge pill bg="danger"> Character </Badge>
                </a>
                <a href='/DetailPage/Review/'>
                    <Badge pill bg="danger"> Review </Badge>
                </a>
                </Col>
                <Col md="auto" xs={2} lg={3}>

                </Col>
                <Col xs={1} lg={1} className='submitBtn'>
                <a href='/'>
                    <Badge pill bg="danger"> Submit </Badge>
                </a>

                </Col>
            </Row>
            </Container> */}
                    {/* <div className='BtnLink'>
                <div className='ButtonList'>
                    <a href='/'>
                        <Badge pill bg="danger"> All </Badge>
                    </a>
                    <a href='/'>
                        <Badge pill bg="danger"> Danger </Badge>
                    </a>
                    <a href='/'>
                        <Badge pill bg="danger"> Character </Badge>
                    </a>
                    <a href='/'>
                        <Badge pill bg="danger"> Review </Badge>
                    </a>

                </div>
                <div className='ButtonSubmit'>
                    <a href='/'>
                        <Badge pill bg="danger"> Submit </Badge>
                    </a>
                </div>

            </div> */}

                    <div className='SynopContainer'>
                        <h1>Synopsis</h1>
                        <div className='LineContainer' style={{ color: 'white' }}>
                            line
                            <div className='Line'></div>
                        </div>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum minus laudantium quasi doloribus
                        in et beatae laborum? Ea deleniti repudiandae iste blanditiis illo, architecto unde pariatur porro a
                        expedita.
                    </div>

                    <div className='MovContainer'>
                        <h1>Movie Info</h1>

                        <div className='LineContainer' style={{ color: 'white' }}>
                            line
                            <div className='Line'></div>
                        </div>
                    </div>
                    <div className='infoDetail'>
                        <p>Release Year : </p>
                        <p>Rating : </p>
                        <p>Genre : </p>
                    </div>



                </Container>
            </div>
        </>
    )
}

export default Detailpage