import React, { Component, Fragment } from "react";
import resume from "../../resume.json";

class MyBook extends Component {
  render() {
    return (
      <Fragment>
        <div className="card-body">
          <h6 className="mb-3">{resume.myBookTitle}</h6>
          <div data-grid="images" data-target-height="150">
            <img
              className="media-object"
              data-width="640"
              data-height="640"
              data-action="zoom"
              src="assets/img/book.jpg"
            />
          </div>
          <p dangerouslySetInnerHTML={{ __html: resume.myBookText }} />
          <a
            target="_blank"
            href="https://www.amazon.com/Native-Blueprints-Emilio-Rodriguez-Martinez-ebook/dp/B0748NN3VL"
          >
            <button
              href="https://www.amazon.com/Native-Blueprints-Emilio-Rodriguez-Martinez-ebook/dp/B0748NN3VL"
              className="btn btn-outline-primary btn-sm"
            >
              Buy it!
            </button>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default MyBook;
