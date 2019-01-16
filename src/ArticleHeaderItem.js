import React, { Component } from 'react';

class ArticleHeaderItem extends Component {
    render = () => {
        return (
            <li className="ArticleHeader__list__item">
                <p className="ArticleHeader__list__item__desc">{this.props.painting.desc}</p>
                <h3 className="ArticleHeader__list__item__author">{this.props.painting.author}</h3>
                <span className="ArticleHeader__list__item__date">{this.props.painting.date}</span>
            </li>
        )
    }
}

export default ArticleHeaderItem;

