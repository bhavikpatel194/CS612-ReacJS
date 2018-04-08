import React, { Component } from 'react';
import Main from './Main';
import Nav from './Nav';

class Body extends Component{
	render(){
		return(
			<div className="Body">
				<Main />
				<Nav />
			</div>
		);
	}
}

export default Body;