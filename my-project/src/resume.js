import React from 'react'
import data from './data.json'
export default function Resume(){
	let information=data.details[props.location.data1.id]
	console.log(information)
	return(
		<div className="row justify-content-center">
		<div className="col-lg-3 m2">
		<div className="card">
		<div className="card-body">
		<h2>{information.profile.name}</h2>
		</div>
		</div>

		</div>
		<div className="col-lg-8">
		<div className="card">
		<div className="card-body">
		<h2>{information.profile.careerobj}</h2>
		</div>
		</div>
		</div>
		</div>
		<h1>hello resume</h1>
		);
}