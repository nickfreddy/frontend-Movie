import React from 'react'

function CategoryButton(props) {
    const { title } = props;
    return (
        <div>
            <button type="button" className="btn btn-danger rounded-pill mx-2">{props.title}</button>
        </div>
    )
}

export default CategoryButton
