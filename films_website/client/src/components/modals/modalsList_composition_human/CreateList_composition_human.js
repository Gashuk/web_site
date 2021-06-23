import React, {useContext} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, GENRE_ROUTE} from "../../../utils/consts";

const CreateList_composition_human = observer(({show, onHide}) => {
    const {table} = useContext(Context)

    const history = useHistory()
    console.log(table)
    return (
        <Modal
            show = {show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Изменение профессия/персона
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form key={table.selectedList_composition_human.id}>
                    Произведение
                    <Dropdown>
                        <Dropdown.Toggle>{table.selectedList_composition_human.compositionId} / {table.selectedList_composition_human.name_composition}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {table.composition.map(composition =>
                                <Dropdown.Item key={composition.id}>{composition.id} / {composition.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    Профессия / персона
                    <Dropdown>
                        <Dropdown.Toggle>{table.selectedList_composition_human.name_profession} / {table.selectedList_composition_human.name_human}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {table.list_profession_human.map(selectedList_profession_human =>
                                <Dropdown.Item key={selectedList_profession_human.id}>{selectedList_profession_human.name_profession} / {selectedList_profession_human.name_human}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={onHide}>Изменить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateList_composition_human;