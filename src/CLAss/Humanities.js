import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../images/4.jpeg"
import img2 from "../images/5.jpg"
import "./engineering.css"
import "../Navfolder/file.css"
import Art from "../Card12/Art"
import Fashion from "./Fashion"
export default class Humanities extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
    };
    return (
        <div className="engineercont white" >
        <Slider {...settings}>
          <div>
          <img src="https://jeeadv.ac.in/img/iitd.jpg" className="responsive-img1 center" alt=""/>
          </div>
          <div>
          <img src={img1} className="responsive-img1 center" alt=""/>
          </div>
          <div>
          <img src={img2} className="responsive-img1 center" alt=""/>
          </div>
          <div>
          <img src={img1} className="responsive-img1 center" alt=""/>
          </div>
          <div>
          <img src={img1} className="responsive-img1 center" alt=""/>
          </div>
        </Slider>
        <div className="engineercont1">
        <Art />
        <Fashion />
        </div>
      </div>
    );
  }
}