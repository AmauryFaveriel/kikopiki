import React, { Component } from 'react';
import data from '../../data';

import checked from "../../assets/imgs/checked.svg"
import unchecked from "../../assets/imgs/unchecked.svg"

class Painting extends Component {
    
    render = () => {
        return (
            <article className='Painting'>
                <h2>{this.props.author}</h2>
                <p>{this.props.desc}</p>
                <img src={this.props.main_painting} alt={this.props.author}/>
                <button onClick={() => {
                    this.props.showArticle(this.props.index)
                }}>{data.cta}</button>
                <img className="Painting__checked" alt="checked icon" src={this.props.checkedPaintings.includes(this.props.index) ? checked : unchecked}/>
            </article>
        )
    }
}

export default Painting;