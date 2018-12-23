import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

export default class Main extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const user = {
            firstName : "Santiago",
            lastName : "Casanova",
            email : "tyagocasanova@hotmail.com",
            userName : "tyago343",
            password : "123456",
            admin : true
        }
        axios.post('/api/user/', {
            firstName : "Santiago",
            lastName : "Casanova",
            email : "tyagocasanova@hotmail.com",
            userName : "tyago343",
            password : "123456",
            admin : true
        })
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