import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import React from 'react'
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
const USERID = localStorage.getItem('USERID');
const Token = localStorage.getItem('Token');

const refreshPage = () => {
window.location.reload();
}

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
}, [id])

console.log(detail)

const [state, setState] = useState({
rating: 0,
comment: "",

});

        const add = async (e) => {
        e.preventDefault()
        if (state.rating === 0 || state.comment === "") {
        alert("leave your comment & rating first");
        return;
         } else {
            await axios.post(`https://demovie.gabatch13.my.id/movies/${id}/reviews`, state, { headers: { 'Authorization': `Bearer ${Token}` }}).then(alert(`review success`)); refreshPage();
            }
            }

    const edit = async (e) => {
        e.preventDefault()
        if (state.rating === 0 || state.comment === "") {
        alert("leave your comment & rating first");
        return;
        } else {
            await axios.put(`https://demovie.gabatch13.my.id/movies/${id}/reviews/${comment}`, state, { headers: { 'Authorization':`Bearer ${Token}` } }).then
                (alert(`edit success`)); refreshPage();
                }
                }

    const Delete = async (e) => {
        try {
        await axios.delete(`https://demovie.gabatch13.my.id/movies/${USERID}/reviews/${comment}`, { headers: { Authorization:`Bearer ${Token}` } }); refreshPage();
            } catch (error) {
            console.log({ error })
            }
            }


let link = detail.trailer
console.log(link)

function sanitizeYTLink(link) {
    return link.includes("watch")
    ? `https://www.youtube.com/embed/${link.split("=")[1]}`
    : `https://www.youtube.com/embed/${link.split("/")[3]}`;
    };

    // function reviewID (review) {
    // return review.filter()
    // }

    let review = detail?.reviews
    console.log(review)
    // let reviewID = review?._id
    // console.log(reviewID)

    let reviewID = review?.filter(item => item?.user_id?._id === USERID);
    console.log(reviewID);
    let comment = reviewID?.map(item => item?._id);
    console.log(comment)
    let pengguna = reviewID?.map(item => item?.user_id?._id);
    console.log(pengguna)
    console.log(USERID)

return (
<>
    <TitleBackground synopsis={detail?.synopsis} title={detail?.title} poster={detail?.poster}
        rating={detail?.averageRating===null ? `Unrated` : detail?.averageRating} trailer={detail?.trailer ?
        sanitizeYTLink(link) : `null`} />

    <div>
        <Container className='PageContainer '>
            <DetailNavBtn />

            <Form className="d-flex justify-content-center rounded-3" style={{ backgroundColor: '#D6E0E3' }}>
                <div style={{ paddingTop: '1rem', width: '60rem', height: '25rem', }}>



                    <Form.Group className="mb-3" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                        <Form.Label>Rating</Form.Label>
                        <Rating name="half-rating" value={state.rating} onChange={(e)=> setState({ ...state, rating:
                            e.target.value })} defaultValue={0} precision={1} />

                    </Form.Group>

                    <Form.Group className="mb-3" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" value={state.comment} onChange={(e)=> setState({ ...state, comment:
                            e.target.value })} placeholder="Leave a review" style={{ Width: '70rem', height: '200px' }}
                            />
                           
                    </Form.Group>
                    {USERID ? <Button onClick={add} style={{ float: 'right', marginRight: '1rem' }}>Submit</Button> : null}
                    {/* eslint-disable-next-line eqeqeq */}
                    {pengguna == USERID ? <Button onClick={edit} variant='warning'
                        style={{ float: 'right', marginRight: '1rem' }}>Edit</Button> : null}
                    {/* eslint-disable-next-line eqeqeq */}
                    {pengguna == USERID ? <Button onClick={Delete} 
                        style={{ float: 'left', marginLeft: '1rem', backgroundColor:'#CD113B', borderColor:"#FF7600"}}>Delete</Button> : null}
                </div>

            </Form>


            <ul>
                {review?.map((item, index) => (
                <div key={index}>
                    <CommentCard photo={item?.user_id?.photo} userID={item?.user_id?.username}
                        comment={item?.comment} />
                </div>
                ))}
                <div style={{ margin: "1rem 0 1rem 0", height: '5px' }}></div>
            </ul>
            <Row>
                <Col>
                </Col>
                {/* <Col style={{ display: 'flex', justifyContent: 'space-evenly', }}><Button>Load More</Button></Col> */}
                <Col>
                </Col>
            </Row>

        </Container>

    </div>



</>
)
}

export default Review