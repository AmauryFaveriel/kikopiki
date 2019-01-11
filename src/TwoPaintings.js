import React, { Component } from 'react';
import data from './data';

class TwoPaitings extends Component {
    render = () => {
        return (
            <section className="Article__imgBoxes">
                <div className='Article__imgBoxes__imgBox Article__imgBoxes__imgBox__resizable'>
                    <div className='Article__imgBoxes__imgBox__resizable__resizer'></div>
                    <img className='Article__imgBoxes__imgBox__img' src={data.paintings[this.props.index].main_painting} alt=""/>
                </div>
                <div className='Article__imgBoxes__imgBox'>
                    <img className='Article__imgBoxes__imgBox__img' src={data.paintings[this.props.index].other_paintings[this.props.otherIndex]} alt=""/>
                </div>
            </section>
        )
    }
}

export default TwoPaitings;