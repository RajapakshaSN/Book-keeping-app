import React, { Component } from "react";
import "../App.css";
import background from "../img/book-blured.jpg";

export default class Login extends Component {
  render() {
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
              <h3>Log in</h3>

              <div className="form-group"  style={{marginTop:'20px',marginBottom:'20px'}}>
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

              <div className="form-group"  style={{marginTop:'20px',marginBottom:'20px'}}>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                    style={{marginBottom:'20px'}}
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-md btn-block" >
                Sign in
              </button>
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
