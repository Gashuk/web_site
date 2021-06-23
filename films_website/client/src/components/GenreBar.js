import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const GenreBar = observer(() => {
    const {composition} = useContext(Context)
    return (
        <Row className="d-flex ">
            {composition.genre.map(genre =>
            <Card
                style={{cursor: 'pointer'}}
                key={genre.id}
                className="p-3"
                onClick={()=> composition.setSelectedGenre(genre)}
                border={genre.id === composition.selectedGenre.id ? 'danger' : 'light'}
            >
                {genre.name}
            </Card>
            )}
        </Row>
    );
});

export default GenreBar;