import React, {useContext} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, GENRE_ROUTE} from "../../../utils/consts";

const DeleteCountry = observer(({show, onHide}) => {
    const {table} = useContext(Context)

    const history = useHistory()
    return (
        <Modal
            show = {show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удаление страны
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form key={table.selectedCountry.id}>
                    Код
                    <Form.Control
                        placeholder={table.selectedCountry.id}
                        disabled
                    />
                    Название
                    <Form.Control
                        placeholder={table.selectedCountry.name}
                        disabled
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={onHide}>Изменить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteCountry;