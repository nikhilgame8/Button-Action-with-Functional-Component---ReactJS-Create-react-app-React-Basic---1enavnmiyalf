import React, {useState} from 'react'

export default function Para(props) {
  const [text, setText]=useState("");
function textpara(){
  setText(props.paragraph);
}
  return (
    <div>
      <button id="click" onClick={textpara}>Click</button>
      <p id="para">{text}</p>
    </div>
  )
}
