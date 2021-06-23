import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, COMPOSITION_ROUTE, GENRE_ROUTE, HUMAN_ROUTE} from "../../../utils/consts";
import {createComposition, createHuman, fetchComposition, fetchGenre, fetchTypes} from "../../../http/compositionAPI";

const AddComposition = observer(({show, onHide}) => {
    const {table} = useContext(Context)
    const history = useHistory()

    const [name, setName] = useState('')
    const [img, setImg] = useState(null)
    const [description, setDescription] = useState('')
    const [year1, setYear1] = useState('2021-06-23')
    const [rating, setRating] = useState(1)
    useEffect(()=>{
        fetchTypes().then(data => table.setType(data))
    },[])

    const selectFile = e =>{
        setImg(e.target.files[0])
    }
    const addComposition = () =>{


        const name_2 = name.replace(/^\s+|\s+$/g, '')
        if(table.selectedType.id == null)
        {
            alert("Не выбранное поле тип!!!!")
        }
        else if(name_2 == '')
        {
            alert("Пустое поле название!!!!")
        }
        else if(1>rating || rating > 100)
        {
            alert("Рейтинг должен быть в диапозоне от 0 до 100!!!!")
        }
        else if(year1 == '')
        {
            alert("Не выбрана дата!!!!")
        }
        else
        {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('img', img)
            formData.append('typeId', table.selectedType.id)
            formData.append('description', description)
            formData.append('year1', year1)
            formData.append('rating', `${rating}`)
            createComposition(formData).then(data=> {
                setName('')
                setImg(null)
                history.push(ADMIN_ROUTE)
                history.push(COMPOSITION_ROUTE)
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
                    Добавление произведения
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    Название
                    <Form.Control
                        value={name}
                        onChange={e =>setName(e.target.value)}
                        placeholder={"Введите ФИО"}
                    />
                    Тип произведения
                    <Dropdown>
                        <Dropdown.Toggle>{table.selectedType.name || "Выбирите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {table.type.map(type =>
                                <Dropdown.Item
                                    onClick={() => table.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    Постер
                    <Form.Control
                        onChange={selectFile}
                        type="file"
                    />
                    Рейтинг
                    <Form.Control
                        value={rating}
                        onChange={e =>setRating(e.target.value)}
                        type="number"
                        min="1"
                        max="10"
                    />
                    Дата премьеры
                    <Form.Control
                        value={year1}
                        onChange={e =>setYear1(e.target.value)}
                        type="date"
                    />
                    Описание
                    <Form.Control
                        value={description}
                        onChange={e =>setDescription(e.target.value)}
                        placeholder={"Введите описание"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addComposition} >Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default AddComposition;