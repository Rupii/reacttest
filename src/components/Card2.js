import React, {Component} from 'react';
import Card from './Card1';
import img1 from'./../assets/TMobile_13.jpg';
import {  Row, Col } from 'react-bootstrap';

class Card2 extends Component {
    render() {
        return (
            <div className = "container-fluid d-flex justify-content-center">
                <Row>
                    <Col lg="30rem">
                    <Card/>
                    </Col>
                <Col>
                </Col>
                </Row>
            
              <Row>
              <Col lg="30rem">
            </Col>
                </Row>
                
            </div>

        );
    }
}

export default Card2;