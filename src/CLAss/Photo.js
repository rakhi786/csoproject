import React, { Component } from 'react'
import img1 from "../images/food1.jpg"
import img2 from "../images/sport1.jpg"
import img3 from "../images/acad1.jpg"
import "./sidebar.css"
export default class Photo extends Component {
    render() {
        return (
            <div>
               <section class="container section" id="photos">
                   <div class="scrollspy row" id="photo1">
                       <div class="col s12 l4">
                           <img src={img1} alt="" class="responsive-img materialboxed "></img>
                       </div>
                       <div class="col s12 l6 offset-l1">
                           <h2 class="indigo-text text-darken-4 text-center">FOOD</h2>
                           <p class="text-center paraclass">Healthy brain food for studying includes: Protein — meat, fish, eggs, poultry, legumes, nuts and seeds, dried beans and lentils, dairy products and soy products. Protein helps your brain send messages to the rest of your body, and helps create brain chemicals that improve your mood.Food and school are two interconnected topics. Children spend a large part of their day in school, so the food that is served in and around school greatly influences eating habits. Fast food in particular has proven to affect school children's health.</p>
                       </div>
                   </div>
                   <div class="scrollspy row" id="sport1">
                       <div class="col s12 l4 push-l7">
                           <img src={img2} alt="" class="responsive-img materialboxed "></img>
                       </div>
                       <div class="col s12 l6 pull-l6 ">
                           <h2 class="indigo-text text-darken-4 text-center ">SPORT</h2>
                     <p>Sports are an essential part of our life. It teaches us how to stay strong and healthy, and tests our physical abilities. Usually, when going in for sports, we compete with other people in order to get some entertainment. In the same time, physical exercises bring a bunch of great benefits for participants. All kinds of sports can bring strong physical health, great team abilities, and strong organizational features. It concerns football, basketball, hockey, and other team sports. The physiological and physical advantages obtained within sports activities result in enriched physical stamina and improved reflexes.</p>
            </div>
                   </div>
                   <div class="scrollspy row" id="acad1">
                       <div class="col s12 l4">
                           <img src={img3} alt="" class="responsive-img materialboxed"></img>
                       </div>
                       <div class="col s12 l6 offset-l1">
                           <h2 class="indigo-text text-darken-4 text-center">ACADMICS</h2>
                           <p class="text-center paraclass">Healthy brain food for studying includes: Protein — meat, fish, eggs, poultry, legumes, nuts and seeds, dried beans and lentils, dairy products and soy products. Protein helps your brain send messages to the rest of your body, and helps create brain chemicals that improve your mood.Food and school are two interconnected topics. Children spend a large part of their day in school, so the food that is served in and around school greatly influences eating habits. Fast food in particular has proven to affect school children's health.</p>
                       </div>
                   </div>
               </section> 
            </div>
        )
    }
}
