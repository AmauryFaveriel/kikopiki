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
        let contentScrollTop = document.getElementById('wow').scrollTop;
        const contentTexts = document.querySelectorAll('.Article__content__text')
        if (contentScrollTop <= 200) {
            this.setState({otherIndex: 0})
            contentTexts[0].classList.toggle(this.state.contentTextActiveStyle)
        }
        else if (contentScrollTop <= 400) {
            this.setState({otherIndex: 1})
            contentTexts[1].classList.toggle(this.state.contentTextActiveStyle)
        }
        else if (contentScrollTop <= 600) {
            this.setState({otherIndex: 2})
            contentTexts[2].classList.toggle(this.state.contentTextActiveStyle)
        }
        else  {
            this.setState({otherIndex: 3})
            contentTexts[3].classList.toggle(this.state.contentTextActiveStyle)
        }
        return console.log(contentScrollTop)
    }
    render = () => {
        return (
            <article className={this.props.style}>
                <TwoPaitings
                    index={this.props.index}
                    otherIndex={this.state.otherIndex}
                />
                <article id="wow" className="Article__content" 
                // onScroll={this.logScroll}
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