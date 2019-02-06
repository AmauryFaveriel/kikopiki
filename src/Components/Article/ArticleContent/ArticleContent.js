import React, { Component } from 'react';

import ArticleHeader from './ArticleHeader/ArticleHeader';
import ArticleZooms from './ArticleZooms/ArticleZooms';
import ArticleOthers from './ArticleOthers/ArticleOthers';
import data from '../../../data'

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
                <p className='ArticleContent__nextArticle'>
                    {this.props.painting.nextArticle}. 
                    {
                        this.props.index !== data.paintings.length - 1 ? 
                        <a onClick={this.props.click} > next article</a> : <p>no more articles</p>
                    }
                    </p> 
            </section>
        );
    };
};
export default ArticleContent;
