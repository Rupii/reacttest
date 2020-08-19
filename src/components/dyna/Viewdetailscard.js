import React, { Component } from "react";
import "./../../App.css";
import {Button} from 'react-bootstrap';       

export default function Viewdetailscard(props){
    return(

        <div>
        <div className="col-md-6 offset-md-3 details-body">   
        <div className="row">   
        <div className="card custom-card bg-card "> 
        <div className="card-body"> 
        
        <div>
            <h3 className="headerstyle">VIEW DETAILS</h3>   
        <form class="form-horizontal" >
            <div class="form-group">
                <div class="col-md-12 offset-sm-1"> 
                    <label class="control-label" >Employee ID</label>
                    <div class="col-sm-10">
                        <div class="input-group input-group-sm">
                            <div className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 offset-sm-1"> 
                    <label class="control-label">Employee Name</label>
                    <div class="col-sm-10">
                        <div class="input-group input-group-sm">
                            <div className="form-control"/>            
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 offset-sm-1"> 
                    <label class="control-label">Track</label>
                    <div class="col-sm-10">
                        <div class="input-group input-group-sm">
                            <div className="form-control"/>            
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 offset-sm-1"> 
                    <label class="control-label">Sub-Track</label>
                    <div class="col-sm-10">
                        <div class="input-group input-group-sm">
                            <div className="form-control"/>            
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 offset-sm-1"> 
                    <label class="control-label">PU</label>
                    <div class="col-sm-10">
                        <div class="input-group input-group-sm">
                            <div className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-12 offset-sm-1">                
                    <label class="control-label">Location</label>               
                    <div class="col-sm-10">  
                        <div class="input-group input-group-sm">              
                            <div className="form-control"/>             
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 offset-sm-1">                
                    <label class="control-label">Sub-Location</label>               
                    <div class="col-sm-10">  
                        <div class="input-group input-group-sm">            
                            <div className="form-control"/>          
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 offset-sm-1">  
                    <label class="control-label">Role</label>
                    <div class="col-sm-10">
                        <div class="input-group input-group-sm"> 
                            <div className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 offset-sm-1">
                <label class="control-label">Start Date</label>
                    <div class="col-sm-10">
                        <div class="input-group input-group-sm"> 
                            <div className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
            <div class="col-md-12 offset-sm-1">
                <label class="control-label">End Date</label>
                    <div class="col-sm-10">
                        <div class="input-group input-group-sm"> 
                            <div className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div class="form-group">
                <div class=" col-sm-10 offset-sm-5">
                {/* <button className="buttons"><a href="/" target="_top" >Back</a></button> */}
    
                <Button variant="flat" href="/"  style ={ {  paddingLeft: 10}}>Back</Button>
                </div>
            </div>
        </form>
        </div>

        </div>
        </div>
        </div>
        </div> 
        
        </div>
        )
    }




