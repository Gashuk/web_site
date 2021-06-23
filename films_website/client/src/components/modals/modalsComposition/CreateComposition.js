import React, {useContext} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, GENRE_ROUTE} from "../../../utils/consts";

const CreateComposition = observer(({show, onHide}) => {
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
                    Изменение произведения
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form key={table.selectedComposition.id}>
                    Код
                    <Form.Control
                        placeholder={table.selectedComposition.id}
                        disabled
                    />
                    Название
                    <Form.Control
                        placeholder={table.selectedComposition.name}
                    />
                    Тип произведения
                    <Dropdown>
                        <Dropdown.Toggle>{table.selectedComposition.typeId} / {table.selectedComposition.name_type}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {table.type.map(type =>
                                <Dropdown.Item key={type.id}>{type.id} / {type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    Постер
                    <Form.Control
                        placeholder={table.selectedComposition.img}
                        type="file"
                    />
                    Дата премьеры
                    <Form.Control
                        placeholder={table.selectedComposition.year1}
                        type="date"
                    />
                    Описание
                    <Form.Control
                        placeholder={table.selectedComposition.description}
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

export default CreateComposition;