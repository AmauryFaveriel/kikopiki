import React, { Component } from "react";
import data from "../../data";

class Intro extends Component {
    render = () => {
        return <section className={this.props.bool ? 'Intro Intro--hidden' : 'Intro'}>
            <h1>{data.intro.title}</h1>
            <div>
                <p>{data.intro.intro_1}</p>
                <p>{data.intro.intro_2}</p>
            </div>
            <button onClick={this.props.click}>{data.intro.cta}</button>
            <section className={this.props.overlayStyle}/>
        </section>
    };
}

export default Intro;
