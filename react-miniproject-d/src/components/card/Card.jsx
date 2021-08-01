import React from 'react'
import axios from 'axios'

function Card(props) {
    const { title, img, vote } = props;

    return (
        <div className="card my-3" style={{width: '13rem'}}>
            <img src={img} classNameName="card-img-top" alt="..."/>
                
            <div className="card-body">
                <h4>{title}</h4>
                <h5>Vote {vote}</h5>
            </div>
        </div>
        
    )
}

export default Card
