import React,{Component} from 'react';
import './design.css';

class User extends Component{
	constructor(props){
		super(props);
		this.state={pop:false}
	}
	change=()=>{
		if(this.state.pop)
			this.setState({pop:false})
		else
			this.setState({pop:true})
	}

	render(){
		return(
			<div>
			{
				(this.state.pop)
				?
				<div>
				<div>
				{this.props.children}
				</div>
				<div className='popup dib'>
				<div className='popup_inner br4 b--black bg-blue dib ba '>
				<p className='tc b sans-serif pointer f3'>Add User</p><br/>
				<p className='tc b sans-serif pointer f4'>Edit Profile</p><br/>
				<p className='tc b sans-serif pointer f5'>SignOut</p><br/>
				<p className='tc sans-serif f6 pointer' onClick={this.change}>close</p>
				</div>
				</div>
				</div>
				:
				(
					<div>
					<div className='fl w-100 bg-green'>
					<div className='box'>
					<button className='bg-transparent f3 pv2' onClick={this.change}>USER</button>
					</div>
					</div>
					{this.props.children}
					</div>
					)


			}
			</div>
			
			)
	}
}
export default User;