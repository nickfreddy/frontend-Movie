import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../redux/action/movie';
import CardListMovie from './CardMovieList';
import { deletemovie } from '../../redux/action/movie';
import MyPagination from '../../components/pagination/MyPagination';
import axios from 'axios';


function ListMovie() {
    const token = localStorage.getItem('Token');
    const moviesData = useSelector(state => state.movies.data);
    const [movie, setMovies] = useState([]);
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(loadMovies())
    }, []);

    useEffect(() => {
        setMovies(moviesData)
    }, [moviesData])

    const handlePagination = (e) => {
        let page = e.target.value;

        axios.get(`https://demovie.gabatch13.my.id/movies?page=${page}&limit=15`)
            .then(response => response.data)
            .then(res => res.dataMovie)
            .then(jsonResponse => {
                setMovies(jsonResponse);
                setLoading(false);
            });
    }



    return (
        <Card style={{ borderRadius: "10px",  marginBottom: "50px" }}>
            <Card.Body style={{ padding: "0" }}>
                <div className="card-title">
                    <h3>Movie List</h3>
                    <p>Welcome admin you can update and delete movie </p>
                </div>
                <div className="list-movie d-flex justify-content-evenly ">
                    <ol>
                        {movie.map((movie, idx) => {
                            return <li key={idx} className="d-flex  justify-content-between my-1" style={{justifyContent:'flex-end'}} >
                                    <Col className='MovieList justify-content-between' md={8} xs={8} lg={8} >
                                <CardListMovie title={movie.title} /></Col>
                                {/* <Col lg={2}></Col> */}
                                <Col className='ButtonList' style={{justifyContent:'flex-end'}} md={4} lg={4} >
                                <div className="button-movie-list "  style={{justifyContent:'flex-end'}}>
                                    <Button variant="primary" className="me-2" href={`/Update-movie/${movie._id}`}>Update</Button>{' '}
                                    <Button variant="warning" onClick={() => dispatch(deletemovie(movie._id, token))}>Delete</Button>{' '}
                                </div>
                                </Col>
                            </li>
                        })}
                    </ol>
                   
                </div>
            </Card.Body>
            <MyPagination onclick={handlePagination} />
        </Card>
    );
}

export default ListMovie;