import React from 'react';
import { Button } from 'react-bootstrap'
import './index.css'

function CardListReview(props) {
    return (
        <div className="card-movie-list">
            <div className="title-card">
                <h5>{props.review}</h5>
            </div>
            <div className="button-movie-list pb-3">
                <Button variant="primary" className="me-2">Update</Button>{' '}
                <Button variant="warning">Delete</Button>{' '}
            </div>
        </div>
    );
}

export default CardListReview;