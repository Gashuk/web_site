import React, {useContext} from 'react';
import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import GenreBar from "../components/GenreBar";
import CompositionList from "../components/CompositionList";
import Table_admin from "../components/Table_admin";
import Table_User from "../components/Table_User";
import {Context} from "../index";
import {useHistory} from "react-router-dom";

const Admin = () => {
    const {user} = useContext(Context)
    // console.log(user)
    // const {user} = useContext(Context)
    // {user.isADMIN ?
    //     <Table_admin/>
    //     :
    //     <Table_User/>
    // }
    const history = useHistory()
    return (
        <Container style={{ background: '#3C5B74'}}>
            <Row className="mt-2">
                <Col md={3}>
                        <Table_admin/>

                </Col>
                <Col md={9}>
                </Col>
            </Row>
        </Container>
        // <Container className="d-flex flex-column">
        //     <Button variant="outline-dark" className="mt-2">Добавить тип</Button>
        //     <Button variant="outline-dark" className="mt-2">Добавить бренд</Button>
        //     <Button variant="outline-dark" className="mt-2">Добавить устройство</Button>
        // </Container>
    );
};

export default Admin;