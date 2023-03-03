import React,{Component} from "react";
import File from './File';

// Simple Example
class App extends Component{
  constructor(){
    super()
    this.state= {answer:"No"}
  }
  render(){
    return(
      <div>
        <h1>Do you love me?<span>{this.state.answer}</span></h1>
        <File name="Pascal" name2="xxxx" />
        <File name="Alin" name2="yyyy"/>
        <File name="Jiji" name2="zzzz" />
      </div>
    )
  }
}

export default App;
