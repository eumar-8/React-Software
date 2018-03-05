import React, { Component, Fragment } from "react";
import ProfileBox from "../../components/ProfileBox";
import AboutBox from "../../components/AboutBox";
import OurCustomersBox from "../../components/OurCustomersBox";

import PostBox from "../../components/PostBox";
import MyBook from "../../components/MyBook";
import SocialNetworksBox from "../../components/SocialNetworksBox";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div
          className="modal fade"
          id="msgModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="msgModal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">contact me</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div style={{ height: "500px" }}>
                <iframe
                  src="https://eugenia43.typeform.com/to/ilAjy7"
                  style={{ height: "100%", width: "100%", border: 0 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="userModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="userModal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Users</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>

              <div className="modal-body p-0">
                <div className="modal-body-scroller">
                  <ul className="media-list media-list-users list-group">
                    <li className="list-group-item">
                      <div className="media w-100">
                        <img
                          className="media-object d-flex align-self-start mr-3"
                          src="assets/img/avatar-fat.jpg"
                        />
                        <div className="media-body">
                          <button className="btn btn-secondary btn-sm float-right">
                            <span className="glyphicon glyphicon-user" /> Follow
                          </button>
                          <strong>Jacob Thornton</strong>
                          <p>@fat - San Francisco</p>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media w-100">
                        <img
                          className="media-object d-flex align-self-start mr-3"
                          src="assets/img/avatar-dhg.png"
                        />
                        <div className="media-body">
                          <button className="btn btn-secondary btn-sm float-right">
                            <span className="glyphicon glyphicon-user" /> Follow
                          </button>
                          <strong>Dave Gamache</strong>
                          <p>@dhg - Palo Alto</p>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media w-100">
                        <img
                          className="media-object d-flex align-self-start mr-3"
                          src="assets/img/avatar-mdo.png"
                        />
                        <div className="media-body">
                          <button className="btn btn-secondary btn-sm float-right">
                            <span className="glyphicon glyphicon-user" /> Follow
                          </button>
                          <strong>Mark Otto</strong>
                          <p>@mdo - San Francisco</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-4 pb-5">
          <div className="row">
            <div className="col-lg-3">
              <ProfileBox />
              <AboutBox />
              <OurCustomersBox />
            </div>

            <div className="col-lg-6">
              <ul className="list-group media-list media-list-stream mb-4">
                <PostBox />
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="card mb-4  d-lg-block">
                <MyBook />
              </div>

              <div className="card mb-4  d-lg-block">
                <SocialNetworksBox />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
