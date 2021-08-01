// import {
// BrowserRouter as Router,
// Switch,
// Route,
// Link,
// useParams
// } from "react-router-dom";

import React from 'react'
import TitleBackground from '../../components/DetailBackground/TitleBackground'
import { FloatingLabel, Form , Badge, Button, Figure, Container ,Row, Col, Card} from 'react-bootstrap';
import DetailNavBtn from '../../components/DetailNavButton.jsx/DetailNavBtn';

function Characterpage() {
return (

<>
    <TitleBackground />
    <Container>
    <DetailNavBtn />

    </Container>

    <div>
        <h1>Character</h1>

    </div>
</>
)
}

export default Characterpage