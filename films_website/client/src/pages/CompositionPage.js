import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {Context} from "../index";
import {fetchComposition, fetchGenre, fetchOneComposition, fetchProfession, fetchTypes} from "../http/compositionAPI";

const CompositionPage = () => {
    const [composition, setComposition] = useState({info: []})
    const {id} = useParams()

    const el_composition = composition[0]
    const profession = composition[1]
    const type = composition[2]
    const country = composition[3]
    const genre = composition[4]

    const human= []
    for (let i = 5; i < composition.length; i++) {
        human.push(composition[i])
    }
    useEffect(()=>{
        fetchOneComposition(id).then(data => setComposition(data))
    },[])

    // console.log()
    // console.log(setComposition)
    // const composition =    {
    //     id: 1, name: "Круэлла",
    //     description: "Лондон 70-х годов охвачен зарождающейся культурой панк-рока. Невероятно одаренная мошенница по имени Эстелла решает сделать себе имя в мире моды. ",
    //     img: "94146aea-8a66-462b-9c3b-43505e1b0d75.jpg",
    //     year1: "2021-06-03T00:00:00.000Z",
    //     year2: null,
    //     number_seasons: null,
    //     rating: 0,
    //     createdAt: "2021-06-15T17:12:38.162Z",
    //     updatedAt: "2021-06-15T17:12:38.162Z",
    //     typeId: 2
    //     }
    // const description = [
    //     [
    //         {
    //             row_name: "Страны"
    //         },
    //         {
    //             row_name: "Жанры"
    //         },
    //         {
    //             row_name: "Режиссер"
    //         },
    //         {
    //             row_name: "Сценарий"
    //         },
    //         {
    //             row_name: "Продюссер"
    //         },
    //         {
    //             row_name: "В главных ролях"
    //         },
    //         {
    //             row_name: "Описание"
    //         }
    //     ],
    //     [
    //         {
    //             id: 3,
    //             fio: "США,",
    //         },
    //         {
    //             id: 4,
    //             fio: "Великобритания",
    //         }
    //     ],
    //     [
    //         {
    //             id: 3,
    //             fio: "комедия",
    //         },
    //         {
    //             id: 4,
    //             fio: "драма",
    //         },
    //         {
    //             id: 5,
    //             fio: "криминалл",
    //         }
    //     ],
    //     [
    //         {
    //             id: 1,
    //             fio: "Крэйг Гиллеспи"
    //         }
    //     ],
    //     [
    //         {
    //             id: 3,
    //             fio: "Дэна Фокс"
    //         },
    //         {
    //             id: 4,
    //             fio: "Тони МакНамара"
    //         },
    //         {
    //             id: 5,
    //             fio: " Алин Брош МакКенна"
    //         }
    //     ],
    //     [
    //         {
    //             id: 6,
    //             fio: "Кристин Барр"
    //         },
    //         {
    //             id: 7,
    //             fio: "Гленн Клоуз"
    //         }
    //     ],
    //     [
    //         {
    //             id: 2,
    //             fio: "Эмма Стоун"
    //         },
    //         {
    //             id: 8,
    //             fio: "Эмма Томпсон"
    //         }
    //     ],
    //     [
    //         {
    //             id: 2,
    //             fio: "Лондон 70-х годов охвачен зарождающейся культурой панк-рока. Невероятно одаренная мошенница по имени Эстелла решает сделать себе имя в мире моды."
    //         }
    //     ]
    // ]
    // const human = [
    //     [
    //         {
    //             id: 1,
    //             fio: "Крэйг Гиллеспи"
    //         }
    //     ],
    //     [
    //         {
    //             id: 3,
    //             fio: "Дэна Фокс"
    //         },
    //         {
    //             id: 4,
    //             fio: "Тони МакНамара"
    //         },
    //         {
    //             id: 5,
    //             fio: " Алин Брош МакКенна"
    //         }
    //     ],
    //     [
    //         {
    //             id: 6,
    //             fio: "Кристин Барр"
    //         },
    //         {
    //             id: 7,
    //             fio: "Гленн Клоуз"
    //         }
    //     ],
    //     [
    //         {
    //             id: 2,
    //             fio: "Эмма Стоун"
    //         },
    //         {
    //             id: 8,
    //             fio: "Эмма Томпсон"
    //         }
    //     ]
    // ]

    // const profession = [
    //     {
    //         id: 1,
    //         name: "Режиссер"
    //     },
    //     {
    //         id: 2,
    //         name: "Сценарий"
    //     },
    //     {
    //         id: 3,
    //         name: "Продюссер"
    //     },
    //     {
    //         id: 4,
    //         name: "В главных ролях"
    //     }
    // ]
    // const counry=[]
    // const genre = [
    //     {
    //         name: "комедия"
    //     },
    //     {
    //         name: "драма"
    //     },
    //     {
    //         name: "криминал"
    //     }
    // ]
    return (
        <Container className="mt-3"  style={{cursor: 'pointer', background: '#3C5B74', color: 'white',}}>
            <Row className="m-2">
                <Col md={4} >
                    {el_composition && el_composition.map(info =><Image width={300} height={440} className="m-2"src={process.env.REACT_APP_API_URL + info.img}/>)}
                </Col>
                <Col md={2}>
                    <Row >

                        <div className="d-flex flex-column mt-3">
                            {el_composition && el_composition.map(info =><h2  style={{color: '#B67929',}}>{info.name}</h2>)}
                            <div className="d-flex text-black-50" style = {{height: 10}}></div>
                            <div className="d-flex" style = {{height: 27}}> <h5 className="text-black-50" >Информация</h5></div>
                            <div className="d-flex text-black-50" style = {{height: 10}}></div>
                            <div className="d-flex" style = {{height: 27}}> <h6 className="text-black-50">Рейтинг</h6></div>
                            <div className="d-flex" style = {{height: 27}}> <h6 className="text-black-50">Тип</h6></div>
                            <div className="d-flex" style = {{height: 27}}> <h6 className="text-black-50">Страны</h6></div>
                            <div className="d-flex" style = {{height: 27}}> <h6 className="text-black-50">Жанры</h6></div>


                            {profession && profession.map(info =>
                                <div className="d-flex" style = {{height: 27}}>
                                    <h6 className="text-black-50">
                                        {info.name}
                                    </h6>
                                </div>
                            )}
                            <div className="d-flex" style = {{height: 27}}> <h6 className="text-black-50">Год выпуска</h6></div>
                            <div className="d-flex" style = {{height: 27}}> <h6 className="text-black-50">Описание</h6></div>
                        </div>



                    </Row>
                </Col>
                <Col md={6}>
                    <Row>
                        <div className="d-flex flex-column mt-3">

                            {/*<div className="d-flex justify-content-between align-items-center" >*/}
                            {/*    <h6> {composition.rating} </h6><h2 style = {{color: 'white'}}>{composition.name}</h2>*/}
                            {/*</div>*/}
                            {el_composition && el_composition.map(info =><h2 style = {{color: '#3C5B74'}}>{info.name}</h2>)}

                            <div className="d-flex text-black-50" style = {{height: 10}}></div>
                            <div className="d-flex" style = {{height: 27}}> <h5 style = {{color: '#3C5B74'}}>Информация</h5></div>
                            <div className="d-flex text-black-50" style = {{height: 10}}></div>
                            {el_composition && el_composition.map(info =><div className="d-flex" style = {{height: 27}}> <h6 >{info.rating} %</h6></div>)}
                            {type && type.map(info =><div className="d-flex" style = {{height: 27}}> <h6 >{info.name}</h6></div>)}



                            <div className="d-flex" style = {{height: 27}}>
                                {country && country.map(info =>
                                    <h6 className="d-flex">
                                        {info.name + ','}
                                    </h6>
                                )}
                            </div>
                            <div className="d-flex" style = {{height: 27}}>
                                {genre && genre.map(info =>
                                    <h6 className="d-flex">
                                        {info.name + ','}
                                    </h6>
                                )}
                            </div>
                            {human && human.map(info =>
                                <div className="d-flex" style = {{height: 27}}>
                                    {info && info.map(info_2 =>
                                        <h6 className="d-flex">
                                            {info_2.fio}
                                        </h6>
                                    )}
                                </div>
                            )}
                            {/*{human.map(info =>*/}
                            {/*    <div className="d-flex" style = {{height: 27}}>*/}
                            {/*        {info.map(info_2 =>*/}
                            {/*            <h6 className="d-flex">*/}
                            {/*                {info_2.fio + ','}*/}
                            {/*            </h6>*/}
                            {/*        )}*/}
                            {/*    </div>*/}
                            {/*)}*/}
                            {el_composition && el_composition.map(info =><div className="d-flex" style = {{height: 27}}> <h6 >2021</h6></div>)}
                            {el_composition && el_composition.map(info =><div className="d-flex" style = {{height: 27}}> <h6 >{info.description}</h6></div>)}


                        </div>

                    </Row>
                </Col>
            </Row>
            {/*<Row*/}
            {/*    className="d-flex justify-content-between align-items-center"*/}
            {/*    style={{width:300, height: 50, border: '5px solid lightgray'}}*/}
            {/*>*/}

            {/*    Ваша оценка*/}
            {/*    <div className="d-flex align-items-center justify-content-center">*/}
            {/*        <Button variant={"outline-dark"}>Оценить</Button>*/}
            {/*    </div>*/}

            {/*</Row>*/}
        </Container>
        // <Container className="mt-3">
        //     <Row>
        //         <Col md={4}>
        //             <Image width={300} height={440} src={composition.img}/>
        //         </Col>
        //         <Col md={2}>
        //             <Row>
        //
        //                 <div className="d-flex flex-column mt-3">
        //                     <h2 >{composition.name}</h2>
        //                     <div className="d-flex text-black-50" style = {{height: 10}}></div>
        //                     <div className="d-flex" style = {{height: 27}}> <h5 >О фильме</h5></div>
        //
        //
        //                     {description.map(info =>
        //                         <div>
        //                             {info.map(info_2 =>
        //                                 <h6 className="text-black-50">
        //                                     {info_2.row_name}
        //                                 </h6>
        //                             )}
        //                         </div>
        //                     )}
        //                 </div>
        //
        //
        //
        //             </Row>
        //         </Col>
        //         <Col md={6}>
        //             <Row>
        //                 <div className="d-flex flex-column mt-3">
        //
        //                     <div className="d-flex justify-content-between align-items-center" ><h6> {composition.rating} </h6><h2 style = {{color: 'white'}}>{composition.name}</h2></div>
        //                     <div className="d-flex" style = {{height: 10}}><h6></h6></div>
        //                 {description.map(info =>
        //                     <div className="d-flex" style = {{height: 27}}>
        //                         {info.map(info_2 =>
        //                             <h6 className="d-flex">
        //                                 {info_2.fio}
        //
        //                             </h6>
        //                         )}
        //                     </div>
        //                 )}
        //                 </div>
        //                 <hr/>
        //             </Row>
        //         </Col>
        //     </Row>
        //     {/*<Row*/}
        //     {/*    className="d-flex justify-content-between align-items-center"*/}
        //     {/*    style={{width:300, height: 50, border: '5px solid lightgray'}}*/}
        //     {/*>*/}
        //
        //     {/*    Ваша оценка*/}
        //     {/*    <div className="d-flex align-items-center justify-content-center">*/}
        //     {/*        <Button variant={"outline-dark"}>Оценить</Button>*/}
        //     {/*    </div>*/}
        //
        //     {/*</Row>*/}
        // </Container>
    );
};

export default CompositionPage;