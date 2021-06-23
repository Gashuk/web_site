import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Nav, Row, Table} from "react-bootstrap";
import Table_admin from "../components/Table_admin";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import CreateList_composition_human from "../components/modals/modalsList_composition_human/CreateList_composition_human";
import AddList_composition_human from "../components/modals/modalsList_composition_human/AddList_composition_human";
import DeleteList_composition_human from "../components/modals/modalsList_composition_human/DeleteList_composition_human";
import {fetchList_composition_human, fetchList_profession_human} from "../http/compositionAPI";

const List_composition_humanPage = observer(() => {
    const {table} = useContext(Context)

    useEffect(()=>{
        fetchList_composition_human().then(data => table.setList_composition_human(data))
    },[])
    const [addList_composition_humanVisible, setAddList_composition_humanVisible] = useState(false)
    const [createList_composition_humanVisible, setCreateList_composition_humanVisible] = useState(false)
    const [deleteList_composition_humanVisible, setDeleteList_composition_humanVisible] = useState(false)

    return (
        <Container className="mt-3" style={{ background: '#3C5B74'}}>
            <Row className="mt-2">
                <Col md={3}>
                    <Table_admin/>
                </Col>
                <Col md={9}>
                    <div> <h2 style={{ color: 'white'}}>Список произведение/персона/профессия</h2> </div>
                    <div className="d-flex justify-content-md-end align-items-center">
                        <Button variant="outline-info" onClick={()=> setAddList_composition_humanVisible(true)} className="m-2" >Добавить</Button>
                        {table.selectedColList_composition_humanTable ?
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateList_composition_humanVisible(true)} className="m-2" >Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteList_composition_humanVisible(true)} className="m-2">Удалить</Button>
                            </div>
                            :
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateList_composition_humanVisible(true)} className="m-2" disabled>Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteList_composition_humanVisible(true)} className="m-2" disabled>Удалить</Button>
                            </div>

                        }

                    </div>


                    <Table striped bordered hover size="sm" style={{ background: 'white'}}>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Код произведения</th>
                            <th>Произведение</th>
                            <th>Профессия</th>
                            <th>Персона</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {table.list_composition_human.map(list_composition_human =>
                            <tr>
                                <td>{list_composition_human.id}</td>
                                <td>{list_composition_human.compositionId}</td>
                                <td>{list_composition_human.name_composition}</td>
                                <td>{list_composition_human.name_profession}</td>
                                <td>{list_composition_human.name_human}</td>
                                <td><Button
                                    variant="outline-primary" className="mt-2"
                                    onClick={()=> table.setSelectedList_composition_human(list_composition_human)}
                                    border={list_composition_human.id === table.setSelectedList_composition_human.id ? 'danger' : 'light'}
                                >Выбрать</Button></td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <AddList_composition_human show={addList_composition_humanVisible} onHide={()=> setAddList_composition_humanVisible(false)}/>
            <CreateList_composition_human show={createList_composition_humanVisible} onHide={()=> setCreateList_composition_humanVisible(false)}/>
            <DeleteList_composition_human show={deleteList_composition_humanVisible} onHide={()=> setDeleteList_composition_humanVisible(false)}/>
        </Container>
    );
});

export default List_composition_humanPage;