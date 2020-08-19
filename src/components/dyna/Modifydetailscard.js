import React, { Component } from "react";
import "./../../App.css";
import {Container, Col, Form,FormGroup,Row, Label, Input} from 'reactstrap';
import {Button} from 'react-bootstrap';

function validate(employeeId, employeeName, track, subTrack, pu, location, subLocation, role, startdate ,enddate) {
    return {
        employeeId: employeeId.length === 0,
        employeeName: employeeName.length === 0,
        track:track.length === 0,
        subTrack:subTrack.length === 0,
        pu:pu.length === 0,
        location:location.length === 0,
        subLocation:subLocation.length === 0,
        role:role.length === 0,
        startdate:startdate.length === 0,
        enddate:enddate.length === 0 
    };
  }

class Modifydetailscard extends Component{
    constructor(){
        super()
        this.state = {
            employeeId: '' ,
            employeeName: '' ,
            track:'',
            subTrack:'',
            pu: '' ,
            location: '' ,
            subLocation: '' ,
            role: '' ,
            startdate:'',
            enddate:''          
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    onSubmit = (event) => {
        if (!this.canBeSubmitted()) {
        event.preventDefault();
        return;
    }
    const { employeeId, employeeName , track, subTrack, pu, location, subLocation, role, startdate, enddate} = this.state;
    alert('Your data is saved and submitted successfully');
  };

    canBeSubmitted() {
        const errors = validate(this.state.employeeId, this.state.employeeName,this.state.track,
            this.state.subTrack,this.state.pu,this.state.location,this.state.subLocation,
            this.state.role,this.state.startdate,this.state.enddate);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
  }

    componentDidMount(){
        if(this.props.item){
            const { employeeId, employeeName, track, subTrack, pu, location, subLocation, role, startdate, enddate} = this.props.item
            this.setState({ employeeId, employeeName, track, subTrack, pu, location, subLocation, role, startdate, enddate})
          }
      }

    render()
    {
        const errors = validate(this.state.employeeId, this.state.employeeName,this.state.track,
            this.state.subTrack,this.state.pu,this.state.location,this.state.subLocation,
            this.state.role,this.state.startdate,this.state.enddate);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
    return(
        <div>
        <div className="col-md-6 offset-md-3 details-body">   
        {/* <div className="row">    */}
        <div className="card custom-card bg-card "> 
        <div className="card-body">       
        <div>
            <h3 className="headerstyle">MODIFY DETAILS</h3>   
            <Form>
            <div class="form-group">
                <div class="col-md-12 offset-sm-1"> 
                <label class="control-label" >Employee ID</label><span className="important">*</span>
                <div class="col-sm-10">
                <div class="input-group input-group-sm">
                <Input 
                    class="form-control" 
                    name="employeeId"
                    className={errors.employeeId ? "error" : ""}
                    onChange={this.handleChange}
                    value={this.state.employeeId}
                    title="Employee ID"
                    placeholder="Enter Employee ID" 
                    type="number"
                />
                </div>
            </div>
            </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 offset-sm-1"> 
                <label class="control-label">Employee Name</label><span className="important">*</span>
                <div class="col-sm-10">
                <div class="input-group input-group-sm">
                <Input 
                    class="form-control" 
                    name="employeeName"
                    className={errors.employeeName ? "error" : ""}
                    value={this.state.employeeName}
                    onChange={this.handleChange}
                    title="Employee Name"
                    placeholder="Enter Employee name" 
                />                
            </div>
            </div>
            </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 offset-sm-1"> 
                <label class="control-label">Track</label><span className="important">*</span>
                <div class="col-sm-10">
                <div class="input-group input-group-sm">
                <Input 
                    class="form-control" 
                    name="track"
                    className={errors.track ? "error" : ""}
                    value={this.state.track}
                    onChange={this.handleChange}
                    title="Track"
                    placeholder="Enter Track" 
                />                
            </div>
            </div>
            </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 offset-sm-1"> 
                <label class="control-label">Sub-Track</label><span className="important">*</span>
                <div class="col-sm-10">
                <div class="input-group input-group-sm">
                <Input 
                    class="form-control" 
                    name="subTrack"
                    className={errors.subTrack ? "error" : ""}
                    value={this.state.subTrack}
                    onChange={this.handleChange}
                    title="Sub-Track"
                    placeholder="Enter Sub-Track" 
                />  
                {/* <select 
                    class="form-control"
                    name="subTrack"                              
                    value={this.state.subTrack}
                    onChange={this.handleChange}
                    title="Sub-Track"
                >    
                    <option value="">--Select Sub-Track--</option>
                    <option value="Finance">Finance</option>
                    <option value="Vega">Vega</option>  
                    <option value="IDW">IDW</option>
                    className={errors.subTrack ? "error" : ""}                 
                </select>               */}
            </div>
            </div>
            </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 offset-sm-1"> 
                <label class="control-label">PU</label><span className="important">*</span>
                <div class="col-sm-10">
                <div class="input-group input-group-sm">
                <Input 
                    class="form-control" 
                    name="pu"
                    className={errors.pu ? "error" : ""}
                    value={this.state.pu}
                    onChange={this.handleChange} 
                    title="PU"
                    placeholder="Enter PU"  
                /> 
            </div>
            </div>
            </div>
            </div>

            <div class="form-group">
                <div class="col-md-12 offset-sm-1">                
                <label class="control-label">Location</label><span className="important">*</span>               
                <div class="col-sm-10">  
                <div class="input-group input-group-sm">              
                <select 
                    value={this.state.location}
                    class="form-control"
                    name="location"
                    title="Location"
                    onChange={this.handleChange}
                >    
                    <option value="">--Select Location--</option>
                    <option value="offshore">Offshore</option>
                    <option value="onshore">Onshore</option>  
                    className={errors.location ? "error" : ""}                 
                </select>               
            </div>
            </div>
            </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 offset-sm-1">                
                <label class="control-label">Sub-Location</label><span className="important">*</span>               
                <div class="col-sm-10">  
                <div class="input-group input-group-sm">            
                <select 
                    value={this.state.subLocation}
                    class="form-control"
                    name="subLocation"
                    title="Sub-Location"
                    onChange={this.handleChange}
                >    
                    <option value="">--Select Sub-Location--</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Bhubaneswar">Bhubaneswar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Gurgaon">Gurgaon</option>
                    <option value="Hyderabad STP:Pearl Park">Hyderabad STP:Pearl Park</option>
                    <option value="Hyderabad SEZ:Prakriti Park">Hyderabad SEZ:Prakriti Park</option>
                    <option value="Indore">Indore</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Mangalore">Mangalore</option>
                    <option value="Mangalore SEZ">Mangalore SEZ</option>
                    <option value="Mohali">Mohali</option>
                    <option value="Mysore">Mysore</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Pune">Pune</option>
                    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                    <option value="Americas">Americas</option>
                    <option value="Australia">Australia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="China-Beijing">China-Beijing</option>
                    <option value="China-Dalian">China-Dalian</option>
                    <option value="China-Hangzhou">China-Hangzhou</option>
                    <option value="China-Qingdao">China-Qingdao</option>
                    <option value="China-Shanghai">China-Shanghai</option>
                    <option value="China-Shenzhen">China-Shenzhen</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Singapore">Singapore</option>
                    className={errors.subLocation ? "error" : ""}
                </select>              
            </div>
            </div>
            </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 offset-sm-1">  
                <label class="control-label">Role</label><span className="important">*</span>
                <div class="col-sm-10">
                <div class="input-group input-group-sm"> 
                <Input 
                    class="form-control" 
                    name="role"
                    value={this.state.role}
                    onChange={this.handleChange}
                    className={errors.role ? "error" : ""}
                    title="Role"
                    placeholder="Enter your role" 
                /> 
            </div>
            </div>
            </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 offset-sm-1">
                <label class="control-label">Start Date</label><span className="important">*</span>
                <div class="col-sm-10">
                <div class="input-group input-group-sm"> 
                <Input 
                    type='date'
                    name="startdate"
                    id="startdate"
                    class="form-control"                  
                    onChange={this.handleChange}
                    value={this.state.startdate}   
                    className={errors.startdate ? "error" : ""}
                /> 
            </div>
            </div>
            </div>
            </div>
            <div class="form-group">
            <div class="col-md-12 offset-sm-1">
                <label class="control-label">End Date</label><span className="important">*</span>
                <div class="col-sm-10">
                <div class="input-group input-group-sm"> 
                <Input 
                    type='date'
                    name="enddate"
                    id="enddate"
                    class="form-control"
                    onChange={this.handleChange}
                    value={this.state.enddate} 
                    className={errors.enddate ? "error" : ""}  
                /> 
            </div>
            </div>
            </div>
            </div>

            <div class="form-group"/>
                <div class="col-sm-10 offset-sm-4">
                {/* <button disabled={isDisabled} className="buttons" onClick={event => this.onSubmit(event)}>Submit</button>
                <button className="buttons"><a href="/" target="_top" >Back</a></button> */}
                <Button  disabled={isDisabled} variant="flat" onClick={this.onSubmit}>Submit</Button>
                        <span>   </span>
                <Button variant="flat" href="/"  style ={ {  paddingLeft: 10}}>Back</Button>
            </div>
            </Form>
        </div>
        </div>
        </div>
        </div>
        </div> 
        // </div>
        )
    }
}

export default Modifydetailscard

