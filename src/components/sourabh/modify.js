import React, { Component } from "react";  
import "./../../App.css";  
// import "../index.css";  
import {Container, Col, Form,FormGroup,Row, Label, Input} from 'reactstrap';  
import {Button} from 'react-bootstrap';
function validate(track, subTrack) {  
  return { 
    track:track.length === 0,
    subTrack:subTrack.length === 0
  };  
}  

export default class ModifyTrack extends Component{  
  constructor(){  
  super()  
  this.state = {   
  track:'',  
  subTrack:''
  }  
  this.handleChange = this.handleChange.bind(this)  
  }  
   
  handleChange = (event) => {  
  this.setState({[event.target.name]: event.target.value})  
  }
  onSubmit = (event) => {  
    if (!this.canBeSubmitted()) {  
    event.preventDefault();  
    return;  
    }  
    console.log(this.state);  
    const { track, subTrack } = this.state;  
    alert('Your data has been updated successfully');  
    };  
    canBeSubmitted() {  
    const errors = validate(this.state.track, this.state.subTrack);  
    const isDisabled = Object.keys(errors).some(x => errors[x]);  
    return !isDisabled;  
    }  
    componentDidMount(){  
      if(this.props.item){  
      const { track, subTrack } = this.props.item  
      this.setState({ track, subTrack })  
      }  
      }  
      render()        
      {  
        const errors = validate(this.state.track, this.state.subTrack);  
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return (  
          <div>  
          <div className="col-md-6 offset-md-3 details-body">  
          {/* <div className="row"> */}  
          <div className="card custom-card bg-card ">  
          <div className="card-body">  
          <div>  
          <h3 className="headerstyle">MODIFY DETAILS</h3>  
         
          <Form style={{backgroundColor:"white", width:"100%"}} >  
            <div class="form-group">  
              <div class="col-md-12 offset-sm-1">  
              <label class="control-label" >Track Name</label><span className="important">*</span>  
              <div class="col-sm-10">  
              <div class="input-group input-group-sm">

              <select  
                class="form-control"  
                name="track"  
                value={this.state.track}  
                onChange={this.handleChange}  
                title="Track"  
                >  
                <option value="">-- Choose your Track --</option>  
                <option value="EDS">EDS</option>
                <option value="IDW">IDW</option> 
                <option value="Vega">Vega</option>    
                className={errors.track ? "error" : ""}  
                </select>                    
                  </div>  
                  </div>  
                  </div>  
                  </div>

              <div class="form-group">  
              <div class="col-md-12 offset-sm-1">  
              <label class="control-label" >Sub-Track Name</label><span className="important">*</span>  
              <div class="col-sm-10">  
              <div class="input-group input-group-sm">

              <select  
                class="form-control"  
                name="subTrack"  
                value={this.state.subTrack}  
                onChange={this.handleChange}  
                title="Sub-Track"  
                >  
                <option value="">-- Choose your Sub-Track --</option>  
                <option value="finance">Finance</option>
                <option value="subtrack2">Sub-Track2</option>   
                className={errors.subTrack ? "error" : ""}  
                </select>                    
                  </div>  
                  </div>  
                  </div>  
                  </div>
                  <div class="form-group">  
                  <div class="col-sm-10 offset-sm-4">  
                    {/* <button disabled={isDisabled} className="buttons" onClick={event => this.onSubmit(event)} >Modify</button>  
                    <button className="buttons"><a href="/" target="_top" >Back</a></button>   */}
                    <Button disabled={isDisabled} variant="flat" onClick={this.onSubmit}>Submit</Button>
                        <span>   </span>
                <Button variant="flat" href="/"  style ={ {  paddingLeft: 10}}>Back</Button>
                  </div>  
                  </div> 
                  <h6 style={{ fontSize: "10px", marginLeft: "228px",marginTop: "50px",color: "red" }}>Fields marked in * are mandatory</h6>  
          </Form>
          </div>   
</div>  
</div>  
</div>  
</div>  
)  
}  
}  
