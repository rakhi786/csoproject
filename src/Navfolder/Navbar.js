import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import "../CSS/Home.css"
import SignedOutLinks from "./SignedOutLinks.js"
export default class Navbar extends Component {
    render() {
        return (<>
            <div className="header">
            <div className='row'>
            <nav className="navbar navbar-expand-lg grey darken-3">
            <NavLink className="navbar-brand" to="/">Career-Guidance</NavLink>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
            <NavLink   to="/">Home</NavLink>
                </li>
                <li className="nav-item">
            <NavLink activeClassName='menu_active'  to="/students">Students</NavLink>
                </li>
                <li className="nav-item">
            <NavLink activeClassName='menu_active'  to="/about">About</NavLink>
                </li>
            </ul><SignedOutLinks />
            </div>
          </nav> 
               </div>
            </div> </>
        )
    }
}
