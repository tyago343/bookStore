import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import AllBooks from './AllBooks.js'

export default class Main extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Switch>
                <Route path='/store' component={AllBooks} />
            </Switch>
        )
    }
}