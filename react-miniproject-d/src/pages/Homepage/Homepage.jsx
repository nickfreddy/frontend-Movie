import React, { useEffect, useState } from 'react'
import { Carousel, Pagination } from 'react-bootstrap'
import axios from 'axios'
// import img2 from '../Img/image2.jpg'
// import img3 from '../Img/image3.jpg'
import Card from '../../components/card/Card'
import CategoryButton from '../../components/categoryButton/CategoryButton'





function Homepage() {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        getMoviesAll("https://api.themoviedb.org/3/movie/now_playing?api_key=ba4ce5d35b9081ae360eeb355f0acda9")
    }, [])

    const getMoviesAll = async (url) => {
        try {
            const movies = await axios.get(url);
            const dataResults = await movies.data;
            const data = await dataResults.results;
            setMovies(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }


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
                <h2 className="">Browse by Category</h2>

                <div className="d-flex">
                    <CategoryButton title={"anime"} />
                    <CategoryButton title={"anime"} />
                    <CategoryButton title={"anime"} />
                    <CategoryButton title={"anime"} />
                </div>
            </div>
            {/* -------------------------------end browse category-------------- */}
            {/* {movies.filter((movie, idx) => idx < 10).map( movie =>(
                <div>
                    <img src={movie.thumbnailUrl}/>
                    <h6>{movie.title}</h6>
                </div>
            ))} */}
            <div className="container d-flex flex-wrap justify-content-between">
                {movies.filter((movie, idx) => idx < 10).map( movie =>(
                   <a href={`/DetailPage/${movie.id}`}> <Card title={movie.title} img={`https://image.tmdb.org/t/p/original${movie.poster_path}`} vote={movie.vote_average}/></a>
                    ))}
            </div>
            {/* -------------end card------------- */}
            <div>
                <Pagination className="justify-content-center">{items}</Pagination>
            </div>

            {/*  ---------------------- */}


        </div>

    )
}

export default Homepage
