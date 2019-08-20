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
    return fetch('http://quotes.rest/qod.json', {
      })
    .then(res => res.json())
    .then(quote => 
        // console.log(quote))
        {
        this.setState({
            isLoaded: true,
            quotes: quote.contents.quotes[0]
          });
    }),
    (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
}


    render() {
      const { error, isLoaded, quotes } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
        // GETTING HERE IN THIS ELSE IF STATEMENT
          return <div>Loading...</div>;
        } else {
          return  <ul>
          {quotes.map(quote => (
            <li key={quote.contents.quotes.author}>
              {quote.contents.quotes.quote} 
            </li>
          ))}
        </ul>
    }
   
   }
}

export default Quote