import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from './components/Navbar';
import Textform from "./components/Textform";
import React, { useState } from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   //Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [btn, setBtn] = useState('primary');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(() => {
    setAlert(null);
  }, 2000);
  const redMode = () => {
    if (mode === 'light') {
      // setMode('darkred');
      // setBtn('warning');
      // document.body.style.backgroundColor = '#6b0d16';
      // document.body.style.color = 'red';
      // showAlert("Red Mode Enabled", "success");
    }
    else {
      setMode('light');
      setBtn('primary');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'rgb(7 3 44)';
      showAlert("Red Mode Disabled", "success");
    }
  }
  const greenMode = () => {
    if (mode === 'light') {
      setMode('darkgreen');
      setBtn('warning');
      document.body.style.backgroundColor = '#22512d';
      document.body.style.color = '#aedfba';
      showAlert("Green Mode Enabled", "success");
    }
    else {
      setMode('light');
      setBtn('primary');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'rgb(7 3 44)';
      showAlert("Green Mode Disabled", "success");
    }
  }
  const yellowMode = () => {
    if (mode === 'light') {
      setMode('darkyellow');
      setBtn('danger');
      document.body.style.backgroundColor = '#7d5f05';
      document.body.style.color = '#fbdc7f';
      showAlert("Yellow Mode Enabled", "success");
    }
    else {
      setMode('light');
      setBtn('primary');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'rgb(7 3 44)';
      showAlert("Yellow Mode Disabled", "success");
    }
  }
  const blueMode = () => {
    if (mode === 'light') {
      setMode('darkblue');
      setBtn('info');
      document.body.style.backgroundColor = '#140c55';
      document.body.style.color = '#b5acff';
      showAlert("Blue Mode Enabled", "success");
    }
    else {
      setMode('light');
      setBtn('primary');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'rgb(7 3 44)';
      showAlert("Blue Mode Disabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtils' about='About' mode={mode} redMode={redMode} blueMode={blueMode} yellowMode={yellowMode} greenMode={greenMode} />
        <Alert alert={alert} />
        <div className="container" >
          {/* <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter your text below to analyze" mode={mode} btn={btn} />} />
          </Routes> */}
          <Textform showAlert={showAlert} heading="Enter your text below to analyze" mode={mode} btn={btn} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
