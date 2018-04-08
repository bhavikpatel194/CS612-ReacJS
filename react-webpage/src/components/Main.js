import React, { Component } from 'react';

class Main extends Component{
	render(){
		return(
			<div className="Main">
				<h1>Computer system transcribes words users “speak silently”</h1>
				<h3>April 04, 2018</h3>
				<p>
					The system consists of a wearable device and an associated computing system. 
					Electrodes in the device pick up neuromuscular signals in the jaw and face that are triggered by internal verbalizations — saying words “in your head” — but are undetectable to the human eye.
					The signals are fed to a machine-learning system that has been trained to correlate particular signals with particular words.
				</p>
				<h1>Microsoft Offers New Tool to Grow Linux in Windows</h1>
				<h3>April 02, 2018</h3>
				<p>
					The new tool, released last week, also helps Linux distribution maintainers bring their distros to the Windows Store to run on Windows 10's Windows Subsystem for Linux.
					Microsoft developed the project for distribution maintainers and for developers who want to create custom Linux distributions to run on WSL.
				</p>
				<h1>Smart Homes: The Power, the Pleasure and the Pain</h1>
				<h3>March 28, 2018</h3>
				<p>
					Reams have been written about how great it is to use your voice to control your home's smart devices; how your smart, Web-connected fridge can monitor its contents and be programmed to replenish stocks automatically; how you can control your home's smart lighting and locks with your smartphone; and how your smart Internet-connected appliances can be controlled -- and even repaired and maintained -- remotely.
				</p>
			</div>	
		);
	}
}

export default Main;