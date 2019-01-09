import React, { Component } from 'react';
import data from './data';
class Article extends Component {
    render = () => {
        return (
            <article className={this.props.articleStyle}>
                <section className="Article__imgBox">
                    <img src={data.paintings[this.props.index].first_painting} alt="" className="Article__imgBox__img"/>
                    <img src={data.paintings[this.props.index].second_painting} alt="" className="Article__imgBox__img"/>
                </section>
                <article className="Article__content">
                    <h2 className="Article__content__title"></h2>
                    <h3 className="Article__content__subtitle"></h3>
                    <p className="Article__content__text"></p>
                    <p className="Article__content__text"></p>
                    <p className="Article__content__text"></p>
                </article>
            </article>
        )
    }
}

export default Article;