import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Tracker from './components/Tracker';
import Home from './components/Home';
import AddTeam from './components/AddTeam';
import AddEmployee from './components/AddEmployee';


import './App.css';

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
        <Navbar />
        <Route exact path='/' component ={Tracker} />
        <Route exact path='/team' component ={AddTeam} />
        <Route exact path='/employee' component ={AddEmployee} />
        <Route exact path='/Home' component ={Home} />
        </div>
      </ Router>
  );
}
}

export default App;
