import React, { Component } from 'react';
import data from './data';
import ArticleHeaderItem from './ArticleHeaderItem';

class ArticleHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {painting: data.paintings[this.props.index]}
    }
    UNSAFE_componentWillUpdate = (nextProps) => {
        if (nextProps.index !== this.props.index) this.setState({painting: data.paintings[nextProps.index]})
    }
    render = () => {
        return (
            <header className="ArticleHeader">
                <h2 className="ArticleHeader__title">{this.state.painting.title}</h2>
                <ul className="ArticleHeader__list">
                    <ArticleHeaderItem
                        painting={this.state.painting.inspired_painting}
                    />
                <span className="ArticleHeader__line"></span>
                    <ArticleHeaderItem
                        painting={this.state.painting.main_painting}
                    />
                </ul>
            </header>
        )
    }
}

export default ArticleHeader;
