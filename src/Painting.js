import React, { Component } from 'react';
import data from './data';
class Painting extends Component {
    render = () => {
        return (
            <article className='Painting'>
                <h2>{this.props.author}</h2>
                <p>{this.props.desc}</p>
                <img src={`https://via.placeholder.com/500x1000.png/${this.props.color}`} alt={this.props.author}/>
                <button>{data.cta}</button>
            </article>
        )
    }
}

export default Painting;