import React, { Component } from 'react';
import "./../../App.css";
import Modifydetailscard from './Modifydetailscard';
import {Button} from 'react-bootstrap';
export default class Modifydetails extends React.Component{
   
    constructor(){
        super();
        this.state={
            searchD:false
        };
    }
   
    search = () => {
        this.setState({searchD:true}) 
    }

    onClick = (e) => {
        e.preventDefault();
    }

    render() {
        if(this.state.searchD){
            return <Modifydetailscard></Modifydetailscard>
        }
        else{
            return(              
                <React.Fragment>
                <div className="col-md-6 offset-md-3 details-body">
                    <div className="card custom-card bg-card ">
                    <div className="card-body"> 
                    
                    <div>
                        
                        <h3 className="headerstyle">MODIFY DETAILS</h3>
                        
                        <form class="form-horizontal"  style={{backgroundColor:"white", width:"100%"}} >
                            <div class="form-group">
                            <div class="col-md-12 offset-sm-1"> 
                                <label class="control-label" className="center">Enter Employee ID</label>
                                <div class="col-sm-10 " >
                                    <div class="input-group input-group-sm">
                                        <input class="form-control" id="empid" placeholder="Employee ID" type="number"/>
                                    </div>
                                </div>
                            </div>
                            </div>
    
                            <div class="form-group">
                            <div class=" col-sm-10 offset-sm-4">
                                {/* <button className="buttons" onClick={(e) => {this.search();this.onClick(e); }}>Search</button>
                                <button className="buttons"><a href="/" target="_top" >Back</a></button> */}
                                <Button variant="flat" onClick={(e) => {this.search();this.onClick(e);}}>Submit</Button>
                        <span>   </span>
                <Button variant="flat" href="/"  style ={ {  paddingLeft: 10}}>Back</Button>
                            </div>
                            </div>
                        </form>
                    </div>
    
                    </div>
                    </div>
                    </div>
            
                    </React.Fragment>                    
                )
            }
        
        }
  }



