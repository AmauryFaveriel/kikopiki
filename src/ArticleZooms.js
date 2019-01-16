import React, { Component } from 'react';
import data from './data';
class ArticleZooms extends Component {
    render = () => {
        return (
            <div className="Article__zooms">
                {this.props.painting.zooms.map((x, i) => <p 
                    className="Article__zooms__text"
                    key={i}>{x.desc}
                </p>)}
            </div>
        )
    }
}

export default ArticleZooms;