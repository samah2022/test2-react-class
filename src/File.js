import React, {Component} from "react";


class File extends Component{
    method(name2){
        return <span>{name2}</span>
    }
    render(){
        //const name="Pascal";
        //const name2=this.method("xxxx");
        return(
            <div>
                <h1>{this.props.name}  {this.props.name2} Test File</h1>
            </div>
        )
    }
}
export default File;