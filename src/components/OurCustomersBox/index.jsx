import React, { Component, Fragment } from "react";

class OurCustomersBox extends Component {
  render() {
    return (
      <Fragment>
        <div className="card d-md-block d-lg-block mb-4">
          <div className="card-body">
            <h6 className="mb-3">My customers</h6>
            <div data-grid="images" data-target-height="150">
              <div>
                <img
                  data-width="640"
                  data-height="640"
                  data-action="zoom"
                  src="assets/img/logo-british.jpg"
                />
              </div>
              <div>
                <img
                  data-width="640"
                  data-height="640"
                  data-action="zoom"
                  src="assets/img/logo-redhat.jpg"
                />
              </div>

              <div>
                <img
                  data-width="640"
                  data-height="640"
                  data-action="zoom"
                  src="assets/img/logo-2days.jpg"
                />
              </div>

              <div>
                <img
                  data-width="640"
                  data-height="640"
                  data-action="zoom"
                  src="assets/img/logo-deskbookers.jpg"
                />
              </div>
              <div>
                <img
                  data-width="640"
                  data-height="640"
                  data-action="zoom"
                  src="assets/img/logo-spil.jpg"
                />
              </div>

              <div>
                <img
                  data-width="640"
                  data-height="640"
                  data-action="zoom"
                  src="assets/img/logo-rakuten.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default OurCustomersBox;
