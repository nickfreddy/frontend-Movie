import React from "react";
import { Figure, Container ,Row, Col, Card} from 'react-bootstrap';
import user from '../../img/user.png'

const CommentCard = (props) => {
  const { userID, comment, photo } = props;
  const imgSrc= '../../img/user.png';

  return (

  <>
    

    <Container style={{display:'flex', }}>
        <Col lg={1} md={2}>
        <Figure.Image width={171} height={180} alt={imgSrc} src={photo} />
        </Col>
        <Col>
        <Card border="light" style={{ maxWidth: '70rem' }}>
            <Card.Header>{userID}</Card.Header>
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