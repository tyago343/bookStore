import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

export default class Main extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>
                    Hello World!
                </h1>
            </div>
        )
    }
}