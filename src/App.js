import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import {Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import Home from './Navfolder/Home.js'
import About from './Navfolder/About.jsx'
import Students from './Navfolder/Students.js'
import Navbar from './Navfolder/Navbar.js'
import CEight from './CLAss/CEight.js'
import Footer from './Navfolder/Footer'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
function App() {
  return (
    <>
    <Navbar />
    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/students" component={Students} />
     <Route exact path='/signin' component={SignIn}/>
     <Route exact path='/signup' component={SignUp}/>
     <Route exact path="/ceight" component={CEight} />
     <Redirect to="/" /> 
     </Switch>
     <Footer/>
   </> 
  );
}
export default App;
