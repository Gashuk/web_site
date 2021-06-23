import React, {useContext} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, GENRE_ROUTE} from "../../../utils/consts";
import CreateList_profession_human from "./CreateList_profession_human";

const DeleteList_profession_human = observer(({show, onHide}) => {
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
                    Удаление профессия/персона
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form key={table.selectedList_profession_human.id}>
                    Код
                    <Form.Control
                        placeholder={table.selectedList_profession_human.id}
                        disabled
                    />
                    Профессия
                    <Form.Control
                        placeholder={table.selectedList_profession_human.name_profession}
                        disabled
                    />
                    Персона
                    <Form.Control
                        placeholder={table.selectedList_profession_human.name_human}
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

export default DeleteList_profession_human;