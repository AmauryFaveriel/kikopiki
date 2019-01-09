import React, { Component } from 'react';
import data from './data';

class Intro extends Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        return (
            <section className={this.props.style}>
                <h1>{data.intro.title}</h1>
                <p>{data.intro.intro_1}</p>
                <p>{data.intro.intro_2}</p>
                <button onClick={this.props.hideIntro}>{data.intro.cta}</button>
                <section className={this.props.overlayStyle}></section>
            </section>
        )
    }
}

export default Intro;