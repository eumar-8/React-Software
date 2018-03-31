import React, { Component, Fragment } from "react";

class AboutBox extends Component {
  render() {
    return (
      <Fragment>
        <div className="card d-md-block d-lg-block mb-4">
          <div className="card-body">
            <h6 className="mb-3">My Contact Details</h6>
            <ul className="list-unstyled list-spaced">
              <li>
                <span className="text-muted icon icon-skype-with-circle mr-3" />Skype&nbsp;
                <a href="skype:emilioicai">emilioicai </a>
              </li>
              <li>
                <span className="text-muted icon icon-phone mr-3" />(UK)&nbsp;
                <a href="tel:+447827696467">07827 696467</a>
              </li>
              <li>
                <span className="text-muted icon icon-phone mr-3" />(NL)&nbsp;
                <a href="tel:+31645159778">645 159 778</a>
              </li>
              <li>
                <span className="text-muted icon icon-email mr-3" />
                <a href="#">emiliorodriguez at gmail</a>
              </li>
              <li>
                <span className="text-muted icon icon-location mr-3" />location
                <a href="#">London</a>/<a href="#">Amsterdam</a>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AboutBox;
