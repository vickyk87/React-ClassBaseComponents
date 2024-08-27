import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
              top: "-3%",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>

          <img
            src={imageUrl}
            className="card-img-top"
            alt={title}
            style={{ height: "190px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <Link
              rel="noreferrer"
              to={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
