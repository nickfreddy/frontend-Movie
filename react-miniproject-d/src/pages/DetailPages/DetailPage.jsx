// import {
// BrowserRouter as Router,
// Switch,
// Route,
// Link,
// useParams
// } from "react-router-dom";
import './Background.css'
import { Button, Badge, Container ,Row, Col} from 'react-bootstrap';
import React from 'react'
import './DetailPage.css'
import TitleBackground from '../../components/DetailBackground/TitleBackground';
import DetailNavBtn from '../../components/DetailNavButton.jsx/DetailNavBtn';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";



function Detailpage() {
const {id} = useParams();
console.log(id)

const [detail, setDetail] = useState([])
const [key, setKey] = useState([])
//set var movies

const GetDetailMovies = async (url) => {
try {
const res = await axios.get(url);
const data = await res.data;
setDetail(data)
//declare variable to save the data
} catch (error) {
console.log(error)
}
}

const GetKey = async (url) => {
    try {
    const res = await axios.get(url);
    const data = await res.data;
    setKey(data.results)
    //declare variable to save the data
    } catch (error) {
    console.log(error)
    }
    }

useEffect(() => {
GetDetailMovies(`https://api.themoviedb.org/3/movie/+${id}+?api_key=4c2c9a58431c5b46e098bf4eed17c94b&language=en-US`);
// GetKey(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ba4ce5d35b9081ae360eeb355f0acda9&language=en-US`)
}, [])

useEffect(() => {
    GetKey(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ba4ce5d35b9081ae360eeb355f0acda9&language=en-US`)
    }, [id])

console.log(detail)
console.log(key)
const KEY=(key.slice(0,1));
console.log (KEY)


const backdrop = 'https://image.tmdb.org/t/p/original'

// console.log(TitleBackground)

return (
<>
    <TitleBackground synopsis={detail.overview} title={detail.title} poster={backdrop+detail.backdrop_path} rating={detail.vote_average/2} trailer={`https://www.youtube.com/embed/${KEY.key}`}   />
    {/* */}
    {/* trailer={"https://www.youtube.com/embed/dY29jgV4YYg"} */}
    
    
    

    <div className="PageContainer">
        {/* <h1>{detail.overview}</h1> */}

        {/* <div className='BG-Container'>
            <div className='FullbgImage'
                style={{backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
            url("https://gamebrott.com/wp-content/uploads/2019/07/bdd85ff4c1c38757d4ebc68bb3ed510b.jpg")`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',}}>
                <div className="Judul">
                    <h1>Judul</h1>
                </div>
                <div>
                    <div className='Rating'>
                        <div className="starRating">
                            <p>star review</p>
                        </div>
                        <div className="totalReview">
                            <p>review</p>
                        </div>
                    </div>
                    <div className='Overview'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, tenetur reiciendis laborum
                            animi
                            voluptatum, recusandae hic illum porro quia qui tempore molestiae nemo eos quisquam vel aut
                            quae
                            magnam sapiente?</p>
                    </div>
                    <div className='Tombol'>
                        <Button variant="danger" size='lg'>Watch Trailer</Button>
                        <div className='watchlist-btn'>
                            <Button style={{color:'white'}} variant="outline-secondary" size='lg'>Add to
                                Watchlist</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        <Container>
            <DetailNavBtn />
            {/* <Container className='NavButton'>
                <Row>
                    <Col className='LinkBtn' lg={8} md={6} xs={8}>
                    <a href='/'>
                        <Badge pill bg="danger"> All </Badge>
                    </a>
                    <a href='/'>
                        <Badge pill bg="danger"> Danger </Badge>
                    </a>
                    <a href='/DetailPage/Character/'>
                        <Badge pill bg="danger"> Character </Badge>
                    </a>
                    <a href='/DetailPage/Review/'>
                        <Badge pill bg="danger"> Review </Badge>
                    </a>
                    </Col>
                    <Col md="auto" xs={2} lg={3}>

                    </Col>
                    <Col xs={1} lg={1} className='submitBtn'>
                    <a href='/'>
                        <Badge pill bg="danger"> Submit </Badge>
                    </a>

                    </Col>
                </Row>
            </Container> */}
            {/* <div className='BtnLink'>
                <div className='ButtonList'>
                    <a href='/'>
                        <Badge pill bg="danger"> All </Badge>
                    </a>
                    <a href='/'>
                        <Badge pill bg="danger"> Danger </Badge>
                    </a>
                    <a href='/'>
                        <Badge pill bg="danger"> Character </Badge>
                    </a>
                    <a href='/'>
                        <Badge pill bg="danger"> Review </Badge>
                    </a>

                </div>
                <div className='ButtonSubmit'>
                    <a href='/'>
                        <Badge pill bg="danger"> Submit </Badge>
                    </a>
                </div>

            </div> */}

            <div className='SynopContainer'>
                <h1>Synopsis</h1>
                <div className='LineContainer' style={{color:'white'}}>
                    line
                    <div className='Line'></div>
                </div>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum minus laudantium quasi doloribus
                in et beatae laborum? Ea deleniti repudiandae iste blanditiis illo, architecto unde pariatur porro a
                expedita.
            </div>

            <div className='MovContainer'>
                <h1>Movie Info</h1>

                <div className='LineContainer' style={{color:'white'}}>
                    line
                    <div className='Line'></div>
                </div>
            </div>
            <div className='infoDetail'>
                <p>Release Year : </p>
                <p>Rating : </p>
                <p>Genre : </p>
            </div>



        </Container>
    </div>
</>
)
}

export default Detailpage