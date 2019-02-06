import React, { Component } from "react";

class Arrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowLeftStyle: "Arrow Arrow--left",
      arrowRightStyle: "Arrow Arrow--right"
    };
  }
  render() {
    return (
      <span
        className={
          (this.props.isLeft
            ? this.state.arrowLeftStyle
            : this.state.arrowRightStyle) +
          (this.props.hideIntro ? "" : "NotShow")
        }
        onClick={this.props.goToNextPainting}
      />
    );
  }
}

export default Arrow;
