import React from "react";
class Welcome extends React.Component{
	render(){
		return(
			
			<div>
			<h5>this is {this.props.name} </h5>
			</div>

			);
	}
}
export default Welcome;