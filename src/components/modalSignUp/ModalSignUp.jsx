import React, { useState } from 'react'
import logo from '../../img/brand-logo.png'
import { Modal, Button, Form } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom'
import ModalSignIn from '../modalSignIn/ModalSignIn'
import axios from 'axios'
import './ModalSignUp.css'
// email: "inokiUser@yahoo.com"
// password: "!Nokiglints13"
// username: "inokiUser"

function ModalSignUp(props) {
    const backtoHome = () => {
        window.location.replace("/");
    };

    const { onClick, setShow } = props;
    const [state, setState] = useState({
        username: "",
        email: "",
        password: ""
    });

    const add = (e) => {
        e.preventDefault()
        if (state.username === "" | state.email === "" | state.password === "") {
            alert("kolom kosong, tolong diisi terlebih dahulu")
            return;
        } else {

            axios.post(`https://demovie.gabatch13.my.id/auth/register`, state).then(res => {
                setShow(false);
                alert(`register sukses`);backtoHome();
            })
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

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control className="width-nokay" value={state.username} onChange={(e) => setState({ ...state, username: e.target.value })} type="name" placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="width-nokay" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="width-nokay" value={state.password} onChange={(e) => setState({ ...state, password: e.target.value })} type="password" placeholder="Password"  />
                    </Form.Group>

                    <Form.Group>
                        <Button className="mt-4 width-nokay" variant="primary" type="submit" >
                            REGISTER
                        </Button>
                        <p className="text-center mt-3">Already have an account ? <a onClick={props.onClick} style={{ cursor: 'pointer' }} className="text-secondary">Sign in</a></p>
                    </Form.Group>
                </div>

            </Form>


            {/* ------------------------ */}



        </div>
    )
}

export default ModalSignUp
