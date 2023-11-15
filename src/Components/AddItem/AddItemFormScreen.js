import React from 'react';
import AddItemFormImage from './AddItemFormImage';
import AddItemForm from './AddItemForm';
import { Col, Row } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';

export default function AddItemFormScreen()
{
    const location = useLocation();
    const {index, handleItemDelete} = location.state;
    return(
        <Row>
            <Col xs={12} sm={6} className="p-0 m-0">
                <AddItemFormImage />
            </Col>
            <Col xs={12} sm={6} className="p-3 pb-0 pt-0 m-0" style={{background:'white'}}>
                <AddItemForm index={index} handleItemDelete={handleItemDelete}/>
            </Col>
        </Row>
    );
}