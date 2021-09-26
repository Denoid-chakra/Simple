import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Pavbar from './components/Navbar';
import About from './components/about.js';
import Table from './components/table';
import Textform from './components/Textform';
import Back from './components/backroud';
import Errar from './components/searchnotfound';
import Footer from './components/footer';
import Intro from './components/cardfortext';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [vol,setvol] = useState('Dark Mode');
  function tillu(params) {
    
  
    if (document.body.style.backgroundColor === `pink`){
      document.body.style.color =`white`;
      setvol("Light Mode")
      document.body.style.backgroundColor =`black`;
      document.getElementById('fitter').style.backgroundColor='grey';
      
      
      // document.textarea.style.backgroundColor =`black`;
      // document.textarea.style.color =`white`;
      
  }
  else{
  
  document.body.style.backgroundColor =`pink`;
  document.body.style.color =`white`;
  document.getElementById('fitter').style.backgroundColor='aqua';
  setvol("Dark Mode")
  
  
 
  // document.textarea.style.backgroundColor =`white`;
  //     document.textarea.style.color =`pink`;
  
  }
  
}

let hell ="dark";
  return (
    <>
   
    <title>Time creators about</title>
     
   <Router>
  <Pavbar okay={hell} func={tillu} name={vol} 
  ></Pavbar>
  <Back></Back>
  {/* <button className="btn btn-outline-success"  onClick={tillu}>hello</button> */}
  
  <Switch>
  <Route exact path="/">
  <Intro></Intro>
    
    </Route>
    <Route exact path="/Contact">
  <Contact></Contact>
    
    </Route>
    <Route exact path="/home">
    <Textform ></Textform>
    </Route>
    <Route exact path="/about">
    <About>
    
    </About>
    </Route>
    <Route>
    <Errar></Errar>
    </Route>
  
  </Switch>
  <Footer></Footer>
 
  </Router>
    </>
  );
}

export default App;
