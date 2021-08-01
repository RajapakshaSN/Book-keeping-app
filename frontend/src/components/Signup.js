import React, { Component } from "react";
import background from "../img/book-blured.jpg";

const FormSignUp = () => {
  return (
    <div
      class="bg_image"
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        height: "650px",
       
      }}
    >
      <div className="outer">
        <div className="inner">
          <form>
            <h3>Register</h3>            

            <div className="form-group" style={{marginTop:'20px',marginBottom:'20px'}}>
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>

            <div className="form-group" style={{marginTop:'20px',marginBottom:'20px'}}>
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group" style={{marginTop:'20px',marginBottom:'20px'}}>
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-md btn-block">
              Register
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="#">log in?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSignUp;
