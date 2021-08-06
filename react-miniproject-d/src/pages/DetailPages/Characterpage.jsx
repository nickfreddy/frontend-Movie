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

const number = Math.floor(Math.random() * 30)
const [detail, setDetail] = useState([])

const GetDetailMovies = async (url) => {
try {
const res = await axios.get(url);
const data = await res.data;
setDetail(data.data)
} catch (error) {
console.log(error)
}
}

useEffect(() => {
    GetDetailMovies(`https://demovie.gabatch13.my.id/movies/${id}?revlimit=3&revpage=1`);
    }, [])

const [Actors, setActors] = useState([])

const getActors = async (url) => {
try {
const Actors = await axios.get(url);
const data = await Actors.data;
setActors(data.results)

}catch (error) {
console.log(error)
}
}

useEffect(() => {
getActors(`https://randomuser.me/api/?inc=picture,name&results=${number}`);
}, [])
console.log(Actors)

let link = detail.trailer
console.log (link)

function sanitizeYTLink(link) {
return link.includes("watch")
? `https://www.youtube.com/embed/${link.split("=")[1]}`
: `https://www.youtube.com/embed/${link.split("/")[3]}`;
};

return (

<>
<TitleBackground synopsis={detail.synopsis} title={detail.title} poster={detail.poster}
        rating={detail.averageRating===null ? `Unrated` : detail.averageRating} trailer={detail.trailer ?
        sanitizeYTLink(link) : `null`} />    <Container>
        <DetailNavBtn />
        <h1>Character</h1>

        <div className="container d-flex flex-wrap justify-content-around"> {/* <ul> */}
             
                {Actors.map((item, index)=>{
                return <div key={index}>

                    <Card style={{ width: '8rem', margin:'0rem 1rem 1rem 1rem' }}>
                        <Card.Img variant="top" src={item?.picture?.large} />
                        <Card.Body>
                            <p>{item?.name?.first+ ' ' + item?.name?.last}</p>

                        </Card.Body>
                    </Card>


                </div>
                })}

        </div>
    </Container>

   
</>
)
}

export default Characterpage