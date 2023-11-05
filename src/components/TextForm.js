import { useState } from "react";

function TextForm(props) {
 let color, bgColor, btn;
 const [text, setText] = useState("");

 if (props.mode === "light") {
  color = "black";
  bgColor = "white";
  btn = "dark";
 } else {
  color = "white";
  bgColor = "#131518";
  btn = "secondary";
 }

 function handleUpperCase() {
  setText(text.toUpperCase());
 }

 function handleLowerCase() {
  setText(text.toLowerCase());
 }

 function handleClear() {
  let newText = "";
  setText(newText);
 }

 function handleOnChange(event) {
  setText(event.target.value);
 }

 return (
  <>
  <div className="container my-3">
   <div className="mb-3">
    <label htmlFor="myBox" className="form-label"><h4>{props.heading}</h4></label>
    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{color: color, backgroundColor: bgColor}}></textarea>
   </div>
   <button className={`btn btn-${btn}`} onClick={handleUpperCase}>UPPERCASE</button>
   <button className={`btn btn-${btn} mx-2`} onClick={handleLowerCase}>lowercase</button>
   <button className={`btn btn-${btn}`} onClick={handleClear}>Clear text</button>
  </div>

  <div className="container">
   <h4>Your Text Summary</h4>
   <p>{text.split(" ").length} words and {text.length} characters</p>
   <p>{0.008 * text.split(" ").length} minutes read</p>
   <h4>Preview</h4>
   <p>{text.length>0?text:"Enter something to preview here"}</p>
  </div>
  </>
 )
}

export default TextForm;