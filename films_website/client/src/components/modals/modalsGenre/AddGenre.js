import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, GENRE_ROUTE} from "../../../utils/consts";
import {createGenre} from "../../../http/compositionAPI";

const AddGenre = observer(({show, onHide}) => {
    const [value, setValue] = useState('')
    const history = useHistory()

    const addGenre = () =>{
        const value_2 = value.replace(/^\s+|\s+$/g, '')
        if(value_2 == '')
        {
            alert("Пустое поле!!!!")
        }
        else
        {
            createGenre({name:value}).then(data=> {
                setValue('')
                history.push(ADMIN_ROUTE)
                history.push(GENRE_ROUTE)
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
                    Добавление жанра
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
                <Button variant="outline-success" onClick={addGenre}>Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default AddGenre;