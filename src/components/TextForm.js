import { useState } from "react";

function TextForm(props) {
 const [text, setText] = useState("Enter text here");

 function handleUppercase() {
  setText(text.toUpperCase());
 }

 function handleOnChange(event) {
  setText(event.target.value);
 }

 return (
  <div className="container my-3">
   <div className="mb-3">
    <label htmlFor="myBox" className="form-label"><h4>{props.heading}</h4></label>
    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
   </div>

   <button className="btn btn-dark" onClick={handleUppercase}>UPPERCASE</button>
  </div>
 )
}

export default TextForm;