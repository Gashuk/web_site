import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, GENRE_ROUTE, TYPE_ROUTE} from "../../../utils/consts";
import {createType, deleteType} from "../../../http/compositionAPI";

const DeleteType = observer(({show, onHide}) => {
    const {table} = useContext(Context)
    const history = useHistory()
    const delete_Type = () =>{


            alert(table.selectedType.id)

            deleteType({id:table.selectedType.id}).then(data=> {
                history.push(ADMIN_ROUTE)
                history.push(TYPE_ROUTE)
                onHide()
            })
    }
    return (
        <Modal
            show = {show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удаление типа произведения
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form key={table.selectedType.id}>
                    Код
                    <Form.Control
                        placeholder={table.selectedType.id}
                        disabled
                    />
                    Название
                    <Form.Control
                        placeholder={table.selectedType.name}
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

export default DeleteType;