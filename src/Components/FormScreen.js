import React from 'react';
import FormImage from './FormImage';
import ScratchForm from './ScratchForm';
import { Col, Row } from 'react-bootstrap';

export default function FormScreen()
{
    return(
        <Row>
            <Col xs={12} sm={6} className="p-0">
                <FormImage />
            </Col>
            <Col xs={12} sm={6} className="p-3 pb-0 pt-0 m-0" style={{background:'white'}}>
                <ScratchForm />
            </Col>
        </Row>
    );
}