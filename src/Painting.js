import React, { Component } from "react";
import data from "./data";

class Painting extends Component {
  render = () => {
    return (
      <article className="Painting">
        <h2>{this.props.title}</h2>
        <p>{this.props.author}</p>
        <p>{this.props.date}</p>
        <img src={this.props.inspired_painting} alt={this.props.author} />
        <button
          onClick={() => {
            this.props.showArticle(this.props.index);
          }}
        >
          {data.cta}
        </button>
      </article>
    );
  };
}

export default Painting;
