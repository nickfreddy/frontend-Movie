import React from 'react'
import './Background.css'
import { Button, Badge, Container ,Row, Col} from 'react-bootstrap';
import { Rating } from '@material-ui/lab';


function TitleBackground() {
return (
<>

    <div className='BG-Container'>
        <div className='FullbgImage'
            style={{backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
url("https://gamebrott.com/wp-content/uploads/2019/07/bdd85ff4c1c38757d4ebc68bb3ed510b.jpg")`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',}}>
            <div className="Judul">
                <h1>Judul</h1>
            </div>
            <div>
                <div className='Rating'>
                    <div className="starRating">
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />

                        {/* <p>star review</p> */}
                    </div>
                    <div className="totalReview">
                        <p>xxx review</p>
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
                        <Button style={{color:'white'}} variant="outline-secondary" size='lg'>Add to Watchlist</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    



</>
)
}

export default TitleBackground