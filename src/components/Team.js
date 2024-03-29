import React,{Component} from 'react';
import TeamMember from './TeamMember';
import MembersInfo from './MemberInfo';

class Team extends Component{
    constructor(){
        super()
        this.state={
            membersInfo:MembersInfo
        }
        //this.clickEvent= this.clickEvent.bind(this);
    }
    clickEvent(){
        console.log(MembersInfo[0])
        //newArray.push(test);
    }
    mapping(x){
        const members= x.map( member=> <TeamMember 
            key={member.id}
            name={member.name}
            img={member.img}
            position={member.position}
            mail={member.mail}
            phone={member.phone}
            website={member.website}
        /> );  
        return members 
    }

    render(){
        return(
            <div className='row'>
                <button className='btn btn-primary btn-lg btn-block' onClick={this.clickEvent}>Click me!</button>
                <h1>Team</h1>
                {this.mapping(this.state.membersInfo)} 
            </div>
        )
    }
}
export default Team