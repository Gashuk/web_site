import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {composition} = useContext(Context)
    return (
        <ListGroup className={"mt-3"}>
            {composition.types.map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer', background: '#B67929', color: 'white',}}
                    active={type.id === composition.selectedType.id}
                    onClick={() => composition.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;