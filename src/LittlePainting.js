import React, { Component } from 'react';

import checked from "./assets/imgs/checked.svg"
import unchecked from "./assets/imgs/unchecked.svg"
class LittlePaiting extends Component {
    render() {
        return (
            <li className={this.props.style} 
                onClick={() => this.props.updateArticle(this.props.index)}>
                <img src={this.props.painting} alt={this.props.title}/>
                <img className="Painting__checked" alt="checked icon" src={this.props.checkedPaintings.includes(this.props.index) ? checked : unchecked}/>
            </li>
        )
    }
}
export default LittlePaiting;