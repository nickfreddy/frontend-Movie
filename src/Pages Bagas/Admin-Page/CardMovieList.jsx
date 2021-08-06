<<<<<<< HEAD
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
=======
import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { DELETE_MOVIE } from '../../redux/action/types';
import './index.css'

function CardListMovie(props) {

    return (
        <div className="card-movie-list">
            <div className="title-card">
                <h5>{props.title}</h5>
            </div>

>>>>>>> 4e11d7f392a058faf72a3ca655e159d26856480f
        </div>
    );
}

<<<<<<< HEAD
export default CardListReview;
=======
export default CardListMovie;
>>>>>>> 4e11d7f392a058faf72a3ca655e159d26856480f
