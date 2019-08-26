import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class MyEntries extends React.Component {

    componentDidMount() {
        let votes = {};
        if (this.props.myEntries.length > 0) {
        this.props.myEntries.map((entry) => {
            votes[entry.id] = 0
        })
        this.setState({
            votes: votes
        })
        }
  }

  componentDidUpdate(prevProps) {
    let votes = {};
    if (prevProps !== this.props) {
       this.props.myEntries.map((entry) => {
            votes[entry.id] = 0
        })
      this.setState({
        votes: votes
      })
    }
  }

    constructor(){
        super()
        this.state = {
            votes: {}
        }
}

   upVoted = (id) => {
    this.setState({
        votes: {
          ...this.state.votes,
          [id]: this.state.votes[id] += 1
        }
      })
    }
    

 render() {
    return (
     <div className="entryContainer active">
        {this.props.myEntries.map(entry => 
            <> 
            <Link to={`entries/${entry.id}`} key={entry.id}>
                <h3>Diary Entry for: {entry.attributes.created_at}</h3>
            </Link>
            <button onClick={() => this.upVoted(entry.id)}>Upvote {this.state.votes[entry.id]}+</button>
            </>
            )}
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

