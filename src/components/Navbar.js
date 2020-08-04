import React, { Component } from 'react'
import {Button, Card, Nav, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
class Navbar extends Component {
    render() {
        return (
          
                   
         
                <nav className="navbar mr-auto navbar-expand-sm navbar-dark  "   >
                    <div class="container">
                        <a   className="navbar-brand  font-weight-bold" href="/">Infosys | T-Mobile</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                       <a href="/home">/</a>
                       
                    </div>
                </nav>
            
            
        )
    }
}

export default Navbar;
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