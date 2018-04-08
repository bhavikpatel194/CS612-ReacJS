import React, { Component } from 'react';

class Nav extends Component{
	render(){
		return(
			<div className="Nav">
				<h2>Read more here:</h2>
				<ul>
					<li><a target="_blank" href="http://news.mit.edu/2018/computer-system-transcribes-words-users-speak-silently-0404">AlterEgo:Speak Silently System</a></li>
					<li><a target="_blank" href="https://www.technewsworld.com/story/Microsoft-Offers-New-Tool-to-Grow-Linux-in-Windows-85242.html">Microsoft's New Tool</a></li>
					<li><a target="_blank" href="https://www.technewsworld.com/story/85231.html">Smart Homes</a></li>
				</ul>
			</div>
			);
	}
}

export default Nav;
