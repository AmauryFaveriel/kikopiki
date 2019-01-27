import React, { Component } from "react";
import data from "../../data";

class Conclusion extends Component {
  render = () => {
    return (
      <section className={this.props.style}>
        <h2>{data.conclusion.title}</h2>
        <p>{data.conclusion.content}</p>
        <button onClick={this.props.click}>{data.conclusion.cta}</button>
      </section>
    );
  };
}

export default Conclusion;
