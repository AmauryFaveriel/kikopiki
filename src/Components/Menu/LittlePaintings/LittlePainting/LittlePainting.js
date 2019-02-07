import React, { Component } from 'react';

import checked from "../../../../assets/imgs/checked.svg"
import unchecked from "../../../../assets/imgs/unchecked.svg"
class LittlePaiting extends Component {
    render() {
        return (
            <li className={!this.props.isSameIndex ? 'LittlePainting' : 'LittlePainting hidden'} 
                onClick={() => this.props.updateArticle(this.props.i)}>
                <img src={this.props.painting} alt={this.props.title}/>
                <img className="visitedIcon visitedIcon--LittlePaintings" alt="checked icon" src={this.props.visitedPaintings.includes(this.props.i) ? checked : unchecked}/>
            </li>
        )
    }
}
export default LittlePaiting;