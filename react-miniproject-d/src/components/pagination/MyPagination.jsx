import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'

function MyPagination(props) {
    const { onclick } = props;
    return (
        <div className="d-flex justify-content-center">
            <ButtonGroup aria-label="Basic example">
                <Button variant="outline-primary" ></Button>
                <Button variant="outline-primary" onClick={onclick} value='1'>1</Button>
                <Button variant="outline-primary" onClick={onclick} value='2'>2</Button>
                <Button variant="outline-primary" onClick={onclick} value='3'>3</Button>
                <Button variant="outline-primary" ></Button>
            </ButtonGroup>
        </div>
    )
}

export default MyPagination
