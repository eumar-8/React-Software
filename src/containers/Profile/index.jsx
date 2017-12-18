import React, { Component, Fragment } from "react";
import ProfilePortfolio from "../../components/ProfilePortfolio";
import ProfileBigBox from "../../components/ProfileBigBox";

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <ProfileBigBox />
        <div className="container my-4" data-grid="images">
          <ProfilePortfolio />
        </div>
      </Fragment>
    );
  }
}

export default Profile;
