import React, { Component, Fragment } from "react";

class AboutBox extends Component {
  render() {
    return (
      <Fragment>
        <div className="card d-md-block d-lg-block mb-4">
          <div className="card-body">
            <h6 className="mb-3">About</h6>
            <ul className="list-unstyled list-spaced">
              <li>
                <span className="text-muted icon icon-skype-with-circle mr-3" />Skype
                <a href="emiliorodriguez@gmail.com"> emilioicai </a>
              </li>
              <li>
                <span className="text-muted icon icon-phone mr-3" />(UK)
                <a href="#"> 07827 696467</a>
              </li>
              <li>
                <span className="text-muted icon icon-phone mr-3" />(NL)
                <a href="#"> 645 159 778</a>
              </li>
              <li>
                <span className="text-muted icon icon-email mr-3" />
                <a href="#"> emiliorodriguez at gmail</a>
              </li>
              <li>
                <span className="text-muted icon icon-location mr-3" />location
                <a href="#"> London</a> and <a href="#">Amsterdam</a>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AboutBox;
