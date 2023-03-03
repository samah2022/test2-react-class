import React,{Component} from 'react';

class TeamMember extends Component{
    render(){
        return(
            <div className='col-md-4 col-sm-6 border'>
                <h2><center>TeamMember</center></h2>
                <div className='card'>
                    <div className='card-header'><img style={{maxWidth:"100%"}} src={this.props.img} alt={this.props.name}/></div>
                    <div className='card-body'>
                        <h3>{this.props.name}</h3>
                        <h5>{this.props.position}</h5>
                        <div>{this.props.mail}</div>
                        <div>{this.props.phone}</div>
                        <div>{this.props.website}</div>
                    </div>
                </div>
            </div>
        )
    } 
}
export default TeamMember;