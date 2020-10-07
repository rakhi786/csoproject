import React, { Component } from 'react'
import {DropdownButton,Dropdown} from 'react-bootstrap'
export default class Sportdrop extends Component {
    render() {
        return (
            <div>
      
      <DropdownButton id="dropdown-basic-button" title="SPORT">
      <Dropdown.Item href="#/action-1">Athletics</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Badminton</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Baseball</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Boxing</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Cricket</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Carroms</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Chess</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Football</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Cricket</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Table Tennis</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Tennis</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Swimming</Dropdown.Item>
    <Dropdown.Item href="#/action-1">BasketBall</Dropdown.Item>
    <Dropdown.Item href="#/action-2">VolleyBall</Dropdown.Item>

</DropdownButton> 
            </div>
        )
    }
}
