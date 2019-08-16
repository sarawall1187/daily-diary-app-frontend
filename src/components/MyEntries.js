import React from 'react'
import {connect} from 'react-redux'
import EntryCard from './EntryCard.js'


const MyEntries = (props) => {
    
    const EntryCards = props.myEntries.map(entry => <EntryCard entry={entry} key={entry.id}/>)

    return EntryCards
}

const mapStateToProps = ({myEntries}) => {
    return {
        myEntries
     }  
}


export default connect(mapStateToProps)(MyEntries)