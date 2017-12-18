import React, { Component, Fragment } from "react";
import resume from "../../resume.json";

class ProfileBox extends Component {
  render() {
    return (
      <Fragment>
        <div className="card card-profile mb-4">
          <div
            className="card-header"
            style={{
              backgroundImage: " url(../assets/img/code.jpg)"
            }}
          />
          <div className="card-body text-center">
            <a href=" url(../assets/img/profile-picture.jpg)">
              <img
                className="card-profile-img"
                src="../assets/img/profile-picture.jpg "
              />
            </a>

            <h6 className="card-title">
              <a className="text-inherit" href="profile/index.html">
                {resume.name}
              </a>
            </h6>

            <p
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: resume.subtitle }}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProfileBox;
