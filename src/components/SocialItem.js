import React,{Component} from 'react';
class SocialItem extends Component{
    render(){
        return(
            <li className='list-group-item'>
                <img src={this.props.p.img} alt={`icon of ${this.props.p.media}`}/>
                <input type="checkbox" id={this.props.id}/>
                <label htmlFor={this.props.p.id}>{this.props.p.media}</label>
            </li>
        );
    }

}
export default SocialItem;