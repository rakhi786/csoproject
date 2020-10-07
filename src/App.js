import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Navfolder/Home.js'
import ReactGA from 'react-ga';
import $ from 'jquery';
import About2 from './Navfolder/ABout2.js'
import Students from './Navfolder/Students.js'
import Navbar from './Navfolder/Navbar.js'
import KIDS from './CLAss/KIDS'
import CFour from './CLAss/CFour'
import CEight from './CLAss/CEight'
import CEleven from './CLAss/Celeven'
import Medical from './CLAss/Medical'
import Engineering from './CLAss/Engineering.js'
import Arts from './CLAss/Humanities'
import Commerce from './CLAss/Commerce'
import Govt from './CLAss/Govt.js'
import Footer from './Navfolder/Footer'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
export class App extends Component {
  render(){
  return (
    <>
    <Navbar />
    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About2} />
     <Route exact path="/students" component={Students} />
     <Route exact path='/signin' component={SignIn}/>
     <Route exact path='/signup' component={SignUp}/>
     <Route exact path="/kids" component={KIDS}/>
     <Route exact path="/cfour" component={CFour}/>
     <Route exact path="/ceight" component={CEight} />
     <Route exact path="/celeven" component={CEleven}/>
     <Route exact path="/medical" component={Medical}/>
     <Route exact path="/engineering" component={Engineering} />
     <Route exact path="/arts" component={Arts}/>
     <Route exact path="/commerce" component={Commerce}/>
     <Route exact path="/govt" component={Govt}/>
     <Redirect to="/" /> 
     </Switch>
     <Footer />
   </> 
  );
  }
}
export default App;
