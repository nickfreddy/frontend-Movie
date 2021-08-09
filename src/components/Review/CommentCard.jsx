import React from "react";
import { Figure, Container , Col, Card} from 'react-bootstrap';
import StarRatings from "react-star-ratings";

// import user from '../../img/user.png'

const CommentCard = (props) => {
  const { userID, comment, photo, userrating } = props;
  // const imgSrc= '../../img/user.png';

  return (

  <>
    
    <Container style={{display:'flex', margin:'1rem 0 1rem 0', }}>
        <Col lg={1} md={2}>
        <Figure.Image style={{borderRadius:'10px', maxWidth:'5rem'}}  alt={userID} src={photo} />
        </Col>
        <Col>
        <Card border="light"  style={{ maxWidth: '75rem', borderRadius:'10px',}}>
            <Card.Header className="mb-3 d-flex flex-column  "  style={{backgroundColor:'#D6E0E3', borderRadius:'5px'}}>{userID} <StarRatings  rating={userrating} starRatedColor="#E2703A" starDimension="1rem" numberOfStars={5} /></Card.Header>
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