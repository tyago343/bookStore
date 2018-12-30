import React, { Component } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/'><img id='logo' src='/books-xxl.png' /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav menu-prop">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Menu 
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <ul className='ml-auto'>
                        <Search />
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}