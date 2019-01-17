import React, { Component } from 'react';
import data from './data';
import ArticleHeaderItem from './ArticleHeaderItem';

<<<<<<< HEAD
class ArticleHeader extends Component { 
=======
class ArticleHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {painting: data.paintings[this.props.index]}
    }
    UNSAFE_componentWillUpdate = (nextProps) => {
        if (nextProps.index !== this.props.index) this.setState({painting: data.paintings[nextProps.index]})
    }
>>>>>>> 9e09dcc64763c135df5439107ab5a73509ebd556
    render = () => {
        return (
            <header className="ArticleHeader">
                <h2 className="ArticleHeader__title">{this.props.painting.title}</h2>
                <ul className="ArticleHeader__list">
                    <ArticleHeaderItem
                        painting={this.props.painting.inspired_painting}
                    />
                <span className="ArticleHeader__line"></span>
                    <ArticleHeaderItem
                        painting={this.props.painting.main_painting}
                    />
                </ul>
            </header>
        )
    }
}

export default ArticleHeader;
