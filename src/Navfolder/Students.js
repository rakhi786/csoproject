import React, { Component } from 'react'
import Card from '../Card12/Cards.js'
import Card1 from '../Card12/Cards1.js'
import NewCard from "../Card12/NewCard.js"
export default class Students  extends Component {
    render() {
        return (
            <div class="white">
            <NewCard />
            <NewCard />
            <NewCard />
            <NewCard />
            </div>
        )
    }
}
