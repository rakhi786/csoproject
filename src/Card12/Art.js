import React, { Component } from 'react'
import Card from './CardUI'
import "../CSS/Card-style.css"
import img1 from '../images/law.jpeg'
import img2 from '../images/media.jpeg'
import img3 from '../images/3.jpeg'
import img4 from '../images/img3.jpg'
import img5 from '../images/img9.jpg'
import img6 from '../images/img7.jpg'
export default class Art extends Component {
    render() {
        return (
        <div className="container">
        <div className="row">
         <Card imgsrc={img1} title="Law" CLICK="CLICK HERE" link1="/law"/> 
         <Card imgsrc={img2} title="Animation & Multimedia" CLICK="CLICK HERE" link1="/media"/> 
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
