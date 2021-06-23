import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, COMPOSITION_ROUTE, GENRE_ROUTE, LIST_COUNTRY_ROUTE} from "../../../utils/consts";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import {
    createComposition,
    createList_country,
    fetchComposition,
    fetchCountry,
    fetchTypes
} from "../../../http/compositionAPI";

const AddList_country = observer(({show, onHide}) => {
    const {table} = useContext(Context)
    const history = useHistory()


    useEffect(()=>{
        fetchComposition().then(data => table.setComposition(data.rows))
        fetchCountry().then(data => table.setCountry(data))
    },[])

    const addList_country = () =>{
        if(table.selectedComposition.id == null)
        {
            alert("Не выбранное поле произвидение!!!!")
        }
        else if(table.selectedCountry.id == null)
        {
            alert("Пустое поле страна!!!!")
        }
        else
        {
            const formData = new FormData()
            formData.append('compositionId', table.selectedComposition.id)
            formData.append('countryId', table.selectedCountry.id)
            createList_country(formData).then(data=> {
                history.push(ADMIN_ROUTE)
                history.push(LIST_COUNTRY_ROUTE)
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
                    Добавление произвидение/страна
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
                                        {composition.id} / {composition.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    Страна
                    <Dropdown>
                        <Dropdown.Toggle>{table.selectedCountry.name || "Выбирите страну"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {table.country.map(country =>
                                <Dropdown.Item
                                    onClick={() => table.setSelectedCountry(country)}
                                    key={country.id}
                                >
                                    {country.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addList_country} >Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default AddList_country;