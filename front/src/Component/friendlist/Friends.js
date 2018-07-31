import React from 'react';

const Friends=({name,route})=>{
	return(
		<div className='b--black' onClick={()=>route(name)}>
		<div className='br1 b--black fl w-100 bg-light-blue grow'>
		<img className='br-100 ph4 pv2  fl w-10' height='200px' width='200px' src='https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/howpartsofap.jpg'/>
		<label className='fl w-70 tc pv5 b f2'>{name}</label>
		<hr/>
		</div>
		<hr/>
		</div>
		)
}
export default Friends;