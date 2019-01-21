import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import AllBooks from './AllBooks.js'
import Navbar from './Navbar.js';
import SingleBook from './SingleBook.js';
import NewUser from './NewUser.jsx'

export default class Main extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <main className='row' style={{marginTop: '30px'}}>
                    <section className='col-md-2'>
                    gol
                    </section>
                    <section className='col-md-10'>
                        <Switch>
                            <Route path='/store' component={AllBooks} />
                            <Route path='/book' component={SingleBook} />
                            <Route path='/newuser' component={NewUser} />
                        </Switch>
                    </section>
                    </main>
                </div>
            </div>
        )
    }
}