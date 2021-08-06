import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../redux/action/movie';
import CardListMovie from './CardMovieList';



function ListMovie() {
    const moviesData = useSelector(state => state.movies.data);
    const [movie, setMovies] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadMovies())
    }, []);

    useEffect(() => {
        setMovies(moviesData)

    }, [moviesData])



    return (
        <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E", marginBottom: "50px" }}>
            <Card.Body style={{ padding: "0" }}>
                <div className="card-title">
                    <h3>Movie List</h3>
                    <p>Welcome admin you can update and delete movie </p>
                </div>
                <div className="list-movie">
                    <ol>
                        {movie.map((movie, idx) => {
                            return <li key={idx} ><CardListMovie title={movie.title} /></li>
                        })}
                    </ol>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ListMovie;