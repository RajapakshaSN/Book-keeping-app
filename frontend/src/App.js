import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
// import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>     
      <Navbar/>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        {/* <Route path="/about">
          <About/>
        </Route> */}
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>        
      </Switch>
        
    
  </Router>
  );
}

export default App;
