<<<<<<< HEAD:src/Components/Painting/Painting.js
import React, { Component } from 'react';
import data from '../../data';

import checked from "../../assets/imgs/checked.svg"
import unchecked from "../../assets/imgs/unchecked.svg"

class Painting extends Component {
    
    render = () => {
        return (
            <article className='Painting'>
                <h2>{this.props.title}</h2>
                <p>{this.props.author}</p>
                <p>{this.props.date}</p>
                <img src={this.props.inspired_painting} alt={this.props.author} />
                <button onClick={() => {
                    this.props.showArticle(this.props.index)
                }}>{data.cta}</button>
                <img className="Painting__checked" alt="checked icon" src={this.props.checkedPaintings.includes(this.props.index) ? checked : unchecked}/>
            </article>
        )
    }


}

export default Painting;
