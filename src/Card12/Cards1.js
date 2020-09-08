import React, { Component } from 'react'
import Card from './CardUI'
import img1 from '../images/img7.jpg'
import img2 from '../images/img9.jpg'
import img3 from '../images/img11.jpg'
import img4 from '../images/img12.jpg'
export default class Cards extends Component {
    render() {
        return (
        <div className="container-fluid d-flex justify-content-center">
        <div className="row">
        <div className="col-md-3"> <Card imgsrc={img1} title="Engineering" CLICK="CLICK HERE"/> </div>
        <div className="col-md-3"> <Card imgsrc={img2} title="Medical" CLICK="CLICK HERE"/> </div>
        <div className="col-md-3"> <Card imgsrc={img3} title="Commerce" CLICK="CLICK HERE"/> </div>
        <div className="col-md-3"> <Card imgsrc={img4} title="Humanities" CLICK="CLICK HERE"/> </div>
        </div>
        </div>
        )
    }
}
