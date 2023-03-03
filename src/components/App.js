import React,{Component} from "react";
import Header from "./Header";
import Text from "./Text";
import SOcial from "./Social";
import Team from "./Team_click";


class App extends Component{
  constructor(){
    super()
    this.state={
      num:0
    }
    this.eventHandler= this.eventHandler.bind(this);
  }
  eventHandler(){
   // console.log("test");
    this.setState(prevState =>{
      return{
        num: prevState.num +1
      }  
    })
  }
  render(){
    return( 
    <div className="container">
      <Header/>
      <Text/>
      <SOcial/> 
      <Team/>
      
      <h1>{this.state.num}</h1>
      <button className="btn btn-primary" onClick={this.eventHandler}>Click me!</button>
    </div>)
  }

}

export default App;
