import React from 'react'
import './CategoryButton.css'

function CategoryButton(props) {
    
    const { title, value, onClick } = props;

    

    return (
        <div>
            <button type="button" className="btnNokay me-2" value={props.value} onClick={props.onClick}>{props.title}</button>
        </div>
    )
}

export default CategoryButton
