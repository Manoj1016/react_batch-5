import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./home";
import Welcome from "./welcome";
import Sample from './samplestate';
import data from './data.json';
import male from './manoj.png'
import Resume from '/.resume'
import{BrowserRouter, Route, Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <h1>Apssdc web development</h1>
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      <Home />
      {/*lcome name="manojkumar"></Welcome>
      <Welcome name="Ravi"></Welcome>
      <Welcome name="Harsha"></Welcome>
      <Welcome name="Surya"></Welcome>*/}
  
    <BrowserRouter>
    <Route exact path="/" component={CardView} />
    <Route exct path="/resume" component={Resume} />
    </BrowserRouter>
</div>
  );
}
let CardView=()=>{
  let profileData=data.details;
  console.log(profileData);
  return(
    <div className="row justify-content-center">
   { profileData.map((cardsData)=>(
    <div className="col-lg-4 col-md-4 col-sm-10 mt-2">
    <div className="card">
    <div className="card-body">
    <img src={male} alt="Profile Image"/>
    <h1>{ cardsData.profile.name }</h1>
    <h2 className="text-secondary"> {cardsData.profile.roll} </h2>
    <a  href={"tel:"+cardsData.profile.phno}><h4>{cardsData.profile.phno}</h4></a>
     <a  href={"tel:"+cardsData.profile.email}><h4>{cardsData.profile.email}</h4></a>

     <Link to={{pathname:'/resume',data1:{id:index}}} className="btn btn-primary">Viewprofile</Link>
    </div>
    </div>
</div>

    ))}



    </div>
   
  );
}


export default App;
