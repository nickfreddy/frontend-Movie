import React, { useState } from 'react'
import logo from '../../img/brand-logo.png'
import { Modal, Button, Form } from 'react-bootstrap'

function ModalSignIn() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

        {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button> */}

            <Modal className="mt-5" show={show} onHide={handleClose}  >
               
                <Form className="d-flex justify-content-center bg-light rounded-3" >
                    <div style={{height: '30rem'}}>

                        <Form.Group className="d-flex mt-3 justify-content-center">
                            <img  src={logo} style={{width: '50px'}} />
                            <h2 className="mt-auto">deMovie</h2>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="name" placeholder="Full Name" style={{width: '25rem'}} />
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
                            <Button className="mt-4" variant="danger" type="submit" style={{width: '25rem'}}>
                                Submit
                            </Button>
                            <p className="text-center mt-3">Already have an account ? <span className="text-danger">Log in</span></p>
                        </Form.Group>
                    </div>

                </Form>
            </Modal>

            {/* ------------------------ */}
            {/* <div className="card  bg-light mx-auto" style={{width: '30rem', height: '30rem'}}>

                <div className="d-flex mx-auto my-3">
                    <img  src={logo} style={{width: '50px'}} />
                    <h2 className="mt-auto">deMovie</h2>
                </div>

                <form className="mx-auto">
                    <div >
                        <div class="form-group my-3" style={{width: '25rem'}}>
                            <label for="exampleInputName">Full Name</label>
                            <input class="form-control" type="text" placeholder="Full Name"/>
                        </div>

                        <div class="form-group my-3" style={{width: '25rem'}}>
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>

                        <div className="form-group my-3" style={{width: '25rem'}}>
                            <label for="exampleInputEmail1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>

                        <div className="my-5">
                            <button style={{width: '25rem'}} type="button" class="btn btn-danger">Sign Up</button>
                            <p className="text-center mt-3">Already have an account ? <span className="text-danger">Log in</span></p>
                        </div>
                    </div>

                </form>

            </div> */}
        </div>
    )
}

export default ModalSignIn
