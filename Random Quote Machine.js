import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";


class MyApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      author: '',
      link: 'twitter.com/intent/tweet'
    }
    
    this.getQuote = this.getQuote.bind(this);
    
  }
  
  componentDidMount() {
  fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error status: ${response.status}`);
          }
          return response.json();
        })
        .then(result => {
          let quotes = result;          
          let randomIndex = Math.floor(Math.random() * Object.keys(result.quotes).length);
          let quote = result.quotes[randomIndex]["quote"];
          let author = result.quotes[randomIndex]["author"];
  
          this.setState({
            text: quote,
            author: author
          })
        })
        .catch(err => console.log(err));  
  }
  
    
    getQuote() {
      //JSON
fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error status: ${response.status}`);
          }
          return response.json();
        })
        .then(result => {
          let quotes = result;          
          let randomIndex = Math.floor(Math.random() * Object.keys(result.quotes).length);
          let quote = result.quotes[randomIndex]["quote"];
          let author = result.quotes[randomIndex]["author"];
  
          this.setState({
            text: quote,
            author: author
          })
        })
        .catch(err => console.log(err));
           
    }

  render() {
    return (
      <div>
        <h1 className ="text-center">Random Quote Machine Project </h1>
            <div id="quote-box">
              <div id="text">{this.state.text}</div>
              <div id="author"> - {this.state.author}</div>
              <button id="new-quote" onClick={this.getQuote}>new quote</button>
              <a id="tweet-quote" href={this.state.link}>tweet quote</a>
            </div>    
        
       </div>
    ); 
  }
};

 
ReactDOM.render(<MyApplication />, document.getElementById('app'));
