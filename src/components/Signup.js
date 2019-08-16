import React from 'react'
import {connect} from 'react-redux'
import {updateSignupForm} from '../actions/signupForm.js'
import {signup} from '../actions/currentUser.js'

 const Signup = ({signupFormData, updateSignupForm, signup}) => {

    const handleChange = event => {
        const {name, value} = event.target
        const updateFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updateFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
            Enter Username:
            <input type="text" 
                    value={signupFormData.username} 
                    name="username" 
                    onChange={handleChange}/> <br/>
            Enter Email:
            <input type="text" 
                    value={signupFormData.email} 
                    name="email" 
                    onChange={handleChange}/> <br/>
            Enter Password:
            <input type="password" 
                    value={signupFormData.password} 
                    name="password" 
                    onChange={handleChange}/> <br/>
            <input type="submit" value="Signup"/>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        signupFormData: state.signupForm
       
    }
}


export default connect(mapStateToProps, {updateSignupForm, signup})(Signup)