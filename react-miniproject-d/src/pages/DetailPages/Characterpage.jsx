// import {
// BrowserRouter as Router,
// Switch,
// Route,
// Link,
// useParams
// } from "react-router-dom";

import React, { useEffect, useState } from 'react';
import TitleBackground from '../../components/DetailBackground/TitleBackground'
import { Container , Card} from 'react-bootstrap';
import DetailNavBtn from '../../components/DetailNavButton.jsx/DetailNavBtn';
import axios from 'axios';
import { useParams } from "react-router-dom";


function Characterpage() {
    const {id} = useParams();

const number = Math.floor(Math.random() * 10)
const number2 = Math.floor(Math.random() * 20)

const [detail, setDetail] = useState([])
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

useEffect(() => {
GetDetailMovies(`https://api.themoviedb.org/3/movie/+${id}+?api_key=4c2c9a58431c5b46e098bf4eed17c94b&language=en-US`)
}, [id])
const backdrop = 'https://image.tmdb.org/t/p/original'


// console.log (number)

const [Actors, setActors] = useState([])


const getActors = async (url) => {
try {
const Actors = await axios.get(url);
const data = await Actors.data;
setActors(data.cast)

}catch (error) {
console.log(error)
}
}


useEffect(() => {
getActors(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=ba4ce5d35b9081ae360eeb355f0acda9&language=en-US`);
}, [])
console.log(Actors)
const ProfPic = 'https://image.tmdb.org/t/p/w500/'
// console.log (charMale.map((item, index)=>{
// return
// }))

return (

<>
<TitleBackground synopsis={detail.overview} title={detail.title} poster={backdrop+detail.backdrop_path} rating={detail.vote_average/2} trailer={`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ba4ce5d35b9081ae360eeb355f0acda9&language=en-US`} />
    <Container>
        <DetailNavBtn />
        <h1>Character</h1>

        <div className="container d-flex flex-wrap justify-content-around"> {/* <ul> */}
                {Actors.map((item, index)=>{
                return <div key={index}>

                    <Card style={{ width: '8rem', margin:'0rem 1rem 1rem 1rem' }}>
                        <Card.Img variant="top" src={ProfPic+item.profile_path} />
                        <Card.Body>
                            <p>{item.name}</p>

                        </Card.Body>
                    </Card>

                </div>
                })}

        {/* <div className="container d-flex flex-wrap justify-content-around"> <ul> */}
                {/* {charMale.map((item, index)=>{
                return <div key={index}>

                    <Card style={{ width: '8rem', margin:'0rem 1rem 1rem 1rem' }}>
                        <Card.Img variant="top" src={ProfPic+item.profile_path} />
                        <Card.Body>
                            <p>{item.name}</p>

                        </Card.Body>
                    </Card>

                </div>
                })} */}
          
                {/* {charFemale.map((item, index)=>{
                return <div key={index}>


                    <Card style={{ width: '8rem', margin:'0rem 1rem 1rem 1rem' }}>
                        <Card.Img variant="top" src={item?.picture?.large} />
                        <Card.Body>
                            <p>{item?.name?.first+ '' + item?.name?.last}</p>

                        </Card.Body>
                    </Card>


                </div>
                })} */}

        </div>
    </Container>

   
</>
)
}

export default Characterpage