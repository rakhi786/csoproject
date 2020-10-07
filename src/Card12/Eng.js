import React, { Component } from 'react'
import Card from './CardUI'
import "../CSS/Card-style.css"
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpeg'
import img4 from '../images/img3.jpg'
import img5 from '../images/img9.jpg'
import img6 from '../images/img7.jpg'
export default class Eng extends Component {
    render() {
        return (
        <div className="container">
        <div className="row">
         <Card imgsrc={img1} title="IIT's" CLICK="CLICK HERE" link1="/iits"/> 
         <Card imgsrc={img2} title="NIT's" CLICK="CLICK HERE" link1="/nits"/> 
         <Card imgsrc={img3} title="BIT's" CLICK="CLICK HERE" link1="/bits"/> 
        </div>
        <div className="row">
         <Card imgsrc={img4} title="CLASS 11 TO 12" CLICK="CLICK HERE" link1="/celeven"/> 
         <Card imgsrc={img5} title="Medical" CLICK="CLICK HERE" link1="/medical"/> 
         <Card imgsrc={img6} title="Engineering" CLICK="CLICK HERE" link1="/engineering"/>
        </div>
        </div>
        )
    }
}
