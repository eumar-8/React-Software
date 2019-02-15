import React, { Component, Fragment } from "react";

class PostBox extends Component {
  render() {
    return (
      <Fragment>
        <li className="media list-group-item p-4">
          <img
            className="media-object d-flex align-self-start mr-3"
            src="assets/img/domestika.png"
          />

          <div className="media-body">
            <div className="media-heading">
              <small className="float-right text-muted">
                Sep 2018 - Currently
              </small>
              <h5>Domestika</h5>
              <h6 className="light-title">E-learning app</h6>
            </div>

            <p>
              Domestika is the largest spanish-speaking community of creative
              professionals. They wanted to build iOS and Android apps for their
              e-learning platform which allowed users to buy courses, watch the
              lessons and download them so a strong focus on the{" "}
              <strong>video player</strong>,<strong>in-app purchases</strong>{" "}
              and <strong>offline mode</strong> where needed. I built the whole
              app in <strong> React Native</strong> using{" "}
              <strong> Typescript</strong> and <strong> GraphQL</strong>. Other
              technologies I introduced were <strong>Appcenter</strong> and{" "}
              <strong>Fastlane</strong>.
            </p>

            <div className="boy" data-grid="images">
              <div
                style={{
                  display: "inlineBlock",
                  marginBottom: "10px",
                  marginRight: "10px",
                  verticalAlign: " bottom"
                }}
              >
                <img
                  data-action="zoom"
                  data-width="227px"
                  src="assets/img/domestika1.jpg"
                  style={{ width: "227px" }}
                  className=""
                />
              </div>
              <div
                style={{
                  display: "inline-block",
                  marginBottom: "10px",
                  marginRight: "0px",
                  verticalAlign: "bottom"
                }}
              >
                <img
                  data-action="zoom"
                  data-width="227px"
                  src="assets/img/domestika2.jpg"
                  style={{ width: "227px" }}
                />
              </div>
            </div>
          </div>
        </li>
        <li className="media list-group-item p-4">
          <img
            className="media-object d-flex align-self-start mr-3"
            src="assets/img/myvolkswagen.jpg"
          />
          <div className="media-body">
            <div className="media-heading">
              <small className="float-right text-muted">
                Feb 2018 - Sep 2018
              </small>
              <h5>MyVolkswagen</h5>
              <h6 className="light-title">Smart Car App</h6>
            </div>

            <p>
              Hired by the distributor of the Volkswagen Automobile Group in
              Denmark, I built this impressive app for iOS and Android in
              <strong> React Native</strong>. As this one is a customer facing
              app, it required high standards in terms of design and
              responsiveness. I introduced
              <strong> Typescript</strong> for this project and rewrote lots of
              views which where built over webviews to give a more attractive
              look to the app. Some of the technologies used for this project
              are: <strong>Redux</strong>, <strong>GraphQL</strong>,
              <strong>Firebase</strong>, <strong>Fastlane</strong> or{" "}
              <strong>Sentry</strong> (for crash reporting).
            </p>

            <div className="boy" data-grid="images">
              <div
                style={{
                  display: "inlineBlock",
                  marginBottom: "10px",
                  marginRight: "10px",
                  verticalAlign: " bottom"
                }}
              >
                <img
                  data-action="zoom"
                  data-width="227px"
                  data-height="453px"
                  src="assets/img/myvolkswagen1.jpg"
                  style={{ width: "227px", height: "453px" }}
                  className=""
                />
              </div>
              <div
                style={{
                  display: "inline-block",
                  marginBottom: "10px",
                  marginRight: "0px",
                  verticalAlign: "bottom"
                }}
              >
                <img
                  data-action="zoom"
                  data-width="227px"
                  data-height="453px"
                  src="assets/img/myvolkswagen2.jpg"
                  style={{ width: "227px", height: "454px" }}
                />
              </div>
            </div>
          </div>
        </li>
        <li className="media list-group-item p-4">
          <img
            className="media-object d-flex align-self-start mr-3"
            src="assets/img/logo-british.png"
          />
          <div className="media-body">
            <div className="media-heading">
              <small className="float-right text-muted">
                Jun 2017 - Feb 2018
              </small>
              <h5>British Gas</h5>
              <h6 className="light-title">Next Generation App</h6>
            </div>

            <p>
              As part of British Gas digital transformation project, I was hired
              as a <strong>React Native</strong> freelance developer to lead one
              of the transformation teams in charge of building the next
              generation app which brought British Gas into the modern mobile
              world. As a senior React Native developer I helped in designing
              the architecture and training one of the teams composed by a mix
              of native and web developers. For this app we used several top
              notch technologies as Typescript, Realm, Redux, Redux sagas and
              many more. I also helped in designing the building and deployment
              strategies using <strong>Travis, Hockey App </strong>and{" "}
              <strong>Fastlane.</strong>
            </p>

            <div className="media-body-inline-grid" data-grid="images">
              <div style={{ display: "none" }}>
                <img
                  data-action="zoom"
                  data-width="1400"
                  data-height="700"
                  src="assets/img/bg-app-1.png"
                />
              </div>
            </div>
          </div>
        </li>
        <li className="media list-group-item p-4">
          <img
            className="media-object d-flex align-self-start mr-3"
            src="assets/img/logo-redhat-color.png"
          />
          <div className="media-body">
            <div className="media-heading">
              <small className="float-right text-muted">
                Nov 2016 - Jun 2017
              </small>
              <h5>redhat</h5>
              <h6 className="light-title">
                Raincatcher project and mobile advocate
              </h6>
            </div>
            <p>
              Aa mobile developer's advocate I helped Red Hat customers' to
              build mobile apps using RedHat's MBaaS (FeedHenry) based on
              <strong> Docker, Kubernetes</strong> and{" "}
              <strong>OpenShift.</strong> As part of their mobile team I open
              sourced several example apps as Raincatcher: Red Hat's mobile
              solution for WorkForce Management.
            </p>
            <div className="boy" data-grid="images">
              <div
                style={{
                  display: "inlineBlock",
                  marginBottom: "10px",
                  marginRight: "10px",
                  verticalAlign: " bottom"
                }}
              >
                <img
                  data-action="zoom"
                  data-width="227px"
                  data-height="453px"
                  src="assets/img/redhat2.png"
                  style={{ width: "227px", height: "453px" }}
                  className=""
                />
              </div>
              <div
                style={{
                  display: "inline-block",
                  marginBottom: "10px",
                  marginRight: "0px",
                  verticalAlign: "bottom"
                }}
              >
                <img
                  data-action="zoom"
                  data-width="227px"
                  data-height="453px"
                  src="assets/img/redhat4.png"
                  style={{ width: "227px", height: "454px" }}
                />
              </div>
            </div>
          </div>
        </li>

        <li className="media list-group-item p-4">
          <img
            className="media-object d-flex align-self-start mr-3"
            src="assets/img/logo-desbooker-color.png"
          />
          <div className="media-body">
            <div className="media-heading">
              <small className="float-right text-muted">
                Nov 2015 - Nov 2016
              </small>
              <h5>Deskbookers</h5>
              <h6 className="light-title">Head of mobile development</h6>
            </div>

            <p>
              Deskbookers is the airbnb of offices and flexible workspaces. Used
              by thousands of freelancers and event managers they lacked of a
              mobile solution for their product offering. I was hired to build
              their app in <strong>React Native</strong> introducing{" "}
              <strong>React</strong> and <strong> Redux</strong> into the
              company. As the <strong>mobile lead </strong> of the company, I
              was responsible not only of building the app but I was also
              helping the product team in taking decisions on the mobile
              strategy for the company.
            </p>

            <div className="boy" data-grid="images">
              <div
                style={{
                  display: "inlineBlock",
                  marginBottom: "10px",
                  marginRight: "10px",
                  verticalAlign: " bottom"
                }}
              >
                <img
                  data-action="zoom"
                  data-width="227px"
                  data-height="453px"
                  src="assets/img/deskbookers1.png"
                  style={{ width: "227px", height: "453px" }}
                  className=""
                />
              </div>
              <div
                style={{
                  display: "inline-block",
                  marginBottom: "10px",
                  marginRight: "0px",
                  verticalAlign: "bottom"
                }}
              >
                <img
                  data-action="zoom"
                  data-width="227px"
                  data-height="453px"
                  src="assets/img/deskbookers3.png"
                  style={{ width: "227px", height: "454px" }}
                />
              </div>
            </div>
          </div>
        </li>
        <li className="media list-group-item p-4">
          <img
            className="media-object d-flex align-self-start mr-3"
            src="assets/img/logo2days.png"
          />
          <div className="media-body">
            <div className="media-heading">
              <small className="float-right text-muted">
                Apr 2014 - Nov 2015
              </small>
              <h5>2Days</h5>
              <h6 className="light-title">CTO and mobile architect</h6>
            </div>

            <p>
              2days is an events discovery app for iOS and Android. I built the
              mobile app in <strong>Titanium</strong>, the web in{" "}
              <strong>React</strong> and the backend in <strong>node.</strong>A{" "}
              <strong>fullstack JavaScript </strong> project which ended up
              being featured in the Appstore as one of the most downloaded apps
              in the region of Amsterdam.
            </p>

            <div className="boy" data-grid="images">
              <div
                style={{
                  display: "inlineBlock",
                  marginBottom: "10px",
                  marginRight: "10px",
                  verticalAlign: " bottom"
                }}
              >
                <img
                  data-action="zoom"
                  data-width="227px"
                  data-height="453px"
                  src="assets/img/2 days1.png"
                  style={{ width: "227px", height: "453px" }}
                  className=""
                />
              </div>
              <div
                style={{
                  display: "inline-block",
                  marginBottom: "10px",
                  marginRight: "0px",
                  verticalAlign: "bottom"
                }}
              >
                <img
                  data-action="zoom"
                  data-width="227px"
                  data-height="453px"
                  src="assets/img/2 days2.png"
                  style={{ width: "227px", height: "454px" }}
                />
              </div>
            </div>
          </div>
        </li>
      </Fragment>
    );
  }
}

export default PostBox;
