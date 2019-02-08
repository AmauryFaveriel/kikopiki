import React, { Component } from 'react';
import LittlePaiting from './LittlePainting/LittlePainting';
import { paintings, conclude } from '../../../data';

class LittlePaintings extends Component {
    render = () => {
        return (
        <nav className='Menu__nav'>
            <ul className='LittlePaintings'>
            {paintings.map((x, i) => (
                <LittlePaiting
                    isSameIndex={this.props.AppIndex === i}
                    key={i}
                    i={i}
                    painting={x.inspired_painting.visual}
                    title={x.title}
                    updateArticle={() => this.props.updateArticle(i)}
                    visitedPaintings={this.props.visitedPaintings}
                />
            ))}
            </ul>
            <button 
                className={this.props.visitedPaintings.length === paintings.length ? 'LittlePaintings__button' : 'LittlePaintings__button LittlePaintings__button--disable'} 
                onClick={this.props.click}
            >{<p dangerouslySetInnerHTML={{__html: conclude.cta.title}}/>}
                <div className={this.props.bool ? 'noConclusion noConclusion--hidden' : 'noConclusion'}>{conclude.cta.desc}</div>
            </button>
            
        </nav>
        );
    };
}

export default LittlePaintings;
