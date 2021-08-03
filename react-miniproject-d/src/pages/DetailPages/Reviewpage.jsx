// import {
// BrowserRouter as Router,
// Switch,
// Route,
// Link,
// useParams
// } from "react-router-dom";
import { FloatingLabel, Form, Badge, Button, Figure, Container, Row, Col, Card } from 'react-bootstrap';
import React from 'react'
import CategoryButton from '../../components/categoryButton/CategoryButton';
import CommentCard from '../../components/Review/CommentCard';
import TitleBackground from '../../components/DetailBackground/TitleBackground';
import Rating from '@material-ui/lab/Rating';
import './DetailPage.css'
import DetailNavBtn from '../../components/DetailNavButton.jsx/DetailNavBtn';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";


function Review() {
<<<<<<< HEAD
    const {id} = useParams();
    console.log(id)
    const [detail, setDetail] = useState([])
//set var movies

const GetDetailMovies = async (url) => {
try {
const res = await axios.get(url);
const data = await res.data;
setDetail(data)
//declare variable to save the data
} catch (error) {
console.log(error)
}
}

useEffect(() => {
GetDetailMovies(`https://api.themoviedb.org/3/movie/+${id}+?api_key=4c2c9a58431c5b46e098bf4eed17c94b&language=en-US`)
}, [])

const backdrop = 'https://image.tmdb.org/t/p/original'

return (
<>
<TitleBackground synopsis={detail.overview} title={detail.title} poster={backdrop+detail.backdrop_path} rating={detail.vote_average/2} trailer={`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ba4ce5d35b9081ae360eeb355f0acda9&language=en-US`} />
    {/* <Container className='NavButton'>
=======
    return (
        <>
            <TitleBackground />
            {/* <Container className='NavButton'>
>>>>>>> 38f68df54c4adca0ed2300892e9b8fdd7b82fb51
        <Row>
            <Col className='LinkBtn' lg={8} md={6} xs={8}>
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

            <div>
                <Container className='PageContainer'>
                    <DetailNavBtn />

                    <Row>
                        <Col lg={1} md={2}>
                            <Figure.Image width={137} height={143} alt="171x180"
                                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1499159723/kjmiibei1rnx1qj8guco.png" />
                        </Col>
                        <Col lg='auto' md='auto' xs='auto'>
                            <Row>
                                <h5>user id</h5>
                            </Row>
                            <Row>
                                <Rating name="half-rating" defaultValue={0} precision={0.5} />
                            </Row>
                        </Col>
                    </Row>
                    <FloatingLabel className='ReviewForm' controlId="floatingTextarea2" label="Leave a review">
                        <Form.Control as="textarea" placeholder="Leave a review" style={{ height: '200px' }} />
                    </FloatingLabel>
                    <Row style={{ float: 'right' }}>
                        <CategoryButton title={"submit"} />
                    </Row>
                    <CommentCard />
                    <Row >
                        <Col></Col>
                        <Col style={{ display: 'flex', justifyContent: 'space-evenly', }}><CategoryButton title={"Load More"} /></Col>
                        <Col></Col>
                    </Row>
                </Container>

            </div>



        </>
    )
}

export default Review