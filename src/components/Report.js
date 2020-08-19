import React, { Component } from 'react';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

import { Card, Row, Col } from 'react-bootstrap';

export class Report extends Component {
    constructor() {
        super();
        this.state = {
            newdata: [],            
            headCount: 0,
            prensentCount: 0,
            absentCount: 0,
            data: {columns:[ {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      }], rows:[]}
        }
    }

    componentDidMount = () => {

        axios.post("/btrackee", { track: this.props.track, subtrack: this.props.subtrack, startDate: this.props.startDate }).then(response => {
            for (var i in response.data.rest) {
                console.log(i)
            }
            console.log(typeof (response.data.rest))
            this.setState({
               
                newdata: response.data.rest,
               
            });
           
            
            this.setState({
                headCount: this.state.newdata.length
            })
            const att = {
                "Full working day": 1,
                "Comp-off": 1,
                "Sick": 0,
                "PTO": 0,
                "Holiday": 0,
                "On-Duty": 0.5,
                "Half working day": 0.5
            }
            this.state.newdata.forEach((v, i) => {
                var x = v.attendence.trim()

                this.setState({
                    prensentCount: this.state.prensentCount + att[x]
                })
            })
            this.setState({
                absentCount: this.state.headCount - this.state.prensentCount
            })

        }
        );


    }
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
                <Row>
                    <Col>
                        <b>Total HeadCount in Team : </b>
                        {this.state.headCount}
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <b>Total Presenties : </b>
                        {this.state.prensentCount}
                    </Col>
                    <Col>
                        <b>Total Absenties : </b>
                        {this.state.absentCount}
                    </Col>
                </Row>

                <br></br>
               
            </Card>
        )
    }
}

export default Report;
