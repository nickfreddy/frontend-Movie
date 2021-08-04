import React from 'react'
import { Button, Badge, Container ,Row, Col} from 'react-bootstrap';
import { useParams } from "react-router-dom";
// import '../categoryButton/CategoryButton.css'
// import CategoryButton from '../categoryButton/CategoryButton';


function DetailNavBtn() {
    const {id} = useParams();
console.log(id)
    return (
        <div>
            <Container className='NavButton' style={{marginBottom:'3rem'}}>
            <Row>
                <Col className='LinkBtn' lg={8} md={8} xs={8} >
                
                <a href={`/DetailPage/${id}`}>
                    <Button variant="Link-warning" > Overview </Button>
                </a>
                <a href={`/DetailPage/Character/${id}`}>
                    <Button variant="Link"> Character </Button>
                </a>
                <a href={`/DetailPage/Review/${id}`}>
                    <Button variant="Link"> Review </Button>
                </a>
                </Col>
                <Col md="auto" xs={3} md={2} lg={3}>

                </Col>
                <Col xs={1} lg={1} md={2} className='submitBtn'>
                <a href='/'>
                    <Button variant="Link"> Home Page </Button>
                </a>


                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default DetailNavBtn
