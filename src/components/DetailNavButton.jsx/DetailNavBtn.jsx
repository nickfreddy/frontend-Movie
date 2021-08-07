import React from 'react'
import { Button, Container ,Row, Col} from 'react-bootstrap';
import { useParams } from "react-router-dom";
// import '../categoryButton/CategoryButton.css'
// import CategoryButton from '../categoryButton/CategoryButton';


function DetailNavBtn() {
    const {id} = useParams();
console.log(id)
    return (
        <div>
            <Container className='NavButton' style={{marginTop:'2rem', marginBottom:'1rem'}}>
            <Row>
                <Col className='LinkBtn' lg={8} md={7} xs={8} >
                
                <a href={`/DetailPage/${id}`}>
                    <Button variant="Link" > Overview </Button>
                </a>
                <a href={`/DetailPage/Character/${id}`}>
                    <Button variant="Link"> Character </Button>
                </a>
                <a href={`/DetailPage/Review/${id}`}>
                    <Button variant="Link"> Review </Button>
                </a>
                </Col>
                <Col  xs={3} md={2} lg={1}>

                </Col>
                <Col xs={1} lg={3} md={3} className='submitBtn'>
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
