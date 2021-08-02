import React, { useState }  from 'react'
import './Background.css'
import { Modal, Button } from 'react-bootstrap';
// import StarRatings from './react-star-ratings';

// import { Rating } from '@material-ui/lab';


function TitleBackground(props) {
    const { title, poster , trailer, rating, synopsis,} = props;

    const [lgShow, setLgShow] = useState(false);

return (
<>

    <div className='BG-Container'>
        <div className='FullbgImage'
            style={{backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
url${poster}`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',}}>
            <div className="Judul">
                <h1>{title}</h1>
            </div>
            <div>
                <div className='Rating'>
                    <div className="starRating">
                    {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
                    {/* <StarRatings
        rating={2.403}
        starDimension="40px"
        starSpacing="15px"
      /> */}
                    </div>
                    <div className="totalReview">
                        <p>{rating}</p>
                    </div>
                </div>
                <div className='Overview'>
                    <p>{synopsis}</p>
                </div>
                <div className='Tombol'>
                    <Button variant="danger" size='lg' onClick={() => setLgShow(true)}>Watch Trailer</Button>
                    <div className='watchlist-btn'>
                        <Button style={{color:'white'}} variant="outline-secondary" size='lg'>Add to Watchlist</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
       
Judul
          </Modal.Title>
        </Modal.Header>
        <Modal.Body key='ytplayer' style={{maxHeight:'3rem'}}>   <iframe id="ytplayer" type="text/html" class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen frameborder="0">
       </iframe></Modal.Body>
      </Modal>



</>
)
}

export default TitleBackground