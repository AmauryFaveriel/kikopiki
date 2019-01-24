import React, { Component } from 'react';

class Arrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowLeftStyle: 'Arrow Arrow--left fas fa-arrow-left',
            arrowRightStyle: 'Arrow Arrow--right fas fa-arrow-right',
        }
    }
    render = () => {
        return <span 
            className={this.props.isLeft ? this.state.arrowLeftStyle : this.state.arrowRightStyle} 
            onMouseDown={this.props.mousedown}
            onMouseUp={this.props.mouseup}
        ></span>
    }
}

export default Arrow;