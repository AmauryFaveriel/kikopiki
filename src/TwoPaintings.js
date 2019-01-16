import React, { Component } from 'react';
import data from './data';

class TwoPaitings extends Component {
    render = () => {
        return (
            <section className="Article__imgBoxes">
                <div className='Article__imgBoxes__imgBox Article__imgBoxes__imgBox__resizable'>
                    <div className={this.props.style}></div>
                    <img 
                        className='Article__imgBoxes__imgBox__img' 
                        src={this.props.painting.inspired_painting.visual} 
                        style={this.props.inspiredStyle}
                        alt=""/>
                </div>
                <div className='Article__imgBoxes__imgBox'>
                    <img 
                    className='Article__imgBoxes__imgBox__img'
                    src={this.props.painting.main_painting.visual}
                    style={this.props.mainStyle}
                    alt=""/>
                </div>
            </section>
        )
    }
}

export default TwoPaitings;