import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  remove = id => {
    this.props.onDelete(id);
  };
  render() {
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          {" "}
          +
        </button>
        <button
          className="btn  btn-info  btn-sm m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>
        <button
          className="btn-danger btn-sm m-2"
          onClick={() => {
            this.remove(this.props.counter.id);
          }}
        >
          x
        </button>
        {/*  <ul>
          {this.state.tags.length > 1 &&
            this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>  */}
      </>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  getBadgeClasses() {
    // const { value } = this.state;
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }
}

export default Counter;
