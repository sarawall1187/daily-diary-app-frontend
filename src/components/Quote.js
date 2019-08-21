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
          return <div>Loading your inspirational quote of the day...</div>;
        } else {
          return (
             <div className="quoteContainer"> 
              <h4>Inspirational Quote of the Day:</h4>
                <p>{quotes.quote} <strong>- {quotes.author}</strong></p>
              </div>
         )}
    }
}

export default Quote