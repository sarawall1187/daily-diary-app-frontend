import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm.js'
import {login} from '../actions/currentUser.js'

 const Login = ({loginFormData, updateLoginForm, login}) => {

    const handleChange = event => {
        const {name, value} = event.target
        const updateFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updateFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
            Enter Username:
            <input type="text" 
                    value={loginFormData.username} 
                    name="username" 
                    onChange={handleChange}/> <br/>
            Enter Password:
            <input type="password" 
                    value={loginFormData.password} 
                    name="password" 
                    onChange={handleChange}/> <br/>
            <input type="submit" value="Login"/>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        loginFormData: state.loginForm
       
    }
}


export default connect(mapStateToProps, {updateLoginForm, login})(Login)