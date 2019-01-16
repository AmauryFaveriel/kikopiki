import React, { Component } from 'react';
import data from './data';

class TwoPaitings extends Component {
    render = () => {
        return (
            // <section className="Article__imgBox">
            //     <img src={data.paintings[this.props.index].first_painting} alt="" className="Article__imgBox__img"/>
            //     <img src={data.paintings[this.props.index].second_painting} alt="" className="Article__imgBox__img"/>
            // </section>
            <section className="Article__imgBoxes">
                <div className='Article__imgBoxes__imgBox Article__imgBoxes__imgBox__resizable'>
                    <div className='Article__imgBoxes__imgBox__resizable__resizer'></div>
                    <img className='Article__imgBoxes__imgBox__img' src="https://images.unsplash.com/photo-1544027549-4f862509c707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80" alt=""/>
                </div>
                <div className='Article__imgBoxes__imgBox'>
                    <img className='Article__imgBoxes__imgBox__img' src="https://images.unsplash.com/photo-1540483761890-a1f7be05d99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=690&q=80" alt=""/>
                </div>
            </section>
        )
    }
}
class Article extends Component {
    render = () => {
        return (
            <article className={this.props.style}>
                <TwoPaitings
                    index={this.props.index}
                />
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