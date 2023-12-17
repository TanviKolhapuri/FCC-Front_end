import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class MyApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '',
      m: ''
    }
 
    this.clear = this.clear.bind(this);
    this.zero = this.zero.bind(this);
    this.one = this.one.bind(this);
    this.two = this.two.bind(this);
    this.three = this.three.bind(this);
    this.four = this.four.bind(this);
    this.five = this.five.bind(this);
    this.six = this.six.bind(this);
    this.seven = this.seven.bind(this);
    this.eight = this.eight.bind(this);
    this.nine = this.nine.bind(this);
    this.decimal = this.decimal.bind(this);
    
    this.multiply = this.multiply.bind(this);
    this.subtract = this.subtract.bind(this);
    this.add = this.add.bind(this);
    this.divide = this.divide.bind(this);
    this.equal = this.equal.bind(this);
    
    
  }
  
  multiply() {
    this.setState({
      output: this.state.output.concat("*")
    })
  }
  
  subtract() {
    this.setState({
      output: this.state.output.concat("-")
    }) 
    
  }
  
  add() {
    this.setState({
      output: this.state.output.concat("+")
    })
    
  }
  
  divide() {
    this.setState({
      output: this.state.output.concat("/")
    })
    
  }
  
  
  
  clear() {
    this.setState({
      output: '0'
    })
    
  }
  
  equal() {
    let str = this.state.output;
    let arr = str.split(/(?=[-+*\/])/);
    let newStr = '';
    
    console.log(arr);
    
    for (let i = 0; i < arr.length; i++) {
      if (/\d/.test(arr[i]) == true) {
        newStr = newStr.concat(arr[i]); 
      } else if (arr[i] == '+' && /\d/.test(arr[i+1]) == true && !arr[i+1].includes('*') && !arr[i+1].includes('/') && !arr[i+1].includes('+')) {
        newStr = newStr.concat(arr[i]);
      } else if (arr[i] == '*' && /\d/.test(arr[i+1]) == true && !arr[i+1].includes('/') && !arr[i+1].includes('+') && !arr[i+1].includes('*')) {
        newStr = newStr.concat(arr[i]);
      } else if (arr[i] == '-' && /\d/.test(arr[i+1]) == true && !arr[i+1].includes('*') && !arr[i+1].includes('/') && !arr[i+1].includes('+')) {
        newStr = newStr.concat(arr[i]);
      } else if (arr[i] == '/' && /\d/.test(arr[i+1]) == true && !arr[i+1].includes('*') && !arr[i+1].includes('/') && !arr[i+1].includes('+')) {
        newStr = newStr.concat(arr[i]);
      }  
    }
    
    
    console.log(newStr);
    
    let res = eval(newStr).toString();     
    
    this.setState({
      output: res
    })
  }
  
  
  
  zero() {
    let str = this.state.output.concat(0);
    str = str.replace(/^0+/, '');
    
    if (str == '') {
      this.setState({
      output: '0'
      })  
    } else {
      this.setState({
        output: str
      })    
    }  
    
  }
  
  one() {
    let str = this.state.output.concat(1);
    str = str.replace(/^0+/, '');

    this.setState({
      output: str
    }) 
   
  }
  
  two() {
    let str = this.state.output.concat(2);
    str = str.replace(/^0+/, '');

    this.setState({
      output: str
    })
    
  }
  
  three() {
    let str = this.state.output.concat(3);
    str = str.replace(/^0+/, '');

    this.setState({
      output: str
    })
    
  }
  
  four() {
    let str = this.state.output.concat(4);
    str = str.replace(/^0+/, '');

    this.setState({
      output: str
    })
    
  }
  
  five() {
    let str = this.state.output.concat(5);
    str = str.replace(/^0+/, '');

    this.setState({
      output: str
    })
    
  }
  
  six() {
    let str = this.state.output.concat(6);
    str = str.replace(/^0+/, '');

    this.setState({
      output: str
    })
    
  }
  
  seven() {
    let str = this.state.output.concat(7);
    str = str.replace(/^0+/, '');

    this.setState({
      output: str
    })
    
  }
  
  eight() {
    let str = this.state.output.concat(8);
    str = str.replace(/^0+/, '');

    this.setState({
      output: str
    })
    
  }
  
  nine() {
    let str = this.state.output.concat(9);
    str = str.replace(/^0+/, '');

    this.setState({
      output: str
    })
    
  }
  
  decimal() {
    let s = this.state.output;
    let arr = s.split(/(?=[-+*\/])/);
    if (!arr[arr.length - 1].includes('.')) {
      let str = this.state.output.concat('.');
      this.setState({
        output: str
      })
    }
  }
  
  render() {
    return (
      <div className='text-center'>
        <h1>JavaScript Calculator Project</h1>       
        <div className="container">
        <div className='row'>
          <div className='col' id="display">{this.state.output}</div>
          </div>
        <div className='row'>
          <div className='key col' id='decimal' onClick={this.decimal}>.</div>
          <div className='key col' id='zero' onClick={this.zero}>0</div>
          <div className='key col' id='one' onClick={this.one}>1</div>
          <div className='key col' id='two' onClick={this.two}>2</div>
          <div className='key col' id='three' onClick={this.three}>3</div>
        </div>
        <div className="row">
          <div className='key col' id='four' onClick={this.four}>4</div>
          <div className='key col' id='five' onClick={this.five}>5</div>
          <div className='key col' id='six' onClick={this.six}>6</div>
          <div className='key col' id='seven' onClick={this.seven}>7</div>
          <div className='key col'id='eight' onClick={this.eight}>8</div>
        </div>
        <div className="row">
          <div className='key col' id='nine' onClick={this.nine}>9</div>
          <div className='key col'id="add" onClick={this.add}>+</div>
          <div className='key col' id="subtract" onClick={this.subtract}>-</div>
          <div className='key col' id="multiply" onClick={this.multiply}>*</div>
          <div className='key col' id="divide" onClick={this.divide}>/</div>
        </div>
        <div className="row">
          <div className='equal-key col' id="equals" onClick={this.equal}>=</div>
          <div className='clear-key col' id="clear" onClick={this.clear}>clear</div>
          </div>
         </div>
          
        </div>
    );
  }
}


ReactDOM.render(<MyApplication />, document.getElementById('app'));

