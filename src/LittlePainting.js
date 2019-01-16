import React, { Component } from 'react';

class LittlePaiting extends Component {
    render() {
        return (
            <li className={this.props.style} 
                onClick={() => this.props.updateArticle(this.props.index)}>
                <img src={this.props.painting} alt={this.props.title}/>
            </li>
        )
    }
}
export default LittlePaiting;