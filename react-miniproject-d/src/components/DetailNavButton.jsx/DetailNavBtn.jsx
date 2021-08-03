import React from 'react'
import { Button, Badge, Container ,Row, Col} from 'react-bootstrap';
import { useParams } from "react-router-dom";


function DetailNavBtn() {
    const {id} = useParams();
console.log(id)
    return (
        <div>
            <Container className='NavButton' style={{marginBottom:'3rem'}}>
            <Row>
                <Col className='LinkBtn' lg={8} md={6} xs={8} >
                
                <a href={`/DetailPage/${id}`}>
                    <Badge pill bg="danger"> Overview </Badge>
                </a>
                <a href={`/DetailPage/Character/${id}`}>
                    <Badge pill bg="danger"> Character </Badge>
                </a>
                <a href={`/DetailPage/Review/${id}`}>
                    <Badge pill bg="danger"> Review </Badge>
                </a>
                </Col>
                <Col md="auto" xs={2} lg={3}>

                </Col>
                <Col xs={1} lg={1} className='submitBtn'>
                <a href='/'>
                    <Badge pill bg="danger"> Submit </Badge>
                </a>

                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default DetailNavBtn
