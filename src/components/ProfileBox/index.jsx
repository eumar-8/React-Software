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
            <img
              className="card-profile-img"
              src="../assets/img/profile-picture.jpg "
            />

            <h5 className="card-title" >
              {resume.name}
            </h5>

            <p
              className="mb-4"
              style={{ textAlign: 'justify', marginTop: 20 }}
              dangerouslySetInnerHTML={{ __html: resume.subtitle }}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProfileBox;
