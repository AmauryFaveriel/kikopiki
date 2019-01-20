import React, { Component } from 'react';
class ArticleOthers extends Component {
    render = () => {
        return (
            <div className="Article__zooms">
                {this.props.painting.other_paintings.map((x, i) => <p 
                    className="Article__zooms__text"
                    key={i}>{x.desc}
                </p>)}
            </div>
        )
    }
}

export default ArticleOthers;