import { Modal, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../img/brand-logo.png'
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import './ModalSignIn.css';


function ModalSignIn(props) {
    const { onClick, setShow } = props;
    const refreshPage = () => {
        window.location.reload();
    }
    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const add = (e) => {
        e.preventDefault()
        if (state.movieTitile === "" | state.genre === "" | state.release === "" | state.trailer === "" | state.synopsis === "") {
            alert("kolom kosong, tolong diisi terlebih dahulu")
            return;
        } else {

            axios.post(`https://demovie.gabatch13.my.id/auth/login`, state).then(res => {
                setShow(false);
                localStorage.setItem('Token', res.data.token); localStorage.setItem('USERID', res.data._id); refreshPage();
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

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="width-nokay" type="email" placeholder="Enter email" onChange={(e) => setState({ ...state, email: e.target.value })}/>
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="width-nokay" type="password" placeholder="Password" onChange={(e) => setState({ ...state, password: e.target.value })}/>
                    </Form.Group>

                    <Form.Group>
                        <Button className="mt-4 width-nokay" variant="primary" type="submit" >
                            SIGN IN
                        </Button>
                        <p className="text-center mt-3">Don't have an account ? <a onClick={props.onClick} style={{ cursor: 'pointer' }} className=" text-secondary">Regeister</a></p>
                    </Form.Group>
                </div>

            </Form>
        </div>
    )
}

export default ModalSignIn
