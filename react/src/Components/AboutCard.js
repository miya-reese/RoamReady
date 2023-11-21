import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../Classes/UserObject';

export default function AboutCard() {
    return (
        <Row>
            <Col>
                <div className="Anna">
                    <h1>Anna Makarewicz</h1>
                </div>
            </Col>
            <Col>
                <div className="Drew">
                    <h1>Drew Kim</h1>
                </div>
            </Col>
            <Col>
                <div className="Miya">
                    <h1>Miya Reese</h1>
                </div>
            </Col>
            <Col>
                <div className="Soren">
                    <h1>Soren Fliegel</h1>
                </div>
            </Col>
        </Row>
    )
}
