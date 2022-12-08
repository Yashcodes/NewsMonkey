import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props;

    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://cdn.24.co.za/files/Cms/General/d/9408/ab252045b3204d6985caa51c8217afe5.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
