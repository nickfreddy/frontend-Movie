import React from 'react';
import { Card, Button } from 'react-bootstrap'
import CardListMovie from './CardMovieList';



function ListMovie() {
    return (
        <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E" }}>
            <Card.Body style={{ padding: "0" }}>
                <div className="card-title">
                    <h3>Movie List</h3>
                    <p>Welcome admin you can update and delete movie </p>
                </div>
                <div className="list-movie">
                    <ol>
                        <li><CardListMovie title={"baracuda"} /></li>
                    </ol>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ListMovie;