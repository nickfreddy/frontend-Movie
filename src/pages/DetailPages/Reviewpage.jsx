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
    const { id } = useParams();
    console.log(id)
    const [detail, setDetail] = useState([])

    const GetDetailMovies = async (url) => {
        try {
            const res = await axios.get(url);
            const data = await res.data;
            setDetail(data.data)
            //declare variable to save the data
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        GetDetailMovies(`https://demovie.gabatch13.my.id/movies/${id}?revlimit=3&revpage=1`);
    }, [])

    console.log(detail)

    const [state, setState] = useState({
        rating: 0,
        comment: "",

    });

    const add = async (e) => {
        e.preventDefault()
        if (state.rating === 0 | state.comment === "") {
            alert("leave your comment & rating first")
            return;
        } else {

            await axios.post(`https://demovie.gabatch13.my.id/movies/${id}/reviews`, state, { headers: { 'Authorization': `Bearer ${Token}` } }).then
                (alert(`review success`));
            await axios.get(`https://demovie.gabatch13.my.id/movies/${id}?revlimit=3&revpage=1`).then (res => setDetail (res.data));
        }
    }

    let link = detail.trailer
    console.log(link)

    function sanitizeYTLink(link) {
        return link.includes("watch")
            ? `https://www.youtube.com/embed/${link.split("=")[1]}`
            : `https://www.youtube.com/embed/${link.split("/")[3]}`;
    };

    const Token = localStorage.getItem('Token');

let review = detail.reviews
console.log(review)

    // userID={detail.reviews?.}
    // user_id
return (
<>
<TitleBackground synopsis={detail?.synopsis} title={detail?.title} poster={detail?.poster}
        rating={detail?.averageRating===null ? `Unrated` : detail?.averageRating} trailer={detail?.trailer ?
        sanitizeYTLink(link) : `null`} />   

            <div>
                <Container className='PageContainer'>
                    <DetailNavBtn />

                    <Form className="d-flex justify-content-center rounded-3" style={{ backgroundColor: '#D6E0E3' }} >
                        <div style={{ paddingTop: '2rem', width: '60rem', height: '25rem', }}>



                            <Form.Group className="mb-3" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                                <Form.Label>Rating</Form.Label>
                                <Rating name="half-rating" value={state.rating} onChange={(e) => setState({ ...state, rating: e.target.value })} defaultValue={0} precision={0.5} />

                            </Form.Group>

                            <Form.Group className="mb-3" style={{ paddingLeft: '1rem', paddingRight: '1rem' }} >
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" value={state.comment} onChange={(e) => setState({ ...state, comment: e.target.value })} placeholder="Leave a review" style={{ Width: '70rem', height: '200px' }} />

                                {/* <Form.Control  type="email" placeholder="Enter email" style={{width: '25rem'}} /> */}
                            </Form.Group>
                            <Button onClick={add} style={{ float: 'right', marginRight: '1rem' }} >Submit</Button>


                        </div>

                </Form>
                <ul>
                {review?.map((item, index) => (
                    <div key={index}>
                    <CommentCard photo={item?.user_id?.photo} userID={item?.user_id?.username} comment={item?.comment} /></div>
                ))}
               
                </ul>
                    <Row >
                        <Col></Col>
                        <Col style={{ display: 'flex', justifyContent: 'space-evenly', }}><Button  >Load More</Button></Col>
                        <Col></Col>
                    </Row>

                    {/* comment={review.comment ? review.comment : null} */}
                    {/* <Row>
                        <Col lg={1} md={2}>
                            <Figure.Image width={137} height={143} alt="171x180"
                                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1499159723/kjmiibei1rnx1qj8guco.png" />
                        </Col>
                        <Col lg='auto' md='auto' xs='auto'>
                            <Row>
                                <h5>user id</h5>
                            </Row>
                            <Row>
                                
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
                    </Row> */}
                </Container>

            </div>



        </>
    )
}

export default Review