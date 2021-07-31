import React from 'react'
import axios from 'axios'

function Card(props) {
    const { title, img } = props;

    return (
        <div className="card my-3" style={{width: '12rem'}}>
            <img src={img} classNameName="card-img-top" alt="..."/>
                
            <div className="card-body">
                <h3>{title}</h3>
                <h5>category</h5>
            </div>
        </div>
        
    )
}

export default Card
