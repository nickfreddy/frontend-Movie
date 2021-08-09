import React, { useEffect, useState } from 'react';
import { Button, Navbar, Card, Form, Container, Row, Col, Modal } from 'react-bootstrap'
import back_button from '../../img/back-button.png'
import '../Profile-page/index.css'
// import user from '../../img/user.png'
// import logo from '../../img/brand-logo.png'
import axios from 'axios';
import Photo from '../../pages/DetailPages/Photo';

const ProfilePage = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [show, setShow] = useState(false);
    const USERID = localStorage.getItem('USERID');
    const Token = localStorage.getItem('Token');
    const refreshPage = () => {
        window.location.reload();
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [user, setUser] = useState([])

    const GetUserData = async (url) => {
        try {
            const res = await axios.get(url);
            const data = await res.data;
            setUser(data)
            //declare variable to save the data
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        GetUserData(`https://demovie.gabatch13.my.id/users/${USERID}
        `);
    }, [USERID])

    console.log(user)

    const [state, setState] = useState({
        photo: null,
        username: user.username,
        email: user.email,
        description: user.description
    })


    
    const add = async (e) => {
        e.preventDefault()
        try {
            // eslint-disable-next-line no-unused-vars
            const res = await axios.put(`https://demovie.gabatch13.my.id/users/${USERID}`, state, { headers: { Authorization: `Bearer ${Token}` } }); (alert(`Profile Updated`)); refreshPage();
        } catch (error) {
            console.log({ error })
        }
    }

    // const [photo, setPhoto] = useState({
    //     photo: null,
       
    // })

    // const handleImageChange = (e) => {
    //     setPhoto({photo: e.target.files[0]
    //     })
    //   };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        let form_data = new FormData();
        form_data.append('photo', this.state.photo, this.state.photo.name);
    
        let url = `https://demovie.gabatch13.my.id/users/${USERID}`;
        axios.put(url, form_data, {
          headers: { Authorization: `Bearer ${Token}` }
        })
            .then(res => {
              console.log(res.data);
            })
            .catch(err => console.log(err))
      };


   
    return (
        <div>
            <div className="back-header">
                <div className="back-button p-3">
                    <Navbar.Brand className="ms-4" href="/">
                        <img
                            src={back_button}
                            width="50"
                            height="50"
                            className="back d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </div>
            </div >
            <div className="Profile-page d-flex justify-content-between ">
                <Container className='d-flex justify-content-center'>
                    <Row>
                        <Col xs={12} lg={3} md={4} >
                            <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E" }}>
                                <Card.Body style={{ padding: "0" }}>
                                    <div className="card-title">
                                        <h3>Setting</h3>
                                        <p>Customize profile pitcure and profile</p>
                                    </div>
                                    <div className="button-profile">
                                        <h5>Profile</h5>
                                    </div>
                                    <div className="button-profile watchlist" style={{color:'red',}}>
                                        <h5>Delete Account</h5>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} xs={12} lg={6} md={8} >
                            <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E" }}>
                                <Card.Body style={{ padding: "0" }}>
                                    <div className="card-title">
                                        <h3>Edit Profile</h3>
                                        <p>Change profile information</p>
                                    </div>
                                    <Form style={{ padding: "1rem 1rem 2rem 2.5rem" }}>
                                        <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                                            <Form.Label style={{ width: "30%" }} >Full Name</Form.Label>
                                            <Form.Control value={state.username} onChange={(a) => setState({ ...state, username: a.target.value })} type="text" placeholder="Full Name" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                                            <Form.Label style={{ width: "30%" }}>Email address</Form.Label>
                                            <Form.Control value={state.email} onChange={(a) => setState({ ...state, email: a.target.value })} type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 d-flex" controlId="formBasicDescription">
                                            <Form.Label style={{ width: "30%" }}>Description</Form.Label>
                                            <Form.Control value={state.description} onChange={(a) => setState({ ...state, description: a.target.value })} type="text" placeholder="description" />
                                        </Form.Group>

                                        {/* <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                                            <Form.Label style={{ width: "30%" }}>Descriptioon</Form.Label>
                                            <Form.Control value={state.description} onChange={(e) => setState({ ...state, description: e.target.value })} type="text" placeholder="description" />
                                        </Form.Group> */}
                                        <div className="button-submit">
                                            <Button href="/" style={{ width: "100px", height: "40px", marginRight: "20px" }} variant="secondary" type="reset">
                                                Cancel
                                            </Button> 
                                            <Button onClick={add}  style={{ width: "100px", height: "40px" }} variant="warning" >
                                                Update
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col lg={3} md={12} style={{alignItems:"center"}}>
                            <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E" }}>
                                <Card.Body style={{ display:'flex', flexDirection:'column', padding: "0", alignItems:"center" }}>
                                    <div className="card-title">
                                        <h3>{user.username}</h3>
                                        <p>{user.description}</p>
                                        <p>Customize profile pitcure</p>
                                    </div>
                                    <div className="profile-pitcure">
                                        <img
                                            src={user.photo}
                                            width="200"
                                            height="200"
                                            className="d-inline-block align-top m-3"
                                            alt="React Bootstrap logo"
                                        />
                                        <div className="input-image">






                                        <Button style={{ fontWeight: "500", color: "black" }} variant="secondary text-light me-1 m-nokay" style={{maxWidth: '8rem'}} onClick={handleShow}>Upload Photo</Button>





                                        <Modal className="mt-5" show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
Choose your Great Photo               
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Photo setShow={setShow} />
        </Modal.Body>
           
                
            </Modal>


                                        {/* <form onSubmit={handleSubmit}>
         
                                            <p>
                                            <input type="file"
                                                    id="photo"
                                                    accept="image/png, image/jpeg" value={state.photo} onChange={(a) => setState({...state, photo: a.target.files[0] })} />
                                            </p>
                                            <input type="submit"/>
                                        </form> */}
                                        {/* onChange={handleImageChange} */}
                                        
                                            {/* <Form>
                                            <Form.Group controlId="formFile" className="mb-3 ">
                                                <Form.Control id="photo" type="file" accept="image/png, image/jpeg" value={statePhoto.photo} onChange={(e) => setPhoto({ photo: e.target.files[0] })}/>
                                            </Form.Group>
                                            <Button onClick={photo}  style={{ width: "100px", height: "40px" }} variant="warning" >Photo</Button>

                                            </Form> */}
                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
            {/* <div className="footerprofile bg-secondary">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top m-3"
                    alt="React Bootstrap logo"
                />
                <h3>deMovie</h3>
            </div> */}
        </div >
    );
};

export default ProfilePage;