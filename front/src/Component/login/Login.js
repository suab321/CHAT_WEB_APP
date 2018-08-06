import React,{Component} from 'react';
import './login.css';
import axios from 'axios';

class Login extends Component{
	constructor(props){
		super(props);
		this.state={email:'',password:''}
	}

	emailchange=(event)=>{
		this.setState({email:event.target.value})
	}

	passchange=(event)=>{
		this.setState({password:event.target.value})
	}

	login=()=>{
		axios.post('http://localhost:3001/login',{email:this.state.email,password:this.state.password})
		.then(response=>{
			if(response.status===200)
				this.props.home
		})
		.catch(err=>{console.log(err)})

	}

	register=()=>{
		this.props.register;
	}

	render(){
		return(
			<div style={{backgroundColor:"rgba(132,234,4,0.4)"}}>
			<div style={{backgroundColor:"rgba(132,234,4,0.4)"}}>
				<div class='form'>
				<form method="post" action='/login'>
				<label style={{fontSize: "2em"}}>REGISTER</label><br/><br/><br/>
				<img src="https://s3.amazonaws.com/thumbnails.illustrationsource.com/huge.102.513291.JPG" alt="" width="200px" height="200px"/><br/><br/>
				<label>Email</label><br/><br/>
				<input type="email" name="email" required="true" onChange={this.emailchange}/><br/>/<br/>
				<label>Password</label><br/><br/>
				<input type="password" name="password" required="true"onChange={this.passchange}/><br/><br/>
				<button style={{cursor: "pointer",fontSize: "1em"}} onClick={this.login}>Login</button><br/><br/>
				<p style={{fontFamily: "sans-serif"}}>Dont Have an Account!</p>
				</form>
				<form action='/register_page' method="GET">
				<button style={{cursor:"pointer"}} onClick={this.register}>Click to Register</button>
				</form>
				</div>

			</div>
			</div>


			)
	}
}

export default Login;