import React, { Component } from "react";
import data from "../../data";

class Conclusion extends Component {
  render = () => {
    console.log("conclusion", data);
    return (
      <section className={this.props.style}>
        <h2>{}</h2>
        <p>{}</p>
        <button onClick={this.props.click}>{}</button>
      </section>
    );
  };
}

export default Conclusion;
