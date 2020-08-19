import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from "react-bootstrap";
import { getBox } from 'css-box-model';
import img1 from'./../assets/TMobile_13.jpg';
// import './cardStyle.css' ;


const Card1 = (props) => {
  return (
    <div className = "card text-center shadow">
      <div className = "overflow">
          <img src = {img1} alt = "image1" className="card-img-top" />
      </div>

      <div className = "card-body text-dark">
         
        <h4 className = "card-text text-secondary">
          Stick Together
         </h4>
         <a href = "https://www.t-mobile.com/about-us" className = "btn btn-outline-success"> About Us </a>
         
         
        </div>

     </div>

  );
};

export default Card1;