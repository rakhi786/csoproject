import React, { Component } from 'react'
import {DropdownButton,Dropdown,Accordion,Card,ButtonGroup,SplitButton} from 'react-bootstrap'
import { ButtonDropdown } from 'reactstrap'
import "../CLAss/sidebar.css"
export default class Acaddrop extends Component {
    render() {
        return (
            <div >
      <DropdownButton id="dropdown-basic-button" variant="primary" title="ACADMICS">
      <div className="center">
    <div className="mb-2"> {['right'].map((direction) => (
      <DropdownButton
      as={ButtonGroup}
        key={direction}
        id={`dropdown-drop-${direction}`}
        drop={direction}
        size="lg"
        variant="natural"
        title={`BASKETBALL`}
      >
        <Dropdown><a href="https://www.breakthroughbasketball.com/basics/basics.html">&nbsp; &nbsp;&nbsp;Rules</a></Dropdown>
        <Dropdown><a href="https:https://www.udemy.com/share/101SLiAEIadl1aQnsF/">&nbsp; &nbsp;&nbsp;Udemy Link</a></Dropdown>
      </DropdownButton>
    ))} </div>
    </div>
    <div className="center">
    <div className="mb-2"> {['right'].map((direction) => (
      <Dropdown
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        size="lg"
        variant="natural"
        title={`VOLLEYBALL`}
      >
        <Dropdown><a href="https://www.volleyballadvice.com/volleyball-rules-regulations/">&nbsp; &nbsp;&nbsp;Rules</a></Dropdown>
      </Dropdown>
    ))} </div>
    </div>
    <div className="center">
    <div className="mb-2"> {['right'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        size="lg"
        variant="normal"
        title={`Cricket`}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ))} </div>
    </div>
    <div className="center">
    <div className="mb-2"> {['right'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        size="lg"
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="normal"
        title={`Cricket`}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ))} </div>
    </div>
    <div className="center">
    <div className="mb-2"> {['right'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        size="lg"
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="normal"
        title={`Cricket`}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ))} </div>
    </div>
    
</DropdownButton> 
            </div>
            
        )
    }
}


 