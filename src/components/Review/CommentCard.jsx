import React from "react";
import { Figure, Container , Col, Card} from 'react-bootstrap';
// import user from '../../img/user.png'

const CommentCard = (props) => {
  const { userID, comment, photo } = props;
  // const imgSrc= '../../img/user.png';

  return (

  <>
    
    <Container style={{display:'flex', margin:'1rem 0 1rem 0', }}>
        <Col lg={1} md={2}>
        <Figure.Image style={{borderRadius:'10px', maxWidth:'5rem'}}  alt={userID} src={photo} />
        </Col>
        <Col>
        <Card border="light"  style={{ maxWidth: '75rem', borderRadius:'10px',}}>
            <Card.Header style={{backgroundColor:'#D6E0E3'}}>{userID}</Card.Header>
            <Card.Body >
                <Card.Text>
                    {comment}
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>

    </Container>
    </>
  );
};
export default CommentCard;