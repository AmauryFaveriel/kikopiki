import React, { Component } from 'react';
import data from './data';

import ArticleHeader from './ArticleHeader';
import ArticleZooms from './ArticleZooms';
import ArticleOthers from './ArticleOthers';
import TwoPaitings from './TwoPaintings';
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otherIndex: 0,
            contentTextStyle: 'Article__content__text',
            contentTextActiveStyle: 'Article__content__text--active',
        }
    }
    logScroll = () =>{
        const winCenterHeight = window.innerHeight / 2;
        const DOMzoomsTexts = document.querySelectorAll('.Article__zooms__text');
        const activeClass = 'Article__zooms__text--active'
        for (let i = 0; i < DOMzoomsTexts.length; i++) {
            const text = DOMzoomsTexts[i]
            let textTop = text.getBoundingClientRect().top;
            let textBottom = text.getBoundingClientRect().bottom;
            if (textTop <= winCenterHeight) {
                text.classList.add(activeClass);
                if (textBottom <= winCenterHeight) text.classList.remove(activeClass);
            }
            else text.classList.remove(activeClass);
        }
    }
    render = () => {
        return (
            <article className={this.props.style}>
                <TwoPaitings
                    index={this.props.index}
                    otherIndex={this.state.otherIndex}
                />
                <article className="Article__content" 
                onScroll={this.logScroll}
                >
                    <ArticleHeader
                        index={this.props.index}
                    />
                    <h3 className="Article__intro">{data.paintings[this.props.index].intro}</h3>
                    <ArticleZooms
                        index={this.props.index}
                    />
                    <ArticleOthers
                        index={this.props.index}
                    />
                </article>
            </article>
        )
    }
}

export default Article;