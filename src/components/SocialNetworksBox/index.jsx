import React, { Component, Fragment } from "react";

class SocialNetworksBox extends Component {
  render() {
    return (
      <Fragment>
        <div className="card-body">
          <h6 className="mb-3">Social Networks</h6>
          <ul className="media-list media-list-stream">
            <li className="media mb-2">
              <a className="media-left" href="#">
                <img
                  className="media-object d-flex align-self-start mr-3"
                  src="assets/img/github-icon.png"
                />
              </a>
              <div className="media-body">
                <strong>Github</strong>
                <div className="media-body-actions">
                  <a target="_blank" href="https://github.com/emilioicai">
                    @emilioicai
                  </a>
                </div>
              </div>
            </li>
            <li className="media">
              <a className="media-left" href="#">
                <img
                  className="media-object d-flex align-self-start mr-3"
                  src="assets/img/Twitter-icon.png"
                />
              </a>
              <div className="media-body">
                <strong>Twitter</strong>
                <div className="media-body-actions">
                  <a target="_blank" href="https://twitter.com/emilioicai">
                    @emilioicai
                  </a>
                </div>
              </div>
            </li>
            <li className="media">
              <a className="media-left" href="#">
                <img
                  className="media-object d-flex align-self-start mr-3"
                  src="assets/img/LinkedIn-icon.png"
                />
              </a>
              <div className="media-body">
                <strong>Linkedin</strong>
                <div className="media-body-actions">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/rodriguezemilio/"
                  >
                    @Emilio Rodriguez
                  </a>
                </div>
              </div>
            </li>
            <li className="media">
              <a className="media-left" href="#">
                <img
                  className="media-object d-flex align-self-start mr-3"
                  src="assets/img/stackoverflow-icon.png"
                />
              </a>
              <div className="media-body">
                <strong>stackoverflow</strong>
                <div className="media-body-actions">
                  <a
                    target="_blank"
                    href="https://stackoverflow.com/users/3265176/emilio-rodriguez"
                  >
                    @Emilio Rodriguz
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default SocialNetworksBox;
