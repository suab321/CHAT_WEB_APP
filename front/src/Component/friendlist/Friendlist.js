import React from 'react';
import Friends from './Friends';

const Friendlist=({route})=>{
	let friends=["abhinav","ravi","inder","raju","ayush","aman","kiran","raja","Deep","adarsh"]
	let list=friends.map((i)=>{
		return(<Friends name={i} route={route}/>)
	})
	return(
		<div>
			{list}

			</div>
		)
	}
	export default Friendlist;
	

