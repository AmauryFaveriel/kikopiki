import React, { Component } from "react";
import { intro } from "../../data";

class Intro extends Component {
    render = () => {
        return <section className={this.props.bool ? 'Intro Intro--hidden' : 'Intro'}>
            <h1>{intro.title}</h1>
            <div>
                <p>{intro.intro_1}</p>
                <p>{intro.intro_2}</p>
            </div>
            <button onClick={this.props.click}>{intro.cta}</button>
            <section className={this.props.overlayStyle}/>
        </section>
    };
}

export default Intro;
