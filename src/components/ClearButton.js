import React, { Component } from "react";
import "./ClearButton.css";
export class ClearButton extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.handleClick(this.props.children)}
        className="clearButton"
      >
        {this.props.children}
      </div>
    );
  }
}

export default ClearButton;
