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
                <p className="ArticleContent__intro" dangerouslySetInnerHTML={{__html: this.props.painting.intro}}></p>
                <ArticleZooms
                    painting={this.props.painting}
                />
                <ArticleOthers
                    painting={this.props.painting}
                />
                <p className='ArticleContent__nextArticle'>
                    {this.props.painting.nextArticle}<br/><br/>
                    {
                        this.props.index !== data.paintings.length - 1 ? 
                        <span 
                            onClick={this.props.click} 
                        >Découvrir {data.paintings[this.props.index + 1].title}</span> : 
                        <p>Il n'y a plus d'article à visiter !</p>
                    }
                    </p> 
            </section>
        );
    };
};
export default ArticleContent;
