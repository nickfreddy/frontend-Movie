import './Background.css'
import { Button, Badge, Container, Row, Col } from 'react-bootstrap';
import React from 'react'
import './DetailPage.css'
import TitleBackground from '../../components/DetailBackground/TitleBackground';
import DetailNavBtn from '../../components/DetailNavButton.jsx/DetailNavBtn';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { postReview } from '../../redux/action/postReview';
// import { GetDetail } from '../../redux/action/details';
// import { loadMovie } from '../../redux/action/load-movie';
import { useDispatch, useSelector } from "react-redux";
// import { GetDetail } from "../../redux/action/details"


function Detailpage() {
    const { id } = useParams();
    console.log(id)

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

    console.log(detail)
    let link = detail.trailer
    console.log(link)

    function sanitizeYTLink(link) {
        return link.includes("watch")
            ? `https://www.youtube.com/embed/${link.split("=")[1]}`
            : `https://www.youtube.com/embed/${link.split("/")[3]}`;
    };


    return (
        <>
            <TitleBackground synopsis={detail.synopsis} title={detail.title} poster={detail.poster}
                rating={detail.averageRating === null ? `Unrated` : detail.averageRating} trailer={detail.trailer ?
                    sanitizeYTLink(link) : `null`} />


            <div className="PageContainer">


                <Container>
                    <DetailNavBtn />

                    <div className='SynopContainer'>
                        <h1>Synopsis</h1>
                        <div className='LineContainer' style={{ color: 'white' }}>
                            line
                            <div className='Line'></div>
                        </div>
                    </div>
                    <div>
                        <p> {detail.synopsis} </p>
                    </div>

                    <div className='MovContainer'>
                        <h1>Movie Info</h1>

                        <div className='LineContainer' style={{ color: 'white' }}>
                            line
                            <div className='Line'></div>
                        </div>
                    </div>
                    <div className='infoDetail'>
                        <p>Release Year : {detail.release_year} </p>
                        <p>Rating : {detail.averageRating === null ? `Unrated` : detail.averageRating}</p>
                        <p>Genre : {detail?.genres}</p>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Detailpage