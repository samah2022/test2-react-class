import React,{Component} from 'react';


class Header extends Component{

    render(){
        const client="Designer";
        const style=  {
            fontSize: "20px"
        }
        const title={
            designer:"design",
            programmer:"programming"
        }
        const info={
            name:"samah"
        }
        return(
        
            <div className='navbar bg-dark rounded text-white'>
                <span> hello {info.name} {client==="Designer"? title.designer: title.programmer}</span>
                <h1 className='bg-dark text-white'>External style</h1>
                <h1 style={style}>Test internal style</h1>
            </div>
        )
    }
}
export default Header;