import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Card, ListGroup, Row, Table} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Table_User = observer(() => {
    const {table} = useContext(Context)
    const history = useHistory()
    return (
        <Row>
            <ListGroup>
                {table.tables_USER.map(tables =>
                    <ListGroup.Item
                        style={{cursor: 'pointer'}}
                        active={tables.id === table.selectedTable_USER.id}
                        onClick={() => history.push(tables.url)}
                        //onClick={() => table.setSelectedTable(tables)}

                        // onClick={() => table.setSelectedTable(tables)}
                        key={tables.id}
                    >
                        {tables.name}
                    </ListGroup.Item>
                )}
            </ListGroup>
        </Row>

    );
});

export default Table_User;