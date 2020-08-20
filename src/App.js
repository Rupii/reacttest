import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Tracker from './components/Tracker';
import Home from './components/Home';
import AddTeam from './components/AddTeam';
import AddEmployee from './components/AddEmployee';
import Adddetails from './components/dyna/Adddetails';
import Modifydetails from './components/dyna/Modifydetails';
import Viewdetails from './components/dyna/Viewdetails';

import AddTrack from './components/sourabh/add';
import ModifyTrack from './components/sourabh/modify';
import ViewTrack from './components/sourabh/view';

import NTGenrate from './components/NTGenrate';

// import Img1 from './assets/Image1.jpg';
import Img1 from './assets/wallpaper.jpg';

import './App.css';

class App extends Component {
  render() {

    return (
      // <div className="App" style=>
        <div className="page-container" style={{ backgroundImage: `url(${Img1})` }}>
          <div className="content-wrap">
            <Router>

              <Navbar />
              <Route exact path='/Tracker' component={Tracker} />
              <Route exact path='/team' component={AddTeam} />
              <Route exact path='/employee' component={AddEmployee} />
              <Route exact path='/' component={Home} />
              <Route exact path='/Add' component={Adddetails} />
              <Route exact path='/Modify' component={Modifydetails} />
              <Route exact path='/View' component={Viewdetails} />
              <Route exact path='/addTrack' component={AddTrack} />
              <Route exact path='/modifyTrack' component={ModifyTrack} />
              <Route exact path='/viewTrack' component={ViewTrack} />
              <Route exact path='/NTID' component={NTGenrate} />

              <Footer />

            </ Router>
            
          </div>
        </div>
      // </div>
    );
  }
}

export default App;
