import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Nav, Row, Table} from "react-bootstrap";
import Table_admin from "../components/Table_admin";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import CreateList_profession_human from "../components/modals/modalsList_profession_human/CreateList_profession_human";
import AddList_profession_human from "../components/modals/modalsList_profession_human/AddList_profession_human";
import DeleteList_profession_human from "../components/modals/modalsList_profession_human/DeleteList_profession_human";
import {fetchComposition, fetchList_profession_human} from "../http/compositionAPI";

const List_profession_humanPage = observer(() => {
    const {table} = useContext(Context)

    useEffect(()=>{
        fetchList_profession_human().then(data => table.setList_profession_human(data))
    },[])
    const [addList_profession_humanVisible, setAddList_profession_humanVisible] = useState(false)
    const [createList_profession_humanVisible, setCreateList_profession_humanVisible] = useState(false)
    const [deleteList_profession_humanVisible, setDeleteList_profession_humanVisible] = useState(false)
    return (
        <Container className="mt-3" style={{ background: '#3C5B74'}}>
            <Row className="mt-2">
                <Col md={3}>
                    <Table_admin/>
                </Col>
                <Col md={9}>
                    <div> <h2 style={{ color: 'white'}}>Список профессия/персона</h2> </div>
                    <div className="d-flex justify-content-md-end align-items-center">
                        <Button variant="outline-info" onClick={()=> setAddList_profession_humanVisible(true)} className="m-2" >Добавить</Button>
                        {table.selectedColList_profession_humanTable ?
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateList_profession_humanVisible(true)} className="m-2" >Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteList_profession_humanVisible(true)} className="m-2">Удалить</Button>
                            </div>
                            :
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateList_profession_humanVisible(true)} className="m-2" disabled>Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteList_profession_humanVisible(true)} className="m-2" disabled>Удалить</Button>
                            </div>

                        }

                    </div>


                    <Table striped bordered hover size="sm" style={{ background: 'white'}}>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Код профессии</th>
                            <th>Профессия</th>
                            <th>Код персоны</th>
                            <th>Персона</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {table.list_profession_human.map(list_profession_human =>
                            <tr>
                                <td>{list_profession_human.id}</td>
                                <td>{list_profession_human.professionId}</td>
                                <td>{list_profession_human.name_profession}</td>
                                <td>{list_profession_human.humanId}</td>
                                <td>{list_profession_human.name_human}</td>
                                <td><Button
                                    variant="outline-primary" className="mt-2"
                                    onClick={()=> table.setSelectedList_profession_human(list_profession_human)}
                                    border={list_profession_human.id === table.setSelectedList_profession_human.id ? 'danger' : 'light'}
                                >Выбрать</Button></td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <AddList_profession_human show={addList_profession_humanVisible} onHide={()=> setAddList_profession_humanVisible(false)}/>
            <CreateList_profession_human show={createList_profession_humanVisible} onHide={()=> setCreateList_profession_humanVisible(false)}/>
            <DeleteList_profession_human show={deleteList_profession_humanVisible} onHide={()=> setDeleteList_profession_humanVisible(false)}/>
        </Container>
    );
});

export default List_profession_humanPage;