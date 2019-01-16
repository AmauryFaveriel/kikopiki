import React, { Component } from 'react';
import data from './data';
class ArticleOthers extends Component {
    constructor(props) {
        super(props);
        this.state = {painting: data.paintings[this.props.index]}
    }
    UNSAFE_componentWillUpdate = (nextProps) => {
        if (nextProps.index !== this.props.index) this.setState({painting: data.paintings[nextProps.index]})
    }
    render = () => {
        return (
            <div className="Article__zooms">
                {this.state.painting.other_paintings.map((x, i) => <p 
                    className="Article__zooms__text"
                    key={i}>{x.desc}
                </p>)}
            </div>
        )
    }
}

export default ArticleOthers;