import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loadReview } from '../../redux/action/ReviewUser';


function ReviewMovie() {
    const { id } = useParams()
    // const reviewData = useSelector(state => state.review.data)
    const [review, setReview] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadReview())
    }, []);

    // useEffect(() => {
    //     setReview(reviewData)
    // }, [reviewData])

    // console.log(review)

    return (
        <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E", marginBottom: "50px" }}>
            <Card.Body style={{ padding: "0" }}>
                <div className="card-title">
                    <h3>Review List</h3>
                    <p>You can update and delete your review </p>
                </div>
                <div className="list-movie">
                    <ol>

                    </ol>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ReviewMovie;