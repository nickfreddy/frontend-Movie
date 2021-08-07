import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import axios from 'axios'
import Card from '../../components/card/Card'
import CategoryButton from '../../components/categoryButton/CategoryButton'
import './homepage.css'
import Search from '../../components/Search/search'
import Navbar_notSign from '../../components/header/Navbar_notSign'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadMovies } from '../../redux/action/movie'
import { searchMovieRdx } from '../../redux/action/search'
import MyPagination from '../../components/pagination/MyPagination'
import noResultFound from '../../components/noResultFound/noResultFound'








function Homepage() {
    const moviesData = useSelector(state => state.movies.data)
    // const searchData = useSelector(state => state.search.data)

    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(loadMovies())
        
    }, []);

    useEffect(() => {
        setMovies(moviesData)
    }, [moviesData]);


    const resetFilter = () => {
        setMovies(movies)
    }

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

    const handleFilterButton = (e) => {
        let word = e.target.value
        console.log(word)

        // const filteredData = movies.filter(movie => movie.vote_count > word)
        // // console.log(filteredData)
        // setMovies(filteredData)
        // resetFilter();
        setLoading(true);
        setErrorMessage(null);

        if ( word === 'all') {
           return setMovies(moviesData)
        };

        axios.get(`https://demovie.gabatch13.my.id/movies/genres/${word}?page=1&limit=0`)
            .then(response => response.data)
            .then(res => res.dataMovie)
            .then(jsonResponse => {
                setMovies(jsonResponse);
                setLoading(false);
            });
    };


    // const search = async (searchValue) => {
    //     // console.log(searchValue)
    //     setLoading(true);
    //     setErrorMessage(null);

    //     axios.get(`https://demovie.gabatch13.my.id/movies/search?title=${searchValue}&page=1&limit=5`)
    //     try {
    //         const movies = await axios.get(`https://demovie.gabatch13.my.id/movies/search?title=${searchValue}&page=1&limit=5`);
    //         const dataResults = await movies.data;
    //         const data = await dataResults.dataMovie;
    //         setMovies(data)
    //         console.log(data)
    //     } catch (error) {setMovies([])}
    // };

    console.log(movies)

    const backdrops = [
        'https://image.tmdb.org/t/p/original/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg',
        'https://image.tmdb.org/t/p/original/7WJjFviFBffEJvkAms4uWwbcVUk.jpg',
        'https://image.tmdb.org/t/p/original/8s4h9friP6Ci3adRGahHARVd76E.jpg'
    ]

    return (
        <div>
            {/* <Navbar_notSign /> */}
            {/* -------------------------------------------------- */}
            <Carousel >
                {backdrops.map(backdrop => (
                    <Carousel.Item style={{ height: '25rem' }}>
                        <img
                            className="d-block w-100"
                            src={backdrop}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            {/* --------------------------end carousel---------------------- */}
            <div className="container">
                <h2 className="mt-3">Browse by Category</h2>

                <div className="d-flex">
                    <CategoryButton title={"All"} value={"all"} onClick={handleFilterButton} />
                    <CategoryButton title={"Action"} onClick={handleFilterButton} value={'action'} />
                    <CategoryButton title={"Romances"} onClick={handleFilterButton} value={'romance'} />
                    <CategoryButton title={"Comedy"} onClick={handleFilterButton} value={'comedy'} />
                    <CategoryButton title={"Anime"} onClick={handleFilterButton} value={'anime'} />
                </div>
            </div>

            <div className="container divider my-1 "></div>

            <div className="container d-flex flex-wrap justify-content-around my-1">
                {movies.length > 0 ?  movies.filter((movie, idx) => idx < 20).map( movie =>(
                    <div key={movie.idx}>
                        <Link className="text-decoration-none text-dark" to={`detailPage/${movie._id}`}>
                            <Card className="skala" title={movie.title} img={movie.poster} category={movie.genres.join(', ')} />
                        </Link>
                    </div> 
                    )) : <h1>asxa</h1> }
            </div>
           
            {/* -------------end card------------- */}

            <div className="my-3">
                <MyPagination onclick={handlePagination} />
            </div>

            {/*  ---------------------- */}
        </div>
    )
}

export default Homepage
