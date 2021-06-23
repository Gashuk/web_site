import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Nav, Row, Table} from "react-bootstrap";
import Table_admin from "../components/Table_admin";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import AddType from "../components/modals/modalsType/AddType";
import CreateType from "../components/modals/modalsType/CreateType";
import DeleteType from "../components/modals/modalsType/DeleteType";
import {fetchHuman, fetchTypes} from "../http/compositionAPI";

const TypePage = observer(() => {
    const {table} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data => table.setType(data))
    },[])
    const [addTypeVisible, setAddTypeVisible] = useState(false)
    const [createTypeVisible, setCreateTypeVisible] = useState(false)
    const [deleteTypeVisible, setDeleteTypeVisible] = useState(false)

    return (
        <Container className="mt-3" style={{ background: '#3C5B74'}}>
            <Row className="mt-2">
                <Col md={3}>
                    <Table_admin/>
                </Col>
                <Col md={9}>
                    <div> <h2 style={{ color: 'white'}}>Типы произведения</h2> </div>
                    <div className="d-flex justify-content-md-end align-items-center">
                        <Button variant="outline-info" onClick={()=> setAddTypeVisible(true)} className="m-2" >Добавить</Button>
                        {table.selectedColTypeTable ?
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateTypeVisible(true)} className="m-2" >Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteTypeVisible(true)} className="m-2">Удалить</Button>
                            </div>
                            :
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateTypeVisible(true)} className="m-2" disabled>Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteTypeVisible(true)} className="m-2" disabled>Удалить</Button>
                            </div>

                        }

                    </div>


                    <Table striped bordered hover size="sm" style={{ background: 'white'}}>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Название</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {table.type.map(type =>
                            <tr>
                                <td>{type.id}</td>
                                <td>{type.name}</td>
                                <td><Button
                                    variant="outline-primary" className="mt-2"
                                    onClick={()=> table.setSelectedType(type)}
                                    border={type.id === table.selectedType.id ? 'danger' : 'light'}
                                >Выбрать</Button></td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <AddType show={addTypeVisible} onHide={()=> setAddTypeVisible(false)}/>
            <CreateType show={createTypeVisible} onHide={()=> setCreateTypeVisible(false)}/>
            <DeleteType show={deleteTypeVisible} onHide={()=> setDeleteTypeVisible(false)}/>
        </Container>
    );
});

export default TypePage;