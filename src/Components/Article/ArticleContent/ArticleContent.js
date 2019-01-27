import React, { Component } from 'react';
<<<<<<< HEAD
import data from '../../../data';
=======
>>>>>>> 40f5b52aa7296ac6304a99001878c5819420e012

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
            </section>
        );
    };
};
export default ArticleContent;
