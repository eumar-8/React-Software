import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Profile from "./containers/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="growl" id="app-growl" />
          <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-primary app-navbar">
            <a className="navbar-brand" href="/">
              <img src="assets/img/logoreact.png" alt="brand" />
            </a>

            <button
              className="navbar-toggler navbar-toggler-right d-md-none"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Profile">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="modal" href="#msgModal">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="docs/index.html">
                    more
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/Profile" component={Profile} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
