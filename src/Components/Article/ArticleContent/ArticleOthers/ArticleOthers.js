import React, { Component } from 'react';

class ArticleOthers extends Component {
    render = () => {
        return (
            <div className="ArticleOthers">
                {this.props.painting.other_paintings.map((x, i) => <p 
                    className="ArticleOthers__text scrollFocus"
                    key={i} dangerouslySetInnerHTML={{__html: x.desc}}>
                </p>)}
            </div>
        )
    }
}

export default ArticleOthers;