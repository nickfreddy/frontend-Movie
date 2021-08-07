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

        </div>
    );
}

export default CardListMovie;