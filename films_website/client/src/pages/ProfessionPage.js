import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Nav, Row, Table} from "react-bootstrap";
import Table_admin from "../components/Table_admin";
import {Context} from "../index";
import CreateProfession from "../components/modals/modalsProfession/CreateProfession";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import AddProfession from "../components/modals/modalsProfession/AddProfession";
import DeleteProfession from "../components/modals/modalsProfession/DeleteProfession";
import {fetchList_profession_human, fetchProfession} from "../http/compositionAPI";

const ProfessionPage = observer(() => {
    const {table} = useContext(Context)

    useEffect(()=>{
        fetchProfession().then(data => table.setProfession(data))
    },[])
    const [addProfessionVisible, setAddProfessionVisible] = useState(false)
    const [createProfessionVisible, setCreateProfessionVisible] = useState(false)
    const [deleteProfessionVisible, setDeleteProfessionVisible] = useState(false)

    return (
        <Container className="mt-3" style={{ background: '#3C5B74'}}>
            <Row className="mt-2">
                <Col md={3}>
                    <Table_admin/>
                </Col>
                <Col md={9}>
                    <div> <h2 style={{ color: 'white'}}>Профессии</h2> </div>
                    <div className="d-flex justify-content-md-end align-items-center">
                        <Button variant="outline-info" onClick={()=> setAddProfessionVisible(true)} className="m-2" >Добавить</Button>
                        {table.selectedColProfessionTable ?
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateProfessionVisible(true)} className="m-2" >Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteProfessionVisible(true)} className="m-2">Удалить</Button>
                            </div>
                            :
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateProfessionVisible(true)} className="m-2" disabled>Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteProfessionVisible(true)} className="m-2" disabled>Удалить</Button>
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
                        {table.profession.map(profession =>
                            <tr>
                                <td>{profession.id}</td>
                                <td>{profession.name}</td>
                                <td><Button
                                    variant="outline-primary" className="mt-2"
                                    onClick={()=> table.setSelectedProfession(profession)}
                                    border={profession.id === table.selectedProfession.id ? 'danger' : 'light'}
                                >Выбрать</Button></td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <AddProfession show={addProfessionVisible} onHide={()=> setAddProfessionVisible(false)}/>
            <CreateProfession show={createProfessionVisible} onHide={()=> setCreateProfessionVisible(false)}/>
            <DeleteProfession show={deleteProfessionVisible} onHide={()=> setDeleteProfessionVisible(false)}/>
        </Container>
    );
});

export default ProfessionPage;