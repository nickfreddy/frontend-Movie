import React, { useEffect, useState } from 'react'
import { Carousel, Pagination } from 'react-bootstrap'
import axios from 'axios'
import Card from '../../components/card/Card'
import CategoryButton from '../../components/categoryButton/CategoryButton'
import './homepage.css'
import Search from '../../components/Search/search'
import {Link, useParams} from 'react-router-dom'



function Homepage() {
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMoviesAll = async (url) => {
            try {
                const movies = await axios.get(url);
                const dataResults = await movies.data;
                const data = await dataResults.results;
                setMovies(data)
                // console.log(data)
            } catch (error) {
                console.log(error)
            }
        };

        getMoviesAll("https://api.themoviedb.org/3/movie/now_playing?api_key=ba4ce5d35b9081ae360eeb355f0acda9")
    }, []);



    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    };





    const handleFilterButton = (e) => {
        let word = e.target.value
        console.log(word)

        const filteredData = movies.filter(movie => movie.vote_count > word)
        // console.log(filteredData)
        setMovies(filteredData)

    }

    const search = searchValue => {
        console.log(searchValue)
        setLoading(true);
        setErrorMessage(null);

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ba4ce5d35b9081ae360eeb355f0acda9&language=en-US&query=${searchValue}&page=1&include_adult=false`)
            .then(response => response.data)
            .then(res => res.results)
            .then(jsonResponse => {
                setMovies(jsonResponse);
                setLoading(false);
            });
    };
    console.log(movies)

    return (
        <div>
            {/* -------------------------------------------------- */}
            <Carousel >
                {movies.filter((movie, idx) => idx < 3).map(movie => (
                    <Carousel.Item style={{ height: '30rem' }}>
                        <img
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            {/* --------------------------end carousel---------------------- */}
            <div className="container">
                <h2 className="mt-3">Browse by Category</h2>

                <div className="d-flex">
                    <CategoryButton title={"All"} />
                    <CategoryButton title={"Action"} onClick={handleFilterButton} value={700} />
                    <CategoryButton title={"Romances"} onClick={handleFilterButton} value={1000} />
                    <CategoryButton title={"Comedy"} />
                    <CategoryButton title={"Anime"} />
                </div>
            </div>

            <div className="container divider my-1"></div>

            <div className="container d-flex flex-wrap justify-content-between my-1">
                {movies.filter((movie, idx) => idx < 20).map( movie =>(
                    <Link className="text-decoration-none text-dark" to="/detailPage/:id"><Card className="skala" title={movie.title} img={`https://image.tmdb.org/t/p/original${movie.poster_path}`} vote={movie.vote_average}/></Link>
                    ))}
            </div>
            {/* -------------end card------------- */}

            <div className="mt-1">
                <Pagination className="justify-content-center">{items}</Pagination>
            </div>

            {/*  ---------------------- */}
            <div className="d-flex justify-content-center">
                <Search search={search} />
            </div>
            
        </div>
    )
}

export default Homepage
