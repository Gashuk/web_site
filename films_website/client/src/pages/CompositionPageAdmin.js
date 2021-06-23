import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Nav, Row, Table} from "react-bootstrap";
import Table_admin from "../components/Table_admin";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import AddComposition from "../components/modals/modalsComposition/AddComposition";
import CreateComposition from "../components/modals/modalsComposition/CreateComposition";
import DeleteComposition from "../components/modals/modalsComposition/DeleteComposition";
import {fetchComposition, fetchGenre, fetchTypes} from "../http/compositionAPI";

const CompositionPageAdmin = observer(() => {
    const {table} = useContext(Context)

    useEffect(()=>{
        fetchComposition().then(data => table.setComposition(data.rows))
    },[])

    const [addCompositionVisible, setAddCompositionVisible] = useState(false)
    const [createCompositionVisible, setCreateCompositionVisible] = useState(false)
    const [deleteCompositionVisible, setDeleteCompositionVisible] = useState(false)

// console.log(table[0])
    return (
        <Container className="mt-3" style={{ background: '#00243F'}}>//00243F 3C5B74
            <Row className="mt-2">
                <Col md={3}>
                    <Table_admin/>
                </Col>
                <Col md={9}>
                    <div> <h2 style={{ color: 'white'}}>Произвидения</h2> </div>
                    <div className="d-flex justify-content-md-end align-items-center">
                        <Button variant="outline-warning" onClick={()=> setAddCompositionVisible(true)} className="m-2" >Добавить</Button>
                        {table.selectedColCompositionTable ?
                            <div>
                                <Button variant="outline-secondary" onClick={()=> setCreateCompositionVisible(true)} className="m-2" >Изменить</Button>
                                <Button variant="outline-dark" onClick={()=> setDeleteCompositionVisible(true)} className="m-2">Удалить</Button>
                            </div>
                            :
                            <div>
                                <Button variant="outline-secondary" onClick={()=> setCreateCompositionVisible(true)} className="m-2" disabled>Изменить</Button>
                                <Button variant="outline-dark" onClick={()=> setDeleteCompositionVisible(true)} className="m-2" disabled>Удалить</Button>
                            </div>

                        }

                    </div>


                    <Table striped bordered hover size="sm" style={{ background: 'white'}}>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Название</th>
                            <th>Код типа</th>
                            <th>Тип </th>
                            <th>Постер</th>
                            <th>Рейтинг</th>
                            <th>Дата премьеры</th>
                            <th>Описание</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {table.composition.map(composition =>
                            <tr>
                                <td>{composition.id}</td>
                                <td>{composition.name}</td>
                                <td>{composition.typeId}</td>
                                <td>{composition.name_type}</td>
                                <td><Image width={150} height={220} src={process.env.REACT_APP_API_URL +composition.img}/></td>
                                <td>{composition.rating}</td>
                                <td>{composition.year1}</td>
                                <td>{composition.description}</td>
                                <td><Button
                                    variant="outline-danger" className="mt-2"
                                    onClick={()=> table.setSelectedComposition(composition)}
                                    border={composition.id === table.setSelectedComposition.id ? 'danger' : 'light'}
                                >Выбрать</Button></td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <AddComposition show={addCompositionVisible} onHide={()=> setAddCompositionVisible(false)}/>
            <CreateComposition show={createCompositionVisible} onHide={()=> setCreateCompositionVisible(false)}/>
            <DeleteComposition show={deleteCompositionVisible} onHide={()=> setDeleteCompositionVisible(false)}/>
        </Container>
    );
});

export default CompositionPageAdmin;