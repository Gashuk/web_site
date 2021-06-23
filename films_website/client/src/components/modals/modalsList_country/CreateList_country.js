import React, {useContext} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, GENRE_ROUTE} from "../../../utils/consts";

const CreateList_country = observer(({show, onHide}) => {
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
                    Изменение произвидение/страна
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form key={table.selectedList_country.id}>
                    Произведение
                    <Dropdown>
                        <Dropdown.Toggle>{table.selectedList_country.compositionId} / {table.selectedList_country.name_composition}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {table.composition.map(composition =>
                                <Dropdown.Item key={composition.id}>{composition.id} / {composition.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    Страна
                    <Dropdown>
                        <Dropdown.Toggle>{table.selectedList_country.countryId} / {table.selectedList_country.name_country}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {table.country.map(country =>
                                <Dropdown.Item key={country.id}>{country.id} / {country.name}</Dropdown.Item>
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

export default CreateList_country;