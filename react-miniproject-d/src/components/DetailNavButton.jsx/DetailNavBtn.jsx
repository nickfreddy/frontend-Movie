import React from 'react'
import { Button, Badge, Container ,Row, Col} from 'react-bootstrap';


function DetailNavBtn() {
    return (
        <div>
            <Container className='NavButton' style={{marginBottom:'3rem'}}>
            <Row>
                <Col className='LinkBtn' lg={8} md={6} xs={8} >
                
                <a href='/DetailPage'>
                    <Badge pill bg="danger"> Overview </Badge>
                </a>
                <a href='/DetailPage/Character/'>
                    <Badge pill bg="danger"> Character </Badge>
                </a>
                <a href='/DetailPage/Review/'>
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
