import React from 'react'


function Card(props) {
    const { title, img, vote } = props;

    return (        
        <div className="card my-3 skala" style={{width: '13rem', height: '27rem'}}>
            <img src={img} classNameName="card-img-top " alt="..."/>
                    
            <div className="card-body">
                <h6 className="">{title}</h6>
                <p className="m-0">Vote {vote}</p>
            </div>
        </div>
    )
}     
        


export default Card
