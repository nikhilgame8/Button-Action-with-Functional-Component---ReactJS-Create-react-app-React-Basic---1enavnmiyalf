import React, {useState} from 'react'
import "./../styles/App.css";

const App = () => {
  const[state, setState]=useState(false);
	  const toggle=()=>{
		  if(state){
			  setState(false);
		  }
		  else {
			  setState(true);
		  }
	  }
  return (
    <div id="main">
    <button id='click' onClick={toggle}>click</button>
		{state &&
      <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
		}
  </div>
  );
}


export default App;
