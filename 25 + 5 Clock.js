import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const audio = document.getElementById('beep');

class MyApplication extends React.Component { 
  constructor(props) {
    super(props);
    
    this.state = {
      time: 25 * 60,
      breakLength: 5,
      sessionLength: 25,
      running: 'paused',
      status: "Session"
    }
    
    
    this.breakIncrement = this.breakIncrement.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.reset = this.reset.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.timeLeft = this.timeLeft.bind(this);
    this.countDown = this.countDown.bind(this);
  } 
  
  breakIncrement() {
    if (this.state.breakLength < 60) {
      
      this.setState({
        breakLength: this.state.breakLength + 1
      })  
      
      if (this.state.status === 'Break') {
        this.setState({
          time: (this.state.breakLength + 1) * 60
        })    
      }    
    }
  }
  
  breakDecrement() {
    if (this.state.breakLength > 1) {
      this.setState({
        breakLength: this.state.breakLength - 1
      })
      
      if (this.state.status === 'Break') {
        this.setState({
          time: (this.state.breakLength - 1) * 60
        })    
      }     
    }
  }
  
  sessionIncrement() {
    if (this.state.sessionLength < 60) {
      this.setState({
        sessionLength: this.state.sessionLength + 1
      })
      
      if (this.state.status === 'Session') {
        this.setState({
          time: (this.state.sessionLength + 1) * 60
        })    
      }    
    }
  }
  
  
  sessionDecrement() {
    if (this.state.sessionLength > 1) {

      this.setState({
        sessionLength: this.state.sessionLength - 1
      })
      
      if (this.state.status === 'Session') {
        this.setState({
          time: (this.state.sessionLength - 1) * 60
        })    
      }   
    }
  }
  
  startTimer() {
    if (this.state.running == 'paused') {
      this.setState({
        running: setInterval(this.countDown, 1000)
      })      
      
    } else {
      clearInterval(this.state.running);
      this.setState({
        running: 'paused'
      }) 
      
      audio.pause();      
   
    } 
  }
  
  countDown() {
        if (this.state.time > 0) {
          this.setState({
            time: this.state.time - 1
          })
          
        } else {
          if (this.state.status === 'Session') {
            this.setState({
              time: this.state.breakLength * 60,
              status: 'Break'
            })
            
            audio.play();
            
          } else {
              this.setState({
                time: this.state.sessionLength * 60,
                status: 'Session'
              })
            
            audio.play();   
            
          }       
        } 
      }  
  
  reset() {
    this.setState({
      time: 25 * 60,
      breakLength: 5,
      sessionLength: 25,
      status: 'Session',
      running: 'paused'
      
    })    
    
    clearInterval(this.state.running);  
    audio.pause();
    audio.currentTime = 0;
    
  }
  
  timeLeft = (t) => {
      let m = Math.floor(t / 60);
      let s = t % 60;

      m = m < 10 ? ('0' + m) : m;
      s = s < 10 ? ('0' + s) : s;

      return `${m}:${s}`;
    
  }
  

  
  render() {
    return (
      <div>
        <div className='text-center container'>
          <div className='row'>
            <h1 className='col'>25 + 5 Clock Project</h1>
          </div>
          <div className='row'>
            <div className='ele1 col' id="break-label">Break Length</div>
            <div className='ele1 col' id="session-label">Session Length</div>
          <div className='row'>
            <div className='ele2 col' id="break-length">{this.state.breakLength}</div>
            <div className='ele2 col' id="session-length" >{this.state.sessionLength}</div>
          </div>            
          </div>
          <div className='row'>
            <button className='ele col' id="break-decrement" onClick={this.breakDecrement}>Break Decrement</button>
            <button className='ele col' id="break-increment" onClick={this.breakIncrement}>Break Increment</button>
            <button className='ele col' id="session-decrement" onClick={this.sessionDecrement}>Session Decrement</button>     
            <button className='ele col' id="session-increment" onClick={this.sessionIncrement}>Session Increment</button>
          </div>
          <div className='row'>
            <div className='ele2 col' id="timer-label">{this.state.status}</div>
          </div>
          <div className='row'>
            <div className='ele2 col' id='time-left'>{this.timeLeft(this.state.time)}</div>
          </div>
          <div className='row'>
            <button className='ele col' id="start_stop" onClick={this.startTimer}>Start / Stop</button>
            <button className='ele col' id="reset" onClick={this.reset}>Reset</button>
          </div>   
        </div>
        </div>
      )
    }
}


ReactDOM.render(<MyApplication />, document.getElementById('app'));


