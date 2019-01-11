import React, { Component } from 'react';
import data from './data';

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
                onScroll={this.logScroll}>
                    <h2 className="Article__content__title">{data.paintings[this.props.index].title}</h2>
                    <h3 className="Article__content__subtitle">{data.paintings[this.props.index].desc}</h3>
                    {data.paintings[this.props.index].content.map((x, i) => <p key={i} className="Article__content__text">{x}</p>)}
                </article>
            </article>
        )
    }
}

export default Article;