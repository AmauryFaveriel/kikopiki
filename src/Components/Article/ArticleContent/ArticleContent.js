import React, { Component } from 'react';

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
                <h3 className="ArticleContent__intro">{this.props.painting.intro}</h3>
                <ArticleZooms
                    painting={this.props.painting}
                />
                <ArticleOthers
                    painting={this.props.painting}
                />
                <button onClick={this.props.click}>next article</button>
            </section>
        );
    };
};
export default ArticleContent;
