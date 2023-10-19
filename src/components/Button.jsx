import React, { Component } from "react";
import "../App.css";

class Button extends Component {
  refreshPage() {
    window.location.reload(false);
  }
  render() {
    return (
      <div>
        <button className="btn" onClick={this.refreshPage}>
          Change Card
        </button>
      </div>
    );
  }
}

export default Button;
