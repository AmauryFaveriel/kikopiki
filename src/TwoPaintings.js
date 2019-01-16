import React, { Component } from 'react';
import data from './data';

class TwoPaitings extends Component {
    render = () => {
        return (
            <section className="Article__imgBoxes">
                <div className='Article__imgBoxes__imgBox Article__imgBoxes__imgBox__resizable'>
                    <div className={this.props.style}></div>
                    <img className='Article__imgBoxes__imgBox__img Article__imgBoxes__imgBox__img--showed' src={data.paintings[this.props.index].main_painting.visual} alt=""/>
                </div>
                <div className='Article__imgBoxes__imgBox'>
                    <img className='Article__imgBoxes__imgBox__img' src={data.paintings[this.props.index].inspired_painting.visual} alt=""/>
                </div>
            </section>
        )
    }
}

export default TwoPaitings;