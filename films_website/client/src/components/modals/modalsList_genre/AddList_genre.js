import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, COMPOSITION_ROUTE, GENRE_ROUTE, LIST_GENRE_ROUTE} from "../../../utils/consts";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import {
    createComposition, createList_genre,
    fetchComposition,
    fetchGenre,
    fetchProfession,
    fetchTypes
} from "../../../http/compositionAPI";

const AddList_genre = observer(({show, onHide}) => {
    const {table} = useContext(Context)
    const history = useHistory()

    useEffect(()=>{
        fetchComposition().then(data => table.setComposition(data.rows))
        fetchGenre().then(data => table.setGenre(data))
    },[])
    const addList_genre = () =>{
        if(table.selectedComposition.id == null)
        {
            alert("Не выбранное поле произвидение!!!!")
        }
        else if(table.selectedGenre.id == null)

        {
            alert("Пустое поле жанр!!!!")
        }
        else
        {
            const formData = new FormData()
            formData.append('compositionId', table.selectedComposition.id)
            formData.append('genreId', table.selectedGenre.id)
            createList_genre(formData).then(data=> {
                history.push(ADMIN_ROUTE)
                history.push(LIST_GENRE_ROUTE)
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
                    Добавление произвидение/жанр
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
                    Жанр
                    <Dropdown>
                        <Dropdown.Toggle>{table.selectedGenre.name || "Выбирите жанр"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {table.genre.map(genre =>
                                <Dropdown.Item
                                    onClick={() => table.setSelectedGenre(genre)}
                                    key={genre.id}
                                >
                                    {genre.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addList_genre} >Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default AddList_genre;