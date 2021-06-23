import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, GENRE_ROUTE, HUMAN_ROUTE} from "../../../utils/consts";
import {createHuman} from "../../../http/compositionAPI";

const AddHuman = observer(({show, onHide}) => {
    const [fio, setFio] = useState('')
    const [img, setImg] = useState(null)
    const history = useHistory()

    const selectFile = e =>{
        setImg(e.target.files[0])
    }
    const addHuman = () =>{
        const fio_2 = fio.replace(/^\s+|\s+$/g, '')
        if(fio_2 == '')
        {
            alert("Пустое поле!!!!")
        }
        else
        {
            // alert(fio)
            // alert(img)
            const formData = new FormData()
            formData.append('fio', fio)
            formData.append('img', img)
            createHuman(formData).then(data=> {
                setFio('')
                setImg(null)
                history.push(ADMIN_ROUTE)
                history.push(HUMAN_ROUTE)
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
                    Добавление персоны
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    ФИО
                    <Form.Control
                        value={fio}
                        onChange={e =>setFio(e.target.value)}
                        placeholder={"Введите ФИО"}
                    />
                    Аватар
                    <Form.Control
                        onChange={selectFile}
                        type="file"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addHuman}>Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default AddHuman;