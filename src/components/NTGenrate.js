import React, { Component } from 'react';
import './../validator.js';
import axios from 'axios';

import './nt.css';
import {Container, Col, Form,FormGroup,Row, Label, Input,Button} from 'reactstrap';


export class NTGenrate extends Component {
  constructor() {
    super();
    this.state = {
        firstname: '',
        lastname: '',
        dob:'',
        uid:'',
        phone: '',
        mail: '',
        updated: false
    }
}
  submithandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("/send", this.state ).then(response => {
            this.setState({
              updated: true
            })
            
        }
        );
    }

    firstName= e =>{  
      this.setState({
        firstname: e.target.value
      })
    }
    lastName = e =>{
      this.setState({
        lastname: e.target.value
      })
    }
    dob = e =>{
      this.setState({
        dob: e.target.value
      })
    }
    uid = e =>{
      this.setState({
        uid: e.target.value
      })
    }
    phone = e =>{
      this.setState({
        phone: e.target.value
      })
    }
    mail = e =>{
      this.setState({
        mail: e.target.value
      })
    }
    
    render() {
     
      
      return (
           <div className="container">
             
  <div className="wrapper animated bounceInUp">
    <div className="company-info">
      <h3>NT ID Creation</h3>
             <div>
               <p>
                 submit your details for nt Id creation
               </p>
             </div>
    </div>
    <div className="main">
      <h2>E-mail Us</h2>
      {/* <h3 style={{"color:green"}}></h3> */}
        
      {this.state.updated
                            ? <div class="alert alert-success">
                                <strong><a href="/">Success!</a></strong> updated
                          </div>
                            : <p></p>

                        }
             
      <form id="form"  onSubmit={this.submithandler} >
        <div>
          <label >First Name</label>
          <sup id="firstError" className="animated shake " style={{color:"red"}} ></sup>
          <input id="firstname" type="text" name="firstname" pattern="[A-Za-z]*" onChange={this.firstName}  required/>
        </div>
      
        <div>
          <label>Last Name</label>
          <sup id="lastError" ></sup>
          <input id="lastname" type="text" name="lastname" pattern="[A-Za-z]*" onChange={this.lastName} required/>
        </div>

        <div>
          <label>Date Of Birth</label>
          <sup id="dobError" ></sup>
          <input type="text" id="dob" placeholder="DD-MMM" pattern="[0-9]{2}-[A-Za-z]{3}"  onChange={this.dob}           name="dob" required/>
        </div>
        <div>
          <label >Unique ID
            <span title="Last 4 numeric digits of SSN or any national ID (like Passport or PAN or any other)"><i
                className="fa fa-info-circle" aria-hidden="false"></i></span>
          </label>
          <sup  id="uidError" ></sup>
          <input id="uid" type="text" name="uid" pattern="[0-9]{4}" onChange={this.uid} required/>
        </div>
        
        <div>
          <label>Phone Number</label>
          <sup id="phoneError" ></sup>
          <input id="phone" type="text" name="phone" pattern="[0-9]{10}" maxlength="10" onChange={this.phone}
            required/>
        </div>
        <div>
          <label>Infosys E-mail</label>
          <sup id="mailError" ></sup>
          <input id="mail" type="email" name="email" onChange={this.mail} required/>
        </div>

        <Button type="submit" variant="flat" >Submit</Button>

      </form>
    </div>
    </div>
    </div>
        )
    }
}

export default NTGenrate;
