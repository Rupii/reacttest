import React, { Component } from 'react'
// import {Button, Card, Nav, Form} from 'react-bootstrap'
import { Navbar, Nav ,NavDropdown ,Form,Button,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const HoverText = styled.p`
	color: black;
	:hover {
    color: white;
    background-color:#e20074;
		cursor: pointer;
	}
`

class Nabar extends Component {
    render() {
        return (
//           <div>
//  <nav className="navbar mr-auto navbar-expand-sm navbar-dark  "   >
//                     <div class="container">
//                         <a   className="navbar-brand  font-weight-bold" href="/">Infosys | T-Mobile</a>
//                         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
//                             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                             <span class="navbar-toggler-icon"></span>
//                         </button>
                       
                       
//                        <div class="collapse navbar-collapse" id="navbarNav">
// <ul class="navbar-nav">
//     <li class="nav-item active">
//         <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
//     </li>
    
//     <li class="nav-item">
//         <a class="nav-link" href="/team">Add Team</a>
//     </li>
//     <li class="nav-item">
//         <a class="nav-link" href="/employee">Add Employee</a>
//     </li>
//     <li class="nav-item">
//         <a class="nav-link" href="/tracker">Daily Tracker</a>
//     </li>
// </ul>
// </div>
//                     </div>
//                     <a href="/home">/</a>   

//                 </nav>
               
//                 </div>
<Navbar style={{backgroundColor:"#ea0a8e"}} collapseOnSelect expand="lg" variant="dark">
<Navbar.Brand className="font-weight-bold" href="/">
Infosys | T-Mobile</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav" style={{backgroundColor:"#ea0a8e",color:"white",width:"155px"}}>
  <Nav className="decorated-link mr-auto " style={{backgroundColor:"#ea0a8e",color:"white",width:"155px"}}>
    <NavDropdown title="Team Member" style={{backgroundcolor:"#ea0a8e", color:"white"}} id="collasible-nav-dropdown">
      <NavDropdown.Item style={{textAlign:"center",color:"Black",width:"158px",height:"24px",fontSize:"15px",padding:"0px"}} href="/Add"><HoverText>Add</HoverText></NavDropdown.Item>
      <NavDropdown.Item style={{color:"Black",width:"155px"}} href="/Modify">Modify</NavDropdown.Item>
      <NavDropdown.Item style={{color:"Black",width:"155px"}} href="/view">View</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Project Track Details" id="collasible-nav-dropdown" >
      <NavDropdown.Item style={{color:"Black",width:"155px"}} href="/AddTrack">Add</NavDropdown.Item>
      <NavDropdown.Item style={{color:"Black",width:"155px"}} href="/ModifyTrack">Modify</NavDropdown.Item>
      <NavDropdown.Item style={{color:"Black",width:"155px"}} href="/ViewTrack">View</NavDropdown.Item>
    </NavDropdown>
    
    <Nav.Link href="/Tracker" style={{color:"white"}}>Tracker</Nav.Link>
    <Nav.Link href="/NTID" style={{color:"white"}}>NTID</Nav.Link>

  </Nav>
  
  <Nav>
    <Nav.Link href="About" style={{color:"white"}}>About</Nav.Link>
    <Nav.Link href="#" style={{color:"white"}}>Feedback</Nav.Link>
    <Nav.Link href="#" style={{color:"white"}}>
      Contact Us
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
        )
    }
}

export default Nabar;
{/* <div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
    <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/team">Add Team</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/employee">Add Employee</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/tracker">Daily Tracker</a>
    </li>
</ul>
</div> */}
