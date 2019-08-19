import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const MyEntries = (props) => {
    
    const EntryCards = props.myEntries.map(entry => 
    <Link to={`entries/${entry.id}`} key={entry.id}>
       <h3>Diary Entry for: {entry.attributes.created_at}</h3>
    </Link>)

    return EntryCards
}

const mapStateToProps = ({myEntries}) => {
    return {
        myEntries
     }  
}


export default connect(mapStateToProps)(MyEntries)