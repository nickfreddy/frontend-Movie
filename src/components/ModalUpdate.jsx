import React, {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

function ModalUpdate() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
             <Button style={{ fontWeight: "500", color: "black" }} variant="outline-secondary text-primary" onClick={handleShow}>Edit</Button>
             {/* button dipindah ke button edit */}

            <Modal className="mt-5 " show={show} onHide={handleClose}>
            {/* Modal ini di masukan ke halaman supaya modal bisa di show/hide */}


                {/* Form ini disisakan di sini */}
                <Form onSubmit="{add}" className="d-flex justify-content-center bg-info rounded-3" style={{  height: '23rem' }} >
                    <div className="px-5" style={{ width: '45rem' }}>

                        <Form.Group className="d-flex mt-3 justify-content-center">
                            <h2 className="mt-auto">Edit review</h2>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows={7} />
                        </Form.Group>

                        <Form.Group>
                            <Button className="mt-4" variant="primary" type="submit" style={{ width: '25rem' }}>
                                Update
                            </Button>
                        </Form.Group>
                    </div>
                </Form>
                {/* Form ini disisakan di sini */}


            {/* Modal ini di masukan ke halaman supaya modal bisa di show/hide */}
            </Modal>
        </div>
    )
}

export default ModalUpdate
