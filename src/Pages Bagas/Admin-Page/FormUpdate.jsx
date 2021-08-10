import React, { useEffect, useState } from 'react';
import { Button, Navbar, Card, Form,  Container, Row, Col, } from 'react-bootstrap'
import back_button from '../../img/back-button.png'
import '../Admin-Page/index.css'
import logo from '../../img/brand-logo.png'
// import example from '../../img/example-movie.png'
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



const FormMovie = (props) => {
    const USERID = localStorage.getItem('USERID');
    const Token = localStorage.getItem('Token');
    const { id } = useParams()


    const history = useHistory()



    const [state, setState] = useState({
        title: "",
        genres: "",
        release_year: "",
        poster: "",
        trailer: "",
        synopsis: ""
    })
    const [detail, setDetail] = useState([])

    const GetDetailMovies = async (url) => {
        try {
            const res = await axios.get(url);
            const data = await res.data;


            setState({
                title: data.data.title,
                genres: data.data.genres.join(),
                release_year: data.data.release_year,
                poster: data.data.poster,
                trailer: data.data.trailer,
                synopsis: data.data.synopsis
            })
            setDetail(
                data.data
            )
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        GetDetailMovies(`https://demovie.gabatch13.my.id/movies/${id}?revlimit=3&revpage=1`);
    }, [id])

    // const [state, setState] = useState({
    //     title: detail.title,
    //     genres: detail.genres,
    //     release_year: detail.release_year,
    //     poster: detail.poster,
    //     trailer: detail.trailer,
    //     synopsis: detail.synopsis
    // })
    const refreshPage = () => {
        window.location.reload();
    }
    const add = async (e) => {
        e.preventDefault()
        try {
            // eslint-disable-next-line no-unused-vars
            const res = await axios.put(`https://demovie.gabatch13.my.id/movies/${id}`, state, { headers: { Authorization: `Bearer ${Token}` } }); (alert(`Movie Updated`));refreshPage();

        } catch (error) {
            console.log({ error })
        }
    }




    return (
        <>
                <div className="footerprofile bg-secondary">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top m-3"
                    alt="React Bootstrap logo"
                />
                <h3>deMovie</h3>
            </div>
        <div>
            <div className="back-header">
                <div className="back-button p-3">
                    <Navbar.Brand className="ms-4" href={`/Admin-page/${USERID}`}>
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
            <div className="Profile-page">
                <Container>
                    <Row>
                        <Col xs={12} lg={4}>
                            <Card style={{ borderRadius: "10px", }}>
                                <Card.Body style={{ padding: "0" }}>
                                    <div className="card-title">
                                        <h3>{detail.title}</h3>
                                        <p>{detail.genres}</p>
                                    </div>
                                    <div className="image-movie md sm">
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                                objectFit: "contain"
                                            }}
                                            src={detail.poster}

                                            // className="d-inline-block align-top"
                                            alt="React Bootstrap logo"
                                        />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ borderRadius: "10px", marginBottom:'5rem' }}>
                                <Card.Body style={{ padding: "0" }}>
                                    <div className="card-title">
                                        <h3>Update Movie</h3>
                                        <p>update a new component movie </p>
                                    </div>
                                    <Form style={{ padding: "1px 32px 20px 2rem"}}>
                                        <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                                            <Form.Label style={{ width: "30%", marginRight:'1rem' }} >Movie Title</Form.Label>
                                            <Form.Control value={state.title} onChange={(e) => setState({ ...state, title: e.target.value })} type="text" placeholder="Title" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                                            <Form.Label style={{ width: "30%", marginRight:'1rem'  }} >Genre</Form.Label>
                                            <Form.Control value={state.genres} onChange={(e) => setState({ ...state, genres: e.target.value })} type="text" placeholder="Action, Anime, Drama, Comedy" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                                            <Form.Label style={{ width: "30%", marginRight:'1rem'  }} >Release</Form.Label>
                                            <Form.Control value={state.release_year} onChange={(e) => setState({ ...state, release_year: e.target.value })} type="text" placeholder="Release date" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                                            <Form.Label style={{ width: "30%", marginRight:'1rem'  }} >Trailer</Form.Label>
                                            <Form.Control value={state.trailer} onChange={(e) => setState({ ...state, trailer: e.target.value })} type="text" placeholder="URL" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                                            <Form.Label style={{ width: "30%", marginRight:'1rem'  }} >Synopsis</Form.Label>
                                            <Form.Control value={state.synopsis} onChange={(e) => setState({ ...state, synopsis: e.target.value })} type="text" placeholder="synopsis" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                                            <Form.Label style={{ width: "30%", marginRight:'1rem'  }} >Poster</Form.Label>
                                            <Form.Control value={state.poster} onChange={(e) => setState({ ...state, poster: e.target.value })} type="text" placeholder="URL" />
                                        </Form.Group>


                                        <div className="button-submit">
                                            <Button style={{ width: "100px", height: "40px", marginRight: "20px" }} variant="secondary" type="reset"
                                                onClick={() => history.push(`/Admin-page/${USERID}`)}>
                                                Cancel
                                            </Button>
                                            <Button onClick={add} style={{ width: "100px", height: "40px" }} variant="warning" type="submit">
                                                Save
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
    
        </div >
        </>
    );
};

export default FormMovie;