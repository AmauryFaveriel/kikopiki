import React, { Component } from 'react';
import data from '../../../data';

import ArticleHeader from './ArticleHeader/ArticleHeader';
import ArticleZooms from './ArticleZooms/ArticleZooms';
import ArticleOthers from './ArticleOthers/ArticleOthers';

class ArticleContent extends Component {
    render = () => {
        return (
            <section 
                className="ArticleContent"
                onScroll={this.props.onscroll}
            >
                <ArticleHeader
                    painting={this.props.painting}
                />
                <h3 className="Article__intro">{this.props.painting.intro}</h3>
                <ArticleZooms
                    painting={this.props.painting}
                />
                <ArticleOthers
                    painting={this.props.painting}
                />
            </section>
        );
    };
};
export default ArticleContent;
