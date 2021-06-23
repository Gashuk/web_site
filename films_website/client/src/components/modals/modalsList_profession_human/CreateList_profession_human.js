import React, {useContext} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, GENRE_ROUTE} from "../../../utils/consts";
import AddList_profession_human from "./AddList_profession_human";

const CreateList_profession_human = observer(({show, onHide}) => {
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
                <Form key={table.selectedList_profession_human.id}>
                    Профессия
                    <Dropdown>
                        <Dropdown.Toggle>{table.selectedList_profession_human.professionId} / {table.selectedList_profession_human.name_profession}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {table.profession.map(profession =>
                                <Dropdown.Item key={profession.id}>{profession.id} / {profession.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    Персона
                    <Dropdown>
                        <Dropdown.Toggle>{table.selectedList_profession_human.humanId} / {table.selectedList_profession_human.name_human}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {table.human.map(human =>
                                <Dropdown.Item key={human.id}>{human.id} / {human.fio}</Dropdown.Item>
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

export default CreateList_profession_human;