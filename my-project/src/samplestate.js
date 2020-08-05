import React, { Component } from 'react'
export default class samplestate extends Component {

	constructor(){
		super()
		this.state={
			message:"hiiii"
		}
	}
	change=()=>{
		this.setState(
		{
			message:"hello Apssdc"
		}

	)
	}
	render(){
		return(
			<div>
			<h1>Status { this.state.message }</h1>
			<button onClick= {()=>this.change() }>Click Me...!</button>
			</div>

			)
			
	}
}