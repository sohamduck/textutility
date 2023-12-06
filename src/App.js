import "./App.css";
//import About from "./components/About";
import Navbar from './components/Navbar';
import Textform from "./components/Textform";
function App() {
  return (
    <>
      <Navbar title='Soham' about='About Soham' />
      <div className="container" >
      {/*   <About/> */}
       <Textform heading="Enter your text below to analyze"/>
      </div>
    </>
  );
}

export default App;
