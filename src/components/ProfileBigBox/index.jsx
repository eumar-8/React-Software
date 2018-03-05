import React, { Component, Fragment } from "react";
import ProfileNav from "../../components/ProfileNav";

class ProfileBigBox extends Component {
  render() {
    return (
      <Fragment>
        <div
          class="profile-header"
          style={{ backgroundImage: "url(../assets/img/iceland.jpg)" }}
        >
          <div class="container">
            <div class="container-inner">
              <img
                class="rounded-circle media-object"
                src="../assets/img/profile-picture.jpg"
              />
              <h3 class="profile-header-user">Emilio Rodriguez </h3>
              <p class="profile-header-bio">
                I wish i was a little bit taller, wish i was a baller, wish i
                had a girl… also.
              </p>
            </div>
          </div>

          <ProfileNav />
        </div>
      </Fragment>
    );
  }
}

export default ProfileBigBox;
