import React, { Component } from 'react'
import Card from './CardUI'
import "../CSS/Card-style.css"
import img1 from '../images/img5.jpg'
import img2 from '../images/img4.jpg'
import img3 from '../images/img10.jpg'
import img4 from '../images/img3.jpg'
import img5 from '../images/img9.jpg'
import img6 from '../images/img7.jpg'
import img7 from '../images/img14.jpg'
import img8 from '../images/img11.jpg'
import img9 from '../images/img15.jpg'
export default class Cards extends Component {
    render() {
        return (
        <div className="container">
        <div className="row">
         <Card imgsrc={img1} title="KIDS" CLICK="CLICK HERE" link1="/kids"/> 
         <Card imgsrc={img2} title="CLASS 4 TO 7" CLICK="CLICK HERE" link1="/cfour"/> 
         <Card imgsrc={img3} title="CLASS 8 TO 10" CLICK="CLICK HERE" link1="/ceight"/> 
        </div>
        <div className="row">
         <Card imgsrc={img4} title="CLASS 11 TO 12" CLICK="CLICK HERE" link1="/celeven"/> 
         <Card imgsrc={img5} title="Medical" CLICK="CLICK HERE" link1="/medical"/> 
         <Card imgsrc={img6} title="Engineering" CLICK="CLICK HERE" link1="/engineering"/>
        </div>
        <div className="row">
         <Card imgsrc={img7} title="Humanities" CLICK="CLICK HERE" link1="/arts"/> 
         <Card imgsrc={img8} title="Commerce" CLICK="CLICK HERE" link1="/commerce"/> 
         <Card imgsrc={img9} title="GovernmentJobs" CLICK="CLICK HERE" link1="/govt"/> 
        </div>
        </div>
        )
    }
}
