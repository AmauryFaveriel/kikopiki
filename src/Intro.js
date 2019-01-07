import React, { Component } from 'react';
import data from './data';

class Intro extends Component {
    render = () => {
        return (
            <section className='Intro'>
                <h1>{data.intro.title}</h1>
                <p>{data.intro.intro_1}</p>
                <p>{data.intro.intro_2}</p>
                <button>{data.intro.cta}</button>
            </section>
        )
    }
}

export default Intro;