import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import {COMPOSITION_ROUTE} from "../utils/consts";

const CompositionItem = ({composition}) => {
    const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(COMPOSITION_ROUTE + '/' + composition.id)}>
            <Card style={{width: 150, cursor: 'pointer', background: '#3C5B74',border:'#3C5B74', color: "white"}} >
                <Image width={150} height={220} src={process.env.REACT_APP_API_URL + composition.img}/>
                <div className="d-flex justify-content-between align-items-center">
                    <div>{composition.name}</div>
                    <div className="d-flex align-items-center">
                        {/*<div>{composition.rating}</div>*/}
                    </div>
                </div>
                {/*<div>moment().format("MMM Do YY")</div>*/}
            </Card>
        </Col>
    );
};

export default CompositionItem;