import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, COMPOSITION_ROUTE, GENRE_ROUTE, LIST_PROFESSION_HUMAN_ROUTE} from "../../../utils/consts";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import {
    createComposition,
    createList_profession_human,
    fetchHuman,
    fetchProfession,
    fetchTypes
} from "../../../http/compositionAPI";

const AddList_profession_human = observer(({show, onHide}) => {
    const {table} = useContext(Context)
    const history = useHistory()

    useEffect(()=>{
        fetchProfession().then(data => table.setProfession(data))
        fetchHuman().then(data => table.setHuman(data))

    },[])

    const addList_profession_human = () =>{
        if(table.selectedProfession.id == null)
        {
            alert("Не выбранное поле профессия!!!!")
        }
        else if(table.selectedHuman.id == null)
        {
            alert("Пустое поле персона!!!!")
        }
        else
        {
            const formData = new FormData()
            formData.append('professionId', table.selectedProfession.id)
            formData.append('humanId', table.selectedHuman.id)
            createList_profession_human(formData).then(data=> {
                history.push(ADMIN_ROUTE)
                history.push(LIST_PROFESSION_HUMAN_ROUTE)
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
                    Добавление профессия/персона
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    Профессия
                        <Dropdown>
                            <Dropdown.Toggle>{table.selectedProfession.name || "Выбирите профессию"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {table.profession.map(profession =>
                                    <Dropdown.Item
                                        onClick={() => table.setSelectedProfession(profession)}
                                        key={profession.id}
                                    >
                                      {profession.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    Персона
                    <Dropdown>
                        <Dropdown.Toggle>{table.selectedHuman.fio || "Выбирите персону"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {table.human.map(human =>
                                <Dropdown.Item
                                    onClick={() => table.setSelectedHuman(human)}
                                    key={human.id}
                                >
                                    {human.fio}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addList_profession_human} >Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default AddList_profession_human;