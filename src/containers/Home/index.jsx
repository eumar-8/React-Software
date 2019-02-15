import React, { Component, Fragment } from "react";
import ProfileBox from "../../components/ProfileBox";
import AboutBox from "../../components/AboutBox";
import OurCustomersBox from "../../components/OurCustomersBox";

import PostBox from "../../components/PostBox";
import MyBook from "../../components/MyBook";
import MyBaby from "../../components/MyBaby";
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
                <MyBaby />
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
