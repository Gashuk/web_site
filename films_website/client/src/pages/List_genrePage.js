import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Nav, Row, Table} from "react-bootstrap";
import Table_admin from "../components/Table_admin";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import CreateList_genre from "../components/modals/modalsList_genre/CreateList_genre";
import AddList_genre from "../components/modals/modalsList_genre/AddList_genre";
import DeleteList_genre from "../components/modals/modalsList_genre/DeleteList_genre";
import {fetchList_genre, fetchList_profession_human} from "../http/compositionAPI";

const List_genrePage = observer(() => {
    const {table} = useContext(Context)

    useEffect(()=>{
        fetchList_genre().then(data => table.setList_genre(data))
    },[])
    const [addList_genreVisible, setAddList_genreVisible] = useState(false)
    const [createList_genreVisible, setCreateList_genreVisible] = useState(false)
    const [deleteList_genreVisible, setDeleteList_genreVisible] = useState(false)

    return (
        <Container className="mt-3" style={{ background: '#3C5B74'}}>
            <Row className="mt-2">
                <Col md={3}>
                    <Table_admin/>
                </Col>
                <Col md={9}>
                    <div> <h2 style={{ color: 'white'}}>Список произвидение/жанр</h2> </div>
                    <div className="d-flex justify-content-md-end align-items-center">
                        <Button variant="outline-info" onClick={()=> setAddList_genreVisible(true)} className="m-2" >Добавить</Button>
                        {table.selectedColList_genreTable ?
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateList_genreVisible(true)} className="m-2" >Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteList_genreVisible(true)} className="m-2">Удалить</Button>
                            </div>
                            :
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateList_genreVisible(true)} className="m-2" disabled>Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteList_genreVisible(true)} className="m-2" disabled>Удалить</Button>
                            </div>

                        }

                    </div>


                    <Table striped bordered hover size="sm" style={{ background: 'white'}}>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Код произведения</th>
                            <th>Произведение</th>
                            <th>Код жанра</th>
                            <th>Жанр</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {table.list_genre.map(list_genre =>
                            <tr>
                                <td>{list_genre.id}</td>
                                <td>{list_genre.compositionId}</td>
                                <td>{list_genre.name_composition}</td>
                                <td>{list_genre.genreId}</td>
                                <td>{list_genre.name_genre}</td>
                                <td><Button
                                    variant="outline-primary" className="mt-2"
                                    onClick={()=> table.setSelectedList_genre(list_genre)}
                                    border={list_genre.id === table.setSelectedList_genre.id ? 'danger' : 'light'}
                                >Выбрать</Button></td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <AddList_genre show={addList_genreVisible} onHide={()=> setAddList_genreVisible(false)}/>
            <CreateList_genre show={createList_genreVisible} onHide={()=> setCreateList_genreVisible(false)}/>
            <DeleteList_genre show={deleteList_genreVisible} onHide={()=> setDeleteList_genreVisible(false)}/>
        </Container>
    );
});

export default List_genrePage;