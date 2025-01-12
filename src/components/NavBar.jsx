import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavBar(props) {
 let styles = {
  txtColor: props.mode === "light" ? "text-dark" : "text-light",
  toggleTo: props.mode === "light" ? "dark" : "light",
 }

 return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
   <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
       <Link className="nav-link" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="/about">About</Link>
      </li>
     </ul>
    </div>

    <div className="form-check form-switch">
     <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
     <label className={`form-check-label ${styles.txtColor}`} htmlFor="flexSwitchCheckDefault" style={{ "userSelect": "none" }}>{`Enable ${styles.toggleTo} mode`}</label>
    </div>
   </div>
  </nav>
 )
}

NavBar.propTypes = { // fixing prop type
 title: PropTypes.string.isRequired,
}

NavBar.defaultProps = { // used if prop not provided on component call
 title: "Title here", // defies .isRequired above
}

export default NavBar;