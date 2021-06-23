import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useHistory} from "react-router-dom";
import {ListGroup} from "react-bootstrap";

const Table_admin = observer(() => {
    const {table} = useContext(Context)
    const history = useHistory()

    return (
        <ListGroup className={"m-2"}>
            {table.tables.map(tables =>
                <ListGroup.Item
                    style={{cursor: 'pointer', background: '#A3ACB1', color: 'white',}}
                    active={tables.id === table.selectedTable.id}
                    onClick={() => history.push(tables.url)}
                    //onClick={() => table.setSelectedTable(tables)}

                    // onClick={() => table.setSelectedTable(tables)}
                    key={tables.id}
                >
                    {tables.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    // onClick={() => history.push(table.url)}
        // <ListGroup>
        //     <ListGroup.Item
        //         style={{cursor: 'pointer'}}
        //         active={1 === table.selectedTable.id}
        //         onClick={() => table.setSelectedTable()}
        //     >Произведения</ListGroup.Item>
        //
        //     <ListGroup.Item
        //         style={{cursor: 'pointer'}}
        //         // active={2 === table.selectedTable.id}
        //         onClick={() => table.setSelectedTable()}
        //     >Список жанров</ListGroup.Item>
        //
        //     <ListGroup.Item
        //         style={{cursor: 'pointer'}}
        //         // active={3 === table.selectedTable.id}
        //         onClick={() => history.push(table.setSelectedTable())}
        //     >Жанры</ListGroup.Item>
        //
        //     <ListGroup.Item
        //         style={{cursor: 'pointer'}}
        //         // active={4 === table.selectedTable.id}
        //         onClick={() => table.setSelectedTable()}
        //     >Список произведение/персона/профессия</ListGroup.Item>
        //
        //     <ListGroup.Item
        //         style={{cursor: 'pointer'}}
        //         // active={5 === table.selectedTable.id}
        //         onClick={() => table.setSelectedTable()}
        //     >Список профессия/персона</ListGroup.Item>
        //
        //     <ListGroup.Item
        //         style={{cursor: 'pointer'}}
        //         // active={6 === table.selectedTable.id}
        //         onClick={() => table.setSelectedTable()}
        //     >Профессии</ListGroup.Item>
        //
        //     <ListGroup.Item
        //         style={{cursor: 'pointer'}}
        //         // active={7 === table.selectedTable.id}
        //         onClick={() => table.setSelectedTable()}
        //     >Персоны</ListGroup.Item>
        // </ListGroup>


    );
});

export default Table_admin;