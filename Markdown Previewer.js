import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

let text1 = `
  
  # Heading
  ## Heading
  
  [link]()
  
  \` let a = 1; \`
  
  \`\`\`
  
  let a = 1;
  let b = 2;
  
  \`\`\`
 
  **aa** 
  
  > a
  
  ![the name]()
  
  - 1
  - 2
  - 3
  
`;

class MyApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: text1
      
    }
    
    this.handleTextChange = this.handleTextChange.bind(this);
    
  }
  
  handleTextChange(event) {
    this.setState({
      text: event.target.value
    })  
  }  
  
  render() {
  
    let markedText = marked(this.state.text, {breaks: true}); 
  
    return (
      <div className="text-center">
        <h1>Markdown Previewer</h1>  
        <textarea id="editor" value={this.state.text} onChange={this.handleTextChange}></textarea>
        <html>
        <div id="preview" dangerouslySetInnerHTML={{__html: markedText}} />
        </html>
      </div>
    )
  }
  
}

ReactDOM.render(<MyApplication />, document.getElementById("app"));

