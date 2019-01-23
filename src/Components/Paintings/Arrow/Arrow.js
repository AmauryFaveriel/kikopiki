import React, { Component } from 'react';

class Arrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowLeftStyle: 'Arrow Arrow--left',
            arrowRightStyle: 'Arrow Arrow--right',
        }
    }
    render = () => {
        return <span 
            className={this.props.isLeft ? this.state.arrowLeftStyle : this.state.arrowRightStyle} 
            onMouseDown={this.props.mousedown}
            onMouseUp={this.props.mouseup}
        >{this.props.isLeft ? '<' : '>'}</span>
    }
}

export default Arrow;