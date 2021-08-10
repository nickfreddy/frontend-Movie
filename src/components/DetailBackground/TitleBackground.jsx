import React, { useState } from 'react'
import './Background.css'
import { Modal, Button, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
// import Rating from 'react-rating';
import StarRatings from "react-star-ratings";
// import Rating from '@material-ui/lab/Rating';
// import ReactStars from "react-rating-stars-component";


function TitleBackground(props) {
const { title, poster, trailer, rating, synopsis, } = props;

const [lgShow, setLgShow] = useState(false);
// console.log(rating)
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
                    <div className='Rating '>
                        <div className="starRating me-3" style={{display:'flex', alignItems:'center'}}>
                        {/* <ReactStars
                            count={5}
                            value={rating}
                            edit={false}
                            // onChange={ratingChanged}
                            
                        /> */}

                       {rating === 0 ? <StarRatings style={{display:'flex', alignItems:'center', marginRight:'1rem'}} rating={1} starRatedColor="#FFD700" starDimension="2rem" numberOfStars={1}/> : <StarRatings style={{display:'flex', alignItems:'center', marginRight:'1rem'}} rating={rating} starRatedColor="#FFD700" starDimension="2rem" numberOfStars={5} /> }  
                       
                        </div>
                        <div className="totalReview m-0" style={{display:'flex', alignItems:'center', marginLeft:'1rem'}}>
                            <div style={{display:'flex', alignItems:'center', }}>{ rating === 0 ? ('-'+'/5')  : rating }</div>
                        </div>
                    </div>
                    <div className='Overview'>
                        <p>{synopsis}</p>
                    </div>
                    <div className='Tombol'>
                        <Button variant="warning" size='lg' onClick={() => setLgShow(true)}>Watch Trailer</Button>
                        <div className='watchlist-btn'>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Coming Soon</Tooltip>}>
  <span className="d-inline-block">
    <Button variant="outline-secondary"  size='lg' disabled style={{ pointerEvents: 'none', color: 'white'}}>
    Add to Watchlist
    </Button>
  </span>
</OverlayTrigger>


                        {/* <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
                        
                            <Button style={{ color: 'white', pointerEvents: 'none' }} variant="outline-secondary" size='lg' disabled>Add to Watchlist</Button>
                       
                        </OverlayTrigger> */}
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