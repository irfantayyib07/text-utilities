import { useState } from "react";

function TextForm(props) {
 const [text, setText] = useState("");

 function handleUpperCase() {
  setText(text.toUpperCase());
 }

 function handleLowerCase() {
  setText(text.toLowerCase());
 }

 function handleOnChange(event) {
  setText(event.target.value);
 }

 return (
  <>
  <div className="container my-3">
   <div className="mb-3">
    <label htmlFor="myBox" className="form-label"><h4>{props.heading}</h4></label>
    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
   </div>
   <button className="btn btn-dark" onClick={handleUpperCase}>UPPERCASE</button>
   <button className="btn btn-dark mx-2" onClick={handleLowerCase}>lowercase</button>
  </div>

  <div className="container">
   <h4>Your Text Summary</h4>
   <p>{text.split(" ").length} words and {text.length} characters</p>
   <p>{0.008 * text.split(" ").length} minutes read</p>
   <h4>Preview</h4>
   <p>{text}</p>
  </div>
  </>
 )
}

export default TextForm;