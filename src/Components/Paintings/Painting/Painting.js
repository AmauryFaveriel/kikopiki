import React, { Component } from 'react';
import data from '../../../data';

import checked2 from '../../../assets/imgs/checked_2.svg';

class Painting extends Component {
    render() {
        const x = this.props.x
        const index = this.props.index;
        const painting = x.inspired_painting;

        return <article className='Painting'>
            <img
                src={painting.visual}
                alt={x.author}
            />
            <div className={`Painting__content ${this.props.last}`}>
                <h2>{x.title}</h2>
                <h3>{painting.author}</h3>
                <p>{painting.desc}</p>
                <button onClick={() => this.props.showArticle(index)}>{data.cta}
                {this.props.visitedPaintings.includes(index) ? <img
                    className='visitedIcon'
                    alt='checked icon'
                    src={checked2}/> : null
                }</button>
            </div>
        </article>
    }
}

export default Painting;
