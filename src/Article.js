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
        const windowMiddleHeight = window.innerHeight / 2;
        const DOMzoomsTexts = document.querySelectorAll('.Article__zooms__text')
        for (let i = 0; i < DOMzoomsTexts.length; i++) {
            let DOMzoomsTextTop = DOMzoomsTexts[i].getBoundingClientRect().top;
            let DOMzoomsTextBottom = DOMzoomsTexts[i].getBoundingClientRect().bottom;
            console.log(i + ' : ' + DOMzoomsTextTop / i + ' : ' + DOMzoomsTextBottom);
            if (DOMzoomsTextTop <= windowMiddleHeight) {
                DOMzoomsTexts[i].style.borderLeft = '5px darkorchid solid';
                if (DOMzoomsTextBottom <= windowMiddleHeight) DOMzoomsTexts[i].style.borderLeft = '5px #f1f1f1 solid';
            }
            else DOMzoomsTexts[i].style.borderLeft = '5px #f1f1f1 solid';
        }
    }
    render = () => {
        return (
            <article className={this.props.style}>
                <TwoPaitings
                    index={this.props.index}
                    otherIndex={this.state.otherIndex}
                />
                <article id="wow" className="Article__content" 
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