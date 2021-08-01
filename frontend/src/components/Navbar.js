import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" style={{color:'#64B5F6'}}>Book Keeper</a>
      
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
            <Link to="/" class="nav-link active"  aria-current="page" >Home</Link>
          </li>
          <li class="nav-item">           
            <Link to="/" class="nav-link active"  aria-current="page" >About</Link>
          </li>
          <li class="nav-item">
          <Link to="/login" class="nav-link active"  aria-current="page" >Login</Link>
          </li>
          <li class="nav-item">
          <Link to="/signup" class="nav-link active"  aria-current="page" >Signup</Link>
          </li>
         
        </ul>
        
      </div>
    </div>
  </nav>
  );
};

export default Navbar;




// <div>
// <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:'#8ED1FC'}}>
// <div className="container-fluid">
// <a className="navbar-brand" href="#" style={{color:'#64B5F6'}}>Book Keeper</a>
// <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
// <span className="navbar-toggler-icon"></span>
// </button>
// <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
// <div className="navbar-nav">
//   <a className="nav-link" aria-current="page" href="#" style={{color:'#0d47a1'}}>Home</a>
//   <a className="nav-link" href="#" style={{color:'#0d47a1'}}>About</a>
//   <a className="nav-link" href="#" style={{color:'#0d47a1'}}>Login</a>
//   <a className="nav-link" href="#" style={{color:'#0d47a1'}}>SignUp</a>
// </div>
// </div>
// </div>
// </nav>
// </div>