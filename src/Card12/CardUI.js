import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import "../CSS/Card-style.css"
export default class CardUI extends Component {
  render() {
    return (
       <div className="card text-center">
       <div className="overflow">
       <img src={this.props.imgsrc} alt='image 1' className="card-img-top" />
       </div>
       <div className="card-body text-dark">
       <h4 className="card-title">{this.props.title}</h4>
       <p className="card-text text-secondary">Lorem2</p>
       <a  className="btn btn-outline-success" href={this.props.link1}>{this.props.CLICK}</a>
       </div>
       </div>
    )
  }
}
