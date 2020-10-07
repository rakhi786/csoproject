import React, { Component } from 'react'
import {DropdownButton,Dropdown} from 'react-bootstrap'
export default class Fooddrop extends Component {
    render() {
        return (
            <div>
      <DropdownButton id="dropdown-basic-button" title="FOOD">
      <Dropdown.Item href="#/action-1">Carbohydrates</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Fats</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Minerals</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Vitamins</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Proteins</Dropdown.Item>
</DropdownButton> 
            </div>
        )
    }
}
