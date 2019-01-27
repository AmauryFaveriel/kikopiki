import React, { Component } from "react";
import data from "../../../data";

import checked from "../../../assets/imgs/checked.svg";
import unchecked from "../../../assets/imgs/unchecked.svg";

class Painting extends Component {
  render() {
    return (
      <article
        className={"Painting " + (this.props.showHover ? "ShowHover" : "")}
      >
        <img
          src={this.props.x.main_painting.visual}
          alt={this.props.x.author}
        />
        <div>
          <h2>{this.props.x.title}</h2>
          <h3>{this.props.x.inspired_painting.author}</h3>
          <p>{this.props.x.inspired_painting.desc}</p>

          <button
            onClick={() => {
              this.props.showArticle(this.props.index);
            }}
          >
            {data.cta}
          </button>
          <img
            className="visitedIcon"
            alt="checked icon"
            src={
              this.props.visitedPaintings.includes(this.props.index)
                ? checked
                : unchecked
            }
          />
        </div>
      </article>
    );
  }
}

export default Painting;
