import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class MyEntries extends React.Component {

    constructor(){
        super()
        this.state = {
            votes: {},
            sortClicked: false
        }
    }


    componentDidMount() {
     let votes = {}
        this.props.myEntries.map((entry) => {
            votes[entry.id] = 0
        })
        this.setState({
            votes: votes
        })
    }

  componentDidUpdate(prevProps) {
    let votes = {}
        if (prevProps !== this.props) {
        this.props.myEntries.map((entry) => {
                votes[entry.id] = 0
            })
            this.setState({
                votes: votes
            })
        }
   }

 
   upVoted = (id) => {
    this.setState({
        votes: {
          ...this.state.votes,
          [id]: this.state.votes[id] + 1
        }
      })
    }

    sorted = () => {
       let entriesCopy = this.props.myEntries.slice()
        entriesCopy.sort((a, b) => {
            let aDate = new Date(a.attributes.created_at)
            let bDate = new Date(b.attributes.created_at)
           return bDate - aDate
        })
       return entriesCopy 
    }

    handleClick = () => {
        this.setState({
            sortClicked: true
        })
    }
    

 render() {
   let entriesToDisplay = this.props.myEntries
    if (this.state.sortClicked) {
         entriesToDisplay = this.sorted()
    } 
    return (
     <div className="entryContainer active">
     <button onClick={this.handleClick}>Sort Entries</button>
        {entriesToDisplay.map(entry => 
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

