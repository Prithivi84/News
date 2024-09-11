import React, { Component } from "react";

export default class newsItem extends Component {
  render() {
    let { title, description, image, url, author, date, source } = this.props;
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt="..." />
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-body-secondary">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={url} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
