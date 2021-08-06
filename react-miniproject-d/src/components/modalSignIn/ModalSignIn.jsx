import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../img/brand-logo.png'
import axios from 'axios'



function ModalSignIn(props) {
    const { onClick, setShow } = props;

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const add = (e) => {
        e.preventDefault()
        if (state.email === "" | state.password === "") {
            alert("kolom kosong, tolong diisi terlebih dahulu")
            return;
        } else {

<<<<<<< HEAD
            axios.post(`https://demovie.gabatch13.my.id/auth/login`, state).then(res => {setShow(false);
        localStorage.setItem('Token', res.data.token);localStorage.setItem('USERID', res.data._id)}) 
=======
            axios.post(`https://demovie.gabatch13.my.id/auth/login`, state).then(res => {
                setShow(false);
                localStorage.setItem('Token', res.data.token); localStorage.setItem('USERID', res.data._id)
            })
>>>>>>> f69f97de36a91ed67af457f4146044d36d030770
        }
    }

    return (
        <div>
            <Form onSubmit={add} className="d-flex justify-content-center bg-info rounded-3" >
                <div style={{ height: '30rem' }}>

                    <Form.Group className="d-flex mt-3 justify-content-center">
                        <img src={logo} style={{ width: '50px' }} />
                        <h2 className="mt-auto">deMovie</h2>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setState({ ...state, email: e.target.value })} style={{ width: '25rem' }} />
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setState({ ...state, password: e.target.value })} style={{ width: '25rem' }} />
                    </Form.Group>

                    <Form.Group>
                        <Button className="mt-4" variant="primary" type="submit" style={{ width: '25rem' }}>
                            SIGN IN
                        </Button>
                        <p className="text-center mt-3">Don't have an account ? <a onClick={props.onClick} style={{ cursor: 'pointer' }} className=" text-warning">Sign Up</a></p>
                    </Form.Group>
                </div>

            </Form>
        </div>
    )
}

export default ModalSignIn
