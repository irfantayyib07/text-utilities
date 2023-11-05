import { useState } from "react";

function TextForm(props) {
 const [text, setText] = useState("");

 let styles = {
  color: props.mode === "light" ? "black" : "white",
  bgColor: props.mode === "light" ? "white" : "#131518",
  btn: props.mode === "light" ? "dark" : "secondary",
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
    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{color: styles.color, backgroundColor: styles.bgColor}}></textarea>
   </div>
   <button className={`btn btn-${styles.btn}`} onClick={handleUpperCase} disabled={!text.length}>UPPERCASE</button>
   <button className={`btn btn-${styles.btn} m-2`} onClick={handleLowerCase} disabled={!text.length}>lowercase</button>
   <button className={`btn btn-${styles.btn}`} onClick={handleClear} disabled={!text.length}>Clear text</button>
  </div>

  <div className="container">
   <h4>Your Text Summary</h4>
   <p>{text.split(/\s+/).filter((value) => value.length!==0).length} words and {text.length} characters</p>
   <p>{0.008 * text.split(/\s+/).filter((value) => value.length!==0).length} minutes read</p>
   <h4>Preview</h4>
   <p>{text.length>0?text:"Nothing to preview"}</p>
  </div>
  </>
 )
}

export default TextForm;