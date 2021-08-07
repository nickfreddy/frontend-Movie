import { Button, Card, Form } from 'react-bootstrap'
import axios from 'axios';
import React, { useState } from 'react';

function AddMovie() {
    const Token = localStorage.getItem('Token');

    // const refreshPage = () => {
    //     window.location.reload();
    // }

    const [state, setState] = useState({
        title: "Inoki the greet boy",
        genres: "action",
        release_year: "2020",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7ElKH7Ql2MIMvG0SqsGP6Iiwp5e.jpg",
        trailer: "https://www.youtube.com/results?search_query=anatomi+grey+teaser+",
        synopsis: "good movie"
    })

    const add = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`https://demovie.gabatch13.my.id/movies/`, state, { headers: { Authorization: `Bearer ${Token}` } })
            console.log(res)
        } catch (error) {
            console.log({ error })
        }
    }

    return (
        <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E" }}>
            <Card.Body style={{ padding: "0" }}>
                <div className="card-title">
                    <h3>Add Movie</h3>
                    <p>add a new movie </p>
                </div>
                <Form onSubmit={add} style={{ padding: "1px 32px 20px 110px" }}>
                    <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                        <Form.Label style={{ width: "30%" }} >Movie Title</Form.Label>
                        <Form.Control value={state.title} onChange={(e) => setState({ ...state, title: e.target.value })} type="text" placeholder="Title" />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                        <Form.Label style={{ width: "30%" }} >Genre</Form.Label>
                        <Form.Control value={state.genres} onChange={(e) => setState({ ...state, genres: e.target.value })} type="text" placeholder="Action, Anime, Drama, Comedy" />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                        <Form.Label style={{ width: "30%" }} >Release</Form.Label>
                        <Form.Control value={state.release_year} onChange={(e) => setState({ ...state, release_year: e.target.value })} type="text" placeholder="Release date" />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                        <Form.Label style={{ width: "30%" }} >Trailer</Form.Label>
                        <Form.Control value={state.trailer} onChange={(e) => setState({ ...state, trailer: e.target.value })} type="text" placeholder="URL" />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                        <Form.Label style={{ width: "30%" }} >Synopsis</Form.Label>
                        <Form.Control value={state.synopsis} onChange={(e) => setState({ ...state, synopsis: e.target.value })} type="text" placeholder="synopsis" />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                        <Form.Label style={{ width: "30%" }} >Poster</Form.Label>
                        <Form.Control value={state.poster} onChange={(e) => setState({ ...state, poster: e.target.value })} type="text" placeholder="URL" />
                    </Form.Group>


                    <div className="button-submit">
                        <Button style={{ width: "100px", height: "40px", marginRight: "20px" }} variant="secondary" type="reset">
                            Cancel
                        </Button>
                        <Button style={{ width: "100px", height: "40px" }} variant="warning" type="submit">
                            Save
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default AddMovie;