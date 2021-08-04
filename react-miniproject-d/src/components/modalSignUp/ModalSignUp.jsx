import React, { useState } from 'react'
import logo from '../../img/brand-logo.png'
import { Modal, Button, Form } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom'
import ModalSignIn from '../modalSignIn/ModalSignIn'



function ModalSignUp(props) {

    const {onClick} = props;
    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    });

    const add = (e) => {
        e.preventDefault()
        if(state.name === "" | state.email === "" | state.password === ""){
          alert("kolom kosong, tolong diisi terlebih dahulu")
          return;
        }
    }
    

    return (
        <div>
               
                <Form onSubmit={add} className="d-flex justify-content-center bg-info rounded-3" >
                    <div style={{height: '30rem'}}>

                        <Form.Group className="d-flex mt-3 justify-content-center">
                            <img  src={logo} style={{width: '50px'}} />
                            <h2 className="mt-auto">deMovie</h2>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control value={state.name} onChange={(e) => setState({name: e.target.value})} type="name" placeholder="Full Name" style={{width: '25rem'}} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={state.email} onChange={(e) => setState({email: e.target.value})} type="email" placeholder="Enter email" style={{width: '25rem'}} />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={state.password} onChange={(e) => setState({password: e.target.value})} type="password" placeholder="Password" style={{width: '25rem'}} />
                        </Form.Group>

                        <Form.Group>
                            <Button className="mt-4" variant="primary" type="submit" style={{width: '25rem'}}>
                                SIGN UP
                            </Button>
                            <p className="text-center mt-3">Already have an account ? <a onClick={props.onClick} style={{cursor: 'pointer'}} className="text-warning">Log in</a></p>
                        </Form.Group>
                    </div>

                </Form>
            

            {/* ------------------------ */}
            
                 
           
        </div>
    )
}

export default ModalSignUp
