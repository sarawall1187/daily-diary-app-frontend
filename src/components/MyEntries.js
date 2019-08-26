import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class MyEntries extends React.Component {

    constructor(props){
    super(props)
    this.state = {
        upVote: 0
    }
}

   upVoted() {
    this.setState({
        upVote: this.state.upVote + 1
    })
}
    
    EntryCards = this.props.myEntries.map(entry => 
    <>
    <Link to={`entries/${entry.id}`} key={entry.id}>
       <h3>Diary Entry for: {entry.attributes.created_at}</h3>
      
    </Link>
    <button onClick={this.upVoted}>+</button>
    </>
)
 render() {
    return (
        <div className="entryContainer active">
        {this.props.EntryCards}
        </div>
    )
}
}

const mapStateToProps = ({myEntries}) => {
    return {
        myEntries
     }  
}


export default connect(mapStateToProps)(MyEntries)