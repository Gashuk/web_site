import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Nav, Row, Table} from "react-bootstrap";
import Table_admin from "../components/Table_admin";
import {Context} from "../index";
import CreateHuman from "../components/modals/modalsHuman/CreateHuman";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import AddHuman from "../components/modals/modalsHuman/AddHuman";
import DeleteHuman from "../components/modals/modalsHuman/DeleteHuman";
import {fetchHuman, fetchProfession} from "../http/compositionAPI";

const HumanPage = observer(() => {
    const {table} = useContext(Context)

    useEffect(()=>{
        fetchHuman().then(data => table.setHuman(data))
    },[])
    const [addHumanVisible, setAddHumanVisible] = useState(false)
    const [createHumanVisible, setCreateHumanVisible] = useState(false)
    const [deleteHumanVisible, setDeleteHumanVisible] = useState(false)

    return (
        <Container className="mt-3" style={{ background: '#3C5B74'}}>
            <Row className="mt-2">
                <Col md={3}>
                    <Table_admin/>
                </Col>
                <Col md={9}>
                    <div> <h2 style={{ color: 'white'}}>Персоны</h2> </div>
                    <div className="d-flex justify-content-md-end align-items-center">
                        <Button variant="outline-info" onClick={()=> setAddHumanVisible(true)} className="m-2" >Добавить</Button>
                        {table.selectedColHumanTable ?
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateHumanVisible(true)} className="m-2" >Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteHumanVisible(true)} className="m-2">Удалить</Button>
                            </div>
                            :
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateHumanVisible(true)} className="m-2" disabled>Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteHumanVisible(true)} className="m-2" disabled>Удалить</Button>
                            </div>

                        }

                    </div>


                    <Table striped bordered hover size="sm" style={{ background: 'white'}}>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>ФИО</th>
                            <th>Автарка</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {table.human.map(human =>
                            <tr>
                                <td>{human.id}</td>
                                <td>{human.fio}</td>
                                <td><Image width={50} height={50}  src={process.env.REACT_APP_API_URL + human.img}/></td>
                                <td><Button
                                    variant="outline-primary" className="mt-2"
                                    onClick={()=> table.setSelectedHuman(human)}
                                    border={human.id === table.selectedHuman.id ? 'danger' : 'light'}
                                >Выбрать</Button></td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <AddHuman show={addHumanVisible} onHide={()=> setAddHumanVisible(false)}/>
            <CreateHuman show={createHumanVisible} onHide={()=> setCreateHumanVisible(false)}/>
            <DeleteHuman show={deleteHumanVisible} onHide={()=> setDeleteHumanVisible(false)}/>
        </Container>
    );
});

export default HumanPage;