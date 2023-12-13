import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  
  const setStyles=(mode)=>{
    let styles={};
    if(mode==='darkred'){
        styles={
            backgroundColor:'#f1707c',
            color: '#f5ba0b'
        };
    }
    else if(mode==='darkgreen'){
        styles={
            backgroundColor:'#95f7ab',
            color: 'black'
        };        
    }
    else if(mode==='darkblue'){
        styles={
            backgroundColor:'#7b71d1',
            color: '#b5acff'
        };        
    }
    else if(mode==='darkyellow'){
        styles={
            backgroundColor:'#fbd667',
            color: '#fbdc7f'
        };
    }
    else{
        styles={
            backgroundColor:'white',
            color: 'rgb(7 3 44)'
        };
    }
    return styles;
};


  return (
    //Navbar bootstrap
    <nav className="navbar navbar-expand-lg my-1" style={{...setStyles(props.mode)}}>
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.about}
            </Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'rgb(7 3 44)':'light'} mx-5`}>
          <input className="form-check-input" onClick={props.blueMode} type="checkbox" role="switch" id="blueSwitch"/>
            <label className="form-check-label" htmlFor="blueSwitch">BlueMode</label>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'rgb(7 3 44)':'light'} mx-5`}>
          <input className="form-check-input" onClick={props.redMode} type="checkbox" role="switch" id="redSwitch"/>
            <label className="form-check-label" htmlFor="redSwitch">RedMode</label>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'rgb(7 3 44)':'light'} mx-5`}>
          <input className="form-check-input" onClick={props.greenMode} type="checkbox" role="switch" id="greenSwitch"/>
            <label className="form-check-label" htmlFor="greenSwitch">GreenMode</label>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'rgb(7 3 44)':'light'} mx-5`}>
          <input className="form-check-input" onClick={props.yellowMode} type="checkbox" role="switch" id="yellowSwitch"/>
            <label className="form-check-label" htmlFor="yellowSwitch">YellowMode</label>
        </div>
      </div>
    </nav>
  )
}
