import React, {useState} from 'react'
import "./../styles/App.css";

const App = () => {
  const[state, setState]=useState(false);
	const toggle=()=>{
		if(!state){
			setState(true);
		}
		else {
			setState(false);
		}
	}
  return (
    <div id="main">
    <button id='click' onClick={toggle}>click</button>
		{state &&
      <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
		}
  </div>
  );
}


export default App;
