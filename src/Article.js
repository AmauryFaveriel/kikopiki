import React, { Component } from 'react';
import data from './data';
class Article extends Component {
    render = () => {
        return (
            <article className={this.props.style}>
                <section className="Article__imgBox">
                    <img src={data.paintings[this.props.index].first_painting} alt="" className="Article__imgBox__img"/>
                    <img src={data.paintings[this.props.index].second_painting} alt="" className="Article__imgBox__img"/>
                </section>
                <article className="Article__content">
                    <h2 className="Article__content__title">{data.paintings[this.props.index].title}</h2>
                    <h3 className="Article__content__subtitle">{data.paintings[this.props.index].desc}</h3>
                    <p className="Article__content__text">{data.lorem_1}</p>
                    <p className="Article__content__text">{data.lorem_2}</p>
                    <p className="Article__content__text">{data.lorem_3}</p>
                </article>
            </article>
        )
    }
}

export default Article;