import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import State from "./Usestate/State";
import Context from "./Usecontext/Context";
import Effect from "./Useeffect/Effect";

function App() {
  return (
    <Router>
    <div className="header">
      <nav className="NavBar">
        <ul className="ul">
          <li className="li">
            <Link className="text" to="/">Use State</Link>
          </li>
          <li className="li">
            <Link className="text" to="/effect" >Use Effect</Link>
          </li>
          <li className="li">
            <Link className="text" to="/context" >Use Context</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={State} />
        <Route path="/context" component={Context} />
        <Route path="/effect"  component={Effect} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

