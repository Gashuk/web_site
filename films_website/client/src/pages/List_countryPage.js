import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Nav, Row, Table} from "react-bootstrap";
import Table_admin from "../components/Table_admin";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import CreateList_country from "../components/modals/modalsList_country/CreateList_country";
import AddList_country from "../components/modals/modalsList_country/AddList_country";
import DeleteList_country from "../components/modals/modalsList_country/DeleteList_country";
import {fetchList_country, fetchList_genre} from "../http/compositionAPI";

const List_countryPage = observer(() => {
    const {table} = useContext(Context)

    useEffect(()=>{
        fetchList_country().then(data => table.setList_country(data))
    },[])
    const [addList_countryVisible, setAddList_countryVisible] = useState(false)
    const [createList_countryVisible, setCreateList_countryVisible] = useState(false)
    const [deleteList_countryVisible, setDeleteList_countryVisible] = useState(false)

    return (
        <Container className="mt-3" style={{ background: '#3C5B74'}}>
            <Row className="mt-2">
                <Col md={3}>
                    <Table_admin/>
                </Col>
                <Col md={9}>
                    <div> <h2 style={{ color: 'white'}}>Список произвидение/страна</h2> </div>
                    <div className="d-flex justify-content-md-end align-items-center">
                        <Button variant="outline-info" onClick={()=> setAddList_countryVisible(true)} className="m-2" >Добавить</Button>
                        {table.selectedColList_countryTable ?
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateList_countryVisible(true)} className="m-2" >Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteList_countryVisible(true)} className="m-2">Удалить</Button>
                            </div>
                            :
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateList_countryVisible(true)} className="m-2" disabled>Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteList_countryVisible(true)} className="m-2" disabled>Удалить</Button>
                            </div>

                        }

                    </div>


                    <Table striped bordered hover size="sm" style={{ background: 'white'}}>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Код произведения</th>
                            <th>Произведение</th>
                            <th>Код страны</th>
                            <th>Страна</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {table.list_country.map(list_country =>
                            <tr>
                                <td>{list_country.id}</td>
                                <td>{list_country.compositionId}</td>
                                <td>{list_country.name_composition}</td>
                                <td>{list_country.countryId}</td>
                                <td>{list_country.name_country}</td>
                                <td><Button
                                    variant="outline-primary" className="mt-2"
                                    onClick={()=> table.setSelectedList_country(list_country)}
                                    border={list_country.id === table.setSelectedList_country.id ? 'danger' : 'light'}
                                >Выбрать</Button></td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <AddList_country show={addList_countryVisible} onHide={()=> setAddList_countryVisible(false)}/>
            <CreateList_country show={createList_countryVisible} onHide={()=> setCreateList_countryVisible(false)}/>
            <DeleteList_country show={deleteList_countryVisible} onHide={()=> setDeleteList_countryVisible(false)}/>
        </Container>
    );
});

export default List_countryPage;