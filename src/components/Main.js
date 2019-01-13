import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import AllBooks from './AllBooks.js'
import Navbar from './Navbar.js';
import SingleBook from './SingleBook.js';

export default class Main extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <Switch>
                        <Route path='/store' component={AllBooks} />
                        <Route path='/book' component={SingleBook} />
                    </Switch>
                </div>
            </div>
        )
    }
}