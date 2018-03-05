import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProfilePortfolio from "../../components/ProfilePortfolio";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <nav class="profile-header-nav">
            <ul class="nav nav-tabs justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" href="/Profile">
                  Apps
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Others">
                  Webs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Anothers">
                  Others
                </a>
              </li>
            </ul>
          </nav>
          <Route path="/Portfolio" component={ProfilePortfolio} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
