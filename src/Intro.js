import React, { Component } from 'react';
import data from './data';

class Intro extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            introStyle: 'Intro'
        }
    }
    hideIntro = () => this.setState({introStyle: 'Intro Intro--hidden'});
    render = () => {
        return (
            <section className={this.state.introStyle}>
                <h1>{data.intro.title}</h1>
                <p>{data.intro.intro_1}</p>
                <p>{data.intro.intro_2}</p>
                <button onClick={this.hideIntro}>{data.intro.cta}</button>
            </section>
        )
    }
}

export default Intro;