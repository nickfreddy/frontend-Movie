import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import './MyPagination.css'

function MyPagination(props) {
    const { onclick } = props;
    return (
        <div className="d-flex justify-content-center">
            <ButtonGroup aria-label="Basic example">
                <Button variant="primary disabled" ></Button>
                <Button variant="outline-primary btnNokai" onClick={onclick} value='1'>1</Button>
                <Button variant="outline-primary btnNokai" onClick={onclick} value='2'>2</Button>
                <Button variant="outline-primary btnNokai" onClick={onclick} value='3'>3</Button>
                <Button variant="primary disabled" ></Button>
            </ButtonGroup>
        </div>
    )
}

export default MyPagination
