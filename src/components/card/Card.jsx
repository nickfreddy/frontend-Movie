import React from 'react'


function Card(props) {
    const { title, img, category } = props;

    return (        
        <div className="card my-3 skala width">
            <img src={img} className="card-img-top " alt="..."/>
                    
            <div className="card-body">
                <h6>{title}</h6>
                <p className="m-0">{category}</p>
            </div>
        </div>
    )
}     
        


export default Card
