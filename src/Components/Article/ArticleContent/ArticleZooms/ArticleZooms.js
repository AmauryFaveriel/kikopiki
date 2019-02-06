import React, { Component } from 'react';
class ArticleZooms extends Component {
    render = () => {
        return (
            <div className="ArticleZooms">
                {this.props.painting.zooms.map((x, i) => <p 
                    className="ArticleZooms__text scrollFocus"
                    key={i} dangerouslySetInnerHTML={{__html: x.desc}}>
                </p>)}
            </div>
        )
    }
}

export default ArticleZooms;