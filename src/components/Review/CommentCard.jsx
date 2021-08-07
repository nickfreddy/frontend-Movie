import React from "react";
import { Figure, Container ,Row, Col, Card} from 'react-bootstrap';
import user from '../../img/user.png'

const CommentCard = (props) => {
  const { userID, comment, photo } = props;
  const imgSrc= '../../img/user.png';

  return (

  <>
    

    <Container style={{display:'flex', margin:'1rem 0 1rem 0', }}>
        <Col lg={1} md={2}>
        <Figure.Image style={{borderRadius:'10px'}} width={100} height={100} alt={imgSrc} src={photo} />
        </Col>
        <Col>
        <Card border="light" bg-info style={{ maxWidth: '70rem', borderRadius:'10px' }}>
            <Card.Header className='bg-info' >{userID}</Card.Header>
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