import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class Example extends React.Component {
  state = {
    startDate: new Date()
  };
 
 
 
  render() {
    return (
      <DatePicker
      dateFormat="yyyy/MM/dd"
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}
export default Example;