import "./App.css";
//import About from "./components/About";
import Navbar from './components/Navbar';
import Textform from "./components/Textform";
import React,{useState} from "react";

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='rgb(7 3 44)';
      document.body.style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='rgb(7 3 44)';
    }      
  }
  return (
    <>
      <Navbar title='Soham' about='About Soham' mode={mode} toggleMode={toggleMode} />
      <div className="container" >
      {/*   <About/> */}
       <Textform heading="Enter your text below to analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;
