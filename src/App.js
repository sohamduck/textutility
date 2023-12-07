import "./App.css";
import Alert from "./components/Alert";
//import About from "./components/About";
import Navbar from './components/Navbar';
import Textform from "./components/Textform";
import React,{useState} from "react";

function App() {
  const [mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  setTimeout(() => {
    setAlert(null);
  }, 2000);
  
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='rgb(7 3 44)';
      document.body.style.color='white';
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='rgb(7 3 44)';
      showAlert("Light Mode Enabled","success");
    }      
  }
  return (
    <>
      <Navbar title='Soham' about='About Soham' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container" >
      {/*   <About/> */}
       <Textform showAlert={showAlert} heading="Enter your text below to analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;
