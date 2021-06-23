import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, COUNTRY_ROUTE, GENRE_ROUTE} from "../../../utils/consts";
import {createCountry, createGenre} from "../../../http/compositionAPI";

const AddCountry = observer(({show, onHide}) => {
    const [value, setValue] = useState('')
    const history = useHistory()

    const addCountry = () =>{
        const value_2 = value.replace(/^\s+|\s+$/g, '')
        if(value_2 == '')
        {
            alert("Пустое поле!!!!")
        }
        else
        {
            createCountry({name:value}).then(data=> {
                setValue('')
                history.push(ADMIN_ROUTE)
                history.push(COUNTRY_ROUTE)
                onHide()
            })
        }
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
                    Добавление страны
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    Название
                    <Form.Control
                        value={value}
                        onChange={e =>setValue(e.target.value)}
                        placeholder={"Введите название"}

                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addCountry}>Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default AddCountry;