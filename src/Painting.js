import React, { Component } from 'react';
import data from './data';
class Painting extends Component {
    render = () => {
        return (
            <article className='Painting'>
                <h2>{this.props.author}</h2>
                <p>{this.props.desc}</p>
                <img src={this.props.main_painting} alt={this.props.author}/>
                <button onClick={() => {
                    this.props.showArticle(this.props.index)
                }}>{data.cta}</button>
            </article>
        )
    }
}

export default Painting;