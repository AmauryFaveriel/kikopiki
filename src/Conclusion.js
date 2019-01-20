import React, { Component } from 'react';
import data from './data';

class Conclusion extends Component {
    render = () => {
        return (
            <section className="Conclusion">
                <h2>{data.conclusion.title}</h2>
                <p>{data.conclusion.title}</p>
                <button>{data.conclusion.title}</button>
            </section>
        )
    }
}

export default Conclusion;
