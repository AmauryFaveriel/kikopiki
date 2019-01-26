import React, { Component } from "react";
import data from "../../data";

class Intro extends Component {
  render = () => {
    return (
      <section className={this.props.style}>
        <div className="Intro__container">
          <h1 className="Intro__title">{data.intro.title}</h1>
          <p className="Intro__desc">{data.intro.intro_1}</p>
          <p className="Intro__desc">{data.intro.intro_2}</p>
          <button className="Intro__cta" onClick={this.props.hideIntro}>
            {data.intro.cta}
          </button>
        </div>
      </section>
    );
  };
}

export default Intro;
