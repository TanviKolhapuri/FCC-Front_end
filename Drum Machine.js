import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class MyApplication extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      display: '',
      q: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      w: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      e: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      a: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      s: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      d: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      z: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      x: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' ,
      c: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }

  this.qDrumPad = this.qDrumPad.bind(this);
  this.wDrumPad = this.wDrumPad.bind(this);
  this.eDrumPad = this.eDrumPad.bind(this);
  this.aDrumPad = this.aDrumPad.bind(this);
  this.sDrumPad = this.sDrumPad.bind(this);
  this.dDrumPad = this.dDrumPad.bind(this);
  this.zDrumPad = this.zDrumPad.bind(this);
  this.xDrumPad = this.xDrumPad.bind(this);
  this.cDrumPad = this.cDrumPad.bind(this);

    
  }
  
  componentDidMount() {
    document.addEventListener('keydown', event => {
      if (event.keyCode == 81) {
        this.qDrumPad();
      } else if (event.keyCode == 87) {
        this.wDrumPad();
      } else if (event.keyCode == 69) {
        this.eDrumPad();
      } else if (event.keyCode == 65) {
        this.aDrumPad();
      } else if (event.keyCode == 83) {
        this.sDrumPad();
      } else if (event.keyCode == 68) {
        this.dDrumPad();
      } else if (event.keyCode == 90) {
        this.zDrumPad();
      } else if (event.keyCode == 88) {
        this.xDrumPad();
      } else if (event.keyCode == 67) {
        this.cDrumPad();
      }           
    })
  }    
  

  
  qDrumPad() {
    let q = document.getElementById("Q");
    q.play();
    
    this.setState({
      display: "Q"
    })
    
  }
  
  wDrumPad() {
    let w = document.getElementById("W");
    w.play();
    
    this.setState({
      display: "W"
    })
    
  }

  eDrumPad() {
    let e = document.getElementById("E");
    e.play();
    
    this.setState({
      display: "E"
    })
    
  }
  
  aDrumPad() {
    let a = document.getElementById("A");
    a.play();
    
    this.setState({
      display: "A"
    })
    
  }
  
  sDrumPad() {
    let s = document.getElementById("S");
    s.play();
    
    this.setState({
      display: "S"
    })
    
  }
  
  dDrumPad() {
    let d = document.getElementById("D");
    d.play();
    
    this.setState({
      display: "D"
    })
    
  }
  
  zDrumPad() {
    let z = document.getElementById("Z");
    z.play();
    
    this.setState({
      display: "Z"
    })
    
  }
  
  xDrumPad() {
    let x = document.getElementById("X");
    x.play();
    
    this.setState({
      display: "X"
    })
    
  }
  
  cDrumPad() {
    let c = document.getElementById("C");
    c.play();
    
    this.setState({
      display: "C"
    })
    
  }
  
  render() {
    return (
      <div className='text-center' id="drum-machine">
        <h1>Drum Machine Project</h1>
        <div id="display">{this.state.display}</div>
        <div className='text-center'>
          <div className="drum-pad" id="q-drum-pad" onClick={this.qDrumPad}>
            Q
            <audio src={this.state.q} className="clip" id="Q"></audio>
          </div>
          <div className="drum-pad" id="w-drum-pad" onClick={this.wDrumPad}>
            W
            <audio src={this.state.w} className="clip" id="W"></audio>
          </div>
          <div className="drum-pad" id="e-drum-pad" onClick={this.eDrumPad}>
            E
            <audio src={this.state.e} className="clip" id="E"></audio>
          </div>
          <div className="drum-pad" id="a-drum-pad" onClick={this.aDrumPad}>
            A
            <audio src={this.state.a} className="clip" id="A"></audio>
          </div>
          <div className="drum-pad" id="s-drum-pad" onClick={this.sDrumPad}>
            S
            <audio src={this.state.s} className="clip" id="S"></audio>
          </div>
          <div className="drum-pad" id="d-drum-pad" onClick={this.dDrumPad}>
            D
            <audio src={this.state.d} className="clip" id="D"></audio>
          </div>
          <div className="drum-pad" id="z-drum-pad" onClick={this.zDrumPad}>
            Z
            <audio src={this.state.z} className="clip" id="Z"></audio>
          </div>
          <div className="drum-pad" id="x-drum-pad" onClick={this.xDrumPad}>
            X
            <audio src={this.state.x} className="clip" id="X"></audio>
          </div>
          <div className="drum-pad" id="c-drum-pad" onClick={this.cDrumPad}>
            C
            <audio src={this.state.c} className="clip" id="C"></audio>
          </div>
        </div>
      </div>
    )
  }
  
};

ReactDOM.render(<MyApplication />, document.getElementById('app'));
