import React, {useContext} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, GENRE_ROUTE} from "../../../utils/consts";

const DeleteHuman = observer(({show, onHide}) => {
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
                    Удаление жанра
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form key={table.selectedHuman.id}>
                    Код
                    <Form.Control
                        placeholder={table.selectedHuman.id}
                        disabled
                    />
                    ФИО
                    <Form.Control
                        placeholder={table.selectedHuman.fio}
                        disabled
                    />
                    Аватар
                    <Form.Control
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

export default DeleteHuman;