// import {
// BrowserRouter as Router,
// Switch,
// Route,
// Link,
// useParams
// } from "react-router-dom";

import React, { useEffect, useState } from 'react';
import TitleBackground from '../../components/DetailBackground/TitleBackground'
import { FloatingLabel, Form , Badge, Button, Figure, Container ,Row, Col, Card} from 'react-bootstrap';
import DetailNavBtn from '../../components/DetailNavButton.jsx/DetailNavBtn';
import axios from 'axios';

function Characterpage() {
const number = Math.floor(Math.random() * 20)
// console.log (number)

const [charMale, setCharMale] = useState([])




const getCharMale = async (url) => {
try {
const charMale = await axios.get(url);
const data = await charMale.data;
setCharMale(data.results)

}catch (error) {
console.log(error)
}
}
useEffect(() => {
getCharMale(`https://randomuser.me/api/?results=${number}&gender=male&inc=name,gender,picture`)
}, [])
console.log(charMale)
// console.log (charMale.map((item, index)=>{
// return
// }))

// const data1 = charMale.results
// const nama = data1.name()
// console.log (nama.fisrt)
return (

<>
    <TitleBackground />
    <Container>
        <DetailNavBtn />
        <Container>
            <ul>
                {charMale.map((item, index)=>{
                return <div key={index}>

                    <h3>{item?.name?.first}</h3>

                </div>
                })}
            </ul>
        </Container>
    </Container>

    <div>
        <h1>Character</h1>

    </div>
</>
)
}

export default Characterpage