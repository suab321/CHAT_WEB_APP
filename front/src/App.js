import React, { Component } from 'react';
import Friendlist from './Component/friendlist/Friendlist';
import User  from './Component/upperborder/User';
import Chatpage from './Component/chatpage/Chatpage';
import 'tachyons';


class App extends Component {
  constructor(){
    super()
    this.state={route:'home',friend:''}
  }
  onchatpage=(friend)=>{
    this.setState({route:'chatpage',friend})
  }

  onhomechange=()=>{this.setState({route:'home'})}


  render() {
    return (
      <div>
     {

        (this.state.route==='home')
        ?<div>
      <User>
      <Friendlist route={this.onchatpage} />
      </User></div>
      :(
        <div>
        <Chatpage friend={this.state.friend} home={this.onhomechange}/>
        </div>
        )
    }
          </div>
    );
  }
}

export default App;
