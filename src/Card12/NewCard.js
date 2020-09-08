import React, { Component } from 'react'
import "../CSS/Card-style.css"
import img1 from '../images/img5.jpg'
import img2 from '../images/img4.jpg'
import img3 from '../images/img10.jpg'
import img4 from '../images/img3.jpg'
import img5 from '../images/img7.jpg'
import img6 from '../images/img9.jpg'
import img7 from '../images/img11.jpg'
import img8 from '../images/img12.jpg'
export default class NewCard extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col s12 l6">
                        <div class="card pad1">
                         <div class="img-container">
                         <img src={img1} alt="error" class="card-img-top"></img>
                         </div>
                         <div class="card-content">
                             <span class="card-title text-center">KIDS</span>
                             <p class="text-center">lorem hello bye</p>
                         </div>
                         <a  className="btn btn-outline-success" href="#">Click Here</a>
                        </div>
                    </div>
                    <div class="col s12 l6">
                        <div class="card pad1">
                         <div class="img-container">
                         <img src={img2} alt="error" class="card-img-top"></img>
                         </div>
                         <div class="card-content">
                             <span class="card-title text-center"> CLASS 4 to 5</span>
                             <p class="text-center">lorem hello bye</p>
                         </div>
                         <a  className="btn btn-outline-success" href="#">CLick Here</a>
                        </div>
                    </div>
                    <div class="col s12 l6">
                        <div class="card pad1">
                         <div class="img-container"><img src={img3} alt="error" class="card-img-top"></img>
                         </div>
                         <div class="card-content">
                             <span class="card-title text-center">CLASS 8 to 10</span>
                             <p class="text-center">lorem hello bye</p>
                         </div>
                         <a  className="btn btn-outline-success" href="/ceight">CLick Here</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
