import React, { Component } from 'react';
import data from './data';

class TwoPaitings extends Component {
    render = () => {
        return (
            <section className="Article__imgBoxes">
                <div className='Article__imgBoxes__imgBox Article__imgBoxes__imgBox__resizable'>
                    <div className='Article__imgBoxes__imgBox__resizable__resizer'></div>
                    <img className='Article__imgBoxes__imgBox__img' src={data.paintings[this.props.index].first_painting} alt=""/>
                </div>
                <div className='Article__imgBoxes__imgBox'>
                    <img className='Article__imgBoxes__imgBox__img' src={data.paintings[this.props.index].second_painting} alt=""/>
                </div>
            </section>
        )
    }
}

// <section className="Article__imgBox">
            //     <img src={data.paintings[this.props.index].first_painting} alt="" className="Article__imgBox__img"/>
            //     <img src={data.paintings[this.props.index].second_painting} alt="" className="Article__imgBox__img"/>
            // </section>

export default TwoPaitings;