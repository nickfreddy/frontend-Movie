import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../img/brand-logo.png'

function ModalSignIn() {
    return (
        <div>
            <Form className="d-flex justify-content-center bg-light rounded-3" >
                    <div style={{height: '30rem'}}>

                        <Form.Group className="d-flex mt-3 justify-content-center">
                            <img  src={logo} style={{width: '50px'}} />
                            <h2 className="mt-auto">deMovie</h2>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" style={{width: '25rem'}} />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" style={{width: '25rem'}} />
                        </Form.Group>

                        <Form.Group>
                            <Button className="mt-4" variant="primary" type="submit" style={{width: '25rem'}}>
                                SIGN IN
                            </Button>
                            <p className="text-center mt-3">Don't have an account ? <Link to='/' className=" text-warning">Sign Up</Link></p>
                        </Form.Group>
                    </div>

                </Form>
        </div>
    )
}

export default ModalSignIn
