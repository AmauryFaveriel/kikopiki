import React, { Component } from 'react';

class Arrow extends Component {
    render = () => {
        return <span 
            className={this.props.isLeft ? "arrow arrow--left" : "arrow arrow--right"} 
            onMouseDown={this.props.mousedown}
            onMouseUp={this.props.mouseup}
        >{this.props.isLeft ? '<' : '>'}</span>
    }
}

export default Arrow;