import React, { Component } from 'react';
import ArticleHeaderItem from './ArticleHeaderItem/ArticleHeaderItem';

class ArticleHeader extends Component { 
    render = () => {
        return (
            <header className="ArticleHeader">
                <h2 className="ArticleHeader__title">{this.props.painting.title}</h2>
                <ul className="ArticleHeader__list">
                    <ArticleHeaderItem
                        painting={this.props.painting.inspired_painting}
                    />
                <span className="ArticleHeader__line"></span>
                    <ArticleHeaderItem
                        painting={this.props.painting.main_painting}
                    />
                </ul>
            </header>
        );
    };
};
export default ArticleHeader;
