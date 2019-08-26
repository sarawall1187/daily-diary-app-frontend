import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class MyEntries extends React.Component {

    // componentDidMount() {
    //     console.log("inside componentDIdMount", this.props)
    //     this.props.setMyEntries()
    // }

    constructor(){
        // console.log("constructor", props)
        super()
        this.state = {
            upVote: 0
        }
}

   upVoted = () => {
       const newVote = this.state.upVote + 1
        this.setState({
            upVote: newVote
        })
    }
    
    EntryCards = this.props.myEntries.map(entry => 
     <> 
        <Link to={`entries/${entry.id}`} key={entry.id}>
        <h3>Diary Entry for: {entry.attributes.created_at}</h3>
        
        </Link>
        <div onClick={this.upVoted}>{this.state.upVote}+</div>
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
    // console.log("inside myEntries 1", myEntries)
    return {
        myEntries
     }  
}


export default connect(mapStateToProps)(MyEntries)


// class MyComp extends React.Component {
 
//     // we use the constructor to set the INITIAL STATE
//     constructor() {
//       super()
//       this.state = {
//         count: 0
//       }
//     }
   
//     // our increment method makes use of the 'setState' method, which is what we use to alter state
//     increment = () => {
//       const newCount = this.state.count + 1
//       this.setState({
//         count: newCount
//       })
//     }
   
//     render() {
//       return (
//         <div onClick={this.increment}>
//           {this.state.count}
//         </div>
//       )
//     }
//   }