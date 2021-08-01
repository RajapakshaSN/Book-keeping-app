import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar bg-light" style={{backgroundColor:'#4fc3f7'}}>
    <div className="container-fluid">
      <a className="navbar-brand" style={{color:'#64B5F6'}}>Book Keeper</a>
      
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item" >
            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            <Link to="/" className="nav-link active"   aria-current="page" >Home</Link>
          </li>
          <li className="nav-item">           
            <Link to="/" className="nav-link active"   aria-current="page" >About</Link>
          </li>
          <li className="nav-item">
          <Link to="/login" className="nav-link active"  aria-current="page" >Login</Link>
          </li>
          <li className="nav-item">
          <Link to="/signup" className="nav-link active"  aria-current="page" >Signup</Link>
          </li>         
        </ul>
          
        
      </div>
      <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-primary" type="submit">Search</button>
          </form>
    </div>
  </nav>
  );
};

export default Navbar;




// <div>
// <nav classNameName="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:'#8ED1FC'}}>
// <div classNameName="container-fluid">
// <a classNameName="navbar-brand" href="#" style={{color:'#64B5F6'}}>Book Keeper</a>
// <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
// <span classNameName="navbar-toggler-icon"></span>
// </button>
// <div classNameName="collapse navbar-collapse" id="navbarNavAltMarkup">
// <div classNameName="navbar-nav">
//   <a classNameName="nav-link" aria-current="page" href="#" style={{color:'#0d47a1'}}>Home</a>
//   <a classNameName="nav-link" href="#" style={{color:'#0d47a1'}}>About</a>
//   <a classNameName="nav-link" href="#" style={{color:'#0d47a1'}}>Login</a>
//   <a classNameName="nav-link" href="#" style={{color:'#0d47a1'}}>SignUp</a>
// </div>
// </div>
// </div>
// </nav>
// </div>