import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, COMPOSITION_ROUTE, GENRE_ROUTE, LIST_COMPOSITION_HUMAN_ROUTE} from "../../../utils/consts";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import {
    createComposition, createList_composition_human,
    fetchComposition,
    fetchList_composition_human, fetchList_profession_human,
    fetchTypes
} from "../../../http/compositionAPI";

const AddList_composition_human = observer(({show, onHide}) => {
    const {table} = useContext(Context)
    const history = useHistory()
    useEffect(()=>{
        fetchComposition().then(data => table.setComposition(data.rows))
        fetchList_profession_human().then(data => table.setList_profession_human(data))
    },[])

    const addList_composition_human = () =>{
        if(table.selectedComposition.id == null)
        {
            alert("Не выбранное поле произвидение!!!!")
        }
        else if(table.selectedList_profession_human.id == null)
        {
            alert("Не выбранное поле профессия / персона!!!!")
        }
        else
        {
            const formData = new FormData()
            formData.append('compositionId', table.selectedComposition.id)
            formData.append('listProfessionHumanId', table.selectedList_profession_human.id)
            createList_composition_human(formData).then(data=> {
                history.push(ADMIN_ROUTE)
                history.push(LIST_COMPOSITION_HUMAN_ROUTE)
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
                    Добавление произведение/персона/профессия
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    Произведение
                    <Dropdown>
                        <Dropdown.Toggle>{table.selectedComposition.name || "Выбирите произведение"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {table.composition.map(composition =>
                                <Dropdown.Item
                                    onClick={() => table.setSelectedComposition(composition)}
                                    key={composition.id}
                                >
                                    {composition.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    Профессия / персона
                    <Dropdown>
                        <Dropdown.Toggle>{table.selectedList_profession_human.name_profession +  table.selectedList_profession_human.name_human|| "Выбирите профессия / персона"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {table.list_profession_human.map(selectedList_profession_human =>
                                <Dropdown.Item
                                    onClick={() => table.setSelectedList_profession_human(selectedList_profession_human)}
                                    key={selectedList_profession_human.id}
                                >
                                    {selectedList_profession_human.name_profession} / {selectedList_profession_human.name_human}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>


                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addList_composition_human} >Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default AddList_composition_human;