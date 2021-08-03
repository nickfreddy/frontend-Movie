import React from 'react';
import { Button } from 'react-bootstrap'
import './index.css'

function CardListMovie(props) {
    return (
        <div className="card-movie-list">
            <div className="title-card">
                <h5>{props.title}</h5>
            </div>
            <div className="button-movie-list">
                <Button variant="primary" className="me-2">Update</Button>{' '}
                <Button variant="warning">Delete</Button>{' '}
            </div>
        </div>
    );
}

export default CardListMovie;