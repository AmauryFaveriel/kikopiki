import React, { Component } from 'react';

class ArticleHeaderItem extends Component {
    render = () => {
        return (
            <li className="ArticleHeaderItem">
                <p className="ArticleHeaderItem__desc">{this.props.painting.desc}</p>
                <h3 className="ArticleHeaderItem__author">{this.props.painting.author}</h3>
                <span className="ArticleHeaderItem__date">{this.props.painting.date}</span>
            </li>
        );
    };
};
export default ArticleHeaderItem;

