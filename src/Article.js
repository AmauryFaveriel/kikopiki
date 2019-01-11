import React, { Component } from 'react';
import data from './data';

import TwoPaitings from './TwoPaintings';
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otherIndex: 0
        }
    }
    logScroll = () =>{
        let contentScrollTop = document.getElementById('wow').scrollTop;
        if (contentScrollTop <= 200) {
            this.setState({otherIndex: 0})
        }
        else if (contentScrollTop <= 400) {
            this.setState({otherIndex: 1})
        }
        else if (contentScrollTop <= 600) {
            this.setState({otherIndex: 2})
        }
        else  {
            this.setState({otherIndex: 3})
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
                    <p className="Article__content__text">{data.lorem_1}</p>
                    <p className="Article__content__text">{data.lorem_2}</p>
                    <p className="Article__content__text">{data.lorem_3}</p>
                </article>
            </article>
        )
    }
}

export default Article;