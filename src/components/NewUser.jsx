import React, { Component } from 'react'

class NewUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName : '   ',
            lastName : '',
            email : '',
            userName : '',
            password : '',
            admin : false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(evt){
        const value = evt.target.value
        const key = evt.target.name
        this.setState({
            [key] : value
        })
    }
    render(){
        const { firstName, lastName, email, userName, password, admin } = this.state
        return(
            <form className='col-md-6' style={{margin:'0 auto'}}>
                <div class="form-group">
                    <label for="userName">User</label>
                    <input type="text" class="form-control" id="userName" name="userName" placeholder="Enter your user name" value={userName} onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Enter your first name" value={firstName} onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Enter your last name" value={lastName} onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email address" value={email} onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" name="password" placeholder="Enter a password" value={password} onChange={this.handleChange}/>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="admin" name="admin" checked={admin} onChange={this.handleChange}/>
                    <label class="form-check-label" for="admin">Admin?</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default NewUser