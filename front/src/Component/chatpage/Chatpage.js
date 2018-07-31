import React from 'react';
import Friendmessage from './Friendmessage';
import Mymessage from './Mymessage';
import './input.css';

const Chatpage=({home,friend})=>{
	var friend_message=['svd','sfffwf','weewfwfw','wfwefwefwf','wffwfwf','efwfwfwf','efwfwfwf','fweffgg','wfewewfwfw','fwfwfwfwf','fewfwfwfwf','fewefewfwfwefw','fwfwfwfwfwfwfw','efefefef']

		var my_message=['wefwfw','fewfwfw','wefwf','wefwfewf','efwf','efwfwfwf','efwfwfwf','fweffgg','wfewewfwfw','fwfwfwfwf','fewfwfwfwf','fewefewfwfwefw','fwfwfwfwfwfwfw','efefefef']

		var friend_messages=friend_message.map((message)=>{
			return (<Friendmessage message={message}/>)
		})

		var my_messages=my_message.map((message)=>{
			return (<Mymessage message={message}/>)})

		return(

			<div>
			<div className='friend_message ph5'>
			{friend_messages}
			</div>
			<div className='my_message ph5'>
			{my_messages}
			</div>
			<div className='br1 fl w-100 bg-green pointer upper grow' onClick={home}>
			<img className='br-100 fl w-10 pa2 pv4' src='https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/howpartsofap.jpg' height='100px' width='100px' alt=''/>
			<p className='b sans-serif tc f1 fl w-70'>{friend}</p>
			</div>
			<div className=' br1 bg-green input'>
			<input className='lower' type='chat' placeHolder='Type Message'/>
			<button className='button bg-light-blue pointer'>SEND</button>
			
			</div>
			</div>


			)
	}

export default Chatpage;