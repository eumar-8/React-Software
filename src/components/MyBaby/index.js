import React, { Component, Fragment } from "react";

class MyBaby extends Component {
  render() {
    return (
      <Fragment>
        <div className="card-body">
          <h6 className="mb-3">My Open Source</h6>
          <div data-grid="images" data-target-height="100">
            <img
              className="media-object"
              data-width="419"
              data-height="178"
              data-action="zoom"
              src="assets/img/lottie.png"
            />
          </div>
          <p>
            I'm the sole maintainer of{" "}
            <a
              href={
                "https://github.com/react-native-community/lottie-react-native"
              }
            >
              lottie-react-native
            </a>{" "}
            which has over 10K github stars!
          </p>
          <a
            target="_blank"
            href="https://github.com/react-native-community/lottie-react-native"
          >
            <button
              href="https://github.com/react-native-community/lottie-react-native"
              className="btn btn-outline-primary btn-sm"
            >
              Check it out
            </button>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default MyBaby;
