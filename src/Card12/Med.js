import React, { Component } from 'react'
import Card from './CardUI'
import "../CSS/Card-style.css"
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpeg'
import img4 from '../images/img3.jpg'
import img5 from '../images/img9.jpg'
import img6 from '../images/img7.jpg'
export default class Med extends Component {
    render() {
        return (
        <div className="container">
        <div className="row">
         <Card imgsrc={img1} title="Aiims" CLICK="CLICK HERE" link1="/law"/> 
         <Card imgsrc={img2} title="Neet" CLICK="CLICK HERE" link1="/media"/> 
         <Card imgsrc={img3} title="Fashion Designing" CLICK="CLICK HERE" link1="/fashion"/> 
        </div>
        <div className="row">
         <Card imgsrc={img4} title="Hotel Management" CLICK="CLICK HERE" link1="/hotel"/> 
         <Card imgsrc={img5} title="Mass Communication" CLICK="CLICK HERE" link1="/mass"/> 
         <Card imgsrc={img6} title="Bachelor's Degree" CLICK="CLICK HERE" link1="/ba"/>
        </div>
        </div>
        )
    }
}
