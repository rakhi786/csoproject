import React, { Component } from 'react'
import Card from './CardUI'
import img1 from '../images/img5.jpg'
import img2 from '../images/img4.jpg'
import img3 from '../images/img10.jpg'
import img4 from '../images/img3.jpg'
export default class Cards extends Component {
    render() {
        return (
        <div className="container-fluid d-flex justify-content-center">
        <div className="row">
        <div className="col-md-3"> <Card imgsrc={img1} title="KIDS" CLICK="CLICK HERE" /> </div>
        <div className="col-md-3"> <Card imgsrc={img2} title="CLASS 4 TO 7" CLICK="CLICK HERE"/> </div>
        <div className="col-md-3"> <Card imgsrc={img3} title="CLASS 8 TO 10" CLICK="CLICK HERE" link1="/ceight"/> </div>
        <div className="col-md-3"> <Card imgsrc={img4} title="CLASS 11 TO 12" CLICK="CLICK HERE" link1="/cnine"/> </div>
        </div>
        </div>
        )
    }
}
