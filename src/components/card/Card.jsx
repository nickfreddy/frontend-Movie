import React from 'react'


function Card(props) {
    const { title, img, category } = props;

    return (        
        <div className="card shadow my-3 skala width"   >
            <img src={img} className="card-img-top " alt="..."/>
                    
            <div className="card-body">
                <h6>{title}</h6>
                <p className="m-0">{category}</p>
            </div>
        </div>
    )
}     
        
// style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E"}}

export default Card
