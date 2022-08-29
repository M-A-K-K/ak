
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,   { useState } from 'react';

// hehe boi
/* import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom" */


function App() {

  const [mode , setMode] = useState('light');
  const [alert, setalert] = useState(null);
  
  const showAlert =(message , type) =>{
setalert({
  ms : message,
  type : type
})
setTimeout(() => {
  setalert(null);
}, 1000);
  }

  const toggleMode = ()=> {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled"  ,"success");
     
      document.title ='Khan Enterprise - Dark Mode';
      /* setInterval(() => {
         document.title ='Khan Enterprise - Dark Mode';
      }, 2000); */
    }
    else
    {
      setMode('light');
      
      document.body.style.backgroundColor='white';
      
      showAlert("light mode has been enabled","success");
      
      document.title='Khan Enterprise - light Mode';
    }
  }
 

  return (
    <>{/* 
  <Router> */}
        <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>

        <Alert alert={alert} />
    <div className="container"> 
    
    <TextForm showAlert={showAlert} text="Enter the text to analyze" mode={mode}/>
        {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<
            TextForm text="Enter the text to analyze" mode={mode} />} />
        </Routes> */}
        </div>
      {/* </Router> */}
  
   {/*  <nav> 

       <Switch>
            <Route exact path="/about">


      <li> Home </li>
      <li> About</li>
      <li> Contact</li>
    </nav>
    <div className="container">
      <h1> My name is {name} </h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Ullam earum voluptatum minus suscipit, asperiores blanditiis 
         consectetur totam aut alias quasi, quam, adipisci ad beatae 
         delectus modi vero neque! A cumque ducimus recusandae quas rem!</p>
    </div> */}
    </>
  );
}

export default App;
