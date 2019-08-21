import React from 'react'


class Quote extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            quotes: []
          };
    }

componentDidMount() {
    return fetch('http://quotes.rest/qod.json')
    .then(res => res.json())
    // .then(quote => console.log(quote.contents.quotes[0].quote))
     .then(quote => {
         this.setState({
            isLoaded: true,
            quotes: quote.contents.quotes[0]
          });
     })
}


    render() {
      const { error, isLoaded, quotes } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
        // GETTING HERE IN THIS ELSE IF STATEMENT
          return <div>Loading...</div>;
        } else {

          return <div> 
          {quotes.quote} <p>by</p> {quotes.author}
</div>
        //    { quotes.author},
        // {   }
            {/* <li key={quote.quote.author}> */}
          
        //   quotes.map(quote => (
        //       <ul>
        //     <li key={quote.quote.author}>
        //       {quote.quote.quote} 
        //     </li>
        //     </ul>
          
     
   
   }
 }
}

export default Quote