import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Nav, Row, Table} from "react-bootstrap";
import Table_admin from "../components/Table_admin";
import {Context} from "../index";
import CreateGenre from "../components/modals/modalsGenre/CreateGenre";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import AddGenre from "../components/modals/modalsGenre/AddGenre";
import DeleteGenre from "../components/modals/modalsGenre/DeleteGnere";
import {fetchGenre, fetchHuman} from "../http/compositionAPI";

const GenrePage = observer(() => {
    const {table} = useContext(Context)

    useEffect(()=>{
        fetchGenre().then(data => table.setGenre(data))
    },[])
    const [addGenreVisible, setAddGenreVisible] = useState(false)
    const [createGenreVisible, setCreateGenreVisible] = useState(false)
    const [deleteGenreVisible, setDeleteGenreVisible] = useState(false)

    return (
        <Container className="mt-3" style={{ background: '#3C5B74'}}>
            <Row className="mt-2">
                <Col md={3}>
                    <Table_admin/>
                </Col>
                <Col md={9}>
                    <div> <h2 style={{ color: 'white'}}>Жанры</h2> </div>
                        <div className="d-flex justify-content-md-end align-items-center">
                            <Button variant="outline-info" onClick={()=> setAddGenreVisible(true)} className="m-2" >Добавить</Button>
                            {table.selectedColGenreTable ?
                                <div>
                                    <Button variant="outline-success" onClick={()=> setCreateGenreVisible(true)} className="m-2" >Изменить</Button>
                                    <Button variant="outline-danger" onClick={()=> setDeleteGenreVisible(true)} className="m-2">Удалить</Button>
                                </div>
                                :
                                <div>
                                    <Button variant="outline-success" onClick={()=> setCreateGenreVisible(true)} className="m-2" disabled>Изменить</Button>
                                    <Button variant="outline-danger" onClick={()=> setDeleteGenreVisible(true)} className="m-2" disabled>Удалить</Button>
                                </div>

                            }

                        </div>


                    <Table striped bordered hover size="sm"style={{ background: 'white'}} >
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Название</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {table.genre.map(genre =>
                            <tr>
                                <td>{genre.id}</td>
                                <td>{genre.name}</td>
                                <td><Button
                                    variant="outline-primary" className="mt-2"
                                    onClick={()=> table.setSelectedGenre(genre)}
                                    border={genre.id === table.selectedGenre.id ? 'danger' : 'light'}
                                >Выбрать</Button></td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <AddGenre show={addGenreVisible} onHide={()=> setAddGenreVisible(false)}/>
            <CreateGenre show={createGenreVisible} onHide={()=> setCreateGenreVisible(false)}/>
            <DeleteGenre show={deleteGenreVisible} onHide={()=> setDeleteGenreVisible(false)}/>
        </Container>
    );
});

export default GenrePage;