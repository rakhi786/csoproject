import React, { Component } from 'react'
import "../CSS/Home.css"
import "./sidebar.css"
import Photo from "./Photo.js"
import Photo1 from "./Photo1.js"
import Parallax from "./Parallax.js"
import Kul2 from "../slider/Sportdrop"
import Kul3 from "../slider/Exercise"
import Kul1 from "../slider/Fooddrop"
import Kul4 from "../slider/Mentaldrop"
import Kul5 from "../slider/Acaddrop"
import Kul6 from "../slider/Parentdrop"
export default class CEight extends Component {
    render() {
        return ( 
        <div>
        <div class="container">
        <ul id="list1">
        <li><Kul1 /></li>
        <li><Kul2 /></li>
        <li><Kul3 /></li>
        <li><Kul4/></li>
        <li><Kul5 /></li>
        <li><Kul6 /></li>
        </ul>
        </div>
        <Photo />
        <Parallax />
         <div id="seconddiv">
          <section id="home1ceight">
          <h1 id="hceight1"> 5 Benefits of Early Career Planning</h1>
          <p className="pceight1">1. Students get a fair amount of time for in-depth research and planning.</p>
          <p className="pceight1">2. It gives students a fair bit of time for trial-and-error and exploration, especially those who change their minds frequently.</p>
          <p className="pceight1">3. It can help build focus and ambition by setting clear goals to aspire towards.</p>
          <p className="pceight1">4. It minimizes distractions since a focused child knows what is expected of her and works towards it.</p>
          <p className="pceight1">5. In case there are additional skills to be acquired, or preparation to be done for a particular career(e.g., cracking an entrance exam).</p>
          </section>
          <div id="sectiondiv"><h1 id="watchvideo">Watch Video</h1>
          <iframe width="280" height="230" src="https://www.youtube.com/embed/yIW6eTU2oXY" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> 
          </iframe></div>
          </div>
          <Parallax />
          <Photo1 />
         </div>
        )
    }
}
