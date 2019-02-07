import React, { Component } from "react";

class Arrow extends Component {
    render() {
        return <span
            className={`Arrow Arrow${(this.props.isLeft ? '--left' : '--right') + (this.props.bool ? '' : '--hidden')}`}
            onClick={this.props.goScroll}
        />
    }
}

export default Arrow;
