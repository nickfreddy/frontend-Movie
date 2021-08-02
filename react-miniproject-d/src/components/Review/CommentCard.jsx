import React from "react";
import { Figure, Container ,Row, Col, Card} from 'react-bootstrap';


const CommentCard = ({ /*postsToRender*/ }) => {return (

  <>
    {/* <ul>
      {postsToRender.map((post, index) => (
        <li key={index}>
          <strong>{post.id}</strong>
          &nbsp;{post.title}
        </li>
      ))}
    </ul> */}

    <Container style={{display:'flex', }}>
        <Col lg={1} md={2}>
        <Figure.Image width={171} height={180} alt="171x180" src="holder.js/171x180" />
        </Col>
        <Col>
        <Card border="light" style={{ maxWidth: '70rem' }}>
            <Card.Header>User Id</Card.Header>
            <Card.Body >
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>

    </Container>
    </>
  );
};
export default CommentCard;