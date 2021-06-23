import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import GenreBar from "../components/GenreBar";
import CompositionList from "../components/CompositionList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchComposition, fetchGenre, fetchTypes} from "../http/compositionAPI";

const Shop = observer(() => {
    const {composition} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data => composition.setTypes(data))
        fetchGenre().then(data => composition.setGenre(data))
        fetchComposition().then(data => composition.setComposition(data.rows))
    },[])

    return (
        <Container style = {{background: '#3C5B74'}}>
           <Row className="mt-2" >
               <Col md={3}>
                    <TypeBar/>
               </Col>
               <Col md={9}>
                    {/*<GenreBar/>*/}
                   <CompositionList/>
               </Col>
           </Row>
        </Container>

    );
});

export default Shop;