import React, { Component } from "react";

import data from "../../data";

class Intro extends Component {
  render = () => {
    return (
      <section className={this.props.style}>
        <h1 className="Intro__title">{data.intro.title}</h1>
        <div className="Intro__descContainer">
          <p className="Intro__desc">{data.intro.intro_1}</p>
          <p className="Intro__desc">{data.intro.intro_2}</p>
        </div>
        <button className="Intro__cta" onClick={this.props.hideIntro}>
          {data.intro.cta}
        </button>
        <section className={this.props.overlayStyle}/>
      </section>
    );
  };
}

export default Intro;
