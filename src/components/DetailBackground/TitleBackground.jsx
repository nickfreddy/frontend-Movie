import React, { useState } from 'react'
import './Background.css'
import { Modal, Button, Col } from 'react-bootstrap';
// import StarRatings from "react-star-ratings";
import Rating from '@material-ui/lab/Rating';


function TitleBackground(props) {
    const { title, poster, trailer, rating, synopsis, } = props;

    const [lgShow, setLgShow] = useState(false);
    console.log(rating)
    // let angka = rating?;

    return (
        <>

            <div className='BG-Container'>
                <div className='FullbgImage' style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
url(${poster})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                }}>
                    <div className="Judul">
                        <h1>{title}</h1>
                    </div>
                    <div>
                        <div className='Rating'>
                            <div className="starRating">
                                <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                                {/* <StarRatings rating={rating === null ? rating : null} starRatedColor="#FFD700" starDimension="2rem" numberOfStars={5} /> */}
                            </div>
                            <div className="totalReview">
                                <p>{rating}</p>
                            </div>
                        </div>
                        <div className='Overview'>
                            <p>{synopsis}</p>
                        </div>
                        <div className='Tombol'>
                            <Button variant="warning" size='lg' onClick={() => setLgShow(true)}>Watch Trailer</Button>
                            <div className='watchlist-btn'>
                                <Button style={{ color: 'white' }} variant="outline-secondary" size='lg'>Add to Watchlist</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">

                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body key='ytplayer' style={{ Height: 'auto' }}>
                    <Col className="container d-flex flex-wrap justify-content-around">

                        <iframe width="560" height="315" src={trailer} title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </Col>
                </Modal.Body>
            </Modal>



        </>
    )
}

export default TitleBackground