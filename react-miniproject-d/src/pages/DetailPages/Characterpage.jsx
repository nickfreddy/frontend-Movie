// import {
// BrowserRouter as Router,
// Switch,
// Route,
// Link,
// useParams
// } from "react-router-dom";

import React, { useEffect, useState } from 'react';
import TitleBackground from '../../components/DetailBackground/TitleBackground'
import { Container , Card} from 'react-bootstrap';
import DetailNavBtn from '../../components/DetailNavButton.jsx/DetailNavBtn';
import axios from 'axios';

function Characterpage() {
const number = Math.floor(Math.random() * 10)
const number2 = Math.floor(Math.random() * 20)

// console.log (number)

const [charMale, setCharMale] = useState([])
const [charFemale, setCharFemale] = useState([])


const getCharMale = async (url) => {
try {
const charMale = await axios.get(url);
const data = await charMale.data;
setCharMale(data.results)

}catch (error) {
console.log(error)
}
}

const getCharFemale = async (url) => {
try {
const charFemale = await axios.get(url);
const data = await charFemale.data;
setCharFemale(data.results)

}catch (error) {
console.log(error)
}
}

useEffect(() => {
getCharMale(`https://randomuser.me/api/?results=${number}&gender=male&inc=name,gender,picture`);
getCharFemale(`https://randomuser.me/api/?results=${number2}&gender=female&inc=name,gender,picture`)
}, [])
console.log(charMale)
console.log(charFemale)

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
        <h1>Character</h1>

        <div className="container d-flex flex-wrap justify-content-around"> {/* <ul> */}
                {charMale.map((item, index)=>{
                return <div key={index}>

                    <Card style={{ width: '8rem', margin:'0rem 1rem 1rem 1rem' }}>
                        <Card.Img variant="top" src={item?.picture?.large} />
                        <Card.Body>
                            <p>{item?.name?.first+ " " + item?.name?.last}</p>

                        </Card.Body>
                    </Card>

                </div>
                })}
                {/* </ul> */}
            {/* <ul> */}
                {charFemale.map((item, index)=>{
                return <div key={index}>


                    <Card style={{ width: '8rem', margin:'0rem 1rem 1rem 1rem' }}>
                        <Card.Img variant="top" src={item?.picture?.large} />
                        <Card.Body>
                            <p>{item?.name?.first+ '' + item?.name?.last}</p>

                        </Card.Body>
                    </Card>


                </div>
                })}
                {/* </ul> */}

        </div>
    </Container>

   
</>
)
}

export default Characterpage