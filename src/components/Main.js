import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import AllBooks from './AllBooks.js'
import Navbar from './Navbar.js';

export default class Main extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route path='/store' component={AllBooks} />
                </Switch>
            </div>
        )
    }
}