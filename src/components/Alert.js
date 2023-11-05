import React from 'react'

const Alert = (props) => {
 function capitalize() {
  let lower = props.alert.type;
  return lower.charAt(0).toUpperCase() + lower.slice(1);
 }

 return (
  props.alert?.message && <div className="d-flex align-items-center justify-content-center">
   <div style={{position:"absolute"}} className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
    {capitalize() + ": " + props.alert.message}
   </div>
  </div>
 )
} 

export default Alert;
