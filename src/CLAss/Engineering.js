import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../images/4.jpeg"
import img2 from "../images/5.jpg"
import "./engineering.css"
import "../Navfolder/file.css"
import Eng from "../Card12/Eng"
import "./sidebar.css"
import Carousel from "../Carousel"
import Trendclg from "./TrendingClg"
import Trendcour from "./Trendingcour"
export default class Engineering extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
    };
    return (
        <div className="engineercont white" >
        <Slider {...settings}>
          <div>
          <img src="https://jeeadv.ac.in/img/iitd.jpg" className="responsive-img1 center" alt=""/>
          </div>
          <div>
          <img src={img1} className="responsive-img1 center" alt=""/>
          </div>
          <div>
          <img src={img2} className="responsive-img1 center" alt=""/>
          </div>
          <div>
          <img src={img1} className="responsive-img1 center" alt=""/>
          </div>
          <div>
          <img src={img1} className="responsive-img1 center" alt=""/>
          </div>
        </Slider>
        <div className="engineercont1">
        <Eng /> 
        <div className="container">
        <div className="row">
     <h1 className="text-center">What is Engineering? | Types of Engineering</h1>
     <div class="col s12 l4">
     <img src="https://cdn.mos.cms.futurecdn.net/P5BDqJBgzU9FYn9yTAcM2f-650-80.jpg.webp" alt="error" className="responsive-img center"></img>
     </div>
      <div class="col s12 l6">
      <p class="text-center paraclass">
      Engineering is the application of science and math to solve problems. Engineers figure out how things work and find practical uses for scientific discoveries. Scientists and inventors often get the credit for innovations that advance the human condition, but it is engineers who are instrumental in making those innovations available to the world.
In his book, "Disturbing the Universe" (Sloan Foundation, 1981), physicist Freeman Dyson wrote, "A good scientist is a person with original ideas. A good engineer is a person who makes a design that works with as few original ideas as possible. There are no prima donnas in engineering."
The history of engineering is part and parcel of the history of human civilization. The Pyramids of Giza, Stonehenge, the Parthenon and the Eiffel Tower stand today as monuments to our heritage of engineering. Today's engineers not only build huge structures, such as the International Space Station, but they are also building maps to the human genome and better, smallercomputer chips.
     </p>
      </div>
        </div> 
        <h1 className="text-center">What does an engineer do?</h1>
        <p class="paraclass1">Engineers design, evaluate, develop, test, modify, install, inspect and maintain a wide variety of products and systems. They also recommend and specify materials and processes, supervise manufacturing and construction, conduct failure analysis, provide consulting services and teach engineering courses in colleges and universities.
        </p>
        <h3 className="text-center">The field of engineering is divided into a large number of specialty areas:</h3>
        <div className="row"><p className="paraclass1">1. 
        <a  href="#">Mechanical engineering  </a>
        involves design, manufacturing, inspection and maintenance of machinery, equipment and components as well as control systems and instruments for monitoring their status and performance. This includes vehicles, construction and farm machinery, industrial installations and a wide variety of tools and devices.</p>
        </div>
        <div className="row"><p className="paraclass1">2.
        <a href="#">Electrical engineering</a>
       involves design, testing, manufacturing, construction, control, monitoring and inspection of electrical and electronic devices, machinery and systems. These systems vary in scale from microscopic circuits to national power generation and transmission systems.</p>
       </div>
       <div className="row"><p className="paraclass1">3.
        <a href="#">Civil engineering</a>
       involves design, construction, maintenance and inspection of large infrastructure projects such as highways, railroads, bridges, tunnels, dams and airports.</p>
       </div>
       <div className="row"><p className="paraclass1">4.
        <a href="#">Aerospace engineering</a>
       involves design, manufacturing and testing of aircraft and spacecraft as well as parts and components such as airframes, power plants, control and guidance systems, electrical and electronic systems, and communication and navigation systems.</p>
       </div>
       <div className="row"><p className="paraclass1">5.
        <a href="#">Nuclear engineering</a>
       involves design, manufacturing, construction, operation and testing of equipment, systems and processes involving the production, control and detection of nuclear radiation. These systems include particle accelerators and nuclear reactors for electric power plants and ships, radioisotope production and research. Nuclear engineering also includes monitoring and protecting humans from the potentially harmful effects of radiation.</p>
       </div>
       <div className="row"><p className="paraclass1">6.
        <a href="#">Structural engineering</a>
       involves design, construction and inspection of load-bearing structures such large commercial buildings, bridges and industrial infrastructure.</p>
       </div>
       <div className="row"><p className="paraclass1">7.
        <a href="#">Biomedical engineering </a>
       is the practice of designing systems, equipment and devices for use in the practice of medicine. It also involves working closely with medical practitioners, including doctors, nurses, technicians, therapists and researchers, in order to determine, understand and meet their requirements for systems, equipment and devices.</p>
       </div>
       <div className="row"><p className="paraclass1">8.
         <a href="#">Chemical engineering</a>
        is the practice of designing equipment, systems and processes for refining raw materials and for mixing, compounding and processing chemicals to make valuable products.</p>
       </div>   
       <div className="row"><p className="paraclass1">9.
         <a href="#">Computer engineering</a>
         is the practice of designing computer hardware components, computer systems, networks and computer software.</p>
       </div> 
       <div className="row"><p className="paraclass1">10.
         <a href="#">Industrial engineering</a>
        is the practice of designing and optimizing facilities, equipment, systems and processes for manufacturing, material processing, and any number of other work environments.</p>
       </div> 
       <div className="row"><p className="paraclass1">11.
         <a href="#">Environmental engineering</a>
         is the practice of preventing, reducing and eliminating sources of pollution that affect air, water and land. It also involves detecting and measuring pollution levels, determining sources of pollution, cleaning up and rehabilitating polluted sites and ensuring compliance with local, state and federal regulations.</p>
       </div>   
         </div>
        </div>
        <Carousel /> 
        <Trendclg />
        <Trendcour />
      </div>
    );
  }
}