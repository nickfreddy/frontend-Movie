import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loadReview } from '../../redux/action/ReviewUser';


function ReviewMovie() {
    const token = localStorage.getItem('Token');
    const USERID = localStorage.getItem('USERID');
    const reviewData = useSelector(state => state.review.data)
    const [review, setReview] = useState([])
    const dispatch = useDispatch()
    const refreshPage = () => {
        window.location.reload();
    }

    useEffect(() => {
        dispatch(loadReview())
    }, []);

    useEffect(() => {
        setReview(reviewData)
    }, [reviewData])

    console.log(USERID)

    let reviewID = review.filter((item, idx) => item?.user_id?._id === USERID).map((item, index) => {
        return (
            item._id
        )
    })


    const Dellete = async (e) => {
        e.preventDefault()
        try {
            await axios.delete(`https://demovie.gabatch13.my.id/movies/${USERID}/reviews/${reviewID}`, { headers: { Authorization: `Bearer ${token}` } }); refreshPage();
        } catch (error) {
            console.log({ error })
        }
    }


    return (
        <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E", marginBottom: "50px" }}>
            <Card.Body style={{ padding: "0" }}>
                <div className="card-title">
                    <h3>Review List</h3>
                    <p>You can update and delete your review </p>
                </div>
                <div className="list-movie">
                    <ol>
                        {
                            review.filter((item, idx) => item?.user_id?._id === USERID).map((item, index) => {
                                return (
                                    <li key={index} className="d-flex justify-content-between"><h5>{item.movie_id.title} , My comment: {item.comment}</h5>
                                        <div className="button-movie-list pb-3">
                                            <Button variant="warning" onClick={Dellete} >Delete</Button>{' '}
                                        </div>
                                    </li>
                                );
                            })}
                    </ol>
                </div>
            </Card.Body>
        </Card >
    );
}

export default ReviewMovie;