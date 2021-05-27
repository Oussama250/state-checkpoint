import imgsrc from './user.png';
import './App.css';
import React, { Component } from "react";

class App extends Component {

  state = {
    Person : {fullName:"Oussama",bio:"Computer scinecer enginier", imgSrc:imgsrc, profession:"developer"},
    show : false
  };

  timer = 0;
  interval;
  handleShow = () => {
    console.log(this.state.show)
    // this.setState({show:!this.state.show});
    this.state.show = !this.state.show;
    console.log(this.state.show)
    if(this.state.show)
    {
      document.getElementById("profile").style.visibility = "visible";
      // if(int != "undefined")
      //   console.log("int defined")
        clearInterval(this.interval);
        this.timer=0;
        this.interval = setInterval(()=> {
        this.timer++;
        if(this.timer==1)
          document.getElementById("ppp").innerText = `this component was created ${this.timer} second ago.`;
        else
          document.getElementById("ppp").innerText = `this component was created ${this.timer} seconds ago.`;
      }, 1000);
    }
    else {
      document.getElementById("profile").style.visibility = "hidden";
      clearInterval(this.interval);
      this.timer=0;
      document.getElementById("ppp").innerText = `this component was created ${this.timer} seconds ago.`;
    }
      
  }
  // style = {document.getElementById("profile").style.visibility = "hidden"};
  // componentDidMount({this.style});
  
  render() {
  return (
    <div className="App">
      <div>
        <button onClick={this.handleShow} style={{ width: '50%', height: '30px', border: 'solid 2px', borderRadius: '3px', fontSize: '12' , backgroundColor: 'blue', color : 'white'}} >
          toggle visibility
        </button>
      </div>
      <div id = "profile" style={{visibility: 'hidden'}}>
        <img src={this.state.Person.imgSrc} alt="imgSrc.png" />
        <p>
            {this.state.Person.fullName}
        </p>
        <p>
            {this.state.Person.bio}
        </p>
        <p>
            {this.state.Person.profession}
        </p>
        <p id="ppp">
            this component was created {this.timer} seconds ago.
        </p>
      </div>
    </div>
  );
  }
}

export default App;