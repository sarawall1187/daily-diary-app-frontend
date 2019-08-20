import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm.js'
import {login} from '../actions/currentUser.js'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

 const Login = ({loginFormData, updateLoginForm, login, history}) => {

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
        login(loginFormData, history)
    }

    return (
        <Container className="loginForm">
            <h1>Login Here:</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
        <Form.Label>Enter Username:</Form.Label>
            <Form.Control type="text" 
                    value={loginFormData.username} 
                    name="username" 
                    onChange={handleChange}/> <br/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Enter Password:</Form.Label>
            <Form.Control type="password" 
                    value={loginFormData.password} 
                    name="password" 
                    onChange={handleChange}/> <br/>
            <Form.Control className="loginButton"type="submit" value="Login"/>
           </Form.Group>
        </Form>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        loginFormData: state.loginForm
       
    }
}


export default connect(mapStateToProps, {updateLoginForm, login})(Login)