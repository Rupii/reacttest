import React, { Component } from 'react';
import SelectTrack from './SelectTrack'
import SelectSub from './SelectSub';
import TrackerDetails from './TrackerDetails';
import DetailsHeader from './DetailsHeader';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Report from './Report';
// import DatePicker from './DatePicker';
import DatePicker from "react-datepicker";
import { Card, Container, Button,Row, Col,  Jumbotron } from 'react-bootstrap';



import "react-datepicker/dist/react-datepicker.css";


class Tracker extends Component {
    constructor() {
        super();
        this.state = {
            track: '',
            subtrack: '',
            startDate: new Date(),
            true: false,
            setRt:false
        }
    }
    trackChange = (event) => {
        this.setState({
            track: event.target.value,
            true: false,
            setRt : false
        })
        console.log(this.state.track)
        console.log(this.state.date)
    }
    subtrackChange = (event) => {
        this.setState({
            subtrack: event.target.value,
            true: false,
            setRt : false
        })
        console.log("onChange", event.target.value)

    }
    handleChange = date => {
        this.setState({
            startDate: date,
            true: false,
            setRt : false
        });
        
        console.log(date.toISOString().substr(0, 10))
        
    };
    setTrue = () => {
        this.setState({
            true: true,
            setRt : false
        })
    }
    setReport = () =>{
        this.setState({
            setRt : true,
            true: false
        })
    }

   

    render() {
       

        return (
            <Container>
            
                {/* <Card style={{ width: '80rem', align:"center"}}> */}
                    <br></br>
                

                    <h2 style={{align:"center"}}> Daily Activity</h2>
                    
                
           
            <Row >  
            
                <Col  lg="30rem" >
                
                    <br></br>
                <Card style={{ width: '16rem' }}>
                
                        <SelectTrack slectTrackChange={this.trackChange} />
                        <br></br>
                        <SelectSub track={this.state.track} selectSubtrackChange={this.subtrackChange} />
                        <br></br>
                       <lable className="Calender">
                        <DatePicker
                        //  format= 'DD-MM-YYYY'
                        selected={this.state.startDate}
                        maxDate={new Date}
                        onChange={this.handleChange}
                        
                    /> <DateRangeIcon /></lable>
                    
                    
                        
                        <br></br>
                </Card>
                <br></br>
                <Button variant="flat" onClick={this.setTrue}>Submit</Button>
                <span>      </span>
                <Button variant="flat" onClick={this.setReport}  style ={ {  paddingLeft: 10}}>View Report</Button>
                </Col>
               
                <Col >
                    <br></br>
                <Card style={{width: '60rem', height: '60rem'}} >
                   
                    <div class="col-md-auto">
                        {/* {this.state.track && this.state.subtrack  */}
                         {this.state.true
                            ? <div> <br></br>
                            <DetailsHeader startDate={this.state.startDate.toISOString()}
                             subtrack={this.state.subtrack} track={this.state.track}
                             />        
                            <TrackerDetails track={this.state.subtrack} subtrack={this.state.subtrack} startDate={this.state.startDate}/>
                            </div>
                            : <p></p>
                        }
                        {this.state.setRt
                            ? <Report 
                            track={this.state.subtrack} 
                            subtrack={this.state.subtrack} 
                            startDate={this.state.startDate.toISOString()}/>
                            : <p></p>
                        }
                       
                    </div>
                    <br></br>
                </Card>
                </Col>
                </Row>
                {/* </Card> */}
                </Container>
        )
    }
}

export default Tracker;