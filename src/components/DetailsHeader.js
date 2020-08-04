import React, { Component } from 'react'
import {Card, Row,Col} from 'react-bootstrap'

export class DetailsHeader extends Component {
    render() {
        return (
            <Card className="detailsHeader">
                 
                <Row>
                    <Col><b><span>  </span>Track : </b>{this.props.track}
                    </Col>
                    <Col><b>Sub-track : </b>{this.props.subtrack}
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <b>Date : </b>
                    {
                        this.props.startDate.substr(0, 10)
                    }
                    </Col>
                </Row>
                 
                  
           
                
                <br></br>
            </Card>
                
               
        )
    }
}

export default DetailsHeader;
