import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import img2 from '../Img/image2.jpg'
// import img3 from '../Img/image3.jpg'
import Card from '../../components/card/Card'
import CategoryButton from '../../components/categoryButton/CategoryButton'
import ModalSignIn from '../../components/modalSignIn/ModalSignIn'


function Homepage() {
    const [movies, setMovies] = useState([])


    useEffect(() => {
      getMoviesAll("https://jsonplaceholder.typicode.com/photos")
    }, [])

    const getMoviesAll = async (url) => {
        try {
            const movies = await axios.get(url);
            const data = await movies.data;
            setMovies(data)
            
        }catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <ModalSignIn/>
            {/* -------------------------------------------------- */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        {/* <img src={img2} className="d-block w-100" alt="..."/> */}
                    </div>

                    <div className="carousel-item">
                        {/* <img src={img3} className="d-block w-100" alt="..."/> */}
                    </div>

                    {/* <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."/>
                    </div> */}

                </div>
            
            </div>
        {/* --------------------------end carousel---------------------- */}
            <div className="container">
                <h2 className="">Browse by Category</h2>

                <div className="d-flex">
                    <CategoryButton title={"anime"}/>
                    <CategoryButton title={"anime"}/>
                    <CategoryButton title={"anime"}/>
                    <CategoryButton title={"anime"}/>
                </div>
            </div>
        {/* -------------------------------end browse category-------------- */}
            {/* {movies.filter((movie, idx) => idx < 10).map( movie =>(
                <div>
                    <img src={movie.thumbnailUrl}/>
                    <h6>{movie.title}</h6>
                </div>
            ))} */}
            <div className="container d-flex flex-wrap justify-content-around">
                {movies.filter((movie, idx) => idx < 10).map( movie =>(
                <a href='/DetailPage'>   <Card title={movie.title} img={movie.thumbnailUrl}/></a>
                    ))}
            </div>

        </div>
    )
}

export default Homepage
