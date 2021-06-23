import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Nav, Row, Table} from "react-bootstrap";
import Table_admin from "../components/Table_admin";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import CreateCountry from "../components/modals/modalsCountry/CreateCountry";
import AddCountry from "../components/modals/modalsCountry/AddCountry";
import DeleteCountry from "../components/modals/modalsCountry/DeleteCountry";
import {fetchCountry, fetchHuman} from "../http/compositionAPI";

const CountryPage = observer(() => {
    const {table} = useContext(Context)

    useEffect(()=>{
        fetchCountry().then(data => table.setCountry(data))
    },[])
    const [addCountryVisible, setAddCountryVisible] = useState(false)
    const [createCountryVisible, setCreateCountryVisible] = useState(false)
    const [deleteCountryVisible, setDeleteCountryVisible] = useState(false)

    return (
        <Container className="mt-3 "style={{ background: '#3C5B74'}}>
            <Row className="mt-2">
                <Col md={3}>
                    <Table_admin/>
                </Col>
                <Col md={9}>
                    <div> <h2 style={{ color: 'white'}}>Страны</h2> </div>
                    <div className="d-flex justify-content-md-end align-items-center">
                        <Button variant="outline-info" onClick={()=> setAddCountryVisible(true)} className="m-2" >Добавить</Button>
                        {table.selectedColCountryTable ?
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateCountryVisible(true)} className="m-2" >Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteCountryVisible(true)} className="m-2">Удалить</Button>
                            </div>
                            :
                            <div>
                                <Button variant="outline-success" onClick={()=> setCreateCountryVisible(true)} className="m-2" disabled>Изменить</Button>
                                <Button variant="outline-danger" onClick={()=> setDeleteCountryVisible(true)} className="m-2" disabled>Удалить</Button>
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
                        {table.country.map(country =>
                            <tr>
                                <td>{country.id}</td>
                                <td>{country.name}</td>
                                <td><Button
                                    variant="outline-primary" className="mt-2"
                                    onClick={()=> table.setSelectedCountry(country)}
                                    border={country.id === table.selectedCountry.id ? 'danger' : 'light'}
                                >Выбрать</Button></td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <AddCountry show={addCountryVisible} onHide={()=> setAddCountryVisible(false)}/>
            <CreateCountry show={createCountryVisible} onHide={()=> setCreateCountryVisible(false)}/>
            <DeleteCountry show={deleteCountryVisible} onHide={()=> setDeleteCountryVisible(false)}/>
        </Container>
    );
});

export default CountryPage;