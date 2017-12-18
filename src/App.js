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
            <a className="navbar-brand" href="index.html">
              <img src="assets/img/brand-white.png" alt="brand" />
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
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="modal" href="#msgModal">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="docs/index.html">
                    Docs
                  </a>
                </li>

                <li className="nav-item d-md-none">
                  <a className="nav-link" href="notifications/index.html">
                    Notifications
                  </a>
                </li>
                <li className="nav-item d-md-none">
                  <a className="nav-link" data-action="growl">
                    Growl
                  </a>
                </li>
                <li className="nav-item d-md-none">
                  <a className="nav-link" href="login/index.html">
                    Logout
                  </a>
                </li>
              </ul>

              <form className="form-inline float-right d-none d-md-flex">
                <input
                  className="form-control"
                  type="text"
                  data-action="grow"
                  placeholder="Search"
                />
              </form>

              <ul
                id="#js-popoverContent"
                className="nav navbar-nav float-right mr-0 d-none d-md-flex"
              >
                <li className="nav-item">
                  <a
                    className="app-notifications nav-link"
                    href="notifications/index.html"
                  >
                    <span className="icon icon-bell" />
                  </a>
                </li>
                <li className="nav-item ml-2">
                  <button
                    className="btn btn-default navbar-btn navbar-btn-avatar"
                    data-toggle="popover"
                  >
                    <img
                      className="rounded-circle"
                      src="assets/img/avatar-dhg.png"
                    />
                  </button>
                </li>
              </ul>

              <ul className="nav navbar-nav d-none" id="js-popoverContent">
                <li className="nav-item">
                  <a className="nav-link" href="#" data-action="growl">
                    Growl
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="login/index.html">
                    Logout
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
