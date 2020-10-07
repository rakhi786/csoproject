import React, { Component } from 'react'
import {DropdownButton,Dropdown} from 'react-bootstrap'
export default class Exercise extends Component {
    render() {
        return (
            <div>
      
      <DropdownButton id="dropdown-basic-button" title="EXERCISE">
      <Dropdown.Item href="#/action-1">Aerobic exercises</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Anaerobic exercises</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Yoga</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Meditation</Dropdown.Item>
</DropdownButton> 
            </div>
        )
    }
}
