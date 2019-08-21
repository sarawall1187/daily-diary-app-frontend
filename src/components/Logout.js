import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../actions/currentUser.js'
import {withRouter} from 'react-router-dom'

 const Logout = ({logout, history}) => {
     
    const handleSubmit = (event) => {
        event.preventDefault()
        logout()
        history.push('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="logout" type="submit" value="Logout"/>
        </form>
    )
}


export default withRouter(connect(null, {logout})(Logout))